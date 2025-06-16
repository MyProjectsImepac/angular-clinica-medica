import { Component } from '@angular/core';
import { Especialidade } from 'src/app/models/especialidade.model';
import { EspecialidadeService } from 'src/app/services/especialidade.service';

@Component({
  selector: 'app-especialidade-adicionar',
  templateUrl: './especialidade-adicionar.component.html',
  styleUrls: ['./especialidade-adicionar.component.css']
})
export class EspecialidadeAdicionarComponent {

  especialidade:Especialidade = {nome: '', id :''};
  
  onSubmit() {
    if (this.especialidade.nome) {
      this.especialidade.id = crypto.randomUUID();
      this.especialidadeService.save(this.especialidade).subscribe({
        next: () => alert('Especialidade cadastrada com sucesso!'),
        error: () => alert('Erro ao cadastrar especialidade.')
      });
    }
  }

  constructor(private especialidadeService: EspecialidadeService) {}
}