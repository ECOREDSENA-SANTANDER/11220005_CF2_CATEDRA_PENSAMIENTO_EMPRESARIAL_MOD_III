<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Control de la gestión del riesgo 
    
    p.mb-4 La fase final en la gestión del riesgo tiene como objetivo evaluar el desempeño, la efectividad y el cumplimiento de las medidas de protección implementadas, con el fin de identificar y corregir posibles deficiencias. El monitoreo y la revisión son componentes esenciales e integrales en este proceso, requiriendo un seguimiento constante de los riesgos, la efectividad del plan, las estrategias y el sistema de administración. Es fundamental revisar periódicamente los riesgos para asegurar que los cambios en el entorno no alteren sus prioridades, ya que muy pocos permanecen inalterables a lo largo del tiempo. Las actividades del proceso deben estar alineadas con el plan operativo de la organización, donde se especifican los momentos de intervención y los responsables de su ejecución.

    .row.mb-5(data-aos='fade')
      .col-lg-5.pe-lg-0.d-none.d-lg-block
        img(src='@/assets/curso/temas/t3/img1.png', alt='')
      .col-lg-7.ps-lg-0
        .br-l.bg1.p-4.h-100.d-flex.align-items-center.mont1
          p.mb-3 Para evaluar el cumplimiento y la efectividad de las medidas de protección, es necesario mantener un registro continuo de las actividades ejecutadas, los incidentes de ataques y sus resultados. Estos datos deben ser analizados con frecuencia, y, en caso de incumplimiento grave o violación de las normas, pueden requerir sanciones institucionales dirigidas a los responsables.
          p El ciclo continuo de la gestión de riesgos utiliza las conclusiones obtenidas como retroalimentación, sirviendo como fuente de información valiosa para futuros análisis de riesgos.
    
    p.mb-3 Por ello, es imprescindible contar con un sistema de control de gestión que integre la planificación estratégica del negocio, con centros de responsabilidad descentralizados y autónomos, gestionados por profesionales cuyas funciones se orienten tanto al control de la gestión como al control de riesgos.
    p.mb-4 Este sistema debe estar acompañado de herramientas esenciales como:

    .row.mb-5
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-contenido.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/temas/t3/boton1.png', alt='')
          h5.text-center #[em Budgeting]
          p.text-center (plan presupuestal).
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-contenido.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/temas/t3/boton2.png', alt='')
          h5.text-center #[em Forecasting]
          p.text-center (pronóstico basado en datos históricos y actuales).
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-contenido.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/temas/t3/boton3.png', alt='')
          h5.text-center ERP
          p.text-center (Planificación de Recursos Empresariales).
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-contenido.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/temas/t3/boton4.png', alt='')
          h5.text-center Cuadro de Mando Integral
          p.text-center (herramienta de control estratégico). 

    p.mb-3 En resumen, la gestión de riesgos (risk management) y el control de gestión son dos elementos clave en las empresas, con funciones y responsabilidades complementarias. Sin un sistema sólido de control de gestión, la gestión de riesgos sería ineficaz.
    p.mb-3 La administración de la empresa es responsable del monitoreo continuo de los riesgos en sus operaciones diarias. Además, la auditoría interna implementa un programa anual de revisiones para evaluar la efectividad de los controles, basado en los riesgos identificados. Durante todo este proceso, es fundamental mantener un monitoreo constante sobre la adecuación de las actividades, así como asegurar la comunicación y consulta permanente con los directores, la alta gerencia, los comités y demás áreas funcionales.
    p.mb-4 De acuerdo con Pinar Quezada (s.f.) “El control es una actividad en la cual el responsable de la toma de decisiones analiza los datos contenidos en los reportes de seguimiento. Se decide qué hacer y se implementa esa decisión. En esta etapa además se realizan correcciones a las variaciones que han experimentado los planes y se actualizan las respuestas a los eventos”. Por esta razón, si la gestión de riesgos no se integra en las actividades diarias, se volverá ineficaz y carecerá de credibilidad. Quien monitorea los riesgos es responsable de gestionar las decisiones tomadas. A continuación, se describen los componentes de esta actividad planteados por el mismo autor:
    
    TabsA.color-acento-botones.mb-5
      .tarjeta.bg2.p-4(titulo="Analizar")
        .row
          .col-lg-7
            h4 Analizar
            p Analizar los datos implica examinar las tendencias, desviaciones y anomalías que puedas haber sufrido los datos durante el curso del proyecto. La finalidad es lograr un claro entendimiento del actual estado de cada riesgo y del plan de mitigación relativo al proyecto.
          .col-lg-5
            img(src='@/assets/curso/temas/t3/tabs1.svg', alt='')
      .tarjeta.bg2.p-4(titulo="Decidir")
        .row
          .col-lg-7
            h4 Decidir
            p Tomar una decisión requiere usar los datos recolectados en el seguimiento para determinar cómo se debe proceder con los riesgos del proyecto. Se deben tomar básicamente cuatro decisiones respecto al riesgo:
            ul.lista-ul
              li
                i.lista-ul__vineta
                | Replanear, debido a que lo que se había pensado ha sufrido modificaciones importantes, que han dejado obsoleto la anterior planificación.
              li
                i.lista-ul__vineta
                | Cerrar el riesgo, ya que en la actualidad tal riesgo no representa una opción real de presentarse.
              li
                i.lista-ul__vineta
                | Invocar a un plan de contingencia, pues el riesgo ha gatillado eventos que así lo ameritan.
              li
                i.lista-ul__vineta
                | Continuar observando el riesgo, ya que no se cuenta con la suficiente certeza para cerrarlo.
          .col-lg-5
            img(src='@/assets/curso/temas/t3/tabs2.svg', alt='')
      .tarjeta.bg2.p-4(titulo="Ejecutar")
        .row
          .col-lg-7
            h4 Ejecutar
            p Ejecutar una decisión es el proceso donde las decisiones de control son implementadas. Realizar cambiso a los planes hechos requiere volver a planificar, tomar acciones previamente definidas de contingencia y continuar observando el estado de los riesgos para ver si es necesario volver al seguimiento.
          .col-lg-5
            img(src='@/assets/curso/temas/t3/tabs3.svg', alt='')


</template>

<script>
export default {
  name: 'Tema3',
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
