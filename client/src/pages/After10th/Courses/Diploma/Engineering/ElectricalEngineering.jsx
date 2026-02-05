import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const ElectricalEngineering = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('overview');

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const courseData = {
    title: "Diploma in Electrical Engineering",
    icon: "⚡",
    duration: "3 years (6 semesters)",
    eligibility: "10th pass (CBSE/State Board/equivalent), Minimum 35-50% marks",

    overview: {
      description:
        "Focuses on generation, transmission, distribution, and utilization of electrical power. Covers electrical machines, power systems, wiring, control systems, and industrial automation. Students gain strong theoretical knowledge along with hands-on practical training.",
      keyFeatures: [
        "Strong practical and lab-oriented learning",
        "High demand in power & industrial sectors",
        "Government and private sector opportunities",
        "Foundation for B.Tech lateral entry",
        "Wide scope in automation and renewable energy"
      ]
    },

    subjects: [
      "Electrical Circuits & Networks",
      "Electrical Machines (DC, AC, Transformers)",
      "Power Generation & Transmission",
      "Power Electronics",
      "Control Systems Basics",
      "Electrical Measurements & Instruments",
      "Industrial Wiring & Safety",
      "PLC & Automation Basics",
      "Renewable Energy Systems"
    ],

    labs: [
      {
        name: "Electrical Machines Lab",
        description: "Testing of motors, generators, transformers"
      },
      {
        name: "Electrical Circuits Lab",
        description: "Verification of circuit laws and theorems"
      },
      {
        name: "Power Electronics Lab",
        description: "SCR, rectifier, inverter experiments"
      },
      {
        name: "Wiring & Installation Lab",
        description: "Domestic & industrial wiring practice"
      },
      {
        name: "PLC / Automation Lab",
        description: "Basic automation and control experiments"
      }
    ],

    skills: [
      "Electrical wiring & installation",
      "Operation of electrical machines",
      "Fault detection & maintenance",
      "Power system basics",
      "Industrial automation fundamentals",
      "Problem-solving & safety practices"
    ],

    advantages: [
      "High demand in power & manufacturing sectors",
      "Early job opportunities after diploma",
      "Eligible for B.Tech lateral entry",
      "Government job opportunities (JE roles)",
      "Scope in renewable & smart energy sectors"
    ],

    disadvantages: [
      "Initial salary lower than B.Tech graduates",
      "Field work can be risky without safety",
      "Career growth limited without higher studies",
      "Continuous upskilling required with new technologies"
    ],

    futureScope: [
      "Junior Engineer / Electrical Supervisor",
      "Maintenance Engineer in industries",
      "Lateral entry to B.Tech → Power Engineer",
      "Opportunities in solar & wind energy",
      "Automation & smart grid careers"
    ],

    careerOpportunities: [
      "Junior Electrical Engineer",
      "Electrical Supervisor",
      "Maintenance Technician",
      "PLC Technician",
      "Power Plant Technician",
      "Electrical Contractor Assistant"
    ],

    examsEligible: [
      "Lateral entry to B.Tech Electrical Engineering (ECET/LEET)",
      "SSC JE, RRB JE (Electrical)",
      "State Electricity Board jobs",
      "Private industries & power companies"
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
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
              <p className="text-gray-700 mb-6">{courseData.overview.description}</p>
              <h2 className="text-2xl font-bold mb-4">KeyFeatures</h2>
              <p className="text-gray-700 mb-6">{courseData.overview.keyFeatures}</p>
            </motion.div>
          )}

          {activeSection === 'subjects' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold mb-6">Subjects Covered</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {courseData.subjects.map((s, i) => (
                  <div key={i} className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    {s}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeSection === 'labs' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold mb-6">Laboratory Training</h2>
              {courseData.labs.map((lab, i) => (
                <div key={i} className="mb-3 bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold">{lab.name}</h3>
                  <p className="text-gray-600">{lab.description}</p>
                </div>
              ))}
            </motion.div>
          )}
           {activeSection === 'skills' && (
            <motion.div initial={{ opacity: 0, y: 20 }}animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Skills You'll Gain</h2>
              <div className="grid md:grid-cols-2 gap-4">{courseData.skills.map((skill, index) => (
                <div key={index} className="flex items-start space-x-2">
                    <span className="text-green-600"></span>
                    <span className="text-gray-700">{skill}</span>
                </div>
             ))}
           </div>
           </motion.div>
            )}
            {activeSection === 'career' && (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Career Opportunities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {courseData.careerOpportunities.map((career, index) => (
                        <div key={index} className="bg-blue-50 p-4 rounded-lg border border-blue-200">{career}
                        </div>
                        ))}
                    </div>
                <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Exams & Further Studies</h3>
                {courseData.examsEligible.map((exam, index) => (
                    <div key={index} className="bg-gray-50 p-3 mb-2 rounded-lg border">{exam}
                     </div>
                ))}
                </div>
            </motion.div>
             )}
             {activeSection === 'future' && (
              <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Future Scope (5–10 years)</h2>
                            <div className="space-y-4">
                                {courseData.futureScope.map((scope, index) => (
                                <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border"> {scope}
                                </div>
                ))}
                </div>
                </motion.div>
                )}
        </div>
      </div>
    </div>
  );
};

export default ElectricalEngineering;
