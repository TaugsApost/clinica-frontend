import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agenda } from 'src/app/model/entidades.model';
import { BaseService } from 'src/app/utils/classes-bases/service.service';

@Injectable({
    providedIn: 'root'
})
export class AgendamentoService extends BaseService<Agenda, Agenda>{
    constructor(private _http: HttpClient) {
        super('agenda', _http)
    }
}