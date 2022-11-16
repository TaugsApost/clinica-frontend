import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent implements OnInit {

  item: MegaMenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.item = [
      {
        label: 'Teste'
      },
      {
        label: 'Teste'
      },
      {
        label: 'Teste'
      },
      {
        label: 'Teste'
      },
      {
        label: 'Teste'
      },

    ];
  }

}
