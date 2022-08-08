import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasoExitoComponent } from './pages/caso-exito/caso-exito.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

const routes: Routes = [  
{path:'inicio',component:InicioComponent},
{path:'',component:InicioComponent},
{path:'##',component:InicioComponent},
{path:'equipo',component:EquipoComponent},
{path:'servicios',component:ServiciosComponent},
{path:'caso_exito',component:CasoExitoComponent},
{path:'contacto',component:ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
