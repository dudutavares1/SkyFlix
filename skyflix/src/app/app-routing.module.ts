import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilmesComponent } from './componentes/filmes/filmes.component';
import { JogosComponent } from './componentes/jogos/jogos.component';
import { ProgramasComponent } from './componentes/programas/programas.component'; ////////////////////////////////////////////
import { SeriesComponent } from './componentes/series/series.component';
import { TemporadasComponent } from './componentes/temporadas/temporadas.component';

import { CadastroComponent } from './componentes/usuario/cadastro/cadastro.component';
import { LoginComponent } from './componentes/usuario/login/login.component';

const routes: Routes = [
  { path: 'jogos/:category', component: JogosComponent },


  { path: 'filmes', component: FilmesComponent },

  { path: 'programas', component: ProgramasComponent },
  { path: 'seriesAcao', component: SeriesComponent },
  { path: 'temporadas', component: TemporadasComponent },

  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
