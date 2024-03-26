import { HeaderComponent } from './pages/header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/header/home/home.component';
import { SaudeComponent } from './pages/parts/saude/saude.component';
import { VidaComponent } from './pages/parts/vida/vida.component';
// const account = () => import('./pages/account/account.module').then(res => res.AccountModule);

const header = () => import('./pages/header/header.module').then(res => res.HeaderModule);


export const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'saude', component: SaudeComponent},
  {path: 'vida', component: VidaComponent},
  {path: 'header', component: HeaderComponent},
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  // { path: '', loadChildren: header},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
