import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Entidade, Inativo, TipoEntidade } from 'src/app/models/Entidades';
import { EntidadeService } from 'src/app/services/entidade/entidade.service';

@Component({
  selector: 'app-entidades',
  templateUrl: './entidades.component.html',
  styleUrls: ['./entidades.component.css'],
})
export class EntidadesComponent implements OnInit {
  mostraInativos = false;
  entidades: Entidade[] = [];
  entidadesGeral: Entidade[] = [];
  search(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
      this.entidades = this.entidadesGeral.filter((entidade) => {
        return entidade.nome
          .toLocaleLowerCase()
          .includes(value.toLocaleLowerCase())
      })
    
    console.log(this.entidades)
  }

  selectedEntidade?: Entidade;
  //Filtra o campo de busca
  constructor(private entidadeService: EntidadeService) {}


  inativoToString(inativo: Inativo): string {
    return inativo === 1 ? 'sim' : 'não';
  }


  ngOnInit(): void {
    this.getEntidades();
  }

  getEntidades(): void {
    this.entidadeService.GetEntidades().subscribe(entidades => {
      this.entidadesGeral = entidades
    });
  }
  onSelect(entidade: Entidade): void {
    this.selectedEntidade = entidade;
    console.log(entidade.nome);
  }

  displayedColumns: string[] = [
    'codigo',
    'nome',
    'razaoSocial',
    'telefone',
    'tipo',
    'inativo',
  ];
}