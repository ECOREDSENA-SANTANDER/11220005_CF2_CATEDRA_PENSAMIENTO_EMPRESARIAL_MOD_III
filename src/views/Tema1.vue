<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Evaluación de la gestión de riesgo
    
    .row.mb-5(data-aos='fade')
      .col-lg-5.pe-lg-0.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/img1.png', alt='')
      .col-lg-7.ps-lg-0
        .br-l.bg1.p-4.h-100.d-flex.align-items-center.mont1
          p El proceso de evaluación de la gestión de riesgos es fundamental para que una organización pueda identificar sus amenazas y el nivel de riesgo asociado con cada una. Esta evaluación permite establecer medidas para evitar riesgos elevados y se realiza antes de la creación de políticas de manejo de riesgos o el inicio de cualquier proyecto. A medida que la empresa evoluciona en sus actividades o cuando se producen cambios en el entorno político, es necesario reevaluar tanto los riesgos como las estrategias de mitigación y la toma de decisiones. 
          p Una de las fases más importantes es el análisis y evaluación de los riesgos, ya que este paso permite clasificar los riesgos según su relevancia. Esta clasificación facilita la jerarquización de los riesgos más y menos importantes, priorizando aquellos que requieren atención inmediata. 
    
    TabsA.color-acento-botones.mb-5
      .tarjeta.bg2.p-4(titulo="a) Impacto")
        .row
          .col-lg-7
            h4 Impacto
            p Refleja la gravedad que tendría el riesgo en caso de materializarse. El impacto puede clasificarse en categorías como:
            ul.lista-ul
              li
                i.lista-ul__vineta
                | Catastrófico.
              li
                i.lista-ul__vineta
                | Grave.
              li
                i.lista-ul__vineta
                | Moderado.
              li
                i.lista-ul__vineta
                | Leve.
              li
                i.lista-ul__vineta
                | Inocuo.
          .col-lg-5
            img(src='@/assets/curso/temas/t1/img2.png', alt='')
      .tarjeta.bg2.p-4(titulo="b) Probabilidad")
        .row
          .col-lg-7
            h4 Probabilidad
            p Indica las posibilidades de que el riesgo ocurra. Las probabilidades pueden ser clasificadas como:
            ul.lista-ul
              li
                i.lista-ul__vineta
                | Certeza (100%).
              li
                i.lista-ul__vineta
                | Muy probable.
              li
                i.lista-ul__vineta
                | Poco probable.
              li
                i.lista-ul__vineta
                | Improbable.
              li
                i.lista-ul__vineta
                | Imposible (0%).
          .col-lg-5
            img(src='@/assets/curso/temas/t1/img3.png', alt='')

    p.mb-3 Además, se puede considerar la frecuencia de repetición, es decir, si el riesgo podría ocurrir una vez o en múltiples ocasiones.
    p.mb-3 Una vez determinados los valores de impacto y probabilidad, se multiplican para calcular el índice de riesgo, lo que permite asignar un valor numérico a cada riesgo. Este índice facilita la clasificación de los riesgos según su relevancia.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4
          h2.text-center Índice de riesgo = Impacto x Probabilidad 
    
    p.mb-3 Los riesgos con un mayor índice deben gestionarse prioritariamente, mientras que los de menor índice pueden ser obviados. Alternativamente, se puede utilizar el Análisis Modal de Fallos y Efectos (AMFE) como una herramienta complementaria para la evaluación.
    p.mb-3 Otra opción es situar los riesgos en una tabla, lo que permite identificar claramente su relevancia y priorización, a continuación, se presenta un ejemplo:
    
    .titulo-sexto.color-acento-contenido
      h5 Figura 1.
      span Ejemplo tabla para calcular índice de riesgo.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        img(src='@/assets/curso/temas/t1/fig1.svg', alt='')

    p.mb-3 Este enfoque permite realizar una evaluación rápida y eficiente, centrando la atención en los riesgos más críticos (ubicados en la "zona roja") y prestando menos atención a aquellos que son menos relevantes (ubicados en la "zona verde"). Esta metodología facilita la priorización y asignación de recursos para gestionar de manera efectiva los riesgos más significativos.
    p.mb-3 De acuerdo con Coronado y Prieto (2015), el objetivo principal del análisis y evaluación de los riesgos es optimizar el proceso de toma de decisiones y establecer prioridades en el tratamiento de los riesgos. Este objetivo se logra a través de las siguientes actividades:
    

    //tarjetaslocas

    p.mb-3 Una vez definidos los criterios y la escala para medir y calificar los riesgos, se procede a determinar los valores correspondientes para cada riesgo identificado. Esto implica asignar un nivel de prioridad con base en el análisis previo, lo que facilita la gestión eficiente y el desarrollo de estrategias adecuadas para mitigar o eliminar los riesgos según su relevancia.

    .tarjeta--container.row.mb-4(data-aos="fade-down")
      .col-md.tarjeta.bg3.p-4.p-lg-5
        .row.align-items-end.mb-4
          .col-3.col-lg-2
            img.mb-2(src='@/assets/curso/temas/t1/tarjeta1.png', alt='')
          .col-9
            h3.bgtitulo1.mb-3.py-1.ps-3.pe-5 Calificación
        p.mb-0.text-white Valor asignado al riesgo cuando se multiplican los valores asignados a las probabilidad y al impacto.
      .col-md.tarjeta.bg4.p-4.p-lg-5
        .row.align-items-end.mb-4
          .col-3.col-lg-2
            img.mb-2(src='@/assets/curso/temas/t1/tarjeta2.png', alt='')
          .col-9
            h3.bgtitulo2.mb-3.py-1.ps-3.pe-5 Evaluación
        p.mb-0.text-white Determinación de la zona de riesgo, dada por la calificación.
    
    p.mb-0 La evaluación de riesgos es una responsabilidad clave de la dirección de la empresa, aunque es esencial consultar tanto a los trabajadores como a sus representantes sobre el método utilizado, este debe ajustarse a los riesgos específicos de la organización y al nivel de profundidad necesario para garantizar una evaluación eficaz.
    p.mb-4 Mendoza (2014) propone un enfoque estructurado para la evaluación de riesgos, basado en la aplicación de controles de seguridad tras una adecuada evaluación y tratamiento de los mismos. Uno de los modelos recomendados para esta tarea es OCTAVE Allegro (Operationally Critical Threat, Asset, and Vulnerability Evaluation), desarrollado por el Software Engineering Institute (SEI). Este modelo, documentado y accesible de manera gratuita, ofrece un proceso de evaluación en 8 pasos que permite gestionar eficazmente los riesgos de seguridad en la organización.
    p.mb-3 El uso de este tipo de modelos es una estrategia preventiva, diseñada para anticiparse a la materialización de amenazas identificadas. El desafío radica en considerar todas las amenazas potenciales que podrían comprometer los objetivos de la empresa, llevando a cabo un análisis de riesgos que permita reducirlos a un nivel aceptable. Un ejemplo de una metodología complementaria es MAGERIT (Metodología de Análisis y Gestión de Riesgos de los Sistemas de Información), que se enfoca en la gestión de riesgos en sistemas de información.
    
    LineaTiempoD.color-primario
      .row.bg5(numero="1" titulo="Praesent luctus")
        .row.mb-3
          .col-md-8.mb-4.mb-md-0
            p Los activos de información son datos identificados como relevantes para la organización. Se debe documentar por qué fueron seleccionados y describir cada activo. Además, cada activo necesita un responsable o custodio que establezca los requisitos de seguridad basados en confidencialidad, integridad y disponibilidad. Es crucial crear un perfil para cada activo que determine su nivel de criticidad, lo cual facilitará la identificación de amenazas y riesgos, además de ayudar a definir las medidas de seguridad necesarias.     
          .col-md-4
            img(src='@/assets/curso/temas/t1/linea1.png', alt='')
        .row.mb-3 
          .titulo-sexto.color-acento-contenido
            h5 Tabla 1.
            span Criterio de medición del riesgo – Reputación y confianza del cliente.
          .tabla-a.color-acento-botones.mb-5 
            table
              caption Referencia Tabla - Norma APA
              thead
                tr
                  th Hoja de trabajo Allegro 7
                  th Criterio de medición del riesgo Reputación y confianza del cliente
              tbody
                tr
                  td Área de impacto
                  td Bajo
                  td Moderado
                  td Alto
                tr
                  td Afectación a la imagen de la organización
                  td La información relacionada con incidente de seguridad se conoce dentro del área de TI
                  td La información relacionada con incidente de seguridad se conoce dentro de la organización
                  td La información relacionada con incidente de seguridad se conoce  públicamente

          p.mb-3 Nota. Adaptada de Mendoza (2014).
          p.mb-0 Para priorizar las áreas de impacto en una organización, es esencial clasificarlas según su importancia, 
          p.mb-3 asignando un valor entre 1 y 5, donde 5 representa la mayor prioridad y 1 la menor:
    
          .row
            .titulo-sexto.color-acento-contenido
              h5 Tabla 2.
              span Prioridad de las áreas de impacto.
              
            .tabla-a.color-acento-botones.mb-5 
              table
                caption Referencia Tabla - Norma APA
                thead
                  tr
                    th Hoja de trabajo Allegro 7
                    th Prioridad de las Áreas de impacto
                tbody
                  tr
                    td Prioridad
                    td Áreas de impacto
                  tr
                    td 5
                    td Reputación y confianza del cliente
                  tr
                    td 4
                    td Financiera
                  tr
                    td 3
                    td Productividad
                  tr
                    td 2
                    td Seguridad y salud
                  tr
                    td 1
                    td Multas y penas legales
                  tr
                    td N/A
                    td Definido por el usuario
            p Nota. Adaptado de Mendoza (2014).
      
      .row.bg5(numero="2" titulo="Desarrollo del perfil de activos de información")
          .col-md-8.mb-4.mb-md-0
            p Los activos de información son datos identificados como relevantes para la organización. Se debe documentar por qué fueron seleccionados y describir cada activo. Además, cada activo necesita un responsable o custodio que establezca los requisitos de seguridad basados en confidencialidad, integridad y disponibilidad. Es crucial crear un perfil para cada activo que determine su nivel de criticidad, lo cual facilitará la identificación de amenazas y riesgos, además de ayudar a definir las medidas de seguridad necesarias.       
          .col-md-4
            img(src='@/assets/curso/temas/t1/linea1.png', alt='')
      
      .row.bg5(numero="3" titulo="Identificación de contenedores de activos")
          .col-md-8.mb-4.mb-md-0
            p En este paso, se deben identificar los repositorios donde se almacena la información. Estos contenedores pueden ser de tipo técnico, físico o humano, ya que la información puede presentarse en formato digital, físico (documentos) o como conocimiento en la mente de los empleados.      
          .col-md-4
            img(src='@/assets/curso/temas/t1/linea2.png', alt='')
      
      .row.bg5(numero="4" titulo="Identificación de áreas de preocupación")
        .col-md-8.mb-4.mb-md-0
          p Se desarrollan perfiles de riesgo para cada activo de información. Esto implica analizar la probabilidad de que una amenaza ocurra y su impacto. Cada área de preocupación debe documentar los riesgos percibidos, actores potenciales que podrían materializar la amenaza, los medios para llevarla a cabo y las consecuencias. Además, se debe registrar cómo estas amenazas pueden afectar los criterios de seguridad definidos previamente.       
        .col-md-4
          img(src='@/assets/curso/temas/t1/linea3.png', alt='')
      
      .row.bg5(numero="5" titulo="Identificación de escenarios de amenaza")
        .row.mb-3
          p Este paso extiende las áreas de preocupación identificadas anteriormente para detectar otras amenazas menos evidentes. Esto puede hacerse mediante cuestionarios específicos para cada tipo de contenedor (técnico, físico o humano), los cuales incluyen preguntas diseñadas para identificar posibles amenazas. También se puede emplear el uso de árboles de amenaza, que visualizan combinaciones de eventos que podrían comprometer los activos, como fallas técnicas, en sistemas, desastres naturales o acciones maliciosas internas o externas, teniendo presente que no todas las combinaciones significan una amenaza real y podrían considerarse descartadas. A continuación, se presenta un ejemplo de árbol de amenazas:      
        .row
          .titulo-sexto.color-acento-contenido
            h5 Figura 2.
            span Prioridad de las áreas de impacto.
          img(src='@/assets/curso/temas/t1/figura2.svg', alt='')
          figcaption Nota. Adaptado de Mendoza (2014).
      
      .row.bg5(numero="6" titulo="Identificación de riesgos")
        .col-md-8.mb-4.mb-md-0
          p.mb-4 Para calcular el riesgo, se utiliza la siguiente ecuación.
          .row.mb-3
            .col-lg-9
              .cajon.color-primario.p-4.mb-4
                p #[b Riesgo = Amenaza (condición) + Impacto (consecuencia)]
            .col-lg-3 
              img(src='@/assets/curso/temas/t1/icono.svg', alt='')
          p Se deben definir enunciados de impacto que describan cómo se vería afectada la organización si se materializan las amenazas. Para priorizar los riesgos, es útil definir la probabilidad de que estas amenazas ocurran, asignando valores de 1 (baja probabilidad), 2 (probabilidad media) y 3 (alta probabilidad), con base en datos históricos y estadísticos.
        .col-md-4
          img(src='@/assets/curso/temas/t1/linea4.png', alt='')

      .row.bg5(numero="7" titulo="Análisis de riesgos") 
        .row
          .col-md-8.mb-4.mb-md-0
            p.mb-3 Se evalúa cualitativamente el impacto de cada amenaza sobre la organización. Para cada activo de información, se calcula una puntuación de riesgo que se obtiene multiplicando el valor del impacto por la prioridad asignada previamente. El resultado final será un valor que puede variar entre 0 y 45, donde un valor más alto indica un mayor impacto sobre los activos.
            .titulo-sexto.color-acento-contenido
              h5 Tabla 3.
              span Análisis de riesgos.
            .tabla-a.color-acento-botones.mb-5 
              table
                caption Referencia Tabla - Norma APA
                thead
                  tr
                    th Criterio de evaluación
                    th Prioridad
                    th Valor de área de impacto
                    th Puntuación
                tbody
                  tr
                    td Reputación y confianza del cliente
                    td 5
                    td Alto (3)
                    td 15
                  tr
                    td Financiera
                    td 4
                    td Medio (2)
                    td 8
                  tr
                    td Productividad
                    td 3
                    td Bajo (1)
                    td 3
                  tr
                    td Seguridad y salud
                    td 2
                    td Bajo (1)
                    td 2
                  tr
                    td Multas y penas legales
                    td 1
                     td Alto (3)
                    td 3
                  tr
                    td 
                    td 
                    td #[b Puntaje total]
                      d #[b 3]
            p Nota. Adaptado de Mendoza (2014).
          .col-md-4
            img(src='@/assets/curso/temas/t1/linea5.png', alt='')
      
      .row.bg5(numero="8" titulo="Selección de un enfoque de mitigación") 
        .row
          .col-md-8.mb-4.mb-md-0
            p.mb-3 Finalmente, se deben determinar las estrategias para mitigar los riesgos identificados. Los riesgos más prioritarios son aquellos con un valor alto y una probabilidad de ocurrencia elevada. En este paso, se puede hacer uso de una matriz de riesgo relativo que clasifica los escenarios de amenaza según su impacto y probabilidad. Los enfoques comunes para el tratamiento de riesgos incluyen mitigar, transferir, postergar o aceptar el riesgo.
            p.mb-3 El método OCTAVE Allegro es especialmente útil en este proceso, ya que permite gestionar los activos de información y crear escenarios de amenaza detallados. Esto facilita la identificación de riesgos y su prevención, proporcionando un enfoque cuantitativo para priorizar las amenazas según los criterios establecidos por los responsables de la toma de decisiones en la organización.
            .titulo-sexto.color-acento-contenido
              h5 Tabla 4. 
              span Matriz de riesgo relativo.
            .tabla-a.color-acento-botones.mb-5 
              table
                caption Referencia Tabla - Norma APA
                thead
                  tr
                    th Puntaje de riesgo relativo
                tbody
                  tr
                    td Probabilidad
                    td 30 a 45
                    td 16 a 29
                    td 0 a 15
                  tr
                    td Alta
                    td Grupo 1
                    td Grupo 2
                    td Grupo 2
                  tr
                    td Media
                    td Grupo 2
                    td Grupo 2
                    td Grupo 3
                  tr
                    td Baja
                    td Grupo 3
                    td Grupo 3
                    td Grupo 4
            p Nota. Adaptado de Mendoza (2014).
          .col-md-4
            img(src='@/assets/curso/temas/t1/linea6.png', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
