<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La selección de tecnologías para la protección y seguridad digital es un proceso de gestión que comienza con la comprensión del contexto de negocio y el valor de la información. Los activos, procesos, usuarios e infraestructuras poseen características diferentes y, por tanto, requieren controles proporcionales. La identificación y valoración de activos, el modelado de amenazas y la interpretación de la arquitectura permiten establecer qué debe protegerse, frente a qué escenarios y con qué prioridad. Esta base evita que las decisiones se limiten a marcas, tendencias o funciones aisladas.
    p Los recursos tecnológicos deben integrarse mediante una estrategia de defensa en profundidad que articule seguridad perimetral, configuración de sistemas operativos, control de acceso, criptografía, autenticación, monitoreo y gestión. Los estándares y modelos proporcionan criterios para organizar el proceso, mientras el plan de actividades convierte la decisión en acciones verificables. El resultado de aprendizaje se alcanza cuando el aprendiz puede justificar una selección con base en necesidades, riesgos, compatibilidad, capacidad, cumplimiento, sostenibilidad y costo total, demostrando que la protección digital depende tanto de la calidad técnica de las herramientas como de la forma en que se administran.


    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Presenta los elementos fundamentales para la selección de tecnologías de protección y seguridad digital en una organización. Incluye la gestión de activos de información, infraestructura tecnológica, seguridad perimetral, sistemas operativos, modelos de seguridad y privacidad, herramientas de análisis, control de acceso, mecanismos de seguridad y cumplimiento normativo, con el propósito de fortalecer la protección de la información y reducir los riesgos de seguridad.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
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
