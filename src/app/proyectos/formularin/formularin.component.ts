import { Component } from '@angular/core';
import { ReactiveFormsModule ,FormBuilder,FormGroup,Validators, FormControl} from '@angular/forms';
import { RecepcionFormComponent } from './recepcion-form/recepcion-form.component';

@Component({
  selector: 'app-formularin',
  standalone: true,
  imports: [ReactiveFormsModule,RecepcionFormComponent],
  templateUrl: './formularin.component.html',
  styleUrl: './formularin.component.css'
})
export class FormularinComponent {
  datosPerfil = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    texto: new FormControl('', [Validators.required]),
  });
  mostrarDatos: boolean = false;


  handleSubmit(){
    alert(`los datos ${this.datosPerfil.value.nombre} ${this.datosPerfil.value.email} ${this.datosPerfil.value.texto} se enviaron correctamente`);
    if (this.datosPerfil.invalid) {
      this.datosPerfil.markAllAsTouched();
      return;
    }

    this.mostrarDatos = true;
  }
}
