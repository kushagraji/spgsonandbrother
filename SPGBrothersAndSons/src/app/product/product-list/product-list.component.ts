import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products:Product[]=[
    {"id":1,"name":"Pen", "price":80, "image_url":"logo.png"  },
    {"id":2,"name":"Diary", "price":45, "image_url":"logo.png"  },
    {"id":3,"name":"Bottle", "price":66, "image_url":"logo.png"  },
    {"id":4,"name":"T-Shirt", "price":70, "image_url":"logo.png"  },
    {"id":5,"name":"Cap", "price":72, "image_url":"logo.png"  },
    {"id":5,"name":"Cap", "price":90, "image_url":"logo.png"  },
    {"id":5,"name":"Cap", "price":100, "image_url":"logo.png"  },
    {"id":5,"name":"Cap", "price":93, "image_url":"logo.png"  },
  ]

  filteredProducts:Product[]=this.products;
  sortOrder:String='';

  applyFilter(event:Event):void{
    let searchTerm = (event.target as HTMLInputElement).value;
    searchTerm = searchTerm.toLowerCase();

    this.filteredProducts = this.products.filter((product)=>product.name.toLowerCase().includes(searchTerm));
    
  }

  sortProducts(event:Event){
   this.sortOrder=(event.target as HTMLInputElement).value;
   
   if(this.sortOrder=='priceLowToHigh'){
    this.filteredProducts.sort((a,b)=> a.price-b.price);
   }else if(this.sortOrder=='priceHighToLow'){
    this.filteredProducts.sort((a,b)=>b.price-a.price);
   }
  }

}
