import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './local-data-services/in-memory-data.service';

import { AppComponent } from './app.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { NgbdModalContent } from './modal-component/modal.component';
import { ProductsService } from './products.service';
import { AppRoutingModule } from './app.router';
import { ProductSearchComponent } from './product-search/product-search.component';
import { OrderTableComponent } from './order-table/order-table.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    OrderSummaryComponent,
    OrderPageComponent,
    NgbdModalContent,
    ProductSearchComponent,
    OrderTableComponent
  ],
  entryComponents: [NgbdModalContent],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
