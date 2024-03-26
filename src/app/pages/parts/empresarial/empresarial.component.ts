import { Component, EventEmitter, HostListener, OnDestroy, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-empresarial',
  templateUrl: './empresarial.component.html',
  styleUrls: ['./empresarial.component.css']
})
export class EmpresarialComponent implements OnDestroy {
  title = 'Obtenha um seguro em que você possa se sentir confiante.'
  back = "../../../assets/img/back-empresarial.png"
  constructor(
  ) {

  }

  ngOnDestroy(): void {

  }

  ngAfterViewInit(): void {
  }


}
