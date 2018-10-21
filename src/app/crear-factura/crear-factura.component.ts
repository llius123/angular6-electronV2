import { iFactura } from './../extras/factura.service';
import { Component, OnInit } from '@angular/core';

import $ from "jquery";
import * as jsPDF from 'jspdf'
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '../../../node_modules/@angular/forms';
import { iFecha } from '../extras/fecha.service';

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.css']
})
export class CrearFacturaComponent implements OnInit {

  crear_factura_form = new FormGroup ({
    numero_factura: new FormControl(),
    dia_fecha_creacion: new FormControl(),
    mes_fecha_creacion: new FormControl(),
    anyo_fecha_creacion: new FormControl(),
    dia_fecha_vencimiento: new FormControl(),
    mes_fecha_vencimiento: new FormControl(),
    anyo_fecha_vencimiento: new FormControl()
  })

  constructor(private router: Router) { }

  ngOnInit() {
  }

  factura: iFactura;
  fecha_creacion: iFecha;
  fecha_vencimiento: iFecha;
  crear_factura(){
    this.fecha_creacion = {
      dia: this.crear_factura_form.get('dia_fecha_creacion').value,
      mes: this.crear_factura_form.get('mes_fecha_creacion').value,
      anyo: this.crear_factura_form.get('anyo_fecha_creacion').value
    }
    this.fecha_vencimiento = {
      dia: this.crear_factura_form.get('dia_fecha_vencimiento').value,
      mes: this.crear_factura_form.get('mes_fecha_vencimiento').value,
      anyo: this.crear_factura_form.get('anyo_fecha_vencimiento').value
    }
    this.factura = {
      numero_factura: this.crear_factura_form.get('numero_factura').value,
      fecha_creacion: this.fecha_creacion,
      fecha_vencimiento: this.fecha_vencimiento
    }
    console.log(this.factura)
  }

  // pdf() {
  //   let doc = new jsPDF('p', 'pt', 'a4');
  //   doc.addHTML(document.getElementById("pdf")).then(canvas => {
  //     var img = canvas.toDataURL("image/jpeg", 1.0);
  //     doc.addImage(img, 'JPEG',0,0);
  //     doc.save('html.pdf');
  //   })
  // }

  volver() {
    this.router.navigate(["inicio"])
  }
}
