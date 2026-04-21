import { Component, ElementRef, inject, QueryList, ViewChildren } from '@angular/core';
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
    RouterModule,
    UpperCasePipe,
    TarjetaCarrouselComponent,
    NgClass,
    TranslateModule,
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
  herramientas: string[] = [
    'GitHub', 'Supabase', 'Firebase',' Retrofit','Docket Compose', 'Swagger', 'Trello',
    'IntelliJ', 'VSCode', 'Android Studio', 'Sublime Text', 'Scene Builder', 'Postman', 'Render', 'Vercel', 'Docker', 'Figma',
  ]

  visible = 0;
  sesion: boolean = false;
  @ViewChildren('tarjeta') tarjetas!: QueryList<ElementRef>;

  ngOnInit() {
    this.sesion = localStorage.getItem('user') !== null;
    this.proyectos = this.proyectosService.proyectos;
  }

  ngAfterViewInit() {
    this.animarPortada();
    this.animarTarjeta();

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

  private animarTarjeta(){
    this.tarjetas.forEach((tarjeta, i) => {
      gsap.from(tarjeta.nativeElement, {
          opacity: 0,
          y: 40,
          duration: 0.7,
          delay: i * 0.05,
          scrollTrigger: {
            trigger: tarjeta.nativeElement,
            start: 'top 90%',
            toggleActions: 'play none none none'
          }
        });
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

  cambiarTarjeta(index: number) {
    this.visible = index;
  }

}