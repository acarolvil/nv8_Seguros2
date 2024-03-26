import { Component, AfterViewInit, EventEmitter, HostListener, OnDestroy, TemplateRef, ViewChild, ElementRef, Renderer2, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Sidebar } from 'primeng/sidebar';
import { MenuItem } from 'primeng/api';
import { Input } from '@angular/core';
import { Menu } from 'primeng/menu';
declare var M: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  title = 'Obtenha um seguro em que você possa se sentir confiante.'
  back = "../../../assets/img/back-initial 1.svg"
  titulo = 'Seguro de vida'
  sub = 'oi'
  backgroundImageUrl = "../../../assets/img/back-initial 1.svg"
  sidebarVisible = false
  displaySidebar: boolean = false;
  position: string = 'left';
  @Input() items: { label: string; icon?: string, routerLink: string}[] = []
  menuOpen = false
  @ViewChild('menuNav') menuNav!: ElementRef;

 @ViewChild('menu') menu!: Menu;
  constructor(
  ) {

  }

  ngAfterViewInit(): void {

    $(window).on('scroll', function () {
      if ($(this).scrollTop()! > 50) { // Se a rolagem for maior que 50 pixels
        $('.menu-desktop').addClass('active'); // Altere para a cor desejada
      } else {
        $('.menu-desktop').removeClass('active'); // Volte para a cor padrão
      }
    });

    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, {
        edge: 'left', // Defina a borda da sidenav
        inDuration: 250, // Duração da animação de entrada
        outDuration: 200 // Duração da animação de saída
      });
    });
  }



  // toggleSidebar() {
  //   var instance = M.Sidenav.getInstance(document.querySelector('.sidenav'));
  //   instance.isOpen ? instance.close() : instance.open();

  // }



  // ngOnchange(){
  //   console.log(this.menuClose)
  // }

  closeAll(event: MouseEvent){
    this.menu.hide();
  }


  toggleMenu(event: MouseEvent) {
    this.menu.toggle(event);
  }

  verifica(event: TouchEvent){

    document.addEventListener('DOMContentLoaded', function () {
      var sidenavOverlay = document.querySelector('.sidenav-overlay');

      if (sidenavOverlay) {
        console.log('oi')
        var computedStyle = window.getComputedStyle(sidenavOverlay);
        var displayValue = computedStyle.getPropertyValue('display');

        if (displayValue === 'none') {
          console.log('O elemento .sidenav-overlay está com display none.');
        }
      }

    })

    console.log('oi')


  }


}
