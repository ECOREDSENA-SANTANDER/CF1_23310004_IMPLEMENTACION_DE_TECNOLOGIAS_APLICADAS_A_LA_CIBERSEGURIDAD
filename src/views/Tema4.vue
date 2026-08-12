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

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-8.mb-3
        p Las cuentas representan identidades humanas, servicios o dispositivos. Cada cuenta debe tener un propósito, propietario, nivel de privilegio y ciclo de vida. Las cuentas compartidas dificultan la trazabilidad porque varias personas realizan acciones bajo la misma identidad. 
        p Los grupos simplifican la asignación de permisos. En lugar de conceder acceso individual a cada usuario, se asigna el permiso al grupo correspondiente con su función. Este enfoque facilita altas, cambios y retiros.
        p Las cuentas predeterminadas deben revisarse. Las cuentas inactivas deben bloquearse o eliminarse de acuerdo con procedimientos. Las cuentas de servicio requieren contraseñas o llaves administradas y no deberían utilizarse para actividades interactivas.
      .col-lg-4.col-10.col-md-7
        img(src="@/assets/curso/temas/t4/img03.png")

    .fondo1(data-aos="zoom-in-left").mb-3
      .row.justify-content-center.align-items-center
        .col-lg-8.col-11
          .row.justify-content-start.mb-4(data-aos="zoom-in-left")
            .col-sm-12.col-lg-12
              .d-flex.align-items-center
                img.w-card-icon(src="@/assets/curso/temas/t2/escudo.svg")
                h3.bg02.py-2.w-card-text.text-white Modelo de seguridad y privacidad de la información
          p Un modelo de seguridad y privacidad organiza políticas, roles, procesos, controles, indicadores y actividades de mejora. Su propósito es garantizar que la seguridad no dependa de acciones aisladas, sino de una gestión sistemática. 
          p En Colombia, el modelo de seguridad y privacidad de la información orienta a las entidades públicas en la adopción de buenas prácticas y en la gestión del ciclo de vida compuesto por planeación, implementación, evaluación y mejora continua. La versión vigente fue actualizada mediante la Resolución 02277 de 2025.
          p Aunque su aplicación normativa se dirige especialmente a entidades públicas, sus principios son útiles como referente pedagógico para comprender la relación entre gobernanza, riesgo, controles y mejora.

        .col-lg-3.col-8.col-md-6
          img(src="@/assets/curso/temas/t4/img04.png") 
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t2/escudo.svg")
          h3.bg02.py-2.w-card-text.text-white Tipos de modelos y marcos de referencia

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
      .col-lg-4.mb-3.col-9.col-md-7
        img(src="@/assets/curso/temas/t4/img055.png")
      .col-lg-8
        p Los modelos pueden orientarse a requisitos de gestión, controles, riesgos, madurez o capacidades. #[em ISO/IEC] 27001:2022 define requisitos para establecer, implementar, mantener y mejorar un sistema de gestión de seguridad de la información. #[em ISO/IEC] 27002:2022 proporciona orientación sobre controles. #[em ISO/IEC] 27005:2022 desarrolla la gestión del riesgo. 
        p #[em NIST CSF] 2.0 organiza resultados de ciberseguridad y facilita la comunicación entre niveles técnicos y directivos. #[em NIST SP] 800-53 ofrece un catálogo de controles flexibles y adaptables. #[em CIS Controls] presenta prácticas priorizadas y prescriptivas. Estos marcos no necesariamente compiten. Una organización puede utilizar #[em ISO/IEC] 27001 como sistema de gestión, #[em NIST CSF] para estructurar resultados y #[em CIS Controls] para priorizar acciones.
    p La selección metodológica debe considerar tamaño, sector, obligaciones, madurez y recursos. Una pequeña empresa puede comenzar con un inventario, configuraciones seguras, control de accesos, copias de seguridad y monitoreo. Una entidad compleja requerirá gobierno formal, evaluación de riesgos, auditorías, métricas y gestión de proveedores.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t2/escudo.svg")
          h3.bg02.py-2.w-card-text.text-white Ciclo de implementación

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left") 
      .col-lg-8.mb-3
        p La planeación define alcance, objetivos, activos, riesgos, responsables y recursos. En esta fase se caracteriza el contexto y se seleccionan metodologías.
        p La implementación pone en funcionamiento políticas, procedimientos y controles. Incluye adquisición, configuración, capacitación y documentación.
        p La evaluación verifica si los controles existen, funcionan y alcanzan sus objetivos. #[em NIST SP] 800-53A plantea procedimientos para evaluar controles de seguridad y privacidad dentro de un marco de gestión de riesgos.
        p La mejora utiliza hallazgos, incidentes, cambios y métricas para ajustar el sistema. Una solución que generó demasiados falsos positivos puede requerir afinación. Una nueva modalidad de trabajo puede exigir autenticación reforzada.
      .col-lg-4.col-9.col-md-7
        img(src="@/assets/curso/temas/t4/img06.png")
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t2/escudo.svg")
          h3.bg02.py-2.w-card-text.text-white Interpretación de la normativa y los estándares
    
    .fondo1(data-aos="zoom-in-left")
      .row.justify-content-center.align-items-center
        .col-lg-3.col-8.col-md-6.mb-4
          img(src="@/assets/curso/temas/t4/img07.png") 
        .col-lg-8.col-11
          p Interpretar no significa memorizar normas. Significa traducir requisitos en decisiones. Si una obligación exige proteger datos frente al acceso no autorizado, la organización debe determinar qué controles de identidad, cifrado, registro y restricción resultan pertinentes.
          p La normativa define obligaciones mínimas y responsabilidades. Los estándares ofrecen métodos y buenas prácticas. Las políticas internas convierten estos lineamientos en reglas organizacionales. La selección tecnológica debe producir evidencia de cumplimiento, como registros, reportes, configuraciones y trazabilidad.
          p El CONPES 3995 de 2020 estableció una política nacional orientada a ampliar la confianza y seguridad digital mediante el fortalecimiento de capacidades y gobernanza. Esta visión refuerza la necesidad de relacionar las tecnologías con la gestión organizacional y la confianza de los usuarios. 

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 1. 
      span Ciclo de gestión de seguridad y privacidad

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-12.mb-3
        img(src="@/assets/curso/temas/t4/fig1.svg", alt='Diagrama  circular del ciclo de gestión de seguridad y privacidad con cuatro fases: planeación, implementación, evaluación y mejora continua, acompañado de ejemplos de productos en cada etapa.')
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t2/escudo.svg")
          h3.bg02.py-2.w-card-text.text-white Herramientas de análisis y seguridad

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.bg08.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img08.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Las herramientas de análisis permiten conocer el estado de los recursos. Pueden identificar características de equipos, versiones, aplicaciones instaladas, configuraciones, vulnerabilidades y consumo de recursos.
            br
            br
            p En #[em hardware], se analizan capacidad, estado, interfaces, #[em firmware] y compatibilidad. En #[em software], se revisan versiones, componentes, servicios, permisos, dependencias y actualizaciones. La finalidad no es acumular datos, sino establecer una línea base y detectar desviaciones.
              br
    p Las herramientas de gestión de activos ayudan a mantener inventarios. Las plataformas de administración de parches permiten controlar actualizaciones. Los gestores de configuración verifican parámetros. Las soluciones de protección de punto final combinan prevención, detección y respuesta.       

    .fondo1(data-aos="zoom-in-left").mb-4
      .row.justify-content-center.align-items-center
        .col-lg-8.col-11
          .row.justify-content-start.mb-4(data-aos="zoom-in-left")
            .col-sm-12.col-lg-12
              .d-flex.align-items-center
                img.w-card-icon(src="@/assets/curso/temas/t2/escudo.svg")
                h3.bg02.py-2.w-card-text.text-white Herramientas de visibilidad y análisis de red
          p La visibilidad de red permite reconocer quién se comunica, con qué servicio, durante cuánto tiempo y con qué volumen. Los analizadores de protocolos muestran paquetes; los sistemas de flujo resumen comunicaciones; los monitores de disponibilidad verifican servicios; y los sistemas de gestión de eventos correlacionan registros. 
          p Cada herramienta responde a preguntas diferentes. Una captura de paquetes aporta detalle, pero exige capacidad de interpretación. Un registro de flujo ofrece una visión resumida útil para tendencias. Un #[em SIEM] correlaciona múltiples fuentes, aunque requiere reglas, almacenamiento y personal.
          p En formación virtual, un laboratorio puede utilizar herramientas para observar una conexión segura, analizar una resolución de nombres o comparar tráfico permitido y bloqueado. La experiencia debe realizarse en ambientes controlados y con autorización.
        .col-lg-3.col-8.col-md-6
          img(src="@/assets/curso/temas/t4/img09.png") 

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t2/escudo.svg")
          h3.bg02.py-2.w-card-text.text-white Herramientas de seguridad perimetral

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
      .col-lg-4.mb-3.col-9.col-md-7
        img(src="@/assets/curso/temas/t4/img10.png") 
      .col-lg-8
        p Las herramientas perimetrales incluyen #[em firewalls, proxies, VPN, IDS/IPS, WAF] y sistemas de filtrado. Pueden presentarse como dispositivos físicos, máquinas virtuales, servicios administrados o funciones en la nube.
        p La selección debe definir si se requiere una herramienta integrada o controles especializados. Una plataforma unificada simplifica administración, pero puede crear dependencia. Las herramientas especializadas ofrecen profundidad, aunque aumentan la complejidad de integración.
        p También debe evaluarse la calidad de los registros. Una herramienta que bloquea tráfico sin explicar la regla, el origen o la razón dificulta la investigación. Los registros deben enviarse a un repositorio protegido y sincronizarse mediante una fuente confiable de tiempo.
      
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t2/escudo.svg")
          h3.bg02.py-2.w-card-text.text-white Criterios para disponer herramientas tecnológicas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-3
        p Disponer una herramienta significa prepararla para su utilización. El proceso incluye asignar infraestructura, instalar, configurar, integrar, documentar y validar. No equivale únicamente a descargar o adquirir.
        p Antes de desplegar debe existir un objetivo y un responsable. También debe definirse un entorno de prueba, un respaldo de configuración y un procedimiento de reversión. Las credenciales iniciales deben cambiarse y la administración debe restringirse.
      .col-lg-4.col-10.col-md-8
        img(src="@/assets/curso/temas/t4/img12.png") 

    .row.justify-content-center.align-items-stretch.mb-0(data-aos="zoom-in-left")
      .col-lg-7.mb-3
        .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-3
          h5 Tabla 7.
          span Criterios

        .tabla-a.color-acento-contenido(data-aos="zoom-in-left").mb-3
          table
            thead
              tr
                th.izqtext.bg5.w-25 Criterio
                th.izqtext.bg5 Pregunta de análisis
            tbody
              tr(style="height: 25px;")
                td #[b Funcionalidad]
                td ¿Qué riesgo o requisito atiende?

              tr(style="height: 25px;")
                td #[b Compatibilidad]
                td ¿Se integra con la infraestructura actual?

              tr(style="height: 25px;")
                td #[b Capacidad]
                td ¿Soporta usuarios, tráfico y crecimiento?

              tr(style="height: 25px;")
                td #[b Seguridad]
                td ¿Ofrece autenticación, cifrado, registros y actualizaciones?

              tr(style="height: 25px;")
                td #[b Administrabilidad]
                td ¿Puede configurarse y mantenerse con los recursos disponibles?

              tr(style="height: 25px;")
                td #[b Cumplimiento]
                td ¿Produce evidencia y apoya requisitos aplicables?

              tr(style="height: 25px;")
                td #[b Soporte]
                td ¿Dispone de actualizaciones y documentación?

              tr(style="height: 25px;")
                td #[b Costo total]
                td ¿Cuánto cuesta durante todo el ciclo de vida?

              tr(style="height: 25px;")
                td #[b Continuidad]
                td ¿Admite respaldo, redundancia y recuperación?

              tr(style="height: 25px;")
                td #[b Usabilidad]
                td ¿Su operación favorece o dificulta el trabajo legítimo?

      .col-lg-5.d-flex.align-items-center.justify-content-center
        img.d-none.d-lg-block(src="@/assets/curso/temas/t4/tabla7.svg" style="width: 100%; height: 100%; object-fit: contain;")

    p Esta matriz convierte la selección en un proceso transparente. Los criterios pueden ponderarse según el contexto. Para un servicio crítico, la disponibilidad podría recibir mayor peso. Para un sistema con datos sensibles, la autenticación y el cifrado serían prioritarios.


























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
