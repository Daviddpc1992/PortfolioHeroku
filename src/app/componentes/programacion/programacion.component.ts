import { Component, OnInit } from '@angular/core';
import { Programacion } from 'src/app/interfaces/programacion.interface';
import { programacionService } from 'src/app/service/programacion';


@Component({
  selector: 'app-programacion',
  templateUrl: './programacion.component.html',
  styleUrls: ['./programacion.component.css']
})
export class ProgramacionComponent implements OnInit {
  show: boolean = true;

  programaciones: Programacion[] = []

  constructor(
    private programacionService: programacionService,

  ) { }

  ngOnInit(): void {
    this.programaciones = this.programacionService.getAll()
      };
    
  
}
