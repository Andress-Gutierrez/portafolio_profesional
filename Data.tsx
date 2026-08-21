import {
  BarChart3,
  BookText,
  Briefcase,
  Code2,
  CodeSquare,
  Cpu,
  GlobeIcon,
  Home,
  Inbox,
  Mail,
  PanelsTopLeft,
  Phone,
  UserCheckIcon,
  UserRound,
  Wrench,
} from "lucide-react";

export const dataAboutMe = [
  {
    id: 1,
    name: "Experience",
    icon: <Briefcase />,
    description: "+2 years of experience",
  },
  {
    id: 2,
    name: "Projects",
    icon: <Wrench />,
    description: "+20 completed",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <Home size={20} />,
    link: "#/",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={20} />,
    link: "#about-me",
  },
  {
    id: 3,
    title: "Book",
    icon: <BookText size={20} />,
    link: "#services",
  },
  {
    id: 4,
    title: "Target",
    icon: <CodeSquare size={20} />,
    link: "#portfolio",
  },
  {
    id: 5,
    title: "Mail",
    icon: <Mail size={20} />,
    link: "#contact",
  },
];

export const dataSlider = [
  {
    id: 1,
    url: "/slider-1.jpg",
  },
  {
    id: 2,
    url: "/slider-2.jpg",
  },
  {
    id: 3,
    url: "/slider-3.jpg",
  },
  {
    id: 4,
    url: "/slider-4.jpg",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "Consumo API vehiculos",
    image: "/image-1.jpg",
    description: "API para obtener el precio de un vehiculo",
    urlGithub: "https://github.com/Andress-Gutierrez/Vehiculo_ultimo_consumo_api",
    urlDemo: "https://andress-gutierrez.github.io/Vehiculo_ultimo_consumo_api/",
    category: "development",
  },
  {
    id: 2,
    title: "Desarrollo Web Ágil",
    image: "/image-2.jpg",
    description: "Metodología ágil aplicada en desarrollo frontend",
    urlGithub: "#!",
    urlDemo: "#!",
    category: "development",
  },
  {
    id: 3,
    title: "Prueba técnica Especialista de Datos",
    image: "/image-3.jpg",
    description:
      "ETL Python, Apache Airflow, PostgreSQL y Power BI — pipeline de datos end-to-end",
    urlGithub:
      "https://github.com/Andress-Gutierrez/prueba_tecnica_especialista_datos",
    urlDemo: "#!",
    category: "data-analyst",
  },
  {
    id: 4,
    title: "Navegando Ideas Creativas",
    image: "/image-4.jpg",
    description: "Diseño creativo y desarrollo backend integrado",
    urlGithub: "#!",
    urlDemo: "#!",
    category: "development",
  },
  {
    id: 5,
    title: "Sitios Web Impactantes",
    image: "/image-5.jpg",
    description: "Visualización de datos con impacto visual",
    urlGithub: "#!",
    urlDemo: "#!",
    category: "data-analyst",
  },
  {
    id: 6,
    title: "Proyectos Web Dinámicos",
    image: "/image-6.jpg",
    description: "Soluciones dinámicas y personalizadas",
    urlGithub: "#!",
    urlDemo: "#!",
    category: "other",
  },
];

export const dataExperience = [
  {
    id: 1,
    title: " Data Analyst 📊📈📉",
    experience: [
      {
        name: "Power BI",
        subtitle: "Basic",
        value: 30,
      },
      {
        name: "Microsoft Excel",
        subtitle: "Intermediate",
        value: 80,
      },
      {
        name: "Tablue",
        subtitle: "Basic",
        value: 20,
      },
      {
        name: "Python(R)",
        subtitle: "Basic",
        value: 20,
      },
      {
        name: "Google Sheets",
        subtitle: "Intermediate",
        value: 20,
      },
      {
        name: "BigQuery",
        subtitle: "Basic",
        value: 20,
      },
      {
        name: "Looker Studio",
        subtitle: "Basic",
        value: 20,
      },
      {
        name: "Microsoft Access",
        subtitle: "Basic",
        value: 20,
      },
      {
        name: "LibreOffice Calc",
        subtitle: "Basic",
        value: 20,
      },
    ],
  },
  {
    id: 2,
    title: "Fronted Development  🎨🖌️🌐",
    experience: [
      {
        name: "Html5",
        subtitle: "Intermediate",
        value: 100,
      },
      {
        name: "Tailwind CSS",
        subtitle: "Basic",
        value: 30,
      },
      {
        name: "Bootstrap",
        subtitle: "Basic",
        value: 30,
      },
      {
        name: "CSS3",
        subtitle: "Intermediate",
        value: 60,
      },
      {
        name: "React",
        subtitle: "Intermediate",
        value: 50,
      },
      {
        name: "Next.js",
        subtitle: "Basic",
        value: 20,
      },
      {
        name: "TypeScript",
        subtitle: "Basic",
        value: 20,
      },
      {
        name: "C#",
        subtitle: "Basic",
        value: 30,
      },
      {
        name: ".Net(Blazor)",
        subtitle: "Basic",
        value: 30,
      },
      {
        name: "PHP",
        subtitle: "Basic",
        value: 20,
      },
    ],
  },

  {
    id: 3,
    title: "Backend Development  🔒🖥️🥷",
    experience: [
      {
        name: "Python(FastAPI)",
        subtitle: "Intermediate",
        value: 60,
      },
      {
        name: "MySQL",
        subtitle: "Intermediate",
        value: 60,
      },
      {
        name: "PostgreSQL",
        subtitle: "Intermediate",
        value: 60,
      },
      {
        name: "Docker",
        subtitle: "Basic",
        value: 30,
      },
      {
        name: "Git",
        subtitle: "Intermediate",
        value: 60,
      },
      {
        name: "GitHub",
        subtitle: "Intermediate",
        value: 60,
      },
    ],
  },

  {
    id: 4,
    title: "Electronic Engineer 🔌⚡🧠",
    experience: [
      {
        name: "C++",
        subtitle: "Intermediate",
        value: 70,
      },
      {
        name: "Assembler",
        subtitle: "Intermediate",
        value: 60,
      },
      {
        name: "MATLAB",
        subtitle: "Basic",
        value: 20,
      },
      {
        name: "Arduino",
        subtitle: "Proficient",
        value: 100,
      },
      {
        name: "Proteus",
        subtitle: "Proficient",
        value: 100,
      },
      {
        name: "CircuitMaker",
        subtitle: "Intermediate",
        value: 60,
      },
      {
        name: "STM32",
        subtitle: "Basic",
        value: 20,
      },
      {
        name: "Altium",
        subtitle: "Basic",
        value: 20,
      },
    ],
  },

  {
    id: 5,
    title: "Others  🔒🖥️🥷",
    experience: [
      {
        name: "AutoCAD",
        subtitle: "Basic",
        value: 20,
      },
      {
        name: "Power Platform",
        subtitle: "Basic",
        value: 20,
      },
      {
        name: "linux",
        subtitle: "Basic",
        value: 20,
      },
      {
        name: "COBOL",
        subtitle: "Basic",
        value: 30,
      },
      {
        name: "Windows server",
        subtitle: "Basic",
        value: 30,
      },
      {
        name: "Visual studio",
        subtitle: "Basic",
        value: 30,
      },
    ],
  },
];

export const dataServices = [
  {
    id: 1,
    title: "Web & Software Development",
    icon: <PanelsTopLeft />,
    features: [
      { name: "Web application development with React/Next.js and TypeScript" },
      { name: "RESTful API creation with FastAPI and Next.js" },
      {
        name: "Responsive web design with CSS frameworks (Tailwind, Bootstrap)",
      },
      { name: "Desktop application development with Java, Python and C++" },
      {
        name: "Enterprise applications with .NET Framework and Blazor (web apps)",
      },
      { name: "SEO and web performance optimization" },
      { name: "Backend services and third-party API integration" },
      { name: "Continuous maintenance, updating and optimization" },
      { name: "Version control with Git and GitHub" },
      { name: "Unit testing with Pytest, Unittest and Jest" },
      { name: "Deployment in cloud environments and servers (basic)" },
      { name: "Development with agile methodologies (Scrum)" },
      { name: "PHP programming (Wordpress)" },
      { name: "Problem-solving and algorithmic thinking" },
      { name: "SQL and NoSQL database management" },
    ],
  },
  {
    id: 2,
    title: "Electronic Engineering & IoT",
    icon: <Cpu />,
    features: [
      { name: "Analog/digital electronic circuit design and development" },
      {
        name: "Microcontroller programming (PIC, STM32, Arduino, ESP32, Micro:bit)",
      },
      { name: "PCB design with Altium, CircuitMaker, Eagle and KiCad" },
      {
        name: "Communication protocols: TCP/IP, HTTP, SSH, MQTT, Modbus, CoAP",
      },
      { name: "Serial communications: RS485, RS232, UART, SPI, I2C" },
      { name: "Network configuration: DHCP, DNS, FTP/SFTP, VLANs" },
      {
        name: "Wireless technologies: LoRa, Zigbee, Wi-Fi 802.11, Bluetooth/BLE",
      },
      {
        name: "Cellular communications: 4G/LTE, 3G, GSM/GPRS with Quectel modules",
      },
      { name: "Circuit simulation with Multisim, Proteus, MATLAB" },
      { name: "Programming in C, C++ and Assembler for embedded systems" },
      { name: "SMD and through-hole component soldering and assembly" },
      { name: "Configuration of measurement equipment and industrial sensors" },
      { name: "System integration with Raspberry Pi" },
      { name: "Industrial automation and control systems" },
    ],
  },
  {
    id: 3,
    title: "Junior Data Analysis",
    icon: <BarChart3 />,
    features: [
      { name: "Data analysis and visualization with Power BI" },
      { name: "Data processing with Python (Pandas, NumPy, SciPy)" },
      { name: "Advanced SQL queries in MySQL, PostgreSQL and SQLite" },
      { name: "Interactive dashboard creation with Tableau and Looker Studio" },
      { name: "Data cleaning, transformation and ETL" },
      { name: "Report and data process automation" },
      { name: "Historical data analysis for predictive maintenance" },
      { name: "Data integration from multiple sources" },
      {
        name: "Advanced Google Sheets and Microsoft Excel (functions, pivot tables)",
      },
      {
        name: "BigQuery and large volume data processing (basic introductory)",
      },
    ],
  },
  {
    id: 4,
    title: "Networking, Infrastructure & IT",
    icon: <GlobeIcon />,
    features: [
      { name: "LAN/WAN network configuration and communication protocols" },
      { name: "Hardware/software technical diagnosis and troubleshooting" },
      { name: "Preventive and corrective maintenance of computer equipment" },
      { name: "Router, switch and firewall configuration" },
      { name: "System administration with Windows Server and Linux" },
      { name: "DHCP, DNS, FTP/SFTP service management" },
      { name: "VLAN implementation and network segmentation" },
      { name: "Remote technical support (TeamViewer, AnyDesk, RDP)" },
      { name: "Virtualization with Docker and containers" },
      { name: "Network and system monitoring" },
      { name: "Technical documentation and user manuals" },
    ],
  },
  {
    id: 5,
    title: "Professional Skills",
    icon: <UserCheckIcon />,
    features: [
      { name: "Complex technical problem solving" },
      { name: "Effective communication with multidisciplinary teams" },
      { name: "Project management with agile methodologies (Scrum)" },
      { name: "Customer and user training" },
      { name: "Technical documentation and manual preparation" },
      { name: "Customer service and post-sales support" },
      { name: "Teamwork and effective collaboration" },
      { name: "Adaptability to new technologies and environments" },
      { name: "Analytical thinking and problem solving" },
      { name: "Results orientation and work quality" },
      { name: "Continuous learning and technological updating" },
      { name: "Technical English level B1 (reading and documentation)" },
    ],
  },
];

export const dataContact = [
  {
    id: 1,
    title: "Phone",
    subtitle: "+57 321 ** ** **",
    link: "tel:+573219471460",
    icon: <Phone />,
  },
  {
    id: 2,
    title: "Github",
    subtitle: "github.com/ratasi",
    link: "github.com/ratasi",
    icon: <Code2 />,
  },
  {
    id: 3,
    title: "Email",
    subtitle: "email@email.com",
    link: "mailto:andydrummer9221@gmail.com",
    icon: <Inbox />,
  },
];
