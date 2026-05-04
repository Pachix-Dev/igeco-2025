import { date } from "astro:schema";

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
    title: "Smart Technology Expo",
    description: "Marca un hito en la Industria 4.0 en México",
    description_en: "Marks a milestone in Industry 4.0 in Mexico",
    date: "18 al 20 de noviembre, 2026",
    date_en: "November 18th - 20th, 2026",
    location: "Expo Guadalajara, Guadalajara",
    image: "/img/ste_logo.webp",
    link: "https://smarttechnologyexpo.mx/"
  },
  {
    title: "RE+ MEXICO",
    description: "LA FERIA LÍDER EN ENERGÍAS RENOVABLES",
    description_en: "THE LEADING RENEWABLE ENERGY FAIR",
    date: "20 al 22 de abril, 2027",
    date_en: "April 20th - 22nd, 2027",
    location: "Expo Guadalajara, Guadalajara",
    image: "/img/icon_replus_2027.webp",
    link: "https://re-plus-mexico.com.mx/"
  },
  {
    title: "ECOMONDO MEXICO",
    description: "LA EXPO DE TECNOLOGÍA AMBIENTAL Y ECONOMÍA CIRCULAR",
    description_en: "THE EXPO OF ENVIRONMENTAL TECHNOLOGY AND CIRCULAR ECONOMY",
    date: "20 al 22 de abril, 2027",
    date_en: "April 20th - 22nd, 2027",
    location: "Expo Guadalajara, Guadalajara",
    image: "/img/icon_eco_2027.webp",
    link: "https://ecomondomexico.com.mx/"
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
  /*
  {
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
      "Punto de encuentro estratégico para la industria de la electromovilidad, las ciudades inteligentes, la logística y la movilidad autónoma en Latinoamérica. Integrado en Ecomondo Mexico, reúne a más de 220 expositores, conferencias magistrales y una red de tomadores de decisión del sector.",
    description_en:
      "The strategic meeting point for the electromobility, smart cities, logistics and autonomous mobility industry in Latin America. Integrated into Ecomondo Mexico, it brings together over 220 exhibitors, keynote conferences and a network of industry decision-makers.",
    description_fr:
      "Le point de rencontre stratégique pour l'industrie de l'électromobilité, les villes intelligentes, la logistique et la mobilité autonome en Amérique latine. Intégré à Ecomondo Mexico, il rassemble plus de 220 exposants, des conférences et un réseau de décideurs du secteur.",
    date: "Proximamente, 2027",
    date_en: "Coming soon, 2027",
    date_fr: "Prochainement, 2027",
    location: "CDMX",
  },
  {
    src: "/img/more-events/drone_event_bg.webp",
    logo: "/img/more-events/droneslogo.webp",
    width: 350,
    alt: "INNOVATORS FORUM MX",
    link: "https://drone.igeco.mx/",
    title: "DRONE INNOVATORS FORUM MX",
    subtitle: "Liberando el potencial aéreo: El mundo de los drones",
    subtitle_en: "Unleashing Aerial Potential: The World of Drones",
    subtitle_fr: "Libérer le potentiel aérien : le monde des drones",
    description:
      "El punto de encuentro central para la industria de los drones en México, incluyendo fabricantes, importadores, proveedores de soluciones y tomadores de decisiones. Reúne especialistas en IA, LiDAR, cartografía, topografía y sistemas autónomos con más de 30 expositores y 2,000 visitantes especializados.",
    description_en:
      "The central meeting point for Mexico's drone industry, including manufacturers, importers, solution providers and decision makers. It brings together specialists in AI, LiDAR, mapping, topography and autonomous systems with over 30 exhibitors and 2,000 specialized visitors.",
    description_fr:
      "Le point de rencontre central pour l'industrie des drones au Mexique, incluant fabricants, importateurs, fournisseurs de solutions et décideurs. Il réunit des spécialistes en IA, LiDAR, cartographie, topographie et systèmes autonomes avec plus de 30 exposants et 2 000 visiteurs spécialisés.",
    date: "Proximamente, 2027",
    date_en: "Coming soon, 2027",
    date_fr: "Prochainement, 2027",
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
    subtitle: "La industria apunta hacia un futuro competitivo",
    subtitle_en: "Industry points the way to a competitive future",
    subtitle_fr: "L'industrie montre la voie vers un avenir compétitif",
    description:
      "La feria líder mundial para la industria manufacturera. Reúne a cerca de 3,000 empresas expositoras de ingeniería eléctrica, mecánica, digital y energética con soluciones para una industria competitiva y sostenible. Sus ejes principales son Automatización y Digitalización, Infraestructura Energética e Industrial, e Investigación y Transferencia Tecnológica.",
    description_en:
      "The world's leading trade fair for the manufacturing industry. It brings together around 3,000 exhibiting companies from electrical, mechanical, digital and energy sectors with solutions for a competitive and sustainable industry. Its main areas are Automation & Digitalization, Energy & Industrial Infrastructure, and Research & Technology Transfer.",
    description_fr:
      "La principale foire mondiale pour l'industrie manufacturière. Elle réunit environ 3 000 entreprises exposantes des secteurs électrique, mécanique, numérique et énergétique. Ses axes principaux sont Automatisation et Digitalisation, Infrastructure Énergétique et Industrielle, et Recherche et Transfert Technologique.",
    date: "Abril, 2027",
    date_en: "April, 2027",
    date_fr: "Avril, 2027",
    location: "Germany",
  },
  {
    src: "/img/more-events/ecomondo_event_bg.webp",
    logo: "/img/more-events/logoecomondo.webp",
    width: 250,
    alt: "ECOMONDO",
    link: "https://en.ecomondo.com/",
    title: "ECOMONDO RIMINI",
    subtitle: "Plataforma global para la economía verde y circular",
    subtitle_en: "Global platform for the green and circular economy",
    subtitle_fr: "Plateforme mondiale pour l'économie verte et circulaire",
    description:
      "Punto de encuentro donde grupos industriales, partes interesadas, responsables políticos, líderes de opinión, autoridades locales, organismos de investigación e instituciones definen las estrategias de la política ambiental de la UE.",
    description_en:
      "Meeting point where industrial groups, stakeholders, policy makers, opinion leaders, local authorities, research bodies and institutions come together to define EU environmental policy strategies.",
    description_fr:
      "Point de rencontre où groupes industriels, parties prenantes, décideurs politiques, leaders d'opinion, autorités locales, organismes de recherche et institutions définissent les stratégies de la politique environnementale de l'UE.",
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
      "La feria mundial líder de pisos y revestimientos de interiores, celebrada en Hannover. Desde 2026 amplió su oferta para incluir pinturas, papel tapiz, elementos acústicos, azulejos y revestimientos exteriores, consolidándose como feria internacional de diseño de interiores.",
    description_en:
      "The world's leading trade fair for flooring and interior finishing, held in Hannover. Since 2026 it expanded its offering to include paints, wallpaper, acoustic elements, tiles and exterior cladding, establishing itself as an international interior design fair.",
    description_fr:
      "La principale foire mondiale des revêtements de sol et de la finition intérieure, organisée à Hanovre. Depuis 2026, elle a élargi son offre pour inclure peintures, papiers peints, éléments acoustiques, carrelages et bardages extérieurs.",
    date: "Enero, 2028",
    date_en: "January, 2028",
    date_fr: "Janvier, 2028",
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
      "Electricity Transformation Canada es un punto de encuentro con profesionales de la energía de sectores convergentes para establecer redes, colaborar y hacer crecer sus negocios. Es el mayor evento de energía renovable de Canadá y se celebra en el Enercare Centre de Toronto, Ontario.",
    description_en:
      "Electricity Transformation Canada brings together energy professionals from converging sectors to network, collaborate and grow their businesses. Canada's largest renewable energy event takes place at the Enercare Centre in Toronto, Ontario.",
    description_fr:
      "Electricity Transformation Canada rassemblera les professionnels de l'énergie de secteurs convergents pour réseauter, collaborer et développer leurs activités. Le plus grand événement d'énergie renouvelable au Canada se tient à l'Enercare Centre de Toronto, Ontario.",
    date: "Octubre, 2026",
    date_en: "October, 2026",
    date_fr: "Octobre, 2026",
    location: "Canada",
  },
  {
    src: "/img/more-events/riminiwellness_event_bg.webp",
    logo: "/img/more-events/logoRiminiWellness.webp",
    width: 350,
    alt: "RIMINIWELLNESS",
    link: "https://en.riminiwellness.com/",
    title: "RIMINIWELLNESS",
    subtitle: "Go Through: La experiencia del bienestar",
    subtitle_en: "Go Through: The Wellness Experience",
    subtitle_fr: "Go Through : L'expérience bien-être",
    description:
      "La reunión más grande del mundo dedicada a la actividad física, el bienestar, el deporte, la cultura física y la alimentación saludable. Su 20ª edición reúne bajo un mismo techo a fabricantes de equipamiento, gimnasios, centros de salud, nutrición deportiva y las últimas tendencias del fitness en Rimini Expo Centre y la Riviera.",
    description_en:
      "The world's largest gathering dedicated to physical activity, wellness, sport, physical culture and healthy eating. Its 20th edition brings together under one roof equipment manufacturers, gyms, health centers, sports nutrition and the latest fitness trends at Rimini Expo Centre and the Riviera.",
    description_fr:
      "Le plus grand rassemblement mondial dédié à l'activité physique, au bien-être, au sport, à la culture physique et à l'alimentation saine. Sa 20e édition réunit sous un même toit fabricants d'équipements, salles de sport, centres de santé, nutrition sportive et les dernières tendances fitness.",
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
    title: "AGRITECHNICA",
    subtitle: "Feria líder mundial de maquinaria agrícola",
    subtitle_en: "World's leading trade fair for agricultural machinery",
    subtitle_fr: "Salon mondial de la machinerie agricole",
    description:
      "Ofrece a los visitantes acceso directo a sistemas agrícolas innovadores e interconectados que utilizan tecnologías digitales para aumentar la eficiencia, la sostenibilidad y la productividad. La edición 2027 reunirá a los principales actores globales en maquinaria, agricultura de precisión, robótica e IA aplicada al campo.",
    description_en:
      "It offers visitors direct access to innovative, interconnected agricultural systems that use digital technologies to increase efficiency, sustainability and productivity. The 2027 edition will bring together the world's leading players in machinery, precision farming, robotics and AI applied to agriculture.",
    description_fr:
      "Il offre aux visiteurs un accès direct à des systèmes agricoles innovants et interconnectés utilisant des technologies numériques pour accroître l'efficacité, la durabilité et la productivité. L'édition 2027 réunira les principaux acteurs mondiaux.",
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
    title: "The Energy Transition Expo",
    subtitle: "El futuro de la energía se reúne en KEY",
    subtitle_en: "The future of energy meets at KEY",
    subtitle_fr: "Le futur de l'énergie se réunit à KEY",
    description:
      "La feria de referencia de IEG-Italian Exhibition Group para la transición energética en Europa, África y la cuenca mediterránea. Se celebra en Rimini Expo Centre y abarca siete sectores: solar, eólica, almacenamiento, hidrógeno, eficiencia energética, movilidad eléctrica y ciudades sostenibles.",
    description_en:
      "The IEG-Italian Exhibition Group reference event for energy transition in Europe, Africa and the Mediterranean basin. Held at Rimini Expo Centre, it covers seven sectors: solar, wind, storage, hydrogen, energy efficiency, electric mobility and sustainable cities.",
    description_fr:
      "L'événement de référence d'IEG-Italian Exhibition Group pour la transition énergétique en Europe, Afrique et le bassin méditerranéen. Il se tient au Rimini Expo Centre et couvre sept secteurs : solaire, éolien, stockage, hydrogène, efficacité énergétique, mobilité électrique et villes durables.",
    date: "Marzo, 2027",
    date_en: "March, 2027",
    date_fr: "Mars, 2027",
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
    subtitle_fr: "Le salon mondial de l'industrie du bois",
    description:
      "Presenta soluciones completas para los sectores primario y secundario de la industria maderera, incluyendo herramientas, maquinaria y sistemas para la producción a medida y en masa, tecnologías de superficie y producción de paneles. La edición 2027 es la 51ª, con foco en digitalización, sostenibilidad y economía circular.",
    description_en:
      "It showcases comprehensive solutions for both primary and secondary sectors of the wood industry, including tools, machinery and systems for custom and mass production, surface technologies and panel production. The 2027 edition is the 51st, focused on digitalization, sustainability and the circular economy.",
    description_fr:
      "Il présente des solutions complètes pour les secteurs primaire et secondaire de l'industrie du bois, incluant outils, machines et systèmes pour la production sur mesure et en série, technologies de surface et production de panneaux. L'édition 2027 est la 51e édition.",
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
    subtitle: "La mayor feria europea para la industria del oro y de la joyería",
    subtitle_en: "Europe's largest trade fair for the gold and jewelry industry",
    subtitle_fr: "La plus grande foire européenne pour l'industrie de l'or et de la joaillerie",
    description:
      "Un verdadero centro de negocios, que reúne a los actores más influyentes del sector mundial de la joyería. Con dos ediciones anuales en Fiera di Vicenza, abarca toda la cadena productiva: alta joyería, piedras preciosas, relojería, componentes, tecnología y soluciones de packaging.",
    description_en:
      "A true business hub, bringing together the most influential players from across the global jewelry sector. With two annual editions at Fiera di Vicenza, it covers the entire production chain: high jewelry, precious stones, watchmaking, components, technology and packaging solutions.",
    description_fr:
      "Un vrai centre de commerce, rassemblant les principaux acteurs du secteur mondial de la joaillerie. Avec deux éditions annuelles à la Fiera di Vicenza, il couvre toute la chaîne de production : haute joaillerie, pierres précieuses, horlogerie, composants, technologie et solutions d'emballage.",
    date: "Septiembre, 2026",
    date_en: "September, 2026",
    date_fr: "Septembre, 2026",
    location: "Italy",
  },
];

export { events, carouselEvents };