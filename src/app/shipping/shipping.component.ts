import { CartService } from './../cart.service';
import { CartComponent } from './../cart/cart.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts = this.cartService.getShippingPrices();

  constructor(private cartService:CartService) { }


  ngOnInit(): void {
  }

}
