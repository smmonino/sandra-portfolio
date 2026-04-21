
import { Component,  inject } from '@angular/core';
import { TarjetaCarrouselComponent } from '../../components/tarjeta-carrousel/tarjeta-carrousel.component';
import { Proyecto } from '../../models/models.model';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ProyectosService } from '../../services/proyectos.service';

@Component({
  selector: 'app-proyectos',
  imports: [
    TarjetaCarrouselComponent,FormsModule, TranslateModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.scss'
})
export class ProyectosComponent {
  tech: string = '';

  proyectoService = inject(ProyectosService);
  
  ngOnInit(){
    this.proyectos = this.proyectoService.proyectos;
  }

  proyectos: Proyecto[]=[];

  get proyectosFiltrados(): Proyecto[] {
    return this.proyectos.filter(p =>
      p.techs.some(t => t.toLowerCase().includes(this.tech.toLowerCase())) 
    );
  }
}
