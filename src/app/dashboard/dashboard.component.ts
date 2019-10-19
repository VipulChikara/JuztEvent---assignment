import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Service/product.service';
import { Subscription } from 'rxjs';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  subscription: Subscription;
  products
  productsCopy;
  constructor(private productService:ProductService,
              private ngxService: NgxUiLoaderService) { }

  ngOnInit() {
    this.ngxService.start()

    this.subscription=this.productService.getProducts().valueChanges().subscribe(p=>{
    this.productsCopy = this.products=p
    this.ngxService.stop()
    })
    
  }

  change(value){
    this.products=value;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
