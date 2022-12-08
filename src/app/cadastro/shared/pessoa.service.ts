import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseEndereco, Pessoa } from 'src/app/model/entidades.model';
import { BaseService } from 'src/app/utils/classes-bases/service.service';

@Injectable({
    providedIn: 'root'
})
export class PessoaService extends BaseService<Pessoa, Pessoa>{

    constructor(private _http: HttpClient) {
        super('pessoa', _http);
    }

}