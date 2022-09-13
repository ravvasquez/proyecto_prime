import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';


const routes: Routes = [  
{path:'inicio',component:InicioComponent},
{path:'',component:InicioComponent},
{path:'##',component:InicioComponent},
{path:'contacto',component:ContactoComponent},
{path:'admin',component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
