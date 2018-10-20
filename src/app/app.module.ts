import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { CrearFacturaComponent } from './crear-factura/crear-factura.component';
import { AppRoute } from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CrearFacturaComponent
  ],
  imports: [
    AppRoute,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
