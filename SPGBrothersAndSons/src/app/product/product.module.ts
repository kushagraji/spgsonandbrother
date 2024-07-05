import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FlexModule } from '@angular/flex-layout';
import { HomeModule } from '../home/home.module';
import { HeaderModule } from '../header/header.module';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    FlexModule,
    HomeModule,
    HeaderModule,
    MatFormFieldModule
   
  ]
})
export class ProductModule { }
