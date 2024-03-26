import { Component, EventEmitter, HostListener, OnDestroy, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-odonto',
  templateUrl: './odonto.component.html',
  styleUrls: ['./odonto.component.css']
})
export class OdontoComponent implements OnDestroy {
  title = 'Obtenha um seguro em que você possa se sentir confiante.'
  back = "../../../assets/img/back-odonto.png"
  constructor(
  ) {

  }

  ngOnDestroy(): void {

  }

  ngAfterViewInit(): void {
  }


}
