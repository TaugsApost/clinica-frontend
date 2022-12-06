import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseEndereco } from 'src/app/model/entidades.model';
import { BaseService } from 'src/app/utils/classes-bases/service.service';
import { Endereco, EnderecoFilter } from './endereco.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService extends BaseService<EnderecoFilter, Endereco> {

  constructor(private _http: HttpClient) {
    super('baseEndereco', _http);
  }

  buscarPorCep(cep: string): Observable<BaseEndereco> {
    return this._http.post<BaseEndereco>(this.url + '/pesquisarPorCep', cep);
  }


}
