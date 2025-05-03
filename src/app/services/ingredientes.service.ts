import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngredientesService {
  private ingredientes: string[] = ["harina", "queso", "tomate", "jamón"];

  getIngredientes(): string[] {
    return this.ingredientes;
  }

  addIngrediente(ingrediente: string) {
    this.ingredientes.push(ingrediente);
  }
}
