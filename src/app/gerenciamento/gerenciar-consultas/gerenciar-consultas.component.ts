import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, SelectControlValueAccessor } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { AgendamentoService } from 'src/app/cadastro/agendamento/service/agendamento.service';
import { MedicoService } from 'src/app/cadastro/funcionario/service/medico.service';
import { Agenda } from 'src/app/model/entidades.model';
import { BasePesquisarComponent } from 'src/app/utils/classes-bases/pesquisar.component';
import { MensagensService } from 'src/app/utils/mensagens/mensagens.service';

@Component({
  selector: 'app-gerenciar-consultas',
  templateUrl: './gerenciar-consultas.component.html',
  styleUrls: ['./gerenciar-consultas.component.scss']
})
export class GerenciarConsultasComponent extends BasePesquisarComponent<Agenda, Agenda> implements OnInit {

  listaMedicos: SelectItem[] = [];

  constructor(service: AgendamentoService, activatedRoute: ActivatedRoute, _router: Router, msgService: MensagensService,
    private medicoService: MedicoService) {
    super(service, activatedRoute, _router, 'estadio', msgService);
    this.formulario = new FormGroup({
      nome: new FormControl(null),
      horario: new FormControl(null),
      data: new FormControl(null),
      codigoMedico: new FormControl(null),
    });
  }

  ngOnInit(): void {
    this.columns = [
      { value: 'nome', nome: 'Nome do Paciente', size: '20%' },
      { value: 'nomeMedico', nome: 'Nome do Médico', size: '20%' },
      { value: 'data', nome: 'Data da Consulta', size: '20%', align: 'center' },
      { value: 'horario', nome: 'Horario da Consulta', size: '20%', align: 'center' }
    ];
    this.criarListas();
  }

  private criarListas() {
    this.criarListaMedicos();
  }

  private criarListaMedicos() {
    this.medicoService.listar().subscribe(medicos => {
      if (medicos.length > 0) {
        medicos.forEach(medico => {
          this.listaMedicos.push(
            {
              label: medico.nome,
              value: medico.codigo
            }
          );
        });
      }
    })
  }

}
