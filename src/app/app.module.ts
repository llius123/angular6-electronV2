import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { CrearFacturaComponent } from './crear-factura/crear-factura.component';
import { AppRoute } from './app.route';
import { ReactiveFormsModule } from '@angular/forms';
import { ExportarPdfComponent } from './exportar-pdf/exportar-pdf.component';
import { Factura } from './extras/factura.service';
import { NewUser } from './sql/newUser.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from "@angular/http";
import { UsuarioLoggeado } from './extras/usuarioLoggeado.service';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CrearFacturaComponent,
    ExportarPdfComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    AppRoute,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [Factura,NewUser,UsuarioLoggeado],
  bootstrap: [AppComponent]
})
export class AppModule { }
