import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';


export const routes: Routes = [
  {path:"",title:'Inicio',component:HomeComponent},
  {path:"about",title:"sobre nosotros",component:AboutComponent}
];
