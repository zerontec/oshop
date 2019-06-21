import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;

  constructor(categoryService: CategoryService, private ProductService: ProductService) { 

    this.categories$ = categoryService.getCategory();
  }


save(product){

 this.ProductService.create(product);


}

  
  ngOnInit() {
  }

}
