import React, { useState } from 'react';
import { Shield, Cloud, Code, Smartphone, Database, Wifi, Monitor, Settings, Zap, Globe, Bot, Lock, BarChart, Server, Brain, Key, Briefcase, Workflow, FileText, Cpu, Package, Users } from 'lucide-react';

// IT Services Data
const itServicesData = [
  {
    id: 1,
    title: "Cybersecurity Solutions",
    description: "Comprehensive security solutions to protect your business from cyber threats and data breaches.",
    icon: Shield,
    image: "/images/services/2.jpg",
    category: "Security",
    type: "Enterprise",
    complexity: "Advanced",
    duration: "Long-term",
    price: "Starting from $299/month",
    benefits: [
      "24/7 threat monitoring and detection",
      "Advanced firewall and intrusion prevention",
      "Employee security training programs",
      "Compliance with industry standards",
      "Incident response and recovery planning"
    ],
    features: [
      "Multi-layered security architecture",
      "Real-time threat intelligence",
      "Vulnerability assessments",
      "Security policy development",
      "Regular security audits"
    ],
    deliverables: [
      "Security assessment report",
      "Custom security policies",
      "Employee training materials",
      "24/7 monitoring dashboard",
      "Incident response plan"
    ]
  },
  {
    id: 2,
    title: "Cloud Migration Services",
    description: "Seamlessly migrate your infrastructure to the cloud with minimal downtime and maximum efficiency.",
    icon: Cloud,
    image: "/images/services/3.jpg",
    category: "Cloud",
    type: "Enterprise",
    complexity: "Advanced",
    duration: "Medium-term",
    price: "Starting from $499/month",
    benefits: [
      "Reduced infrastructure costs by up to 40%",
      "Improved scalability and flexibility",
      "Enhanced data backup and recovery",
      "Global accessibility and collaboration",
      "Automatic software updates and maintenance"
    ],
    features: [
      "Multi-cloud platform support",
      "Zero-downtime migration strategy",
      "Data encryption in transit and at rest",
      "Cost optimization analysis",
      "Performance monitoring tools"
    ],
    deliverables: [
      "Migration roadmap and timeline",
      "Cloud architecture design",
      "Data migration reports",
      "Performance benchmarks",
      "Training documentation"
    ]
  },
  {
    id: 3,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet your specific business requirements and goals.",
    icon: Code,
    category: "Development",
    image: "/images/services/4.jpg",
    type: "Custom",
    complexity: "Advanced",
    duration: "Long-term",
    price: "Starting from $5,000/project",
    benefits: [
      "Fully customized to your business needs",
      "Scalable architecture for future growth",
      "Integration with existing systems",
      "Ongoing support and maintenance",
      "Competitive advantage through innovation"
    ],
    features: [
      "Full-stack development capabilities",
      "Agile development methodology",
      "Quality assurance and testing",
      "API development and integration",
      "Cross-platform compatibility"
    ],
    deliverables: [
      "Project requirements document",
      "Technical specifications",
      "Source code and documentation",
      "User training and manuals",
      "Ongoing support package"
    ]
  },
  {
    id: 4,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android with exceptional user experience.",
    icon: Smartphone,
    category: "Mobile",
    type: "Custom",
    complexity: "Intermediate",
    duration: "Medium-term",
    price: "Starting from $8,000/project",
    image: "/images/services/4.jpg",
    benefits: [
      "Native performance on all platforms",
      "Intuitive and engaging user interface",
      "App store optimization included",
      "Push notification capabilities",
      "Offline functionality support"
    ],
    features: [
      "iOS and Android development",
      "React Native and Flutter expertise",
      "Backend API development",
      "Third-party integrations",
      "App analytics and monitoring"
    ],
    deliverables: [
      "App design mockups and prototypes",
      "Source code for both platforms",
      "App store submission assistance",
      "User guide and documentation",
      "Post-launch support package"
    ]
  },
  {
    id: 5,
    title: "Database Management",
    description: "Professional database design, optimization, and management services for optimal performance.",
    icon: Database,
    image: "/images/services/1.jpg",
    category: "Database",
    type: "Standard",
    complexity: "Intermediate",
    duration: "Long-term",
    price: "Starting from $399/month",
    benefits: [
      "Improved query performance by up to 60%",
      "Automated backup and recovery systems",
      "Data integrity and consistency assurance",
      "Scalable database architecture",
      "24/7 monitoring and maintenance"
    ],
    features: [
      "Database design and optimization",
      "Performance tuning and indexing",
      "Data migration services",
      "Backup and disaster recovery",
      "Security and access control"
    ],
    deliverables: [
      "Database architecture documentation",
      "Performance optimization reports",
      "Backup and recovery procedures",
      "Security audit reports",
      "Monitoring dashboard setup"
    ]
  },
  {
    id: 6,
    title: "Network Infrastructure",
    description: "Complete network setup, configuration, and management for reliable and secure connectivity.",
    icon: Wifi,
    category: "Infrastructure",

    type: "Enterprise",
     image: "/images/services/8.png",
    complexity: "Advanced",
    duration: "Long-term",
    price: "Starting from $599/month",
    benefits: [
      "High-speed and reliable connectivity",
      "Secure network architecture",
      "Redundancy and failover protection",
      "Remote access capabilities",
      "Network monitoring and analytics"
    ],
    features: [
      "Network design and implementation",
      "Firewall and security configuration",
      "Wireless network setup",
      "VPN and remote access solutions",
      "Network performance optimization"
    ],
    deliverables: [
      "Network topology diagram",
      "Configuration documentation",
      "Security policy implementation",
      "Performance monitoring setup",
      "User access management"
    ]
  },
  {
    id: 7,
    title: "IT Support & Helpdesk",
    description: "Comprehensive IT support services with dedicated helpdesk for all your technical needs.",
    icon: Settings,
     image: "/images/services/9.png",
    category: "Support",
    type: "Standard",
    complexity: "Basic",
    duration: "Long-term",
    price: "Starting from $199/month",
    benefits: [
      "24/7 technical support availability",
      "Quick response times under 2 hours",
      "Remote and on-site support options",
      "Proactive system monitoring",
      "Cost-effective IT maintenance"
    ],
    features: [
      "Multi-channel support (phone, email, chat)",
      "Ticket management system",
      "Remote desktop assistance",
      "Hardware and software troubleshooting",
      "Preventive maintenance schedules"
    ],
    deliverables: [
      "Support portal access",
      "Service level agreement (SLA)",
      "Monthly performance reports",
      "Knowledge base documentation",
      "Emergency contact procedures"
    ]
  },
  {
    id: 8,
    title: "Web Development",
    description: "Modern, responsive websites and web applications built with cutting-edge technologies.",
    icon: Globe,
    category: "Web",
     image: "/images/services/5.jpg",
    type: "Custom",
    complexity: "Intermediate",
    duration: "Short-term",
    price: "Starting from $2,500/project",
    benefits: [
      "Mobile-responsive design",
      "Search engine optimization ready",
      "Fast loading times and performance",
      "Content management system integration",
      "E-commerce capabilities available"
    ],
    features: [
      "Custom web design and development",
      "CMS integration (WordPress, Drupal)",
      "E-commerce platform development",
      "API integration and development",
      "Performance optimization"
    ],
    deliverables: [
      "Website design mockups",
      "Fully functional website",
      "Content management training",
      "SEO optimization report",
      "Maintenance and hosting options"
    ]
  },
  {
    id: 9,
    title: "Data Analytics & BI",
    description: "Transform your data into actionable insights with advanced analytics and business intelligence solutions.",
    icon: Monitor,
    category: "Analytics",
    type: "Enterprise",
    complexity: "Advanced",
     image: "/images/services/10.png",
    duration: "Medium-term",
    price: "Starting from $799/month",
    benefits: [
      "Data-driven decision making capabilities",
      "Real-time business intelligence dashboards",
      "Predictive analytics and forecasting",
      "Automated reporting systems",
      "Integration with existing data sources"
    ],
    features: [
      "Custom dashboard development",
      "Data warehouse design",
      "ETL process automation",
      "Machine learning integration",
      "Multi-source data integration"
    ],
    deliverables: [
      "BI dashboard and reports",
      "Data architecture documentation",
      "Analytics training materials",
      "Performance KPI definitions",
      "Ongoing analytics support"
    ]
  },
  {
    id: 10,
    title: "DevOps & Automation",
     image: "/images/services/11.png",
    description: "Streamline your development and operations with automated CI/CD pipelines and infrastructure as code.",
    icon: Zap,
    category: "DevOps",
    type: "Enterprise",
    complexity: "Advanced",
    duration: "Medium-term",
    price: "Starting from $699/month",
    benefits: [
      "Faster deployment cycles",
      "Reduced manual errors and downtime",
      "Improved collaboration between teams",
      "Scalable infrastructure management",
      "Cost optimization through automation"
    ],
    features: [
      "CI/CD pipeline setup",
      "Container orchestration",
      "Infrastructure as Code (IaC)",
      "Monitoring and alerting systems",
      "Automated testing frameworks"
    ],
    deliverables: [
      "Automated deployment pipelines",
      "Infrastructure monitoring setup",
      "DevOps best practices guide",
      "Team training and documentation",
      "Performance optimization reports"
    ]
  },
   {
    id: 11,
    title: "Artificial Intelligence Solutions",
    description: "Leverage AI to automate processes, enhance decision-making, and unlock new business opportunities.",
    icon: Brain,
    image: "/images/services/ai.jpg",
    category: "AI",
    type: "Enterprise",
    complexity: "Advanced",
    duration: "Long-term",
    price: "Starting from $999/month",
    benefits: [
      "Automated workflows for efficiency",
      "Data-driven insights with AI models",
      "Scalable AI infrastructure",
      "Enhanced customer experiences",
      "Competitive advantage through innovation"
    ],
    features: [
      "Custom AI model development",
      "Machine learning pipeline setup",
      "Natural language processing",
      "AI integration with existing systems",
      "Real-time AI analytics"
    ],
    deliverables: [
      "AI model architecture",
      "Training and deployment reports",
      "Custom AI dashboards",
      "Integration documentation",
      "Staff training on AI tools"
    ]
  },
  {
    id: 12,
    title: "Blockchain Development",
    description: "Build secure, decentralized applications and smart contracts for transparent business operations.",
    icon: Key,
    image: "/images/services/blockchain.jpg",
    category: "Blockchain",
    type: "Custom",
    complexity: "Advanced",
    duration: "Medium-term",
    price: "Starting from $6,000/project",
    benefits: [
      "Enhanced security and transparency",
      "Immutable transaction records",
      "Cost-effective transaction processing",
      "Decentralized data management",
      "Support for multiple blockchain platforms"
    ],
    features: [
      "Smart contract development",
      "Blockchain network setup",
      "Integration with Ethereum, Solana, etc.",
      "Wallet and identity management",
      "Security auditing for smart contracts"
    ],
    deliverables: [
      "Blockchain architecture design",
      "Smart contract code",
      "Integration documentation",
      "Security audit reports",
      "User training materials"
    ]
  },
  {
    id: 13,
    title: "IT Consulting Services",
    description: "Strategic IT consulting to align technology with your business goals and optimize operations.",
    icon: Briefcase,
    image: "/images/services/consulting.jpg",
    category: "Consulting",
    type: "Standard",
    complexity: "Intermediate",
    duration: "Short-term",
    price: "Starting from $1,500/project",
    benefits: [
      "Aligned IT and business strategies",
      "Cost optimization recommendations",
      "Improved operational efficiency",
      "Risk assessment and mitigation",
      "Expert guidance for IT transformation"
    ],
    features: [
      "IT strategy development",
      "Technology stack evaluation",
      "Digital transformation planning",
      "Risk and compliance assessments",
      "Vendor selection support"
    ],
    deliverables: [
      "IT strategy roadmap",
      "Technology assessment report",
      "Transformation plan",
      "Risk management guidelines",
      "Vendor selection criteria"
    ]
  },
  {
    id: 14,
    title: "Machine Learning Operations (MLOps)",
    description: "Streamline machine learning model deployment and management for scalable AI solutions.",
    icon: Workflow,
    image: "/images/services/mlops.jpg",
    category: "AI",
    type: "Enterprise",
    complexity: "Advanced",
    duration: "Long-term",
    price: "Starting from $799/month",
    benefits: [
      "Faster ML model deployment",
      "Automated model monitoring",
      "Scalable ML infrastructure",
      "Reduced operational costs",
      "Continuous model improvement"
    ],
    features: [
      "ML pipeline automation",
      "Model monitoring and retraining",
      "Cloud-based ML infrastructure",
      "Version control for ML models",
      "Integration with CI/CD pipelines"
    ],
    deliverables: [
      "MLOps pipeline architecture",
      "Model performance reports",
      "Monitoring dashboards",
      "Integration documentation",
      "Training for MLOps workflows"
    ]
  },
  {
    id: 15,
    title: "IT Compliance & Governance",
    description: "Ensure regulatory compliance and robust IT governance with tailored compliance solutions.",
    icon: FileText,
    image: "/images/services/compliance.jpg",
    category: "Compliance",
    type: "Enterprise",
    complexity: "Intermediate",
    duration: "Long-term",
    price: "Starting from $499/month",
    benefits: [
      "Compliance with GDPR, HIPAA, etc.",
      "Reduced risk of penalties",
      "Standardized IT governance policies",
      "Enhanced data protection",
      "Auditable compliance processes"
    ],
    features: [
      "Compliance audits and assessments",
      "Policy development and enforcement",
      "Data privacy frameworks",
      "Regular compliance reporting",
      "Training for compliance adherence"
    ],
    deliverables: [
      "Compliance audit report",
      "Governance policy documents",
      "Data privacy guidelines",
      "Compliance monitoring tools",
      "Staff training materials"
    ]
  },
  {
    id: 16,
    title: "IoT Integration Services",
    description: "Seamlessly integrate IoT devices with existing systems for enhanced connectivity and automation.",
    icon: Cpu,
    image: "/images/services/iot.jpg",
    category: "IoT",
    type: "Enterprise",
    complexity: "Advanced",
    duration: "Medium-term",
    price: "Starting from $699/month",
    benefits: [
      "Unified IoT and IT ecosystems",
      "Real-time device data integration",
      "Scalable IoT infrastructure",
      "Enhanced operational efficiency",
      "Secure IoT connectivity"
    ],
    features: [
      "IoT platform integration",
      "Device-to-cloud connectivity",
      "API development for IoT",
      "Real-time data streaming",
      "Security protocol implementation"
    ],
    deliverables: [
      "IoT integration architecture",
      "API documentation",
      "Data streaming dashboards",
      "Security setup reports",
      "Integration training materials"
    ]
  },
  {
    id: 17,
    title: "API Development & Management",
    description: "Design, build, and manage robust APIs to enable seamless system integrations and data exchange.",
    icon: Server,
    image: "/images/services/api.jpg",
    category: "Development",
    type: "Custom",
    complexity: "Intermediate",
    duration: "Medium-term",
    price: "Starting from $3,000/project",
    benefits: [
      "Seamless system interoperability",
      "Improved data accessibility",
      "Scalable API infrastructure",
      "Enhanced developer productivity",
      "Secure API endpoints"
    ],
    features: [
      "REST and GraphQL API development",
      "API documentation and testing",
      "Rate limiting and throttling",
      "API security with OAuth",
      "Performance optimization"
    ],
    deliverables: [
      "API specifications document",
      "Source code and documentation",
      "API testing reports",
      "Security implementation guide",
      "Developer training materials"
    ]
  },
  {
    id: 18,
    title: "IT Training & Workshops",
    description: "Empower your team with customized IT training and workshops to boost skills and productivity.",
    icon: Users,
    image: "/images/services/training.jpg",
    category: "Training",
    type: "Standard",
    complexity: "Basic",
    duration: "Short-term",
    price: "Starting from $1,000/workshop",
    benefits: [
      "Improved team technical skills",
      "Increased productivity and efficiency",
      "Customized training programs",
      "Hands-on learning experiences",
      "Up-to-date with industry trends"
    ],
    features: [
      "Tailored IT training curricula",
      "Hands-on workshops and labs",
      "Certification preparation",
      "Online and on-site training options",
      "Post-training support"
    ],
    deliverables: [
      "Training curriculum document",
      "Workshop materials and labs",
      "Participant certificates",
      "Post-training evaluation report",
      "Access to online resources"
    ]
  },
  {
    id: 19,
    title: "Cloud Security Services",
    description: "Protect your cloud infrastructure with advanced security solutions tailored for cloud environments.",
    icon: Lock,
    image: "/images/services/cloudsec.jpg",
    category: "Security",
    type: "Enterprise",
    complexity: "Advanced",
    duration: "Long-term",
    price: "Starting from $599/month",
    benefits: [
      "Comprehensive cloud security",
      "Protection against cloud-specific threats",
      "Compliance with cloud regulations",
      "Real-time threat monitoring",
      "Rapid incident response"
    ],
    features: [
      "Cloud-native security tools",
      "Identity and access management",
      "Data encryption in the cloud",
      "Cloud security audits",
      "Threat detection and response"
    ],
    deliverables: [
      "Cloud security assessment report",
      "Security policy documentation",
      "Monitoring dashboards",
      "Incident response plan",
      "Compliance training materials"
    ]
  },
  {
    id: 20,
    title: "Big Data Solutions",
    description: "Manage and analyze large-scale data sets to uncover insights and drive business growth.",
    icon: BarChart,
    image: "/images/services/bigdata.jpg",
    category: "Analytics",
    type: "Enterprise",
    complexity: "Advanced",
    duration: "Long-term",
    price: "Starting from $899/month",
    benefits: [
      "Scalable big data infrastructure",
      "Real-time data processing",
      "Actionable business insights",
      "Cost-effective data management",
      "Integration with existing systems"
    ],
    features: [
      "Big data platform setup (Hadoop, Spark)",
      "Data lake architecture",
      "Real-time data processing pipelines",
      "Data visualization tools",
      "Scalable storage solutions"
    ],
    deliverables: [
      "Big data architecture design",
      "Data processing pipelines",
      "Analytics dashboards",
      "Integration documentation",
      "Training for data teams"
    ]
  },
  {
    id: 21,
    title: "Enterprise Resource Planning (ERP) Solutions",
    description: "Implement and customize ERP systems to streamline business processes and improve efficiency.",
    icon: Package,
    image: "/images/services/erp.jpg",
    category: "Business Systems",
    type: "Enterprise",
    complexity: "Advanced",
    duration: "Long-term",
    price: "Starting from $1,200/month",
    benefits: [
      "Unified business process management",
      "Improved operational visibility",
      "Scalable ERP solutions",
      "Enhanced decision-making",
      "Integration with existing tools"
    ],
    features: [
      "ERP system customization",
      "Module implementation (HR, finance, etc.)",
      "Data migration to ERP",
      "User role management",
      "Real-time reporting dashboards"
    ],
    deliverables: [
      "ERP implementation plan",
      "Customized ERP modules",
      "Data migration reports",
      "User training materials",
      "Support and maintenance plan"
    ]
  },
  {
    id: 22,
    title: "Robotic Process Automation (RPA)",
    description: "Automate repetitive business processes with RPA to increase efficiency and reduce costs.",
    icon: Bot,
    image: "/images/services/rpa.jpg",
    category: "Automation",
    type: "Enterprise",
    complexity: "Intermediate",
    duration: "Medium-term",
    price: "Starting from $549/month",
    benefits: [
      "Reduced manual workloads",
      "Increased process accuracy",
      "Cost savings through automation",
      "Scalable RPA solutions",
      "Integration with legacy systems"
    ],
    features: [
      "RPA bot development",
      "Process automation workflows",
      "Integration with business applications",
      "Bot performance monitoring",
      "Security and compliance controls"
    ],
    deliverables: [
      "RPA workflow designs",
      "Bot deployment documentation",
      "Performance monitoring tools",
      "Security compliance reports",
      "Training for RPA management"
    ]
  }
];


export default itServicesData;