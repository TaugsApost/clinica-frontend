import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { PrimengModule } from '../utils/primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroComponent } from './tela-cadastro/cadastro.component';
import { CadastroService } from './shared/cadastro.service';



@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    PrimengModule,
    ReactiveFormsModule,
  ],
  providers: [
    //CadastroService
  ]
})
export class CadastroModule { }
