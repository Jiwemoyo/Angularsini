import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormathourPipe } from '../../pipes/formathour.pipe';



@Component({
  selector: 'app-digital-clock',
  standalone: true,
  imports: [DatePipe, FormathourPipe],
  templateUrl: './digital-clock.component.html',
  styleUrl: './digital-clock.component.css'
})
export class DigitalClockComponent {
  date = new Date();
  cambiando = false;
  datorio = 'HH:mm:ss'

  cambio(){
    this.cambiando = !this.cambiando;
    if(this.cambiando){
      this.datorio = 'hh:mm:ss a'
  }
    else{
      this.datorio = 'HH:mm:ss'
    }
  }
}
