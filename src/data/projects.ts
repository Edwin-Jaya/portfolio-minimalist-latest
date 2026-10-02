import type { Project } from "../types/Projects";

/**
 * Shared project catalog for the homepage and static case-study routes.
 * Keep outcomes and metrics aligned with evidence you can substantiate.
 */
export const projects: Project[] = [
  {
    slug: "socialabs",
    number: "01",
    title: "Socialabs",
    category: "AI PRODUCT · NLP",
    year: "2024",
    visualLabel: "SOCIALABS",
    description:
      "An X/Twitter analytics platform featuring topic modeling, network analysis, influencer discovery, sentiment and emotion analysis, and conversational exploration.",
    tags: ["Python", "NLP", "Topic Modeling", "Sentiment Analysis", "LLM"],
    outcome:
      "APICTA Awards 2024 finalist in Business Services & R&D, representing Indonesia. User research included 10 interviews and a reported 40% workflow improvement.",
    imageAlt: "Socialabs social media intelligence platform",
    image: "/images/projects/gallery/socialabs-dashboard.webp",
    imageWidth: 1600,
    imageHeight: 790,
    featured: true,
    gallery: [
      {
        src: "/images/projects/gallery/socialabs-dashboard.webp",
        alt: "Socialabs analytics dashboard with topic and network visualizations",
        width: 1600,
        height: 790,
      },
      {
        src: "/images/projects/gallery/socialabs-team.webp",
        alt: "Socialabs team at APICTA Brunei 2024",
        width: 1280,
        height: 720,
      },
    ],
    links: [
      { label: "Live demo", href: "https://sociatrack-demo.vercel.app/login", kind: "demo" },
      { label: "GitHub repository", href: "https://github.com/Edwin-Jaya/socialabs-topic-modeling-fe?tab=readme-ov-file", kind: "repository" },
      { label: "APICTA coverage", href: "https://www.linkedin.com/posts/unikombandung_apicta2024-unikom-unikomunggul-activity-7277141977870032896-jvgY/", kind: "coverage" },
      {
        label: "UNIKOM coverage",
        href: "https://unikom.ac.id/id/berita/tim-socialabs-unikom-berhasil-menjadi-finalis-apicta-2024",
        kind: "coverage",
      },
    ],
    caseStudy: {
      introduction:
        "An X/Twitter analytics platform designed to make social-media data easier to explore through NLP, network analysis, and conversational interaction.",
      overview:
        "Socialabs brings multiple forms of social-media analysis together, including topic modeling, network analysis, influencer discovery, sentiment and emotion analysis, and a chatbot for conversational exploration.",
      role: "AI Engineer Lead",
      focus: [
        {
          title: "Topic modeling",
          description:
            "Explore recurring topics in X/Twitter content to help make large collections of posts more interpretable.",
        },
        {
          title: "Network and influencer analysis",
          description:
            "Use network analysis and influencer discovery to explore relationships and identify influential accounts.",
        },
        {
          title: "Sentiment and emotion analysis",
          description:
            "Analyze the expressed sentiment and emotions in social-media content as part of the analytics experience.",
        },
        {
          title: "Conversational exploration",
          description:
            "A chatbot provides another way to explore social-media insights through natural-language interaction.",
        },
      ],
      metrics: [
        {
          value: "10",
          label: "User interviews",
          detail: "The project brief records 10 user interviews as part of its research.",
        },
        {
          value: "40%",
          label: "Reported workflow improvement",
          detail: "The portfolio records a 40% improvement; the measurement method should be documented alongside this figure when available.",
        },
        {
          value: "Finalist",
          label: "APICTA Awards 2024",
          detail: "Business Services & R&D category, representing Indonesia.",
        },
      ],
      outcome:
        "Socialabs reached the APICTA Awards 2024 final in Business Services & R&D. The project brief also records 10 user interviews and a reported 40% workflow improvement.",
    },
  },
  {
    slug: "doko",
    number: "02",
    title: "Doko",
    category: "COMPUTER VISION · VR",
    year: "2024",
    visualLabel: "DOKO",
    description:
      "An AI-assisted waste-classification project combining a deep learning model with a Unity-based interactive experience.",
    tags: ["Python", "Deep Learning", "ONNX", "Unity", "Computer Vision"],
    outcome:
      "Tested with over 300 children in Bandung; the project brief reports a 70% improvement in recycling skills and recognition among 14 Indonesian teams in the 2024 Google Solution Challenge.",
    imageAlt: "Doko AI waste classification project",
    image: "/images/projects/gallery/doko-learning.webp",
    imageWidth: 1400,
    imageHeight: 788,
    featured: true,
    gallery: [
      {
        src: "/images/projects/gallery/doko-app.webp",
        alt: "Doko mobile waste-learning experience",
        width: 414,
        height: 896,
      },
      {
        src: "/images/projects/gallery/doko-learning.webp",
        alt: "Doko waste-classification learning interface",
        width: 1400,
        height: 788,
      },
      {
        src: "/images/projects/gallery/doko-team.webp",
        alt: "Doko team collaborating during an online session",
        width: 1280,
        height: 720,
      },
    ],
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.UnikomCodelabs.Doko", kind: "demo" },
      {
        label: "Google Solution Challenge coverage",
        href: "https://blog.google/intl/id-id/company-news/outreach-initiatives/ayo-semangati-14-developer-muda-indonesia-menuju-final-solution-challenge/",
        kind: "coverage",
      },
    ],
    caseStudy: {
      introduction:
        "An AI-assisted waste-classification project that pairs a deep learning model with a Unity-based interactive experience.",
      overview:
        "Doko combines computer vision-based waste classification with an interactive Unity experience. The project is presented as an educational application focused on recycling and waste sorting.",
      focus: [
        {
          title: "Waste classification",
          description:
            "A deep learning model supports AI-assisted classification of waste items.",
        },
        {
          title: "Model integration",
          description:
            "ONNX is included in the technology stack for model integration.",
        },
        {
          title: "Interactive learning",
          description:
            "Unity provides the interactive experience around the waste-classification concept.",
        },
      ],
      metrics: [
        {
          value: "300+",
          label: "Children involved in testing",
          detail: "The project brief reports testing with more than 300 children in Bandung.",
        },
        {
          value: "70%",
          label: "Reported skill improvement",
          detail: "The project brief reports a 70% improvement in recycling skills.",
        },
        {
          value: "14 teams",
          label: "Indonesian representation",
          detail: "The project was associated with the 2024 Google Solution Challenge and the group of 14 Indonesian teams.",
        },
      ],
      outcome:
        "The project brief records testing with more than 300 children in Bandung and a reported 70% improvement in recycling skills. It also notes recognition among 14 Indonesian teams in the 2024 Google Solution Challenge. Evaluation details should be linked where available.",
    },
  },
  {
    slug: "educlassai",
    number: "03",
    title: "EduClassAI",
    category: "AI PRODUCT · FULL-STACK DEVELOPMENT",
    year: "2024",
    visualLabel: "EduClassAI",
    description:
      "An AI-powered Learning Management System (LMS) with AI-generated quizzes and RAG-based question answering.",
    tags: ["Python", "LLM", "NLP", "RAG"],
    outcome:
      "Funded through PKM-KI 2024 by the Indonesian Government and adopted by 3+ universities in Bandung.",
    imageAlt: "EduClassAI AI-powered learning management system",
    image: "/images/projects/edu-logo.webp",
    imageWidth: 1903,
    imageHeight: 944,
    featured: true,
    gallery: [
      {
        src: "/images/projects/gallery/educlass-workshop.webp",
        alt: "EduClassAI project discussion and demonstration",
        width: 1280,
        height: 720,
      },
      {
        src: "/images/projects/gallery/educlass-presentation.webp",
        alt: "EduClassAI presentation showing the learning platform concept",
        width: 1600,
        height: 900,
      },
    ],
    href: "https://educlass.framer.ai/",
    links: [
      { label: "Project website", href: "https://educlass.framer.ai/", kind: "demo" },
      { label: "UNIKOM achievement record", href: "https://prestasi.unikom.ac.id/view/575", kind: "coverage" },
    ],
    caseStudy: {
      introduction:
        "An AI-powered learning management system that combines quiz generation and retrieval-augmented question answering to support learning activities.",
      overview:
        "EduClassAI is an AI-powered LMS with AI-generated quizzes and RAG-based question answering. The project received PKM-KI 2024 funding and, according to the current portfolio, was adopted by more than three universities in Bandung.",
      role: "PKM-KI project team lead",
      focus: [
        {
          title: "Learning management",
          description:
            "The project is organized around an AI-powered Learning Management System.",
        },
        {
          title: "AI-generated quizzes",
          description:
            "AI-assisted quiz generation is included to support learning and assessment activities.",
        },
        {
          title: "RAG-based question answering",
          description:
            "Retrieval-augmented generation supports question answering within the learning platform.",
        },
      ],
      metrics: [
        {
          value: "Up to IDR 10M",
          label: "PKM-KI 2024 funding",
          detail: "Government-backed program funding recorded in the portfolio.",
        },
        {
          value: "3+",
          label: "Universities in Bandung",
          detail: "The portfolio records adoption by more than three universities.",
        },
      ],
      outcome:
        "EduClassAI received PKM-KI 2024 funding of up to IDR 10 million and was adopted by more than three universities in Bandung, as recorded in the current portfolio.",
    },
  },
  {
    slug: "rag-pdf-qa",
    number: "04",
    title: "RAG-Powered PDF QA System",
    category: "GENERATIVE AI",
    year: "2025",
    visualLabel: "RAG / PDF",
    description:
      "A document question-answering system combining vector retrieval and language models to provide context-grounded responses from PDF files.",
    tags: ["Python", "RAG", "Qdrant", "LM Studio", "Streamlit"],
    outcome:
      "Explores local LLM inference and vector search for document-based question answering.",
    href: "https://rag-powered-pdf-app.streamlit.app/",
    imageAlt: "RAG-powered PDF question-answering system interface",
    image: "/images/projects/RAG-powered.webp",
    imageWidth: 1920,
    imageHeight: 912,
    featured: true,
    links: [
      { label: "Live demo", href: "https://rag-powered-pdf-app.streamlit.app/", kind: "demo" },
    ],
    caseStudy: {
      introduction:
        "A document question-answering prototype that combines retrieval with language-model generation to answer questions using PDF content as context.",
      overview:
        "The RAG-Powered PDF QA System explores how users can ask questions about PDF documents and receive responses grounded in retrieved document context. It brings together a retrieval workflow, vector search, and language-model inference.",
      focus: [
        {
          title: "Document question answering",
          description:
            "The application centers on asking questions about uploaded PDF content instead of relying only on general model knowledge.",
        },
        {
          title: "Retrieval",
          description:
            "Qdrant is used as the vector-search component in the retrieval-augmented generation workflow.",
        },
        {
          title: "Grounded generation",
          description:
            "Retrieved context is combined with language-model generation to support document-grounded responses.",
        },
        {
          title: "Local model exploration",
          description:
            "LM Studio and Streamlit are part of the project stack for local inference and the application interface.",
        },
      ],
      outcome:
        "The prototype demonstrates a document-based Q&A workflow using retrieval and local model inference. Quantitative answer-quality or latency results are not specified in the current project brief.",
    },
  },
  {
    slug: "bekal",
    number: "05",
    title: "Bekal",
    category: "FULL-STACK DEVELOPMENT",
    year: "2026",
    visualLabel: "BEKAL",
    description:
      "A loan application platform developed during a full-stack bootcamp. My work spans UI design, frontend and backend development, Android development, testing, and CI/CD deployment.",
    tags: ["Angular", "Spring Boot", "Android", "REST API", "Testing", "CI/CD"],
    outcome:
      "End-to-end development experience, from system design and implementation to testing and deployment.",
    href: "https://bekal-tau.vercel.app/",
    imageAlt: "Bekal loan application platform interface",
    image: "/images/projects/bekal.webp",
    imageWidth: 1918,
    imageHeight: 905,
    featured: true,
    links: [
      { label: "Live application", href: "https://bekal-tau.vercel.app/", kind: "demo" },
    ],
    caseStudy: {
      introduction:
        "A loan application platform explored through end-to-end product development, connecting interface work with web, mobile, testing, and deployment tasks.",
      overview:
        "Bekal is a loan application platform developed during a full-stack bootcamp. The project spans multiple parts of an application, providing an opportunity to work across the product lifecycle rather than focusing on a single layer.",
      role: "End-to-end development across UI, web, Android, testing, and deployment",
      focus: [
        {
          title: "Interface design",
          description:
            "UI design for a loan application experience, with attention to presenting the application flow clearly.",
        },
        {
          title: "Web application",
          description:
            "Frontend development with Angular and backend development with Spring Boot, connected through REST APIs.",
        },
        {
          title: "Android development",
          description:
            "Android development as part of the broader loan application project scope.",
        },
        {
          title: "Quality and delivery",
          description:
            "Testing and CI/CD deployment were included in the end-to-end development work.",
        },
      ],
      outcome:
        "The project provided hands-on experience across design, implementation, testing, and deployment. Detailed usage or performance metrics are not included in the current project brief.",
    },
  },
  {
    slug: "wisdom-paws",
    number: "06",
    title: "Wisdom Paws",
    category: "AI · COMPUTER VISION",
    year: "2024",
    visualLabel: "WISDOM PAWS",
    description:
      "An interactive AI virtual pet combining hand-gesture recognition and AI-generated responses to explore natural interactions with intelligent applications.",
    tags: ["Python", "MediaPipe", "Computer Vision", "LLM"],
    outcome:
      "Combines visual gesture interaction and conversational AI in an interactive experience.",
    href: "https://edwin-jaya.github.io/WisdomPaws/",
    imageAlt: "Wisdom Paws interactive AI virtual pet",
    image: "/images/projects/wisdom-paws.webp",
    imageWidth: 1920,
    imageHeight: 912,
    links: [
      { label: "Live demo", href: "https://edwin-jaya.github.io/WisdomPaws/", kind: "demo" },
      { label: "GitHub repository", href: "https://github.com/Edwin-Jaya/WisdomPaws", kind: "repository" },
    ],
    caseStudy: {
      introduction:
        "An interactive virtual pet that brings together hand-gesture recognition and AI-generated responses to explore more natural ways of interacting with an application.",
      overview:
        "Wisdom Paws combines computer vision and conversational AI in an interactive virtual-pet experience. Hand gestures provide a visual interaction channel, while an LLM supports AI-generated responses.",
      focus: [
        {
          title: "Gesture interaction",
          description:
            "MediaPipe supports hand-gesture recognition as an input for interacting with the virtual pet.",
        },
        {
          title: "Conversational AI",
          description:
            "An LLM is used to generate responses within the interactive experience.",
        },
        {
          title: "Integrated experience",
          description:
            "The project combines visual input and generated responses to explore an alternative interaction model for an intelligent application.",
        },
      ],
      outcome:
        "The result is an interactive concept that brings computer vision and language-model capabilities into one virtual-pet experience. A formal evaluation or user study is not specified in the current project brief.",
    },
  },
  {
    slug: "telkomsel-dsw-dashboard",
    number: "07",
    title: "Telkomsel DSW Customer Churn Dashboard",
    category: "DATA SCIENCE · ANALYTICS",
    year: "2024",
    visualLabel: "DSW DASHBOARD",
    description:
      "A customer segmentation and churn-analysis dashboard developed using RFM analysis and K-Means, presented at Data Science Weekend.",
    tags: ["Python", "RFM Analysis", "K-Means", "Customer Segmentation", "Dashboard"],
    outcome:
      "The project led to an invitation to present the dashboard at Telkomsel in South Jakarta.",
    imageAlt: "Customer segmentation and churn analytics dashboard",
    image: "/images/projects/gallery/dsw-dashboard.webp",
    imageWidth: 1400,
    imageHeight: 695,
    gallery: [
      {
        src: "/images/projects/gallery/dsw-dashboard.webp",
        alt: "Customer churn dashboard with segmentation and geographic visualizations",
        width: 1400,
        height: 696,
      },
      {
        src: "/images/projects/gallery/dsw-presentation.webp",
        alt: "Data Science Weekend presentation at Telkomsel",
        width: 1400,
        height: 1050,
      },
    ],
    links: [
      { label: "Live dashboard", href: "https://rungkad-team.github.io/RFM-and-Kmeans-for-Customer-Segmentation-Project/dashboard/", kind: "demo" },
      { label: "GitHub repository", href: "https://github.com/Rungkad-Team/RFM-and-Kmeans-for-Customer-Segmentation-Project", kind: "repository" },
    ],
    caseStudy: {
      introduction:
        "A customer churn and segmentation dashboard built around RFM analysis and K-Means clustering for Data Science Weekend.",
      overview:
        "The project explores customer segmentation and churn-related insights through an interactive dashboard using RFM analysis and K-Means. It was developed for Data Science Weekend and later presented at Telkomsel in South Jakarta.",
      focus: [
        {
          title: "Customer segmentation",
          description:
            "RFM analysis and K-Means were used as the basis for grouping customer behavior patterns.",
        },
        {
          title: "Churn exploration",
          description:
            "The dashboard presents customer analytics intended to support exploration of churn-related patterns.",
        },
        {
          title: "Interactive reporting",
          description:
            "A dashboard provides a visual interface for reviewing the analysis and communicating findings.",
        },
      ],
      outcome:
        "The project enabled the team to present customer analytics at Telkomsel. No quantified business impact is claimed here.",
    },
  },
  {
    slug: "parkhere",
    number: "08",
    title: "ParkHere",
    category: "AI PRODUCT · SMART PARKING",
    year: "2025",
    visualLabel: "ParkHere",
    description:
      "A smart parking solution combining AI, IoT, and YOLO technology, with booking, AI-based detection, and IoT sensors to simplify parking.",
    tags: ["Python", "Computer Vision", "Deep Learning", "YOLO", "IoT"],
    outcome:
      "Prototype testing at Universitas Komputer Indonesia reported reduced parking congestion and waiting times.",
    imageAlt: "ParkHere AI and IoT smart parking solution",
    image: "/images/projects/ph-logo.webp",
    imageWidth: 1863,
    imageHeight: 888,
    gallery: [
      {
        src: "/images/projects/gallery/parkhere-dashboard.webp",
        alt: "ParkHere smart parking booking and dashboard interface",
        width: 1400,
        height: 692,
      },
      {
        src: "/images/projects/gallery/parkhere-detection.webp",
        alt: "ParkHere parking-space detection interface",
        width: 1400,
        height: 692,
      },
    ],
    links: [
      { label: "GitHub repository", href: "https://github.com/Paguyuban-Cogil-Bandung/ParkHere", kind: "repository" },
    ],
    caseStudy: {
      introduction:
        "A smart parking concept combining booking, computer vision, and IoT sensors to simplify the parking experience.",
      overview:
        "ParkHere combines AI-based vehicle detection using YOLO with IoT sensors and parking-booking functionality. Its stated objective is to make parking more convenient and reduce queues.",
      focus: [
        {
          title: "Parking booking",
          description:
            "Booking is part of the proposed smart-parking experience.",
        },
        {
          title: "AI-based detection",
          description:
            "YOLO-based computer vision supports the vehicle-detection component.",
        },
        {
          title: "IoT sensing",
          description:
            "IoT sensors complement the detection capability in the parking solution.",
        },
      ],
      outcome:
        "The portfolio reports reduced congestion and waiting times during prototype testing at Universitas Komputer Indonesia. No numerical performance measurements are included in the current project brief.",
    },
  },
];

export function getProjectCaseStudyUrl(slug: string): string {
  return `/projects/${slug}/`;
}
