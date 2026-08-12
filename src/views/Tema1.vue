<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Activos de información
      
      .row.justify-content-center.align-items-center.mb-3.bg01(data-aos="zoom-in-left")
        .col-lg-5.d-none.d-lg-block
          img.izq(src='@/assets/curso/temas/t1/img01.png', alt='')
        .col-lg-7
          .p-3
            .d-flex.align-items-start
              .row
                .col-lg-3.mb-3
                  img(src='@/assets/curso/temas/t1/img02.png', alt='', style='width:70px;')
                .col-lg-12
                p.text-white Un activo de información es cualquier elemento que genera, procesa, almacena, transmite o respalda información valiosa para una organización. El término no se limita a documentos y bases de datos. También comprende aplicaciones, servidores, dispositivos, redes, servicios, personas, conocimiento, instalaciones, contratos, configuraciones y proveedores. 
                p.text-white La identificación de activos constituye el punto de partida para seleccionar controles. No es posible determinar qué #[em firewall], mecanismo de cifrado o modelo de acceso se requiere cuando no se conoce la información que debe protegerse. El activo conecta la tecnología con el propósito institucional. Una base de datos académica no tiene valor únicamente por su tamaño o costo de almacenamiento; su importancia proviene de los procesos que soporta, las obligaciones asociadas y el impacto que tendría su pérdida, alteración o divulgación.

      p Los activos presentan características que influyen en su protección. La criticidad expresa su importancia para la continuidad de los procesos. La sensibilidad indica el nivel de daño que produciría una divulgación no autorizada. La dependencia muestra cuántos procesos o servicios necesitan el activo. El reemplazo determina la dificultad para recuperarlo. La temporalidad señala que su valor puede cambiar a lo largo del tiempo.
      p Como ejemplo, los resultados preliminares de una evaluación académica poseen alta sensibilidad antes de su publicación, porque una divulgación podría afectar la igualdad del proceso. Después de su publicación oficial, su necesidad de confidencialidad puede disminuir, aunque la integridad y disponibilidad siguen siendo relevantes. Esta variación demuestra que la valoración debe revisar el ciclo de vida de la información.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t2/escudo.svg")
            h3.bg02.py-2.w-card-text.text-white Tipos de activos de información

      p Los activos de información son todos los recursos que tienen valor para una organización y que requieren protección para garantizar la continuidad de sus procesos.

      .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-4
            h5 Tabla 1.
            span Clasificación de los activos de información

          .tabla-a.color-acento-contenido(data-aos="zoom-in-left").mb-4
            table
              thead
                tr
                  th.izqtext.bg5.w-25 Tipo de activo
                  th.izqtext.bg5 Descripción
                  th.izqtext.bg5 Ejemplos
              tbody
                tr
                  td #[b Activos primarios]
                  td Contienen la información o los procesos esenciales para el funcionamiento de la organización. Su pérdida, alteración o divulgación puede afectar directamente el cumplimiento de los objetivos institucionales.
                  td Datos personales, información financiera, expedientes, registros académicos, contratos, propiedad intelectual, credenciales, procedimientos operativos.

                tr
                  td #[b Activos de soporte]
                  td Son los recursos que permiten almacenar, procesar, transmitir o proteger los activos primarios.
                  td Servidores, computadores, #[em software], redes, medios de almacenamiento, sistemas de energía, instalaciones físicas y personal.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t2/escudo.svg")
            h3.bg02.py-2.w-card-text.text-white Identificación, inventario y clasificación de activos

      .row.justify-content-center.align-items-stretch.mb-3(data-aos="zoom-in-left")
        .col-lg-8
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Activos tangibles")
              .col-lg-12.mb-4.mb-md-0
                p Son aquellos que poseen una existencia física y pueden ser observados o manipulados.

                p #[b Ejemplos:]
                p.mb-0 • Computadores.
                p.mb-0 • Dispositivos móviles.
                p.mb-0 • Servidores.
                p.mb-0 • Equipos de red.
                p.mb-0 • Unidades de almacenamiento.
                p.mb-0 • Infraestructura tecnológica.

            .row(titulo="Activos intangibles")
              .col-lg-12.mb-4.mb-md-0
                p No tienen una forma física, pero poseen un alto valor para la organización.

                p #[b Ejemplos:]
                p.mb-0 • Licencias de #[i software].
                p.mb-0 • Configuraciones de sistemas.
                p.mb-0 • Credenciales de acceso.
                p.mb-0 • Bases de conocimiento.
                p.mb-0 • Reputación institucional.
                p.mb-0 • Propiedad intelectual.

            .row(titulo="Servicios externos como activos estratégicos")
              .col-lg-12.mb-4.mb-md-0
                p Actualmente, muchas organizaciones dependen de servicios proporcionados por terceros. Aunque estos recursos no se encuentran bajo su control físico, son fundamentales para la operación.

                .row
                  .col-lg-6
                    p #[b Ejemplos de servicios externos:]
                    p.mb-0 • Plataformas de correo electrónico.
                    p.mb-0 • Servicios de almacenamiento en la nube.
                    p.mb-0 • Proveedores de internet.
                    p.mb-0 • Aplicaciones empresariales #[i SaaS].
                    p.mb-0 • Servicios de respaldo y recuperación.

                  .col-lg-6
                    p #[b Aspectos a considerar al seleccionarlos:]
                    p.mb-0 • Disponibilidad del servicio.
                    p.mb-0 • Medidas de seguridad implementadas.
                    p.mb-0 • Protección de datos.
                    p.mb-0 • Acuerdos de nivel de servicio.
                    p.mb-0 • Planes de continuidad y recuperación.

        .col-lg-4
          img.w-100.d-none.d-lg-block(src="@/assets/curso/temas/t1/img03.png" style="height: 100%; object-fit:contain;")


      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t2/escudo.svg")
            h3.bg02.py-2.w-card-text.text-white Identificación, inventario y clasificación de activos

      .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-3.mb-3.col-md-5.col-7
          img(src="@/assets/curso/temas/t1/img04.png")
        .col-lg-9
          p La gestión de activos de información inicia con su identificación, inventario y clasificación, permitiendo conocer qué recursos posee la organización, quién es responsable de ellos y qué nivel de protección requieren.
          .row.justify-content-center.align-items-center.mb-3.bg09(data-aos="zoom-in-left")
            .col-lg-6.d-none.d-lg-block
              img.izq(src='@/assets/curso/temas/t1/img05.svg', alt='')
            .col-lg-6
              .py-2
              h4.bg03.p-2.text-white Inventario de activos
              p El inventario debe realizarse con la participación de los responsables de los procesos, ya que ellos conocen la información y los recursos críticos de la organización.

      .row.justify-content-center.align-items-stretch.mb-2(data-aos="zoom-in-left")
        .col-lg-7.mb-3
          .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-4
            h5 Tabla 2.
            span Inventario básico

          .tabla-a.color-acento-contenido(data-aos="zoom-in-left").mb-4
            table
              thead
                tr
                  th.izqtext.bg5 Elemento
                  th.izqtext.bg5 Descripción
              tbody
                tr
                  td #[b Nombre del activo]
                  td Identificación del recurso.

                tr
                  td #[b Descripción]
                  td Función o propósito.

                tr
                  td #[b Propietario]
                  td Responsable de definir su uso y protección.

                tr
                  td #[b Custodio]
                  td Encargado de su administración técnica.

                tr
                  td #[b Ubicación]
                  td Lugar físico o digital donde se encuentra.

                tr
                  td #[b Clasificación]
                  td Nivel de sensibilidad de la información.

                tr
                  td #[b Proceso asociado]
                  td Actividad que soporta.

        .col-lg-5.d-flex.align-items-stretch
          img.w-100.d-none.d-lg-block(src="@/assets/curso/temas/t1/tabla2.svg" style="height: 100%; object-fit: contain;")        

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t2/escudo.svg")
            h3.bg02.py-2.w-card-text.text-white Clasificación de los activos
      
      p La clasificación permite aplicar medidas de seguridad según la importancia y sensibilidad de la información.

      .row.justify-content-center.align-items-stretch.mb-0(data-aos="zoom-in-left")
        .col-lg-7.mb-3
          .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-4
            h5 Tabla 3.
            span Clasificación

          .tabla-a.color-acento-contenido(data-aos="zoom-in-left").mb-2
            table
              thead
                tr
                  th.izqtext.bg5.w-25 Clasificación
                  th.izqtext.bg5 Descripción
              tbody
                tr
                  td #[b Pública]
                  td Información de libre divulgación.

                tr
                  td #[b Interna]
                  td Uso exclusivo de la organización.

                tr
                  td #[b Confidencial]
                  td Acceso limitado a personal autorizado.

                tr
                  td #[b Restringida]
                  td Información crítica que requiere máxima protección.

        .col-lg-5.d-flex.align-items-stretch
          img.w-100.d-none.d-lg-block(src="@/assets/curso/temas/t1/tabla3.svg" style="height: 100%; object-fit: contain;")

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t2/escudo.svg")
            h3.bg02.py-2.w-card-text.text-white Actualización del inventario
      
      p El inventario debe mantenerse actualizado cuando se incorporen nuevos equipos, aplicaciones, proveedores o servicios, ya que cada cambio puede generar nuevos riesgos.

      .fondo1(data-aos="zoom-in-left").mb-4
        .row.justify-content-center.align-items-center
          .col-lg-8.col-11
            .row.justify-content-start.mb-4(data-aos="zoom-in-left")
              .col-sm-12.col-lg-12
                .d-flex.align-items-center
                  img.w-card-icon(src="@/assets/curso/temas/t2/escudo.svg")
                  h3.bg02.py-2.w-card-text.text-white Técnicas de valoración de activos
            p La valoración puede combinar criterios cualitativos y cuantitativos. La valoración cualitativa emplea categorías como bajo, medio, alto o crítico. Resulta comprensible y facilita la participación de responsables no técnicos. La valoración cuantitativa intenta asignar valores económicos, tiempos de interrupción o porcentajes de afectación. Aunque ofrece mayor precisión aparente, puede ser difícil estimar el costo de la reputación, la confianza o la pérdida de oportunidades.
            p Una técnica práctica consiste en valorar la confidencialidad, integridad y disponibilidad. La confidencialidad se relaciona con el daño causado por el acceso no autorizado. La integridad analiza las consecuencias de modificaciones indebidas. La disponibilidad considera el efecto de la interrupción o pérdida de acceso. También pueden añadirse autenticidad, trazabilidad, privacidad y cumplimiento.

          .col-lg-3.col-8.col-md-6
            img(src="@/assets/curso/temas/t1/img05.png") 

      .row.justify-content-center.align-items-stretch.mb-0(data-aos="zoom-in-left")
        .col-lg-12.mb-3
          .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-4
            h5 Tabla 4.
            span Valoración simplificada

          .tabla-a.color-acento-contenido(data-aos="zoom-in-left").mb-4
            table
              thead
                tr
                  th.izqtext.bg5 Activo
                  th.izqtext.bg5 Confidencialidad
                  th.izqtext.bg5 Integridad
                  th.izqtext.bg5 Disponibilidad
                  th.izqtext.bg5 Valor global
              tbody
                tr
                  td #[b Base de datos de aprendices]
                  td Alto.
                  td Alto.
                  td Alto.
                  td Crítico.

                tr
                  td #[b Portal web informativo]
                  td Bajo.
                  td Alto.
                  td Medio.
                  td Alto.

                tr
                  td #[b Servidor de copias de seguridad]
                  td Alto.
                  td Alto.
                  td Alto.
                  td Crítico.

                tr
                  td #[b Manual institucional público]
                  td Bajo.
                  td Medio.
                  td Medio.
                  td Medio.

                tr
                  td #[b Credenciales administrativas]
                  td Crítico.
                  td Crítico.
                  td Alto.
                  td Crítico.

      .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-5.mb-3.col-10.col-md-7
          img(src='@/assets/curso/temas/t1/img06.png', alt='')
        .col-lg-7
          .row.justify-content-center.mb-0(data-aos="zoom-in-left")
            .col-lg-2.mb-2
              img.d-none.d-lg-block(src='@/assets/curso/temas/t1/img07.png', alt='')
            .col-lg-10
              p El valor global no debería obtenerse siempre mediante un promedio. Cuando una sola dimensión es crítica, el activo puede requerir protección elevada. Las credenciales administrativas, por ejemplo, pueden ser pequeñas en volumen, pero su compromiso permitiría acceder a múltiples sistemas.
          p Otra técnica considera el impacto operativo, financiero, legal, reputacional y humano. En un centro de formación, una falla del sistema de matrícula puede generar retrasos, reprocesos, inconformidad de los usuarios y afectación del calendario. La valoración debe reflejar esas consecuencias, no solo el costo del servidor.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t2/escudo.svg")
            h3.bg02.py-2.w-card-text.text-white Modelado de amenazas aplicado a los activos

      .bloque-texto-g.bloque-texto-g--inverso.bg09.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/img08.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El modelado de amenazas es una metodología que permite identificar los riesgos que pueden afectar un activo de información, analizar cómo podrían materializarse y definir los controles más adecuados para mitigarlos.
            br
            br
            | Su objetivo no es predecir todos los ataques posibles, sino comprender los escenarios de riesgo más probables y apoyar la toma de decisiones en seguridad.
      
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t2/escudo.svg")
            h3.bg02.py-2.w-card-text.text-white Modelado de amenazas aplicado a los activos

      .fondo02.p-4.mb-4(data-aos="zoom-in-left")
        .row.justify-content-center.align-items-end.mb-5
          .col-lg-4.mb-0.d-flex.align-items-end.justify-content-center
            img.d-none.d-lg-block(src="@/assets/curso/temas/t1/img09.png" alt="" style="position: relative; top: 71px; width: 90%; max-width: none;")

          .col-lg-7
            SlyderF(columnas="col-lg-6 col-xl-4")
              .tarjeta.bg04.p-4
                .row.justify-content-center.mb-3
                  .col-8.col-md-4.col-lg-7
                    img(src='@/assets/curso/temas/t1/1.png' alt='')
                p.text-center ¿Qué activo se desea proteger?

              .tarjeta.bg04.p-4
                .row.justify-content-center.mb-3
                  .col-8.col-md-4.col-lg-7
                    img(src='@/assets/curso/temas/t1/2.png' alt='')
                p.text-center ¿Qué amenazas podrían afectarlo?

              .tarjeta.bg04.p-4
                .row.justify-content-center.mb-3
                  .col-8.col-md-4.col-lg-7
                    img(src='@/assets/curso/temas/t1/3.png' alt='')
                p.text-center ¿Quién podría intentar comprometerlo?

              .tarjeta.bg04.p-4
                .row.justify-content-center.mb-3
                  .col-8.col-md-4.col-lg-7
                    img(src='@/assets/curso/temas/t1/4.png' alt='')
                p.text-center ¿Qué vulnerabilidades existen?

              .tarjeta.bg04.p-4
                .row.justify-content-center.mb-3
                  .col-8.col-md-4.col-lg-7
                    img(src='@/assets/curso/temas/t1/5.png' alt='')
                p.text-center ¿Cuáles son las posibles rutas de acceso o ataque?

              .tarjeta.bg04.p-4
                .row.justify-content-center.mb-3
                  .col-8.col-md-4.col-lg-7
                    img(src='@/assets/curso/temas/t1/6.png' alt='')
                p.text-center ¿Qué impacto tendría un incidente?

              .tarjeta.bg04.p-4
                .row.justify-content-center.mb-3
                  .col-8.col-md-4.col-lg-7
                    img(src='@/assets/curso/temas/t1/7.png' alt='')
                p.text-center ¿Qué controles existen actualmente?

      .row.justify-content-center.align-items-stretch.mb-5(data-aos="zoom-in-left")
        .col-lg-7.mb-3
          .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-4
            h5 Tabla 5.
            span Ejemplo: plataforma virtual de formación

          .tabla-a.color-acento-contenido(data-aos="zoom-in-left").mb-4
            table
              thead
                tr
                  th.izqtext.bg5.w-25 Elemento
                  th.izqtext.bg5 Ejemplo
              tbody
                tr
                  td #[b Activos]
                  td Cuentas de usuario, contenidos, evaluaciones y registros de actividad.

                tr
                  td #[b Amenazas]
                  td Robo de credenciales, alteración de calificaciones, denegación de servicio.

                tr
                  td #[b Vulnerabilidades]
                  td Contraseñas débiles, servidores desactualizados, fallas en aplicaciones web.

                tr
                  td #[b Rutas de ataque]
                  td Formularios web, interfaces administrativas y accesos remotos.

                tr
                  td #[b Controles]
                  td Autenticación multifactor, copias de seguridad, gestión de parches, monitoreo y segmentación de redes.

        .col-lg-5.d-flex.align-items-stretch(data-aos="zoom-in-left")
          img.w-100.d-none.d-lg-block(src="@/assets/curso/temas/t1/tabla5.svg" style="height: 91%; object-fit: contain;")
















  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
