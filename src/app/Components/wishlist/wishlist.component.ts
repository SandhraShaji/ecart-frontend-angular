import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit{
  wishlistProducts:any[]=[];
  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.getWishlist()
  }
  getWishlist(){
    this.api.getWishlist().subscribe((res:any)=>{
      this.wishlistProducts=res;
      console.log(res);
      console.log(this.wishlistProducts);
    })
  }
  deleteWishlistProduct(id:any){
    this.api.deleteWishlist(id).subscribe((res:any)=>{
      console.log(res);
      this.getWishlist()
    })
  }
  addToCartProduct(product:any){
    Object.assign(product,{quantity:1})
    console.log(product);
    this.api.addToCart(product).subscribe((res:any)=>{
      console.log(res);
    })
    this.deleteWishlistProduct(product.id)
  }
}
