import { Component, Input,OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Usuario } from 'src/app/models/usuario';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  
  items: MenuItem[]=[];
  adminVisible=false;
  modalVisible:boolean=false;
  usuarios: Usuario [] = [];
    ngOnInit() {
        this.items = [
            { 
                routerLink:'inicio',
                label:'inicio',
                icon:'pi pi-fw pi-home',
            },
            {
                routerLink:'admin',
                label:'admin',
                icon:'pi pi-fw pi-user',
                visible:this.adminVisible,

            },
            {
                routerLink:'contacto',
                label:'contacto',
                icon:'pi pi-fw pi-envelope',
            },
        ];


        this.servicioUsuarios.obtenerUsuarios().subscribe(usuarios=>{
          this.usuarios=usuarios;
        });
    }

  constructor(private servicioUsuarios:UsuariosService  ) {}

  
  @Input() datosUsu: Usuario[];

  usuarioForm=new FormGroup({
    nombreUsu:new FormControl('',Validators.required),
    contraUsu:new FormControl('',Validators.required),
  })

  mostrarDialogo(){
    this.modalVisible=true;
  }

  verificarUsuario(){
    this.usuarios.forEach(usuario => {
      if(usuario.usuario==this.usuarioForm.value.nombreUsu){

        if(usuario.contrasena==this.usuarioForm.value.contraUsu){
          alert("Ingresaste correctamente")
          this.adminVisible = true;
          this.ngOnInit()
        }
      }else{
        alert("Nombre de Usuario o Contraseña Incorrectos")
      }
    })
  }


   

}
