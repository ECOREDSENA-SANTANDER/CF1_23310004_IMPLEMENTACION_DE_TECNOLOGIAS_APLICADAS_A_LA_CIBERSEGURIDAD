<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Seguridad en sistemas operativos

    .row.justify-content-center.align-items-center.mb-3.bg01(data-aos="zoom-in-left")
        .col-lg-5.d-none.d-lg-block
          img.izq(src='@/assets/curso/temas/t4/img01.png', alt='')
        .col-lg-7
          .p-3
            .d-flex.align-items-start
              .row
                .col-lg-3.mb-3
                  img(src='@/assets/curso/temas/t4/img02.png', alt='', style='width:70px;')
                .col-lg-12
                p.text-white El sistema operativo administra procesadores, memoria, dispositivos, usuarios, archivos y servicios. Una falla en su configuración puede invalidar otros controles. Un servidor protegido por #[em firewall] continúa siendo vulnerable cuando sus permisos permiten que cualquier usuario modifique archivos críticos.
                p.text-white Los sistemas de archivos organizan la información en directorios, archivos y metadatos. Los permisos determinan quién puede leer, escribir o ejecutar. En sistemas Linux, los archivos poseen propietario, grupo y permisos. En Windows, las #[em ACL] permiten asignar permisos detallados a usuarios y grupos.
                p.text-white Los atributos pueden agregar restricciones, como impedir modificaciones, ocultar archivos o establecer auditoría. Su aplicación debe documentarse, porque configuraciones demasiado restrictivas pueden afectar aplicaciones y procesos de actualización.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t2/escudo.svg")
          h3.bg02.py-2.w-card-text.text-white Gestión de usuarios y grupos

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-8.mb-3
        p Las cuentas representan identidades humanas, servicios o dispositivos. Cada cuenta debe tener un propósito, propietario, nivel de privilegio y ciclo de vida. Las cuentas compartidas dificultan la trazabilidad porque varias personas realizan acciones bajo la misma identidad. 
        p Los grupos simplifican la asignación de permisos. En lugar de conceder acceso individual a cada usuario, se asigna el permiso al grupo correspondiente con su función. Este enfoque facilita altas, cambios y retiros.
        p Las cuentas predeterminadas deben revisarse. Las cuentas inactivas deben bloquearse o eliminarse de acuerdo con procedimientos. Las cuentas de servicio requieren contraseñas o llaves administradas y no deberían utilizarse para actividades interactivas.
      .col-lg-4
        img(src="@/assets/curso/temas/t4/img03.png")

    .fondo1(data-aos="zoom-in-left")
      .row.justify-content-center.align-items-center
        .col-lg-7.col-11
          .row.justify-content-start.mb-4(data-aos="zoom-in-left")
            .col-sm-12.col-lg-12
              .d-flex.align-items-center
                img.w-card-icon(src="@/assets/curso/temas/t2/escudo.svg")
                h3.bg02.py-2.w-card-text.text-white Modelo de seguridad y privacidad de la información
          p Un modelo de seguridad y privacidad organiza políticas, roles, procesos, controles, indicadores y actividades de mejora. Su propósito es garantizar que la seguridad no dependa de acciones aisladas, sino de una gestión sistemática. 
          p En Colombia, el modelo de seguridad y privacidad de la información orienta a las entidades públicas en la adopción de buenas prácticas y en la gestión del ciclo de vida compuesto por planeación, implementación, evaluación y mejora continua. La versión vigente fue actualizada mediante la Resolución 02277 de 2025.
          p Aunque su aplicación normativa se dirige especialmente a entidades públicas, sus principios son útiles como referente pedagógico para comprender la relación entre gobernanza, riesgo, controles y mejora.

        .col-lg-4.col-8.col-md-6
          img(src="@/assets/curso/temas/t4/img04.png") 


























































</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
