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
    description: "+20 completed projects",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <Home size={20} />,
    link: "#home",
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
    title: "Vehicle API Consumption",
    image: "/image-1.jpg",
    description: "API integration to retrieve vehicle pricing data",
    urlGithub:
      "https://github.com/Andress-Gutierrez/Vehiculo_ultimo_consumo_api",
    urlDemo: "https://andress-gutierrez.github.io/Vehiculo_ultimo_consumo_api/",
    category: "development",
  },
  {
    id: 2,
    title: "Agile Web Development",
    image: "/image-2.jpg",
    description: "Agile methodology applied to frontend development",
    urlGithub: "",
    urlDemo: "",
    category: "development",
  },
  {
    id: 3,
    title: "Data Specialist Technical Assessment",
    image: "/image-3.jpg",
    description:
      "Python ETL, Apache Airflow, PostgreSQL and Power BI — end-to-end data pipeline",
    urlGithub:
      "https://github.com/Andress-Gutierrez/prueba_tecnica_especialista_datos",
    urlDemo: "",
    category: "data-analyst",
  },
  {
    id: 4,
    title: "Navigating Creative Ideas",
    image: "/image-4.jpg",
    description: "Creative design with integrated backend development",
    urlGithub: "",
    urlDemo: "",
    category: "development",
  },
  {
    id: 5,
    title: "Impactful Websites",
    image: "/image-5.jpg",
    description: "Data visualization with visual impact",
    urlGithub: "",
    urlDemo: "",
    category: "data-analyst",
  },
  {
    id: 6,
    title: "Dynamic Web Projects",
    image: "/image-6.jpg",
    description: "Dynamic, tailor-made solutions",
    urlGithub: "",
    urlDemo: "",
    category: "other",
  },
];

export const dataExperience = [
  {
    id: 1,
    title: "Backend Development 🔒🖥️🥷",
    experience: [
      {
        name: "Python (FastAPI)",
        value: 60,
      },
      {
        name: "Java",
        value: 60,
      },
      {
        name: "MySQL",
        value: 60,
      },
      {
        name: "OracleDB",
        value: 60,
      },
      {
        name: "PostgreSQL",
        value: 60,
      },
      {
        name: "Docker",
        value: 30,
      },
      {
        name: "Git",
        value: 60,
      },
      {
        name: "GitHub",
        value: 60,
      },
      {
        name: "Next.js",
        value: 20,
      },
      {
        name: "Node.js",
        value: 50,
      },
    ],
  },
  {
    id: 2,
    title: "Frontend Development 🎨🖌️🌐",
    experience: [
      {
        name: "HTML5",
        value: 70,
      },
      {
        name: "Tailwind CSS",
        value: 30,
      },
      {
        name: "Bootstrap",
        value: 30,
      },
      {
        name: "CSS3",
        value: 60,
      },
      {
        name: "React",
        value: 50,
      },
      {
        name: "Angular",
        value: 30,
      },
      {
        name: "TypeScript",
        value: 20,
      },
      {
        name: "C#",
        value: 30,
      },
      {
        name: ".NET (Blazor)",
        value: 30,
      },
      {
        name: "PHP",
        value: 20,
      },
    ],
  },

  {
    id: 3,
    title: "Data Analyst 📊📈📉",
    experience: [
      {
        name: "Power BI",
        value: 30,
      },
      {
        name: "Microsoft Excel",
        value: 65,
      },
      {
        name: "Tableau",
        value: 20,
      },
      {
        name: "Python(R)",
        value: 20,
      },
      {
        name: "Google Sheets",
        value: 50,
      },
      {
        name: "BigQuery",
        value: 20,
      },
      {
        name: "Looker Studio",
        value: 20,
      },
      {
        name: "Microsoft Access",
        value: 20,
      },
      {
        name: "LibreOffice Calc",
        value: 20,
      },
    ],
  },

  {
    id: 4,
    title: "Cloud & DevOps 🌐💻🧠",
    experience: [
      {
        name: "Microsoft Azure",
        value: 50,
      },
      {
        name: "Google Cloud (GCP)",
        value: 50,
      },
      {
        name: "Azure DevOps",
        value: 50,
      },
      {
        name: "AWS",
        value: 50,
      },
      {
        name: "Argo CD",
        value: 50,
      },
      {
        name: "Rancher",
        value: 50,
      },
      {
        name: "Terraform",
        value: 50,
      },
      {
        name: "Kubernetes",
        value: 40,
      },
    ],
  },

  {
    id: 5,
    title: "Automation & AI 🤖⚙️🧠",
    experience: [
      {
        name: "Apache Airflow",
        value: 60,
      },
      {
        name: "Selenium",
        value: 50,
      },
      {
        name: "Python Automation",
        value: 60,
      },
      {
        name: "LangChain",
        value: 30,
      },
      {
        name: "Power Automate",
        value: 20,
      },
    ],
  },

  {
    id: 6,
    title: "Electronics & Embedded Systems ⚡🔌🧠",
    experience: [
      {
        name: "C++",
        value: 70,
      },
      {
        name: "Assembly",
        value: 60,
      },
      {
        name: "MATLAB",
        value: 20,
      },
      {
        name: "Arduino",
        value: 100,
      },
      {
        name: "Proteus",
        value: 100,
      },
      {
        name: "CircuitMaker",
        value: 60,
      },
      {
        name: "STM32",
        value: 20,
      },
      {
        name: "Altium Designer",
        value: 20,
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
    subtitle: "github.com/Andress-Gutierrez",
    link: "https://github.com/Andress-Gutierrez",
    icon: <Code2 />,
  },
  {
    id: 3,
    title: "Email",
    subtitle: "andydrummer9221@gmail.com",
    link: "mailto:andydrummer9221@gmail.com",
    icon: <Inbox />,
  },
];
