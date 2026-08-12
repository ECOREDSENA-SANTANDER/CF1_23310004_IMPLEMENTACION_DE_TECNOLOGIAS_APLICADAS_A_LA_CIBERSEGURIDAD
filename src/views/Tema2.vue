<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Infraestructura de #[em hardware] y #[em software]

    .row.justify-content-center.align-items-center.mb-3.bg01(data-aos="zoom-in-left")
        .col-lg-5.d-none.d-lg-block
          img.izq(src='@/assets/curso/temas/t2/img01.png', alt='')
        .col-lg-7
          .p-3
            .d-flex.align-items-start
              .row
                .col-lg-3.mb-3
                  img(src='@/assets/curso/temas/t2/ico.png', alt='', style='width:70px;')
                .col-lg-12
                p.text-white La infraestructura tecnológica reúne los recursos físicos y lógicos que permiten el funcionamiento de los sistemas de información.
                p.mb-0.text-white • #[em Hardware:] servidores, computadores, dispositivos móviles, equipos de red y almacenamiento. 
                p.text-white • #[em Software:] sistemas operativos, aplicaciones, bases de datos y herramientas de seguridad. 
                p.text-white Según las necesidades de la organización, la infraestructura puede #[b #[em ser local, en la nube o híbrida]]. Su diseño debe considerar aspectos como disponibilidad, capacidad, escalabilidad y mantenimiento.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t2/escudo.svg")
          h3.bg02.py-2.w-card-text.text-white Interconexión de redes y dependencias tecnológicas

    p Las redes permiten la comunicación entre usuarios, dispositivos y aplicaciones. Sin embargo, cada conexión puede representar un riesgo de seguridad.

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-5.mb-3.col-md-8
        img(src="@/assets/curso/temas/t2/img02.png")
      .col-lg-7
        p Para reducir estos riesgos se utiliza la #[b segmentación de redes], separando recursos según su función (administración, servidores, invitados, laboratorios, entre otros).
        p También es importante controlar las conexiones con terceros mediante herramientas como:
        p.mb-0 #[em • VPN. ]
        p.mb-0 #[em • Multi-Factor Authentication (MFA). ]
        p.mb-0 • Control de acceso por roles. 
        p • Monitoreo de sesiones. 
        p El enfoque #[em zero trust] establece que ningún usuario o dispositivo debe considerarse confiable automáticamente.
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t2/escudo.svg")
          h3.bg02.py-2.w-card-text.text-white Herramientas para el análisis de infraestructura

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-3.mb-3.col-md-5.col-7
        img(src="@/assets/curso/temas/t2/img03.png")
      .col-lg-9
        p Estas herramientas permiten conocer el estado y comportamiento de la infraestructura tecnológica.
        .row.justify-content-center.align-items-center.mb-3.bg04(data-aos="zoom-in-left")
          .col-lg-5.d-none.d-lg-block
            img.izq(src='@/assets/curso/temas/t2/img04.svg', alt='')
          .col-lg-7
            .py-2
            h4.bg03.p-2.text-white Principales funciones:
            p • Inventariar activos. 
            p • Monitorear disponibilidad y rendimiento. 
            p • Analizar tráfico de red. 
            p • Revisar registros de eventos (#[em logs]). 
            p • Verificar configuraciones. 

        p Su objetivo es identificar fallas, vulnerabilidades y actividades no autorizadas.

    .fondo1(data-aos="zoom-in-left")
      .row.justify-content-center.align-items-center
        .col-lg-7.col-11
          .row.justify-content-start.mb-4(data-aos="zoom-in-left")
            .col-sm-12.col-lg-12
              .d-flex.align-items-center
                img.w-card-icon(src="@/assets/curso/temas/t2/escudo.svg")
                h3.bg02.py-2.w-card-text.text-white Licenciamiento, soporte y ciclo de vida
          p El #[b licenciamiento] define las condiciones de uso, actualizaciones y soporte de una solución tecnológica.
          p Antes de seleccionar una herramienta es importante verificar:
          p • Tipo de licencia. 
          p • Costos de renovación. 
          p • Actualizaciones disponibles. 
          p • Soporte técnico del fabricante. 
          p Además, debe considerarse el ciclo de vida del producto, ya que las tecnologías sin soporte pueden presentar vulnerabilidades y problemas de compatibilidad.
        .col-lg-4.col-8.col-md-6
          img(src="@/assets/curso/temas/t2/img06.png") 














</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
