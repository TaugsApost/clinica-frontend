import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Especialidade, Medico } from 'src/app/model/entidades.model';
import { BaseService } from 'src/app/utils/classes-bases/service.service';

@Injectable({
    providedIn: 'root'
})
export class MedicoService extends BaseService<Medico, Medico>{

    constructor(private _http: HttpClient) {
        super('medico', _http)
    }

    listarPorEspecialidade(especialidade: Especialidade): Observable<Medico[]> {
        return this._http.post<Medico[]>(this.url + '/listarPorEspecialidade', especialidade);
    }

}
