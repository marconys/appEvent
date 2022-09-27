import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarEventosPageRoutingModule } from './mostrar-eventos-routing.module';

import { MostrarEventosPage } from './mostrar-eventos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarEventosPageRoutingModule
  ],
  declarations: [MostrarEventosPage]
})
export class MostrarEventosPageModule {}
