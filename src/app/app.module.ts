import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragScrollModule } from 'ngx-drag-scroll';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './componentes/hero/hero.component';
import { AboutmeComponent } from './componentes/aboutme/aboutme.component';
import { DisenografComponent } from './componentes/disenograf/disenograf.component';
import { DisenowebComponent } from './componentes/disenoweb/disenoweb.component';
import { ProgramacionComponent } from './componentes/programacion/programacion.component';
import { CarrouselComponent } from './componentes/carrousel/carrousel.component';
import { DetalleGraficoComponent } from './componentes/detalle-grafico/detalle-grafico.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    AboutmeComponent,
    DisenografComponent,
    DisenowebComponent,
    ProgramacionComponent,
    CarrouselComponent,
    DetalleGraficoComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragScrollModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
