import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[]=[];

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

            },
            {
                routerLink:'contacto',
                label:'contacto',
                icon:'pi pi-fw pi-envelope',
            },
        ];
    }

  constructor() {
    
   }

   

}
