import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agenda, AgendaFilter } from 'src/app/model/entidades.model';
import { BaseService } from 'src/app/utils/classes-bases/service.service';

@Injectable({
    providedIn: 'root'
})
export class AgendamentoService extends BaseService<Agenda, Agenda>{
    constructor(private _http: HttpClient) {
        super('agenda', _http)
    }

    listarHorariosOcupados(agendaFilter: AgendaFilter): Observable<number[]> {
        return this._http.post<number[]>(this.url + '/listaHorariosOcupados', agendaFilter);
    }
}