import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  
  ],
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    ReactiveFormsModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { 

}
