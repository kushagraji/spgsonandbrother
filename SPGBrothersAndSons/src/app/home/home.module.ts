import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HeaderModule } from '../header/header.module';





@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HeaderModule,
   
  ],
  exports:[
    HomepageComponent
  ]
})
export class HomeModule { }
