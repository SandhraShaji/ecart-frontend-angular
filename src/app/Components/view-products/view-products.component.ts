import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit{
  product: any={}
  constructor(private api: ApiService, private route: ActivatedRoute){}
  ngOnInit(): void {
    this.viewProduct()
  }
  viewProduct(){
    this.route.params.subscribe((res:any)=>{
      console.log(res);
      const {id} = res;
      console.log(id);
      this.api.getAProduct(id).subscribe((res:any)=>{
        console.log(res);
        this.product=res;
      })
    })
  }
  addToWishlist(){
    this.api.addWishlist(this.product).subscribe({
      next:(res:any)=>{
        console.log(res);
      },
      error:(err)=>{
        alert("Already in wishlist")
      }
    })
  }
  addToCartProduct(product:any){
    Object.assign(product,{quantity:1})
    console.log(product);
    this.api.addToCart(product).subscribe((res:any)=>{
      console.log(res);
    })
  }
}
