import { Injectable } from '@angular/core';
import { get } from 'http';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {
  private imagenes: string[] = ["../../assets/babosin.jpg","../../assets/belini.jpg","../../assets/equinoxio2025.png","../../assets/escudini.jpg","../../assets/jiwesini gotic.jpg","../../assets/jiwesini.jpg","../../assets/pescadini.jpg"]

  getImagenes(): string[] {
    return this.imagenes;
  }
  addImagen(imagen: string) {
    this.imagenes.push(imagen);
  }
}
