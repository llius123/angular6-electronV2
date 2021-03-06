import { Injectable } from "@angular/core";
import { iUsuario } from "./interfaces.service";

@Injectable()
export class UsuarioLoggeado {
    private usuario: iUsuario;

    getUsuario(){
        return this.usuario;
    }
    setUsuario(usuario: iUsuario){
        console.log(usuario);
        this.usuario = usuario;
    }
    clear(){
        this.usuario = null;
    }
}