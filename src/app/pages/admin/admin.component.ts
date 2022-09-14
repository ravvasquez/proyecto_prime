import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CardsModel } from 'src/app/models/cards-model';
import { Libro } from 'src/app/models/libro';
import { CardsService } from 'src/app/servicios/card-servi/cards.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  @Input() datosCard:CardsModel []
  cards: CardsModel [];

  constructor(private servicioCards:CardsService) { 

  }

  ngOnInit(): void {
    this.servicioCards.obtenerCards().subscribe(p=>{this.cards=p 
      console.log(this.cards)})
  }

  textoBoton:string;
  armaSeleccionada:CardsModel;
  eliminarVisible:boolean=false;
  
  imagen:string;

  arma=new FormGroup({
    nombreArma:new FormControl('',Validators.required),
    precioArma:new FormControl('',Validators.required),
    urlArma : new FormControl("",Validators.required)
  })

  modalVisible:boolean=false;

  agregarArma(){
    if(this.arma.valid){
      let nuevaArma:CardsModel ={
        nombre:this.arma.value.nombreArma!,
        precio:this.arma.value.precioArma!,
        url:this.arma.value.urlArma!,
        idCard:""
      }

      this.servicioCards.crearCard(nuevaArma).then((arma)=>{
        alert("El arma fue agregado con éxito");
      })
      .catch((error)=>{
        alert("El arma no pudo ser cargado\n Error:"+error);
      })
    }
    else{
      alert("El formulario no está completo")
    }
  }

  editarArma(){
    let datos:CardsModel ={
      nombre:this.arma.value.nombreArma!,
      precio:this.arma.value.precioArma!,
      url:this.arma.value.urlArma!,
      idCard:this.armaSeleccionada.idCard!
    }
    this.servicioCards.modificarCard(this.armaSeleccionada.idCard,datos).then(arma=>{
      alert("El libro fue modificado con exito")
    })
    .catch((error)=>{
      alert("No se pudo modificar el libro \n Error:"+error)
    })
  }

  mostrarDialogo(){
    this.textoBoton="Agregar Arma"
    this.modalVisible=true;
  }
  mostrarEditar(armaSeleccionada:CardsModel){
    this.armaSeleccionada=armaSeleccionada
    this.textoBoton="Editar Arma"
    this.modalVisible=true;
    this.arma.setValue({
      nombreArma:armaSeleccionada.nombre,
      precioArma:armaSeleccionada.precio,
      urlArma:armaSeleccionada.url
    })
  }
  cargarDatos(){
    if(this.textoBoton==="Agregar Arma"){
      this.agregarArma()
    }
    else if (this.textoBoton==="Editar Arma"){
      this.editarArma()
    }
    this.modalVisible = false;
    this.arma.reset();
  }

  mostrarEliminar(armaSeleccionada:CardsModel){
    this.armaSeleccionada = armaSeleccionada
    this.eliminarVisible = true;
  }
  borrarArma(){
    this.servicioCards.eliminarCard(this.armaSeleccionada.idCard).then((resp)=>{
      alert("El arma fue eliminado con éxito")
    })
    .catch((error)=>{
      alert("El arma no pudo ser eliminado \n Error:"+error)
    })
    this.eliminarVisible = false
  }

  cargarImagen(event:any){
    let archivo=event.target.files[0];
    let  reader=new FileReader();
    if(archivo!=undefined){
      reader.readAsDataURL(archivo)
      reader.onloadend = () =>{
        let url = reader.result
        if(url!=null){
          this.imagen=url.toString()
        }
      }
    }
  }


}
