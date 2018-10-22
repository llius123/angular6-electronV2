import { Injectable } from "@angular/core";
import { Fecha, iFecha } from "./fecha.service";

export interface iFactura {
    numero_factura: number;
    //logotipo: string;
    fecha_creacion: iFecha;
    fecha_vencimiento: iFecha;
    //nombre: string
}

@Injectable()
export class Factura {

    private factura: iFactura;

    public getFactura(): iFactura {
        return this.factura
    }

    public setFactura(factura: iFactura): void {
        this.factura = factura;
    }
}
