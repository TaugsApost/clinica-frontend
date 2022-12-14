import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { AgendamentoService } from 'src/app/cadastro/agendamento/service/agendamento.service';
import { StorageService } from 'src/app/estrutura/auth/shared/storege.service';
import { Agenda } from 'src/app/model/entidades.model';
import { BasePesquisarComponent } from 'src/app/utils/classes-bases/pesquisar.component';
import { MensagensService } from 'src/app/utils/mensagens/mensagens.service';

@Component({
  selector: 'app-meus-agendamentos',
  templateUrl: './meus-agendamentos.component.html',
  styleUrls: ['./meus-agendamentos.component.scss']
})
export class MeusAgendamentosComponent extends BasePesquisarComponent<Agenda, Agenda> implements OnInit {

  listaMedicos: SelectItem[] = [];

  constructor(service: AgendamentoService, activatedRoute: ActivatedRoute, _router: Router, msgService: MensagensService,
    private storageService: StorageService) {
    super(service, activatedRoute, _router, 'estadio', msgService);
    this.formulario = new FormGroup({
      nome: new FormControl(null),
      horario: new FormControl(null),
      data: new FormControl(null),
      codigoMedico: new FormControl(this.storageService.getUser().id),
    });
  }

  ngOnInit(): void {
    this.columns = [
      { value: 'nome', nome: 'Nome do Paciente', size: '20%' },
      { value: 'data', nome: 'Data da Consulta', size: '20%', align: 'center' },
      { value: 'horario', nome: 'Horario da Consulta', size: '20%', align: 'center' }
    ];
  }

}
