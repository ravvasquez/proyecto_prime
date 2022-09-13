import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/servicios/libro-servi/libros.service';


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


  coleccionDeLibros:Libro[]

  constructor(private servicioLibros:LibrosService) { }

  ngOnInit(): void {
    this.servicioLibros.obtenerLibros().subscribe(libro=> this.coleccionDeLibros=libro


    )
  }

  agregarLibro(){
    let nuevoLibro:Libro ={
      titulo: "el gato con botas",
      editorial: "salamandra",
      autor:"juan caceres",
      ISBN: 382098759209,
      idLibro:""
    }

    this.servicioLibros.crearLibro(nuevoLibro).then((libro)=>{
      alert("el libro fue agregado con exito")

    })
    .catch((error)=>{
      alert("el libro no pudo ser cargado\nEroor: "+error)
    }
    )

  }

  mostrarDialogo(){
    this.modalVisible=true;
  }

}
