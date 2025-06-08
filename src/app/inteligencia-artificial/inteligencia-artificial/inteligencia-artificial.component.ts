import { Component } from '@angular/core';

@Component({
  selector: 'app-inteligencia-artificial',
  template: `
    <div class="ai-page-container">
      <h1 class="pixel-font ia-page-title">Inteligencia Artificial: En la Vida Diaria y Educación</h1>

      <div class="content-panel-wrapper">
        <section class="ia-section">
          <h2 class="section-heading pixel-font">1. ¿Qué es la Inteligencia Artificial?</h2>
          <div class="section-content">

            <img src="assets/robot5.jpg" alt="Inteligencia Artificial Logo" class="ai-image">

            <p>La Inteligencia Artificial (IA) se refiere a la capacidad de las máquinas para realizar tareas que normalmente requieren inteligencia humana. Esto incluye aprender, razonar, resolver problemas, percibir y comprender el lenguaje.</p>
            <p>Lejos de las representaciones de ciencia ficción, la IA actual se enfoca en resolver problemas específicos y mejorar la eficiencia en diversas áreas. Hablamos de <strong>IA Débil (ANI)</strong>, diseñada para una tarea particular, como reconocer imágenes o jugar ajedrez, a diferencia de una hipotética <strong>IA Fuerte (AGI)</strong>, que poseería una inteligencia general comparable a la humana.</p>
          </div>
        </section>

        <section class="ia-section">
          <h2 class="section-heading pixel-font">2. La IA en Nuestra Vida Diaria</h2>
          <div class="section-content">
            <img src="assets/ia2.jpg" alt="IA en la vida diaria" class="ia2-image">
            <p>La IA es omnipresente, a menudo operando en segundo plano, mejorando nuestra comodidad y eficiencia:</p>
            <ul>
              <li><strong>Asistentes Virtuales:</strong> Siri, Google Assistant, Alexa te ayudan con tareas diarias y búsquedas.</li>
              <li><strong>Recomendaciones Personalizadas:</strong> Plataformas como Netflix, Spotify o Amazon usan IA para sugerirte contenido o productos basados en tus gustos.</li>
              <li><strong>Navegación y Mapas:</strong> Aplicaciones como Google Maps optimizan rutas y predicen el tráfico en tiempo real.</li>
              <li><strong>Fotografía Digital:</strong> Mejora automática de imágenes, reconocimiento facial y de objetos en tu smartphone.</li>
              <li><strong>Finanzas y Seguridad:</strong> Detección de fraudes en transacciones bancarias y sistemas de seguridad inteligentes.</li>
              <li><strong>Hogares Inteligentes:</strong> Termostatos que aprenden tus preferencias, sistemas de iluminación que se adaptan y dispositivos de seguridad que detectan anomalías.</li>
              <li><strong>Atención al Cliente:</strong> Chatbots y asistentes virtuales en sitios web que resuelven consultas rápidas y dirigen a los usuarios a la información correcta.</li>
            </ul>
          </div>
        </section>

        <section class="ia-section">
          <h2 class="section-heading pixel-font">3. Impacto en Diversas Profesiones</h2>
          <div class="section-content">
            <img src="assets/ia3.jpg" alt="IA impacto en profesiones" class="ia3-image">
            <p>La IA no reemplaza a los profesionales, los empodera y transforma sus roles:</p>
            <ul>
              <li><strong>Medicina:</strong> Asistencia en diagnósticos (análisis de imágenes médicas), descubrimiento de fármacos y robots quirúrgicos.</li>
              <li><strong>Ingeniería:</strong> Diseño generativo para optimizar estructuras, simulación avanzada y mantenimiento predictivo de maquinaria.</li>
              <li><strong>Derecho:</strong> Análisis rápido de volúmenes masivos de documentos legales y predicción de resultados judiciales.</li>
              <li><strong>Periodismo y Creación de Contenido:</strong> Generación de resúmenes de noticias, redacción de informes básicos y asistencia en la investigación de datos.</li>
              <li><strong>Marketing:</strong> Segmentación de audiencia, personalización de campañas y análisis de comportamiento del consumidor.</li>
              <li><strong>Agricultura:</strong> Monitoreo inteligente de cultivos, optimización de riego, detección temprana de plagas.</li>
              <li><strong>Transporte:</strong> Desarrollo de vehículos autónomos, optimización de rutas logísticas y gestión de tráfico inteligente.</li>
              <li><strong>Servicios al Cliente:</strong> Implementación de chatbots avanzados para resolución de consultas complejas y soporte 24/7.</li>
            </ul>
          </div>
        </section>

        <section class="ia-section">
          <h2 class="section-heading pixel-font">4. La IA Transformando la Educación</h2>
          <div class="section-content">
            <img src="assets/robot6.png" alt="IA en la educación" class="robot6-image">
            <p>La IA está revolucionando la forma en que aprendemos y enseñamos:</p>
            <ul>
              <li><strong>Aprendizaje Personalizado:</strong> Plataformas que adaptan el currículo al ritmo y estilo de aprendizaje de cada estudiante.</li>
              <li><strong>Tutoría Inteligente:</strong> Sistemas de IA que ofrecen apoyo individualizado, responden preguntas y guían al estudiante.</li>
              <li><strong>Evaluación Automatizada:</strong> Herramientas que corrigen pruebas y proporcionan retroalimentación instantánea, liberando tiempo al docente.</li>
              <li><strong>Accesibilidad Mejorada:</strong> Traductores en tiempo real, subtítulos automáticos y herramientas para estudiantes con necesidades especiales.</li>
              <li><strong>Análisis de Datos:</strong> Ayuda a educadores a identificar patrones de aprendizaje y áreas donde los estudiantes necesitan más apoyo.</li>
              <li><strong>Creación de Contenido Educativo:</strong> Asistentes de IA que pueden generar materiales didácticos, resúmenes, preguntas de examen.</li>
              <li><strong>El Rol del Docente:</strong> La IA no reemplaza a los educadores, sino que los transforma en facilitadores del aprendizaje, mentores y diseñadores de experiencias más ricas.</li>
            </ul>
          </div>
        </section>

        <section class="ia-section">
          <h2 class="section-heading pixel-font">5. Desafíos y Consideraciones Éticas</h2>
          <div class="section-content">
            <img src="assets/robot7.png" alt="Desafíos éticos de la IA" class="robot7-image">
            <p>A pesar de sus beneficios, la IA presenta desafíos importantes:</p>
            <ul>
              <li><strong>Privacidad y Datos:</strong> La recolección masiva de datos y su uso ético.</li>
              <li><strong>Sesgos Algorítmicos:</strong> La IA puede heredar y amplificar sesgos presentes en los datos de entrenamiento.</li>
              <li><strong>Impacto Laboral:</strong> Automatización de tareas repetitivas y la necesidad de nuevas habilidades humanas.</li>
              <li><strong>Seguridad y Fiabilidad:</strong> Asegurar que los sistemas de IA sean robustos y no generen resultados inesperados o peligrosos.</li>
              <li><strong>Responsabilidad y Transparencia:</strong> Determinar quién es responsable cuando un sistema de IA comete un error, y hacer que los procesos sean comprensibles.</li>
              <li><strong>Control y Regulación:</strong> La necesidad de establecer marcos legales y éticos claros.</li>
            </ul>
          </div>
        </section>

        <section class="ia-section">
          <h2 class="section-heading pixel-font">6. El Futuro de la IA</h2>
          <div class="section-content">
            <img src="assets/robot99.jpg" alt="Futuro de la IA" class="robot99-image"> <p>La IA sigue evolucionando rápidamente. Veremos avances en IA Generativa (creación de texto, imágenes, música), mayor integración en la robótica y un enfoque creciente en la IA responsable y ética para asegurar que beneficie a toda la sociedad. Continuará transformando aspectos de la vida, desde la salud mental hasta la sostenibilidad.</p>

            <img src="assets/robot.png" alt="Robot de Inteligencia Artificial" class="robot-image">

          </div>
        </section>

        <div class="button-group">
          <button class="evaluation-button pixel-font" routerLink="/evaluacion">Ir a la Evaluación Final</button>

          <button class="back-button pixel-font" routerLink="/">Volver a la Página Principal</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    /* Importación de fuentes */
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    /* Contenedor principal de la página */
    .ai-page-container {
      min-height: 100vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start; /* Alinea el contenido al inicio para dejar espacio para el título */
      box-sizing: border-box;
      padding: 20px;
      background: linear-gradient(135deg, rgb(88, 112, 177), rgb(90, 147, 173)); /* Degradado de fondo */
      color: white;
      text-align: center;
    }

    /* Título principal de la página */
    .ia-page-title {
      font-family: 'Press Start 2P', cursive;
      color: white;
      font-size: 3em;
      text-shadow: 4px 4px 0px #000;
      margin-bottom: 30px;
      margin-top: 20px;
      line-height: 1.2;
    }

    /* Contenedor del panel de contenido */
    .content-panel-wrapper {
        background-color: rgba(16, 35, 119, 0.7); /* Azul oscuro semi-transparente */
        padding: 40px;
        border-radius: 12px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
        max-width: 850px;
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: flex-start; /* Alinea el contenido a la izquierda dentro del panel */
        justify-content: flex-start;
        margin-top: 20px;
        margin-bottom: 40px;
        text-align: left; /* Alinea el texto a la izquierda */
    }

    /* Estilos para cada sección */
    .ia-section {
        margin-bottom: 30px;
        padding: 20px;
        background-color: rgba(240, 240, 240, 0.1); /* Fondo claro semi-transparente para las secciones */
        border-radius: 10px;
        border-left: 5px solid #8a2be2; /* Borde morado a la izquierda */
        width: 100%;
        box-sizing: border-box;
    }

    /* Títulos de las secciones */
    .section-heading {
        font-family: 'Press Start 2P', cursive;
        color: #f0f0f0; /* Blanco grisáceo */
        font-size: 1.5em;
        margin-top: 0;
        margin-bottom: 15px;
        text-shadow: 1px 1px 0px #000;
    }

    /* Estilos para párrafos y elementos de lista dentro de las secciones */
    .section-content p, .section-content ul li {
        font-family: 'Roboto', sans-serif;
        font-size: 1.1em;
        line-height: 1.7;
        color: #e0e0e0; /* Blanco ligeramente grisáceo */
        margin-bottom: 10px;
        text-shadow: 1px 1px 0px rgba(0,0,0,0.3);
    }
    .section-content ul {
        list-style-type: disc; /* Viñetas de disco */
        margin-left: 25px; /* Sangría para la lista */
        padding-left: 0;
    }

    .section-content ul li {
        margin-bottom: 8px;
    }

    /* Estilos para las imágenes - Generalidades */
    .ai-image, .robot-image, .ia2-image, .ia3-image, .robot6-image, .robot7-image, .robot99-image {
        height: auto; /* Mantener la proporción */
        max-width: 100%; /* Asegura que la imagen no se desborde del panel */
        margin-left: auto; /* Centrar horizontalmente */
        margin-right: auto; /* Centrar horizontalmente */
        display: block; /* Necesario para que margin: auto funcione correctamente */
    }

    /* Estilos específicos para cada imagen */
    .ai-image { /* robot5.jpg */
      width: 550px; /* Ajustado para pantallas de escritorio */
      margin-top: 0px;
      margin-bottom: 25px;
      border-radius: 50%; /* Borde circular */
      box-shadow: 0 0 15px rgba(0, 255, 255, 0.6), 0 0 25px rgba(0, 255, 255, 0.4); /* Efecto de brillo azulado */
      animation: pulse-glow 2s infinite alternate; /* Animación de brillo sutil */
    }

    @keyframes pulse-glow {
        from { box-shadow: 0 0 10px rgba(0, 255, 255, 0.6), 0 0 20px rgba(0, 255, 255, 0.4); }
        to { box-shadow: 0 0 20px rgba(0, 255, 255, 0.8), 0 0 35px rgba(0, 255, 255, 0.6); }
    }

    .robot-image { /* robot.png */
      width: 220px;
      margin-top: 30px;
      margin-bottom: 20px;
      border-radius: 10px;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
    }

    .ia2-image { /* ia2.jpg */
      max-width: 500px;
      margin-top: 20px;
      margin-bottom: 30px;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }

    .ia3-image { /* ia3.jpg */
      max-width: 700px;
      margin-top: 20px;
      margin-bottom: 25px;
      border-radius: 5px;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }

    .robot6-image { /* robot6.png */
      max-width: 700px;
      margin-top: 20px;
      margin-bottom: 25px;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }

    .robot7-image { /* robot7.png */
      max-width: 600px;
      margin-top: 20px;
      margin-bottom: 25px;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
    }

    .robot99-image { /* robot99.jpg */
      max-width: 650px;
      margin-top: 20px;
      margin-bottom: 30px;
      border-radius: 12px;
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.5);
    }

    /* Fuente pixelada */
    .pixel-font {
      font-family: 'Press Start 2P', cursive;
    }

    /* Grupo de botones al final */
    .button-group {
      display: flex;
      flex-wrap: wrap; /* Permite que los botones se envuelvan en la siguiente línea si no hay espacio */
      justify-content: center; /* Centra los botones horizontalmente */
      gap: 25px; /* Espacio entre los botones */
      margin-top: 30px;
      width: 100%; /* Ocupa el ancho completo para que justify-content: center funcione bien */
    }

    /* Estilos base para ambos botones */
    .back-button, .evaluation-button {
      color: white;
      padding: 15px 35px;
      border: 3px solid #ffffff;
      border-radius: 8px;
      cursor: pointer;
      font-size: 1.2em;
      transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
      text-decoration: none; /* Elimina el subrayado si routerLink lo añade */
      display: inline-flex; /* Permite alinear el texto y el contenido verticalmente */
      align-items: center;
      justify-content: center;
      min-width: 200px; /* Ancho mínimo para que los botones sean consistentes */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    /* Estilos específicos del botón "Volver" */
    .back-button {
      background-color: rgba(28, 59, 240, 0.7); /* Azul */
    }

    .back-button:hover {
      background-color: rgba(13, 136, 236, 0.9); /* Azul más claro al pasar el mouse */
      transform: translateY(-4px); /* Efecto de elevación */
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4); /* Sombra más grande al pasar el mouse */
    }

    /* Estilos específicos del botón "Evaluación Final" */
    .evaluation-button {
      background-color:rgb(8, 65, 112); /* Morado, para diferenciarlo */
    }

    .evaluation-button:hover {
      background-color:rgb(13, 136, 236); /* Morado más oscuro al pasar el mouse */
      transform: translateY(-4px); /* Efecto de elevación */
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4); /* Sombra más grande al pasar el mouse */
    }

    /* Media Queries para Responsividad */
    @media (max-width: 768px) {
      .ia-page-title {
        font-size: 2.2em;
      }
      .section-content p, .section-content ul li {
        font-size: 1em;
      }
      .content-panel-wrapper {
        padding: 30px;
        width: 95%;
      }
      .ai-image { /* Ajustes responsivos para la imagen ROBOT5.JPG */
        width: 120px; /* Tamaño más pequeño en pantallas medianas */
        margin-bottom: 20px;
      }
      .robot-image { /* Ajustes responsivos para la imagen ROBOT.PNG */
        width: 160px;
      }
      .ia2-image { /* Ajustes responsivos para la imagen IA2.JPG */
        width: 90%; /* Ajuste para que se vea bien en pantallas medianas */
        margin-top: 15px; /* Ajuste de margen superior */
        margin-bottom: 25px; /* Ajuste de margen inferior */
      }
      .ia3-image { /* Ajustes responsivos para la imagen IA3.JPG */
        width: 90%;
        margin-top: 15px;
        margin-bottom: 20px;
      }
      .robot6-image { /* Ajustes responsivos para la imagen ROBOT6.PNG */
        width: 90%;
        margin-top: 15px;
        margin-bottom: 20px;
      }
      .robot7-image { /* Ajustes responsivos para la nueva imagen ROBOT7.PNG */
        width: 90%;
        margin-top: 15px;
        margin-bottom: 20px;
      }
      .robot99-image { /* Ajustes responsivos para la nueva imagen ROBOT99.JPG */
        width: 90%;
        margin-top: 15px;
        margin-bottom: 25px;
      }
      .back-button, .evaluation-button { /* Se aplica a ambos botones */
        font-size: 1em;
        padding: 12px 25px;
        min-width: unset; /* Reinicia el ancho mínimo */
        width: 100%; /* Los botones ocupan todo el ancho disponible */
      }
      .button-group {
        flex-direction: column; /* Apila los botones verticalmente */
        align-items: center; /* Centra los botones apilados */
      }
    }

    @media (max-width: 480px) {
      .ia-page-title {
        font-size: 1.8em;
      }
      .section-content p, .section-content ul li {
        font-size: 0.9em;
      }
      .content-panel-wrapper {
        padding: 20px;
      }
      .ai-image { /* Ajustes responsivos para la imagen ROBOT5.JPG en móviles */
        width: 100px; /* Aún más pequeña en móviles */
        margin-bottom: 15px;
      }
      .robot-image { /* Ajustes responsivos para la imagen ROBOT.PNG en móviles */
        width: 140px;
      }
      .ia2-image { /* Ajustes responsivos para la imagen IA2.JPG en móviles */
        width: 100%; /* Puede ocupar todo el ancho disponible */
        margin-top: 10px; /* Ajuste de margen superior */
        margin-bottom: 20px; /* Ajuste de margen inferior */
      }
      .ia3-image { /* Ajustes responsivos para la imagen IA3.JPG en móviles */
        width: 100%;
        margin-top: 10px;
        margin-bottom: 15px;
      }
      .robot6-image { /* Ajustes responsivos para la imagen ROBOT6.PNG en móviles */
        width: 100%;
        margin-top: 10px;
        margin-bottom: 15px;
      }
      .robot7-image { /* Ajustes responsivos para la nueva imagen ROBOT7.PNG en móviles */
        width: 100%;
        margin-top: 10px;
        margin-bottom: 15px;
      }
      .robot99-image { /* Ajustes responsivos para la nueva imagen ROBOT99.JPG en móviles */
        width: 100%;
        margin-top: 10px;
        margin-bottom: 20px;
      }
    }
  `]
})
export class InteligenciaArtificialComponent { }
