import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { LatestProductsComponent } from '../latest-products/latest-products.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    SlickCarouselModule,
    LatestProductsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // Main courasoul configuration
  slides = [
    {
      img: '../../assets/img/h4-slide.png',
      title: 'iphone ',
      greentext: '6 Plus',
      subtitle: 'Dual SIM',
    },
    {
      img: '../../assets/img/h4-slide2.png',
      title: 'buy one, get one ',
      greentext: '50% off',
      subtitle: 'school supplies & backpacks.*',
    },
    {
      img: '../../assets/img/h4-slide3.png',
      title: 'Apple ',
      greentext: 'Store Ipod',
      subtitle: 'Select Item',
    },
    {
      img: '../../assets/img/h4-slide4.png',
      title: 'Apple ',
      greentext: 'Store Ipod',
      subtitle: '&Phone',
    },
  ];
  slideConfig = {
    accessibility: true,
    dots: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    isFinite: true,
    arrows: true,
    nextArrow:
      '<i class="fa fa-chevron-right mainslick-next" style="color: #5a88ca;"></i>',
    prevArrow:
      '<i class="fa fa-chevron-left mainslick-prev" style="color: #5a88ca;"></i>',
  };

  // Brands corasoul configuration
  slideConfigLogos = {
    accessibility: true,
    dots: false,
    slidesToShow: 4,
    autoplay: false,
    autoplaySpeed: 1500,
    isFinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: '<button type="button" class=" logoslick-next ">next</button>',
    prevArrow: '<button type="button" class="  logoslick-prev  ">prev</button>',
  };
  slidesLogos = [
    { img: '../../assets/img/brand1.png' },
    { img: '../../assets/img/brand2.png' },
    { img: '../../assets/img/brand3.png' },
    { img: '../../assets/img/brand4.png' },
    { img: '../../assets/img/brand5.png' },
    { img: '../../assets/img/brand6.png' },
    { img: '../../assets/img/brand1.png' },
    { img: '../../assets/img/brand2.png' },
  ];

  // Latest products corasoul configuration
  slideConfiglatestProducts = {
    accessibility: true,
    dots: false,
    slidesToShow: 5,
    autoplay: false,
    autoplaySpeed: 1500,
    isFinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: '<button type="button" class=" logoslick-next ">next</button>',
    prevArrow: '<button type="button" class="  logoslick-prev  ">prev</button>',
  };
}

