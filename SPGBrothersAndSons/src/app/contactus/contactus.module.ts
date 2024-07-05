import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactusComponent } from './contactus/contactus.component';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [
    ContactusComponent
  ],
  imports: [
    CommonModule,
    HeaderModule
  ]
})
export class ContactusModule { }
