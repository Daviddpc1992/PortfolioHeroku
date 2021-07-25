import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetalleGraficoComponent } from './componentes/detalle-grafico/detalle-grafico.component';
import { DetalleWebComponent } from './componentes/detalle-web/detalle-web.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';
import { HeroComponent } from './componentes/hero/hero.component';

const routes: Routes =
  [
    { path: '', pathMatch: 'full', component: HeroComponent },
    { path: 'programacion/:proyectoid', component: DetalleComponent },
    { path: 'grafico/:proyectoid', component: DetalleGraficoComponent },
    { path: 'web/:proyectoid', component: DetalleWebComponent },
    { path: '**', redirectTo: '/' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
