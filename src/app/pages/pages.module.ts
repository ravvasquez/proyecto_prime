import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { EquipoComponent } from './equipo/equipo.component';
import { CasoExitoComponent } from './caso-exito/caso-exito.component';



@NgModule({
  declarations: [
    InicioComponent,
    ContactoComponent,
    ServiciosComponent,
    EquipoComponent,
    CasoExitoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    InicioComponent,
    ContactoComponent,
    ServiciosComponent,
    EquipoComponent,
    CasoExitoComponent
  ]
})
export class PagesModule { 

}
