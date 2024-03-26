import { Component, EventEmitter, HostListener, OnDestroy, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { Input } from '@angular/core';
import {  ElementRef, AfterViewInit } from '@angular/core';
declare var $: any;
@Component({
    selector: 'app-beneficios',
    templateUrl: './beneficios.component.html',
    styleUrls: ['./beneficios.component.css']
})
export class BeneficiosComponent implements OnDestroy {
  @Input() titulo_banner: string = '';

    constructor(
      private elementRef: ElementRef
    ) {


    }


    ngAfterViewInit(): void {

    }
    ngOnDestroy(): void {

    }



}
