import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Angular shopping cart';

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }
}
