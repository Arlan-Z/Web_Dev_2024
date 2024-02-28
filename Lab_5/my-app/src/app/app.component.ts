import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];
  products: { id: number, name: string, category: string, likes: number}[];

  selectedCategory: string | null = null;
  selectedProducts: any[] = [];

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.selectedProducts = this.products.filter(product => product.category === category);
  }

  likeProduct(product: any) {
    product.likes++;
    console.log("app.likeProduct worked success");
    // console.log(product);
  }

  removeProduct(product: any) {
    this.products = this.products.filter(p => p.id !== product.id);
    this.selectedProducts = this.selectedProducts.filter(p => p.id !== product.id);
    console.log("app.removeProduct worked success");
  }

  constructor(){
    this.products = [
    { id: 1, name: 'Product 1', category: 'Category 1', likes: 0 },
    { id: 2, name: 'Product 2', category: 'Category 1', likes: 0 },
    { id: 3, name: 'Product 3', category: 'Category 1', likes: 0 },
  ];
  }
}