import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeusAgendamentosComponent } from './meus-agendamentos/meus-agendamentos.component';
import { PrimengModule } from '../utils/primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TabelaModule } from '../utils/tabela/tabela.module';



@NgModule({
  declarations: [
    MeusAgendamentosComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    ReactiveFormsModule,
    TabelaModule

  ]
})
export class MeusAgendamentosModule { }
