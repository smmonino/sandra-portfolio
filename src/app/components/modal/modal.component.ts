import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { VisitantesService } from '../../services/visitantes.service';
import { TranslateModule } from '@ngx-translate/core';
import { MatFormFieldModule } from '@angular/material/form-field';
 import {MatInputModule} from '@angular/material/input';
@Component({
  selector: 'app-modal',
  imports: [
    FormsModule, TranslateModule, MatFormFieldModule, MatInputModule,  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  nombre: string = '';
  pass:string = '';
  router = inject(Router);

  userService = inject(UserService);
  nombreAdmin = false;

  visitanteService = inject(VisitantesService);

  passError: boolean = false;

  @Output() cerrarModal = new EventEmitter<void>();
   
  get esAdmin() {
    return this.nombre.toLowerCase().trim() === 'admin';
  }

  cerrar(){
    this.nombre = '';
  }


  entrar() {
    if(this.esAdmin) {
      if (this.pass && this.userService.login(this.nombre, this.pass)) {
        this.passError = false;
        const overlay = document.getElementById('welcome-modal');
        if (overlay) overlay.classList.add('hidden');
         this.cerrarModal.emit();
        this.router.navigate(['/admin']);
        return;
      } else {
        this.passError = true;
        return;
      }
    } else {
      this.passError = false;
      if (this.nombre.trim() !== '' && this.userService.login(this.nombre)) {
        this.registrarVisita();

        const overlay = document.getElementById('welcome-modal');
        if (overlay) overlay.classList.add('hidden');
        this.cerrarModal.emit();
      
        return;
      } else {
      
        return;
      }
    }
  }

  registrarVisita(){
    const visitante = {
      name: this.nombre,
    };

    this.visitanteService.addVisitante(visitante).subscribe({
      next: () => {

      },
      error: () => {

      }
    })
  }

}
