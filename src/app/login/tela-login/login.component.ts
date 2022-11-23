import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { StorageService } from 'src/app/estrutura/auth/shared/storege.service';
import { MensagensService } from 'src/app/utils/mensagens/mensagens.service';
import { LoginService } from '../shared/login.service';
import { Usuario } from '../shared/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(private msgService: MensagensService, private service: LoginService, private router: Router, private storegeService: StorageService) {
    this.formulario = new FormGroup(
      {
        email: new FormControl('', Validators.required),
        senha: new FormControl('', Validators.required)
      }
    );
  }

  ngOnInit(): void {
  }

  logar() {
    if (this.formulario.valid) {
      let usuario: Usuario = this.formulario.getRawValue();
      this.service.logar(usuario).subscribe(
        data => {
          this.msgService.mostrarMensagem('Sucesso', "Login efetivado!")
          this.storegeService.saveUser(data);
          this.router.navigate(['home']);
        }, error => {
          this.msgService.mostrarMensagem('Erro', 'Usuario ou senha incorretos')
        }
      );
    } else {
      this.msgService.mostrarMensagem('Erro', 'Campo obrigatório em branco')
    }
  }

}
