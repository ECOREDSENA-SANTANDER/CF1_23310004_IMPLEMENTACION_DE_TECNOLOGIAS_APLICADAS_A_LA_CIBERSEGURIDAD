export default {
  global: {
    Name: 'Selección de tecnologías para la protección y seguridad digital',
    Description:
      'El componente Selección de tecnologías para la protección y seguridad digital desarrolla capacidades para identificar, analizar y seleccionar recursos tecnológicos orientados a la protección de los activos de información. Promueve la toma de decisiones técnicas fundamentadas en las características de la infraestructura, la seguridad perimetral, los controles de acceso, los mecanismos criptográficos, la normativa y los estándares aplicables.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Activos de información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Infraestructura de <i>hardware</i> y <i>software</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Seguridad perimetral',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Seguridad en sistemas operativos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Modelos de control de acceso',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Activo de información',
      significado:
        'Elemento que almacena, procesa, transmite o soporta información valiosa para una organización, como bases de datos, aplicaciones, equipos, servicios, personas o conocimiento.',
    },
    {
      termino: '<i>ACL</i>',
      significado:
        'Lista de control de acceso que establece reglas para permitir o denegar acciones sobre redes, archivos, aplicaciones u otros recursos.',
    },
    {
      termino: 'Algoritmo asimétrico',
      significado:
        'Mecanismo criptográfico que utiliza una llave pública y una llave privada para realizar operaciones como cifrado, intercambio de llaves o firma digital.',
    },
    {
      termino: 'Algoritmo simétrico',
      significado:
        'Mecanismo criptográfico que utiliza una misma llave, o llaves estrechamente relacionadas, para cifrar y descifrar información.',
    },
    {
      termino: 'Autenticación',
      significado:
        'Proceso mediante el cual se comprueba que una persona, dispositivo o servicio corresponde con la identidad que presenta.',
    },
    {
      termino: 'Biometría',
      significado:
        'Mecanismo de reconocimiento basado en características físicas o conductuales, como huella, rostro, iris o voz.',
    },
    {
      termino: 'Certificado digital',
      significado:
        'Documento electrónico firmado por una autoridad que vincula una identidad con una llave pública.',
    },
    {
      termino: 'Control de acceso',
      significado:
        'Conjunto de reglas y mecanismos que determina quién puede acceder a un recurso, qué acciones puede realizar y bajo qué condiciones.',
    },
    {
      termino: 'Defensa en profundidad',
      significado:
        'Estrategia que combina varias capas de protección para evitar que el fallo de un control deje completamente expuesto un activo.',
    },
    {
      termino: '<i>Firewall</i>',
      significado:
        'Sistema de <i>hardware</i> o <i>software</i> que controla el tráfico entre redes, dispositivos o zonas mediante políticas y reglas.',
    },
    {
      termino: '<i>IDS</i>',
      significado:
        'Sistema de detección de intrusiones que analiza tráfico o eventos y genera alertas frente a comportamientos sospechosos.',
    },
    {
      termino: '<i>IPS</i>',
      significado:
        'Sistema de prevención de intrusiones que analiza actividad y puede bloquear comunicaciones identificadas como maliciosas.',
    },
    {
      termino: 'Línea base de seguridad',
      significado:
        'Conjunto aprobado de parámetros que representa la configuración segura esperada para un sistema o producto.',
    },
    {
      termino: 'Modelado de amenazas',
      significado:
        'Proceso estructurado para identificar activos, amenazas, vulnerabilidades, rutas de ataque, consecuencias y controles.',
    },
    {
      termino: 'Seguridad perimetral',
      significado:
        'Conjunto de controles destinados a proteger y supervisar las comunicaciones entre zonas con diferentes niveles de confianza.',
    },
    {
      termino: '<i>Token</i>',
      significado:
        'Dispositivo o elemento lógico que almacena credenciales, genera códigos o participa en la autenticación.',
    },
    {
      termino: '<i>VPN</i>',
      significado:
        'Red privada virtual que crea un canal protegido para comunicar usuarios, sedes o servicios a través de una red no confiable.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cisco Systems. (2024). Cisco Secure Firewall ASA firewall configuration guides. Cisco.',
      link: '',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. (2020). Documento CONPES 3995: Política nacional de confianza y seguridad digital. Gobierno de Colombia.',
      link: '',
    },
    {
      referencia:
        'European Union Agency for Cybersecurity. (2024). ENISA threat landscape 2024. Publications Office of the European Union.',
      link: '',
    },
    {
      referencia:
        'Fortinet. (2026). FortiGate/FortiOS 8.0 documentation. Fortinet Document Library.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (2022a). ISO/IEC 27001:2022. Information security, cybersecurity and privacy protection—Information security management systems—Requirements. ISO.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (2022b). ISO/IEC 27002:2022. Information security, cybersecurity and privacy protection—Information security controls. ISO.',
      link: '',
    },
    {
      referencia:
        'Microsoft. (2025). Security baselines guide. Microsoft Learn.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones. (2025). Resolución 02277 de 2025, por la cual se actualiza el Modelo de Seguridad y Privacidad de la Información. MinTIC.',
      link: '',
    },
    {
      referencia:
        'National Institute of Standards and Technology. (2020). Security and privacy controls for information systems and organizations (NIST Special Publication 800-53, Revision 5). U.S. Department of Commerce.',
      link: '',
    },
    {
      referencia:
        'National Institute of Standards and Technology. (2026). National Checklist Program for IT products: Guidelines for checklist users and developers (NIST Special Publication 800-70, Revision 5). U.S. Department of Commerce.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Andrés Bonza Reyes',
          cargo: 'Experto temático TIC',
          centro: 'Centro Agroturístico – Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Liliana Cristancho Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
