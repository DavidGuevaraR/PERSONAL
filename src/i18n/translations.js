const translations = {
  es: {
    navbar: {
      menu: [
        { name: 'Inicio', to: '#hero' },
        { name: 'Portafolio', to: '#portfolio' },
        { name: 'Sobre mí', to: '#about' },
        { name: 'Contacto', to: '#contact' },
      ],
      languageLabel: 'Seleccionar idioma',
      languageShort: { es: 'ES', en: 'EN' },
    },
    hero: {
      subtitle: 'Desarrollador Web | Visionario Digital',
      cta: 'Explora mi trabajo',
    },
    about: {
      title: 'Sobre mí',
      paragraph1: [
        { text: 'Soy ' },
        { text: 'David Guevara', highlight: true },
        { text: ', un desarrollador web y diseñador UX/UI apasionado por crear experiencias digitales que combinen funcionalidad y estética. Mi trayectoria incluye proyectos como ' },
        { text: 'ID TECH', highlight: true },
        { text: ', donde desarrollé sistemas web complejos, y ' },
        { text: 'Noctua UCA', highlight: true },
        { text: ', una app móvil para estudiantes. Domino tecnologías como ' },
        { text: 'Vite', highlight: true },
        { text: ', ' },
        { text: 'React', highlight: true },
        { text: ', ' },
        { text: 'Node.js', highlight: true },
        { text: ', ' },
        { text: 'Tailwind CSS', highlight: true },
        { text: ' y ' },
        { text: 'Figma', highlight: true },
        { text: ', siempre buscando soluciones innovadoras.' },
      ],
      paragraph2: [
        { text: 'Más allá del diseño web, he explorado otras áreas: fui ' },
        { text: 'analista BI junior', highlight: true },
        { text: ' usando Power BI y Excel para analizar datos CSV, tengo interés en la ' },
        { text: 'ciberseguridad forense', highlight: true },
        { text: ', y trabajé como ' },
        { text: 'técnico en electrónica', highlight: true },
        { text: ' gracias a mi formación técnica. Estas experiencias enriquecen mi enfoque multidisciplinario y mi capacidad para resolver problemas.' },
      ],
      paragraph3: [
        { text: 'En lo personal, soy un entusiasta del ' },
        { text: 'deporte', highlight: true },
        { text: ' (natación, gimnasio, calistenia, taekwondo, basketball) y la ' },
        { text: 'música', highlight: true },
        { text: '. Toco guitarra, bajo, batería, piano y zampoña, y tengo experiencia en producción musical con mis propios instrumentos y equipo de grabación. Mi motivación es transformar ideas en realidades, ya sea a través de código, diseño o creatividad pura. ¡Conéctate conmigo para explorar posibilidades!' },
      ],
    },
    portfolio: {
      title: 'Portafolio',
      viewMore: 'Ver más →',
      fullscreenAlt: 'Imagen de proyecto en pantalla completa',
      projects: {
        sales: {
          title: 'Sistema Integral de Gestión de Ventas y Facturación Electronica',
          shortDesc: 'Sistema integral de ventas con módulos de facturación electrónica y gestión administrativa.',
          fullDesc:
            'Diseñé y desarrollé un sistema integral de ventas con facturación electrónica basado en la estructura de datos de AdventureWorks. Como diseñador UX/UI, utilicé Figma para crear un sistema de diseño sólido y prototipos de alta fidelidad, definiendo la experiencia del usuario para los módulos de creación de ventas, gestión de productos, clientes y facturación. Como desarrollador Full Stack, transformé esos diseños en una aplicación web funcional utilizando el Stack MERN (MongoDB, Express.js, React.js y Node.js), encargándome de la arquitectura de la base de datos, la lógica del servidor y la interfaz dinámica.',
          tech: 'MongoDB, Express.js, React.js, Node.js, Figma',
        },
        idtech: {
          title: 'ID TECH',
          shortDesc: 'Sistema web para emisión de DTE en El Salvador con integración al Ministerio de Hacienda.',
          fullDesc:
            'ID TECH es un innovador sistema web desarrollado para la emisión de Documentos Tributarios Electrónicos (DTE) en El Salvador, cumpliendo con las normativas fiscales vigentes. Esta plataforma está diseñada para emitir los 11 documentos tributarios oficiales, y cuenta con una estructura de cuatro roles de usuarios, destacándose uno con las máximas atribuciones y permisos. El sistema se comunica de manera segura y eficiente con el Ministerio de Hacienda mediante su API oficial. Como Desarrollador Frontend, mi función principal fue el desarrollo integral del frontend del sistema, lo que incluyó la implementación del diseño de la interfaz gráfica de usuario. Como Diseñador UX/UI, me encargué del diseño de su arquitectura visual y funcional. Además, también fui responsable de la creación y cálculo preciso de los documentos tributarios. Entre las funcionalidades desarrolladas se encuentran: Gestión de Inventarios, Gestión de Clientes, Administración de DTE Generados, y Gestión de Usuarios.',
          tech: 'Vite, React, Node.js, Tailwind CSS, JavaScript',
        },
        inventory: {
          title: 'Gestión de Inventario en Bodegas',
          shortDesc:
            'Sistema web para controlar inventarios en bodegas de materiales de construcción en Nevada, EE.UU.',
          fullDesc:
            'Desarrollé un sistema web para gestionar de manera eficiente el inventario de productos en bodegas de una empresa de material de construcción ubicada en Nevada, Estados Unidos. Este sistema permite registrar y controlar la entrada y salida de productos en las bodegas, optimizando la gestión de inventarios y asegurando la disponibilidad de materiales necesarios. Características clave: Registro de Productos, Control de Entrada y Salida, Informes y Análisis, y Gestión de Usuarios. Aunque estoy autorizado a mencionar la naturaleza del sistema, debo mantener la confidencialidad de los detalles específicos, como su nombre, enlaces e imágenes, debido a una cláusula de privacidad firmada con la empresa.',
          tech: 'Vite, React, Node.js, Tailwind CSS, JavaScript',
        },
        marketplace: {
          title: 'Marketplace UCA',
          shortDesc: 'Diseño UX/UI y desarrollo frontend de la landing page para estudiantes de la UCA.',
          fullDesc:
            'Creación de Marketplace UCA, una landing page para conectar a estudiantes de la Universidad Centroamericana mediante un mercado de recursos. Como Diseñador UX/UI: Diseñé una interfaz intuitiva y atractiva en Figma. Como Desarrollador Frontend: Implementé la página con React y Framer Motion, asegurando responsividad (móviles, tablets, laptops) y rendimiento con Tailwind CSS.',
          tech: 'Vite, React, Framer Motion, Tailwind CSS, JavaScript, Figma',
        },
        carconnect: {
          title: 'Rediseño de E-Commerce Car Connect',
          shortDesc: 'Rediseño UX/UI y desarrollo frontend de la página de inicio de Car Connect.',
          fullDesc:
            'Participé en el rediseño del sitio web de ventas de automóviles, Car Connect. El sitio original, aunque funcional, contaba con una interfaz rústica y un diseño UX deficiente tanto para los clientes como para los administradores. En este proyecto, desempeñé el rol de Dev-Designer. Como Diseñador UX/UI: Realicé el nuevo diseño de la página utilizando Figma, abarcando todas las posibles vistas, incluyendo errores, acciones y las interfaces correspondientes a sus tres roles existentes. Como Desarrollador Frontend: Desarrollé la página de inicio (home page) del sitio Car Connect, asegurando una experiencia de usuario optimizada y visualmente atractiva. El resto de la interfaz fue implementado por el equipo de desarrolladores.',
          tech: 'Vite, React, Node.js, Tailwind CSS, JavaScript, Figma',
        },
        noctua: {
          title: 'Noctua UCA',
          shortDesc: 'App móvil Android para acompañamiento estudiantil.',
          fullDesc:
            'Aplicación móvil para Android orientada al acompañamiento estudiantil. Esta app permite la creación de un perfil estudiantil donde se pueden agregar datos relevantes como el nivel de carrera, las materias a cursar, y la carrera del estudiante. Su objetivo principal es conectar a estudiantes con intereses y datos afines, facilitando así la comunicación entre ellos. Mi rol en este proyecto fue de Dev-Designer. Como Diseñador UX/UI: Creación de la interfaz gráfica de la aplicación utilizando Figma, asegurando una experiencia de usuario intuitiva y atractiva. Como Desarrollador Frontend: Implementación de la interfaz gráfica de la aplicación utilizando Android Studio y Jetpack Compose, garantizando una experiencia fluida y coherente.',
          tech: 'Android Studio, Kotlin, Jetpack Compose, Figma',
        },
        aceuca: {
          title: 'Diseño de Sitio Web ACEUCA',
          shortDesc: 'Diseño UX/UI para la gestión de préstamos de empleados de la UCA.',
          fullDesc:
            'Participé en el diseño del sitio web de la Asociación Cooperativa de Ahorro, Crédito y Consumo de Empleados de la Universidad Centroamericana José Simeón Cañas de R.L. (ACEUCA). Este sitio web está destinado a gestionar los préstamos para los empleados de la Universidad UCA, optimizando y facilitando el proceso. Mi rol como Diseñador UX/UI incluyó: Diseño integral de la interfaz gráfica utilizando Figma, abarcando todas las vistas necesarias para una experiencia de usuario intuitiva y eficiente. Colaboración estrecha con el equipo de desarrolladores para asegurar que el diseño se implementara de manera precisa y funcional.',
          tech: 'Figma',
        },
        todo: {
          title: 'Sistema Web de Lista de Tareas',
          shortDesc: 'Aplicación web para gestionar tareas con tres roles de usuario.',
          fullDesc:
            'Desarrollé una página web diseñada para la creación y gestión de listas de tareas, optimizada para mejorar la productividad y organización de sus usuarios. Este sistema cuenta con una estructura de tres roles distintos, uno de los cuales posee las atribuciones máximas dentro de la plataforma. Características clave: Creación y Gestión de Tareas, Roles de Usuario, y Visualización Intuitiva.',
          tech: 'Vite, React, Node.js, Tailwind CSS, JavaScript',
        },
        ordino: {
          title: 'ORDINO',
          shortDesc: 'Sistema web para gestión médica de clínicas privadas.',
          fullDesc:
            'Sistema web para gestionar clínicas, este sistema contiene gestión de pacientes, historial médico y gestión de usuarios del sistema, tiene 3 roles. Mi papel en este proyecto fue de Dev-Designer. Como Diseñador UX/UI: Creación de la interfaz gráfica de usuario en Figma de todas las vistas del sistema tanto para pantallas grandes como para pantallas móviles. Como Desarrollador Frontend: Creación de la interfaz gráfica del sistema.',
          tech: 'Vite, React, Node.js, Tailwind CSS,, JavaScript, Figma',
        },
      },
    },
    contact: {
      title: 'Contacto',
      intro:
        '¿Tienes una idea o proyecto en mente? Envíame un mensaje o conéctate conmigo en mis redes sociales.',
      placeholders: {
        name: 'Nombre',
        email: 'Email',
        message: 'Mensaje',
      },
      send: 'Enviar',
      sending: 'Enviando...',
      success: '¡Mensaje enviado con éxito!',
      error: 'Error al enviar el mensaje. Intenta de nuevo.',
      close: 'Cerrar',
    },
  },
  en: {
    navbar: {
      menu: [
        { name: 'Home', to: '#hero' },
        { name: 'Portfolio', to: '#portfolio' },
        { name: 'About', to: '#about' },
        { name: 'Contact', to: '#contact' },
      ],
      languageLabel: 'Select language',
      languageShort: { es: 'ES', en: 'EN' },
    },
    hero: {
      subtitle: 'Web Developer | Digital Visionary',
      cta: 'Explore my work',
    },
    about: {
      title: 'About me',
      paragraph1: [
        { text: 'I am ' },
        { text: 'David Guevara', highlight: true },
        { text: ', a web developer and UX/UI designer passionate about creating digital experiences that combine functionality and aesthetics. My journey includes projects such as ' },
        { text: 'ID TECH', highlight: true },
        { text: ', where I built complex web systems, and ' },
        { text: 'Noctua UCA', highlight: true },
        { text: ', a mobile app for students. I work with technologies like ' },
        { text: 'Vite', highlight: true },
        { text: ', ' },
        { text: 'React', highlight: true },
        { text: ', ' },
        { text: 'Node.js', highlight: true },
        { text: ', ' },
        { text: 'Tailwind CSS', highlight: true },
        { text: ' and ' },
        { text: 'Figma', highlight: true },
        { text: ', always seeking innovative solutions.' },
      ],
      paragraph2: [
        { text: 'Beyond web design, I have explored other areas: I was a ' },
        { text: 'junior BI analyst', highlight: true },
        { text: ' using Power BI and Excel to analyze CSV data, I have an interest in ' },
        { text: 'forensic cybersecurity', highlight: true },
        { text: ', and I worked as an ' },
        { text: 'electronics technician', highlight: true },
        { text: ' thanks to my technical training. These experiences enrich my multidisciplinary approach and my ability to solve problems.' },
      ],
      paragraph3: [
        { text: 'Personally, I am a ' },
        { text: 'sports enthusiast', highlight: true },
        { text: ' (swimming, gym, calisthenics, taekwondo, basketball) and a ' },
        { text: 'music lover', highlight: true },
        { text: '. I play guitar, bass, drums, piano, and pan flute, and I have experience in music production with my own instruments and recording equipment. My motivation is to turn ideas into realities, whether through code, design, or pure creativity. Connect with me to explore possibilities!' },
      ],
    },
    portfolio: {
      title: 'Portfolio',
      viewMore: 'View more →',
      fullscreenAlt: 'Project image in full screen',
      projects: {
        sales: {
          title: 'Integrated Sales and Electronic Invoicing Management System',
          shortDesc:
            'Comprehensive sales system with electronic invoicing and administrative management modules.',
          fullDesc:
            'I designed and developed a comprehensive sales system with electronic invoicing based on the AdventureWorks data structure. As a UX/UI designer, I used Figma to create a solid design system and high-fidelity prototypes, defining the user experience for sales creation, product management, customers, and invoicing modules. As a Full Stack developer, I transformed those designs into a functional web application using the MERN Stack (MongoDB, Express.js, React.js, and Node.js), handling the database architecture, server logic, and dynamic interface.',
          tech: 'MongoDB, Express.js, React.js, Node.js, Figma',
        },
        idtech: {
          title: 'ID TECH',
          shortDesc:
            'Web system for issuing electronic tax documents (DTE) in El Salvador with Ministry of Finance integration.',
          fullDesc:
            'ID TECH is an innovative web system developed for issuing Electronic Tax Documents (DTE) in El Salvador, complying with current tax regulations. This platform is designed to issue the 11 official tax documents and includes a four-role user structure, with one role holding the highest permissions. The system communicates securely and efficiently with the Ministry of Finance through its official API. As Frontend Developer, my main responsibility was the full frontend development of the system, including the implementation of the UI design. As UX/UI Designer, I handled the visual and functional architecture design. I was also responsible for the creation and accurate calculation of the tax documents. Developed features include: Inventory Management, Customer Management, Generated DTE Administration, and User Management.',
          tech: 'Vite, React, Node.js, Tailwind CSS, JavaScript',
        },
        inventory: {
          title: 'Warehouse Inventory Management',
          shortDesc:
            'Web system to control inventory in construction material warehouses in Nevada, USA.',
          fullDesc:
            'I developed a web system to efficiently manage product inventory in warehouses of a construction materials company located in Nevada, United States. This system allows registering and controlling product entry and exit in the warehouses, optimizing inventory management and ensuring the availability of necessary materials. Key features: Product Registration, Entry and Exit Control, Reports and Analytics, and User Management. While I am authorized to mention the nature of the system, I must keep specific details confidential, such as its name, links, and images, due to a privacy clause signed with the company.',
          tech: 'Vite, React, Node.js, Tailwind CSS, JavaScript',
        },
        marketplace: {
          title: 'Marketplace UCA',
          shortDesc: 'UX/UI design and frontend development of the landing page for UCA students.',
          fullDesc:
            'Creation of Marketplace UCA, a landing page to connect students from Universidad Centroamericana through a resource marketplace. As UX/UI Designer: I designed an intuitive and attractive interface in Figma. As Frontend Developer: I implemented the page with React and Framer Motion, ensuring responsiveness (mobile, tablet, laptop) and performance with Tailwind CSS.',
          tech: 'Vite, React, Framer Motion, Tailwind CSS, JavaScript, Figma',
        },
        carconnect: {
          title: 'Car Connect E-Commerce Redesign',
          shortDesc: 'UX/UI redesign and frontend development of the Car Connect homepage.',
          fullDesc:
            'I participated in the redesign of the car sales website, Car Connect. The original site, while functional, had a rough interface and poor UX for both customers and administrators. In this project, I played the Dev-Designer role. As UX/UI Designer: I created the new page design in Figma, covering all possible views, including errors, actions, and interfaces for its three existing roles. As Frontend Developer: I built the homepage of the Car Connect site, ensuring an optimized and visually appealing user experience. The rest of the interface was implemented by the development team.',
          tech: 'Vite, React, Node.js, Tailwind CSS, JavaScript, Figma',
        },
        noctua: {
          title: 'Noctua UCA',
          shortDesc: 'Android mobile app for student support.',
          fullDesc:
            'Android mobile application focused on student support. This app allows the creation of a student profile where relevant data can be added, such as the degree level, subjects to take, and the student’s major. Its main goal is to connect students with similar interests and data, facilitating communication between them. My role in this project was Dev-Designer. As UX/UI Designer: I created the UI in Figma, ensuring an intuitive and attractive experience. As Frontend Developer: I implemented the UI using Android Studio and Jetpack Compose, ensuring a smooth and coherent experience.',
          tech: 'Android Studio, Kotlin, Jetpack Compose, Figma',
        },
        aceuca: {
          title: 'ACEUCA Website Design',
          shortDesc: 'UX/UI design for UCA employee loan management.',
          fullDesc:
            'I participated in the design of the website for the Asociación Cooperativa de Ahorro, Crédito y Consumo de Empleados de la Universidad Centroamericana José Simeón Cañas de R.L. (ACEUCA). This website is intended to manage loans for UCA employees, optimizing and facilitating the process. My role as UX/UI Designer included: comprehensive UI design in Figma, covering all necessary views for an intuitive and efficient user experience. Close collaboration with the development team ensured the design was implemented accurately and functionally.',
          tech: 'Figma',
        },
        todo: {
          title: 'Web To-Do List System',
          shortDesc: 'Web application to manage tasks with three user roles.',
          fullDesc:
            'I developed a web page designed for creating and managing task lists, optimized to improve productivity and organization for users. This system includes a structure of three distinct roles, one of which holds maximum privileges within the platform. Key features: Task Creation and Management, User Roles, and Intuitive Visualization.',
          tech: 'Vite, React, Node.js, Tailwind CSS, JavaScript',
        },
        ordino: {
          title: 'ORDINO',
          shortDesc: 'Web system for private clinic medical management.',
          fullDesc:
            'Web system to manage clinics, including patient management, medical history, and system user management, with 3 roles. My role in this project was Dev-Designer. As UX/UI Designer: I created the UI in Figma for all system views for both large screens and mobile screens. As Frontend Developer: I built the system UI.',
          tech: 'Vite, React, Node.js, Tailwind CSS,, JavaScript, Figma',
        },
      },
    },
    contact: {
      title: 'Contact',
      intro:
        'Do you have an idea or project in mind? Send me a message or connect with me on my social networks.',
      placeholders: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
      },
      send: 'Send',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Error sending the message. Please try again.',
      close: 'Close',
    },
  },
};

export default translations;
