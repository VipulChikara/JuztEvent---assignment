import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Service/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  subscription: Subscription;
  products
  productsCopy;
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.subscription=this.productService.getProducts().valueChanges().subscribe(p=>{
    this.productsCopy = this.products=p
    })
  }

  change(value){
    this.products=value;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
