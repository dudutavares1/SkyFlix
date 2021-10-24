import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JogosComponent } from './componentes/jogos/jogos/jogos.component';

import { ProgramasComponent } from './componentes/programas/programas/programas.component';

const routes: Routes = [
  
  { path: 'jogos', component: JogosComponent },

  { path: 'Programas', component: ProgramasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
