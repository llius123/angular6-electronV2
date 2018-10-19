import { Component } from '@angular/core';

import $ from "jquery";
import * as jsPDF from 'jspdf'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-electronV2';

  pdf() {
    let doc = new jsPDF('p', 'pt', 'a4');
    doc.addHTML(document.getElementById('pdf'), function () {
      doc.save('html.pdf');
    });
  }
}
