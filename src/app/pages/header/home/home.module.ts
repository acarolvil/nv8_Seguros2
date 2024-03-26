import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import { FormsModule } from '@angular/forms';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PanelModule } from 'primeng/panel';

import { SharedModule } from '../../../shared/shared.module';

import { HomeComponent } from './home.component';
import { HeaderModule } from '../header.module';
import { Header } from 'primeng/api';


@NgModule({
  declarations: [
    HomeComponent

  ],
  imports: [
    CommonModule,
    MenubarModule,
    FormsModule,
    PanelMenuModule,
    PanelModule,
    SharedModule,
    HeaderModule


  ]
})
export class HomeModule { }
