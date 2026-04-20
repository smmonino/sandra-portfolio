import { Injectable } from '@angular/core';

import { Proyecto } from '../models/models.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
    private _proyectos: Proyecto[]= [
        
      {
        id: 1,
        name: 'Labyrinthus',
        desc: 'Laberinto por niveles y ranking con puntuación. Escapa del laberinto del castillo y alcanza el ranking',
        img: 'assets/images/labirinthus.png',
        techs: [
            'Java' ,
          'JavaFX' ,
          'SQLite' ,
        ],
        github: 'https://github.com/CristoMacias/DAM1_PRO_CS.git',
    
      },
      {
        id: 2,
        name: 'La Batalla de los V Pueblos',
        desc: 'Videojuego web de combate por turnos.',
        img: 'assets/images/batalla_web.png',
       techs: [
         'HTML' ,
          'CSS' ,
          'JS' ,
        ],
        github: 'https://github.com/CristoMacias/Videojuego.git',
    
      },
      {
        id: 3,
        name: 'Spotify',
        desc: 'Aplicación que simula un Spotify personalizado, búsqueda en tiempo real de canciones y repoducción de la música.',
        img: 'assets/images/icono_spotify.png',
        techs: [
          'Java' ,
          'Firebase' ,
        ],
        github: 'https://github.com/smmonino/Spotify',
      
      },
      {
        id: 4,
        name: 'KultuX Android',
        desc: 'Aplicación móvil para consultar las actividades que hay en Extremadura, además de servicios como alojamientos y restaurantes. Búsqueda por filtro. ',
          img: 'assets/images/kultux.png',
        techs: [
          'Flutter' ,
          'Spring Boot' ,
        'PostgreSQL' ,
        ],
        github: 'https://github.com/KultuX/kultux-front.git',
       
      },
      {
        id: 5,
        name: 'KultuX Web',
        desc: 'Aplicación web para usuarios gestores como empresarios, autonomos e instituciones públicas para CRUD de actividades,alojamientos y restaurantes que consumiran los usuarios de la aplicación móvil',
         img: 'assets/images/kultux.png',
       techs: [
          'Angular' ,
          'Spring Boot' ,
         'PostgreSQL' ,
        ],
        github: 'https://github.com/KultuX/kultux-web.git',
       
      },
      {
        id: 6,
        name: 'KultuX',
        desc: 'Proyecto de aplicación móvil y web. Unifica todas las actividades de Extremadura, junto a servicios como alojamientos y restaurantes. Toda la información y documentación.',
        img: 'assets/images/kultux.png',
        techs: [
          'Java' ,
        'Spring Boot',
         'PostgreSQL' ,
        ],
        github: 'https://github.com/CristoMacias/KultuX.git',
       
      },
      {
        id:7,
        name: 'Web sobre Star Wars',
        desc: 'Aplicación web sobre el mundo de Star Wars. Toda la información resumen sobre las películas, series...',
        img: 'assets/images/sw.png',
        techs: [
          'html',
          'css',
          'js'
        ],
        github: 'https://github.com/smmonino/Web-Star-Wars'
      },
      {
        id:8,
        name: 'EcoRecicla-lite',
        desc:'',
        img: 'assets/images/ecorecicla.png',
        techs: [
          'java',
          'spring Boot',
          'XML',
          'MySQL'
        ],
        github: 'https://github.com/smmonino/ecorecicla-lite'
      },
      {
        id: 9,
        name: 'Cazadores de APIS',
        desc: '',
        img: 'assets/images/cazadores.png',
        techs: [
          'java',
        ],
        github: 'https://github.com/smmonino/cazadores-api'
      },
      {id: 10,
        name: 'Aventura',
        desc: '',
        img: 'assets/images/aventura.png',
        techs: [
          'java',
          'mysql'
        ],
        github: 'https://github.com/smmonino/Aventura'
      }


    ];

    get proyectos(): Proyecto[]{
      return this._proyectos;
    }

  
}
