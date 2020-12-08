import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

import { productCard } from '../../../models/productCard.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: productCard;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSelectingProduct(){
    this.router.navigate(['/product', this.product.id])
  }

}
