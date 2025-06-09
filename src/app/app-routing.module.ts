import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuPrincipalComponent } from './pages/menu-principal/menu-principal.component';
import { LoginComponent } from './pages/login/login.component';
import { MedicosComponent } from './pages/medicos/medicos.component';
import { EspecialidadesComponent } from './pages/especialidades/especialidades.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'menu-principal', component: MenuPrincipalComponent },
  { path: 'medicos', component: MedicosComponent },
  { path: 'especialidades', component: EspecialidadesComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
