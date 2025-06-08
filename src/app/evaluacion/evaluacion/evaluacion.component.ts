import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // Asegúrate de tener estas importaciones

@Component({
  selector: 'app-evaluacion',
  template: `
    <div class="evaluacion-page-container">
      <div class="content-panel">
        <h2 class="pixel-font page-title">EVALUACIÓN FINAL</h2>

        <p class="page-text intro-text">¡Hola a todos, exploradores de la IA!</p>
        <p class="page-text intro-text">
          Es momento de poner a prueba lo que hemos aprendido. Realiza la actividad interactiva directamente aquí:
        </p>

        <div class="wordwall-embed-container">
          <iframe
            [src]="wordwallEmbedUrl"
            width="500"  height="380" frameborder="0"
            allowfullscreen
            class="wordwall-iframe"
          ></iframe>
        </div>

        <img src="assets/ev.png" width="270" height="360">




        <button class="back-button pixel-font" routerLink="/">Volver a Inicio</button>
      </div>
    </div>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    .evaluacion-page-container {
      min-height: 100vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: 20px;
      background: linear-gradient(135deg, hwb(249 28% 5%) 5%, rgb(79, 196, 216) 80%);

      color: white;
      text-align: center;
    }

    .content-panel {
      background-color: rgba(51, 51, 51, 0.6);
      padding: 40px;
      border-radius: 12px;
      max-width: 850px;
      width: 90%;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
      margin-top: 20px;
      margin-bottom: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .page-title {
      font-size: 3em;
      text-shadow: 4px 4px 0px #000;
      margin-bottom: 30px;
      color: #a0a0ff;
      line-height: 1.2;
    }

    .page-text {
      font-family: 'Roboto', sans-serif;
      font-size: 1.2em;
      line-height: 1.8;
      max-width: 700px;
      margin-bottom: 20px;
      padding: 0 10px;
      text-shadow: 1px 1px 0px rgba(0,0,0,0.5);
      font-weight: 400;
      text-align: center;
    }

    .intro-text {
        margin-bottom: 10px;
        color: #f0f0ff;
        font-size: 1.3em;
    }

    /* ESTILOS PARA EL CONTENEDOR DEL IFRAME */
    .wordwall-embed-container {
      /* Ajustamos para que sea responsivo, manteniendo las proporciones de Wordwall */
      position: relative; /* Necesario para el padding-bottom % */
      width: 100%;
      max-width: 500px; /* Usa el 'width' de Wordwall como el ancho máximo */
      /* Calcula aspect-ratio basado en height/width de Wordwall (380/500 = 0.76 * 100% = 76%) */
      padding-bottom: 76%; /* Esta es la clave para la proporción responsiva */
      height: 0; /* Reinicia la altura */
      background-color: #000;
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 30px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
      border: 3px solid #8a2be2;
    }

    .wordwall-iframe {
      position: absolute; /* Ocupa todo el espacio del contenedor con padding-bottom */
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: block;
    }

    .evaluation-list {
      font-family: 'Roboto', sans-serif;
      font-size: 1.15em;
      line-height: 2;
      max-width: 700px;
      margin-bottom: 30px;
      padding-left: 40px;
      text-align: left;
      list-style-type: '🎮 ';
      color: #e0e0ff;
    }

    .evaluation-list li {
        margin-bottom: 10px;
        text-shadow: 1px 1px 0px rgba(0,0,0,0.4);
    }

    .pixel-font {
      font-family: 'Press Start 2P', cursive;
    }

    .back-button {
      background-color:rgb(14, 146, 124);
      color: white;
      padding: 15px 35px;
      border: 3px solid #ffffff;
      border-radius: 8px;
      cursor: pointer;
      font-size: 1.1em;
      transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 200px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .back-button:hover {
      background-color: #7a1be0;
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    }

    /* Media Queries para Responsividad */
    @media (max-width: 768px) {
      .page-title {
        font-size: 2.2em;
      }
      .page-text, .evaluation-list {
        font-size: 1.1em;
        padding: 0 15px;
      }
      .intro-text {
        font-size: 1.2em;
      }
      .wordwall-embed-container {
        max-width: 95%; /* Se ajusta mejor en tablets */
      }
      .evaluation-list {
          padding-left: 30px;
      }
      .content-panel {
        padding: 30px;
        width: 95%;
      }
      .back-button {
        font-size: 0.9em;
        padding: 12px 25px;
        min-width: unset;
        width: 100%;
      }
    }

    @media (max-width: 480px) {
      .page-title {
        font-size: 1.8em;
      }
      .page-text, .evaluation-list {
        font-size: 1em;
      }
      .intro-text {
        font-size: 1.1em;
      }
      .wordwall-embed-container {
        max-width: 100%; /* Ocupa todo el ancho disponible en móviles */
      }
      .content-panel {
        padding: 20px;
      }
      .evaluation-list {
          padding-left: 20px;
      }
    }
  `]
})
export class EvaluacionComponent {
  wordwallEmbedUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    // **¡Actualizado con tu URL de incrustación exacta!**
    const rawUrl = 'https://wordwall.net/es/embed/00a851b8718e437d973822b1a25e3d20?themeId=1&templateId=5&fontStackId=0';
    this.wordwallEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(rawUrl);
  }
}
