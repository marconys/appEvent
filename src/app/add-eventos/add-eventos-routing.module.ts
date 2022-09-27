import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEventosPage } from './add-eventos.page';

const routes: Routes = [
  {
    path: '',
    component: AddEventosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEventosPageRoutingModule {}
