import { NgModule,ChangeDetectionStrategy, Component} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { ProductModule } from './product/product.module';

import { HeaderModule } from './header/header.module';
import { ContactusModule } from './contactus/contactus.module';
import { FooterModule } from './footer/footer.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    ProductModule,
    HeaderModule,
    ContactusModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
