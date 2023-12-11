import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ENTIDADES } from 'src/app/mocks/mock-entidades';
import { Entidade } from 'src/app/models/Entidades';

@Injectable({
  providedIn: 'root'
})
export class EntidadeService {

  GetEntidades(): Observable<Entidade[]>{
    const entidades = of(ENTIDADES);
    return entidades
  }
  constructor() { }
}
