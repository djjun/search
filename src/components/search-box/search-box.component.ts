import { Component, EventEmitter } from '@angular/core';
import { Api } from '../../providers/providers';
import { environment } from '../../environments/environment';
import ProductModel from '../../models/product.model';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})

export class SearchBoxComponent {

    private hasData: boolean = environment.hasData;
    private products: any = {
        top: [],
        products: []
    };

    private lojas:any = [];
    private allLojas:any = [];

    private form = {
        search : '',
        block : '',
        stock : true
    }

    private moneyRange:number = 100;

    constructor(
        private http : Api
    ) {
    }

    search() {
        this.http
            .get(`?search=${this.form.search}&block=${this.form.block}&stock=${this.form.stock}`)
            .subscribe( resp => {

                let data = this.hasData ? JSON.parse(resp['data']) : resp;

                this.products.top = data['top10'].map(data => new ProductModel(data));
                this.products.products = data['products'].map(data => new ProductModel(data));

                this.filterLojas(this.products.products);

            })
    }

    filterLojas(data) {
        let arrayLojas = [];

        data.map( value => {
            if(arrayLojas.indexOf(value.store) < 0 ) {
                arrayLojas.push(value.store);
            } 
        })

        arrayLojas.map( value => {
            this.lojas.push({
                name: value,
                checked: false
            })
        });
    }

}