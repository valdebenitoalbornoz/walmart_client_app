import { Component } from '@angular/core';
import { Product } from './models/product.model';
import { FinderService } from './services/finder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productList: Product[] = [];
  loading = false;
  search: string = '';
  
  get noResultText() {
    return !this.search || this.search.length < 3 ? 'Busque su producto 🔎' :
      !this.productList.length ? 'No se encontraron coincidencias' : '';
  } 
  
  constructor(private service: FinderService) {

  }

  onSearch(search: string) {
    this.search = search;
    this.loading = true;
    this.service.find(search)
      .subscribe((products: Product[]) => {
        this.productList = products;
        this.loading = false;
      }, error => {
        console.log(error);
      });
  }

}
