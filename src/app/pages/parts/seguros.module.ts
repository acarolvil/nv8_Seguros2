import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VidaComponent } from './vida/vida.component';
import { BannerComponent } from '../../shared/banner/banner.component';
import { SharedModule } from '../../shared/shared.module';
import { Router } from '@angular/router';
import { OdontoComponent } from './odonto/odonto.component';
import { EmpresarialComponent } from './empresarial/empresarial.component';
import { SaudeComponent } from './saude/saude.component';
import { VidaModule } from './vida/vida.module';
import { VidaRoutingModule } from './vida/vida.routing';
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [
    // VidaComponent,
    OdontoComponent,
    EmpresarialComponent,
    SaudeComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    VidaModule,
    VidaRoutingModule,




  ],

})
export class SegurosModule { }
