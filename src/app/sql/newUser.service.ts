import { Injectable } from "@angular/core";
import { iLoggin, iUsuario } from "../extras/interfaces.service";
import { HttpClient } from '@angular/common/http';
import { UsuarioLoggeado } from "../extras/usuarioLoggeado.service";

@Injectable()
export class NewUser{
    constructor(private http: HttpClient, private usuarioLoggeado: UsuarioLoggeado){}
    private api: string = "http://localhost:3000";
    private url: string = '';
    newUser(newUser: iLoggin){
        this.url = `${this.api}/newUser/${newUser.usuario}/${newUser.contrasenya}`;
        return this.http.get(this.url).subscribe();
    }
    loggin(usuario: iLoggin){
        this.url = `${this.api}/loggin/${usuario.usuario}/${usuario.contrasenya}`;
        return this.http.get(this.url).subscribe((usuario: iUsuario) => {
            this.usuarioLoggeado.setUsuario(usuario);
        }
        );
    }
    loggout(){
        this.url = `${this.api}/loggout`;
        return this.http.get(this.url).subscribe();
    }
}