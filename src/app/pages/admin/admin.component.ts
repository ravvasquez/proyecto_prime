import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CardsModel } from 'src/app/models/cards-model';
import { Libro } from 'src/app/models/libro';
import { CardsService } from 'src/app/servicios/card-servi/cards.service';
import { StorageService } from 'src/app/servicios/storage/storage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  cards: CardsModel []; /* se crea una variable datosCard guiada en el modelo CardsModel */

  constructor(private servicioCards:CardsService,private servicioStorage: StorageService) { /* importamos servicios de cards */

  }

  ngOnInit(): void {
    this.servicioCards.obtenerCards().subscribe(p=>{this.cards=p 
      console.log(this.cards)}) /* se suscribe a los cambios del documento y lo muestra en consola */
  }

  textoBoton:string; 
  armaSeleccionada:CardsModel;
  eliminarVisible:boolean=false;
  
  imagen:string;
  nombreImagen:string;

  arma=new FormGroup({ /* se crea un nuevo grupo de formulario */
    nombreArma:new FormControl('',Validators.required),
    precioArma:new FormControl('',Validators.required),
  })

  modalVisible:boolean=false;

  agregarArma(){
    if(this.arma.valid){ /* si el formulario del arma esta completo realiza: */
      let nuevaArma:CardsModel ={ /* se llenan los atributos con los datos recibidos */
        nombre:this.arma.value.nombreArma!,
        precio:this.arma.value.precioArma!,
        url:"",
        idCard:""
      }

      this.servicioStorage.subirImagen(this.nombreImagen,this.imagen).
      then(
        async res=>{
          this.servicioStorage.obtenerUrlImagen(res).
          then(
            async url=>{
              await this.servicioCards.crearCard(nuevaArma,url).then((arma)=>{ /* si se pudo crear el arma, muestra un cartel de que fue cargado correctamente */
              alert("El arma fue agregado con éxito");
            })
            .catch((error)=>{
              alert("El arma no pudo ser cargado\n Error:"+error); /* si ocurre un error lo toma y lo muestra */
            })
            }
          )
        }
      )
    }
    else{
      alert("El formulario no está completo") /* si el formulario no esta completo muestra un cartel */
    }
  }

  editarArma(){
    let datos:CardsModel ={ /* se muestran los datos del arma en el input*/
      nombre:this.arma.value.nombreArma!,
      precio:this.arma.value.precioArma!,
      url:this.armaSeleccionada.url!,
      idCard:this.armaSeleccionada.idCard
    }
     this.servicioCards.modificarCard(this.armaSeleccionada.idCard,datos).then(arma=>{ /*se crea una funcion flecha para ejecutar la accion*/
      alert("El Arma fue modificado con exito")/*se muestra un alert si la operacion funciono*/ 
    })
    .catch((error)=>{
      alert("No se pudo modificar el Arma \n Error:"+error)/*en caso contrario se muestra este alert*/
    })
  }

  mostrarDialogo(){ /* se muestra el formulario y en el boton muestra el texto agregar arma */
    this.textoBoton="Agregar Arma"
    this.modalVisible=true;
  }
  mostrarEditar(armaSeleccionada:CardsModel){
    this.armaSeleccionada=armaSeleccionada /*guarda en una variable, armaSeleccionada */
    this.textoBoton="Editar Arma"
    this.modalVisible=true; /* se muestra el formulario */
    this.arma.setValue({ /* se guardan los nuevos datos enviados en los atributos del objeto */
      nombreArma:armaSeleccionada.nombre,
      precioArma:armaSeleccionada.precio,
    })
  }
  cargarDatos(){
    if(this.textoBoton==="Agregar Arma"){/*si se presiona el boton agregar arma */
      this.agregarArma()/*se llama a la funcion agregar arma */
    }
    else if (this.textoBoton==="Editar Arma"){/*si se presiona el boton editar arma */
      this.editarArma()/*se llama a la funcion editar arma */
    }
    this.modalVisible = false;/*se cierra el formulario una vez completa */
    this.arma.reset();/*se resetean los datos del formulario cuando este se cierra */
  }

  mostrarEliminar(armaSeleccionada:CardsModel){ /* en caso de tocar la opcion aceptar para eliminar, se guarda el arma seleccionada y se muestra el dialogo para eliminar */
    this.armaSeleccionada = armaSeleccionada
    this.eliminarVisible = true;
  }
  borrarArma(){
    this.servicioCards.eliminarCard(this.armaSeleccionada.idCard).then((resp)=>{/*se llama a la funcion eliminarCard del servicio, y se le entregan los datos del card seleccionado */
      alert("El arma fue eliminado con éxito")
    })
    .catch((error)=>{/* si ocurre un error lo toma y lo muestra en un alert*/
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
          this.nombreImagen = archivo.name
          this.imagen=url.toString()
        }
      }
    }
  }


}
