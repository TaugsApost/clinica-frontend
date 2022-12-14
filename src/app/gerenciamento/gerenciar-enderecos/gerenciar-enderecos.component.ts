import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EnderecoService } from 'src/app/cadastro-endereco/shared/cadastro.service';
import { Endereco, EnderecoFilter } from 'src/app/cadastro-endereco/shared/endereco.model';
import { BaseEndereco } from 'src/app/model/entidades.model';
import { BasePesquisarComponent } from 'src/app/utils/classes-bases/pesquisar.component';
import { MensagensService } from 'src/app/utils/mensagens/mensagens.service';

@Component({
  selector: 'app-gerenciar-enderecos',
  templateUrl: './gerenciar-enderecos.component.html',
  styleUrls: ['./gerenciar-enderecos.component.scss']
})
export class GerenciarEnderecosComponent extends BasePesquisarComponent<EnderecoFilter, Endereco> implements OnInit {

  constructor(service: EnderecoService, activatedRoute: ActivatedRoute, _router: Router, msgService: MensagensService) {
    super(service, activatedRoute, _router, 'estadio', msgService);
    this.formulario = new FormGroup({
      cep: new FormControl(null)
    });
  }

  ngOnInit(): void {
    this.columns = [
      { value: 'cep', nome: 'CEP', align: 'center', size: '20%' },
      { value: 'logradouro', nome: 'Logradouro', size: '20%' },
      { value: 'bairro', nome: 'Bairro', size: '20%' },
      { value: 'cidade', nome: 'Cidade', size: '20%' },
      { value: 'estado', nome: 'Estado', size: '20%' }
    ];
  }

}
