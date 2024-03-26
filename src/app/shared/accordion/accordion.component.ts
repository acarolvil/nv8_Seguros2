import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery'

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // Inicialize o Accordion quando o componente for inicializado
    // $( "#panels" )
  }
}
