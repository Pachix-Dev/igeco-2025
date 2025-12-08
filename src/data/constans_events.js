const events = [
  /*{
    title: "ITM Academy",
    description: "La plataforma de capacitación empresarial y profesional impulsada por Industrial Transformation MEXICO. <br />INSCRIPCIONES ABIERTAS | Modalidad en línea ",
    description_en: "The business and professional training platform powered by Industrial Transformation MEXICO. <br />ENROLLMENTS OPEN | Online mode",
    date: "",
    location: "",
    image: "/img/portadaparavideodelhome1.webp",
    link: "https://itmacademy.com.mx/app/home/_"
  },
  {
    title: "RE+ PENÍNSULA DE YUCATÁN",
    description: "El primer congreso especializado para potenciar las energías renovables en la región sur de México.",
    description_en: "The first specialized congress to boost renewable energies in southern Mexico.",
    date: "20 y 21 de noviembre",
    location: "CIC Yucatán, Mérida",
    image: "/img/congreso_yucatan.webp",
    link: "https://re-plus-yucatan.igeco.mx/"
  },
  {
    title: "AMERICAS’  Mobility of the Future",
    description: "Encuentra las soluciónes para la movilidad del futuro en ECOMONDO MÉXICO",
    description_en: "Forum & Summit, driving the development of future mobility.",
    date: "14 al 16 de abril, 2026",
    location: "Expo Guadalajara, Guadalajara",
    image: "/img/bg_amof_nuevo_2025.webp",
    link: "https://amofexpo.igeco.mx/"
  },
  {
    title: "Drone Innovators Forum Mexico",
    description: "Liberando el potencial aéreo: el mundo de los drones.",
    description_en: "Unlocking aerial potential: the world of drones.",
    date: " próximamente...",
    location: "",
    image: "/img/drones.png",
    link: "https://drone.igeco.mx/"
  }*/
  {
    title: "RE+ MEXICO",
    description: "El evento líder en energía renovable y almacenamiento en México y Norteamérica.  ",
    description_en: "The leading event in renewable energy and storage in Mexico and North America.",
    date: "14 al 16 de abril, 2026",
    location: "Expo Guadalajara, Guadalajara",
    image: "/img/replus2026.webp",
    link: "https://re-plus-mexico.com.mx/"
  },
  {
    title: "ECOMONDO MEXICO",
    description: "La feria de tecnología ambiental y economía circular para Latinoamérica.",
    description_en: "The environmental technology and circular economy fair for Latin America.",
    date: "14 al 16 de abril, 2026",
    location: "Expo Guadalajara, Guadalajara",
    image: "/img/ecomondo2026.webp",
    link: "https://ecomondomexico.com.mx/"
  },
  
  {
    title: "Smart Technology Expo",
    description: "Marca un hito en la Industria 4.0 en México",
    description_en: "Marks a milestone in Industry 4.0 in Mexico",
    date: "18 al 20 de noviembre, 2026",
    location: "Expo Guadalajara, Guadalajara",
    image: "/img/ste_logo.webp",
    link: "https://smarttechnologyexpo.mx/"
  },
  
  // {
  //   title: "Industrial Transformation MEXICO",
  //   description: "La Hannover Messe del continente americano.",
  //   description_en: "The Hannover Messe of the American continent.",
  //   date: "11 al 13 de noviembre",
  //   location: "Centro Banamex, CDMX",
  //   image: "/img/Logo_ITM.webp",
  //   link: "https://industrialtransformation.mx/"
  // },
]

const carouselEvents = [
  /*{
    src: "/img/more-events/amof_event_bg.webp",
    logo: "/img/more-events/logoamof2025.webp",
    width: 250,
    alt: "AMOF",
    link: "https://amofexpo.igeco.mx/",
    title: "AMERICAS' MOBILITY OF THE FUTURE",
    subtitle: "La feria de la movilidad del futuro",
    subtitle_en: "The future mobility fair",
    subtitle_fr: "La foire de la mobilité du futur",
    description:
      "Conoce los avances más recientes en la industria de la electromovilidad, las ciudades inteligentes y los desarrollos tecnológicos de movilidad en su piso de exposición.",
    description_en:
      "Discover the latest advances in the electromobility industry, smart cities and mobility technology developments on its exhibition floor.",
    description_fr:
      "Découvrez les dernières avancées dans l'industrie de l'électromobilité, les villes intelligentes et les développements technologiques de mobilité sur le sol de son exposition.",
    date: "Noviembre, 2025",
    date_en: "November, 2025",
    date_fr: "Novembre, 2025",
    location: "CDMX",
  },
  {
    src: "/img/more-events/drone_event_bg.webp",
    logo: "/img/more-events/droneslogo.webp",
    width: 350,
    alt: "INNOVATORS FORUM MX",
    link: "https://drone.igeco.mx/",
    title: "DRONE INNOVATORS FORUM MX ",
    subtitle: "Liberando el potencial aéreo: El mundo de los drones",
    subtitle_en: "Unleashing Aerial Potential: The World of Drones",
    subtitle_fr: "Libérer le potentiel aérien : le monde des drones",
    description:
      "Participa en el punto de encuentro central para la industria de los drones, incluyendo proveedores de soluciones y tomadores de decisiones.",
    description_en:
      "Join the central meeting point for the drone industry, including solution providers and decision makers.",
    description_fr:
      "Participez au point de rencontre central pour l'industrie des drones, y compris les fournisseurs de solutions et les décideurs.",
    date: "Noviembre, 2025",
    date_en: "November, 2025",
    date_fr: "Novembre, 2025",
    location: "CDMX",
  },
  */
  {
    src: "/img/more-events/hannover_event_bg.webp",
    logo: "/img/more-events/logohannover.webp",
    width: 100,
    alt: "HANNOVER",
    link: "https://www.hannovermesse.de/en/",
    title: "HANNOVER MESSE",
    subtitle: "La IA en la industria",
    subtitle_en: "AI in industry",
    subtitle_fr: "L'IA dans l'industrie",
    description:
      "En HANNOVER MESSE 2025, podrás experimentar tecnologías de vanguardia en vivo: desde robots autónomos hasta IA generativa. Descubre cómo la IA está transformando la industria y estableciendo nuevos estándares.",
    description_en:
      "At HANNOVER MESSE 2025, you can experience cutting-edge technologies live: from autonomous robots to generative AI. Discover how AI is transforming industry and setting new standards.",
    description_fr:
      "À HANNOVER MESSE 2025, vous pouvez expérimenter les technologies de pointe en direct : des robots autonomes jusqu'à l'IA générative. Découvrez comment l'IA transforme l'industrie et définit de nouveaux standards.",
    date: "Abril, 2026",
    date_en: "April, 2026",
    date_fr: "Avril, 2026",
    location: "Germany",
  },
  {
    src: "/img/more-events/ecomondo_event_bg.webp",
    logo: "/img/more-events/logoecomondo.webp",
    width: 250,
    alt: "ECOMONDO",
    link: "https://en.ecomondo.com/",
    title: "ECOMONDO RIMINI",
    subtitle: "Feria de la Tecnología Ecológica",
    subtitle_en: "Ecological Technology Fair",
    subtitle_fr: "La foire de la technologie écologique",
    description:
      "Es el punto de encuentro donde grupos industriales, partes interesadas, responsables políticos, líderes de opinión, autoridades locales, organismos de investigación e instituciones se reúnen para establecer los elementos clave que definen las estrategias para el desarrollo de la política ambiental de la UE.",
    description_en:
      "It is the meeting point where industrial groups, stakeholders, policy makers, opinion leaders, local authorities, research bodies and institutions come together to establish the key elements that define the strategies for the development of EU environmental policy.",
    description_fr:
      "C'est le point de rencontre où les groupes industriels, les parties prenantes, les responsables politiques, les leaders de l'opinion, les autorités locales, les organismes de recherche et les institutions se réunissent pour définir les éléments clés qui définissent les stratégies pour le développement de la politique environnementale de l'UE.",
    date: "Noviembre, 2026",
    date_en: "November, 2026",
    date_fr: "Novembre, 2026",
    location: "Italy",
  },
  {
    src: "/img/more-events/domotex_event_bg.webp",
    logo: "/img/more-events/logodomotex.webp",
    width: 250,
    alt: "Domotex",
    link: "https://www.domotex.de/en/",
    title: "DOMOTEX",
    subtitle: "Hogar de pisos y acabados de interiores",
    subtitle_en: "Home of floors and interior finishes",
    subtitle_fr: "Maison de pièces et de finitions intérieures",
    description:
      "A partir de 2026, ampliará su gama de productos para incluir los temas de exposición de pintura, papel pintado, elementos acústicos, azulejos y revestimientos exteriores, presentándose así como una feria internacional para el diseño de interiores.",
    description_en:
      "Starting in 2026, it will expand its product range to include the exhibition topics of paint, wallpaper, acoustic elements, tiles and exterior cladding, thus presenting itself as an international fair for interior design.",
    description_fr:
      "À partir de 2026, il étendra sa gamme de produits pour inclure les sujets d'exposition de peinture, papier peint, éléments acoustiques, tuiles et revêtement extérieur, présentant lui-même comme une foire internationale pour le design intérieur.",
    date: "Enero, 2026",
    date_en: "January, 2026",
    date_fr: "Janvier, 2026",
    location: "Germany",
  },
  {
    src: "/img/more-events/etc_event_bg.webp",
    logo: "/img/more-events/etc_logo.webp",
    width: 250,
    alt: "ETC",
    link: "https://electricity-transformation.ca/",
    title: "Electricity Transformation Canada",
    subtitle: "El poder de la transición",
    subtitle_en: "Powering the Transition",
    subtitle_fr: "Le pouvoir de la transition",
    description:
      "Electricity Transformation Canada reunirá a profesionales de la energía de sectores convergentes (energía eólica, energía solar y almacenamiento de energía) para establecer redes, colaborar y hacer crecer sus negocios.",
    description_en:
      "Electricity Transformation Canada will bring together energy professionals from converging sectors — wind energy, solar energy, and energy storage — to network, collaborate and grow their businesses.",
    description_fr:
      "Electricity Transformation Canada rassemblera les professionnels de l'énergie des secteurs convergents (énergie électrique, énergie solaire et stockage d'énergie) pour créer des réseaux, collaborer et faire grandir leurs entreprises.",
    date: "Octubre 2026",
    date_en: "October 2026",
    date_fr: "Octobre 2026",
    location: "Canada",
  },
  {
    src: "/img/more-events/riminiwellness_event_bg.webp",
    logo: "/img/more-events/logoRiminiWellness.webp",
    width: 350,
    alt: "RIMINIWELLNESS",
    link: "https://en.riminiwellness.com/",
    title: "REMINIWELLNESS",
    subtitle: "Feria de la experiencia del bienestar",
    subtitle_en: "Wellness Experience Fair",
    subtitle_fr: "La foire de l'expérience de bien-être",
    description:
      "RiminiWellness es la reunión más grande del mundo dedicada a la actividad física, el bienestar, el deporte, la cultura física y la alimentación saludable.",
    description_en:
      "RiminiWellness is the world's largest gathering dedicated to physical activity, wellness, sport, physical culture and healthy eating.",
    description_fr:
      "RiminiWellness est la plus grande réunion du monde dédiée à l'activité physique, au bien-être, au sport, à la culture physique et à la consommation de bon aliment.",
    date: "Mayo, 2026",
    date_en: "May, 2026",
    date_fr: "Mai, 2026",
    location: "Italy",
  },
  {
    src: "/img/more-events/agritechnia_event_bg.webp",
    logo: "/img/more-events/logoagritechnica.webp",
    width: 350,
    alt: "AGRITECHNICA",
    link: "https://www.agritechnica.com/en/",
    title: "AGRITECHNICA ",
    subtitle: "Feria líder mundial de maquinaria agrícola",
    subtitle_en: "World's leading trade fair for agricultural machinery",
    subtitle_fr: "Salon mondiale de la machinerie agricole",
    description:
      "Ofrece a los visitantes acceso directo a sistemas agrícolas innovadores e interconectados que utilizan tecnologías digitales para aumentar la eficiencia, la sostenibilidad y la productividad.",
    description_en:
      "It offers visitors direct access to innovative, interconnected agricultural systems that use digital technologies to increase efficiency, sustainability and productivity.",
    description_fr:
      "Il offre aux visiteurs un accès direct à des systèmes agricoles innovants et interconnectés qui utilisent des technologies numériques pour augmenter l'efficacité, la sobriété et la productivité.",
    date: "Noviembre, 2027",
    date_en: "November, 2027",
    date_fr: "Novembre, 2027",
    location: "Germany",
  },
  {
    src: "/img/more-events/key_event_bg.webp",
    logo: "/img/more-events/logokey.webp",
    width: 350,
    alt: "AGRITECHNICA",
    link: "https://en.key-expo.com",
    title: "The Energy Transition Expo ",
    subtitle: "El futuro de la energía se reúne en KEY",
    subtitle_en: "The future of energy meets at KEY",
    subtitle_fr: "Le futur de l'énergie se réunit à KEY",
    description:
      "La transición energética está cobrando velocidad y los grandes números, récord en KEY - The Energy Transition Expo, el evento de referencia de IEG-Italian Exhibition Group en Europa, África y la cuenca mediterránea, que cerró hoy en Rimini Expo Centre, son la prueba.",
    description_en:
      "The energy transition is gathering speed and the big, record-breaking numbers at KEY - The Energy Transition Expo, the IEG-Italian Exhibition Group event of reference in Europe, Africa and the Mediterranean basin, which closed today at Rimini Expo Centre, are the proof.",
    description_fr:
      "La transition énergétique rassemble la vitesse et les grands nombres, référencés à KEY - The Energy Transition Expo, l'événement de référence de l'IEG-Italian Exhibition Group en Europe, Afrique et la Méditerranée, qui a fermé aujourd'hui à Rimini Expo Centre, sont les preuves.",
    date: "Marzo, 2026",
    date_en: "March, 2026",
    date_fr: "Mars, 2026",
    location: "Italy",
  },  
  {
    src: "/img/more-events/ligna_event_bg.png",
    logo: "/img/more-events/ligna_logo.png",
    width: 150,
    alt: "LIGNA",
    link: "https://www.ligna.de/en/",
    title: "LIGNA",
    subtitle: "La feria líder mundial para la industria de la madera",
    subtitle_en: "The world's leading trade fair for the woodworking industry",
    subtitle_fr: "Le salon mondial de la industrie du bois",
    description:
      "Presenta soluciones completas para los sectores primario y secundario, incluyendo herramientas, maquinaria y sistemas para la producción a medida y en masa, tecnologías de superficie y producción de paneles.",
    description_en:
      "It showcases comprehensive solutions for both primary and secondary sectors, including tools, machinery, and systems for both custom and mass production, surface technologies, and panel production.",
    description_fr:
      "Il présente des solutions complètes pour les secteurs primaires et secondaires, y compris des outils, de la machinerie et des systèmes pour la production à la vitesse et en masse, des technologies de surface et de la production de panneaux.",
    date: "Mayo, 2027",
    date_en: "May, 2027",
    date_fr: "Mai, 2027",
    location: "Germany",
  },
  {
    src: "/img/more-events/vicenzaoro_event_bg.png",
    logo: "/img/more-events/vofavicon.png",
    width: 300,
    alt: "VICENZAORO",
    link: "https://www.vicenzaoro.com/en",
    title: "VICENZAORO",
    subtitle:
      "La mayor feria europea para la industria del oro y de la joyería",
    subtitle_en:
      "Europe's largest trade fair for the gold and jewelry industry",
    subtitle_fr:
      "La plus grande foire européenne pour l'industrie du or et de la joaillerie",
    description:
      "Un verdadero centro de negocios, que reúne a los actores más influyentes del sector mundial de la joyería.",
    description_en:
      "A true business hub, bringing together the most influential players from across the global jewelry sector.",
    description_fr:
      "Un vrai centre de commerce, rassemblant les principaux acteurs du secteur mondial de la joaillerie.",
    date: "Enero, 2026",
    date_en: "January, 2026",
    date_fr: "Janvier, 2026",
    location: "Italy",
  },
];

export { events, carouselEvents };