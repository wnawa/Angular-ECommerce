import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SlickCarouselModule } from 'ngx-slick-carousel';
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
  imports: [RouterLink, CarouselModule, SlickCarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // @ViewChild('slickModal', { static: true }) slickModal: SlickCarouselComponent;

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

  next() {
    // this.slickModal.slickNext();
  }
  
  prev() {
    // this.slickModal.slickPrev();
  }
  
}
