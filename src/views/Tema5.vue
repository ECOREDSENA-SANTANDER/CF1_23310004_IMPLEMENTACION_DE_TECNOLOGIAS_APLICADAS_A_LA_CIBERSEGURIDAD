<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Modelos de control de acceso

    p El control de acceso determina quién puede realizar qué acción sobre un recurso y bajo qué condiciones. Su funcionamiento combina identificación, autenticación, autorización y auditoría. La identificación presenta una identidad; la autenticación la verifica; la autorización concede permisos; y la auditoría registra acciones.

    .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
      .col-lg-8.mb-4
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="<i>DAC (Discretionary Access Control</i> – Control de acceso discrecional)")
            .col-lg-12.mb-4.mb-md-0
              p El propietario de un recurso asigna los permisos de acceso. Es común en sistemas de archivos donde el dueño decide quién puede leer, modificar o eliminar información. Su principal ventaja es la flexibilidad para compartir recursos; sin embargo, puede generar permisos inconsistentes si los usuarios otorgan accesos excesivos o sin criterios uniformes. Es adecuado cuando los propietarios comprenden sus responsabilidades y existen políticas, plantillas y revisiones periódicas.
          .row(titulo="<i>MAC (Mandatory Access Control</i> – Control de acceso obligatorio)")
            .col-lg-12.mb-4.mb-md-0
              p Aplica reglas definidas por una autoridad central mediante etiquetas y niveles de seguridad. Los usuarios no pueden modificar libremente los permisos asignados. Se utiliza cuando la clasificación de la información y el control estricto son prioritarios. Reduce errores derivados de decisiones individuales, aunque requiere una administración rigurosa. Un ejemplo es #[em AppArmor], disponible en entornos Ubuntu, que restringe las acciones que pueden ejecutar los procesos y las aplicaciones.
          
          .row(titulo="<i> RBAC (Role-Based Access Control</i> – Control de acceso basado en roles)")
            .col-lg-12.mb-4.mb-md-0
              p Asigna permisos a roles definidos según las funciones de la organización y posteriormente vincula usuarios con dichos roles. Facilita la administración de accesos y la separación de funciones, ya que los permisos no se asignan individualmente. Requiere revisiones periódicas para evitar acumulación de privilegios y una cantidad excesiva de roles (#[em role explosion]). Ejemplo: en un sistema académico, un instructor registra evaluaciones, un coordinador consulta reportes y un administrador gestiona configuraciones.
      .col-lg-4.col-7.col-md-6
        img(src="@/assets/curso/temas/t5/img01.png")

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t2/escudo.svg")
          h3.bg02.py-2.w-card-text.text-white Comparación y selección del modelo

    .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-4
      h5 Tabla 8.
      span Comparación de modelos de control de acceso

    .tabla-a.color-acento-contenido(data-aos="zoom-in-left").mb-4
      table
        thead
          tr
            th.izqtext.bg5 Modelo
            th.izqtext.bg5 Base de decisión
            th.izqtext.bg5 Ventaja principal
            th.izqtext.bg5 Riesgo o limitación
            th.izqtext.bg5 Ejemplo
        tbody
          tr
            td #[b #[em DAC]]
            td Decisión del propietario.
            td Flexibilidad.
            td Permisos inconsistentes.
            td Carpeta compartida.

          tr
            td #[b #[em MAC]]
            td Etiquetas y política central.
            td Control estricto.
            td Mayor complejidad.
            td Restricción de procesos.

          tr
            td #[b #[em RBAC]]
            td Función organizacional.
            td Administración escalable.
            td Acumulación de roles.
            td Sistema académico.

    p Los modelos pueden combinarse. Un sistema puede utilizar #[em RBAC] para funciones, #[em DAC] para documentos y #[em MAC] para restringir procesos. La selección depende del recurso, el riesgo, el tamaño y la madurez.
    p #[em NIST SP] 800-53 incluye familias de controles relacionadas con acceso, identificación, autenticación y auditoría, lo cual evidencia que el modelo debe integrarse con políticas y mecanismos de verificación.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t2/escudo.svg")
          h3.bg02.py-2.w-card-text.text-white Mecanismos de seguridad

    .bloque-texto-g.bg08.p-3.p-sm-4.p-md-5.mb-3(data-aos='fade-right')
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/img02.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los mecanismos de seguridad constituyen el conjunto de técnicas, tecnologías y procedimientos utilizados para proteger la información, verificar identidades y controlar el acceso a los recursos digitales. Su estudio comprende fundamentos de criptografía, algoritmos simétricos y asimétricos, firmas y certificados digitales, gestión de llaves, #[em tokens], tarjetas inteligentes y biometría. El análisis de estos mecanismos permite comprender sus características, ventajas, limitaciones y campos de aplicación, con el fin de seleccionar soluciones acordes con el nivel de riesgo, los requerimientos técnicos y las necesidades de protección de cada organización.
          br
        
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t2/escudo.svg")
          h3.bg02.py-2.w-card-text.text-white Fundamentos de criptografía
    
    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-3.mb-3.col-md-5.col-7
        img(src="@/assets/curso/temas/t5/img03.png")
      .col-lg-9
        
        .row.justify-content-center.align-items-center.mb-3.bg09(data-aos="zoom-in-left")
          .col-lg-6.d-none.d-lg-block
            img.izq(src='@/assets/curso/temas/t5/img04.svg', alt='')
          .col-lg-6
            .py-2
            p La criptografía utiliza técnicas matemáticas para proteger información. Puede aportar confidencialidad, integridad, autenticidad y no repudio. No debe entenderse como sinónimo de ocultar contraseñas; forma parte de protocolos, firmas, certificados, almacenamiento, comunicaciones y autenticación. 
        p Un sistema criptográfico incluye algoritmos, llaves, parámetros, procedimientos y responsabilidades. Un algoritmo fuerte puede fallar cuando las llaves se almacenan sin protección, se reutilizan indebidamente o no se renuevan.

    .fondo1(data-aos="zoom-in-left")
      .row.justify-content-center.align-items-center
        .col-lg-7.col-11
          .row.justify-content-start.mb-4(data-aos="zoom-in-left")
            .col-sm-12.col-lg-12
              .d-flex.align-items-center
                img.w-card-icon(src="@/assets/curso/temas/t2/escudo.svg")
                h3.bg02.py-2.w-card-text.text-white Criptografía clásica y moderna
          p La criptografía clásica empleaba sustitución y transposición de caracteres. Su estudio permite comprender principios históricos, pero no proporciona seguridad suficiente para sistemas actuales.
          p La criptografía moderna se apoya en matemáticas, computación y análisis formal. Sus algoritmos se diseñan para resistir ataques conocidos bajo parámetros definidos. La seguridad no debería depender del secreto del algoritmo, sino de la protección de la llave.
          P   La evolución también incluye la preparación frente a la computación cuántica. #[em NIST] publicó en 2024 los primeros estándares de criptografía poscuántica: #[em FIPS] 203 para encapsulación de llaves y #[em FIPS] 204 y 205 para firmas digitales. Esto no significa que todas las organizaciones deban sustituir inmediatamente sus mecanismos, pero sí que la selección debe considerar vida útil de la información, compatibilidad y planes de transición.

        .col-lg-4.col-8.col-md-6
          img(src="@/assets/curso/temas/t5/img05.png") 


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t2/escudo.svg")
          h3.bg02.py-2.w-card-text.text-white Firma y certificados digitales

    .row.justify-content-center.align-items-center.mb-4(data-aos='fade-right')
      .col-lg-8.mb-3
        p La gestión de llaves comprende generación, almacenamiento, distribución, uso, renovación, respaldo, revocación y destrucción. Una llave privada no debería enviarse por correo ni almacenarse en texto claro.
        p Las organizaciones pueden utilizar módulos de seguridad, almacenes de llaves o servicios especializados. La selección depende de criticidad, volumen y regulación. Un sistema de alta sensibilidad puede requerir hardware dedicado; una aplicación pequeña podría utilizar un almacén seguro del sistema operativo.
        p La pérdida de una llave puede impedir recuperar información. Su compromiso puede permitir descifrado o suplantación. Por ello, la continuidad y la seguridad deben equilibrarse.
      .col-lg-4.col-10.col-md-7
        img(src="@/assets/curso/temas/t5/img06.png")

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t2/escudo.svg")
          h3.bg02.py-2.w-card-text.text-white Distribución y gestión de llaves

    .row.justify-content-center.align-items-center.mb-3(data-aos='fade-right')
      .col-lg-3.mb-3.col-7.col-md-5
        img(src="@/assets/curso/temas/t5/img07.png")
      .col-lg-9
        p Un #[em token] es un elemento físico o lógico utilizado para autenticar. Puede generar códigos, almacenar llaves o aprobar solicitudes. Los #[em tokens] reducen la dependencia de contraseñas, pero requieren gestión de pérdida, reposición y revocación.
        .row.justify-content-center.align-items-center.mb-3.bg04(data-aos="zoom-in-left")
          .col-lg-6.d-none.d-lg-block
            img.izq(src='@/assets/curso/temas/t5/img08.svg', alt='')
          .col-lg-6
            .py-2
            p Las tarjetas inteligentes incorporan un circuito que almacena credenciales y ejecuta operaciones. Se utilizan para autenticación y firma. Su selección implica lectores, certificados, emisión y soporte.
            p.mb-3 La biometría utiliza características físicas o conductuales. Huellas, rostro o voz pueden facilitar la autenticación, pero no son secretos reemplazables. Un dato biométrico comprometido no puede modificarse como una contraseña. Debe almacenarse mediante plantillas protegidas y combinarse con mecanismos apropiados.

    p Las directrices de identidad digital de #[em NIST] establecen requisitos para autenticación y gestión de autenticadores. La versión 4 fue publicada como definitiva en julio de 2025, incorporando consideraciones de seguridad, privacidad, usabilidad y equidad.
    p La selección del mecanismo debe considerar nivel de riesgo, experiencia del usuario, accesibilidad, recuperación y privacidad. Una autenticación muy compleja puede llevar a prácticas inseguras, mientras una demasiado simple puede ser insuficiente.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-4
      h5 Tabla 9.
      span Comparación de mecanismos de autenticación

    .tabla-a.color-acento-contenido(data-aos="zoom-in-left").mb-4
      table
        thead
          tr
            th.izqtext.bg5 Mecanismo
            th.izqtext.bg5 Factor de autenticación
            th.izqtext.bg5 Descripción
            th.izqtext.bg5 Ejemplo de uso
            th.izqtext.bg5 Consideración de seguridad
        tbody
          tr
            td #[b Contraseña]
            td Conocimiento: algo que la persona sabe.
            td Cadena secreta utilizada para verificar la identidad del usuario.
            td Ingreso a una plataforma mediante usuario y contraseña.
            td Puede ser vulnerable a robo, reutilización, fuerza bruta o ingeniería social.

          tr
            td #[b #[em Token]]
            td Posesión: algo que la persona tiene.
            td Dispositivo físico o aplicación que genera códigos temporales o autoriza accesos.
            td Código temporal generado por una aplicación de autenticación.
            td Puede perderse o ser sustraído; debe contar con mecanismos de revocación y recuperación.

          tr
            td #[b Tarjeta inteligente]
            td Posesión: algo que la persona tiene.
            td Dispositivo físico con un circuito integrado que almacena certificados, claves o credenciales.
            td Tarjeta institucional utilizada para acceder a instalaciones o sistemas.
            td Requiere lector, protección mediante PIN y gestión segura de emisión, renovación y revocación.

          tr
            td #[b Certificado digital]
            td Posesión: algo que la persona o el sistema tiene.
            td Credencial electrónica que vincula una identidad con una llave pública.
            td Autenticación en un sistema o firma digital de documentos.
            td La llave privada debe protegerse para evitar suplantaciones o firmas no autorizadas.

          tr
            td #[b Biometría]
            td Inherencia: algo que la persona es.
            td Mecanismo basado en características físicas o conductuales únicas del usuario.
            td Reconocimiento facial, huella dactilar, iris o voz.
            td Los datos biométricos son sensibles y no pueden reemplazarse fácilmente si son comprometidos.





























</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
