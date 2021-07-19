import { Injectable } from '@angular/core';
import { PROGRAMACION } from '../db/programacion.db';
import { Programacion } from '../interfaces/programacion.interface';


@Injectable({
  providedIn: 'root'
})
export class programacionService {

  constructor() { }


  getAll(): Programacion[] {
    return PROGRAMACION;
 }

}
