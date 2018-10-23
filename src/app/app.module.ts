import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { CrearFacturaComponent } from './crear-factura/crear-factura.component';
import { AppRoute } from './app.route';
import { ReactiveFormsModule } from '@angular/forms';
import { ExportarPdfComponent } from './exportar-pdf/exportar-pdf.component';
import { Factura } from './extras/factura.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from "@angular/http";
import { UsuarioLoggeado } from './extras/usuarioLoggeado.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { environment } from './extras/firebase.enviroment.service';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CrearFacturaComponent,
    ExportarPdfComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireFunctionsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireMessagingModule,
    HttpModule,
    HttpClientModule,
    AppRoute,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [Factura,UsuarioLoggeado],
  bootstrap: [AppComponent]
})
export class AppModule { }
