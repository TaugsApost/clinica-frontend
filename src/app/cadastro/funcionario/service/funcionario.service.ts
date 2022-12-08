import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Funcionario } from 'src/app/model/entidades.model';
import { BaseService } from 'src/app/utils/classes-bases/service.service';

@Injectable({
    providedIn: 'root'
})
export class FuncionarioService extends BaseService<Funcionario, Funcionario>{

    constructor(private _http: HttpClient) {
        super('funcionario', _http)
    }
}
