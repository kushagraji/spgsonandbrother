import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { HeaderComponent } from './header/header/header.component';
import { ContactusComponent } from './contactus/contactus/contactus.component';


const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'product', component:ProductListComponent},
  {path:'contactus', component:ContactusComponent},
  {path:'header', component:HeaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
