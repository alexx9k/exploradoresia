import { Component } from '@angular/core';

@Component({
  selector: 'app-que-es-claude-ai',
  template: `
    <div class="content-page-container">

      <div class="main-text-panel">
        <h2 class="pixel-font page-title">¿Qué es Claude.AI?</h2>

        <img src="assets/claude2.png" alt="Claude AI Logo" class="claude-image">

        <p class="page-text">
          Claude es un modelo de
          lenguaje grande (LLM), una forma avanzada
          de inteligencia artificial, desarrollado por
          la empresa Anthropic. A diferencia de un motor
          de búsqueda o un sistema operativo, Claude es
          un programa de software diseñado para comprender, procesar y
          generar texto de manera similar a como lo haría un humano.
        </p>

        <h3 class="page-subtitle">¿Quién está detrás de Claude?</h3>
        <p class="page-text">
          La creación de Claude es obra de Anthropic, una
          compañía de investigación en IA que pone un fuerte
          énfasis en el desarrollo de sistemas de inteligencia
          artificial que sean seguros, útiles y responsables.
          Su enfoque se centra en la "IA Constitucional", un
          método que busca alinear el comportamiento de la IA con
          principios éticos y valores humanos para minimizar sesgos
          y la generación de contenido dañino.
        </p>

        <h3 class="page-subtitle">Características y Funciones Principales</h3>
        <p class="page-text">
          Claude se distingue por varias capacidades que
          lo hacen una herramienta poderosa y versátil:
          <br>
          <strong>Procesamiento de Lenguaje Natural (PLN):</strong> Es su función central.
          Claude puede entender el lenguaje humano, lo que le permite mantener
          conversaciones fluidas y coherentes.
          <br>
          <strong>Generación de Texto:</strong> Es capaz de producir una
          amplia variedad de contenido escrito, desde artículos, correos
          electrónicos, resúmenes, hasta poesía y guiones.
          <br>
          <strong>Generación de Código:</strong> Claude puede escribir y
          depurar código en diversos lenguajes de programación, asistiendo
          a desarrolladores y programadores.
          <br>
          <strong>Capacidad Conversacional:</strong> Puede interactuar
          de manera prolongada, manteniendo el contexto de diálogos
          extensos, lo que lo convierte en un excelente asistente virtual.
          <br>
          <strong>Análisis de Información:</strong> Claude tiene la
          capacidad de procesar y resumir grandes volúmenes de texto,
          identificando puntos clave y extrayendo información relevante rápidamente.
          <br>
          <strong>Multilingüe:</strong> Sí, Claude puede interactuar y
          procesar información en múltiples idiomas, facilitando la
          comunicación global.
        </p>

        <h3 class="page-subtitle">¿Es Claude una IA Generativa?</h3>
        <p class="page-text">
          Sí, Claude es un modelo de IA generativa. Esto significa que
          no solo puede procesar información existente, sino que también tiene
          la capacidad de crear contenido nuevo y original (texto, código)
          basándose en los patrones que ha aprendido de grandes volúmenes de datos.
        </p>

        <h3 class="page-subtitle">Aplicaciones Comerciales y Más Allá</h3>
        <p class="page-text">
          Debido a su versatilidad, Claude tiene un amplio rango de
          aplicaciones comerciales y puede ser utilizado en diversas profesiones y
          sectores:
          <br>
          <strong>Automatización de tareas:</strong> Resúmenes
          de reuniones, redacción de borradores.
          <br>
          <strong>Atención al cliente:</strong> Como chatbot o asistente
          para responder consultas frecuentes.
          <br>
          <strong>Marketing y Contenido:</strong> Generación de ideas, creación
          de descripciones de productos, posts para redes sociales.
          <br>
          <strong>Desarrollo de Software:</strong> Asistencia en la programación y
          depuración de código.
          <br>
          <strong>Análisis de Datos:</strong> Procesamiento de datos textuales
          para extraer insights.
          <br>
          <strong>Educación:</strong> Tutorías personalizadas, creación de
          material didáctico.
          <br>
          <strong>Investigación:</strong> Resumen de documentos y extracción
          de información clave.
        </p>

        <p class="page-text">
          En esencia, Claude es una herramienta de IA avanzada que, gracias
          a su diseño ético y sus potentes capacidades de lenguaje, ofrece
          soluciones innovadoras para mejorar la productividad y la creatividad
          en casi cualquier campo profesional donde el procesamiento de la
          información y la generación de contenido sean clave.
        </p>

<img src="assets/claude3.jpg" alt="Claude AI Logo" class="claude-image">


      </div> <div class="button-group">
        <button class="back-button pixel-font" routerLink="/">Volver a Inicio</button>
        <button class="educaplay-button pixel-font" routerLink="/actividad-1">
          Actividad Educaplay</button>
      </div>

    </div>
  `,
  styles: [`
    /* Importa la fuente PixelFont (si aún no está globalmente) */
    @import url('https://fonts.googleapis.com/css2?family=Press+Start2P&display=swap');
    /* Importa la fuente legible (Roboto, por ejemplo) */
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    .content-page-container {
      min-height: 100vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: 20px;

      /* <<-- OPCIONES DE DEGRADADO PARA EL FONDO PRINCIPAL (.content-page-container) -->> */
      background: linear-gradient(135deg, rgba(224, 109, 74, 0.8), rgba(196, 107, 34, 0.9));

      color: white;
      text-align: center;
    }

    .page-title {
      font-size: 3em;
      text-shadow: 4px 4px 0px #000;
      margin-bottom: 30px;
      color: white;
      line-height: 1.2;
    }

    .page-text {
      font-family: 'Roboto', sans-serif;
      font-size: 1.2em;
      line-height: 1.8;
      max-width: 800px;
      margin-bottom: 20px;
      padding: 0 10px;
      text-shadow: 1px 1px 0px rgba(0,0,0,0.5);
      font-weight: 400;
      text-align: left;
    }

    .main-text-panel {
      padding: 40px;
      border-radius: 12px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
      max-width: 850px;
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 40px;
      box-sizing: border-box;

      /* <<-- OPCIONES DE DEGRADADO PARA EL PANEL DE TEXTO (.main-text-panel) -->> */
      background: rgba(194, 55, 55, 0.84);
    }

    /* <<-- ESTILOS PARA LA IMAGEN CLAUDE.PNG (.claude-image) -->> */
    .claude-image {
      /* CALIBRAR TAMAÑO */
      width: 600px;  /* Ajusta este valor para controlar el ancho de la imagen */
      height: auto; /* Mantener la proporción original. No tocar si quieres proporciones. */
                      /* Si quieres un alto fijo, puedes poner, ej: height: 100px; */
                      /* Si quieres que ocupe todo el ancho disponible en su contenedor (hasta max-width), usa width: 100%; */
      max-width: 400%; /* Asegura que la imagen no se desborde del panel en pantallas pequeñas */

      /* CALIBRAR POSICIÓN (margenes) */
      /* Los márgenes controlan el espacio alrededor de la imagen */
      margin-top: 20px;    /* Espacio arriba de la imagen */
      margin-bottom: 30px; /* Espacio abajo de la imagen (entre la imagen y el primer párrafo) */
      margin-left: auto;   /* Centrar horizontalmente */
      margin-right: auto;  /* Centrar horizontalmente */
      display: block;      /* Necesario para que margin: auto funcione correctamente */

      /* Otros estilos opcionales */
      border-radius: 8px; /* Bordes ligeramente redondeados */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Sombra suave */
    }


    .pixel-font {
      font-family: 'Press Start 2P', cursive;
    }

    .page-subtitle {
      font-family: 'Press Start 2P', cursive;
      color: #f0f0f0;
      font-size: 1.8em;
      margin-top: 30px;
      margin-bottom: 15px;
      text-shadow: 2px 2px 0px #000;
      text-align: center;
    }

    .button-group {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 25px;
      margin-top: 30px;
    }

    .back-button,
    .educaplay-button {
      background-color:rgb(233, 68, 68);
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

    .back-button:hover,
    .educaplay-button:hover {
      background-color:rgb(255, 0, 43);
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    }

    /* Responsividad */
    @media (max-width: 768px) {
      .page-title {
        font-size: 2.2em;
      }
      .page-subtitle {
        font-size: 1.5em;
      }
      .page-text {
        font-size: 1.1em;
      }
      .main-text-panel {
        padding: 30px;
        width: 95%;
      }
      .claude-image { /* Ajustes responsivos para la imagen */
        width: 100px; /* Tamaño más pequeño en pantallas medianas */
        margin-bottom: 20px;
      }
      .back-button, .educaplay-button {
        font-size: 0.9em;
        padding: 12px 25px;
        min-width: unset;
        width: 100%;
      }
      .button-group {
        flex-direction: column;
        align-items: center;
      }
    }

    @media (max-width: 480px) {
      .page-title {
        font-size: 1.8em;
      }
      .page-subtitle {
        font-size: 1.2em;
      }
      .page-text {
        font-size: 1em;
      }
      .main-text-panel {
        padding: 20px;
      }
      .claude-image { /* Ajustes responsivos para la imagen en móviles */
        width: 80px; /* Aún más pequeña en móviles */
        margin-bottom: 15px;
      }
    }
  `]
})
export class QueEsClaudeAiComponent { }
