import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Web } from 'src/app/interfaces/web.interface';
import { WebSkipTestService } from 'src/app/service/web.service';

@Component({
  selector: 'app-detalle-web',
  templateUrl: './detalle-web.component.html',
  styleUrls: ['./detalle-web.component.css']
})
export class DetalleWebComponent implements OnInit {


  proyecto: Web;


  constructor(private activateRoute: ActivatedRoute,
    private web:WebSkipTestService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {

      this.proyecto = this.web.getById(params.proyectoid);


      console.log(this.proyecto)
     
     
    })
  }

}
