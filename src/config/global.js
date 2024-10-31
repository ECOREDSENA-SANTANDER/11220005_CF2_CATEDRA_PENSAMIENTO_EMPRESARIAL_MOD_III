export default {
  global: {
    componenteFormativo:
      'Evaluación y control en la gestión del riesgo: toma de decisiones gerenciales.',
    descripcionCurso:
      'La evaluación y control en la gestión del riesgo aborda cómo la gerencia del conocimiento y de las finanzas influyen en la toma de decisiones empresariales, destacando la importancia de las proyecciones financieras, el control continuo de riesgos, y el valor estratégico del conocimiento en la mejora de procesos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        titulo: 'Evaluación de la gestión de riesgo',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'La gerencia de la información y el conocimiento en la toma de decisiones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'La gerencia del conocimiento',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Gerencia del conocimiento en las pymes',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Finalidad de la información',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Creación del conocimiento organizacional',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'El control en la gestión del riesgo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'La gerencia de las finanzas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Importancia de las proyecciones financieras',
            hash: 't_4_1',
          },
        ],
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF2_11220005_DU.pdf',
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
  complementario: [
    {
      tema:
        '1. Evaluación de la gestión de riesgo <br><br>3. El control en la gestión del riesgo ',
      referencia:
        'ICONTEC. (2018). NTC-ISO 31000 – Gestión del riesgo. Directrices.',
      tipo: 'PDF – Norma. ',
      link:
        'https://e-collection-icontec-org.bdigital.sena.edu.co/normavw.aspx?ID=74790 ',
    },
    {
      tema: '1. Evaluación de la gestión de riesgo',
      referencia:
        'Pirani. (14 de mayo de 2021). Matriz de riesgos en Excel. [Video]. YouTube.',
      tipo: 'Video.',
      link: 'https://www.youtube.com/watch?v=OUtmT8DPT3Q',
    },
    {
      tema:
        '2. La gerencia de la información y el  conocimiento en la toma de decisiones',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (24 de diciembre de 2022). Planificación estratégica y toma de decisiones organizacionales. [Video]. YouTube. ',
      tipo: 'Video.',
      link: 'https://www.youtube.com/watch?v=RwgcCyvZXNs',
    },
    {
      tema: '4. La gerencia de las finanzas ',
      referencia:
        'Velásquez Restrepo, J. S. (2020). Análisis financiero. Finanzas para no financieros.',
      tipo: 'Página web.',
      link:
        'https://www.finanzasparanofinancieros.com.co/index.php/basicas/analisis-financiero-formula-de-josavere ',
    },
  ],
  glosario: [
    {
      termino: 'Activo de información',
      significado:
        'datos o recursos críticos para la organización que necesitan protección. Los activos pueden estar en formato digital, físico o en conocimiento',
    },
    {
      termino: 'Capital inmovilizado',
      significado:
        'recursos de la empresa que no son fácilmente convertibles en efectivo, como activos fijos, y que no pueden ser utilizados para cubrir obligaciones inmediatas.',
    },
    {
      termino: 'Capital intelectual',
      significado:
        'conjunto de conocimientos, habilidades y experiencias de los empleados que, cuando se gestionan correctamente, generan valor para la organización. ',
    },
    {
      termino: 'Contenedor de activos',
      significado:
        'repositorio o medio en el cual se almacenan los activos de información, que puede ser técnico (servidores), físico (documentos impresos) o humano (conocimiento en empleados). ',
    },
    {
      termino: 'Impacto',
      significado:
        'gravedad potencial de un riesgo si se materializa, clasificado en categorías que van desde catastrófico hasta inocuo. ',
    },
    {
      termino: 'Índice de riesgo',
      significado:
        'valor numérico obtenido al multiplicar el impacto de un riesgo por su probabilidad, que permite jerarquizar los riesgos según su importancia y urgencia de tratamiento.',
    },
    {
      termino: 'Mitigación',
      significado:
        'estrategia de gestión de riesgos que busca reducir la probabilidad de que un riesgo ocurra o el impacto de sus consecuencias si llegara a materializarse. ',
    },
    {
      termino: 'Pymes',
      significado: 'Pequeñas y medianas empresas. ',
    },
    {
      termino: 'Rentabilidad',
      significado:
        'capacidad de la empresa para generar ingresos en proporción a los recursos invertidos. Es un indicador clave de la eficiencia de las inversiones y del uso de activos. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Bernal, J. J. (6 de enero de 2016). Gestión de Riesgos: ¿Cómo hacer una evaluación de riesgos? ¿Cómo buscar soluciones?',
      link:
        'https://www.pdcahome.com/8293/gestion-de-riesgos-por-que-debemos-gestionar-los-riesgos/',
    },
    {
      referencia:
        'Coronado, A. M., y Prieto, L. P. (2016). Gestión del Riesgo. INS. ',
      link:
        'https://www.ins.gov.co/Direcciones/RedesSaludPublica/GestiondeCalidadLaboratorios/Lineamientos%20Calidad/lineamiento%20de%20gesti%C3%B3n%20del%20riesgo.pdf',
    },
    {
      referencia:
        'Empresa COPEC S.A. (diciembre de 2017). Política de gestión de riesgos.',
      link:
        'https://www.empresascopec.cl/wp-content/uploads/2020/03/Politica-de-Gestion-de-Riesgos.pdf',
    },
    {
      referencia: 'EXÁCATO. (28 de enero de 2015). La gestión del riesgo.',
      link: 'https://exacato.wordpress.com/2015/01/28/la-gestion-del-riesgo/',
    },
    {
      referencia:
        'FREMM. (2007). Manual Prevención de Riesgos Laborales, para Autónomos del Sector Metal de la Región de Murcia. ',
      link:
        'http://www.fremm.es/portal/pagina/263/Prevencion_de_Riesgos_Laborales_para_Autonomos_del_Sector_del_Metal.html',
    },
    {
      referencia: 'Galarce, Y. (5 de agosto de 2009). Gestión de Riesgos.',
      link:
        'https://www.monografias.com/trabajos73/gestion-riesgos/gestion-riesgos5',
    },
    {
      referencia:
        'ICONTEC. (2018). NTC-ISO 31000 – Gestión del riesgo. Directrices.',
      link:
        'https://e-collection-icontec-org.bdigital.sena.edu.co/normavw.aspx?ID=74790',
    },
    {
      referencia:
        'Mendoza, M. A. (13 de diciembre de 2022). 8 pasos para la evaluación de riesgos de ciberseguridad de una empresa (parte I).',
      link:
        'https://www.welivesecurity.com/la-es/2022/12/13/8-pasos-evaluacion-de-riesgos-1/',
    },
    {
      referencia:
        'Mendoza, M. A. (13 de diciembre de 2022). 8 pasos para la evaluación de riesgos de ciberseguridad de una empresa (parte II).',
      link:
        'https://www.welivesecurity.com/la-es/2022/12/13/8-pasos-evaluacion-de-riesgos-2/',
    },
    {
      referencia:
        'Pinar Quezada, A. (s.f.). Conceptos introductorios de gestión de riesgos. Universidad Técnica Federico Santa María.',
      link:
        'https://www.inf.utfsm.cl/~lhevia/asignaturas/proy_ti/topicos/Memorias/LECTURA_Riesgos-Pinar.doc',
    },
    {
      referencia:
        'Presidencia de la República de Colombia - Oficina de Planeación. (2013). Gestión de riesgos. ',
      link:
        'http://wsp.presidencia.gov.co/dapre/sigepre/Documents/Novedades/DAPRE-Gestion-riesgos-SIGEPRE2013.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jaime Cuellar',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Santiago Lozada Garcés',
          cargo: 'Líder línea de producción',
          centro:
            'Centro Industrial de Mantenimiento Integral - Regional Santander',
        },
        {
          nombre: 'Rosa Elvia Quintero Guasca',
          cargo: 'Asesora pedagógica',
          centro:
            'Centro Industrial de Mantenimiento Integral - Regional Santander',
        },
        {
          nombre: 'Luis Orlando Beltrán Vargas',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial de Mantenimiento Integral - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
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
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Lizeth Lozada Díaz',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
