import { Component, Input, OnInit } from '@angular/core';
import { CardsModel } from 'src/app/models/cards-model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() datosCard:CardsModel []

  constructor() { 

  }

  ngOnInit(): void {
  }

}
