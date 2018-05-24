import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SearchBoxComponent } from '../components/search-box/search-box.component';
import { Api } from '../providers/providers';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../guards/auth.guard';
import { routing } from './app.routing';

import { HomePageComponent } from '../pages/home/home.component';
import { TableComponent } from '../components/table/table.component';
import { FilterPipe } from '../pipe/filter-currency.pipe';
import { FilterLojas } from '../pipe/filter-lojas.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    TableComponent,
    FilterPipe,
    FilterLojas,

    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    routing
  ],
  providers: [
    Api,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
