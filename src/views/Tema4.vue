<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 La gerencia de las finanzas
    
    .row.mb-5(data-aos='fade')
      .col-lg-5.pe-lg-0.d-none.d-lg-block
        img(src='@/assets/curso/temas/t4/img1.png', alt='')
      .col-lg-7.ps-lg-0
        .br-l.bg1.p-4.h-100.d-flex.align-items-center.mont1
          p.mb-3 Las empresas acuden al sector financiero con diversos motivos, principalmente para obtener recursos que les permitan generar la máxima rentabilidad y, al mismo tiempo, garantizar la devolución de ese capital con los costos asociados. Este principio es fundamental para cualquier tipo de organización, ya que, a medida que estas crecen y se desarrollan, su necesidad de financiamiento aumenta. Para acceder a los créditos requeridos, es vital que el empresario se acerque a las fuentes de financiamiento habituales con una sólida preparación profesional, dado que deberá negociar con expertos en el área.
    
    p.mb-4 Para determinar las necesidades reales de la empresa, es necesario tener claridad sobre los siguientes aspectos a través de los registros contables y el análisis de ingresos y gastos:

    //tarjetas feas locas 5.0

    p.mb-4 Con estos datos, la gestión financiera asume dos funciones principales que buscan maximizar el valor neto actual de la inversión de los propietarios de la empresa:

    .row.mb-5
      .col-lg-7
        LineaTiempoD.color-primario
          p.text-small(numero="1" titulo="Provisión de recursos financieros") Garantiza los medios necesarios para cubrir las obligaciones de pago de la empresa, manteniendo la solvencia y liquidez.
        
          p.text-small(numero="2" titulo="Obtención de beneficios") Se encarga de invertir el efectivo en operaciones que generen un valor actual atractivo para la organización. 
      .col-lg-5
        img(src='@/assets/curso/temas/t4/img2.png', alt='')
    
    p.mb-3 El objetivo central de la administración financiera es incrementar el valor actual de la riqueza de la empresa. Esto se logra asegurando que siempre haya suficiente efectivo para cubrir las cuentas en el momento adecuado y optimizando la distribución de los recursos disponibles.
    p.mb-4 En el proceso de creación de empresas, se han identificado ciertos paradigmas erróneos en relación con los aspectos financieros. Estos mitos, que son repetidos sin cuestionamiento, pueden generar temores en los emprendedores y disuadirlos de seguir adelante con sus proyectos. Es común que estos falsos paradigmas lleven a una dependencia exclusiva en la parte financiera, ignorando otros factores clave para el éxito. Por lo tanto, es crucial que los emprendedores analicen y desmitifiquen estas creencias para no limitar el desarrollo de sus empresas, dado que dichos paradigmas no representan una realidad concreta y pueden obstaculizar el crecimiento.
    
    
    Separador
    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1  Importancia de las proyecciones financieras
    
    .row.mb-5(data-aos='fade')
      .col-lg-5.pe-lg-0.d-none.d-lg-block
        img(src='@/assets/curso/temas/t4/img3.png', alt='')
      .col-lg-7.ps-lg-0
        .br-l.bg1.p-4.h-100.d-flex.align-items-center.mont1
          p.mb-3  En muchas empresas, especialmente en pymes, el problema no radica en generar ventas, sino en obtener los recursos necesarios para producir. Esto lleva a cuestionar por qué, a pesar de contar con oportunidades de crecimiento, no logran acceder a créditos o atraer nuevos socios. La falta de proyecciones financieras suele ser una de las razones más comunes.
          p Los dueños de pequeñas y medianas empresas suelen tener una visión clara sobre el futuro de su negocio. Ellos conocen si habrá nuevas ventas, contratos o posibilidades de expansión hacia otros mercados. Sin embargo, cuando buscan financiamiento a través de bancos o inversionistas, a menudo encuentran dificultades porque intentan convencer a otros de manera verbal. En este contexto, las proyecciones financieras son esenciales, ya que permiten demostrar de manera objetiva las expectativas de éxito de la empresa.
    
    p.mb-4 Estas proyecciones se enfocan en pronosticar ventas, gastos e inversiones en un periodo determinado, lo que se traduce en la elaboración de los estados financieros clave:

    .row.mb-5
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-contenido.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/temas/t4/boton1.png', alt='')
          h3.text-center Balance general
          p.text-center Refleja la situación patrimonial, incluyendo activos y pasivos.
      
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-contenido.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/temas/t4/boton2.png', alt='')
          h3.text-center Estado de resultados
          p.text-center Muestra las ganancias o pérdidas del negocio.
      
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-contenido.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/temas/t4/boton3.png', alt='')
          h3.text-center  Flujo de efectivo
          p.text-center Presenta los ingresos y egresos de dinero, crucial para mantener la liquidez.  
    
    p.mb-4 Además, las proyecciones financieras abarcan áreas críticas como planes de ventas, estrategias de mercadeo, gestión de recursos humanos, compras e inversiones, lo que permite crear un panorama más claro sobre cómo la empresa alcanzará sus objetivos y generará rentabilidad. Estas proyecciones ayudan a demostrar la viabilidad económica del negocio, su capacidad de generar beneficios y de cumplir con los pagos de sus obligaciones financieras.
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t4/img4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-4 El horizonte temporal de estas proyecciones puede variar según la naturaleza de cada empresa, generalmente de 3 a 5 años, aunque algunas optan por un plazo de hasta 10 años, que es menos común. Para mejorar la precisión, se recomienda que el primer año de proyección se realice con un detalle mensual.
        p En resumen, las proyecciones financieras son una herramienta esencial tanto para la gestión interna como para presentar una propuesta sólida ante bancos o inversionistas, mostrando la capacidad de la empresa para generar ingresos y cumplir con sus compromisos financieros.

    //subtitulo loco
    h4 El control presupuestal en la dirección financiera

    p.mb-4 El control presupuestal desempeña un importante rol en la planificación financiera de las organizaciones, ya que obliga a los directores de cada área a anticiparse y a planificar con mayor detalle las tareas futuras y su ejecución. 

    .row.mb-4
      .col-lg-5
        img(src='@/assets/curso/temas/t4/img5.png', alt='')
      .col-lg-7
        SlyderA.bg6
          .row.bg7
            .col-lg-2
              img(src='@/assets/curso/temas/t2/slyder1.svg', alt='')
            .col-lg-10 
              p Este proceso fomenta una visión más estratégica, e impulsa a los responsables a cuestionarse sobre las acciones que omitirían si no tuvieran la obligación de preparar un presupuesto. 
          
          .row.bg7
            .col-lg-2
              img(src='@/assets/curso/temas/t2/slyder2.svg', alt='')
            .col-lg-10 
              p En este sentido, la preparación presupuestaria implica mucho más que un ejercicio de planificación es también una herramienta que permite: 
              ul.lista-ul
                li
                  i.lista-ul__vineta
                  | Identificar prioridades 
                li
                  i.lista-ul__vineta
                  | Mejorar la eficiencia en la asignación de recursos.

          .row.bg7
            .col-lg-2
              img(src='@/assets/curso/temas/t2/slyder3.svg', alt='')
            .col-lg-10 
              p Una vez que los presupuestos se han formalizado, el siguiente paso es la elaboración de los estados contables. Estos documentos se desarrollan a partir de los estados financieros de cierre de un ejercicio anterior, complementados con la síntesis de todos los presupuestos de las diferentes áreas de la empresa. 

          .row.bg7
            .col-lg-2
              img(src='@/assets/curso/temas/t2/slyder4.svg', alt='')
            .col-lg-10 
              p Con esta información, es posible proyectar los resultados operativos, las cuentas de pérdidas y ganancias, y el balance general que la empresa espera presentar al final del ejercicio presupuestado.  
    
    p.mb-4 El análisis de estos informes permite a la dirección financiera no solo evaluar el desempeño esperado, a su vez permiten realizar ajustes en los objetivos iniciales si se detectan desviaciones significativas. Estos ajustes pueden incluir la redefinición de estrategias y la optimización de políticas empresariales, con el fin de asegurar que la organización mantenga su rumbo hacia la consecución de sus metas financieras.
    
    .cajon.color-acento-contenido.p-4.mb-4
      p El control presupuestal, por tanto, no es simplemente un mecanismo de seguimiento, también representa una herramienta dinámica que facilita la toma de decisiones informadas. A través de la revisión continua de los presupuestos y los estados contables, se pueden identificar áreas de mejora y oportunidades de crecimiento, contribuyendo de manera significativa a la eficiencia y sostenibilidad de la empresa. 
    
    //subtitulo loco
    h4 La gerencia del valor

    p.mb-4 El valor económico agregado (EVA), también conocido como utilidad económica, se define como:

    .row.mb-5
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-contenido.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/temas/t4/boton4.png', alt='')
          p.text-center La diferencia entre la rentabilidad de los activos de la empresa y el costo de financiamiento o capital necesario para adquirir dichos activos. 
      
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-contenido.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/temas/t4/boton5.png', alt='')
          p.text-center Este concepto es clave en la cultura de la gerencia del valor, un enfoque que impulsa a los tomadores de decisiones a desarrollar estrategias orientadas a la creación de valor. 
      
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-contenido.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/temas/t4/boton6.png', alt='')
          p.text-center En esencia, se espera que los recursos de la empresa generen una rentabilidad superior a su costo; de lo contrario, sería más eficiente redirigir esos recursos a otras actividades más productivas. 
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t4/img6.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-3 Las empresas que solo se enfocan en indicadores tradicionales, como la utilidad neta, los márgenes de ganancia o el crecimiento en ventas, corren el riesgo de desarrollar una visión limitada. Este enfoque puede pasar por alto elementos cruciales como la optimización del capital de trabajo o la productividad derivada del uso eficiente de la capacidad instalada. La verdadera evaluación de oportunidades empresariales se basa en indicadores enfocados en la creación de valor, más allá de los beneficios inmediatos.
        p Las utilidades por sí solas no son suficientes para medir el éxito de una empresa. Es necesario que dichas utilidades se comparen con los activos empleados para generarlas, asegurando así que se obtiene una rentabilidad atractiva. Además, tanto las utilidades como la rentabilidad deben ir acompañadas de flujos de caja libre (FCL) sólidos, lo que indica que la empresa no está inmovilizando recursos en capital de trabajo o en inversiones improductivas en activos fijos.
    
    p.mb-4 En resumen, los tres elementos clave que garantizan la permanencia y el crecimiento de una empresa son:

    .row.mb-5  
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 1
          p.text-center 
            b Utilidades
          p.text-center Los beneficios obtenidos tras descontar los costos operativos y financieros.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 2
          p.text-center 
            b  Rentabilidad
          p.text-center  La capacidad de generar ingresos en relación con los activos utilizados.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.p-5
          .tarjeta-numerada__numero
            .h2 3
          p.text-center 
            b Flujo de caja libre
          p.text-center La disponibilidad de efectivo para inversiones y operaciones, sin comprometer recursos en actividades improductivas. 
    
    p La correcta gestión de estos tres factores permite no solo la supervivencia de la empresa, sino también su crecimiento sostenido y, sobre todo, la creación de valor económico.

</template>

<script>
export default {
  name: 'Tema4',
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
