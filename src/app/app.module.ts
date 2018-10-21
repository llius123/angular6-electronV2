import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { CrearFacturaComponent } from './crear-factura/crear-factura.component';
import { AppRoute } from './app.route';
import { ReactiveFormsModule } from '@angular/forms';
import { ExportarPdfComponent } from './exportar-pdf/exportar-pdf.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
