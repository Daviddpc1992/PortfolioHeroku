import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetalleGraficoComponent } from './componentes/detalle-grafico/detalle-grafico.component';
import { HeroComponent } from './componentes/hero/hero.component';

const routes: Routes =
  [
    { path: '', pathMatch: 'full', component: HeroComponent },
    // { path: '/grafico/id', children: DetalleGraficoComponent },
    { path: '**', redirectTo: '/' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
