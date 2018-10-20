import { Component, OnInit } from '@angular/core';

import $ from "jquery";
import * as jsPDF from 'jspdf'
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.css']
})
export class CrearFacturaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  pdf() {
    let doc = new jsPDF('p', 'pt', 'a4');
    doc.addHTML(document.getElementById('pdf'), function () {
      doc.save('html.pdf');
    });
  }

  volver(){
    this.router.navigate(["inicio"])
  }
}
