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

}
