import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Grafico } from 'src/app/interfaces/grafico.interface';
import { GraficoService } from 'src/app/service/grafico.service';

@Component({
  selector: 'app-detalle-grafico',
  templateUrl: './detalle-grafico.component.html',
  styleUrls: ['./detalle-grafico.component.css']
})
export class DetalleGraficoComponent implements OnInit {


  proyecto: Grafico;



  constructor(private activateRoute: ActivatedRoute,
    private diseñoService: GraficoService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {


      this.proyecto = this.diseñoService.getById(params.proyectoid);


      console.log(this.proyecto)
     
     
    })
  }

}
