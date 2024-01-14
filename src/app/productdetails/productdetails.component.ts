import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServices } from '../services/products/products.services';
import { Product } from '../shared/models/Product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
  productId: number | undefined;
  product: Product | undefined;
  constructor(
    private activatedRout: ActivatedRoute,
    private productService: ProductServices
    ) {
    this.activatedRout.params.subscribe((params) => {
      this.productId = Number(params['id']);

      this.productService
      .getProductById(this.productId)
      .then((returnedproduct  ) => {
        this.product = returnedproduct;
      });
    });
  }




}
