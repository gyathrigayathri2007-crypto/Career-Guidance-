import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const PharmacyAssistant = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('overview');

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const courseData = {
    title: "Pharmacy Assistant / Diploma in Pharmacy Assistance",
    icon: "💊",
    duration: "1-2 years (depending on institute)",
    eligibility: "10th pass (CBSE/State Board), Science background preferred",
    
    overview: {
      description:
        "Pharmacy Assistant course trains students to assist licensed pharmacists in dispensing medicines, managing pharmacy stores, maintaining prescriptions, and handling customer queries. Students learn about medicines, dosage forms, drug storage, pharmacy ethics, and basic healthcare practices. This course prepares candidates for entry-level roles in hospitals, medical stores, clinics, and pharmaceutical companies.",
      keyFeatures: [
        "Quick entry into healthcare & pharmacy sector",
        "Practical exposure to pharmacy operations",
        "High demand in hospitals & medical stores",
        "Foundation for higher pharmacy education",
        "Government & private sector opportunities"
      ]
    },

    subjects: [
      "Basics of Pharmacology",
      "Human Anatomy & Physiology",
      "Pharmaceutical Chemistry (Basics)",
      "Drug Classification & Uses",
      "Hospital & Community Pharmacy",
      "Medical Terminology",
      "Pharmacy Ethics & Law",
      "Storage & Handling of Medicines"
    ],

    labs: [
      {
        name: "Pharmacy Practice Lab",
        description: "Prescription reading, dispensing, labeling medicines"
      },
      {
        name: "Drug Storage Lab",
        description: "Proper storage conditions, expiry & stock management"
      },
      {
        name: "Dosage Form Lab",
        description: "Tablets, syrups, ointments identification"
      },
      {
        name: "Hospital Pharmacy Lab",
        description: "Working procedure of hospital pharmacy"
      },
      {
        name: "Record Maintenance Lab",
        description: "Billing, inventory & prescription records"
      }
    ],

    skills: [
      "Medicine dispensing & labeling",
      "Understanding prescriptions & dosage",
      "Stock management & inventory control",
      "Basic pharmacology knowledge",
      "Customer communication & patient care",
      "Pharmacy ethics & safety practices"
    ],

    advantages: [
      "Short duration course with fast job entry",
      "Growing demand in healthcare & pharma industry",
      "Less academic pressure compared to degree courses",
      "Suitable for hospital & retail pharmacy jobs",
      "Foundation for higher pharmacy studies"
    ],

    disadvantages: [
      "Limited authority without licensed pharmacist",
      "Salary growth limited at entry-level",
      "Career advancement requires further education",
      "Work involves long standing hours in pharmacies"
    ],

    futureScope: [
      "Pharmacy Technician, Senior Pharmacy Assistant",
      "Further studies → D.Pharm, B.Pharm",
      "Opportunities in hospitals, pharma companies, medical chains",
      "Growth with expansion of healthcare & pharmaceutical industry",
      "Opportunities abroad after certification & experience"
    ],

    careerOpportunities: [
      "Pharmacy Assistant",
      "Hospital Pharmacy Staff",
      "Medical Store Assistant",
      "Clinical Pharmacy Assistant",
      "Pharmaceutical Sales Assistant"
    ],

    examsEligible: [
      "State Health Department pharmacy-related recruitment",
      "Private & government hospital pharmacy jobs",
      "Eligibility for D.Pharm / B.Pharm (as per institute rules)",
      "Opportunities in retail & wholesale pharmacy sector"
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
      {/* Hamburger Button */}
      <button
        onClick={toggleSidebar}
        className="fixed bg-green-600 ml-8 mt-15 text-white p-3 rounded-lg shadow-lg hover:bg-green-700 transition z-50"
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
                        ? 'bg-green-500 text-white'
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
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="bg-white p-8 rounded-xl shadow border">
              <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
              <p className="mb-6 text-gray-700">{courseData.overview.description}</p>
              <div className="grid md:grid-cols-2 gap-4">
                {courseData.overview.keyFeatures.map((f, i) => (
                  <div key={i}>✔️ {f}</div>
                ))}
              </div>
            </motion.div>
          )}

          {activeSection === 'subjects' && (
            <motion.div className="bg-white p-8 rounded-xl shadow border">
              <h2 className="text-2xl font-bold mb-6">Subjects Covered</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {courseData.subjects.map((s, i) => (
                  <div key={i} className="bg-green-50 p-3 rounded">{s}</div>
                ))}
              </div>
            </motion.div>
          )}

          {activeSection === 'labs' && (
            <motion.div className="bg-white p-8 rounded-xl shadow border">
              <h2 className="text-2xl font-bold mb-6">Laboratory Training</h2>
              {courseData.labs.map((l, i) => (
                <div key={i} className="mb-3">
                  <strong>{l.name}</strong> – {l.description}
                </div>
              ))}
            </motion.div>
          )}

          {activeSection === 'career' && (
            <motion.div className="bg-white p-8 rounded-xl shadow border">
              <h2 className="text-2xl font-bold mb-6">Career Opportunities</h2>
              {courseData.careerOpportunities.map((c, i) => (
                <div key={i}>💊 {c}</div>
              ))}
            </motion.div>
          )}

          {activeSection === 'future' && (
            <motion.div className="bg-white p-8 rounded-xl shadow border">
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

export default PharmacyAssistant;
