<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema:
        'Evaluación y control en la gestión del riesgo: toma de decisiones gerenciales.',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> Evaluar el grado de comprensión y aplicación de conceptos relacionados con la evaluación y control en la gestión del riesgo en la toma de decisiones gerenciales.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal de la evaluación de riesgos en una organización?',
          imagen: require('@/assets/actividad/1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Predecir los resultados financieros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Optimizar la productividad a corto plazo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Identificar amenazas y mitigar los riesgos asociados.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir el uso de recursos humanos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué parámetro no es considerado al calcular el índice de riesgo?',
          imagen: require('@/assets/actividad/2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Impacto.', esCorrecta: false },
            { id: 'b', texto: 'Probabilidad.', esCorrecta: false },
            { id: 'c', texto: 'Frecuencia de repetición.', esCorrecta: false },
            { id: 'd', texto: 'Valor del activo.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'La probabilidad de un riesgo se mide exclusivamente en términos de su impacto financiero.',
          imagen: require('@/assets/actividad/3.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'En el análisis de riesgos, ¿cómo se define el impacto de una amenaza en los activos de información?',
          imagen: require('@/assets/actividad/4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Como el número de empleados afectados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Como la repercusión económica directa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Como la consecuencia sobre los objetivos de la organización.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Como la cantidad de recursos disponibles.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'El análisis y evaluación de los riesgos permiten jerarquizar los riesgos más críticos, que deben ser gestionados primero.',
          imagen: require('@/assets/actividad/1.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'La matriz de riesgo relativo ayuda a clasificar las amenazas según el valor del activo y el coste económico de su pérdida.',
          imagen: require('@/assets/actividad/2.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es el principal desafío en la implementación de un sistema de gestión del conocimiento en las organizaciones?',
          imagen: require('@/assets/actividad/3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Resistencia al cambio por parte del personal.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falta de recursos financieros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Demasiada información disponible.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dificultad para medir el retorno de la inversión (ROI).',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'La gestión del conocimiento se centra en la cantidad de datos que posee una organización.',
          imagen: require('@/assets/actividad/4.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es el principal desafío que enfrentan las empresas al buscar financiamiento externo?',
          imagen: require('@/assets/actividad/1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La falta de rentabilidad en sus operaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La incapacidad de demostrar proyecciones financieras claras.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La competencia con otras empresas del sector.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La resistencia de los empleados al cambio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'El valor económico agregado (EVA) se utiliza como un indicador de la creación de valor. ¿Qué relación tiene este concepto con la rentabilidad de los activos?',
          imagen: require('@/assets/actividad/2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El EVA debe ser siempre positivo para que los activos sean rentables.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un EVA negativo indica que los recursos están siendo utilizados de manera eficiente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La rentabilidad de los activos debe ser superior al costo de financiamiento para generar un EVA positivo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La relación entre EVA y rentabilidad es irrelevante para la toma de decisiones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
