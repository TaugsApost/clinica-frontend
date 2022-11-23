import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { StorageService } from 'src/app/estrutura/auth/shared/storege.service';
import { MensagensService } from 'src/app/utils/mensagens/mensagens.service';
import { CadastroService } from '../shared/cadastro.service';
import { Endereco } from '../shared/endereco.model';

@Component({
  selector: 'app-cadastro-endereco',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  formulario: FormGroup;

  constructor(private msgService: MensagensService, private service: CadastroService, private router: Router, private storegeService: StorageService) {
    this.formulario = new FormGroup(
      {
        CPE: new FormControl('', Validators.required),
        logradouro: new FormControl('', Validators.required),
        bairro: new FormControl('', Validators.required),
        cidade: new FormControl('', Validators.required),
        estado: new FormControl('', Validators.required)
      }
    );
  }

  ngOnInit(): void {
  }

  cadastrar() {
    if (this.formulario.valid) {
      let endereco: Endereco = this.formulario.getRawValue();
      this.service.cadastrar(endereco).subscribe(
        data => {
          this.msgService.mostrarMensagem('Sucesso', "Cadastro efetivado!")
          this.storegeService.saveUser(data);
          this.router.navigate(['home']);
        }, error => {
          this.msgService.mostrarMensagem('Erro', 'Endereco ou senha incorretos')
        }
      );
    } else {
      this.msgService.mostrarMensagem('Erro', 'Campo obrigatório em branco')
    }
  }

}
