import { iFactura } from '../extras/factura.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Factura } from '../extras/factura.service';


import $ from "jquery";
import * as jsPDF from 'jspdf'
import { AngularFireDatabase } from '../../../node_modules/@angular/fire/database';
@Component({
  selector: 'app-exportar-pdf',
  templateUrl: './exportar-pdf.component.html',
  styleUrls: ['./exportar-pdf.component.css'],
  providers: [AngularFireDatabase]
})
export class ExportarPdfComponent implements OnInit {

  constructor(private router: Router, private cFactura: Factura,private db: AngularFireDatabase) { }

  ngOnInit() {
    this.factura = this.cFactura.getFactura();
    //this.validacion();
   }

  factura: iFactura;

  crear_factura() {
    this.db.database.goOnline();
    const test = this.db.database.app.database().ref("usuarios")
    test.on("value", (snapshot) => {
      console.log(snapshot.val);
    }, (errorObject) => {
      console.log(errorObject)
    })
    // let doc = new jsPDF('p', 'pt', 'a4');
    // doc.addHTML(document.getElementById("pdf")).then(canvas => {
    //   var img = canvas.toDataURL("image/jpeg", 1.0);
    //   doc.addImage(img, 'JPEG', 0, 0);
    //   doc.save('html.pdf');
    // })
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
