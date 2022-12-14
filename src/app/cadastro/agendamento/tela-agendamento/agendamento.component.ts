import { Component, OnInit, ɵisListLikeIterable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { Agenda, Especialidade } from 'src/app/model/entidades.model';
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
      especialidade: new FormControl()
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

}
