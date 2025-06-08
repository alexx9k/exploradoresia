import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QueEsClaudeAiComponent } from './que-es-claude-ai/que-es-claude-ai/que-es-claude-ai.component';
import { Actividad1Component } from './actividad1/actividad1/actividad1.component';
import { InteligenciaArtificialComponent } from './inteligencia-artificial/inteligencia-artificial/inteligencia-artificial.component';
import { EvaluacionComponent } from './evaluacion/evaluacion/evaluacion.component';
import { CreditosComponent } from './creditos/creditos/creditos.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    QueEsClaudeAiComponent,
    Actividad1Component,
    InteligenciaArtificialComponent,
    EvaluacionComponent,
    CreditosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
