import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
  constructor(private activatedRout: ActivatedRoute) {
    this.activatedRout.queryParams.subscribe((params) => {
      let productId = params['id'];
    });
  }
}
