import { Component, EventEmitter, HostListener, OnDestroy, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-saude',
  templateUrl: './saude.component.html',
  styleUrls: ['./saude.component.css']
})
export class SaudeComponent implements OnDestroy {
  title = 'Obtenha um seguro em que você possa se sentir confiante.'
  back = "../../../assets/img/back-saude.png"
  constructor(
  ) {

  }

  ngOnDestroy(): void {

  }

  ngAfterViewInit(): void {
  }


}
