import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent } from './app.component';
import {UserModule} from './user/user.module';
import {ProductModule} from './product/product.module';
import {OrderModule} from './order/order.module';
import {HomeModule} from './home/home.module';
import { Ng2BootstrapModule} from 'ngx-bootstrap';
import { HttpModule, Http, RequestOptions, XHRBackend } from '@angular/http';

import {AppRoutingModule} from './app-routing/app-routing.module'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    ProductModule,
    OrderModule,
    HomeModule,
    HttpModule,
    Ng2BootstrapModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
