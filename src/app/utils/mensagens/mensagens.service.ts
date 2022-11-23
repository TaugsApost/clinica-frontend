import { Injectable } from '@angular/core';
import { Confirmation, ConfirmationService } from 'primeng/api';
import { Observable, Subject } from 'rxjs';
import { BaseEditComponent } from '../classes-bases/editar.component';
import { BasePesquisarComponent } from '../classes-bases/pesquisar.component';
import { BaseService } from '../classes-bases/service.service';

@Injectable({
  providedIn: 'root'
})
export class MensagensService {

  constructor(private confirmationService: ConfirmationService) { }

  mostrarMensagem(titulo: string, texto: string, icone?: string, metodo?: () => void) {
    this.confirmationService.confirm({
      message: texto,
      header: titulo,
      icon: icone,
      rejectVisible: false,
      key: 'info',
      accept: () => {
        if (metodo != null) {
          metodo();
        }
      }
    });
  }

  mostrarMensagemSimNao(titulo: string, texto: string, icone?: string) {
    return new Promise<boolean>(resolve => {
      this.confirmationService.confirm({
        message: texto,
        header: titulo,
        icon: icone,
        rejectVisible: true,
        key: 'excluir',
        accept: () => {
          resolve(true);
        },
        reject: () => {
          resolve(false);
        }
      });
    });
  }

  mensagemExcluir(titulo: string, texto: string, componet: BasePesquisarComponent<any, any>, id: number) {
    this.confirmationService.confirm({
      message: texto,
      header: titulo,
      rejectVisible: true,
      key: 'excluir',
      accept: () => {
        componet.excluir(id);
        return false;
      },
      reject: () => {

      }
    });
  }
}
