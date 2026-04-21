import { NgClass, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule,  Router,  } from '@angular/router';

import { TranslateModule,TranslateService } from '@ngx-translate/core';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatSelectModule,
    UpperCasePipe,
    MatFormFieldModule,
    TranslateModule,RouterModule, NgClass,

],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  translate = inject(TranslateService)
  abierto:boolean = false;
  mostrarIdiomas = false;
  abrirModal: boolean = false;
  router = inject(Router);
  isAdmin: boolean = false;
  userService = inject(UserService);
  @Output() salir = new EventEmitter<void>();
  
 
  idiomas = [
    {codigo: 'es', ruta:'https://flagcdn.com/w20/es.png',},
    {codigo: 'en', ruta: 'https://flagcdn.com/w20/gb.png', },
    {codigo: 'cat', ruta: 'https://img.freepik.com/fotos-premium/bandera-pais-cataluna-fondo-hd_676644-394.jpg',},
  ]
  idiomaSeleccionado = {codigo: 'es', ruta: ''};

  ngOnInit(){
    const codigo = localStorage.getItem('lang') || 'es';
    const idioma = this.idiomas.find((i) => i.codigo === codigo);
    this.translate.use(codigo);
    this.idiomaSeleccionado = idioma ? idioma : this.idiomas[0];
  }

  cambiarIdioma(codigo: string){
    const idioma = this.idiomas.find(i => i.codigo === codigo);
    if(idioma)this.idiomaSeleccionado = idioma;
    else this.idiomaSeleccionado = this.idiomas[0];
    this.translate.use(codigo);
    localStorage.setItem('lang',codigo);
  }

  abrirLogin(){
    this.abrirModal = !this.abrirModal;
  }
  panelAdmin(){
    this.router.navigate(['admin']);
  }

  salirAdmin(){
    localStorage.removeItem('user');
    this.userService.logout();
    this.salir.emit();
  }
  
}
