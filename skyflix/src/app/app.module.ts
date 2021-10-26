import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './views/menu/menu.component';
import { RodapeComponent } from './views/rodape/rodape.component';

import { HttpClientModule } from '@angular/common/http';

import { JogosComponent } from './componentes/jogos/jogos.component';
import { ProgramasComponent } from './componentes/programas/programas.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    JogosComponent,
    ProgramasComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
