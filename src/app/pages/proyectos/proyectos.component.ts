import { Router } from '@angular/router';
import { Component, NgModule, inject } from '@angular/core';
import { TarjetaCarrouselComponent } from '../../components/tarjeta-carrousel/tarjeta-carrousel.component';
import { Proyecto } from '../../models/models.model';
import { FormsModule, NgModel } from '@angular/forms';
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
    if (!this.tech.trim()) return this.proyectos;
    return this.proyectos.filter(p =>
      p.techs.some(t => t.toLowerCase().includes(this.tech.toLowerCase())) ||
      p.name.toLowerCase().includes(this.tech.toLowerCase()) ||
      p.desc.toLowerCase().includes(this.tech.toLowerCase())
    );
  }
}
