import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { DetallesComponent } from './components/detalles/detalles.component';

export const routes: Routes = [
    { path: 'home', component: InicioComponent},
    { path: 'detalles', component: DetallesComponent},
    { path: '**', redirectTo: 'home' }
];
