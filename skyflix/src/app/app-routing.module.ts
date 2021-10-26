import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilmesComponent } from './componentes/filmes/filmes.component';
import { JogosComponent } from './componentes/jogos/jogos.component';
import { ProgramasComponent } from './componentes/programas/programas.component';

const routes: Routes = [
  { path: 'jogos', component: JogosComponent },
  { path: 'programas', component: ProgramasComponent },
  { path: 'filmeAcao', component: FilmesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
