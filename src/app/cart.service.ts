import { HttpClient } from '@angular/common/http';
import { Product, products } from './produtos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items:Product[]=[];

  constructor(private http:HttpClient) { }

  addToCart(product:Product){
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  clearCrd(){
    this.items=[]
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, valor: number}[]>('/assets/shipping.json');
  }
}
