import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medico } from 'src/app/model/entidades.model';
import { BaseService } from 'src/app/utils/classes-bases/service.service';

@Injectable({
    providedIn: 'root'
})
export class MedicoService extends BaseService<Medico, Medico>{

    constructor(private _http: HttpClient) {
        super('medico', _http)
    }
}
