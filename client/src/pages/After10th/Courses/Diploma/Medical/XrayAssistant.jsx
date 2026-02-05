import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const XrayAssistant = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('overview');

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const courseData = {
    title: "X-Ray Assistant / Diploma in Medical Imaging Technology",
    icon: "🩻",
    duration: "1–2 years (depends on institute)",
    eligibility: "10th pass (State Board / CBSE), Science preferred",

    overview: {
      description:
        "X-Ray Assistant course trains students to assist radiologists and doctors in performing X-ray and imaging procedures. Students learn about medical imaging equipment, patient positioning, radiation safety, basic anatomy, and diagnostic procedures. This course prepares candidates for entry-level roles in hospitals, diagnostic centers, and imaging labs.",
      keyFeatures: [
        "Fast entry into medical & diagnostic field",
        "High demand in hospitals & scan centers",
        "Hands-on training with imaging equipment",
        "Good foundation for radiology careers",
        "Government & private hospital opportunities"
      ]
    },

    subjects: [
      "Basics of Human Anatomy",
      "Radiographic Techniques",
      "Medical Imaging Equipment",
      "Radiation Physics & Protection",
      "Patient Care & Positioning",
      "Basic Pathology",
      "Medical Ethics & Safety",
      "Hospital Procedures"
    ],

    labs: [
      {
        name: "X-Ray Imaging Lab",
        description: "Patient positioning and imaging techniques"
      },
      {
        name: "Radiation Safety Lab",
        description: "Handling radiation equipment safely"
      },
      {
        name: "Equipment Handling Lab",
        description: "Operating X-ray machines & accessories"
      },
      {
        name: "Anatomy Lab",
        description: "Understanding skeletal & organ structure"
      },
      {
        name: "Clinical Training",
        description: "Hands-on hospital or diagnostic center training"
      }
    ],

    skills: [
      "Operating X-ray machines",
      "Patient handling & care",
      "Radiation safety awareness",
      "Basic anatomy knowledge",
      "Medical ethics & discipline",
      "Teamwork with doctors & technicians"
    ],

    advantages: [
      "Short duration medical course",
      "High demand in diagnostic sector",
      "Job-oriented practical training",
      "Less academic pressure",
      "Good foundation for advanced radiology studies"
    ],

    disadvantages: [
      "Exposure to radiation (with safety precautions)",
      "Limited growth without higher qualification",
      "Shift-based hospital work",
      "Physically demanding at times"
    ],

    futureScope: [
      "Senior X-Ray Technician",
      "Higher studies → Diploma / Degree in Radiology",
      "Jobs in government & private hospitals",
      "Opportunities in diagnostic & scan centers",
      "Overseas opportunities with certification"
    ],

    careerOpportunities: [
      "X-Ray Assistant",
      "Radiology Technician",
      "Imaging Center Technician",
      "Hospital Diagnostic Staff",
      "Clinical Imaging Assistant"
    ],

    examsEligible: [
      "State Health Department recruitments",
      "Government hospital technician exams",
      "Private diagnostic center jobs",
      "Eligibility for advanced radiology courses"
    ]
  };

  const sections = [
    { id: 'overview', name: 'Overview', icon: '📋' },
    { id: 'subjects', name: 'Subjects', icon: '📚' },
    { id: 'labs', name: 'Labs', icon: '🧪' },
    { id: 'skills', name: 'Skills', icon: '🛠️' },
    { id: 'career', name: 'Career', icon: '💼' },
    { id: 'future', name: 'Future Scope', icon: '🚀' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden font-poppins">
      {/* Hamburger */}
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
            className="fixed left-0 top-[8rem] h-[80vh] w-80 bg-white/90 backdrop-blur-lg shadow-xl z-40 overflow-y-auto rounded-r-2xl border"
          >
            <div className="p-6">
              <h3 className="text-xl font-bold mb-6">Navigation</h3>

              <div className="space-y-2 mb-6">
                {sections.map(sec => (
                  <button
                    key={sec.id}
                    onClick={() => setActiveSection(sec.id)}
                    className={`w-full text-left py-2 px-4 rounded-lg ${
                      activeSection === sec.id
                        ? 'bg-blue-500 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <span className="mr-2">{sec.icon}</span>
                    {sec.name}
                  </button>
                ))}
              </div>

              <Link
                to="/after10th/diploma"
                className="block text-center py-2 bg-purple-100 rounded mb-2"
              >
                📜 Back to Diplomas
              </Link>
              <Link
                to="/after-10th"
                className="block text-center py-2 bg-pink-100 rounded"
              >
                🏠 Back to Home
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className={`transition-all ${sidebarOpen ? 'ml-80' : 'ml-0'} p-8`}>
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{courseData.icon}</div>
          <h1 className="text-4xl font-bold mb-2">{courseData.title}</h1>
          <div className="flex justify-center gap-6 text-gray-600 text-sm">
            <span>📅 {courseData.duration}</span>
            <span>🎓 {courseData.eligibility}</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {activeSection === 'overview' && (
            <motion.div className="bg-white p-8 rounded shadow">
              <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
              <p className="mb-6">{courseData.overview.description}</p>
              <div className="grid md:grid-cols-2 gap-3">
                {courseData.overview.keyFeatures.map((k, i) => (
                  <div key={i}>✔️ {k}</div>
                ))}
              </div>
            </motion.div>
          )}

          {activeSection === 'subjects' && (
            <motion.div className="bg-white p-8 rounded shadow">
              <h2 className="text-2xl font-bold mb-6">Subjects</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {courseData.subjects.map((s, i) => (
                  <div key={i} className="bg-blue-50 p-3 rounded">{s}</div>
                ))}
              </div>
            </motion.div>
          )}

          {activeSection === 'labs' && (
            <motion.div className="bg-white p-8 rounded shadow">
              <h2 className="text-2xl font-bold mb-6">Lab Training</h2>
              {courseData.labs.map((l, i) => (
                <div key={i}><b>{l.name}</b> – {l.description}</div>
              ))}
            </motion.div>
          )}

          {activeSection === 'career' && (
            <motion.div className="bg-white p-8 rounded shadow">
              <h2 className="text-2xl font-bold mb-6">Career Options</h2>
              {courseData.careerOpportunities.map((c, i) => (
                <div key={i}>🩻 {c}</div>
              ))}
            </motion.div>
          )}

          {activeSection === 'future' && (
            <motion.div className="bg-white p-8 rounded shadow">
              <h2 className="text-2xl font-bold mb-6">Future Scope</h2>
              {courseData.futureScope.map((f, i) => (
                <div key={i}>🚀 {f}</div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default XrayAssistant;
