import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  searchTerm = new BehaviorSubject('')
  baseUrl='https://ecart-backend-angular.onrender.com'
  constructor(private http: HttpClient) { }
  register(user:any){
    return this.http.post(`${this.baseUrl}/user/register`,user)
  }
  login(user:any){
    return this.http.post(`${this.baseUrl}/user/login`,user)
  }
  getAllProducts(){
    return this.http.get(`${this.baseUrl}/all-products`)
  }
  getAProduct(id:any){
    return this.http.get(`${this.baseUrl}/view-product/${id}`)
  }
  appendToken(){
    let headers = new HttpHeaders()
    const token = sessionStorage.getItem('token')
    if(token){
      headers = headers.append("Authorization",`Bearer ${token}`)
    }
    return {headers}
  }
  addWishlist(product:any){
    return this.http.post(`${this.baseUrl}/add-wishlist`,product,this.appendToken())
  }
  getWishlist(){
    return this.http.get(`${this.baseUrl}/get-wishlist`, this.appendToken())
  }
  deleteWishlist(id:any){
    return this.http.delete(`${this.baseUrl}/product/delete-wishlist/${id}`, this.appendToken())
  }
  addToCart(product:any){
    return this.http.post(`${this.baseUrl}/product/add-cart`, product, this.appendToken())
  }
  getCart(){
    return this.http.get(`${this.baseUrl}/get-cart`, this.appendToken())
  }
  deleteCart(id:any){
    return this.http.delete(`${this.baseUrl}/product/delete-cart/${id}`, this.appendToken())
  }
  incrementCart(id:any){
    return this.http.get(`${this.baseUrl}/increment-cart/${id}`, this.appendToken())
  }
  decrementCart(id:any){
    return this.http.get(`${this.baseUrl}/decrement-cart/${id}`, this.appendToken())
  }
}
