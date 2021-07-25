import { Component, OnInit } from '@angular/core';
import { Programacion } from 'src/app/interfaces/programacion.interface';
import { programacionService } from 'src/app/service/programacion';



@Component({
  selector: 'app-programacion',
  templateUrl: './programacion.component.html',
  styleUrls: ['./programacion.component.css']
})
export class ProgramacionComponent implements OnInit {
  down: boolean = false;
  

  programaciones: Programacion[];

  constructor(
    private programacionService: programacionService,

  ) { }

  ngOnInit(): void {
    this.programaciones = this.programacionService.getAll()
  };
      
  onChange($event) {
    if ($event.target.value === 'todos') {

      this.programaciones = this.programacionService.getAll();


    } else {
      setTimeout(() => {
        this.programaciones = this.programacionService.getByItem($event.target.value);

      }, 100);
    
    }


  }
  goDown($event) {
    if ($event) {

      setTimeout(() => {
      this.down = true;
    }, 200);
    }
  }


}