import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';
import { VidaComponent } from './vida.component';
import { SharedModule } from '../../../shared/shared.module';
import { VidaRoutingModule } from './vida.routing';
import { AppRoutingModule } from '../../../app.routing';
import { HeaderModule } from '../../header/header.module';

@NgModule({
  declarations: [
    VidaComponent,


  ],
  imports: [
    CommonModule,
    SharedModule,
    HeaderModule


  ],

})
export class VidaModule { }
