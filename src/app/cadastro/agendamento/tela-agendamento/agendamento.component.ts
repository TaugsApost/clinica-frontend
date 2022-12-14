import { Component, OnInit, ɵisListLikeIterable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { Agenda, AgendaFilter, Especialidade } from 'src/app/model/entidades.model';
import { BaseEditComponent } from 'src/app/utils/classes-bases/editar.component';
import { MensagensService } from 'src/app/utils/mensagens/mensagens.service';
import { MedicoService } from '../../funcionario/service/medico.service';
import { AgendamentoService } from '../service/agendamento.service';
import { EspecialidadeService } from '../service/especialidade.service';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss']
})
export class AgendamentoComponent extends BaseEditComponent<Agenda, Agenda> implements OnInit {

  listaEspecialidades: SelectItem[] = [];
  listaMedicos: SelectItem[] = [];
  formNome: FormGroup;
  listaHorariosDisponiveis: any[] = [];

  constructor(private _service: AgendamentoService, activatedRoute: ActivatedRoute, _router: Router, msgService: MensagensService,
    private medicoService: MedicoService, private especialidadeService: EspecialidadeService) {
    super(_service, activatedRoute, _router, '', msgService);

    this.formulario = new FormGroup({
      codigo: new FormControl(0),
      codigoMedico: new FormControl(null, Validators.required),
      data: new FormControl(null, Validators.required),
      nome: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      telefone: new FormControl(null, Validators.required),
      horario: new FormControl(null, Validators.required),
      labelHorario: new FormControl(null, Validators.required),
      especialidade: new FormControl(null, Validators.required)
    });

    this.formNome = new FormGroup({
      nome: new FormControl('', Validators.required),
      sobrenome: new FormControl('', Validators.required)
    });

  }

  ngOnInit(): void {
    this.formulario.controls['especialidade'].valueChanges.subscribe(especialidade => {
      this.criarListaMedicos(especialidade);
    });
    this.criarListas();
  }

  private criarListas() {
    this.criarListaEspecialidades();
    // this.criarListaHorarios();
  }

  private criarListaHorarios() {
    for (let i = 8; i <= 17; i++) {
      this.listaHorariosDisponiveis.push(
        {
          horario: 1,
          label: this.retornarHoraFormatada(i),
          ocupado: false
        }
      );
    }
    console.log(this.listaHorariosDisponiveis);
  }

  private criarListaEspecialidades() {
    this.especialidadeService.listar().subscribe(especialidades => {
      if (especialidades != null) {
        if (especialidades.length > 0) {
          especialidades.forEach(especialidade => {
            this.listaEspecialidades.push(
              {
                label: especialidade.nome,
                value: especialidade
              }
            );
          });
        }
      }
    });
  }

  private criarListaMedicos(especialidade: Especialidade) {
    this.listaMedicos = [];
    this.medicoService.listarPorEspecialidade(especialidade).subscribe(medicos => {
      medicos.forEach(medico => {
        this.listaMedicos.push(
          {
            label: medico.nome,
            value: medico.codigo
          }
        );
      })
    })
  }

  criarListaHorariosDisponiveis() {
    if (this.formulario.controls['codigoMedico'].valid && this.formulario.controls['data'].valid) {
      let agendaFilter: AgendaFilter = new AgendaFilter;
      agendaFilter.codigoMedico = this.formulario.controls['codigoMedico'].value;
      agendaFilter.data = this.formulario.controls['data'].value;
      this.listaHorariosDisponiveis = [];
      this._service.listarHorariosOcupados(agendaFilter).subscribe(listaHorariosOcupados => {
        //if (listaHorariosOcupados.length > 0) {
        for (let i: number = 8; i <= 17; i++) {
          this.listaHorariosDisponiveis.push(
            {
              horario: i,
              label: this.retornarHoraFormatada(i),
              ocupado: listaHorariosOcupados.find(h => h == i) == null ? false : true
            }
          );
        }
        console.log(this.listaHorariosDisponiveis);
        // }
      });
    }
  }

  escolherHorario(horario: any) {
    if (!horario.ocupado) {
      this.formulario.controls['horario'].setValue(horario.horario);
      this.formulario.controls['labelHorario'].setValue(horario.label);
    }
  }

  private retornarHoraFormatada(hora: number): string {
    return hora.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    }) + ':00';
  }

  private beforeSave() {
    if (this.formNome.valid) {
      let nome: string = this.formNome.controls['nome'].value + ' ' + this.formNome.controls['sobrenome'].value;
      this.formulario.controls['nome'].setValue(nome);
    } else {
      this.msgService.mostrarMensagem('Dados inválido', 'Por Favor preencha todos os campos');
    }
  }

  override salvar(): void {
    this.beforeSave();
    if (this.formulario.valid) {
      this.service.salvar(this.formulario.getRawValue()).subscribe(agenda => {
        this.msgService.mostrarMensagemComRetorno('Sucesso', 'Consulta cadastrada com sucesso').then(value => { });
      })
    }
  }

}
