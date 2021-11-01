import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any;
  token!: string;

  constructor(public local: LocalStorageService, private ps: ProductsService, private router: Router) { 
    try {
      this.token = this.local.get('user').token
      this.ps.getAllProducts(this.token).subscribe(
        data => {
          this.products = data;
        },
        err => {
          this.router.navigate(['/signin'])
        }
      );
    } catch (error) {
      console.log(error);
      this.router.navigate(['/signin'])
    }
  }

  ngOnInit(): void {

  }

  signout(){
    this.local.clear();
    this.router.navigate(['/signin'])
  }

}
