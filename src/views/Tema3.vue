<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Seguridad perimetral

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
                p.text-white La seguridad perimetral reúne las tecnologías y controles que protegen las comunicaciones entre redes o zonas con diferentes niveles de confianza. Aunque tradicionalmente se enfocaba en la frontera entre la red interna e internet, actualmente también debe considerar la nube, los dispositivos móviles, el acceso remoto y las conexiones con terceros.
                H5.text-white Principios básicos
                p.mb-0.text-white • #[b Denegar por defecto:] bloquear todo acceso no autorizado explícitamente.
                p.mb-0.text-white • #[b Permitir solo lo necesario:] aplicar el principio de mínimo privilegio.
                p.mb-0.text-white • #[b Segmentar la red:] separar recursos según funciones y niveles de riesgo.
                p.mb-0.text-white • #[b Inspeccionar el tráfico:] analizar las comunicaciones que ingresan y salen.
                p.mb-0.text-white • #[b Registrar eventos:] mantener evidencias para monitoreo y auditoría.
                p.mb-0.text-white • #[b Actualizar configuraciones:] corregir vulnerabilidades y mejorar la protección.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t2/escudo.svg")
          h3.bg02.py-2.w-card-text.text-white Interconexión de redes y dependencias tecnológicas

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-4.mb-3.col-10.col-md-9
        img(src="@/assets/curso/temas/t3/img01.png")
      .col-lg-8
        p La seguridad debe implementarse mediante varias capas de protección que trabajen de forma complementaria, como:
        p.mb-0 • #[em Firewalls.]
        p.mb-0 • #[em WAF (firewall de aplicaciones web). ]
        p.mb-0 • Autenticación multifactor (#[em MFA]). 
        p.mb-0 • Configuración segura. 
        p.mb-0 • Monitoreo de eventos. 
        p.mb-0 • Copias de seguridad.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t2/escudo.svg")
          h3.bg02.py-2.w-card-text.text-white #[em Firewalls] y arquitecturas de filtrado

    p Un #[em #[b firewall]] es un dispositivo o #[em software] que controla el tráfico de red mediante reglas de seguridad, permitiendo o bloqueando comunicaciones según criterios como dirección IP, puerto, protocolo, aplicación o usuario.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t2/escudo.svg")
          h3.bg02.py-2.w-card-text.text-white Tipos de #[em Firewalls] 
    
    .tarjeta--container.row.mb-4(data-aos="zoom-in-left")
      .col-md.tarjeta.bg05.text-white.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/t3/1.png', alt='')          
        h3.text-center #[em Firewall] sin estado (#[em Stateless])
        p Evalúa cada paquete de forma independiente. 
      
      .col-md.tarjeta.bg06.text-white.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/t3/2.png', alt='')          
        h3.text-center #[em Firewall] con estado (#[em Stateful])
        p Analiza las conexiones activas y verifica si los paquetes pertenecen a sesiones autorizadas. 
      
      .col-md.tarjeta.bg07.text-white.p-5(data-aos="zoom-in-left")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/t3/3.png', alt='')          
        h3.text-center #[em Next-Generation Firewall (NGFW) ]
        p Incorpora funciones avanzadas como identificación de aplicaciones, prevención de intrusiones (#[em IPS]), filtrado web e inspección de tráfico cifrado.
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t2/escudo.svg")
          h3.bg02.py-2.w-card-text.text-white Ubicación en la red

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-3.mb-3.col-md-5.col-7
        img(src="@/assets/curso/temas/t3/img02.png")
      .col-lg-9
        p.mb-0 Los #[em firewalls] pueden implementarse:
        p.mb-0 • Entre internet y la red de la organización. 
        p.mb-0 • Entre segmentos internos de la red. 
        p • En dispositivos individuales como protección local. 
        .row.justify-content-center.align-items-center.mb-3.bg04(data-aos="zoom-in-left")
          .col-lg-5.d-none.d-lg-block
            img.izq(src='@/assets/curso/temas/t2/img04.svg', alt='')
          .col-lg-7
            .py-2
            h4.bg03.p-2.text-white #[em Demilitarized Zone (DMZ)]
            p La #[b DMZ] es una zona de red donde se ubican servicios públicos, como servidores web o portales institucionales, para evitar accesos directos desde internet a la red interna.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t2/escudo.svg")
          h3.bg02.py-2.w-card-text.text-white Plataformas y soluciones de seguridad perimetral

    p Las plataformas de seguridad perimetral permiten controlar, supervisar y proteger el tráfico entre redes con distintos niveles de confianza. La siguiente tabla compara algunas de las soluciones más utilizadas, considerando su tipo, características principales, ventajas y contextos de aplicación.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-4
      h5 Tabla 6.
      span Comparación de plataformas y soluciones de seguridad perimetral

    .tabla-a.color-acento-contenido(data-aos="zoom-in-left").mb-4
      table
        thead
          tr
            th.izqtext.bg5 Plataforma
            th.izqtext.bg5 Tipo de solución
            th.izqtext.bg5 Características principales
            th.izqtext.bg5 Ventaja destacada
            th.izqtext.bg5 Aplicación recomendada
        tbody
          tr
            td #[b Iptables]
            td #[em Firewall] por #[em software] para Linux
            td Filtrado de paquetes mediante reglas, cadenas y tablas.
            td Flexibilidad y control detallado.
            td Servidores Linux y laboratorios de formación.

          tr
            td #[b MikroTik]
            td #[em Router] y #[em firewall] integrado
            td Enrutamiento, #[em VPN], filtrado, control de tráfico y administración de red.
            td Buena relación costo-funcionalidad.
            td Pequeñas y medianas organizaciones.

          tr
            td #[b Cisco ASA]
            td Appliance de seguridad perimetral
            td #[em Firewall], #[em VPN], control de acceso y alta disponibilidad.
            td Integración con infraestructura Cisco.
            td Organizaciones con redes empresariales estructuradas.

          tr
            td #[b FortiGate]
            td #[em Firewall] de próxima generación
            td Filtrado de aplicaciones, #[em IPS], #[em VPN], antivirus y control web.
            td Integración de múltiples funciones de seguridad.
            td Empresas que requieren protección centralizada.

          tr
            td #[b pfSense]
            td #[em Firewall] y #[em router] de código abierto
            td #[em Firewall], #[em VPN], balanceo, monitoreo y paquetes #[em IDS/IPS].
            td Flexibilidad y bajo costo de implementación.
            td Laboratorios, pymes y entornos personalizados.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t2/escudo.svg")
          h3.bg02.py-2.w-card-text.text-white #[em Proxy], filtrado de contenidos y listas de control de acceso

    p Los #[em #[b proxys]], los sistemas de #[b filtrado de contenidos] y las listas de control de acceso son mecanismos utilizados para controlar y proteger el acceso a recursos y servicios.

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.justify-content-center(titulo="<i>Proxy</i>")
        .col-lg-6.mb-4.mb-md-0
          p Un #[em proxy] actúa como intermediario entre usuarios y servicios.
          p.mb-0 • #[b #[em proxy] directo:] representa a los usuarios cuando acceden a recursos externos, permitiendo aplicar políticas, registrar actividades y optimizar el tráfico. 
          p.mb-0 • #[b #[em proxy] inverso:] protege los servidores internos, distribuye solicitudes y oculta la infraestructura de la organización. 
          p • #[b #[em proxy] caché:] almacena temporalmente contenido para mejorar el rendimiento y reducir el consumo de ancho de banda.
        .col-lg-5.col-md-8.col-9
          figure
            img(src='@/assets/curso/temas/t3/aco1.png', alt='')

      .row.justify-content-center(titulo="Filtrado de contenidos")
        .col-lg-6.mb-4.mb-md-0
          p Permite controlar el acceso a sitios web, categorías de contenido, tipos de archivos o aplicaciones según las políticas de la organización.
          p.mb-0 Debe configurarse de acuerdo con las necesidades institucionales, evitando restricciones que afecten actividades legítimas.

        .col-lg-5.col-md-8.col-9
          figure
            img(src='@/assets/curso/temas/t3/aco2.png', alt='')

      .row.justify-content-center(titulo="<i>Access Control List (ACL)</i>")
        .col-lg-6.mb-4.mb-md-0
          p Las #[em ACL] establecen qué usuarios o dispositivos pueden acceder a determinados recursos.
          p.mb-0 Se utilizan para:
          p.mb-0 • Permitir o bloquear tráfico de red.
          p.mb-0 • Controlar accesos a sistemas y archivos.
          p • Aplicar el principio de mínimo privilegio.

        .col-lg-5.col-md-8.col-9
          figure
            img(src='@/assets/curso/temas/t3/aco3.png', alt='')

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t2/escudo.svg")
          h3.bg02.py-2.w-card-text.text-white  Redes privadas virtuales 

    p Una #[b #[em VPN (Virtual Private Network)]] crea una conexión segura a través de una red pública, permitiendo proteger la información mediante mecanismos de cifrado y autenticación.
    h5.mb-0 Tipos de #[em VPN]:
    p.mb-0 #[b • #[em VPN]] sitio a sitio: conecta redes completas, como diferentes sedes de una organización. 
    p #[b • #[em VPN]] de acceso remoto: permite que usuarios individuales accedan de forma segura a recursos internos. 

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-5.mb-3.col-11.col-md-10
        img(src='@/assets/curso/temas/t3/img04.png', alt='')
      .col-lg-7
        h5 Aspectos a considerar:
        p.mb-0 • Protocolos de seguridad. 
        p.mb-0 • Métodos de autenticación. 
        p.mb-0 • Compatibilidad con los sistemas existentes. 
        p • Rendimiento y facilidad de administración. 

        p Una #[em VPN] mejora la seguridad de las comunicaciones, pero debe complementarse con autenticación multifactor #[em (MFA)], segmentación de red y controles de acceso para reducir riesgos.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t2/escudo.svg")
          h3.bg02.py-2.w-card-text.text-white Sistemas de detección y prevención de intrusiones
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-5.mb-3.col-10.col-md-7
        img(src='@/assets/curso/temas/t3/img05.png', alt='')
      .col-lg-7
        .row.justify-content-center.mb-0(data-aos="zoom-in-left")
          .col-lg-2.mb-2
            img.d-none.d-lg-block(src='@/assets/curso/temas/t3/img06.png', alt='')
          .col-lg-10
            p Un #[em IDS] analiza eventos o tráfico y genera alertas ante comportamientos sospechosos. Un #[em IPS] puede bloquear o modificar la comunicación. Ambos pueden utilizar firmas conocidas, reglas, anomalías o análisis de comportamiento. La diferencia entre detectar y prevenir tiene consecuencias operativas. Un #[em IDS] proporciona visibilidad sin intervenir directamente, mientras que un #[em IPS] mal ajustado podría bloquear actividad legítima. Por ello, una implementación suele comenzar con observación y ajuste antes de activar bloqueo automático.
        p La herramienta debe ubicarse donde pueda observar el tráfico relevante. También requiere actualizaciones, definición de activos protegidos y responsables de revisar las alertas. #[em pfSense], por ejemplo, puede incorporar #[em Snort] o #[em Suricata] para desempeñar funciones #[em IDS/IPS], pero el valor depende de la configuración y del ajuste al entorno.

       



























</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
