import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AdminComponent } from './admin/admin.component';
import { ComponentesModule } from '../componentes/componentes.module';




@NgModule({
  declarations: [
    InicioComponent,
    ContactoComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    InputTextModule,
    ComponentesModule
  ],
  exports:[
    InicioComponent,
    ContactoComponent,
    AdminComponent
  ]
})
export class PagesModule { 

}
