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
        desc: 'Videojuego desarrollado en Java utilizando JavaFX para la interfaz gráfica, implementando la arquitectura Modelo-Vista-Controlador (MVC). La principal particularidad de la aplicación es que la disposición visual del juego se genera dinámicamente a partir de un archivo .txt, lo que permite crear escenarios o niveles de manera flexible y sencilla. La presentación visual se complementa mediante CSS para mejorar la apariencia de los elementos gráficos y menús. La aplicación gestiona la lógica del juego, la interacción con el usuario y ofrece distintos retos o niveles, todo dentro de una estructura modular, moderna y fácilmente escalable.',
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
        desc: 'videojuego de estilo RPG interactivo que se ejecuta en el navegador. El juego permite a los usuarios:Crear y personalizar un personaje escogiendo raza (como orco, mago, enano o elfo) y arma inicial.Continuar partidas guardadas, crear nuevas o eliminar datos.Navegar por diferentes menús: inventario, tienda, y combate en una arena.Consultar estadísticas del personaje: vida, maná, daño, defensa, resistencia mágica, experiencia, nivel y oro.Disfrutar de un ambiente con elementos multimedia como música, efectos de sonido, imágenes y animaciones de fondo.Acceder a instrucciones y documentación desde el propio menú principal.El juego implementa mecánicas típicas de RPG como progresión de personaje, arenas de combate, inventario, tienda de objetos y personalización. Todo esto se maneja a través de una interfaz web interactiva y dinámica, aprovechando las tecnologías web modernas.',
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
        desc: 'Aplicación móvil para Android desarrollada en Java que simula la funcionalidad central de Spotify. Permite a los usuarios registrarse, iniciar sesión y gestionar su perfil, almacenar datos en Firebase, explorar y buscar canciones, artistas y álbumes, reproducir música desde una interfaz moderna e intuitiva, y gestionar imágenes de usuario. Integra menús y fragmentos para navegar entre el inicio, la biblioteca, el perfil, la búsqueda y el reproductor. Todo está diseñado para brindar una experiencia similar a la app oficial de Spotify, enfocado en el manejo local y en la nube de la información del usuario y su música.',
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
        desc:'Aplicación en Java para gestionar la recogida y trazabilidad de residuos ecológicos. Permite importar la normativa y entregas en formato XML, registrar y consultar entregas, generar reportes mensuales y exportarlos, todo conectado a una base de datos MySQL. Cuenta con una API backend (Spring Boot) y un cliente de consola, facilitando la gestión y auditoría de residuos en centros participantes. ',
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
        desc: 'Aplicación desarrollada 100% en Java cuyo objetivo es consumir y mostrar información de APIs públicas desde un menú en consola. Utiliza principalmente dos APIs externas: ·JokeAPI: Recupera chistes de distintas categorías y tipos (chiste corto o en dos partes) y los muestra de forma interactiva al usuario. · TMDB API: Permite consultar información sobre películas y series, aprovechando la amplia base de datos de The Movie Database.El usuario puede seleccionar desde el menú principal entre consultar chistes (indicando tipo, categoría y cantidad), buscar información sobre películas, o salir de la aplicación. Incluye funciones para pausar entre la presentación de la pregunta y respuesta en chistes de dos partes, haciendo la interacción más dinámica.',
        img: 'assets/images/cazadores.png',
        techs: [
          'java',
        ],
        github: 'https://github.com/smmonino/cazadores-api'
      },
      {id: 10,
        name: 'Aventura',
        desc: 'Sistema completo de gamificación escrito en Java que simula un mundo de fantasía donde los usuarios (aventureros) pueden aceptar misiones, ganar puntos y subir de nivel. Entre sus características principales destacan la integración con bases de datos MySQL usando JDBC, la implementación de reglas de negocio complejas (como restricciones de misiones activas y escalamiento de niveles), manejo de transacciones ACID, un sistema de ranking dinámico y auditoría de cambios.',
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
