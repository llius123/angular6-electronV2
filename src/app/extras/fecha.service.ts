import { Injectable } from "@angular/core";

export interface iFecha {
    dia: string;
    mes: string;
    anyo: string;
}

@Injectable()
export class Fecha {

    private fecha: iFecha;

    public getFecha(): iFecha{
        return this.fecha;
    }

    public setFecha(fecha: iFecha): void{
        this.fecha = fecha;
    }

}