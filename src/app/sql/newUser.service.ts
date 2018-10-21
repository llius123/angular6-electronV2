import { Injectable } from "../../../node_modules/@angular/core";
import { iLoggin } from "../extras/loggin.service";
import { HttpClient } from '@angular/common/http';
@Injectable()
export class NewUser{
    constructor(private http: HttpClient){}
    private api: string = "http://localhost:3000";
    private url: string = '';
    newUser(newUser: iLoggin){
        this.url = `${this.api}/newUser/${newUser.usuario}/${newUser.contrasenya}`;
        return this.http.get(this.url);
    }
}