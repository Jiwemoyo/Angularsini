import { Component } from '@angular/core';
import { IngredientesService } from '../services/ingredientes.service';

@Component({
  selector: 'app-pizzero',
  standalone: true,
  imports: [],
  templateUrl: './pizzero.component.html',
  styleUrl: './pizzero.component.css'
})
export class PizzeroComponent {
  ingredientes:string[]=[]
  constructor(private ingredientServices:IngredientesService) {}

  mostrarIngredientes(){
    this.ingredientes = this.ingredientServices.getIngredientes()
  }

  agregarQueso(){
    this.ingredientServices.addIngrediente("queso")
    this.ingredientes = this.ingredientServices.getIngredientes()
  }
}
