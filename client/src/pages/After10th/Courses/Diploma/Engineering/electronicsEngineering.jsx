import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const ElectronicsEngineering = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('overview');

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const courseData = {
    title: "Diploma in Electronics Engineering",
    icon: "📡",
    duration: "3 years (6 semesters)",
    eligibility: "10th pass (CBSE/State Board/equivalent), Minimum 35–50% marks",

    overview: {
      description:
        "Electronics Engineering focuses on the design, development, testing, and maintenance of electronic circuits, devices, and communication systems. The course provides strong fundamentals in analog and digital electronics, embedded systems, and communication technologies, preparing students for core industry roles and higher studies.",
      keyFeatures: [
        "Strong foundation in electronics & communication",
        "Hands-on practical and lab-based learning",
        "High demand in core and IT industries",
        "Opportunities in government & private sector",
        "Lateral entry option to B.Tech Engineering"
      ]
    },

    subjects: [
      "Electronic Devices & Circuits",
      "Analog Electronics",
      "Digital Electronics",
      "Microprocessors & Microcontrollers",
      "Embedded Systems",
      "Communication Systems",
      "Power Electronics",
      "Industrial Electronics",
      "PCB Design & Testing"
    ],

    labs: [
      {
        name: "Basic Electronics Lab",
        description: "Diodes, transistors, rectifiers, amplifiers"
      },
      {
        name: "Digital Electronics Lab",
        description: "Logic gates, flip-flops, counters"
      },
      {
        name: "Microcontroller Lab",
        description: "8051/Arduino programming & interfacing"
      },
      {
        name: "Communication Lab",
        description: "Modulation, demodulation, signal analysis"
      },
      {
        name: "PCB & Hardware Lab",
        description: "PCB design, soldering, circuit debugging"
      }
    ],

    skills: [
      "Electronic circuit design & troubleshooting",
      "Embedded systems & microcontroller programming",
      "PCB design & hardware testing",
      "Communication system analysis",
      "Industrial equipment maintenance",
      "Problem-solving & technical documentation"
    ],

    advantages: [
      "Wide career options in electronics & IT sectors",
      "Demand in automation, IoT, telecom, and EV industry",
      "Early job opportunities after diploma",
      "Foundation for B.Tech lateral entry",
      "Applicable across multiple industries"
    ],

    disadvantages: [
      "Initial salary may be lower than degree holders",
      "Rapid technology changes require continuous learning",
      "Core electronics roles may need higher studies",
      "Practical accuracy and precision are critical"
    ],

    futureScope: [
      "Electronics Technician / Junior Engineer roles",
      "Embedded systems & IoT industry growth",
      "Telecom, automation, robotics sectors",
      "Lateral entry to B.Tech → higher positions",
      "Government exams like RRB JE, SSC JE, PSU jobs"
    ],

    careerOpportunities: [
      "Electronics Technician",
      "Junior Electronics Engineer",
      "Embedded Systems Technician",
      "Maintenance Engineer",
      "PCB Design Technician",
      "Service Engineer (Electronics equipment)"
    ],

    examsEligible: [
      "Lateral entry to B.Tech (ECET / LEET)",
      "RRB JE, SSC JE, State JE exams",
      "PSU & government technical posts",
      "Private electronics, automation & IT companies"
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
      {/* Hamburger Button */}
      <button
        onClick={toggleSidebar}
        className="fixed bg-blue-600 ml-8 mt-15 text-white p-3 rounded-lg shadow-lg hover:bg-blue-700 transition z-50"
      >
        <div className="w-5 h-3 flex flex-col justify-between">
          <span className="block h-0.5 bg-white"></span>
          <span className="block h-0.5 bg-white"></span>
          <span className="block h-0.5 bg-white"></span>
        </div>
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 top-[8rem] h-[80vh] w-80 bg-white/90 backdrop-blur-lg shadow-xl z-40 overflow-y-auto rounded-r-2xl border border-gray-200"
          >
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Navigation</h3>

              <div className="space-y-2 mb-6">
                {sections.map(section => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left py-2 px-4 rounded-lg transition-colors ${
                      activeSection === section.id
                        ? 'bg-blue-500 text-white'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <span className="mr-2">{section.icon}</span>
                    {section.name}
                  </button>
                ))}
              </div>

              <div className="space-y-3">
                <Link
                  to="/after10th/diploma"
                  className="block w-full py-2 px-4 text-center bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg border border-purple-200"
                >
                  📜 Back to Diplomas
                </Link>
                <Link
                  to="/after-10th"
                  className="block w-full py-2 px-4 text-center bg-pink-50 hover:bg-pink-100 text-pink-700 rounded-lg border border-pink-200"
                >
                  🏠 Back to Home
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-80' : 'ml-0'} p-8`}>
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{courseData.icon}</div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{courseData.title}</h1>
          <div className="flex justify-center space-x-6 text-sm text-gray-600">
            <span>📅 {courseData.duration}</span>
            <span>🎓 {courseData.eligibility}</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {activeSection === 'overview' && (
            <p className="bg-white p-8 rounded-xl shadow border">{courseData.overview.description}</p>
          )}

          {activeSection === 'subjects' && (
            <ul className="grid md:grid-cols-2 gap-4 bg-white p-8 rounded-xl shadow border">
              {courseData.subjects.map((s, i) => (
                <li key={i} className="bg-blue-50 p-3 rounded border">{s}</li>
              ))}
            </ul>
          )}

          {activeSection === 'labs' && (
            <div className="space-y-4 bg-white p-8 rounded-xl shadow border">
              {courseData.labs.map((lab, i) => (
                <div key={i}>
                  <h3 className="font-semibold">{lab.name}</h3>
                  <p className="text-gray-600">{lab.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'skills' && (
            <ul className="grid md:grid-cols-2 gap-4 bg-white p-8 rounded-xl shadow border">
              {courseData.skills.map((s, i) => (
                <li key={i}>🔧 {s}</li>
              ))}
            </ul>
          )}

          {activeSection === 'career' && (
            <ul className="grid md:grid-cols-2 gap-4 bg-white p-8 rounded-xl shadow border">
              {courseData.careerOpportunities.map((c, i) => (
                <li key={i}>💼 {c}</li>
              ))}
            </ul>
          )}

          {activeSection === 'future' && (
            <ul className="space-y-3 bg-white p-8 rounded-xl shadow border">
              {courseData.futureScope.map((f, i) => (
                <li key={i}>🚀 {f}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ElectronicsEngineering;
