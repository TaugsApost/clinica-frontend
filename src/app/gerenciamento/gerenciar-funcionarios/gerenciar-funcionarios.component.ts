import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, SelectControlValueAccessor } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { FuncionarioService } from 'src/app/cadastro/funcionario/service/funcionario.service';
import { Funcionario, FuncionarioFilter } from 'src/app/model/entidades.model';
import { BasePesquisarComponent } from 'src/app/utils/classes-bases/pesquisar.component';
import { MensagensService } from 'src/app/utils/mensagens/mensagens.service';

@Component({
  selector: 'app-gerenciar-funcionarios',
  templateUrl: './gerenciar-funcionarios.component.html',
  styleUrls: ['./gerenciar-funcionarios.component.scss']
})
export class GerenciarFuncionariosComponent extends BasePesquisarComponent<FuncionarioFilter, Funcionario> implements OnInit {

  listaOperadores: SelectItem[] = [];

  constructor(service: FuncionarioService, activatedRoute: ActivatedRoute, _router: Router, msgService: MensagensService) {
    super(service, activatedRoute, _router, 'estadio', msgService);

    this.formulario = new FormGroup({
      nome: new FormControl(null),
      cidade: new FormControl(null),
      estado: new FormControl(null),
      bairro: new FormControl(null),
      salario: new FormControl(null),
      dataContrato: new FormControl(null),
      operadorSalario: new FormControl('='),
      operadorData: new FormControl('='),
    });

  }

  ngOnInit(): void {
    this.columns = [
      { value: 'nome', nome: 'Nome' },
      { value: 'salario', nome: 'Salario', align: 'center' },
      { value: 'dataContrato', nome: 'Data de Contrato', align: 'center' }
    ];
    this.listaOperadores = [
      {
        label: '=',
        value: '='
      },
      {
        label: '>',
        value: '>'
      },
      {
        label: '<',
        value: '<'
      }
    ];
  }

}
