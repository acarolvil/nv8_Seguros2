import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { MenubarModule } from 'primeng/menubar';
import { FormsModule } from '@angular/forms';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PanelModule } from 'primeng/panel';

import { SharedModule } from '../../shared/shared.module';
import { VidaComponent } from '../parts/vida/vida.component';
import { SegurosModule } from '../parts/seguros.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { SidebarModule } from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [
    HeaderComponent,
    // VidaComponent,
    // HomeComponent



  ],
  imports: [
    CommonModule,
    SidebarModule,
    MenubarModule,
    FormsModule,
    PanelMenuModule,
    PanelModule,
    SidebarModule,
    BrowserAnimationsModule,
    MenuModule,

    SharedModule,



  ],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModule { }
