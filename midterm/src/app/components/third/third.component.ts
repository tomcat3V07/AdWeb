import { Component, OnInit } from '@angular/core';
import { productsModel } from 'src/app/product.model';
import { CartService } from '../../services/cart.service'
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  
  constructor(private productsService:ProductService
    ,private cartService:CartService
    )
{ }

  ngOnInit(): void {
  }

  getAllProduct() {
    return this.productsService.getAllProduct()
  }

  addToCart(p_id: number) {
    this.cartService.add(p_id);
    this.cartService.minus(p_id);
  }

}
