import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { FinderService } from 'src/app/services/finder.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() productList: Product[] = [];
  constructor(private service: FinderService) { }

  ngOnInit(): void {
  }

}
