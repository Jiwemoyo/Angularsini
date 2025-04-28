import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import {FormsModule,ReactiveFormsModule,FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,FormsModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Practicas';
  fruta = ''
  mostrarFruta() {
    alert(this.fruta)
  }
  profileForm = new FormGroup({
    name: new FormControl('Isabel',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
  })

  handleSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
  }

}
