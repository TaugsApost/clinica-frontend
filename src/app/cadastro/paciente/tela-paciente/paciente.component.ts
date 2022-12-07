import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { EnderecoService } from 'src/app/cadastro-endereco/shared/cadastro.service';
import { Paciente } from 'src/app/model/entidades.model';
import { BaseEditComponent } from 'src/app/utils/classes-bases/editar.component';
import { MensagensService } from 'src/app/utils/mensagens/mensagens.service';
import { PacienteService } from '../service/paciente.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent extends BaseEditComponent<Paciente, Paciente> implements OnInit {

  formNome: FormGroup;
  formContato: FormGroup;
  listaTipoSanguineo: SelectItem[] = [];

  constructor(private _service: PacienteService, activatedRoute: ActivatedRoute, _router: Router, msgService: MensagensService,
    private enderecoService: EnderecoService) {
    super(_service, activatedRoute, _router, '', msgService);

    this.formContato = new FormGroup({
      codigo: new FormControl(0),
      email: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      celular: new FormControl('', Validators.required)
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
      peso: new FormControl(null, Validators.required),
      altura: new FormControl(null, Validators.required),
      tipoSanguineo: new FormControl('', Validators.required),
    });

    this.formNome = new FormGroup({
      nome: new FormControl('', Validators.required),
      sobrenome: new FormControl('', Validators.required)
    });
    console.log(this.formulario.getRawValue());
  }

  ngOnInit(): void {
    this.criarListaTipoSanguineo();
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
  }

  override salvar(): void {
    this.beforeSave();
    console.log(this.formulario.getRawValue());
    if (this.formulario.valid) {
      this.service.salvar(this.formulario.getRawValue()).subscribe(paciente => {

        this.msgService.mostrarMensagemComRetorno('Sucesso', 'Paciente cadastrado com sucesso').then(value => {

        })
      });
    } else {
      this.msgService.mostrarMensagem('Dados inválido', 'Por Favor preencha todos os campos');
    }
  }

}
