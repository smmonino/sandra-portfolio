import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Proyecto } from '../../models/models.model';
import { NgClass, UpperCasePipe } from '@angular/common';
@Component({
  selector: 'app-tarjeta-carrousel',
  standalone: true,
  imports: [MatCardModule, UpperCasePipe,NgClass],
  templateUrl: './tarjeta-carrousel.component.html',
  styleUrl: './tarjeta-carrousel.component.scss'
})
export class TarjetaCarrouselComponent {
  @Input() proyecto!: Proyecto;
  @Input () conDescripcion!: boolean;

}
