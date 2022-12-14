import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GaleriaComponent } from './galeria.component';
import { GaleriaRoutingModule } from './galeria-routing.module';
import { PrimengModule } from 'src/app/utils/primeng/primeng.module';



@NgModule({
  declarations: [
    GaleriaComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    ReactiveFormsModule,
    GaleriaRoutingModule
  ]
})
export class GaleriaModule { }
