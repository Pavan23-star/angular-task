import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService } from '../../services/product.service';
import { productCard } from '../../models/productCard.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  productsList: productCard[] = [];
  paginationHelper = {
    count: 0,
    page: 1,
    pageSize: 12,
    next: '',
    previous: ''
  };

  params = new HttpParams()
    .set('active', 'true')
    .set('listing', 'true')
    .set('ordering', '-created')
    .set('page_size', this.paginationHelper.pageSize.toString())
    .set('web_url', 'https://eventshoppe.in')


  constructor(private router: Router,
              private route: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(queryParamMap => {
      this.paginationHelper.page = parseInt(queryParamMap.get('page') || '1', 10);
      this.params = this.params.set('page', this.paginationHelper.page.toString())

      this.productService.getProducts(this.params)
      .subscribe(respdata => {
      this.productsList = respdata.results
      this.paginationHelper.count = respdata.count;
      this.paginationHelper.next = respdata.next;
      this.paginationHelper.previous = respdata.previous;
    })
    });
  }

  onPageChange(page) {
    this.productsList = []
    const queryParams = {
      page: page
    };
    this.router.navigate(['.'], {
      relativeTo: this.route,
      queryParams: queryParams
    });
  }

}
