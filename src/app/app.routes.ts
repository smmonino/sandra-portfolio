import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { adminGuard } from './core/guards/admin.guard';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'proyectos', component: ProyectosComponent},
    { path: 'admin', loadComponent: () => import('./pages/admin/admin.component').then(m => m.AdminComponent), canActivate: [adminGuard] },
    {path: 'contacto', component: ContactoComponent}
];
