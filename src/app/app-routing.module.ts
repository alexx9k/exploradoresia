import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// AÑADIDA O VERIFICADA ESTA LÍNEA
import { HomeComponent } from './home.component'; // ¡Importante que sea './home.component' si está en src/app/!

// ... (otras importaciones de tus componentes de sección) ...
import { QueEsClaudeAiComponent } from './que-es-claude-ai/que-es-claude-ai/que-es-claude-ai.component';
import { Actividad1Component } from './actividad1/actividad1/actividad1.component';
import { InteligenciaArtificialComponent } from './inteligencia-artificial/inteligencia-artificial/inteligencia-artificial.component';
import { EvaluacionComponent } from './evaluacion/evaluacion/evaluacion.component';
import { CreditosComponent } from './creditos/creditos/creditos.component';

const routes: Routes = [
  // LA RUTA PRINCIPAL DEBE APUNTAR A HomeComponent
  { path: '', component: HomeComponent, pathMatch: 'full' },

  // ... (rutas de tus componentes de sección) ...
  { path: 'que-es-claude-ai', component: QueEsClaudeAiComponent },
  { path: 'actividad-1', component: Actividad1Component },
  { path: 'inteligencia-artificial', component: InteligenciaArtificialComponent },
  { path: 'evaluacion', component: EvaluacionComponent },
  { path: 'creditos', component: CreditosComponent },

  // El comodín debe redirigir a la raíz
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
