import { AccordionModule } from 'primeng/accordion';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { TableModule } from "primeng/table";
import { TabViewModule } from 'primeng/tabview';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DialogModule } from 'primeng/dialog';
import { BannerComponent } from "./banner/banner.component";
import { ButtonModule } from "primeng/button";
import { CardsComponent } from "./cards/cards.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BeneficiosComponent } from "./beneficios/beneficios.component";
import { BrowserModule } from "@angular/platform-browser";
import { AccordionComponent } from './accordion/accordion.component';
import { register } from 'swiper/element/bundle'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

register()

@NgModule({
  declarations: [
    BannerComponent,
    CardsComponent,
    BeneficiosComponent,
    AccordionComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    TableModule,
    BrowserAnimationsModule,
    TabViewModule,
    OverlayPanelModule,
    DialogModule,
    AccordionModule,
    BrowserModule,
    AccordionModule



  ],
  exports: [
    BannerComponent,
    CardsComponent,
    BeneficiosComponent,
    AccordionComponent

  ],
  providers: [

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule {

}
