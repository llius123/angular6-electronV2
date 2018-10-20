import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { InicioComponent } from "./inicio/inicio.component";
import { CrearFacturaComponent } from "./crear-factura/crear-factura.component";

const appRoutes: Routes = [
    { path: "", redirectTo: "/inicio", pathMatch: "full" },
    { path: "inicio", component: InicioComponent},
    { path: "crearFactura", component: CrearFacturaComponent},
    { path: "**", redirectTo: "/inicio" }

]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoute { }