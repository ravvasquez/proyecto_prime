import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CardsModel } from 'src/app/models/cards-model';
import { CardsService } from 'src/app/servicios/card-servi/cards.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  libro = new FormGroup ({
    titulo: new FormControl('',Validators.required),
    autor: new FormControl('',Validators.required),
    editorial: new FormControl('',Validators.required),
    ISBN: new FormControl(0,Validators.required)
  })

  modalVisible:boolean=false;


  cards: CardsModel [];

  constructor(private servicioCards:CardsService) { }

  ngOnInit(): void {
    this.servicioCards.obtenerCards().subscribe(p=>{this.cards=p 
      console.log(this.cards)})
  }

}
