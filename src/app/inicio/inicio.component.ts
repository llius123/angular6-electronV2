import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Factura, iFactura } from '../extras/factura.service';
import { Fecha } from '../extras/fecha.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  iFactura: iFactura;
  factura: Factura;

  crearFactura() {
    this.factura = new Factura();
    this.iFactura = { numero_factura: null, logotipo: null, fecha_creacion: null, fecha_vencimiento: null, nombre: 'jesus' };
    console.log(this.iFactura);
    this.router.navigate(["crearFactura"]);
  }
}
