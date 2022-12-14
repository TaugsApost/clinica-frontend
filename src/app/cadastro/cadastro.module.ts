import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../utils/primeng/primeng.module';
import { FuncionarioComponent } from './funcionario/tela-funcionario/funcionario.component';
import { PacienteComponent } from './paciente/tela-paciente/paciente.component';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { AgendamentoComponent } from './agendamento/tela-agendamento/agendamento.component';



@NgModule({
  declarations: [
    AgendamentoComponent,
    FuncionarioComponent,
    PacienteComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    PrimengModule,
    ReactiveFormsModule,
    CadastroRoutingModule
  ]
})
export class CadastroModule { }
