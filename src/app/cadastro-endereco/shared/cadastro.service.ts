import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/utils/classes-bases/service.service';
import { Endereco, EnderecoFilter } from './endereco.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService extends BaseService<EnderecoFilter, Endereco> {

  constructor(private _http: HttpClient) {
    super('funcionario', _http);
  }

  cadastrar(endereco: Endereco): Observable<any> {
    return this._http.post(this.url + '/cadastrar', endereco);
  }
}
