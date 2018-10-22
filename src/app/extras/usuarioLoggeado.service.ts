import { Injectable } from "@angular/core";
import { iUsuario } from "./interfaces.service";

@Injectable()
export class UsuarioLoggeado {
    private usuario: iUsuario;

    getUsuario(){
        return this.usuario;
    }
    setUsuario(usuario: iUsuario){
        this.usuario = usuario;
    }
}