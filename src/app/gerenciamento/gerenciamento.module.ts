import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/utils/primeng/primeng.module';
import { TabelaModule } from '../utils/tabela/tabela.module';
import { SourceComponent } from './source/source.component';
import { GerenciarFuncionariosComponent } from './gerenciar-funcionarios/gerenciar-funcionarios.component';
import { GerenciarConsultasComponent } from './gerenciar-consultas/gerenciar-consultas.component';
import { GerenciarEnderecosComponent } from './gerenciar-enderecos/gerenciar-enderecos.component';
import { GerenciarPacientesComponent } from './gerenciar-pacientes/gerenciar-pacientes.component';



@NgModule({
  declarations: [
    SourceComponent,
    GerenciarFuncionariosComponent,
    GerenciarConsultasComponent,
    GerenciarEnderecosComponent,
    GerenciarPacientesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimengModule,
    TabelaModule,
  ]
})
export class GerenciamentoModule { }
