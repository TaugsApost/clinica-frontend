import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/utils/classes-bases/service.service';
import { Usuario, UsuarioFilter } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService<UsuarioFilter, Usuario> {

  constructor(private _http: HttpClient) {
    super('funcionario', _http);
  }

  logar(usuario: Usuario): Observable<any> {
    return this._http.post(this.url + '/logar', usuario);
  }
}
