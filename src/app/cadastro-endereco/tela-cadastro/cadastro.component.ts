import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { StorageService } from 'src/app/estrutura/auth/shared/storege.service';
import { BaseEditComponent } from 'src/app/utils/classes-bases/editar.component';
import { MensagensService } from 'src/app/utils/mensagens/mensagens.service';
import { CadastroService } from '../shared/cadastro.service';
import { Endereco } from '../shared/endereco.model';

@Component({
  selector: 'app-cadastro-endereco',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent extends BaseEditComponent<Endereco, Endereco> implements OnInit {

  cepValido: boolean = false;
  labelCepCadastrado: boolean = false;

  constructor(private _service: CadastroService, activatedRoute: ActivatedRoute, _router: Router, msgService: MensagensService) {
    super(_service, activatedRoute, _router, 'cadastro', msgService);
    this.formulario = new FormGroup(
      {
        cep: new FormControl('', Validators.required),
        logradouro: new FormControl('', Validators.required),
        bairro: new FormControl('', Validators.required),
        cidade: new FormControl('', Validators.required),
        estado: new FormControl('', Validators.required)
      }
    );
  }

  ngOnInit(): void {
  }

  pesquisarCep() {
    if (this.formulario.controls['cep'].valid) {
      this._service.buscarPorCep(this.formulario.controls['cep'].value).subscribe(endereco => {
        if (endereco.id == null) {
          this.cepValido = true;
          this.labelCepCadastrado = false;
        } else {
          this.labelCepCadastrado = true
        }
      })
    }
  }

  cadastrar() {
    if (this.formulario.valid) {
      let endereco: Endereco = this.formulario.getRawValue();
      this.service.salvar(endereco).subscribe(
        data => {
          this.msgService.mostrarMensagem('Sucesso', "Cadastro efetivado!")
          this.router.navigate(['home']);
        }, error => {
          this.msgService.mostrarMensagem('Erro', 'Endereco ou senha incorretos')
        }
      );
    } else {
      this.msgService.mostrarMensagem('Erro', 'Campo obrigatório em branco')
    }
  }

  override limpar(): void {
    super.limpar();
    this.labelCepCadastrado = false;
    this.cepValido = false;
  }

}
