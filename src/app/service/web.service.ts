import { Injectable } from '@angular/core';
import { WEB } from '../db/web.db';
import { Web } from '../interfaces/web.interface';


@Injectable({
  providedIn: 'root'
})
export class WebSkipTestService {

  constructor() { }


  getAll(): Web[] {
    return WEB;
 }
 getByItem(pItem: string): Web[] {
  return [...new Set(WEB.filter((proyecto) => { return proyecto.sub === pItem})
  )]
}
 getById(pId: number): Web{
  return WEB.find(proyecto => proyecto.id == pId)
}

}
