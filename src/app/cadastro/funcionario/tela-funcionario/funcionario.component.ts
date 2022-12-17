import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { EnderecoService } from 'src/app/cadastro-endereco/shared/cadastro.service';
import { Paciente, Pessoa } from 'src/app/model/entidades.model';
import { BaseEditComponent } from 'src/app/utils/classes-bases/editar.component';
import { MensagensService } from 'src/app/utils/mensagens/mensagens.service';
import { PessoaService } from '../../shared/pessoa.service';
import { FuncionarioService } from '../service/funcionario.service';
import { MedicoService } from '../service/medico.service';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.scss']
})
export class FuncionarioComponent extends BaseEditComponent<Pessoa, Pessoa> implements OnInit {

  formNome: FormGroup;
  formContato: FormGroup;
  formEspecialidade: FormGroup;
  listaTipoSanguineo: SelectItem[] = [];
  isMedico: boolean = false;
  tipoDeFuncionario: SelectItem[] = [
    {
      label: 'Funcionario',
      value: 1
    },
    {
      label: 'Médico',
      value: 2
    }
  ]

  constructor(private _service: PessoaService, activatedRoute: ActivatedRoute, _router: Router, msgService: MensagensService,
    private enderecoService: EnderecoService, private funcionarioService: FuncionarioService, private medicoService: MedicoService) {
    super(_service, activatedRoute, _router, '', msgService);
    this.formContato = new FormGroup({
      codigo: new FormControl(0),
      email: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      celular: new FormControl('', Validators.required)
    });

    this.formEspecialidade = new FormGroup({
      id: new FormControl(null),
      nome: new FormControl('', Validators.required)
    });

    this.formulario = new FormGroup({
      codigo: new FormControl(0),
      contato: new FormGroup(this.formContato.controls, Validators.required),
      nome: new FormControl('', Validators.required),
      cep: new FormControl('', Validators.required),
      logradouro: new FormControl({ value: '', disabled: true }, Validators.required),
      numeroCasa: new FormControl(null, Validators.required),
      bairro: new FormControl({ value: '', disabled: true }, Validators.required),
      cidade: new FormControl({ value: '', disabled: true }, Validators.required),
      estado: new FormControl({ value: '', disabled: true }, Validators.required),
      dataContrato: new FormControl(null, Validators.required),
      salario: new FormControl(null, Validators.required),
      senhaHash: new FormControl('', Validators.required),
      especialidade: new FormGroup(this.formEspecialidade.controls, Validators.required),
      crm: new FormControl(null, Validators.required),
      tipoFuncionario: new FormControl(1)
    });

    this.formNome = new FormGroup({
      nome: new FormControl('', Validators.required),
      sobrenome: new FormControl('', Validators.required)
    });

  }

  ngOnInit(): void {
    this.criarListaTipoSanguineo();
    this.formulario.controls['tipoFuncionario'].valueChanges.subscribe(tipo => {
      if (tipo == 1) {
        this.isMedico = false;
      } else {
        this.isMedico = true;
      }
    });
  }

  private criarListaTipoSanguineo() {
    ['A-', 'B-', 'AB-', 'O', 'A+', 'B+', 'AB+', 'O+'].forEach(tipoSanguineo => {
      this.listaTipoSanguineo.push(
        {
          value: tipoSanguineo,
          label: tipoSanguineo
        }
      );
    });
  }

  pesquisarCep() {
    if (this.formulario.controls['cep'].valid) {
      this.enderecoService.buscarPorCep(this.formulario.controls['cep'].value).subscribe(endereco => {
        if (endereco.id == null) {
          this.formulario.controls['logradouro'].enable();
          this.formulario.controls['cidade'].enable();
          this.formulario.controls['estado'].enable();
          this.formulario.controls['bairro'].enable();
          this.formulario.controls['logradouro'].reset();
          this.formulario.controls['cidade'].reset();
          this.formulario.controls['estado'].reset();
          this.formulario.controls['bairro'].reset();
        } else {
          this.formulario.controls['logradouro'].setValue(endereco.logradouro);
          this.formulario.controls['cidade'].setValue(endereco.cidade);
          this.formulario.controls['estado'].setValue(endereco.estado);
          this.formulario.controls['bairro'].setValue(endereco.bairro);
          this.formulario.controls['logradouro'].disable();
          this.formulario.controls['cidade'].disable();
          this.formulario.controls['estado'].disable();
          this.formulario.controls['bairro'].disable();
        }
      })
    }
  }

  private beforeSave() {
    if (this.formNome.valid) {
      let nome: string = this.formNome.controls['nome'].value + ' ' + this.formNome.controls['sobrenome'].value;
      this.formulario.controls['nome'].setValue(nome);
    }
    if (!this.isMedico) {
      this.formulario.controls['especialidade'].clearValidators();
      this.formulario.controls['especialidade'].updateValueAndValidity();
      this.formulario.controls['crm'].clearValidators();
      this.formulario.controls['crm'].updateValueAndValidity();
      this.formEspecialidade.controls['nome'].clearValidators();
      this.formEspecialidade.controls['nome'].updateValueAndValidity();
    } else {
      this.formulario.controls['especialidade'].setValidators(Validators.required);
      this.formulario.controls['especialidade'].updateValueAndValidity();
      this.formulario.controls['crm'].setValidators(Validators.required);
      this.formulario.controls['crm'].updateValueAndValidity();
      this.formEspecialidade.controls['nome'].setValidators(Validators.required);
      this.formEspecialidade.controls['nome'].updateValueAndValidity();
    }
  }

  override salvar(): void {
    this.beforeSave();
    if (this.isMedico) {
      this.salvarMedico();
    } else {
      this.salvarFuncionario();
    }
  }

  private salvarMedico() {
    if (this.formulario.valid) {
      this.medicoService.salvar(this.formulario.getRawValue()).subscribe(medico => {
        this.msgService.mostrarMensagemComRetorno('Sucesso', 'Médico cadastrado com sucesso').then(value => {
          this.router.navigate(['gerenciamento/funcionarios']);
        });
      });
    } else {
      this.msgService.mostrarMensagem('Dados inválido', 'Por Favor preencha todos os campos');
    }
  }

  private salvarFuncionario() {
    if (this.formulario.valid) {
      this.funcionarioService.salvar(this.formulario.getRawValue()).subscribe(funcionario => {
        this.msgService.mostrarMensagemComRetorno('Sucesso', 'Funcionario cadastrado com sucesso').then(value => {
          this.router.navigate(['gerenciamento/funcionarios']);
        });
      });
    } else {
      this.msgService.mostrarMensagem('Dados inválido', 'Por Favor preencha todos os campos');
    }
  }

}
