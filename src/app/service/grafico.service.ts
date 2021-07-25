import { Injectable } from '@angular/core';
import { GRAFICO } from '../db/grafico.db';
import { Grafico } from '../interfaces/grafico.interface';


@Injectable({
  providedIn: 'root'
})
export class GraficoService {

  constructor() {
  }

  getAll(): Grafico[] {
    return GRAFICO;
 }

 getByItem(pItem: string): Grafico[] {
  return [...new Set(GRAFICO.filter((proyecto) => { return proyecto.sub === pItem})
  )]
}

  getById(pId: number): Grafico{
    return GRAFICO.find(proyecto => proyecto.id == pId)
  }
}
