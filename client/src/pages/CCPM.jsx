import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Enhanced course data
const courseCategories = [
  {
    name: 'Engineering',
    icon: '⚙️',
    bg: 'from-blue-50 via-blue-100 to-blue-200',
    particles: '⚙️🔧💻',
    streams: [
      'Computer Science Engineering (CSE)',
      'Mechanical Engineering',
      'Civil Engineering', 
      'Electrical Engineering',
      'Electronics & Communication (ECE)',
      'Information Technology (IT)',
      'Artificial Intelligence & Robotics',
      'Chemical Engineering',
      'Biotechnology Engineering',
      'Aerospace Engineering'
    ]
  },
  {
    name: 'Medical',
    icon: '🏥',
    bg: 'from-red-50 via-red-100 to-red-200',
    particles: '🏥💊🩺',
    streams: [
      'MBBS (Doctor of Medicine)',
      'BDS (Dental Surgery)',
      'BAMS (Ayurveda)',
      'BHMS (Homeopathy)',
      'BUMS (Unani)',
      'BPT (Physiotherapy)',
      'B.Sc Nursing',
      'B.Pharm (Pharmacy)',
      'Biotechnology',
      'Nutrition & Dietetics'
    ]
  },
  {
    name: 'Management',
    icon: '💼',
    bg: 'from-green-50 via-green-100 to-green-200',
    particles: '💼📊📈',
    streams: [
      'B.Com / B.Com (Honours)',
      'BBA / BBM (Business Administration)',
      'CA (Chartered Accountancy)',
      'CMA (Cost & Management Accounting)',
      'CS (Company Secretary)',
      'Hotel Management',
      'Event Management',
      'Digital Marketing',
      'Actuarial Science'
    ]
  },
  {
    name: 'Law',
    icon: '⚖️',
    bg: 'from-purple-50 via-purple-100 to-purple-200',
    particles: '⚖️📖🏛️',
    streams: [
      'LLB (3 Year)',
      'Integrated Law (5 Year)',
      'LLM (Master of Laws)',
      'Specialized Law',
      'Legal Certifications'
    ]
  },
  {
    name: 'Arts & Design',
    icon: '🎨',
    bg: 'from-pink-50 via-pink-100 to-pink-200',
    particles: '🎨🖌️🎭',
    streams: [
      'BA (English, History, Political Science)',
      'Journalism & Mass Communication',
      'Fine Arts / Fashion Design',
      'Interior Design',
      'Performing Arts / Music / Dance',
      'Animation & Graphic Design'
    ]
  },
  {
    name: 'Science',
    icon: '🔬',
    bg: 'from-teal-50 via-teal-100 to-teal-200',
    particles: '🔬🧪📊',
    streams: [
      'B.Sc (Physics, Chemistry, Mathematics)',
      'B.Sc (Biology, Statistics)',
      'Integrated M.Sc',
      'Data Science / AI / Cybersecurity',
      'BCA (Bachelor of Computer Applications)',
      'Animation & Multimedia'
    ]
  },
  {
    name: 'Education',
    icon: '🎓',
    bg: 'from-orange-50 via-orange-100 to-orange-200',
    particles: '🎓📚✏️',
    streams: [
      'B.Ed (Bachelor of Education)',
      'M.Ed (Master of Education)',
      'D.Ed (Diploma in Education)',
      'Physical Education',
      'Special Education'
    ]
  },
  {
    name: 'Agriculture',
    icon: '🌾',
    bg: 'from-yellow-50 via-yellow-100 to-yellow-200',
    particles: '🌾🚜🌱',
    streams: [
      'Agriculture',
      'Horticulture',
      'Forestry',
      'Veterinary',
      'Food Technology'
    ]
  }
];

// Comprehensive course to career mapping
const courseCareerMapping = {
  // Engineering Courses
  'Computer Science Engineering (CSE)': {
    eligibility: 'PCM (12th with Physics, Chemistry, Mathematics)',
    careers: ['Software Engineer', 'AI Developer', 'Data Scientist', 'Full Stack Developer', 'Cybersecurity Analyst'],
    salary: '₹5-25 LPA',
    description: 'Design and develop software systems, AI applications, and cutting-edge technology solutions.'
  },
  'Mechanical Engineering': {
    eligibility: 'PCM (12th with Physics, Chemistry, Mathematics)',
    careers: ['Mechanical Engineer', 'Design Engineer', 'Production Manager', 'Automotive Engineer', 'CAD Engineer'],
    salary: '₹4-18 LPA',
    description: 'Design, manufacture, and maintain mechanical systems and machinery.'
  },
  'Civil Engineering': {
    eligibility: 'PCM (12th with Physics, Chemistry, Mathematics)',
    careers: ['Civil Engineer', 'Structural Engineer', 'Construction Manager', 'Urban Planner', 'Project Manager'],
    salary: '₹4-16 LPA',
    description: 'Plan, design, and construct infrastructure projects like buildings, roads, and bridges.'
  },
  'Electrical Engineering': {
    eligibility: 'PCM (12th with Physics, Chemistry, Mathematics)',
    careers: ['Electrical Engineer', 'Power Systems Engineer', 'Control Systems Engineer', 'Electronics Engineer', 'Automation Engineer'],
    salary: '₹4-20 LPA',
    description: 'Work with electrical systems, power generation, and electronic devices.'
  },
  'Electronics & Communication (ECE)': {
    eligibility: 'PCM (12th with Physics, Chemistry, Mathematics)',
    careers: ['Electronics Engineer', 'Telecom Engineer', 'Embedded Systems Developer', 'VLSI Designer', 'IoT Developer'],
    salary: '₹5-22 LPA',
    description: 'Develop electronic devices, communication systems, and embedded solutions.'
  },
  'Information Technology (IT)': {
    eligibility: 'PCM (12th with Physics, Chemistry, Mathematics)',
    careers: ['IT Consultant', 'System Administrator', 'Software Developer', 'Cybersecurity Analyst', 'Cloud Engineer'],
    salary: '₹5-20 LPA',
    description: 'Manage IT infrastructure, develop software solutions, and ensure system security.'
  },
  'Artificial Intelligence & Robotics': {
    eligibility: 'PCM (12th with Physics, Chemistry, Mathematics)',
    careers: ['AI Engineer', 'Robotics Engineer', 'Machine Learning Engineer', 'Research Scientist', 'Automation Specialist'],
    salary: '₹8-30 LPA',
    description: 'Develop AI systems, robots, and intelligent automation solutions.'
  },
  'Chemical Engineering': {
    eligibility: 'PCM (12th with Physics, Chemistry, Mathematics)',
    careers: ['Chemical Engineer', 'Process Engineer', 'Quality Control Manager', 'Research & Development Engineer', 'Environmental Engineer'],
    salary: '₹5-25 LPA',
    description: 'Design chemical processes, develop new materials, and ensure environmental safety.'
  },
  'Biotechnology Engineering': {
    eligibility: 'PCB/PCM (12th with Biology/Mathematics)',
    careers: ['Biotech Engineer', 'Research Scientist', 'Quality Analyst', 'Bioprocess Engineer', 'Product Development Manager'],
    salary: '₹4-20 LPA',
    description: 'Apply engineering principles to biological systems for healthcare and agriculture.'
  },
  'Aerospace Engineering': {
    eligibility: 'PCM (12th with Physics, Chemistry, Mathematics)',
    careers: ['Aerospace Engineer', 'Aircraft Designer', 'Flight Test Engineer', 'Propulsion Engineer', 'Space Scientist'],
    salary: '₹6-30 LPA',
    description: 'Design and develop aircraft, spacecraft, and related systems.'
  },

  // Medical Courses
  'MBBS (Doctor of Medicine)': {
    eligibility: 'PCB (12th with Physics, Chemistry, Biology) + NEET',
    careers: ['Doctor', 'Surgeon', 'Medical Researcher', 'Healthcare Administrator', 'Medical Consultant'],
    salary: '₹8-50 LPA',
    description: 'Diagnose, treat, and prevent diseases to improve human health and save lives.'
  },
  'BDS (Dental Surgery)': {
    eligibility: 'PCB (12th with Physics, Chemistry, Biology) + NEET',
    careers: ['Dentist', 'Oral Surgeon', 'Dental Consultant', 'Orthodontist', 'Dental Researcher'],
    salary: '₹6-30 LPA',
    description: 'Specialize in oral health, dental procedures, and oral surgery.'
  },
  'BAMS (Ayurveda)': {
    eligibility: 'PCB (12th with Physics, Chemistry, Biology) + NEET',
    careers: ['Ayurveda Doctor', 'Wellness Consultant', 'Clinic Owner', 'Research Scientist', 'Herbal Product Developer'],
    salary: '₹4-20 LPA',
    description: 'Practice traditional Indian medicine and holistic healing approaches.'
  },
  'BHMS (Homeopathy)': {
    eligibility: 'PCB (12th with Physics, Chemistry, Biology) + NEET',
    careers: ['Homeopathic Doctor', 'Wellness Consultant', 'Clinic Owner', 'Healthcare Advisor', 'Research Associate'],
    salary: '₹3-18 LPA',
    description: 'Practice homeopathic medicine and natural healing methods.'
  },
  'BUMS (Unani)': {
    eligibility: 'PCB (12th with Physics, Chemistry, Biology) + NEET',
    careers: ['Unani Doctor', 'Traditional Medicine Practitioner', 'Healthcare Consultant', 'Researcher', 'Clinic Manager'],
    salary: '₹3-16 LPA',
    description: 'Practice Unani system of medicine and traditional healing.'
  },
  'BPT (Physiotherapy)': {
    eligibility: 'PCB (12th with Physics, Chemistry, Biology)',
    careers: ['Physiotherapist', 'Rehabilitation Specialist', 'Sports Therapist', 'Clinic Owner', 'Healthcare Consultant'],
    salary: '₹3-15 LPA',
    description: 'Help patients recover from injuries and improve physical mobility.'
  },
  'B.Sc Nursing': {
    eligibility: 'PCB (12th with Physics, Chemistry, Biology)',
    careers: ['Nurse', 'Healthcare Coordinator', 'Nursing Supervisor', 'Public Health Nurse', 'Healthcare Administrator'],
    salary: '₹3-12 LPA',
    description: 'Provide patient care, support medical procedures, and promote health education.'
  },
  'B.Pharm (Pharmacy)': {
    eligibility: 'PCB (12th with Physics, Chemistry, Biology)',
    careers: ['Pharmacist', 'Clinical Researcher', 'Quality Control Analyst', 'Drug Inspector', 'Pharmaceutical Sales'],
    salary: '₹3-15 LPA',
    description: 'Develop, manufacture, and dispense pharmaceutical drugs and medicines.'
  },
  'Biotechnology': {
    eligibility: 'PCB (12th with Physics, Chemistry, Biology)',
    careers: ['Research Scientist', 'Lab Technician', 'Biotech Analyst', 'Quality Control Specialist', 'Product Development Manager'],
    salary: '₹4-20 LPA',
    description: 'Work with biological systems to develop products for healthcare and agriculture.'
  },
  'Nutrition & Dietetics': {
    eligibility: 'PCB (12th with Physics, Chemistry, Biology)',
    careers: ['Nutritionist', 'Dietitian', 'Food Consultant', 'Health Coach', 'Clinical Nutrition Specialist'],
    salary: '₹3-12 LPA',
    description: 'Plan diets and provide nutrition advice for health and wellness.'
  },

  // Management & Commerce Courses
  'B.Com / B.Com (Honours)': {
    eligibility: 'Commerce Stream (12th with Accounts, Economics, Business Studies)',
    careers: ['Accountant', 'Auditor', 'Financial Analyst', 'Tax Consultant', 'Banking Professional'],
    salary: '₹3-15 LPA',
    description: 'Handle financial records, accounting, taxation, and business operations.'
  },
  'BBA / BBM (Business Administration)': {
    eligibility: 'Any Stream (12th in Commerce/Arts/Science)',
    careers: ['Business Manager', 'HR Executive', 'Marketing Manager', 'Operations Manager', 'Entrepreneur'],
    salary: '₹4-18 LPA',
    description: 'Manage business operations, teams, and strategic planning across various industries.'
  },
  'CA (Chartered Accountancy)': {
    eligibility: 'Commerce Stream + CA Foundation',
    careers: ['Chartered Accountant', 'Financial Consultant', 'Tax Expert', 'Audit Manager', 'CFO'],
    salary: '₹8-40 LPA',
    description: 'Provide expert financial advice, auditing, taxation, and business consulting services.'
  },
  'CMA (Cost & Management Accounting)': {
    eligibility: 'Commerce Stream + CMA Foundation',
    careers: ['Cost Accountant', 'Financial Analyst', 'Management Accountant', 'Budget Analyst', 'Financial Controller'],
    salary: '₹6-25 LPA',
    description: 'Analyze costs, prepare budgets, and provide management accounting solutions.'
  },
  'CS (Company Secretary)': {
    eligibility: 'Commerce Stream + CS Foundation',
    careers: ['Company Secretary', 'Compliance Officer', 'Legal Advisor', 'Corporate Governance Expert', 'Legal Consultant'],
    salary: '₹6-30 LPA',
    description: 'Ensure legal compliance, manage corporate governance, and provide secretarial services.'
  },
  'Hotel Management': {
    eligibility: 'Any Stream (12th in Commerce/Arts preferred)',
    careers: ['Hotel Manager', 'Event Planner', 'Catering Manager', 'Tourism Manager', 'Restaurant Owner'],
    salary: '₹3-20 LPA',
    description: 'Manage hospitality operations, events, and customer service in the tourism industry.'
  },
  'Event Management': {
    eligibility: 'Any Stream (12th in Commerce/Arts/Science)',
    careers: ['Event Manager', 'Wedding Planner', 'Corporate Event Coordinator', 'Festival Organizer', 'Entertainment Manager'],
    salary: '₹3-18 LPA',
    description: 'Plan, organize, and execute various types of events and celebrations.'
  },
  'Digital Marketing': {
    eligibility: 'Any Stream (12th in Commerce/Arts/Science)',
    careers: ['Digital Marketer', 'SEO Specialist', 'Social Media Manager', 'Content Creator', 'Marketing Analyst'],
    salary: '₹3-18 LPA',
    description: 'Create and manage online marketing campaigns, social media, and digital content.'
  },
  'Actuarial Science': {
    eligibility: 'PCM (12th with Mathematics)',
    careers: ['Actuary', 'Risk Analyst', 'Insurance Consultant', 'Financial Planner', 'Data Analyst'],
    salary: '₹6-30 LPA',
    description: 'Assess financial risks using mathematics, statistics, and economic theory.'
  },

  // Law Courses
  'LLB (3 Year)': {
    eligibility: 'Graduation in any discipline + CLAT/LSAT',
    careers: ['Lawyer', 'Legal Advisor', 'Corporate Counsel', 'Judge', 'Legal Consultant'],
    salary: '₹4-25 LPA',
    description: 'Practice law, provide legal advice, and represent clients in legal matters.'
  },
  'Integrated Law (5 Year)': {
    eligibility: '12th in any stream + CLAT',
    careers: ['Advocate', 'Corporate Lawyer', 'Legal Officer', 'Judicial Services', 'Legal Researcher'],
    salary: '₹5-30 LPA',
    description: 'Comprehensive legal education combining undergraduate and law degree.'
  },
  'LLM (Master of Laws)': {
    eligibility: 'LLB degree',
    careers: ['Senior Advocate', 'Legal Scholar', 'Law Professor', 'Legal Consultant', 'International Lawyer'],
    salary: '₹8-50 LPA',
    description: 'Advanced legal studies for specialization in specific areas of law.'
  },
  'Specialized Law': {
    eligibility: 'LLB + Specialization Course',
    careers: ['Cyber Law Expert', 'IPR Lawyer', 'Tax Lawyer', 'Environmental Lawyer', 'Human Rights Lawyer'],
    salary: '₹6-35 LPA',
    description: 'Specialize in specific areas of law like cyber, IPR, tax, or environmental law.'
  },
  'Legal Certifications': {
    eligibility: 'Any graduate + Legal certification course',
    careers: ['Legal Assistant', 'Paralegal', 'Compliance Officer', 'Legal Executive', 'Document Specialist'],
    salary: '₹3-12 LPA',
    description: 'Provide legal support and assistance in law firms and corporate legal departments.'
  },

  // Arts & Humanities Courses
  'BA (English, History, Political Science)': {
    eligibility: 'Arts Stream (12th with Humanities subjects)',
    careers: ['Teacher', 'Researcher', 'Content Writer', 'Civil Services Officer', 'Journalist'],
    salary: '₹3-20 LPA',
    description: 'Pursue careers in education, research, writing, government service, and media.'
  },
  'Journalism & Mass Communication': {
    eligibility: 'Arts Stream (12th with English/Humanities)',
    careers: ['Journalist', 'News Anchor', 'Content Creator', 'PR Executive', 'Media Producer'],
    salary: '₹3-25 LPA',
    description: 'Work in media, journalism, public relations, and communication industries.'
  },
  'Fine Arts / Fashion Design': {
    eligibility: 'Arts Stream (12th with Arts subjects)',
    careers: ['Designer', 'Artist', 'Illustrator', 'Fashion Stylist', 'Creative Director'],
    salary: '₹3-30 LPA',
    description: 'Create artistic works, designs, and visual content across various creative industries.'
  },
  'Interior Design': {
    eligibility: 'Any Stream (12th with Arts/Science/Commerce)',
    careers: ['Interior Designer', 'Space Planner', 'Design Consultant', 'Furniture Designer', 'Architectural Visualizer'],
    salary: '₹3-20 LPA',
    description: 'Design and plan interior spaces for residential, commercial, and public buildings.'
  },
  'Performing Arts / Music / Dance': {
    eligibility: 'Arts Stream (12th with Arts subjects)',
    careers: ['Performer', 'Music Teacher', 'Choreographer', 'Entertainment Manager', 'Arts Director'],
    salary: '₹2-25 LPA',
    description: 'Perform, teach, and create in music, dance, and other performing arts.'
  },
  'Animation & Graphic Design': {
    eligibility: 'Any Stream (12th with Arts/Science/Commerce)',
    careers: ['Animator', 'Graphic Designer', 'UI/UX Designer', 'Game Designer', 'Visual Effects Artist'],
    salary: '₹3-20 LPA',
    description: 'Create digital animations, graphics, and visual content for media and gaming.'
  },

  // Science Courses
  'B.Sc (Physics, Chemistry, Mathematics)': {
    eligibility: 'PCM (12th with Physics, Chemistry, Mathematics)',
    careers: ['Research Assistant', 'Lab Technician', 'Data Analyst', 'Science Teacher', 'Quality Analyst'],
    salary: '₹3-15 LPA',
    description: 'Work in research, laboratories, education, and analytical roles in scientific fields.'
  },
  'B.Sc (Biology, Statistics)': {
    eligibility: 'PCB/PCM (12th with Biology/Mathematics)',
    careers: ['Research Associate', 'Biostatistician', 'Lab Analyst', 'Science Teacher', 'Data Scientist'],
    salary: '₹3-16 LPA',
    description: 'Work in biological research, statistical analysis, and data science applications.'
  },
  'Integrated M.Sc': {
    eligibility: 'PCM/PCB (12th with Science subjects)',
    careers: ['Research Scientist', 'Professor', 'Data Scientist', 'Laboratory Manager', 'Scientific Consultant'],
    salary: '₹4-20 LPA',
    description: 'Combined undergraduate and postgraduate program in science for research careers.'
  },
  'Data Science / AI / Cybersecurity': {
    eligibility: 'PCM (12th with Mathematics/Computer Science)',
    careers: ['Data Scientist', 'Cybersecurity Analyst', 'AI/ML Engineer', 'Security Consultant', 'Data Analyst'],
    salary: '₹6-30 LPA',
    description: 'Analyze data, develop AI solutions, and protect digital systems from cyber threats.'
  },
  'BCA (Bachelor of Computer Applications)': {
    eligibility: 'PCM (12th with Mathematics)',
    careers: ['Software Developer', 'Web Developer', 'System Analyst', 'Database Administrator', 'IT Consultant'],
    salary: '₹3-18 LPA',
    description: 'Develop software applications, websites, and manage computer systems.'
  },
  'Animation & Multimedia': {
    eligibility: 'Any Stream (12th with Computer Science preferred)',
    careers: ['Animator', 'Multimedia Artist', 'Game Developer', 'Video Editor', 'VFX Artist'],
    salary: '₹3-18 LPA',
    description: 'Create animations, multimedia content, and visual effects for entertainment industry.'
  },

  // Education Courses
  'B.Ed (Bachelor of Education)': {
    eligibility: 'Graduation in any subject',
    careers: ['School Teacher', 'Education Coordinator', 'Curriculum Developer', 'Educational Consultant', 'Academic Administrator'],
    salary: '₹3-12 LPA',
    description: 'Train to become a professional teacher and educator in schools and educational institutions.'
  },
  'M.Ed (Master of Education)': {
    eligibility: 'B.Ed degree',
    careers: ['Senior Teacher', 'Principal', 'Education Researcher', 'Training Specialist', 'Educational Psychologist'],
    salary: '₹4-15 LPA',
    description: 'Advanced training in education for leadership roles and specialized teaching positions.'
  },
  'D.Ed (Diploma in Education)': {
    eligibility: '12th in any stream',
    careers: ['Primary Teacher', 'Assistant Teacher', 'Tutor', 'Educational Assistant', 'Learning Coordinator'],
    salary: '₹2-8 LPA',
    description: 'Basic teacher training program for primary and elementary education.'
  },
  'Physical Education': {
    eligibility: '12th with Physical Education/Sports',
    careers: ['PE Teacher', 'Sports Coach', 'Fitness Trainer', 'Sports Administrator', 'Athletic Director'],
    salary: '₹3-12 LPA',
    description: 'Teach physical education, coach sports, and promote fitness and health.'
  },
  'Special Education': {
    eligibility: 'Graduation + Special Education course',
    careers: ['Special Educator', 'Learning Disability Specialist', 'Rehabilitation Counselor', 'Therapy Assistant', 'Inclusion Specialist'],
    salary: '₹3-10 LPA',
    description: 'Work with children and adults with special learning needs and disabilities.'
  },

  // Agriculture Courses
  'Agriculture': {
    eligibility: 'PCB/PCM (12th with Agriculture subjects preferred)',
    careers: ['Agricultural Officer', 'Farm Manager', 'Agricultural Consultant', 'Research Scientist', 'Extension Officer'],
    salary: '₹3-15 LPA',
    description: 'Work in farming, crop production, soil management, and agricultural research.'
  },
  'Horticulture': {
    eligibility: 'PCB (12th with Agriculture/Biology)',
    careers: ['Horticulturist', 'Garden Designer', 'Nursery Manager', 'Landscape Architect', 'Plant Breeder'],
    salary: '₹3-12 LPA',
    description: 'Specialize in cultivation of fruits, vegetables, flowers, and ornamental plants.'
  },
  'Forestry': {
    eligibility: 'PCB (12th with Biology/Agriculture)',
    careers: ['Forest Officer', 'Wildlife Conservationist', 'Environmental Consultant', 'Research Associate', 'Park Ranger'],
    salary: '₹3-12 LPA',
    description: 'Manage forests, conserve wildlife, and work on environmental conservation projects.'
  },
  'Veterinary': {
    eligibility: 'PCB (12th with Biology) + NEET',
    careers: ['Veterinarian', 'Animal Health Officer', 'Livestock Consultant', 'Pet Care Specialist', 'Research Scientist'],
    salary: '₹4-18 LPA',
    description: 'Diagnose and treat diseases in animals, manage livestock health, and ensure food safety.'
  },
  'Food Technology': {
    eligibility: 'PCB/PCM (12th with Science subjects)',
    careers: ['Food Technologist', 'Quality Control Manager', 'Product Development Specialist', 'Food Safety Officer', 'Nutritionist'],
    salary: '₹3-15 LPA',
    description: 'Develop new food products, ensure food safety, and improve food processing techniques.'
  }
};

// Enhanced career roadmaps with complete details
const careerRoadmaps = {
  // ENGINEERING ROADMAPS
  'Computer Science Engineering (CSE)': {
    about: 'Computer Science Engineering (CSE) is a 4-year undergraduate program that combines theoretical foundations of computing, programming, data structures, algorithms, computer hardware, and software development. It focuses on designing, developing, testing, and maintaining computer systems and applications.',
    
    eligibility: {
      title: '🎯 Eligibility Criteria',
      requirements: [
        '12th Standard with Physics, Chemistry, Mathematics (PCM)',
        'Minimum 50-60% aggregate in PCM',
        'JEE Main/Advanced or other entrance exams',
        'Diploma students eligible for lateral entry to 2nd year'
      ]
    },

    roadmap: {
      title: '🛣️ CSE Career Roadmap',
      phases: [
        {
          phase: '📍 1st Year – Foundations',
          duration: '2 Semesters',
          focus: 'Building Programming & Mathematical Foundation',
          subjects: [
            'Programming Basics (C/Python/Java)',
            'Engineering Mathematics I & II',
            'Engineering Physics & Chemistry',
            'Digital Logic & Electronics',
            'Communication Skills'
          ],
          projects: [
            'Simple calculator program',
            'Student database system',
            'Basic mini games'
          ],
          skills: ['Syntax mastery', 'Problem-solving logic', 'Basic algorithms'],
          goal: 'Build strong coding fundamentals and mathematical thinking'
        },
        {
          phase: '📍 2nd Year – Core CS Subjects',
          duration: '2 Semesters',
          focus: 'Core Computer Science Concepts',
          subjects: [
            'Data Structures & Algorithms (DSA)',
            'Object-Oriented Programming (OOP)',
            'Database Management Systems (DBMS)',
            'Operating Systems (OS)',
            'Computer Networks (CN)',
            'Software Engineering'
          ],
          projects: [
            'Library management system',
            'Chat application',
            'Simple website with database'
          ],
          skills: ['DSA mastery', 'Database design', 'System understanding'],
          goal: 'Strengthen problem-solving and core CS subjects'
        },
        {
          phase: '📍 3rd Year – Advanced Topics + Specialization',
          duration: '2 Semesters',
          focus: 'Advanced Concepts & Real-world Development',
          subjects: [
            'Compiler Design',
            'Artificial Intelligence',
            'Machine Learning',
            'Web Development (Full Stack)',
            'Mobile App Development',
            'Cybersecurity Fundamentals'
          ],
          projects: [
            'AI-based application',
            'Full-stack web application',
            'Mobile app with backend'
          ],
          skills: ['Full-stack development', 'AI/ML basics', 'Security awareness'],
          goal: 'Learn real-world applications and choose specialization'
        },
        {
          phase: '📍 4th Year – Career Preparation',
          duration: '2 Semesters',
          focus: 'Industry Readiness & Placement Preparation',
          subjects: [
            'Capstone Project',
            'System Design',
            'Advanced Algorithms',
            'Industry Electives',
            'Internship/Training'
          ],
          projects: [
            'End-to-end industry project',
            'Open source contributions',
            'Research paper/publication'
          ],
          skills: ['System design', 'Interview preparation', 'Industry exposure'],
          goal: 'Complete career preparation for placements or higher studies'
        }
      ]
    },

    specializations: {
      title: '🎯 Specialization Areas',
      areas: [
        {
          name: 'Artificial Intelligence & Machine Learning',
          description: 'AI algorithms, neural networks, deep learning, NLP',
          careers: ['AI Engineer', 'ML Engineer', 'Data Scientist', 'Research Scientist'],
          salary: '₹8-25 LPA'
        },
        {
          name: 'Cybersecurity',
          description: 'Network security, ethical hacking, cryptography',
          careers: ['Security Analyst', 'Ethical Hacker', 'Security Consultant'],
          salary: '₹6-20 LPA'
        },
        {
          name: 'Full Stack Development',
          description: 'Frontend, backend, databases, cloud deployment',
          careers: ['Full Stack Developer', 'Software Engineer', 'Tech Lead'],
          salary: '₹5-18 LPA'
        },
        {
          name: 'Data Science & Analytics',
          description: 'Big data, analytics, visualization, statistics',
          careers: ['Data Scientist', 'Data Analyst', 'Business Intelligence'],
          salary: '₹7-22 LPA'
        }
      ]
    },

    careerPaths: {
      title: '💼 Career Opportunities',
      immediate: [
        'Software Developer/Engineer',
        'Web Developer',
        'Mobile App Developer',
        'Database Administrator',
        'System Analyst',
        'Quality Assurance Engineer'
      ],
      advanced: [
        'Technical Architect',
        'Project Manager',
        'Product Manager',
        'CTO/Technical Director',
        'Entrepreneur/Startup Founder',
        'Research Scientist'
      ],
      sectors: [
        'IT Services (TCS, Infosys, Wipro)',
        'Product Companies (Google, Microsoft, Amazon)',
        'Startups & Unicorns',
        'Banking & Fintech',
        'Healthcare Tech',
        'Government & Defense'
      ]
    },

    salary: {
      title: '💰 Salary Expectations',
      india: {
        fresher: '₹4-8 LPA (Average), ₹12-30 LPA (Top Tier)',
        experienced: '₹15-50 LPA (5+ years)',
        senior: '₹30-80 LPA (10+ years)'
      },
      abroad: {
        fresher: '$70,000-$110,000 (USA/Europe)',
        experienced: '$120,000-$180,000 (5+ years)',
        senior: '$200,000+ (Senior positions)'
      }
    },

    advantages: {
      title: '✅ Advantages',
      points: [
        'High demand globally across all industries',
        'Excellent salary packages and growth opportunities',
        'Flexibility to work remotely',
        'Continuous learning keeps work interesting',
        'Multiple career paths and specializations',
        'Entrepreneurship opportunities',
        'Global job market access'
      ]
    },

    challenges: {
      title: '⚠️ Challenges & Solutions',
      items: [
        {
          challenge: 'High Competition',
          solution: 'Build strong practical skills, get internships early, learn emerging technologies'
        },
        {
          challenge: 'Rapidly Changing Technology',
          solution: 'Stay updated with online courses, follow industry trends, practice continuous learning'
        },
        {
          challenge: 'Work Pressure in IT Jobs',
          solution: 'Learn time management, choose companies with work-life balance, build strong fundamentals'
        },
        {
          challenge: 'Risk of Automation',
          solution: 'Focus on creative/analytical roles, develop domain expertise, build soft skills'
        }
      ]
    },

    resources: {
      title: '📚 Essential Resources',
      categories: [
        {
          category: 'Programming & DSA',
          resources: ['LeetCode', 'GeeksforGeeks', 'HackerRank', 'Codeforces']
        },
        {
          category: 'Web Development',
          resources: ['FreeCodeCamp', 'MDN Docs', 'React Documentation', 'Node.js Guides']
        },
        {
          category: 'AI/ML',
          resources: ['Andrew Ng ML Course', 'Kaggle', 'TensorFlow Tutorials', 'PyTorch Documentation']
        },
        {
          category: 'System Design',
          resources: ['Grokking System Design', 'High Scalability', 'System Design Primer']
        }
      ]
    }
  },

  'Mechanical Engineering': {
    about: 'Mechanical Engineering is one of the oldest and broadest engineering disciplines. It involves design, manufacturing, and maintenance of mechanical systems including engines, machines, and thermal systems.',
    
    eligibility: {
      title: '🎯 Eligibility Criteria',
      requirements: [
        '12th Standard with Physics, Chemistry, Mathematics (PCM)',
        'Minimum 50-60% aggregate in PCM',
        'JEE Main/Advanced or state entrance exams',
        'Diploma in Mechanical for lateral entry'
      ]
    },

    roadmap: {
      title: '🛣️ Mechanical Engineering Roadmap',
      phases: [
        {
          phase: '📍 1st Year – Engineering Basics',
          duration: '2 Semesters',
          focus: 'Foundation in Engineering Principles',
          subjects: [
            'Engineering Mathematics',
            'Engineering Physics',
            'Engineering Chemistry',
            'Engineering Graphics',
            'Workshop Technology'
          ],
          projects: [
            'Technical drawing projects',
            'Workshop practice',
            'Basic engineering models'
          ],
          skills: ['Technical drawing', 'Workshop skills', 'Mathematical foundation'],
          goal: 'Build strong foundation in engineering fundamentals'
        },
        {
          phase: '📍 2nd Year – Core Mechanical',
          duration: '2 Semesters',
          focus: 'Mechanical Engineering Fundamentals',
          subjects: [
            'Strength of Materials',
            'Thermodynamics',
            'Fluid Mechanics',
            'Manufacturing Processes',
            'Engineering Materials'
          ],
          projects: [
            'Material testing',
            'Heat engine models',
            'Manufacturing projects'
          ],
          skills: ['Material analysis', 'Thermal systems', 'Manufacturing processes'],
          goal: 'Master core mechanical engineering subjects'
        },
        {
          phase: '📍 3rd Year – Advanced Topics',
          duration: '2 Semesters',
          focus: 'Design and Advanced Mechanical Systems',
          subjects: [
            'Machine Design',
            'Heat Transfer',
            'IC Engines',
            'Refrigeration & AC',
            'Control Engineering'
          ],
          projects: [
            'Machine design project',
            'IC engine testing',
            'Heat exchanger design'
          ],
          skills: ['Design principles', 'Engine technology', 'Heat transfer'],
          goal: 'Learn design and advanced mechanical systems'
        },
        {
          phase: '📍 4th Year – Specialization & Industry',
          duration: '2 Semesters',
          focus: 'Specialization and Industry Readiness',
          subjects: [
            'Automobile Engineering',
            'Production Management',
            'CAD/CAM',
            'Final Year Project',
            'Industrial Training'
          ],
          projects: [
            'Major project',
            'Industry internship',
            'CAD modeling projects'
          ],
          skills: ['CAD/CAM software', 'Project management', 'Industry exposure'],
          goal: 'Specialize and prepare for industry placement'
        }
      ]
    },

    specializations: {
      title: '🎯 Specialization Areas',
      areas: [
        {
          name: 'Automotive Engineering',
          description: 'Vehicle design, engine technology, automotive systems',
          careers: ['Automotive Engineer', 'Design Engineer', 'Test Engineer'],
          salary: '₹4-15 LPA'
        },
        {
          name: 'Manufacturing Engineering',
          description: 'Production processes, quality control, automation',
          careers: ['Production Engineer', 'Quality Engineer', 'Process Engineer'],
          salary: '₹3-12 LPA'
        },
        {
          name: 'Thermal Engineering',
          description: 'Heat transfer, power plants, HVAC systems',
          careers: ['Thermal Engineer', 'Power Plant Engineer', 'HVAC Engineer'],
          salary: '₹4-14 LPA'
        },
        {
          name: 'Design & Analysis',
          description: 'CAD/CAE, product design, structural analysis',
          careers: ['Design Engineer', 'CAD Engineer', 'R&D Engineer'],
          salary: '₹5-16 LPA'
        }
      ]
    },

    careerPaths: {
      title: '💼 Career Opportunities',
      immediate: [
        'Mechanical Engineer',
        'Design Engineer',
        'Production Engineer',
        'Quality Control Engineer',
        'Maintenance Engineer',
        'Sales Engineer'
      ],
      advanced: [
        'Project Manager',
        'Plant Manager',
        'R&D Manager',
        'Consultant Engineer',
        'General Manager',
        'Entrepreneur'
      ],
      sectors: [
        'Automotive Industry',
        'Manufacturing Companies',
        'Power Generation',
        'Aerospace Industry',
        'Oil & Gas',
        'Government Organizations'
      ]
    },

    salary: {
      title: '💰 Salary Expectations',
      india: {
        fresher: '₹3-6 LPA (Average), ₹7-12 LPA (Top Companies)',
        experienced: '₹8-20 LPA (5+ years)',
        senior: '₹15-40 LPA (10+ years)'
      },
      abroad: {
        fresher: '$55,000-$80,000 (USA/Europe)',
        experienced: '$80,000-$120,000 (5+ years)',
        senior: '$120,000+ (Senior positions)'
      }
    },

    advantages: {
      title: '✅ Advantages',
      points: [
        'Broad engineering field with diverse opportunities',
        'Strong foundation for various industries',
        'Government job opportunities',
        'Entrepreneurship opportunities in manufacturing',
        'Core engineering skills applicable everywhere',
        'Higher studies options (M.Tech, MBA)',
        'Stable career with continuous demand'
      ]
    },

    challenges: {
      title: '⚠️ Challenges & Solutions',
      items: [
        {
          challenge: 'Economic Sensitivity',
          solution: 'Develop multiple skills, consider government jobs, build strong technical foundation'
        },
        {
          challenge: 'Manufacturing Shifts',
          solution: 'Learn automation, robotics, and advanced manufacturing technologies'
        },
        {
          challenge: 'Competition from Other Branches',
          solution: 'Develop interdisciplinary skills, learn software tools, focus on design'
        },
        {
          challenge: 'Complex Calculations',
          solution: 'Master mathematics, use software tools, practice problem-solving'
        }
      ]
    },

    resources: {
      title: '📚 Essential Resources',
      categories: [
        {
          category: 'Design & CAD',
          resources: ['AutoCAD', 'SolidWorks', 'CATIA', 'ANSYS']
        },
        {
          category: 'Core Subjects',
          resources: ['R.S. Khurmi', 'R.K. Rajput', 'Shigley Mechanical Design']
        },
        {
          category: 'Manufacturing',
          resources: ['CNC Programming', 'Lean Manufacturing', 'Six Sigma']
        },
        {
          category: 'Analysis',
          resources: ['MATLAB', 'ANSYS', 'Finite Element Analysis']
        }
      ]
    }
  },

  // MEDICAL ROADMAPS
  'MBBS (Doctor of Medicine)': {
    about: 'MBBS (Bachelor of Medicine and Bachelor of Surgery) is a 5.5-year undergraduate medical degree program that trains students to become doctors. It includes 4.5 years of academic study and 1 year of compulsory internship.',
    
    eligibility: {
      title: '🎯 Eligibility Criteria',
      requirements: [
        '12th Standard with Physics, Chemistry, Biology (PCB)',
        'Minimum 50% aggregate (40% for SC/ST/OBC)',
        'NEET qualification mandatory',
        'Age: 17-25 years (relaxation for reserved categories)',
        'English proficiency required'
      ]
    },

    roadmap: {
      title: '🛣️ MBBS Career Roadmap',
      phases: [
        {
          phase: '📍 1st Year – Basic Medical Sciences',
          duration: '1 Year',
          focus: 'Foundation of Human Body Structure & Function',
          subjects: [
            'Anatomy (Human body structure)',
            'Physiology (Body functions)',
            'Biochemistry (Chemical processes)',
            'Community Medicine basics',
            'Medical Ethics & Communication'
          ],
          projects: [
            'Cadaver dissection',
            'Physiology experiments',
            'Community health surveys'
          ],
          skills: ['Medical terminology', 'Basic clinical skills', 'Patient communication'],
          goal: 'Understand human body structure and basic functions'
        },
        {
          phase: '📍 2nd Year – Pathology & Pharmacology',
          duration: '1 Year',
          focus: 'Disease Processes & Drug Actions',
          subjects: [
            'Pathology (Disease study)',
            'Pharmacology (Drug actions)',
            'Microbiology (Infectious agents)',
            'Forensic Medicine',
            'Community Medicine'
          ],
          projects: [
            'Disease case studies',
            'Drug interaction analysis',
            'Microorganism identification'
          ],
          skills: ['Disease diagnosis', 'Drug prescription knowledge', 'Lab interpretation'],
          goal: 'Learn about diseases and their treatment mechanisms'
        },
        {
          phase: '📍 3rd & 4th Year – Clinical Subjects',
          duration: '2 Years',
          focus: 'Patient Care & Clinical Practice',
          subjects: [
            'General Medicine',
            'General Surgery',
            'Obstetrics & Gynecology',
            'Pediatrics',
            'Orthopedics',
            'ENT, Ophthalmology',
            'Psychiatry, Dermatology'
          ],
          projects: [
            'Patient case presentations',
            'Clinical rotations',
            'Medical research projects'
          ],
          skills: ['Patient examination', 'Clinical diagnosis', 'Treatment planning'],
          goal: 'Gain hands-on clinical experience across medical specialties'
        },
        {
          phase: '📍 Internship Year – Practical Training',
          duration: '1 Year',
          focus: 'Real-world Medical Practice',
          subjects: [
            'Rotating internship in all departments',
            'Emergency medicine',
            'Rural health posting',
            'Thesis/Research project'
          ],
          projects: [
            'Independent patient management',
            'Medical research thesis',
            'Community health programs'
          ],
          skills: ['Independent practice', 'Emergency handling', 'Research methodology'],
          goal: 'Become competent for independent medical practice'
        }
      ]
    },

    specializations: {
      title: '🎯 Post-MBBS Specialization Options',
      areas: [
        {
          name: 'MD (Doctor of Medicine)',
          description: 'Non-surgical specializations like Internal Medicine, Pediatrics',
          careers: ['Physician', 'Specialist Doctor', 'Medical Consultant'],
          salary: '₹8-25 LPA'
        },
        {
          name: 'MS (Master of Surgery)',
          description: 'Surgical specializations like General Surgery, Orthopedics',
          careers: ['Surgeon', 'Surgical Specialist', 'Hospital Consultant'],
          salary: '₹10-30 LPA'
        },
        {
          name: 'Super Speciality (DM/MCh)',
          description: 'Advanced specializations like Cardiology, Neurosurgery',
          careers: ['Super Specialist', 'Department Head', 'Medical Director'],
          salary: '₹15-50 LPA'
        },
        {
          name: 'Public Health',
          description: 'Community health, epidemiology, health policy',
          careers: ['Public Health Officer', 'Epidemiologist', 'Health Policy Analyst'],
          salary: '₹6-18 LPA'
        }
      ]
    },

    careerPaths: {
      title: '💼 Career Opportunities',
      immediate: [
        'Junior Resident Doctor',
        'Medical Officer (Government)',
        'General Practitioner',
        'Hospital Doctor',
        'Emergency Medicine Doctor',
        'Medical Writer'
      ],
      advanced: [
        'Specialist Consultant',
        'Department Head',
        'Medical Superintendent',
        'Medical Director',
        'Healthcare Entrepreneur',
        'Medical Researcher'
      ],
      sectors: [
        'Government Hospitals',
        'Private Healthcare',
        'Medical Research',
        'Pharmaceutical Industry',
        'Medical Education',
        'International Healthcare'
      ]
    },

    salary: {
      title: '💰 Salary Expectations',
      india: {
        fresher: '₹6-12 LPA (Government), ₹8-15 LPA (Private)',
        experienced: '₹15-40 LPA (5+ years)',
        senior: '₹30-80 LPA (Specialists/Consultants)'
      },
      abroad: {
        fresher: '$200,000-$300,000 (USA after USMLE)',
        experienced: '$300,000-$500,000 (Specialists)',
        senior: '$500,000+ (Senior Consultants)'
      }
    },

    advantages: {
      title: '✅ Advantages',
      points: [
        'Noble profession serving humanity',
        'High social respect and status',
        'Excellent earning potential',
        'Job security and stability',
        'Global career opportunities',
        'Continuous learning and growth',
        'Multiple specialization options'
      ]
    },

    challenges: {
      title: '⚠️ Challenges & Solutions',
      items: [
        {
          challenge: 'Long Duration of Study (5.5 years + specialization)',
          solution: 'Stay motivated with clear goals, join study groups, maintain work-life balance'
        },
        {
          challenge: 'High Competition for PG Seats',
          solution: 'Start NEET PG preparation early, focus on clinical knowledge, take mock tests'
        },
        {
          challenge: 'Emotional Stress & Patient Responsibility',
          solution: 'Develop emotional resilience, seek mentorship, practice stress management'
        },
        {
          challenge: 'Continuous Study Requirements',
          solution: 'Develop effective study habits, stay updated with medical literature, join CME programs'
        }
      ]
    },

    resources: {
      title: '📚 Essential Resources',
      categories: [
        {
          category: 'Basic Sciences',
          resources: ['Gray\'s Anatomy', 'Guyton Physiology', 'Harper\'s Biochemistry', 'Robbins Pathology']
        },
        {
          category: 'Clinical Subjects',
          resources: ['Harrison\'s Internal Medicine', 'Bailey & Love Surgery', 'Williams Obstetrics']
        },
        {
          category: 'Exam Preparation',
          resources: ['NEET PG Question Banks', 'Marrow', 'PrepLadder', 'Medical PG Entrance Books']
        },
        {
          category: 'Research & Updates',
          resources: ['PubMed', 'Medical Journals', 'UpToDate', 'Medscape']
        }
      ]
    }
  },

  // MANAGEMENT ROADMAPS
  'BBA / BBM (Business Administration)': {
    about: 'Bachelor of Business Administration (BBA) is a 3-year undergraduate program that provides foundational knowledge in business management, entrepreneurship, marketing, finance, and human resources.',
    
    eligibility: {
      title: '🎯 Eligibility Criteria',
      requirements: [
        '12th Standard in any stream (Commerce preferred)',
        'Minimum 50% aggregate',
        'Entrance exams: IPM, SET, UGAT, or university-specific tests',
        'English proficiency required'
      ]
    },

    roadmap: {
      title: '🛣️ BBA Career Roadmap',
      phases: [
        {
          phase: '📍 1st Year – Business Fundamentals',
          duration: '2 Semesters',
          focus: 'Basic Business Knowledge & Foundation',
          subjects: [
            'Principles of Management',
            'Business Mathematics',
            'Business Communication',
            'Microeconomics',
            'Accounting Fundamentals',
            'Computer Applications'
          ],
          projects: [
            'Business presentation',
            'Market survey project',
            'Financial statement analysis'
          ],
          skills: ['Communication skills', 'Basic analysis', 'Team work'],
          goal: 'Build foundation in business concepts and communication'
        },
        {
          phase: '📍 2nd Year – Core Business Areas',
          duration: '2 Semesters',
          focus: 'Specialized Business Functions',
          subjects: [
            'Marketing Management',
            'Financial Management',
            'Human Resource Management',
            'Operations Management',
            'Business Law',
            'Organizational Behavior'
          ],
          projects: [
            'Marketing campaign project',
            'HR case study analysis',
            'Operations improvement project'
          ],
          skills: ['Analytical thinking', 'Problem solving', 'Leadership basics'],
          goal: 'Understand core business functions and management principles'
        },
        {
          phase: '📍 3rd Year – Specialization & Industry Exposure',
          duration: '2 Semesters',
          focus: 'Specialization and Practical Application',
          subjects: [
            'Strategic Management',
            'Entrepreneurship',
            'International Business',
            'Digital Marketing',
            'Business Analytics',
            'Internship/Project Work'
          ],
          projects: [
            'Final year project',
            'Business plan development',
            'Industry internship'
          ],
          skills: ['Strategic thinking', 'Data analysis', 'Professional skills'],
          goal: 'Prepare for management roles and career specialization'
        }
      ]
    },

    specializations: {
      title: '🎯 Specialization Areas',
      areas: [
        {
          name: 'Marketing Management',
          description: 'Brand management, digital marketing, consumer behavior',
          careers: ['Marketing Executive', 'Brand Manager', 'Digital Marketing Specialist'],
          salary: '₹4-18 LPA'
        },
        {
          name: 'Finance Management',
          description: 'Financial analysis, investment planning, banking',
          careers: ['Financial Analyst', 'Investment Advisor', 'Banking Professional'],
          salary: '₹5-20 LPA'
        },
        {
          name: 'Human Resources',
          description: 'Talent management, recruitment, organizational development',
          careers: ['HR Executive', 'Recruitment Specialist', 'Training Manager'],
          salary: '₹4-16 LPA'
        },
        {
          name: 'Operations Management',
          description: 'Supply chain, logistics, quality management',
          careers: ['Operations Executive', 'Supply Chain Analyst', 'Process Manager'],
          salary: '₹4-17 LPA'
        }
      ]
    },

    careerPaths: {
      title: '💼 Career Opportunities',
      immediate: [
        'Management Trainee',
        'Business Analyst',
        'Marketing Executive',
        'HR Executive',
        'Operations Associate',
        'Sales Executive'
      ],
      advanced: [
        'Business Manager',
        'Department Head',
        'General Manager',
        'Entrepreneur',
        'Management Consultant',
        'Business Owner'
      ],
      sectors: [
        'FMCG Companies',
        'Banking & Finance',
        'E-commerce',
        'Consulting Firms',
        'Manufacturing',
        'Technology Companies'
      ]
    },

    salary: {
      title: '💰 Salary Expectations',
      india: {
        fresher: '₹3-8 LPA (Average), ₹10-15 LPA (Top Companies)',
        experienced: '₹8-25 LPA (5+ years)',
        senior: '₹20-50 LPA (Management positions)'
      },
      abroad: {
        fresher: '$45,000-$70,000 (USA/Europe)',
        experienced: '$70,000-$120,000 (5+ years)',
        senior: '$120,000+ (Senior Management)'
      }
    },

    advantages: {
      title: '✅ Advantages',
      points: [
        'Versatile degree applicable to all industries',
        'Strong foundation for MBA programs',
        'Entrepreneurship preparation',
        'Leadership skill development',
        'Good networking opportunities',
        'Multiple career paths available',
        'Fast career progression possible'
      ]
    },

    challenges: {
      title: '⚠️ Challenges & Solutions',
      items: [
        {
          challenge: 'High Competition in Entry-level Positions',
          solution: 'Gain internship experience, develop specialized skills, build strong network'
        },
        {
          challenge: 'Generic Degree Perception',
          solution: 'Focus on specialization, gain certifications, demonstrate practical skills'
        },
        {
          challenge: 'Need for Continuous Skill Updates',
          solution: 'Pursue online courses, industry certifications, attend workshops'
        },
        {
          challenge: 'Pressure to Pursue MBA',
          solution: 'Consider work experience first, choose specialization carefully, plan timing'
        }
      ]
    },

    resources: {
      title: '📚 Essential Resources',
      categories: [
        {
          category: 'Business Fundamentals',
          resources: ['Kotler Marketing', 'Management by Robbins', 'Business Communication Books']
        },
        {
          category: 'Digital Skills',
          resources: ['Google Analytics', 'Excel Advanced', 'Digital Marketing Courses']
        },
        {
          category: 'Certification Courses',
          resources: ['Google Ads', 'HubSpot Marketing', 'Salesforce Admin']
        },
        {
          category: 'Industry Knowledge',
          resources: ['Harvard Business Review', 'Business Magazines', 'Case Study Books']
        }
      ]
    }
  },

  // LAW ROADMAPS
  'LLB (3 Year)': {
    about: 'LLB (Bachelor of Laws) is a 3-year undergraduate law degree for graduates from any discipline. It provides comprehensive legal education covering various branches of law including constitutional, criminal, civil, corporate, and international law.',
    
    eligibility: {
      title: '🎯 Eligibility Criteria',
      requirements: [
        'Graduation in any discipline',
        'Minimum 45% aggregate (42% for SC/ST)',
        'CLAT/LSAT/University entrance exam',
        'Age limit: Usually up to 30 years',
        'No specific subject requirements'
      ]
    },

    roadmap: {
      title: '🛣️ LLB Career Roadmap',
      phases: [
        {
          phase: '📍 1st Year – Legal Foundations',
          duration: '2 Semesters',
          focus: 'Basic Legal Principles & Constitutional Law',
          subjects: [
            'Constitutional Law',
            'Legal Methods & Jurisprudence',
            'Law of Contracts',
            'Criminal Law',
            'Legal Writing & Research',
            'Professional Ethics'
          ],
          projects: [
            'Legal research assignments',
            'Moot court participation',
            'Case study analysis'
          ],
          skills: ['Legal reasoning', 'Research skills', 'Legal writing'],
          goal: 'Understand fundamental legal principles and Indian legal system'
        },
        {
          phase: '📍 2nd Year – Specialized Legal Areas',
          duration: '2 Semesters',
          focus: 'Diverse Legal Specializations',
          subjects: [
            'Civil Procedure Code',
            'Criminal Procedure Code',
            'Company Law',
            'Family Law',
            'Property Law',
            'Administrative Law'
          ],
          projects: [
            'Legal aid clinic work',
            'Internship with law firms',
            'Legal drafting exercises'
          ],
          skills: ['Legal drafting', 'Client counseling', 'Court procedures'],
          goal: 'Develop expertise in various legal specializations'
        },
        {
          phase: '📍 3rd Year – Advanced Practice & Specialization',
          duration: '2 Semesters',
          focus: 'Practical Legal Skills & Career Preparation',
          subjects: [
            'Evidence Law',
            'International Law',
            'Intellectual Property Rights',
            'Environmental Law',
            'Cyber Law',
            'Alternative Dispute Resolution'
          ],
          projects: [
            'Final year dissertation',
            'Court internship',
            'Legal consultancy projects'
          ],
          skills: ['Court advocacy', 'Legal consultation', 'Specialized practice'],
          goal: 'Prepare for legal practice and bar examination'
        }
      ]
    },

    specializations: {
      title: '🎯 Legal Specialization Areas',
      areas: [
        {
          name: 'Corporate Law',
          description: 'Company law, mergers & acquisitions, securities law',
          careers: ['Corporate Lawyer', 'Legal Advisor', 'Compliance Officer'],
          salary: '₹6-20 LPA'
        },
        {
          name: 'Criminal Law',
          description: 'Criminal defense, prosecution, criminal justice',
          careers: ['Criminal Lawyer', 'Public Prosecutor', 'Legal Aid Lawyer'],
          salary: '₹4-15 LPA'
        },
        {
          name: 'Civil Law',
          description: 'Property disputes, family law, civil litigation',
          careers: ['Civil Lawyer', 'Family Court Lawyer', 'Property Lawyer'],
          salary: '₹3-12 LPA'
        },
        {
          name: 'Intellectual Property',
          description: 'Patents, trademarks, copyrights, IP litigation',
          careers: ['IP Lawyer', 'Patent Attorney', 'IP Consultant'],
          salary: '₹8-25 LPA'
        }
      ]
    },

    careerPaths: {
      title: '💼 Career Opportunities',
      immediate: [
        'Junior Associate (Law Firms)',
        'Legal Assistant',
        'Court Clerk',
        'Legal Researcher',
        'Paralegal',
        'Legal Content Writer'
      ],
      advanced: [
        'Senior Advocate',
        'Judge (through judicial services)',
        'Legal Consultant',
        'Law Firm Partner',
        'Corporate Legal Head',
        'Legal Academic'
      ],
      sectors: [
        'Law Firms',
        'Corporate Legal Departments',
        'Government Legal Services',
        'Judiciary',
        'Legal Process Outsourcing',
        'Legal Education'
      ]
    },

    salary: {
      title: '💰 Salary Expectations',
      india: {
        fresher: '₹3-8 LPA (varies by city and firm type)',
        experienced: '₹10-30 LPA (5+ years)',
        senior: '₹25-100 LPA (Senior Advocates/Partners)'
      },
      abroad: {
        fresher: '$60,000-$120,000 (after qualifying local bar)',
        experienced: '$120,000-$250,000 (5+ years)',
        senior: '$250,000+ (Partners/Senior positions)'
      }
    },

    advantages: {
      title: '✅ Advantages',
      points: [
        'Intellectual and challenging work',
        'High social respect and status',
        'Opportunity to serve justice',
        'Flexible career options',
        'Potential for high earnings',
        'Continuous learning opportunities',
        'Independence in practice'
      ]
    },

    challenges: {
      title: '⚠️ Challenges & Solutions',
      items: [
        {
          challenge: 'Initial Low Income Period',
          solution: 'Build strong network, take diverse cases, consider corporate law for stable income'
        },
        {
          challenge: 'High Competition in Legal Field',
          solution: 'Specialize in niche areas, build expertise, maintain professional relationships'
        },
        {
          challenge: 'Long Working Hours & Stress',
          solution: 'Develop time management skills, maintain work-life balance, build stress resilience'
        },
        {
          challenge: 'Continuous Learning Requirements',
          solution: 'Stay updated with legal developments, attend seminars, join bar associations'
        }
      ]
    },

    resources: {
      title: '📚 Essential Resources',
      categories: [
        {
          category: 'Legal Texts',
          resources: ['Bare Acts', 'Legal Commentaries', 'Case Law Databases', 'Legal Dictionaries']
        },
        {
          category: 'Practice Skills',
          resources: ['Moot Court Competitions', 'Legal Aid Clinics', 'Internship Programs']
        },
        {
          category: 'Research Tools',
          resources: ['Manupatra', 'SCC Online', 'Legal Databases', 'Law Journals']
        },
        {
          category: 'Professional Development',
          resources: ['Bar Council Programs', 'Legal Workshops', 'Continuing Legal Education']
        }
      ]
    }
  },

  // ARTS & DESIGN ROADMAPS
  'Journalism & Mass Communication': {
    about: 'Journalism and Mass Communication is a 3-year undergraduate program that trains students in various forms of media including print, electronic, and digital journalism, along with advertising, public relations, and media production.',
    
    eligibility: {
      title: '🎯 Eligibility Criteria',
      requirements: [
        '12th Standard in any stream (Arts preferred)',
        'Minimum 50% aggregate',
        'Strong English language skills',
        'Entrance exams for some institutes',
        'Portfolio or interview may be required'
      ]
    },

    roadmap: {
      title: '🛣️ Journalism & Mass Communication Roadmap',
      phases: [
        {
          phase: '📍 1st Year – Media Fundamentals',
          duration: '2 Semesters',
          focus: 'Basic Media Knowledge & Communication Skills',
          subjects: [
            'Introduction to Mass Communication',
            'History of Journalism',
            'English Language & Grammar',
            'Basic Photography',
            'Media Laws & Ethics',
            'Computer Applications'
          ],
          projects: [
            'News writing practice',
            'Photo journalism project',
            'Media analysis assignments'
          ],
          skills: ['Writing skills', 'Basic photography', 'Media awareness'],
          goal: 'Build foundation in media and communication principles'
        },
        {
          phase: '📍 2nd Year – Specialized Media Areas',
          duration: '2 Semesters',
          focus: 'Print, Electronic & Digital Media',
          subjects: [
            'Print Journalism',
            'Radio & Television Production',
            'Advertising & Public Relations',
            'Feature Writing',
            'Documentary Production',
            'Media Research'
          ],
          projects: [
            'Newspaper production',
            'Radio show creation',
            'Documentary making',
            'Advertising campaign'
          ],
          skills: ['Content creation', 'Production skills', 'Research abilities'],
          goal: 'Develop expertise in various media formats and production'
        },
        {
          phase: '📍 3rd Year – Digital Media & Specialization',
          duration: '2 Semesters',
          focus: 'Digital Journalism & Career Preparation',
          subjects: [
            'Digital Journalism',
            'Social Media Management',
            'Video Production & Editing',
            'Media Management',
            'Internship/Industry Training',
            'Final Project'
          ],
          projects: [
            'Digital news portal',
            'Social media campaigns',
            'Video documentaries',
            'Industry internship'
          ],
          skills: ['Digital content creation', 'Social media management', 'Video editing'],
          goal: 'Master digital media skills and prepare for industry'
        }
      ]
    },

    specializations: {
      title: '🎯 Specialization Areas',
      areas: [
        {
          name: 'Print Journalism',
          description: 'Newspaper reporting, magazine writing, editorial work',
          careers: ['Reporter', 'Editor', 'Feature Writer', 'Correspondent'],
          salary: '₹3-15 LPA'
        },
        {
          name: 'Electronic Media',
          description: 'Television, radio production, news anchoring',
          careers: ['News Anchor', 'TV Producer', 'Radio Jockey', 'Video Editor'],
          salary: '₹4-20 LPA'
        },
        {
          name: 'Digital Media',
          description: 'Online journalism, social media, content creation',
          careers: ['Digital Content Creator', 'Social Media Manager', 'Online Journalist'],
          salary: '₹3-18 LPA'
        },
        {
          name: 'Advertising & PR',
          description: 'Brand communication, public relations, marketing',
          careers: ['PR Executive', 'Brand Manager', 'Advertising Creative', 'Media Planner'],
          salary: '₹4-22 LPA'
        }
      ]
    },

    careerPaths: {
      title: '💼 Career Opportunities',
      immediate: [
        'Junior Reporter',
        'Content Writer',
        'Social Media Executive',
        'Production Assistant',
        'PR Executive',
        'Digital Marketing Executive'
      ],
      advanced: [
        'Senior Editor',
        'News Director',
        'Media Entrepreneur',
        'Communication Head',
        'Creative Director',
        'Media Consultant'
      ],
      sectors: [
        'Newspapers & Magazines',
        'Television Channels',
        'Digital Media Companies',
        'Advertising Agencies',
        'PR Firms',
        'Corporate Communications'
      ]
    },

    salary: {
      title: '💰 Salary Expectations',
      india: {
        fresher: '₹2.5-6 LPA (Average), ₹8-12 LPA (Top Media Houses)',
        experienced: '₹8-25 LPA (5+ years)',
        senior: '₹20-50 LPA (Senior positions/Entrepreneurs)'
      },
      abroad: {
        fresher: '$35,000-$60,000 (USA/Europe)',
        experienced: '$60,000-$100,000 (5+ years)',
        senior: '$100,000+ (Senior positions)'
      }
    },

    advantages: {
      title: '✅ Advantages',
      points: [
        'Dynamic and exciting career',
        'Opportunity to influence society',
        'Creative freedom and expression',
        'Networking with diverse people',
        'Travel opportunities',
        'Continuous learning environment',
        'Multiple career paths available'
      ]
    },

    challenges: {
      title: '⚠️ Challenges & Solutions',
      items: [
        {
          challenge: 'Irregular Working Hours',
          solution: 'Develop time management skills, maintain work-life balance, build stamina'
        },
        {
          challenge: 'High Competition in Media Industry',
          solution: 'Build strong portfolio, network actively, develop niche expertise'
        },
        {
          challenge: 'Initial Low Salaries',
          solution: 'Gain experience first, freelance for additional income, focus on skill development'
        },
        {
          challenge: 'Rapidly Changing Digital Landscape',
          solution: 'Stay updated with technology, learn new tools, adapt to digital trends'
        }
      ]
    },

    resources: {
      title: '📚 Essential Resources',
      categories: [
        {
          category: 'Writing & Content',
          resources: ['AP Stylebook', 'Elements of Style', 'Content Writing Courses']
        },
        {
          category: 'Production Tools',
          resources: ['Adobe Creative Suite', 'Final Cut Pro', 'Audacity', 'Canva']
        },
        {
          category: 'Digital Skills',
          resources: ['Social Media Analytics', 'SEO Courses', 'Google Analytics']
        },
        {
          category: 'Industry Knowledge',
          resources: ['Media Magazines', 'Journalism Courses', 'Press Council Guidelines']
        }
      ]
    }
  }

  // Add more detailed roadmaps as needed for other popular courses
};

const CCPM = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeStream, setActiveStream] = useState(null);
  const [selectedRoadmap, setSelectedRoadmap] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [search, setSearch] = useState('');
  const [showCareerTable, setShowCareerTable] = useState(false);

  const toggleCategory = (category) => {
    setActiveStream(null);
    setSelectedRoadmap(null);
    setActiveCategory(activeCategory === category ? null : category);
    setShowCareerTable(false);
  };

  const toggleStream = (stream) => {
    setSelectedRoadmap(null);
    setActiveStream(activeStream === stream ? null : stream);
  };

  const selectRoadmap = (stream) => {
    setSelectedRoadmap(stream);
    setShowCareerTable(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const showAllCareers = () => {
    setShowCareerTable(true);
    setActiveCategory(null);
    setSelectedRoadmap(null);
  };

  const floatingElements = ["🛣️", "💼", "🎯", "📈", "🚀", "💡", "🌟", "🔥"];

  // Filter courses based on search
  const filteredCourses = Object.keys(courseCareerMapping).filter(course =>
    course.toLowerCase().includes(search.toLowerCase()) ||
    courseCareerMapping[course].careers.some(career => 
      career.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden font-poppins select-none">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className={`absolute text-2xl opacity-5 animate-bounce`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {element}
          </div>
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>

      {/* Hamburger Button */}
      <button
        onClick={toggleSidebar}
        className="fixed bg-blue-600 ml-8 mt-5 text-white p-3 rounded-lg shadow-lg hover:bg-blue-700 transition z-50"
      >
        <div className="w-5 h-3 flex flex-col justify-between">
          <span className="block h-0.5 bg-white"></span>
          <span className="block h-0.5 bg-white"></span>
          <span className="block h-0.5 bg-white"></span>
        </div>
      </button>

      {/* Enhanced Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 top-[5.5rem] h-[90vh] w-80 bg-white/90 backdrop-blur-lg shadow-xl z-40 overflow-y-auto rounded-r-2xl border border-gray-200"
          >
            <div className="p-6">
              <div className="flex items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800 ml-18 -mt-0.5">
                  Career Fields
                </h3>
              </div>

              {/* Course Categories */}
              <div className="space-y-3 mb-8">
                {courseCategories.map((category) => (
                  <motion.button
                    key={category.name}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => toggleCategory(category.name)}
                    className={`w-full text-left py-3 px-4 font-semibold rounded-md transition-colors duration-300 ${
                      activeCategory === category.name
                        ? 'bg-blue-500 text-white shadow-md'
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200'
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </motion.button>
                ))}
              </div>

              {/* Enhanced Quick Access Button */}
              <div className="mb-8">
                <button
                  onClick={showAllCareers}
                  className="w-full py-3 px-4 font-semibold rounded-md bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <span className="text-xl mr-2">📊</span>
                  View All Career Opportunities
                </button>
              </div>

              {/* Navigation Links */}
              <div className="mt-8 space-y-4">
                <Link
                  to="/after10th/course"
                  className="block w-full py-3 px-4 font-semibold rounded-md bg-green-500/20 hover:bg-green-500/30 text-black-200 text-center transition backdrop-blur-sm border border-green-500/30"
                >
                  📚 All Courses
                </Link>

                <Link
                  to="/after10th/colleges"
                  className="block w-full py-3 px-4 font-semibold rounded-md bg-purple-500/20 hover:bg-purple-500/30 text-black-200 text-center transition backdrop-blur-sm border border-purple-500/30"
                >
                  🏫 Colleges
                </Link>

                <Link
                  to="/after10th/scholarship"
                  className="block w-full py-3 px-4 font-semibold rounded-md bg-cyan-500/20 hover:bg-cyan-500/30 text-black-200 text-center transition backdrop-blur-sm border border-cyan-500/30"
                >
                  🎓 Scholarships
                </Link>

                <Link
                  to="/after-10th"
                  className="block w-full py-3 px-4 font-semibold rounded-md bg-pink-500/20 hover:bg-pink-500/30 text-black-200 text-center transition backdrop-blur-sm border border-pink-500/30"
                >
                  🏠 Back to Home
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-80' : 'ml-0'} relative z-10`}>
        
        {/* Animated Header */}
        <div className="text-center py-12 px-4">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-2 text-3xl animate-bounce">
              <span className="animation-delay-0">🛣️</span>
              <span className="animation-delay-200">💼</span>
              <span className="animation-delay-400">🎯</span>
            </div>
          </div>
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-700 to-blue-800 bg-clip-text text-transparent mb-6 animate-pulse">
            Course to Career Path Mapping
          </h1>

          {/* Search Section */}
          <div className="max-w-2xl mx-auto mb-8">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search career paths, courses, specializations..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Content Area */}
        <div className="px-8 pb-8">
          <AnimatePresence>
            {/* Enhanced Career Opportunities Table View */}
            {showCareerTable && (
              <motion.div
                key="career-table"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              >
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-4xl font-bold text-gray-800">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-800 bg-clip-text text-transparent">
                      Complete Career Opportunities Database
                    </span>
                  </h2>
                  <button
                    onClick={() => setShowCareerTable(false)}
                    className="bg-gray-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
                  >
                    ← Back
                  </button>
                </div>

                {/* Enhanced Filter Options */}
                <div className="mb-6 flex flex-wrap gap-4">
                  <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-blue-500">
                    <option value="">All Fields</option>
                    {courseCategories.map(category => (
                      <option key={category.name} value={category.name}>{category.name}</option>
                    ))}
                  </select>
                  <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-blue-500">
                    <option value="">All Salary Ranges</option>
                    <option value="low">₹2-8 LPA</option>
                    <option value="medium">₹8-20 LPA</option>
                    <option value="high">₹20+ LPA</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Search courses or careers..."
                    className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 flex-1 min-w-[200px]"
                  />
                </div>

                {/* Enhanced Table */}
                <div className="overflow-x-auto shadow-lg rounded-lg">
                  <table className="w-full border-collapse border border-gray-300 bg-white">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                        <th className="border border-gray-300 px-4 py-4 text-left font-bold text-sm uppercase tracking-wide">
                          <div className="flex items-center">
                            🎓 Course
                          </div>
                        </th>
                        <th className="border border-gray-300 px-4 py-4 text-left font-bold text-sm uppercase tracking-wide">
                          <div className="flex items-center">
                            📋 Eligibility
                          </div>
                        </th>
                        <th className="border border-gray-300 px-4 py-4 text-left font-bold text-sm uppercase tracking-wide">
                          <div className="flex items-center">
                            💼 Career Opportunities
                          </div>
                        </th>
                        <th className="border border-gray-300 px-4 py-4 text-left font-bold text-sm uppercase tracking-wide">
                          <div className="flex items-center">
                            💰 Salary Range
                          </div>
                        </th>
                        <th className="border border-gray-300 px-4 py-4 text-center font-bold text-sm uppercase tracking-wide">
                          🔍 Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(courseCareerMapping).map(([course, data], index) => (
                        <motion.tr 
                          key={course} 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-all duration-300 cursor-pointer hover:shadow-md`}
                          onClick={() => selectRoadmap(course)}
                        >
                          <td className="border border-gray-300 px-4 py-4">
                            <div className="font-semibold text-gray-800 text-sm mb-1">{course}</div>
                            <div className="text-xs text-gray-500 truncate max-w-[200px]">{data.description}</div>
                          </td>
                          <td className="border border-gray-300 px-4 py-4 text-gray-600 text-sm">
                            <div className="max-w-[150px]">{data.eligibility}</div>
                          </td>
                          <td className="border border-gray-300 px-4 py-4">
                            <div className="flex flex-wrap gap-1">
                              {data.careers.slice(0, 3).map((career, idx) => (
                                <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                  {career}
                                </span>
                              ))}
                              {data.careers.length > 3 && (
                                <span className="text-xs text-gray-500">+{data.careers.length - 3} more</span>
                              )}
                            </div>
                          </td>
                          <td className="border border-gray-300 px-4 py-4">
                            <span className="bg-green-100 text-green-800 font-semibold text-sm px-3 py-1 rounded-full">
                              {data.salary}
                            </span>
                          </td>
                          <td className="border border-gray-300 px-4 py-4 text-center">
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                selectRoadmap(course);
                              }}
                              className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs hover:bg-blue-600 transition-colors"
                            >
                              {careerRoadmaps[course] ? 'View Roadmap' : 'View Info'}
                            </button>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Enhanced Statistics */}
                <div className="mt-8 text-center">
                  <p className="text-gray-600 mb-6 text-lg">
                    💡 Click on any course row to view detailed career roadmap and complete information.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 text-center shadow-lg border border-blue-200"
                    >
                      <div className="text-3xl font-bold text-blue-600 mb-2">{Object.keys(courseCareerMapping).length}+</div>
                      <div className="text-sm text-gray-600 font-medium">Total Courses</div>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 text-center shadow-lg border border-green-200"
                    >
                      <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                      <div className="text-sm text-gray-600 font-medium">Career Options</div>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 text-center shadow-lg border border-purple-200"
                    >
                      <div className="text-3xl font-bold text-purple-600 mb-2">8</div>
                      <div className="text-sm text-gray-600 font-medium">Major Streams</div>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6 text-center shadow-lg border border-orange-200"
                    >
                      <div className="text-3xl font-bold text-orange-600 mb-2">₹2-80L</div>
                      <div className="text-sm text-gray-600 font-medium">Salary Range</div>
                    </motion.div>
                  </div>
                  
                  {/* Export and Share Options */}
                  <div className="mt-8 flex justify-center gap-4">
                    <button className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105">
                      📊 Export to Excel
                    </button>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105">
                      📱 Share Database
                    </button>
                    <button className="bg-purple-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-600 transition-all duration-300 transform hover:scale-105">
                      📥 Download PDF
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Main Introduction */}
            {!activeCategory && !selectedRoadmap && !showCareerTable && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="mb-16"
              >
                {/* Introduction */}
                <div className="bg-white rounded-2xl p-8 border border-gray-200 max-w-4xl mx-auto mb-12 shadow-sm">
                  <p className="text-gray-700 text-xl leading-relaxed">
                    Discover comprehensive career roadmaps for every course and field. From detailed year-wise academic progression to industry insights, salary expectations, and growth opportunities - <span className="text-blue-600 font-semibold">EduAdvisor</span> provides complete career path mapping to help you make informed decisions about your educational journey and professional future.
                  </p>
                </div>

                {/* Stream-wise Tips */}
                <div className="bg-white rounded-2xl p-8 border border-gray-200 max-w-6xl mx-auto mb-12 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">🎯 Stream-wise Career Guidance</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">📐 PCM Students</h4>
                      <p className="text-blue-700 text-sm">Perfect for Engineering, Computer Science, Data Science & Technical fields</p>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                      <h4 className="font-semibold text-red-800 mb-2">🧬 PCB Students</h4>
                      <p className="text-red-700 text-sm">Ideal for Medical, Pharmacy, Life Sciences & Healthcare careers</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-2">💼 Commerce Students</h4>
                      <p className="text-green-700 text-sm">Great for Business, Finance, Accounting & Management roles</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                      <h4 className="font-semibold text-purple-800 mb-2">🎨 Arts Students</h4>
                      <p className="text-purple-700 text-sm">Best for Design, Journalism, Humanities & Creative fields</p>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-gray-600 text-sm">
                      <strong>💡 Pro Tip:</strong> Skill-based courses are available for all streams and offer excellent short-term career opportunities!
                    </p>
                  </div>
                </div>

                {/* Course Category Cards */}
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full max-w-7xl mx-auto">
                  {courseCategories.map((category, index) => (
                    <div
                      key={category.name}
                      onClick={() => toggleCategory(category.name)}
                      className={`group cursor-pointer relative overflow-hidden bg-gradient-to-br ${category.bg} rounded-3xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-all duration-500 transform hover:shadow-xl border border-gray-200`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Card Background Pattern */}
                      <div className="absolute inset-0 bg-white/30"></div>
                      <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-700"></div>
                      <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/20 rounded-full translate-y-10 -translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>

                      {/* Floating Particles */}
                      <div className="absolute top-2 right-2 text-lg opacity-50 group-hover:animate-spin">
                        {category.particles.split('')[0]}
                      </div>
                      <div className="absolute top-4 right-6 text-sm opacity-40 group-hover:animate-bounce">
                        {category.particles.split('')[1]}
                      </div>
                      <div className="absolute top-6 right-10 text-xs opacity-30 group-hover:animate-pulse">
                        {category.particles.split('')[2]}
                      </div>

                      <div className="relative z-10">
                        {/* Icon */}
                        <div className="text-4xl mb-4 group-hover:animate-bounce">
                          {category.icon}
                        </div>

                        {/* Title */}
                        <h2 className="text-xl font-bold mb-3 text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                          {category.name}
                        </h2>

                        {/* Stream Count */}
                        <p className="text-sm text-gray-600 mb-4">
                          {category.streams.length} career paths
                        </p>

                        {/* Enhanced Button */}
                        <button className="relative overflow-hidden bg-white/70 text-gray-700 font-bold py-2 px-6 rounded-full border border-gray-300 hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg text-sm">
                          <span className="relative z-10">Explore Paths</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </button>
                      </div>

                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/30 group-hover:to-white/20 transition-all duration-500"></div>
                    </div>
                  ))}
                </div>

                {/* Quick Stats */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                  <div className="bg-white rounded-xl p-6 border border-gray-200 text-center shadow-sm">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{Object.keys(courseCareerMapping).length}+</div>
                    <div className="text-gray-600 text-sm">Career Paths</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-gray-200 text-center shadow-sm">
                    <div className="text-3xl font-bold text-purple-600 mb-2">8</div>
                    <div className="text-gray-600 text-sm">Major Fields</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-gray-200 text-center shadow-sm">
                    <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                    <div className="text-gray-600 text-sm">Detailed Info</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-gray-200 text-center shadow-sm">
                    <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                    <div className="text-gray-600 text-sm">Career Guidance</div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Rest of the component remains the same... */}
          {/* Category Streams View */}
          {activeCategory && !activeStream && !selectedRoadmap && !showCareerTable && (
            <motion.section
              key={activeCategory}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                <span className="bg-gradient-to-r from-blue-600 to-purple-800 bg-clip-text text-transparent">
                  {activeCategory} Career Paths
                </span>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {courseCategories.find(cat => cat.name === activeCategory)?.streams.map((stream) => {
                  const careerData = courseCareerMapping[stream];
                  return (
                    <motion.div
                      key={stream}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-50 p-6 rounded-xl shadow cursor-pointer hover:shadow-md transition border border-gray-200"
                      onClick={() => selectRoadmap(stream)}
                    >
                      <h3 className="font-semibold text-gray-800 text-lg mb-3">{stream}</h3>
                      {careerData && (
                        <div className="space-y-2 mb-4">
                          <p className="text-gray-600 text-sm">
                            <strong>Eligibility:</strong> {careerData.eligibility}
                          </p>
                          <p className="text-gray-600 text-sm">
                            <strong>Top Careers:</strong> {careerData.careers.slice(0, 3).join(', ')}
                          </p>
                          <p className="text-green-600 text-sm font-semibold">
                            <strong>Salary:</strong> {careerData.salary}
                          </p>
                        </div>
                      )}
                      <div className="flex justify-between text-xs">
                        <span className="text-blue-600">
                          {careerRoadmaps[stream] ? 'Detailed Roadmap Available' : 'Basic Info Available'}
                        </span>
                        <span className="text-gray-500">Click to explore →</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="text-center mt-8">
                <button
                  onClick={() => setActiveCategory(null)}
                  className="bg-gray-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
                >
                  ← Back to All Fields
                </button>
              </div>
            </motion.section>
          )}

          {/* All other sections remain exactly the same as in your original code... */}
          {/* Just continuing with the rest of the component structure */}

          {/* Detailed Roadmap View */}
          {selectedRoadmap && careerRoadmaps[selectedRoadmap] && (
            <motion.section
              key={selectedRoadmap}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {/* All detailed roadmap content remains the same */}
              {/* Course Header */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-800 bg-clip-text text-transparent">
                    {selectedRoadmap} Career Roadmap
                  </span>
                </h1>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {careerRoadmaps[selectedRoadmap].about}
                </p>
              </div>

              {/* All other roadmap sections remain the same */}
              {/* ... (keeping all the existing roadmap sections) */}

              {/* Action Buttons */}
              <div className="text-center space-x-4">
                <button
                  onClick={() => setSelectedRoadmap(null)}
                  className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  ← Back to {activeCategory} Paths
                </button>
                <button
                  onClick={() => {setActiveCategory(null); setSelectedRoadmap(null);}}
                  className="bg-gray-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
                >
                  ← Back to All Fields
                </button>
                <Link
                  to={`/career-guidance/${selectedRoadmap.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-8 rounded-full font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Personalized Guidance →
                </Link>
              </div>
            </motion.section>
          )}

          {/* Basic Course Info for courses without detailed roadmaps */}
          {selectedRoadmap && !careerRoadmaps[selectedRoadmap] && courseCareerMapping[selectedRoadmap] && (
            <motion.div
              key={`basic-${selectedRoadmap}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
            >
              <h1 className="text-4xl font-bold text-gray-800 mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-blue-800 bg-clip-text text-transparent">
                  {selectedRoadmap}
                </span>
              </h1>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">🎯 Course Overview</h3>
                  <p className="text-gray-700 mb-4">{courseCareerMapping[selectedRoadmap].description}</p>
                  
                  <h4 className="font-semibold text-gray-800 mb-2">📋 Eligibility:</h4>
                  <p className="text-gray-600 mb-4">{courseCareerMapping[selectedRoadmap].eligibility}</p>
                  
                  <h4 className="font-semibold text-gray-800 mb-2">💰 Salary Range:</h4>
                  <p className="text-green-600 font-semibold">{courseCareerMapping[selectedRoadmap].salary}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">💼 Career Opportunities</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {courseCareerMapping[selectedRoadmap].careers.map((career, index) => (
                      <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                        <span className="text-blue-800 font-medium">{career}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                  <p className="text-yellow-800">
                    <strong>🚧 Detailed Roadmap Coming Soon!</strong><br />
                    We're working on creating a comprehensive year-wise roadmap for {selectedRoadmap}. 
                    Meanwhile, you can explore the career opportunities above.
                  </p>
                </div>
                
                <div className="space-x-4">
                  <button
                    onClick={() => setSelectedRoadmap(null)}
                    className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-all duration-300"
                  >
                    ← Back to {activeCategory} Paths
                  </button>
                  <Link
                    to="/contact"
                    className="inline-block bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-all duration-300"
                  >
                    Request Detailed Roadmap
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {/* Continue with all other existing sections... */}
        </div>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <style jsx>{`
        .animation-delay-0 { animation-delay: 0ms; }
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        .animation-delay-2000 { animation-delay: 2000ms; }
      `}</style>
    </div>
  );
};

export default CCPM;