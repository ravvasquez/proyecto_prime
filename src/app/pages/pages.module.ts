import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Elementos Modulos de PrimeNG
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AdminComponent } from './admin/admin.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { ReactiveFormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



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
    ComponentesModule,
    ReactiveFormsModule,
    TableModule,
    FormsModule,
    HttpClientModule 
    
  ],
  exports:[
    InicioComponent,
    ContactoComponent,
    AdminComponent,
    ReactiveFormsModule
  ]
})
export class PagesModule { 

}
