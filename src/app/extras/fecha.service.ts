import { Injectable } from "../../../node_modules/@angular/core";

export interface iFecha {
    dia: string;
    mes: string;
    anyo: string;
}

@Injectable()
export class Fecha {

    private fecha: iFecha;

    //Sobra?
    // public create(fecha: iFecha): iFecha {
    //     return
    //     this.fecha = {
    //         dia: fecha.dia,
    //         mes: fecha.mes,
    //         anyo: fecha.anyo
    //     }
    // }

    public getFecha(): iFecha{
        return this.fecha;
    }

    public setFecha(fecha: iFecha): void{
        this.fecha = fecha;
    }

}