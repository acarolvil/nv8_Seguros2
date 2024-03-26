import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './pages/header/header.module';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/header/home/home.component';
import { HomeModule } from './pages/header/home/home.module';
import { SharedModule } from './shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MenuModule } from 'primeng/menu';
import * as Hammer from 'hammerjs'
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
export class MyHammerConfig extends HammerGestureConfig {
  override overrides = <any>{
    'swipe': { direction: Hammer.DIRECTION_ALL }
  }
}
@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // HomeComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterOutlet,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    HomeModule,
    SharedModule,
    ButtonModule,
    SidebarModule,
    BrowserAnimationsModule,
    MenuModule,
    MatCardModule,




  ],
  providers: [

    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    },
      provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
