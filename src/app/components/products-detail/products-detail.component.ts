import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../../services/product.service';
import { productDetails } from '../../models/productDetails.model';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  productDetails: productDetails;

  constructor(private route: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      const selectedProductId: number = params['id'];
      this.productService.getProductById(selectedProductId)
      .subscribe( respdata => {
        this.productDetails = respdata
      })
    })
  }

}
