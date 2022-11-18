export default {
  global: {
    componenteFormativo:
      '<span1><em>Things that were done...</em></span1><br><span>Cosas que fueron realizadas...</span>',
    descripcionCurso:
      'Este componente va a tratar sobre el estilo indirecto, el vocabulario y las frases del trabajo, las rutinas laborales y sociales que se solían tener. Habrá la oportunidad de aclarar dudas en cuanto a estructuras presentes, pasadas y futuras.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: '<em>Reported speech</em> (Reporte de frases)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '<em>Job</em> (Empleo)',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              '<em>Affirmative, negative, and interrogative structures</em> (Estructuras afirmativas, negativas e interrogativas)',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<em>Verb tenses</em> (Tiempos verbales)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '<em>Reported speech</em> (Discurso indirecto)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          '<em>Let&apos;s talk about the work and social routines I used to have</em> (Hablemos de las rutinas laborales y sociales que solía tener)',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
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
  referencias: [
    {
      referencia:
        'Bellugi, U. (1965). <em>The Development of Interrogative Structures in Children&apos;s Speech</em>. ERIC. ',
      link: 'https://eric.ed.gov/?id=ED025333',
    },
    {
      referencia:
        'Cambridge University Press. (2022). <em>Reported speech: indirect speech</em>. Cambridge Dictionary. ',
      link:
        'https://dictionary.cambridge.org/us/grammar/british-grammar/reported-speech-indirect-speech',
    },
    {
      referencia:
        'Collins, L. (2007). L1 differences and L2 similarities: Teaching verb tenses in English. <em>ELT journal, 61(4), p. 295-303</em>. ',
      link: 'https://doi.org/10.1093/elt/ccm048',
    },
    {
      referencia:
        'Coulmas, F. (1986). Reported speech: Some general issues. <em>Direct and indirect speech, 31, p. 1-28</em>. ',
      link:
        'https://www.degruyter.com/document/doi/10.1515/9783110871968.1/html',
    },
    {
      referencia:
        'Maxwell, N. (2010). English Language and Low-Skilled Jobs: The Structure of Employment. <em>Industrial Relations: A Journal of Economy and Society, 49(3), p. 457-465</em>. ',
      link:
        'https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1468-232X.2010.00609.x',
    },
    {
      referencia:
        'Raynier, L. (2017). <em>How to Get a Job With No Experience [Video]</em>. YouTube. ',
      link: 'https://www.youtube.com/watch?v=OF8nx8Pt0tI',
    },
  ],
  glosario: [
    {
      termino: '<em>Field</em>',
      significado:
        'relacionado con el campo de acción en el que alguien se desempeña, relacionado con un perfil laboral.',
    },
    {
      termino: '<em>Jobs</em> / Empleos',
      significado:
        'vocabulario relacionado con el trabajo, frases usadas y palabras conocidas.',
    },
    {
      termino: '<em>Reported speech</em> / Discurso indirecto',
      significado:
        'consiste en el reporte que se hace de una frase original dicha por alguien, puede ser en forma directa o indirecta. En Inglés, se denomina reported speech.',
    },
    {
      termino: '<em>Speech</em>',
      significado:
        'relacionado con las palabras que alguien ofrece para un público en general.',
    },
    {
      termino: '<em>Verb tenses</em> / Tiempos verbales',
      significado:
        'los tiempos verbales en la escritura son conjuntos de formas verbales que se utilizan para transmitir el momento en que ocurre una acción: pasado, presente o futuro.',
    },
  ],
  complementario: [
    {
      tema: '<em>Reported speech</em> (Discurso directo)',
      referencia:
        'Coulmas, F. (1986). Reported speech: Some general issues. <em>Direct and indirect speech, 31, p. 1-28</em>.',
      tipo: 'Artículo web',
      link:
        'https://www.degruyter.com/document/doi/10.1515/9783110871968/pdf#page=11',
    },
    {
      tema: '<em>Job</em> (Empleo)',
      referencia:
        'Maxwell, N. (2010). English Language and Low-Skilled Jobs: The Structure of Employment. <em>Industrial Relations: A Journal of Economy and Society, 49(3), p. 457-465</em>.',
      tipo: 'Libro',
      link:
        'https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1468-232X.2010.00609.x',
    },
    {
      tema:
        '<em>Affirmative, negative and interrogative structures</em> (Estructuras afirmativas, negativas e interrogativas)',
      referencia:
        'Bellugi, U. (1965). <em>The Development of Interrogative Structures in Children&apos;s Speech</em>. ERIC.',
      tipo: 'Artículo web',
      link: 'https://eric.ed.gov/?id=ED025333',
    },
    {
      tema: '<em>Verb tenses</em> (Tiempos verbales)',
      referencia:
        'Collins, L. (2007). L1 differences and L2 similarities: Teaching verb tenses in English. <em>ELT journal, 61(4), p. 295-303</em>.',
      tipo: 'Libro',
      link:
        'https://academic.oup.com/eltj/article-abstract/61/4/295/371001?login=false',
    },
    {
      tema:
        '<em>Let&apos;s talk about the work and social routines I used to have</em> (Hablemos de las rutinas laborales y sociales que solía tener)',
      referencia:
        'Englishing. (2020). <em>ESL - Used to (Difference between Past Simple)</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hQZcRq22IFw',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable equipo de desarrollo curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edith Grande',
        cargo: 'Experta temática',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Oscar Absalón Guevara',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - CIES - Regional Santander',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Fabian Zarate',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo front-end',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
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
