import { CartService } from './../cart.service';
import { Product, products } from './../produtos';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product:Product |undefined;

  constructor(private route:ActivatedRoute ,
              private cartService:CartService) { }

  ngOnInit(): void {
    const routeParams= this.route.snapshot.paramMap;
    const productIdFromRoute= Number(routeParams.get('productId'));
    this.product = products.find(product=>product.id===productIdFromRoute);
  }

  addTocart(product:Product){
    this.cartService.addToCart(product);
    window.alert('Seu produto foi adicionado ao carrinho!')
  }

}
