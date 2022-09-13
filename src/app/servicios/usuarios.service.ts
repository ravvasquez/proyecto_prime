import { Injectable } from '@angular/core';
import { AngularFirestoreCollection,AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuarioCollection:AngularFirestoreCollection<any>


  constructor(private db:AngularFirestore) { 
    this.usuarioCollection= db.collection('usuarios');
  }
}
//todo mal che