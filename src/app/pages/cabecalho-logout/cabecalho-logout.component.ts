import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho-logout.component.html',
  styleUrls: ['./cabecalho-logout.component.css']
})
export class CabecalhoLogoutComponent {
  nomeClinica: string = 'Clínica Vida e Saúde';
  isLogout: boolean = true;
}
