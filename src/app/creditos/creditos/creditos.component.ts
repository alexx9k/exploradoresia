import { Component } from '@angular/core';

@Component({
  selector: 'app-creditos',
  template: `
    <div class="content-panel">
      <h2>Créditos y Referencias</h2>
      <p><strong>Proyecto desarrollado por:</strong></p>
      <ul>
        <li>[Tu Nombre Completo 1]</li>
        <li>[Nombre del Estudiante 2, si aplica]</li>
        <li>[Nombre del Estudiante 3, si aplica]</li>
        </ul>
      <p><strong>Docente:</strong> [Nombre Completo del Docente]</p>
      <p><strong>Referencias y herramientas utilizadas:</strong></p>
      <ul>
        <li>Angular Framework: <a href="https://angular.dev/" target="_blank" style="color: #ADD8E6;">angular.dev</a></li>
        <li>Visual Studio Code: <a href="https://code.visualstudio.com/" target="_blank" style="color: #ADD8E6;">code.visualstudio.com</a></li>
        <li>Node.js y npm: <a href="https://nodejs.org/" target="_blank" style="color: #ADD8E6;">nodejs.org</a></li>
        <li>Google Fonts (Press Start 2P): <a href="https://fonts.google.com/specimen/Press+Start+2P" target="_blank" style="color: #ADD8E6;">fonts.google.com</a></li>
        <li>Educaplay: <a href="https://www.educaplay.com/" target="_blank" style="color: #ADD8E6;">educaplay.com</a></li>
        </ul>
      <button class="back-button" routerLink="/">Volver a Inicio</button>
    </div>
  `,
  styles: [`
    .content-panel {
      background-color: rgba(51, 51, 51, 0.8);
      color: white;
      padding: 30px;
      margin: 40px auto;
      border-radius: 12px;
      max-width: 700px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
      text-align: center;
      font-family: Arial, sans-serif;
    }
    h2 {
      font-family: 'Press Start 2P', cursive;
      color: #a0a0ff;
      margin-bottom: 20px;
      font-size: 2em;
    }
    p {
      font-size: 1.1em;
      line-height: 1.6;
      margin-bottom: 10px;
      text-align: left;
      margin-left: auto;
      margin-right: auto;
      max-width: 600px;
    }
    ul {
        list-style-type: none; /* Sin viñetas por defecto */
        padding-left: 0; /* Sin sangría */
        text-align: left;
        margin-left: auto;
        margin-right: auto;
        max-width: 600px;
        margin-bottom: 20px;
    }
    li {
        margin-bottom: 8px;
        font-size: 1.1em;
    }
    a {
        text-decoration: none; /* Quitar subrayado a los enlaces */
        font-weight: bold;
    }
    a:hover {
        text-decoration: underline; /* Subrayar al pasar el ratón */
    }
    .back-button {
      background-color: #8a2be2;
      color: white;
      padding: 12px 25px;
      border: 2px solid white;
      border-radius: 8px;
      cursor: pointer;
      font-family: 'Press Start 2P', cursive;
      font-size: 1em;
      transition: background-color 0.3s ease, transform 0.2s ease;
      margin-top: 20px;
    }
    .back-button:hover {
      background-color: #7a1be0;
      transform: translateY(-2px);
    }
  `]
})
export class CreditosComponent { }
