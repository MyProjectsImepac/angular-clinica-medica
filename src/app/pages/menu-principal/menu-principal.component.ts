import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent {

  constructor(private router: Router) {}

  navegar(destino: string): void {
    alert(`Funcionalidade "${destino}" ainda não implementada.`);
    // No futuro: this.router.navigate([`/${destino}`]);
  }

  sair(): void {
    this.router.navigate(['/login']);
  }
}
