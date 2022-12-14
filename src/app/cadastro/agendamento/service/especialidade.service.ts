import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Especialidade } from 'src/app/model/entidades.model';
import { BaseService } from 'src/app/utils/classes-bases/service.service';

@Injectable({
    providedIn: 'root'
})
export class EspecialidadeService extends BaseService<Especialidade, Especialidade>{
    constructor(private _http: HttpClient) {
        super('especialidade', _http)
    }
}

