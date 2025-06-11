import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuPrincipalComponent } from './pages/menu-principal/menu-principal.component';
import { MedicosComponent } from './pages/medicos/medicos.component';
import { EspecialidadesComponent } from './pages/especialidades/especialidades.component';
import { CabecalhoLogoutComponent } from './pages/cabecalho-logout/cabecalho-logout.component';
import { RodapeComponent } from './pages/rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuPrincipalComponent,
    MedicosComponent,
    EspecialidadesComponent,
    CabecalhoLogoutComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
