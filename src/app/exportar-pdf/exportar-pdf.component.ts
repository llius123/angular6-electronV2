import { iFactura } from './../extras/factura.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Factura } from '../extras/factura.service';


import $ from "jquery";
import * as jsPDF from 'jspdf'
@Component({
  selector: 'app-exportar-pdf',
  templateUrl: './exportar-pdf.component.html',
  styleUrls: ['./exportar-pdf.component.css']
})
export class ExportarPdfComponent implements OnInit {

  constructor(private router: Router, private cFactura: Factura) { }

  ngOnInit() {
    this.factura = this.cFactura.getFactura();
    this.validacion();
   }

  factura: iFactura;

  crear_factura() {
    let doc = new jsPDF('p', 'pt', 'a4');
    doc.addHTML(document.getElementById("pdf")).then(canvas => {
      var img = canvas.toDataURL("image/jpeg", 1.0);
      doc.addImage(img, 'JPEG', 0, 0);
      doc.save('html.pdf');
    })
  }

  validacion(){
    if (this.factura === undefined || this.factura.numero_factura === null) {
      this.volver();
    }
  }
  volver() {
    this.router.navigate(["crearFactura"])
  }
}
