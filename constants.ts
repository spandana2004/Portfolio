
import { Experience, Project, Publication, SkillCategory, Achievement, Certification } from './types';

export const EXPERIENCES: Experience[] = [
  {
    company: "Deputy Director's Office, Bangalore South, Karanata PU Board",
    role: "Software Engineering Intern",
    period: "July 2025 – Jan 2026",
    location: "Bengaluru, Karnataka",
    bullets: [
      "Developing 'INSIGHT', a robust data management and communication system for the Bangalore South Pre-University Colleges Principals’ Association.",
      "Unified digital communication and workflow system connecting DDPU and 400+ colleges on a single secure platform.",
      "Features include info exchange, chat interface, circular page, and infrastructure tracking."
    ],
    link: "https://ddpusouth.co.in/"
  },
  {
    company: "IIT Madras (CoPhe Lab)",
    role: "Project Intern",
    period: "July 2024 – Dec 2024",
    location: "Chennai, Tamil Nadu",
    bullets: [
      "Developed a dual-policy Reinforcement Learning framework for a bio-inspired autonomous navigation agent.",
      "Implemented novel navigation strategies inspired by dung beetles and simulated complex environments on MUJOCO."
    ],
    link: "https://github.com/spandana2004/Bio-inspired-Robotics"
  },
  {
    company: "Sasken Technologies Limited",
    role: "Intern",
    period: "Jun 2025 – July 2025",
    location: "Bengaluru, Karnataka",
    bullets: [
      "Developed TechQABot - A Tech Community QA Bot using agentic and generative AI concepts.",
      "Trained on data from Stack Overflow and Reddit to answer Python programming queries."
    ],
    link: "https://github.com/spandana2004/TechQABot"
  },
  {
    company: "Appzera (OPC) Private Ltd.",
    role: "AI Intern",
    period: "April 2025 – Jun 2025",
    location: "Bengaluru, Karnataka",
    bullets: [
      "Developed a RAG-based chatbot for humanized university recommendation responses.",
      "Built systems to analyze user intentions and suggest universities based on courses, fees, and scholarships."
    ]
  },
  {
    company: "U R Rao Satellite Center - ISRO",
    role: "Intern",
    period: "Jan 2025 – Mar 2025",
    location: "Bengaluru, Karnataka",
    bullets: [
      "Researched quantum algorithms for phase estimation; developed a comparative study between classical and quantum methods.",
      "Developed 'Shakers' Android app for real-time payload testing identification at the Vibration lab."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "GreenLoop",
    description: "GreenLoop is a Smart Cloud based AI powered waste reporting and management system. GreenLoop addresses the inefficiencies in waste management by utilizing advanced technologies to streamline reporting, enhance tracking, and facilitate communication between residents and waste management authorities.",
    tags: ["Cloud", "AI", "Sustainability"],
    link: "https://cloudproject-xw8tqqs7x6t2jnyw2ug87l.streamlit.app/",
    image: "/projects/green_loop.png"
  },
  {
    title: "Predicting Problematic Internet Usage in Youth",
    description: "Developed a predictive framework for detecting problematic internet use. Utilized multimodal physical activity data from the Healthy Brain Network dataset. Modelled the Severity Impairment Index using advanced deep learning techniques and customized neural network. Work registered for copyright.",
    tags: ["Predictive Analytics", "HealthTech", "Python"],
    link: "https://drive.google.com/file/d/1L1rfOmepOQGuzSfoAz6Xsuz3x3YGY7jh/view",
    image: "/projects/problematic_internet.jpg"
  },
  {
    title: "Verbal Ability Grading System",
    description: "Designed an AI-driven assessment tool for evaluating verbal communication skills using speech input. Implemented modules for speech recognition, text/audio analysis, scoring, and feedback generation to provide graded performance reports.",
    tags: ["Speech AI", "NLP", "Python", "Grading System"],
    github: "https://github.com/spandana2004/Verbal-Ability-Grading-System",
    image: "/projects/verbal_ability.jpg"
  },
  {
    title: "Fake Video Detection (DL)",
    description: "Deep Learning based system to identify manipulated video content (deepfakes) using advanced spatial-temporal feature analysis and convolutional neural networks.",
    tags: ["Deep Learning", "Computer Vision", "Security"],
    github: "https://github.com/spandana2004/Computer-Vision-Projects/tree/main/Deep-Fake-Video-Detection",
    image: "/projects/fake_video.jpg"
  },
  {
    title: "Campus Placement Patterns",
    description: "Applied ML algorithms to analyze placement data and generate career insights. Published in IJEME journal.",
    tags: ["ML", "Data Analysis", "Python"],
    github: "https://github.com/spandana2004/SBSPS-Challenge-10196-1690824000",
    image: "/projects/campus_placement.jpg"
  },
  {
    title: "Proactive Dropout Mitigation",
    description: "Full-stack Student Management System with 94% accuracy in identifying potential dropouts. Presented at IITCEE.",
    tags: ["Full Stack", "Predictive Modeling", "Education"],
    github: "https://github.com/spandana2004/Proactive-Dropout-Mitigation-of-School-Students",
    image: "/projects/school_drop.jpg"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "AI/ML & Data Science",
    items: ["Gen-AI", "Machine Learning", "Deep Learning", "NLP", "TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy", "RL"]
  },
  {
    category: "Programming",
    items: ["Python", "Java", "C"]
  },
  {
    category: "Web & Database",
    items: ["MySQL", "MongoDB", "Streamlit", "React", "Node.js"]
  },
  {
    category: "Core Computer Science",
    items: ["Data Structures", "Algorithms", "Quantum Computing Foundations"]
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    title: "NetAware: Activity-Based Prediction of Internet Misuse",
    description: "Registered under Indian Copyright (ROC).",
    year: "2025",
    doi: "SW-17842/2025"
  },
  {
    title: "Multi-Modal Data Exploration and Analysis for Predicting Severity Impairment Index Using Actigraphy and Behavioral Metrics",
    description: "ICCTDC-2025, Hassan, India, pp. 1-5.",
    year: "2025",
    doi: "10.1109/ICCTDC64446.2025.11158835"
  },
  {
    title: "Identifying Patterns and Trends in Campus Placement Data Using Machine Learning",
    description: "International Journal of Education and Management Engineering (IJEME), Vol.15, No.1, pp. 10-24.",
    year: "2025",
    doi: "10.5815/ijeme.2025.01.02"
  },
  {
    title: "Soft Alert Generation for Student Dropout Mitigation and Proactive Management by Machine Learning Algorithm",
    description: "Presented at IITCEE - Jan 16, 2025.",
    year: "2025",
    doi: "10.1109/IITCEE64140.2025.10915221"
  },
  {
    title: "A Survey on the Usage of Numerous ML Models for Agriculture",
    description: "Presented at IITCEE - Mar 20, 2024.",
    year: "2024",
    doi: "10.1109/IITCEE.2024.10821"
  },
  {
    title: "Real-time Structural Health Monitoring System using IOT",
    description: "Book: Futuristic Trends in IOT, IIP Series.",
    year: "2024",
    doi: "(e-ISBN) 978-93-6252-126-2"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Finalist - Matrix Forum",
    org: "TiE Global Summit",
    date: "2024",
    description: "Shortlisted as a finalist for innovative problem-solving in the prestigious global summit."
  },
  {
    title: "Runner-up - AI Hackathon",
    org: "Pantech e Learning",
    date: "2024",
    description: "Project titled 'Cervical Cancer Prediction' using AI models."
  },
  {
    title: "Runner-up - IEEE Project Competition",
    org: "IEEE Bangalore Section",
    date: "2024",
    description: "Recognized for 'Proactive Dropout Mitigation' system among 100+ competing technical projects."
  },
  {
    title: "Merit Scholarship Recipient",
    org: "BNMIT",
    date: "2022",
    description: "Awarded for consistent academic excellence and maintaining high academic standards."
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Ai Business Intelligence Analyst",
    issuer: "NCVET, MSDE, Govt. of India",
    link: "https://drive.google.com/file/d/1FZ3k8lEpNwukic1K6LA5Edr8UJzarXVo/view"
  },
  {
    name: "Machine Learning for Engineering and Science Applications",
    issuer: "NPTEL (IITM)",
    link: "https://drive.google.com/file/d/1Uc7sO2H7lMH5Tydj_cP4_sMuBGp154pi/view"
  },
  {
    name: "Android Application Development",
    issuer: "Great Learning",
    link: "https://drive.google.com/file/d/1AjaELiJhEefB3_RoFa4jRTbJH01iOuML/view"
  },
  {
    name: "The Complete Prompt Engineering for AI Bootcamp (2025)",
    issuer: "Udemy",
    link: "https://drive.google.com/file/d/1rv97DDiYwgS4aAV9168TFwz-ETd5ufEx/view?usp=sharing"
  },
  {
    name: "Java Servlet Basics and JSP 101",
    issuer: "Simplilearn",
    link: "https://drive.google.com/file/d/1UiZ_KTIQZzvWJsSHpyK-9uawPZSDcLz-/view"
  },
  {
    name: "Artificial Intelligence for Economics",
    issuer: "NPTEL (IITK)",
    link: "https://drive.google.com/file/d/1rOHuKDIbH-Yc7Xl4PNM93TwOEw_BdG0H/view?usp=drive_link"
  }
];

export const EDUCATION_HISTORY = [
  {
    school: "B N M Institute of Technology",
    degree: "B.E in Computer Science & Engineering",
    period: "Present",
    location: "Bengaluru, Karnataka",
    details: "9.63 CGPA"
  },
  {
    school: "Deeksha C F L PU College",
    degree: "Pre-University (PCMC)",
    period: "2020 – 2022",
    location: "Bengaluru, Karnataka",
    details: "94.5%"
  },
  {
    school: "S J R Kengeri Public School",
    degree: "10th Board in ICSE",
    period: "2008 – 2020",
    location: "Bengaluru, Karnataka",
    details: "95%"
  }
];
