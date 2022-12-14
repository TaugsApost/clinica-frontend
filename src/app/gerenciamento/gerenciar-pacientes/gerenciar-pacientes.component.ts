import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { PacienteService } from 'src/app/cadastro/paciente/service/paciente.service';
import { Paciente } from 'src/app/model/entidades.model';
import { BasePesquisarComponent } from 'src/app/utils/classes-bases/pesquisar.component';
import { MensagensService } from 'src/app/utils/mensagens/mensagens.service';

@Component({
  selector: 'app-gerenciar-pacientes',
  templateUrl: './gerenciar-pacientes.component.html',
  styleUrls: ['./gerenciar-pacientes.component.scss']
})
export class GerenciarPacientesComponent extends BasePesquisarComponent<Paciente, Paciente> implements OnInit {

  listaTipoSanguineo: SelectItem[] = [];

  constructor(service: PacienteService, activatedRoute: ActivatedRoute, _router: Router, msgService: MensagensService) {
    super(service, activatedRoute, _router, 'estadio', msgService);
    this.formulario = new FormGroup({
      nome: new FormControl(null),
      tipoSanguineo: new FormControl(null),
      peso: new FormControl(null),
      altura: new FormControl(null),
      cidade: new FormControl(null),
      estado: new FormControl(null),
      bairro: new FormControl(null),
    });
  }

  ngOnInit(): void {
    ['A-', 'B-', 'AB-', 'O', 'A+', 'B+', 'AB+', 'O+'].forEach(tipoSanguineo => {
      this.listaTipoSanguineo.push(
        {
          value: tipoSanguineo,
          label: tipoSanguineo
        }
      );
    });
    this.columns = [
      { value: 'nome', nome: 'Nome do Paciente' },
      { value: 'tipoSanguineo', nome: 'Tipo Sanguíneo', size: '20%', align: 'center' },
      { value: 'altura', nome: 'Altura (m)', align: 'center', size: '20%' },
      { value: 'peso', nome: 'Peso (Kg)', align: 'center', size: '20%' }
    ];
  }

}
