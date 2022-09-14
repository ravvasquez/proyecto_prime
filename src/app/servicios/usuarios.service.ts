import { Injectable } from '@angular/core';
import { AngularFirestoreCollection,AngularFirestore } from '@angular/fire/compat/firestore';
import {map} from 'rxjs/operators';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuarioCollection:AngularFirestoreCollection<Usuario>


  constructor(private db:AngularFirestore) { 
    this.usuarioCollection= db.collection('usuarios');
  }

  obtenerUsuarios(){
    return this.usuarioCollection.snapshotChanges().pipe(
      map(action=> action.map(a=>a.payload.doc.data()))
    )
  }
}
