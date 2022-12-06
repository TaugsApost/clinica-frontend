import { Injectable } from '@angular/core';
import { FuncionarioResponse } from 'src/app/model/entidades.model';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'usuario';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    constructor() { }

    signOut(): void {
        window.sessionStorage.clear();
    }

    public saveToken(token: string): void {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }

    public getToken(): string | null {
        return window.sessionStorage.getItem(TOKEN_KEY);
    }

    public saveUser(user: any): void {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }

    public isLoggin() {
        let user = window.sessionStorage.getItem(USER_KEY);
        return user != null;
    }

    public getFuncao(): string {
        if (this.isLoggin()) {
            return this.getUser().funcao
        } else {
            return '';
        }
    }

    public isMedico(): boolean {
        return this.getFuncao() == 'MEDICO';
    }

    public getUser(): FuncionarioResponse {
        const user = window.sessionStorage.getItem(USER_KEY);
        if (user) {
            return JSON.parse(user);
        }
        return new FuncionarioResponse;
    }
}