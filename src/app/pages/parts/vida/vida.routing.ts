import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VidaComponent } from './vida.component';

// const account = () => import('./pages/account/account.module').then(res => res.AccountModule);


const routes: Routes = [

    { path: '', component: VidaComponent

   },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class VidaRoutingModule { }
