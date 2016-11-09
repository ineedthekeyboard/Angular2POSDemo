import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderPageComponent } from './order-page/order-page.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

const routes: Routes = [
  { path: '', redirectTo: '/order', pathMatch: 'full' },
  { path: 'order',  component: OrderPageComponent },
  { path: 'ordersummary', component: OrderSummaryComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
