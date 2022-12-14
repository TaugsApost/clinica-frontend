import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../login/shared/user.model';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  displayModal: boolean = false;
  srcImagem = '';

  constructor(private route: Router) { }

  ngOnInit(): void {

  }

  navegarPara(caminho: string) {
    this.route.navigateByUrl('/' + caminho);
  }

  mostrarImagem(url: string) {
    this.srcImagem = url;
    this.displayModal = true;
  }

}
