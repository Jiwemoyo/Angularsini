import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recepcion-form',
  standalone: true,
  imports: [],
  templateUrl: './recepcion-form.component.html',
  styleUrl: './recepcion-form.component.css'
})
export class RecepcionFormComponent {
  @Input() nombreForm: string = '';
  @Input() emailForm: string = '';
  @Input() textoForm: string = '';
  @Input() mostrar: boolean = false;
}
