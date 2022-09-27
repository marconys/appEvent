import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEventosPageRoutingModule } from './add-eventos-routing.module';

import { AddEventosPage } from './add-eventos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEventosPageRoutingModule
  ],
  declarations: [AddEventosPage]
})
export class AddEventosPageModule {}
