import { Component, OnInit } from '@angular/core';
import { productsModel } from 'src/app/product.model';
import { CartService } from '../../services/cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: productsModel = [];
  
  constructor(private cartService: CartService
) { this.cart = this.cartService.getCart();}

  ngOnInit(): void {
  }

  getCounter() {
    return this.cartService.getCounter();
  }

  getSumPrice() {
    return this.cartService.getsumPrice();
  }
}
