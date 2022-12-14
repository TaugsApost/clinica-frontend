import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Funcionario, FuncionarioFilter } from 'src/app/model/entidades.model';
import { BaseService } from 'src/app/utils/classes-bases/service.service';

@Injectable({
    providedIn: 'root'
})
export class FuncionarioService extends BaseService<FuncionarioFilter, Funcionario>{

    constructor(private _http: HttpClient) {
        super('funcionario', _http)
    }
}
