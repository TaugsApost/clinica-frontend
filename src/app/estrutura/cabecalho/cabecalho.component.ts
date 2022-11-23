import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { MensagensService } from 'src/app/utils/mensagens/mensagens.service';
import { StorageService } from '../auth/shared/storege.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent implements OnInit {

  item: MenuItem[] = [];
  user: MenuItem[] = [];
  storageService: StorageService;
  nomeUsuario: string = "";


  constructor(private _storageService: StorageService, private router: Router, private megService: MensagensService) {
    this.storageService = _storageService;
  }

  ngOnInit(): void {
    this.item = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/home'
      },
      {
        label: 'Galeria',
        icon: 'pi pi-image'
      },
      {
        label: 'Cadastro',
        icon: 'pi pi-pencil',
        items: [
          {
            label: 'Novo Endereço',
            icon: 'pi pi-plus-circle'
          }
        ]
      },
      {
        label: 'Agendamento',
        icon: 'pi pi-book',
        items: [
          {
            label: 'Nova Consulta',
            icon: 'pi pi-plus-circle'
          }
        ]
      }
    ];
    this.user = [
      { label: '', icon: 'pi pi-user', routerLink: '/login' }
    ];
  }

  getNomeUsuario(): string {
    if (this.storageService.isLoggin()) {
      let usuario = this.storageService.getUser();
      let num: number = (usuario.nome as string).indexOf(" ");
      return (usuario.nome as string).substring(0, num);
    } else {
      return "";
    }
  }
  navegarPara(caminho: string) {
    this.router.navigateByUrl("/" + caminho);
  }

  async logout() {
    this.megService.mostrarMensagemSimNao('Logout', 'Deseja encerrar sua sessão?').then(value => {
      if (value) {
        this.storageService.signOut();
        this.navegarPara('home');
      }
    });
  }

}
