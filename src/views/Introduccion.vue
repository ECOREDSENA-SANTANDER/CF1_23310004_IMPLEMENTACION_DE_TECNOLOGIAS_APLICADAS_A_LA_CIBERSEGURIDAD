<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        img(src='@/assets/curso/portada/INTRO.png', alt='')
        
    P La transformación digital ha aumentado la dependencia de las organizaciones frente a los sistemas de información, redes y servicios digitales, haciendo necesaria la implementación de tecnologías de seguridad que protejan la confidencialidad, integridad, disponibilidad, autenticidad y trazabilidad de los datos. Este componente formativo orienta al aprendiz en la selección de recursos tecnológicos de protección digital mediante el análisis de activos, riesgos, infraestructura, controles de seguridad, normativas y metodologías. Se enfatiza que no existe una solución única, por lo que la elección de tecnologías debe responder al contexto, necesidades y capacidades de cada organización. Al finalizar, el aprendiz estará en capacidad de identificar activos críticos, evaluar soluciones de seguridad, justificar su pertinencia y proponer planes básicos de implementación integrando #[em hardware, software], procedimientos y servicios.
    
    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")         
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
