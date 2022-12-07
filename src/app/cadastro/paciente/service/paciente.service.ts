import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paciente } from 'src/app/model/entidades.model';
import { BaseService } from 'src/app/utils/classes-bases/service.service';

@Injectable({
  providedIn: 'root'
})
export class PacienteService extends BaseService<Paciente, Paciente>{

  constructor(private _http: HttpClient) {
    super('paciente', _http)
  }
}
