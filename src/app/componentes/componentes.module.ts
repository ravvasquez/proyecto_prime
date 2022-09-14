import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarouselModule} from 'primeng/carousel';
import {CardModule} from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { CardsComponent } from './cards/cards.component';
import { ListaComponent } from './lista/lista.component';
import {TableModule} from 'primeng/table';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    CardsComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    TableModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    CarouselModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    CardsComponent,
    ListaComponent
  ]
  
})
export class ComponentesModule { }
