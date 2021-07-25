import { Injectable } from '@angular/core';
import { PROGRAMACION } from '../db/programacion.db';
import { Programacion } from '../interfaces/programacion.interface';


@Injectable({
  providedIn: 'root'
})
export class programacionService {
  arrProyectos: Programacion[];

  constructor() { }


  getAll(): Programacion[] {
    return PROGRAMACION;
  }
  getByItem(pItem: string): Programacion[] {
    return [...new Set(PROGRAMACION.filter((proyecto) => { return proyecto.sub === pItem})
    )]
  }
    getById(pId: number): Programacion{
      return PROGRAMACION.find(proyecto => proyecto.id == pId)
    }

  }

