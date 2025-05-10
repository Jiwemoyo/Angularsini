import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {

  numeroContador:number = 0

  aumentar(){
    this.numeroContador ++
  }

  decrementar(){
    this.numeroContador --
  }

}
