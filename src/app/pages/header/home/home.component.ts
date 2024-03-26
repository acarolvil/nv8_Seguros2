import { Component } from '@angular/core';

@Component({
  selector: 'app-home',

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Obtenha um seguro em que você possa se sentir confiante.'
  back = "../../../assets/img/back-initial 1.svg"
  titulo = 'Seguro de vida'
  sub = 'oi'
  backgroundImageUrl = "../../../assets/img/back-initial 1.svg"
  items = [
    {
      label: 'Seguro de vida',
      routerLink: '../vida',
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
}
