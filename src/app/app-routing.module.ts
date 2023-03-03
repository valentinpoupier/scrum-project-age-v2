import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeChefComponent } from './modules/le-chef/le-chef.component';

const routes: Routes = [
  { path: 'reservation', loadChildren: () => import('./modules/reservation/reservation.module').then(m => m.ReservationModule) },
  { path: 'chef', component: LeChefComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
