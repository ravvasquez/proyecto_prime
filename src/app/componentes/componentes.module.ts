import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarouselModule} from 'primeng/carousel';
import {CardModule} from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { CardsComponent } from './cards/cards.component';




@NgModule({
  declarations: [
    CardsComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule
  ],
  exports:[
    CarouselModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    CardsComponent
  ]
  
})
export class ComponentesModule { }
