import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { ProductCartComponent } from './productcart/productcart.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

//import 'zone.js/dist/zone';
//import '@webcomponents/custom-elements/src/native-shim';

@NgModule({
  declarations: [ProductCartComponent],
  imports: [BrowserModule, Angular2FontawesomeModule],
  entryComponents: [ProductCartComponent]
})
export class ProductCartModule {
  constructor(private injector: Injector) {
    console.log('ProductCartModule.constructor : Creating and Defining CustomElement : ProductCartComponent');
    const productcart = createCustomElement(ProductCartComponent, { injector });
    let existing = customElements.get('product-cart');
    console.log('existing=' + existing);
    customElements.define('product-cart', productcart);
    console.log('customElements.define(product-cart) was successful...');
  }

  ngDoBootstrap() {}
}
