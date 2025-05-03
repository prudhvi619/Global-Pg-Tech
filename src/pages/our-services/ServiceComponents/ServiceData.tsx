import { JSX } from 'react';
import { Briefcase, Award, BookOpen, Users, Coffee } from 'lucide-react';
import AssessmentSupport from '@/assets/images/services/assessment-support.png';
import PlacementSupport from '@/assets/images/services/placement-support.png';
import PortfolioBuilding from '@/assets/images/services/portfolio-building.png';
import ProfessionalTraining from '@/assets/images/services/professional-training.png';
import ProjectSupport from '@/assets/images/services/project-support.png';

export interface Service {
      id: string;
      title: string;
      highlight: string;
      description: JSX.Element;
      icon: JSX.Element;
      svgImage: string;
      advisors: { name: string; role: string; contactMethods: string[] }[];
  }

export const serviceData : Service[] = [
  {
    id: 'placement',
    title: 'Placement Support',
    highlight: 'Navigating the job market can be challenging without the right guidance.',
    description: (
      <>
        Navigating the job market can be challenging without the right guidance. Our <b>Placement Support</b> services are designed to equip you with a professionally crafted resume, <b>personalized career guidance</b>, and interview preparation resources. We aim to ensure you are well-prepared and confident to secure opportunities that align with your aspirations.
      </>
    ),
    icon: <Briefcase className="w-6 h-6 text-white" />,
    svgImage: PlacementSupport,
    advisors: [
      { name: 'Prudhvi', role: 'Career Advisor', contactMethods: ['email', 'whatsapp'] },
      { name: 'Srinu', role: 'Placement Coordinator', contactMethods: ['email', 'whatsapp'] }
    ]
  },
  {
    id: 'training',
    title: 'Professional Training',
    highlight: 'Our curated training modules are tailored to meet current industry demands.',
    description: (
      <>
        Our curated training modules are tailored to meet current industry demands. We offer comprehensive training in <b>MicroStrategy, SQL, Power BI, Cloud Computing, .NET, React, JavaScript, TypeScript, and Python</b>, combining theoretical knowledge with real-world applications. Enhance your technical competencies and stay competitive in today&apos;s fast-paced job market.
      </>
    ),
    icon: <Award className="w-6 h-6 text-white" />,
    svgImage: ProfessionalTraining,
    advisors: [
      { name: 'Prudhvi', role: 'Career Advisor', contactMethods: ['email', 'whatsapp'] },
      { name: 'Udit', role: 'Technical Trainer', contactMethods: ['email', 'whatsapp'] }
    ]
  },
  {
    id: 'portfolio',
    title: 'Portfolio Building',
    highlight: 'A strong professional portfolio can set you apart in a competitive environment.',
    description: (
      <>
        A strong professional portfolio can set you apart in a competitive environment. We assist in building a <b>well-structured, impactful portfolio</b> that showcases your projects, skills, and achievements in the best light, enhancing your personal brand for both academic and professional pursuits.
      </>
    ),
    icon: <Users className="w-6 h-6 text-white" />,
    svgImage: PortfolioBuilding,
    advisors: [
      { name: 'Prudhvi', role: 'Career Advisor', contactMethods: ['email', 'whatsapp'] },
      { name: 'Abhishek', role: 'Portfolio Consultant', contactMethods: ['email', 'whatsapp'] }
    ]
  },
  {
    id: 'assessment',
    title: 'Assessment Support',
    highlight: 'We provide expert support for candidates preparing for company-specific technical assessments.',
    description: (
      <>
        We provide expert support for candidates preparing for <b>company-specific technical assessments</b>. Our team assists in ensuring your submissions meet high professional standards across technologies like <b>Java, .NET, React, SQL, Python, and Node.js</b>, helping you present your skills effectively during the evaluation process.
      </>
    ),
    icon: <BookOpen className="w-6 h-6 text-white" />,
    svgImage: AssessmentSupport,
    advisors: [
      { name: 'Prudhvi', role: 'Career Advisor', contactMethods: ['email', 'whatsapp'] },
      { name: 'Abhishek', role: 'Assessment Coordinator', contactMethods: ['email', 'whatsapp'] }
    ]
  },
  {
    id: 'university',
    title: 'University Project Support',
    highlight: 'Our academic project support services help students deliver high-quality university projects.',
    description: (
      <>
        Our academic project support services help students deliver <b>high-quality university projects</b>, from ideation to implementation. We ensure the projects not only meet academic standards but also add <b>real value</b> to your learning journey.
      </>
    ),
    icon: <Coffee className="w-6 h-6 text-white" />,
    svgImage: ProjectSupport,
    advisors: [
      { name: 'Prudhvi', role: 'Career Advisor', contactMethods: ['email', 'whatsapp'] },
      { name: 'Abhishek', role: 'Academic Project Mentor', contactMethods: ['email', 'whatsapp'] }
    ]
  }
];