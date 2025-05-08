import { Component } from '@angular/core';
import { ImagenesService } from '../../services/imagenes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
  constructor(private imagenesService: ImagenesService) { }
  imagenes: string[] = this.imagenesService.getImagenes();

}
