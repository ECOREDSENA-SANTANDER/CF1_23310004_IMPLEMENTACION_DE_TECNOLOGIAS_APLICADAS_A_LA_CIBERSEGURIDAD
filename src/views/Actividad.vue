<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Selección de tecnologías para la protección y seguridad digital',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la comprensión de los activos de información, la infraestructura de <i>hardware</i> y <i>software</i>, la seguridad perimetral, la protección de sistemas operativos, el modelo de seguridad y privacidad, las herramientas de análisis, los modelos de control de acceso y los mecanismos criptográficos.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué se entiende por activo de información dentro de una organización?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un elemento que genera, procesa, almacena, transmite o respalda información valiosa.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Únicamente un computador conectado a internet.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo los documentos impresos almacenados en una oficina.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Una herramienta destinada exclusivamente al mantenimiento físico de equipos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con activo de información y de su alcance organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el concepto y las características de los activos de información.',
        },

        {
          id: 2,
          texto:
            '¿Cuál de los siguientes elementos corresponde a un activo primario?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un sistema de climatización del centro de datos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un <i>switch</i> utilizado para conectar equipos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una base de datos con registros académicos y datos personales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Una fuente de alimentación ininterrumpida.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los activos primarios y su relación directa con los procesos esenciales de la organización.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la clasificación de activos primarios y activos de soporte.',
        },

        {
          id: 3,
          texto:
            '¿Qué información debe incluir un inventario adecuado de activos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo el precio de compra y la marca del equipo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Nombre, propietario, custodio, ubicación, clasificación, dependencias y requisitos de protección.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Únicamente el nombre del usuario que utiliza el activo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo la fecha en que se instaló el recurso tecnológico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los datos necesarios para identificar, inventariar y clasificar activos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la identificación, el inventario y la clasificación de activos.',
        },

        {
          id: 4,
          texto:
            '¿Qué dimensiones se emplean principalmente para valorar un activo de información?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Velocidad, tamaño y color.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Marca, antigüedad y ubicación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Precio, fabricante y garantía.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Confidencialidad, integridad y disponibilidad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con las dimensiones fundamentales utilizadas para valorar los activos de información.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la valoración de activos y los principios de confidencialidad, integridad y disponibilidad.',
        },

        {
          id: 5,
          texto: '¿Cuál es el propósito principal del modelado de amenazas?',
          imagen: '@/assets/actividad/imagen05.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar automáticamente todas las vulnerabilidades de una organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Identificar escenarios que pueden afectar un activo, sus rutas de ataque, consecuencias y controles.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Reemplazar el inventario de <i>hardware</i> y <i>software</i>.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Asignar el mismo nivel de protección a todos los activos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el modelado de amenazas como apoyo para priorizar decisiones de seguridad.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el modelado de amenazas aplicado a los activos.',
        },

        {
          id: 6,
          texto:
            '¿Qué elementos conforman la infraestructura tecnológica de una organización?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Componentes físicos y lógicos como servidores, redes, sistemas operativos, aplicaciones y bases de datos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo los documentos administrativos impresos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Únicamente los servicios de correo electrónico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Exclusivamente los dispositivos móviles de los usuarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los componentes de <i>hardware</i> y <i>software</i> que integran una infraestructura tecnológica.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la infraestructura de <i>hardware</i> y <i>software</i>.',
        },

        {
          id: 7,
          texto: '¿Qué beneficio aporta la segmentación de redes?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permitir que todos los dispositivos se comuniquen sin restricciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar la necesidad de controlar el tráfico entre áreas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Separar redes según funciones y riesgos, limitando comunicaciones no autorizadas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Concentrar todos los servicios en una única red plana.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la segmentación como medida para limitar la exposición y el movimiento lateral.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la interconexión, la segmentación y las dependencias tecnológicas.',
        },

        {
          id: 8,
          texto:
            '¿Qué debe analizarse al seleccionar una solución con licenciamiento?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo el diseño gráfico de la consola de administración.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Únicamente el precio inicial del producto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El nombre comercial del fabricante sin revisar sus condiciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Las funciones disponibles, las actualizaciones, el soporte, la vigencia y el costo durante el ciclo de vida.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los factores de licenciamiento, soporte y ciclo de vida que influyen en la selección tecnológica.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con licenciamiento, soporte, actualizaciones y obsolescencia.',
        },

        {
          id: 9,
          texto:
            '¿Qué significa aplicar el principio de denegación por defecto?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permitir todo el tráfico mientras no se detecte un incidente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Bloquear una comunicación cuando no existe una regla explícita que la autorice.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar todas las reglas del <i>firewall</i>.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Confiar automáticamente en cualquier dispositivo de la red interna.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el principio de denegación por defecto en la seguridad perimetral.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los principios básicos de seguridad perimetral y la definición de reglas de acceso.',
        },

        {
          id: 10,
          texto: '¿Qué caracteriza a un <i>firewall</i> con estado?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Evalúa los paquetes sin considerar las conexiones anteriores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo controla el acceso físico al centro de datos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Mantiene información de las conexiones y reconoce si un paquete pertenece a una sesión autorizada.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Funciona únicamente como sistema de copias de seguridad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la función de seguimiento de conexiones de un <i>firewall</i> con estado.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con <i>firewalls</i> y arquitecturas de filtrado.',
        },
        {
          id: 11,
          texto:
            '¿Qué elementos conforman la infraestructura tecnológica de una organización?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Componentes físicos y lógicos como servidores, redes, sistemas operativos, aplicaciones y bases de datos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo los documentos administrativos impresos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Únicamente los servicios de correo electrónico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Exclusivamente los dispositivos móviles de los usuarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los componentes de <i>hardware</i> y <i>software</i> que integran una infraestructura tecnológica.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la infraestructura de <i>hardware</i> y <i>software</i>.',
        },

        {
          id: 12,
          texto: '¿Qué beneficio aporta la segmentación de redes?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permitir que todos los dispositivos se comuniquen sin restricciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar la necesidad de controlar el tráfico entre áreas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Separar redes según funciones y riesgos, limitando comunicaciones no autorizadas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Concentrar todos los servicios en una única red plana.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la segmentación como medida para limitar la exposición y el movimiento lateral.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la interconexión, la segmentación y las dependencias tecnológicas.',
        },

        {
          id: 13,
          texto:
            '¿Qué debe analizarse al seleccionar una solución con licenciamiento?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo el diseño gráfico de la consola de administración.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Únicamente el precio inicial del producto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El nombre comercial del fabricante sin revisar sus condiciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Las funciones disponibles, las actualizaciones, el soporte, la vigencia y el costo durante el ciclo de vida.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los factores de licenciamiento, soporte y ciclo de vida que influyen en la selección tecnológica.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con licenciamiento, soporte, actualizaciones y obsolescencia.',
        },

        {
          id: 14,
          texto:
            '¿Qué significa aplicar el principio de denegación por defecto?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permitir todo el tráfico mientras no se detecte un incidente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Bloquear una comunicación cuando no existe una regla explícita que la autorice.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar todas las reglas del <i>firewall</i>.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Confiar automáticamente en cualquier dispositivo de la red interna.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el principio de denegación por defecto en la seguridad perimetral.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los principios básicos de seguridad perimetral y la definición de reglas de acceso.',
        },

        {
          id: 15,
          texto: '¿Qué caracteriza a un <i>firewall</i> con estado?',
          imagen: '@/assets/actividad/imagen05.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Evalúa los paquetes sin considerar las conexiones anteriores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo controla el acceso físico al centro de datos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Mantiene información de las conexiones y reconoce si un paquete pertenece a una sesión autorizada.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Funciona únicamente como sistema de copias de seguridad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la función de seguimiento de conexiones de un <i>firewall</i> con estado.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con <i>firewalls</i> y arquitecturas de filtrado.',
        },

        {
          id: 16,
          texto:
            '¿Qué función cumple un <i>proxy</i> dentro de una arquitectura de seguridad?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Actuar como intermediario entre el cliente y el servidor, permitiendo controlar y registrar las comunicaciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reemplazar todos los mecanismos de autenticación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar la necesidad de utilizar <i>firewall</i>.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Garantizar que ningún usuario pueda acceder a internet.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el funcionamiento del <i>proxy</i> como intermediario de las comunicaciones.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con <i>proxy</i>, filtrado y control de las comunicaciones.',
        },

        {
          id: 17,
          texto: '¿Cuál es una característica de una VPN?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permite establecer comunicaciones protegidas mediante canales cifrados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Desactiva automáticamente todos los controles de seguridad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Permite acceder a cualquier recurso sin autenticación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituye completamente la necesidad de segmentar la red.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con las redes privadas virtuales y la protección de las comunicaciones.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con VPN y mecanismos de protección de las comunicaciones.',
        },

        {
          id: 18,
          texto: '¿Cuál es la función principal de un sistema IDS?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Detectar actividades sospechosas o posibles intrusiones y generar alertas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar automáticamente todos los archivos del sistema.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reemplazar el sistema operativo de los equipos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Impedir cualquier comunicación entre dispositivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la detección de intrusiones y la generación de alertas de seguridad.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con IDS, detección de eventos y monitoreo de seguridad.',
        },

        {
          id: 19,
          texto: '¿Cuál es la diferencia principal entre IDS e IPS?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El IDS detecta y alerta, mientras el IPS puede detectar y bloquear actividades maliciosas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El IDS solo funciona en equipos móviles y el IPS en servidores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ambos sistemas tienen exactamente la misma función.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El IPS únicamente registra eventos sin intervenir.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con las funciones de IDS e IPS dentro de una arquitectura de seguridad.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con IDS, IPS, detección y prevención de intrusiones.',
        },

        {
          id: 20,
          texto:
            '¿Por qué es importante establecer reglas de seguridad en el perímetro de red?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque permiten controlar el tráfico autorizado y reducir la exposición ante amenazas externas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Porque eliminan completamente la posibilidad de sufrir incidentes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque permiten que cualquier dispositivo acceda libremente a la red.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque sustituyen todos los controles de seguridad internos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el control del tráfico y la protección de la seguridad perimetral.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con seguridad perimetral, control de tráfico y protección frente a amenazas externas.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
