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

    //Sobra?
    // public create(factura: iFactura): iFactura {
    //     return
    //     this.factura = {
    //         numero_factura: factura.numero_factura,
    //         logotipo: factura.logotipo,
    //         fecha_creacion: factura.fecha_creacion,
    //         fecha_vencimiento: factura.fecha_vencimiento,
    //         nombre: factura.nombre
    //     }
    // }

    //Esto tambien sobra
    // public clear(): void {
    //     this.factura = {
    //         numero_factura: null,
    //         logotipo: null,
    //         fecha_creacion: null,
    //         fecha_vencimiento: null,
    //         nombre: null
    //     }
    // }

    public getFactura(): iFactura {
        return this.factura
    }

    public setFactura(factura: iFactura): void {
        this.factura = factura;
    }
}
