import { Component, inject } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Location, UpperCasePipe } from '@angular/common';
import { Contacto } from '../../models/models.model';
import { gsap } from 'gsap';
import { ContactosService } from '../../services/contactos.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contacto',
  imports: [FormsModule, MatSnackBarModule, TranslateModule, UpperCasePipe],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent {
  nombre: string = '';
  email: string = '';
  tlfn:string = '';
  mensaje: string = '';
  router = inject(Router);
  location = inject(Location);
  enviando = false;
  snackBar =  inject(MatSnackBar);
  contactosService = inject(ContactosService);
  enviar() {
    if (this.nombre && this.email && this.mensaje) {
       this.enviando = true;
    // Espera a que la vista se actualice y la barra esté en el DOM
    setTimeout(() => {
        const barra = document.getElementById('barra-envio');
        if (barra) {
          gsap.fromTo(barra, { width: '0%' }, {
            width: '100%',
            duration: 2,
            onComplete: () => {
              this.enviando = false;
              this.snackBar.open('¡Mensaje enviado!', 'Cerrar', {duration: 3000})
              this.nombre = '';
              this.email = '';
              this.tlfn='';
              this.mensaje = '';
            }
          });

        }
    });
      const contacto = {
        name: this.nombre,
        email: this.email,
        msg: this.mensaje,
        tlfn: this.tlfn,
        date: new Date().toISOString(),
        open:false
      }
      this.contactosService.addContacto(contacto).subscribe({
        next: () => {},
        error: () => {}
      });

    } else {
        // Aquí deberías mostrar un snackbar en vez de alert
        this.snackBar.open('Por favor, rellena todos los campos', 'Cerrar', {duration: 3000, })
    }
  }

  resetForm(form: any) {
    form.resetForm();
    this.nombre = '';
    this.email = '';
    this.mensaje = '';
  }

  volverAtras() {
    this.location.back();
  }

}
