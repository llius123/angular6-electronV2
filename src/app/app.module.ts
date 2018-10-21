import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { CrearFacturaComponent } from './crear-factura/crear-factura.component';
import { AppRoute } from './app.route';
import { ReactiveFormsModule } from '@angular/forms';
import { ExportarPdfComponent } from './exportar-pdf/exportar-pdf.component';
import { Factura } from './extras/factura.service';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CrearFacturaComponent,
    ExportarPdfComponent
  ],
  imports: [
    AppRoute,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [Factura],
  bootstrap: [AppComponent]
})
export class AppModule { }
