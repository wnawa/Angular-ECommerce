import { Component  } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { OwlOptions } from 'ngx-owl-carousel-o';
// import './hero-details-box.css';
import 'rxjs';
import { LatestProductsComponent } from '../latest-products/latest-products.component';
import { ViewEncapsulation } from '@angular/compiler';
declare var $:any;
// import * as $ from 'jquery';
// import  "../../assets/css/owl.carousel.css";
// import  "../../assets/js/owl.carousel.min.js";
// import $ from "jquery";
// import jQuery from '@types/jquery';
// declare global {
//   interface Window {
//       jQuery: typeof jQuery;
//       $: typeof jQuery;
//   }
// }
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CarouselModule, SlickCarouselModule,LatestProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    // animation triggers go here
  ]
})
export class HomeComponent {
  // @ViewChild('slickModal', { static: true }) slickModal: SlickCarouselComponent;
  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: false,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: false,
    
  //   navSpeed: 700,
  //   navText: ['prev', 'next'],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     400: {
  //       items: 2
  //     },
  //     740: {
  //       items: 3
  //     },
  //     940: {
  //       items: 4
  //     }
  //   },
  //   nav: true
  // }
  slides = [
    {
      img: '../../assets/img/h4-slide.png',
      title: 'iphone 6 Plus',
      subtitle: 'Dual SIM',
    },
    {
      img: '../../assets/img/h4-slide2.png',
      title: 'buy one, get one 50% off',
      subtitle: 'school supplies & backpacks.*',
    },
    {
      img: '../../assets/img/h4-slide3.png',
      title: 'Apple Store Ipod',
      subtitle: 'Select Item',
    },
    {
      img: '../../assets/img/h4-slide4.png',
      title: 'Apple Store Ipod',
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
  
  };
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
    ],nextArrow: '<button type="button" class=" logoslick-next ">next</button>',
    prevArrow: '<button type="button" class="  logoslick-prev  ">prev</button>'}
  slidesLogos= [
    {img :"../../assets/img/brand1.png" },
    {img :"../../assets/img/brand2.png" },
    {img :"../../assets/img/brand3.png" },
    {img :"../../assets/img/brand4.png" },
    {img :"../../assets/img/brand5.png" },
    {img :"../../assets/img/brand6.png" },
    {img :"../../assets/img/brand1.png" },
    {img :"../../assets/img/brand2.png" }
  ];

    // latestproducts=[{

    //   { img:"",titel:"",price :"" },
    // }]
  // next() {
  //   // this.slickModal.slickNext();
  // }
  
  // prev() {
  //   // this.slickModal.slickPrev();
  // }
  // ngOnInit() {
  //   $('.owl-example').owlCarousel();
  // }
  // ngAfterContentInit() {
  //   $('.owl-example').owlCarousel();
  // } 
  // ngAfterViewInit(): void {
  //    $('.owl-example').owlCarousel();
  // }
  // $owlElement: any;
  // constructor(private el: ElementRef) {}
  // defaultOptions: any = {};
  // ngAfterViewInit() {
   
  //   this.$owlElement = $(this.el.nativeElement).owlCarousel(this.defaultOptions);
  // }

}
