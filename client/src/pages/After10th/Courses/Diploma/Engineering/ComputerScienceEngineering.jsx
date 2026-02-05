import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const ComputerScienceEngineering = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('overview');

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const courseData = {
    title: "Diploma in Computer Science Engineering",
    icon: "💻",
    duration: "3 years (6 semesters)",
    eligibility: "10th pass (CBSE/JKBOSE/equivalent), Minimum 35-50% marks",

    overview: {
      description:
        "Focuses on computer programming, software development, databases, operating systems, and networking. Students gain strong practical and theoretical knowledge to work in IT industries or pursue higher studies through lateral entry to B.Tech.",
      keyFeatures: [
        "High-demand IT and software field",
        "Strong programming foundation",
        "Practical lab-based learning",
        "Good placement opportunities",
        "Gateway to B.Tech lateral entry"
      ]
    },

    subjects: [
      "Programming in C / C++",
      "Data Structures",
      "Object-Oriented Programming (Java / Python)",
      "Database Management Systems (DBMS)",
      "Operating Systems",
      "Computer Networks",
      "Web Development (HTML, CSS, JavaScript)",
      "Software Engineering",
      "Mobile Application Development"
    ],

    labs: [
      { name: "Programming Lab", description: "C, C++, Java, Python practice" },
      { name: "Data Structures Lab", description: "Stacks, queues, linked lists" },
      { name: "DBMS Lab", description: "SQL queries and database design" },
      { name: "Web Development Lab", description: "Frontend & backend basics" },
      { name: "Networking Lab", description: "Network setup & troubleshooting" }
    ],

    skills: [
      "Programming & logical thinking",
      "Web & software development",
      "Database handling & SQL",
      "Problem-solving & debugging",
      "Team collaboration & project work",
      "Adaptability to new technologies"
    ],

    advantages: [
      "High demand across industries",
      "Remote & global job opportunities",
      "Good salary growth with skills",
      "Multiple career paths available",
      "Easy transition to B.Tech IT/CSE"
    ],

    disadvantages: [
      "Requires continuous skill upgradation",
      "High competition in IT field",
      "Screen-intensive work",
      "Initial salary depends on skill level"
    ],

    futureScope: [
      "Software Developer / Programmer",
      "Web Developer / App Developer",
      "System Administrator / Network Engineer",
      "Lateral entry to B.Tech CSE / IT",
      "Opportunities in AI, Data Science, Cybersecurity"
    ],

    careerOpportunities: [
      "Junior Software Developer",
      "Web Developer",
      "Application Support Engineer",
      "System Administrator",
      "Database Assistant",
      "IT Support Technician"
    ],

    examsEligible: [
      "Lateral entry to B.Tech (ECET / LEET)",
      "Banking & government IT posts",
      "Private IT companies & startups",
      "Certifications (Java, Python, Cloud, Cybersecurity)"
    ]
  };

  const sections = [
    { id: 'overview', name: 'Overview', icon: '📋' },
    { id: 'subjects', name: 'Subjects', icon: '📚' },
    { id: 'labs', name: 'Labs', icon: '🔬' },
    { id: 'skills', name: 'Skills', icon: '🛠️' },
    { id: 'career', name: 'Career', icon: '💼' },
    { id: 'future', name: 'Future Scope', icon: '🚀' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden font-poppins">
      <button
        onClick={toggleSidebar}
        className="fixed bg-blue-600 ml-8 mt-15 text-white p-3 rounded-lg shadow-lg hover:bg-blue-700 transition z-50"
      >
        ☰
      </button>

      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 top-[8rem] h-[80vh] w-80 bg-white/90 shadow-xl z-40 overflow-y-auto rounded-r-2xl"
          >
            <div className="p-6 space-y-2">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full py-2 px-4 rounded-lg ${
                    activeSection === section.id
                      ? 'bg-blue-500 text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {section.icon} {section.name}
                </button>
              ))}

              <Link to="/after10th/diploma" className="block text-center bg-purple-100 p-2 rounded-lg">
                Back to Diplomas
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`p-8 transition-all ${sidebarOpen ? 'ml-80' : 'ml-0'}`}>
        <div className="text-center mb-8">
          <div className="text-6xl">{courseData.icon}</div>
          <h1 className="text-4xl font-bold">{courseData.title}</h1>
          <p>{courseData.duration} | {courseData.eligibility}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {activeSection === 'overview' && <p>{courseData.overview.description}</p>}
          {activeSection === 'subjects' && courseData.subjects.map(s => <p key={s}>• {s}</p>)}
          {activeSection === 'labs' && courseData.labs.map(l => <p key={l.name}>• {l.name}</p>)}
          {activeSection === 'skills' && courseData.skills.map(s => <p key={s}>• {s}</p>)}
          {activeSection === 'career' && courseData.careerOpportunities.map(c => <p key={c}>• {c}</p>)}
          {activeSection === 'future' && courseData.futureScope.map(f => <p key={f}>• {f}</p>)}
        </div>
      </div>
    </div>
  );
};

export default ComputerScienceEngineering;
