import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent implements OnInit {

  item: MenuItem[] = [];
  user: MenuItem[] = []

  constructor() { }

  ngOnInit(): void {
    this.item = [
      {
        label: 'Home',
        icon: 'pi pi-home'
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
      { label: '', icon: 'pi pi-user', items: [{ label: 'Login' }] }
    ];
  }

}
