<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se presenta una síntesis de las temáticas abordadas en el componente formativo, que profundiza en cómo la evaluación y control de la gestión del riesgo impactan la toma de decisiones gerenciales, con especial énfasis en las proyecciones financieras y la gerencia del conocimiento. Se exploran los procesos clave para gestionar riesgos, tales como la identificación, evaluación y monitoreo continuo de amenazas potenciales. Además, se destaca la importancia de la gerencia de la información y del conocimiento, tanto en grandes empresas como en pymes, como herramientas estratégicas para mejorar la eficiencia y la competitividad organizacional. También se subraya el papel crítico de las proyecciones financieras en la planificación y toma de decisiones, garantizando la estabilidad y crecimiento empresarial.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
