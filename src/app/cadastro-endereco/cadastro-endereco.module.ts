import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroEnderecoRoutingModule } from './cadastro-endereco-routing.module';
import { PrimengModule } from '../utils/primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroComponent } from './tela-cadastro/cadastro.component';
import { EnderecoService } from './shared/cadastro.service';



@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    CadastroEnderecoRoutingModule,
    PrimengModule,
    ReactiveFormsModule,
  ],
  providers: [
    //CadastroService
  ]
})
export class CadastroEnderecoModule { }
