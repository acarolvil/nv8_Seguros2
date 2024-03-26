import { Component, EventEmitter, HostListener, OnDestroy, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import Swiper from 'swiper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnDestroy {
  @Input() titulo_cards: string = '';
  @Input() teste: string = '';
  @Input() backgroundImageUrl = '';
  @Input() titulo = '';
  @Input() sub = '';
  mySwiper?: Swiper;
  slidesPerView: number = 4.5;
  mobileCard = false
  constructor(
    private router: Router

  ) {
    this.adjustSlidesPerView(window.innerWidth);
  }

  ngOnDestroy(): void {

  }

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper', {
      speed: 400,
      slidesPerView: 1.2,

      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.adjustSlidesPerView(event.target.innerWidth);
  }
  adjustSlidesPerView(windowWidth: number) {
    this.mobileCard = false
    if (windowWidth <= 1600) {
      console.log('1400', this.slidesPerView)
      this.slidesPerView =3.5;
      console.log(this.slidesPerView)
      if (windowWidth <= 1300) {
        console.log('teeeeste')
        this.slidesPerView =2.5;

        if (windowWidth <= 960) {
          this.mobileCard = true
          this.slidesPerView = 1;
          console.log('960')

        }


      }
    }

  }


  teste1():void{

    if (this.titulo == 'Seguro de vida'){
      this.router.navigate(['vida']);
      console.log('oooi')

    }
  }

}



