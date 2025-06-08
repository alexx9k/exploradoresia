import { Component } from '@angular/core';

@Component({
  selector: 'app-actividad1',
  template: `
    <div class="activity-page-container">
      
      <div class="text-content-panel"> 
        <h2 class="pixel-font page-title">Actividad 1: ¡Aprende con Educaplay!</h2>

        <p class="page-text">
          ¡Hola a todos!

Según lo que exploramos en la página sobre ¿que es Claude.ia?, vamos a poner a prueba nuestro conocimiento. Ahora, respondan las siguientes preguntas en Educaplay. ¡Mucho éxito!
        </p>
      </div>
      <div class="educaplay-embed-wrapper">
        <iframe src="https://www.educaplay.com/learning-resources/24134962-quiz_sobre_ia_claude.html"
                width="100%"
                height="500px"
                frameborder="0"
                allowfullscreen>
        </iframe>
      </div>

      <div class="button-group">
        <button class="back-button pixel-font" routerLink="/">Volver a Inicio</button>
      </div>
    </div>
  `,
  styles: [`
    /* Importa las fuentes si no están ya importadas globalmente en styles.scss */
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    .activity-page-container {
      min-height: 100vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center; /* Centrar el contenido verticalmente */
      box-sizing: border-box;
      padding: 20px;

      /* <<-- OPCIONES DE DEGRADADO PARA EL FONDO PRINCIPAL (activity-page-container) -->> */

      /* OPCIÓN 1: Degradado PÚRPURA/AZUL a NARANJA/ROJIZO (con transparencia ajustable) */
      /* Ajusta los valores de 'A' (alpha) en rgba() para calibrar la transparencia general del fondo */
      /* 'hwb' no tiene un canal alfa directo, pero puedes usar 'rgba' para mayor control */
      /* background: linear-gradient(135deg, rgba(138, 43, 226, 0.8) 10%, rgba(212, 107, 74, 0.9) 60%); */ 

      /* OPCIÓN 2: Degradado VERDE (el que tienes activo ahora, con transparencia ajustable) */
      /* Ajusta los valores de 'A' (alpha) en rgba() para calibrar la transparencia general del fondo */
      background: linear-gradient(135deg, rgba(128, 206, 108, 0.8), rgba(92, 150, 54, 0.9));
      
      color: white; /* Color de texto predeterminado */
      text-align: center; /* Alineación de texto general */
    }

    /* Estilo para el panel de texto */
    .text-content-panel {
      padding: 30px 40px; 
      border-radius: 12px;
      box-shadow: 0 8px 16px rgba(75, 153, 73, 0.84);
      max-width: 850px; 
      width: 90%;
      margin-bottom: 30px; 
      box-sizing: border-box; 

      /* <<-- OPCIONES DE DEGRADADO PARA EL PANEL DE TEXTO (text-content-panel) -->> */
      /* Aquí puedes ajustar los colores, el ángulo y las posiciones, y la TRANSPARENCIA (canal alfa en rgba) */
      
      /* OPCIÓN A: Degradado de Negro semitransparente a un Gris oscuro semitransparente */
      background: linear-gradient(180deg, rgba(132, 160, 137, 0.7), rgba(50, 50, 50, 0.7)); 

      /* OPCIÓN B: Degradado de Azul oscuro a Morado semitransparente */
      /* background: linear-gradient(45deg, rgba(20, 20, 80, 0.7), rgba(100, 0, 100, 0.7)); */

      /* OPCIÓN C: Un color sólido semitransparente (si no quieres degradado para el panel) */
      /* Ajusta el último valor (0.6) para calibrar la transparencia */
      background: rgba(55, 116, 5, 0.99); 
    }

    .page-title {
      font-size: 3em; 
      text-shadow: 4px 4px 0px #000;
      margin-bottom: 20px; 
      color: white;
      line-height: 1.2;
    }

    .page-text {
      font-family: 'Roboto', sans-serif; 
      font-size: 1.2em;
      line-height: 1.8;
      max-width: 800px; 
      margin: 0 auto; 
      padding: 0; 
      text-shadow: 1px 1px 0px rgba(0,0,0,0.5);
      font-weight: 400;
    }

    .pixel-font {
      font-family: 'Press Start 2P', cursive;
    }

    .button-group {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 25px;
      margin-top: 30px; 
    }

    .back-button {
      background-color:rgb(18, 197, 92);
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
      background-color:rgb(55, 240, 95);
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    }

    /* Estilos específicos para el wrapper del iframe de Educaplay */
    .educaplay-embed-wrapper {
        width: 100%; 
        max-width: 800px; 
        margin-top: 20px; 
        margin-bottom: 20px; 
        padding: 20px; 
        border-radius: 12px; 
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4); 
        overflow: hidden; 
        box-sizing: border-box; 

        /* <<-- OPCIONES DE DEGRADADO PARA EL PANEL DEL IFRAME (educaplay-embed-wrapper) -->> */
        /* Ajusta los valores de 'A' (alpha) en rgba() para calibrar la transparencia */

        /* OPCIÓN A: Degradado de Negro semitransparente a un Gris oscuro semitransparente */
        /* background: linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(50, 50, 50, 0.7)); */

        /* OPCIÓN B: Degradado de Azul claro a Blanco semitransparente (más luminoso) */
        /* background: linear-gradient(to top, rgba(173, 216, 230, 0.7), rgba(255, 255, 255, 0.7)); */

        /* OPCIÓN C: Un color sólido semitransparente (el que tenías antes con transparencia) */
        /* Ajusta el último valor (0.6) para calibrar la transparencia */
        background: rgba(51, 51, 51, 0.6); 
    }

    .educaplay-embed-wrapper iframe {
        display: block; 
        border: 3px solid #a0a0ff; 
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        width: 100%; 
        height: 500px; 
    }

    /* Responsividad */
    @media (max-width: 768px) {
      .page-title {
        font-size: 2.2em;
      }
      .page-text {
        font-size: 1.1em;
      }
      .text-content-panel { 
        padding: 25px 30px;
        width: 95%;
      }
      .educaplay-embed-wrapper { 
        padding: 15px;
        width: 95%;
      }
      .back-button {
        font-size: 0.9em;
        padding: 12px 25px;
        min-width: unset;
        width: 100%;
      }
      .button-group {
        flex-direction: column;
        align-items: center;
      }
      .educaplay-embed-wrapper iframe {
          height: 400px; 
      }
    }

    @media (max-width: 480px) {
      .page-title {
        font-size: 1.8em;
      }
      .page-text {
        font-size: 1em;
      }
      .text-content-panel { 
        padding: 20px 25px;
      }
      .educaplay-embed-wrapper { 
        padding: 10px;
      }
      .educaplay-embed-wrapper iframe {
          height: 300px; 
      }
    }
  `]
})
export class Actividad1Component { }