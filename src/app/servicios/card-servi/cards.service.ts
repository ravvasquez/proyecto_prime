import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { CardsModel } from 'src/app/models/cards-model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private cardCollection:AngularFirestoreCollection<CardsModel> /* se define una variable en base al modelo CardsModel */

  constructor(private db:AngularFirestore) {
    this.cardCollection= db.collection('cards-home'); /* se guarda la coleccion cards-home en una variable */
  }


  obtenerCards(){
    return this.cardCollection.snapshotChanges().pipe( /* se crea un observable para observar los cambios de la coleccion cards-home */
      map(action=> action.map(a=>a.payload.doc.data()))
    )
  }

  crearCard(nuevoCard:CardsModel,url:string){ /* creamos una funcion para crear un nuevo card */
    return new Promise(async (resolve,reject)=>{ /* se crea una promesa que llevara la informacion del nuevo carde */
      try{ /* si la promesa funciona */
        const id = this.db.createId(); /* se crea un nuevo id y se guarda en una variable*/
        nuevoCard.idCard = id ; /* el id generado es guardado en el id del objeto nuevoCard */
        nuevoCard.url=url;
        const resultado= await this.cardCollection.doc(id).set(nuevoCard); /* se guardan los cambios en la varibale resultado */
        resolve(resultado); /* se muestra la variable resultado */
      }
      catch(error){ /* si ocurre un error en la promesa */
        reject(error); /* muestra el error */
      }
    })
  }

  modificarCard(idCard:string,nuevaData:CardsModel,){  /* creamos una funcion para editar un card. Es necesario el id del card y la info que se quiere cambiar */
     return this.db.collection('cards-home').doc(idCard).update(nuevaData) /* se envia la info a la coleccion y se actualiza la data */
  }

  eliminarCard(idCard:string){ /* creamos una funcion para eliminar card. Se necesita el id del card */
    return new Promise((resolve, reject) => {/* creamos una promesa que se activara en caso de aceptar la condicion de borrar */
      try{ /* se intenta hacer lo pedido */
          const resp= this.cardCollection.doc(idCard).delete() /* busca el id enviado y se borra de la coleccion */
          resolve(resolve) 
      }
      catch(error){  /* en caso de no funcionar , toma el error y lo muestra */
        reject(error)
      }
    })
  }

}
