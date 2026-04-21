import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,FooterComponent, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sandra-portfolio';
  sesion: boolean = false;
  ngOnInit(){
      
   if(localStorage.getItem('user')){
    this.sesion = true;
   }
  }
  cerrarSesion(){
    this.sesion = false;
  }

  cerrarModal() {
    this.sesion = true;
  }
}
