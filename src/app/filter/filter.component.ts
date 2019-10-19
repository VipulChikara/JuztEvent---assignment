import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() products

  @Input() filteredProducts;
  
  @Output() filtering = new EventEmitter<string>();

  value 
    
  constructor() { 
  }

  ngOnInit() {
  }

  filter(query: string) {
    console.log(query)
    console.log(this.products)
    if(this.products && this.filteredProducts){
    let q = query.toLowerCase();
    console.log(this.filteredProducts)
     this.products = this.filteredProducts;
     console.log(this.products)
    this.products = (query) ?
      this.products.filter(p => p.title.toLowerCase().includes(q)) : this.filteredProducts;
    console.log(this.products)
      this.filtering.emit(this.products)
  }
  }

}
