import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import {FormsModule,ReactiveFormsModule,FormControl,FormGroup,Validators} from '@angular/forms';
import { PizzeroComponent } from './pizzero/pizzero.component';
import { TodoListComponent } from './proyectos/todo-list/todo-list.component';
import { DigitalClockComponent } from './proyectos/digital-clock/digital-clock.component';
import { FormularinComponent } from './proyectos/formularin/formularin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,FormsModule,ReactiveFormsModule,PizzeroComponent,TodoListComponent,DigitalClockComponent,FormularinComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Practicas';
  tareasCompletadas = 0;

  addCompleteTask($event:any) {
    if($event) {
      this.tareasCompletadas++;
    } else {
      this.tareasCompletadas--;
    }
  }

}
