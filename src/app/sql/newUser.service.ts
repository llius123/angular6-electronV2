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
        return this.http.get(this.url).subscribe();
    }
    loggin(usuario: iLoggin){
        this.url = `${this.api}/loggin/${usuario.usuario}/${usuario.contrasenya}`;
        return this.http.get(this.url).subscribe((data) => {
            console.log(data);
        }
        );
    }
    loggout(){
        this.url = `${this.api}/loggout`;
        return this.http.get(this.url).subscribe();
    }
}