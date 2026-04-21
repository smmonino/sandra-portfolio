import { Component, inject } from '@angular/core';
import { Contacto, Visitante } from '../../models/models.model';
import { signal  } from '@angular/core';
import { ContactosService } from '../../services/contactos.service';

import { VisitantesService } from '../../services/visitantes.service';
import { DatePipe, UpperCasePipe} from '@angular/common';
import { TimeAgoPipe } from '../../pipes/time-ago.pipe';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-admin',
  imports: [DatePipe, TimeAgoPipe, TranslateModule, UpperCasePipe],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {


  contactosService = inject(ContactosService);
  visitantesService = inject(VisitantesService);

  contactos = signal<Contacto[]>([]);
  visitas = signal<Visitante[]>([]);

  contactoExpandido: number | null = null;

  constructor(){
    this.cargarContactos();
    this.cargarVisitas();
  }
  actualizar() {
    this.cargarContactos();
    this.cargarVisitas();
  }

  cargarContactos() {
    this.contactosService.getContactos().subscribe(data => {
      this.contactos.set(data);
    });
  }

  cargarVisitas(){
    this.visitantesService.getVisitantes().subscribe(data => {
      this.visitas.set(data);
    })
  }

  abrirContacto(contacto: Contacto){
    this.contactosService.actualizarContacto(contacto.id || 0).subscribe(() => {
      this.cargarContactos();
    })
  }

  contactosOrdenados(){
    return [...this.contactos()].sort((a, b) => new Date(b.date).getTime()).reverse();
  }

  visitasOrdenadas(){
    return [...this.visitas()].sort((a, b) => new Date(b.date!).getTime()).reverse();
  }

  toggleExpandir(contacto: any): void {
    if (this.contactoExpandido === contacto.id) {
      this.contactoExpandido = null;
    } else {
      this.contactoExpandido = contacto.id;
      if (!contacto.open) {
        contacto.open = true;
        this.contactosService.actualizarContacto(contacto.id || 0).subscribe(() => {
        this.cargarContactos();
      })
      }
    }
  }

  totalContactosPendientes(): number{
    return this.contactos().filter( c => c.open === false).length;
  }
}
