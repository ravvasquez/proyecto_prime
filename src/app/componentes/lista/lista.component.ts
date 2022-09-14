import { Component,Input, OnInit } from '@angular/core';
import { CardsModel } from 'src/app/models/cards-model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  @Input() datosCard:CardsModel []
  constructor() { }

  ngOnInit(): void {
  }

}
