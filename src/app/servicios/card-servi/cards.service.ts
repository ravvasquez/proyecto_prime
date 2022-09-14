import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { CardsModel } from 'src/app/models/cards-model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private cardCollection:AngularFirestoreCollection<CardsModel>

  constructor(private db:AngularFirestore) {
    this.cardCollection= db.collection('cards-home');
  }


  obtenerCards(){
    return this.cardCollection.snapshotChanges().pipe(
      map(action=> action.map(a=>a.payload.doc.data()))
    )
  }

  crearCard(nuevoCard:CardsModel){
    return new Promise(async (resolve,reject)=>{
      try{
        const id = this.db.createId();
        nuevoCard.idCard = id ;
        const resultado= await this.cardCollection.doc(id).set(nuevoCard);
        resolve(resultado);
      }
      catch(error){
        reject(error);
      }
    })
  }

  modificarCard(idCard:string,nuevaData:CardsModel,){
     return this.db.collection('card-home').doc(idCard).update(nuevaData)
  }

  eliminarCard(idCard:string){
    return new Promise((resolve, reject) => {
      try{
          const resp= this.cardCollection.doc(idCard).delete()
          resolve(resolve)
      }
      catch(error){ 
        reject(error)
      }
    })
  }

}
