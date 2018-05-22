export default class ProductModel {
  
    price: number;
    product: string;
    stock: boolean;
    store: string;
    updated_at: string;

    constructor (data: Object = {}) {

        if (data.hasOwnProperty('price')) {
            this.price = data['price'];
        }

        if (data.hasOwnProperty('product')) {
            this.product = data['product'];
        }

        if (data.hasOwnProperty('stock')) {
            this.stock = data['stock'];
        }

        if (data.hasOwnProperty('store')) {
            this.store = data['store'];
        }

        if (data.hasOwnProperty('updated_at')) {
            this.updated_at = data['updated_at'];
        }

    }
}