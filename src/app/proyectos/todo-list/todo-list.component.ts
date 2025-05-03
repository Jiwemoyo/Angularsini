import { Component, Output ,EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
 tareas = [{id:1, tarea:'Hacer la cama', hecha:false}, {id:2, tarea:'Hacer la comida', hecha:false}, {id:3, tarea:'Hacer la compra', hecha:false}];
 nuevaTarea = '';
 @Output() tareasCompletadas = new EventEmitter<boolean>();


 cambio($event:any,tareaid:number) {
  this.tareas.forEach(tarea =>{
    if(tarea.id == tareaid) {
      tarea.hecha = $event.target.checked;
      this.tareasCompletadas.emit(tarea.hecha);
    }
  })
 }
 addTask(){
  this.tareas.push({id:this.tareas.length
    +1, tarea:this.nuevaTarea, hecha:false});
 }
}
