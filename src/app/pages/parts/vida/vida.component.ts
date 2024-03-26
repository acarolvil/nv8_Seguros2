import { Component, EventEmitter, HostListener, OnDestroy, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-vida',
  templateUrl: './vida.component.html',
  styleUrls: ['./vida.component.css']
})
export class VidaComponent implements OnDestroy {
  title = 'Obtenha um seguro em que você possa se sentir confiante.'
  back = "../../../assets/img/back-vida.png"
  titulo = 'o324i'
  sub = 'o234i'
  items = [
    {
      label: 'Seguro de vida',
      routerLink: './vida',
    },
    { label: 'Seguro de saúde',
    routerLink: 'alunos', },
    { label: 'Seguro odontológico',
    routerLink: 'alunos', },
    { label: 'Seguro empresarial',
    routerLink: 'alunos', },
    { label: 'Seguro em geral',
    routerLink: 'alunos', },

  ]
  constructor(
  ) {

  }

  ngOnDestroy(): void {

  }

  ngAfterViewInit(): void {
  }


}
