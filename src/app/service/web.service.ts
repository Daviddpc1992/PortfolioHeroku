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

}
