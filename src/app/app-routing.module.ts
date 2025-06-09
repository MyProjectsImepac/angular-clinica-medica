import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuPrincipalComponent } from './pages/menu-principal/menu-principal.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'menu-principal', component: MenuPrincipalComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
