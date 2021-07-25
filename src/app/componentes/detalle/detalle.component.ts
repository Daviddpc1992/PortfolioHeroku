import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Programacion } from 'src/app/interfaces/programacion.interface';
import { programacionService } from 'src/app/service/programacion';



@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  proyecto: Programacion;



  constructor(private activateRoute: ActivatedRoute,
    private programacionService: programacionService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {

      this.proyecto = this.programacionService.getById(params.proyectoid);
     
    })
  }

}
