import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarEventosPage } from './mostrar-eventos.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarEventosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarEventosPageRoutingModule {}
