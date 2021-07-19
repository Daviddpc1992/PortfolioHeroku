import { Component, OnInit } from '@angular/core';
import { Grafico } from 'src/app/interfaces/grafico.interface';
import { GraficoService } from 'src/app/service/grafico.service';
import * as AOS from 'aos';


@Component({
  selector: 'app-disenograf',
  templateUrl: './disenograf.component.html',
  styleUrls: ['./disenograf.component.css']
})
  
export class DisenografComponent implements OnInit {
  show: boolean = true;

  graficos: Grafico[] = []

  constructor(
    private graficoService: GraficoService,

  ) { }

  ngOnInit(): void {
    this.graficos = this.graficoService.getAll()
    AOS.init();
  };
}
    
  

  
    
  

