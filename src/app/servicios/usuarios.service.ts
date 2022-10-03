
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection,AngularFirestore } from '@angular/fire/compat/firestore';
import {map} from 'rxjs/operators';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  /* se declara la coleccion de usuarios. siguiendo el modelo de usuarios */
  private usuarioCollection:AngularFirestoreCollection<Usuario>


  constructor(private db:AngularFirestore) { 
    this.usuarioCollection= db.collection('usuarios'); /* se guarda la coleccion de usuarios en una variable usuarioCollection */
  }

/* Se obtienen la coleccion de usuarios desde la base de datos */
  obtenerUsuarios(){
    return this.usuarioCollection.snapshotChanges().pipe( /* se crea un observable para la base de datos*/
      map(action=> action.map(a=>a.payload.doc.data())) /* se actualizan los cambios y se recorre el documento */
    )
  }
}
