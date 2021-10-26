import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilmesComponent } from './componentes/filmes/filmes.component';
import { JogosComponent } from './componentes/jogos/jogos.component';
import { ProgramasComponent } from './componentes/programas/programas.component';
import { SeriesComponent } from './componentes/series/series.component';

const routes: Routes = [
  { path: 'jogos', component: JogosComponent },
  { path: 'filmes', component: FilmesComponent },
  { path: 'programas', component: ProgramasComponent },
  { path: 'seriesAcao', component: SeriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
