import { Component, inject } from '@angular/core';
import { ModalComponent } from '../../components/modal/modal.component';
import { RouterModule } from '@angular/router';
import { gsap } from 'gsap';
import { NgClass, UpperCasePipe } from '@angular/common';
import { TarjetaCarrouselComponent } from '../../components/tarjeta-carrousel/tarjeta-carrousel.component';
import { Proyecto } from '../../models/models.model';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TranslateModule } from '@ngx-translate/core';
import { ProyectosService } from '../../services/proyectos.service';
gsap.registerPlugin(ScrollTrigger);



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ModalComponent,
    RouterModule,
    UpperCasePipe,
    TarjetaCarrouselComponent,
    NgClass,
    TranslateModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  proyectosService = inject(ProyectosService);
  proyectos: Proyecto[] = [];


  tecnologias: string[] = [
    'java', 'spring boot', 'java fx','python', 'dart',
    'flutter', 'angular', 'postgresql', 'odoo','html','css','js', 'mysql',
  ];

  visible = 0;
  sesion: boolean = false;

  ngOnInit() {
    this.sesion = localStorage.getItem('user') !== null;
    this.proyectos = this.proyectosService.proyectos;
  }

  ngAfterViewInit() {
    this.animarPortada();
    this.animarOrbes();
    this.animarTecnologias();

  }
  private animarPortada(){
      gsap.from('.titulo-persona, .titulo, .hero-desc, .container-botones', {
      y: 30,
      opacity: 0,
      stagger: 0.35,
      duration: 1.4,
      ease: 'power3.out',
    });
  }

  private animarOrbes(){
    gsap.to('.hero-orb hero-orb--1, .hero-orb hero-orb--2',{
      x: -40,
      y:30,
      scale: 1.08,
      duration: 14,
      ease: 'sine.inOut',
      yoyo:true,
      repeat: -1
    });
  }
 private animarTecnologias(): void {
    gsap.to('.tarjeta-tecnologia', {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.45,
      stagger: 0.08,
      ease: 'back.out(1.56)',
      scrollTrigger: {
        trigger: '.contenedor-tecnologias',
        start: 'top 85%',
      },
    });
  }
  

  get tarjetasVisibles(): Proyecto[] {
    const total = this.proyectos.length;
    return [
      this.proyectos[(this.visible - 1 + total) % total],
      this.proyectos[this.visible],
      this.proyectos[(this.visible + 1) % total],
    ];
  }

  siguiente() {
    this.visible = (this.visible + 1) % this.proyectos.length;
  }

  anterior() {
    this.visible = (this.visible - 1 + this.proyectos.length) % this.proyectos.length;
  }

  irA(index: number) {
    this.visible = index;
  }


}