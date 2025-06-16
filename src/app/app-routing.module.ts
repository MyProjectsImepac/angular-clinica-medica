import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuPrincipalComponent } from './pages/menu-principal/menu-principal.component';
import { LoginComponent } from './pages/login/login.component';
import { BoasVindaComponent } from './pages/boas-vinda/boas-vinda.component';
import { EspecialidadeAdicionarComponent } from './pages/especialidades/especialidade-adicionar/especialidade-adicionar.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'menu-principal', component: MenuPrincipalComponent },
  { path: 'especialidades/adicionar', component: EspecialidadeAdicionarComponent },
  { path: 'boas-vinda', component: BoasVindaComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
