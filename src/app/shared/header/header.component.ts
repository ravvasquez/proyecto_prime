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

  usuarioForm=new FormGroup({ /* se crea formulario  para usuarios */
    nombreUsu:new FormControl('',Validators.required),
    contraUsu:new FormControl('',Validators.required),
  })

  mostrarDialogo(){ /* funcion para mostrar form */
    this.modalVisible=true; 
  }


  /* Usuario de firebase 
  Usuario: lele 
  Contrasena:lele123 */

  verificarUsuario(){ 
    this.usuarios.forEach(usuario => {
      if(usuario.usuario==this.usuarioForm.value.nombreUsu){ /* verifica si el nombre del usuario coincide con el de la base de datos */
                                          
        if(usuario.contrasena==this.usuarioForm.value.contraUsu){ /* verifica si la contrasena del usuario coincide con el de la base de datos */
          alert("Ingresaste correctamente")
          this.adminVisible = true; /* si todo coincide se muestra la opcion para entrar a la pagina admin */
          this.ngOnInit() /* se reinicia la pagina */
        }
      }else{
        alert("Nombre de Usuario o Contraseña Incorrectos") /* si no coincide se  muestra un cartel de que nombre de usuario o contraseña son incorrectos */
      }
      
    })
    this.usuarioForm.setValue({ /* una vez realizada la funcion, se vacia el formulario */
      nombreUsu:"",
      contraUsu:"",
    })
    this.modalVisible = false; /* se oculta el formulaario una vez realizada la funcion */
  }


   

}
