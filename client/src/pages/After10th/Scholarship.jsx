import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const scholarshipTypes = [
  {
    name: 'Government Scholarships',
    icon: '🏛️',
    bg: 'from-blue-400 via-blue-500 to-blue-600',
    particles: '🏛️📜💰'
  },
  {
    name: 'Private Scholarships',
    icon: '🏢',
    bg: 'from-purple-400 via-purple-500 to-purple-600',
    particles: '🏢💼🌟'
  },
  {
    name: 'Merit Based',
    icon: '🎯',
    bg: 'from-green-400 via-green-500 to-green-600',
    particles: '🎯📊⭐'
  },
  {
    name: 'Need Based',
    icon: '🤝',
    bg: 'from-orange-400 via-orange-500 to-orange-600',
    particles: '🤝💝🏠'
  },
  {
    name: 'Minority Scholarships',
    icon: '🌍',
    bg: 'from-teal-400 via-teal-500 to-teal-600',
    particles: '🌍🤲🕊️'
  },
  {
    name: 'Sports & Arts',
    icon: '🎨',
    bg: 'from-pink-400 via-pink-500 to-pink-600',
    particles: '🎨🏆🎭'
  },
];

const scholarshipDetails = {
  // Government Scholarships
  'Central Sector Scheme': {
    amount: '₹10,000–₹20,000 per year',
    eligibility: '10th pass, 12th pass, min 80% marks, family income < ₹8L PA',
    lastDate: '31-Jul-2025',
    applyLink: 'https://scholarships.gov.in/',
    benefits: 'Annual stipend, Fee reimbursement, Book allowance'
  },
  'NMMS Scholarship': {
    amount: '₹12,000 per year',
    eligibility: '8th pass, min 55% marks, family income < ₹3.5L PA',
    lastDate: '31-Oct-2025',
    applyLink: 'https://scholarships.gov.in/',
    benefits: 'Monthly stipend, Study material, Exam fee waiver'
  },
  'KVPY Fellowship': {
    amount: 'Monthly stipend up to ₹10,000',
    eligibility: '11th, 12th, UG, min 75% marks (science stream)',
    lastDate: '31-Aug-2025',
    applyLink: 'https://kvpy.iisc.ac.in/',
    benefits: 'Monthly stipend, Research opportunities, Mentorship'
  },
  'PM YASASVI': {
    amount: 'Up to ₹75,000 per year',
    eligibility: '9th to PG, OBC/EBC/DNT, family income < ₹2.5L PA',
    lastDate: '10-Oct-2025',
    applyLink: 'https://yasasvi.nic.in/',
    benefits: 'Full scholarship, Living allowance, Book allowance'
  },

  // Private Scholarships
  'Tata Endowment': {
    amount: 'Loan-cum-scholarship up to ₹10 Lakh',
    eligibility: 'Postgraduate abroad (merit-based)',
    lastDate: '31-Mar-2025',
    applyLink: 'https://www.jntataendowment.org',
    benefits: 'Full funding, Travel allowance, Living expenses'
  },
  'Aditya Birla Scholarship': {
    amount: 'Approx. ₹60,000/year',
    eligibility: 'Based on merit & leadership',
    lastDate: '30-Jun-2025',
    applyLink: 'https://www.adityabirlascholars.net',
    benefits: 'Scholarship amount, Leadership training, Network access'
  },
  'Vidyadhan Scholarship': {
    amount: '₹6,000–₹10,000/year',
    eligibility: 'Class 10 passed with ≥85% (SC/ST 75%)',
    lastDate: '31-Dec-2025',
    applyLink: 'https://www.vidyadhan.org',
    benefits: 'Educational support, Career guidance, Skill development'
  },

  // Merit Based
  'Inspire Scholarship': {
    amount: '₹80,000/year',
    eligibility: 'Top 1% in Class 12 / JEE / KVPY',
    lastDate: '31-Aug-2025',
    applyLink: 'https://online-inspire.gov.in',
    benefits: 'Annual scholarship, Research opportunities, Mentorship'
  },
  'Kishore Vaigyanik': {
    amount: 'Monthly stipend up to ₹7,000',
    eligibility: 'Class 11, 12 science students with 75%+',
    lastDate: '15-Sep-2025',
    applyLink: 'https://kvpy.iisc.ac.in/',
    benefits: 'Monthly stipend, Research exposure, IISc connection'
  },

  // Need Based
  'Post Matric SC/ST': {
    amount: '₹230–₹1,200/month + Fee',
    eligibility: 'SC/ST students, Class 10 passed',
    lastDate: '30-Sep-2025',
    applyLink: 'https://scholarships.gov.in/',
    benefits: 'Tuition fee, Maintenance allowance, Study material'
  },
  'Minority Scholarship': {
    amount: 'Up to ₹35,000 per year',
    eligibility: 'Minority community, 10th pass, family income < ₹2L PA',
    lastDate: '15-Nov-2025',
    applyLink: 'https://min.gov.in/',
    benefits: 'Tuition fee, Maintenance allowance, Study material'
  },

  // Minority Scholarships
  'Maulana Azad Fellowship': {
    amount: '₹25,000/month + Contingency',
    eligibility: 'Minority students for research',
    lastDate: '31-Dec-2025',
    applyLink: 'https://ugc.ac.in/',
    benefits: 'Monthly fellowship, Research grant, HRA'
  },
  'Begum Hazrat Scholarship': {
    amount: '₹10,000/year',
    eligibility: 'Muslim girl students, Class 9-12',
    lastDate: '31-Oct-2025',
    applyLink: 'https://scholarships.gov.in/',
    benefits: 'Annual scholarship, Educational support'
  },

  // Sports & Arts
  'Pragati Scholarship Girls': {
    amount: '₹30,000 per year',
    eligibility: 'Girls, technical education, family income < ₹8L PA',
    lastDate: '31-Oct-2025',
    applyLink: 'https://scholarships.gov.in/',
    benefits: 'Educational support, Career guidance, Skill development'
  },
  'Cultural Talent Search': {
    amount: '₹2,000/month',
    eligibility: 'Students with cultural talents, age 10-14',
    lastDate: '30-Sep-2025',
    applyLink: 'https://ccrtindia.gov.in/',
    benefits: 'Monthly stipend, Training, Performance opportunities'
  },
};

const Scholarship = () => {
  const [activeType, setActiveType] = useState(null);
  const [activeScholarship, setActiveScholarship] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [typesExpanded, setTypesExpanded] = useState(false);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const toggleType = (type) => {
    setActiveScholarship(null);
    setActiveType(activeType === type ? null : type);
  };

  const toggleScholarship = (scholarship) => {
    setActiveScholarship(activeScholarship === scholarship ? null : scholarship);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleTypesInSidebar = () => {
    setTypesExpanded(!typesExpanded);
  };

  const getTypeScholarships = (type) => {
    switch (type) {
      case 'Government Scholarships':
        return ['Central Sector Scheme', 'NMMS Scholarship', 'KVPY Fellowship', 'PM YASASVI'];
      case 'Private Scholarships':
        return ['Tata Endowment', 'Aditya Birla Scholarship', 'Vidyadhan Scholarship'];
      case 'Merit Based':
        return ['Inspire Scholarship', 'Kishore Vaigyanik'];
      case 'Need Based':
        return ['Post Matric SC/ST', 'Minority Scholarship'];
      case 'Minority Scholarships':
        return ['Maulana Azad Fellowship', 'Begum Hazrat Scholarship'];
      case 'Sports & Arts':
        return ['Pragati Scholarship Girls', 'Cultural Talent Search'];
      default:
        return [];
    }
  };

  const categories = ['All', 'Government', 'Private', 'Merit', 'Need', 'Minority', 'Sports'];

  const floatingElements = ["💰", "🎓", "📚", "🏆", "✨", "🌟", "⚡", "💎", "🎯"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-gray-800 to-slate-800 relative overflow-hidden font-poppins select-none">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className={`absolute text-3xl opacity-10 animate-bounce`}
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
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-40 w-64 h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse animation-delay-4000"></div>

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
            className="fixed left-0 top-[5.5rem] h-[90vh] w-80 bg-black/20 backdrop-blur-lg shadow-xl z-40 overflow-y-auto rounded-r-2xl border border-white/20"
          >
            <div className="p-6">
              <div className="flex items-center mb-6">
                <h3 className="text-xl font-bold text-white ml-18 -mt-0.5">
                  Menu
                </h3>
              </div>

              {/* Scholarship Types Section */}
              <div className="mb-4">
                <button
                  onClick={toggleTypesInSidebar}
                  className="w-full text-left py-3 px-4 font-semibold rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors duration-300 backdrop-blur-sm border border-white/20"
                >
                  Scholarship Types {typesExpanded ? '▼' : '▶'}
                </button>
                
                <AnimatePresence>
                  {typesExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-black/20 backdrop-blur-sm rounded-md mt-2 border border-white/10"
                    >
                      {scholarshipTypes.map((type) => (
                        <motion.button
                          key={type.name}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -20, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          whileHover={{ scale: 1.02, x: 5 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => toggleType(type.name)}
                          className={`w-full text-left py-2 px-4 text-sm font-medium rounded transition-colors duration-300 ${
                            activeType === type.name
                              ? 'bg-cyan-500 text-white shadow-md'
                              : 'hover:bg-white/20 text-gray-200'
                          }`}
                        >
                          <span className="mr-2">{type.icon}</span>
                          {type.name}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Navigation Links */}
              <div className="mt-8 space-y-4">
                <Link
                                to="/after10th/entrance"
                                className="block w-full mb-4 py-3 px-4 font-semibold rounded-md bg-blue-500/20 hover:bg-blue-500/30 text-blue-200 text-center transition backdrop-blur-sm border border-blue-500/30"
                              >
                                🎯 Entrance Exams
                              </Link>

                                <Link
                  to="/after10th/diploma"
                  className="block w-full py-3 px-4 font-semibold rounded-md bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 text-center transition backdrop-blur-sm border border-purple-500/30"
                >
                  📜 Diploma Courses
                </Link>

                <Link
                  to="/after10th/course"
                  className="block w-full py-3 px-4 font-semibold rounded-md bg-green-500/20 hover:bg-green-500/30 text-green-200 text-center transition backdrop-blur-sm border border-green-500/30"
                >
                  📚 Explore All Courses
                </Link>

                <Link
                  to="/after-10th"
                  className="block w-full py-3 px-4 font-semibold rounded-md bg-pink-500/20 hover:bg-pink-500/30 text-pink-200 text-center transition backdrop-blur-sm border border-pink-500/30"
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
              <span className="animation-delay-0">💰</span>
              <span className="animation-delay-200">🎓</span>
              <span className="animation-delay-400">✨</span>
            </div>
          </div>
          
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent mb-6 animate-pulse">
            Scholarships
          </h1>

          {/* Search and Filter Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search scholarships..."
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 backdrop-blur-sm"
                />
              </div>
              <div>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700/50 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 backdrop-blur-sm"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat} className="bg-gray-700">{cat}</option>
                  ))}
                </select>
              </div>
              
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="px-8 pb-8">
          <AnimatePresence>
            {!activeType && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="mb-16"
              >
                {/* Enhanced Introduction */}
                <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto mb-12">
                  <p className="text-gray-300 text-xl leading-relaxed">
                    Finding the right scholarship can make your educational dreams affordable and achievable. Whether you're looking for merit-based awards, need-based assistance, or specialized funding for your field of study, <span className="text-blue-400 font-semibold">EduAdvisor</span> helps you discover opportunities that match your profile. From government schemes to private foundations, we provide comprehensive information about eligibility criteria, application deadlines, and benefits. With <span className="text-purple-400 font-semibold">EduAdvisor</span>, you can explore various scholarship categories, understand application processes, and take the first step towards funding your education.
                  </p>
                </div>

                {/* Enhanced Scholarship Type Cards */}
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl mx-auto">
                  {scholarshipTypes.map((type, index) => (
                    <div
                      key={type.name}
                      onClick={() => toggleType(type.name)}
                      className={`group cursor-pointer relative overflow-hidden bg-gradient-to-br ${type.bg} rounded-3xl shadow-2xl p-8 flex flex-col justify-between hover:rotate-1 hover:scale-105 transition-all duration-500 transform hover:shadow-blue-500/25 hover:shadow-2xl`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      {/* Card Background Pattern */}
                      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12 group-hover:scale-150 transition-transform duration-700"></div>

                      {/* Floating Particles */}
                      <div className="absolute top-4 right-4 text-2xl opacity-60 group-hover:animate-spin">
                        {type.particles.split('')[0]}
                      </div>
                      <div className="absolute top-8 right-8 text-lg opacity-40 group-hover:animate-bounce">
                        {type.particles.split('')[1]}
                      </div>
                      <div className="absolute top-12 right-12 text-sm opacity-30 group-hover:animate-pulse">
                        {type.particles.split('')[2]}
                      </div>

                      <div className="relative z-10">
                        {/* Icon */}
                        <div className="text-6xl mb-6 group-hover:animate-bounce">
                          {type.icon}
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl font-bold mb-4 text-white group-hover:text-yellow-200 transition-colors duration-300">
                          {type.name}
                        </h2>

                        {/* Enhanced Button */}
                        <button className="relative overflow-hidden bg-white/20 backdrop-blur-sm text-white font-bold py-3 px-8 rounded-full border border-white/30 hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg">
                          <span className="relative z-10">View Scholarships</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </button>
                      </div>

                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/10 group-hover:to-white/5 transition-all duration-500"></div>
                    </div>
                  ))}
                </div>

                {/* Quick Stats */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                  <div className="backdrop-blur-sm bg-white/10 rounded-xl p-6 border border-white/20 text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">₹500Cr+</div>
                    <div className="text-gray-300 text-sm">Total Funding Available</div>
                  </div>
                  <div className="backdrop-blur-sm bg-white/10 rounded-xl p-6 border border-white/20 text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">1L+</div>
                    <div className="text-gray-300 text-sm">Students Benefited</div>
                  </div>
                  <div className="backdrop-blur-sm bg-white/10 rounded-xl p-6 border border-white/20 text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
                    <div className="text-gray-300 text-sm">Active Scholarships</div>
                  </div>
                  <div className="backdrop-blur-sm bg-white/10 rounded-xl p-6 border border-white/20 text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-2">95%</div>
                    <div className="text-gray-300 text-sm">Success Rate</div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Enhanced Scholarship Details */}
          {activeType && (
            <motion.section
              key={activeType}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 border border-white/20"
            >
              <h2 className="text-4xl font-bold text-white mb-8 text-center">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {activeType}
                </span>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {getTypeScholarships(activeType).map((scholarship) => (
                  <motion.div
                    key={scholarship}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow cursor-pointer hover:shadow-xl transition border border-white/20"
                    onClick={() => toggleScholarship(scholarship)}
                  >
                    <h3 className="font-semibold text-white text-lg mb-3">{scholarship}</h3>
                    <div className="text-green-400 font-bold mb-2">
                      {scholarshipDetails[scholarship]?.amount || 'Amount details coming soon.'}
                    </div>
                    <p className="text-gray-300 text-sm">{scholarshipDetails[scholarship]?.eligibility || 'Detailed information coming soon.'}</p>
                  </motion.div>
                ))}
              </div>

              {activeScholarship && (
                <motion.div
                  key={activeScholarship}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                  className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/30 p-6 rounded-xl shadow-xl"
                >
                  <h4 className="text-2xl font-bold text-white mb-4">{activeScholarship}</h4>
                  <div className="space-y-3 text-gray-200">
                    <p><strong className="text-green-400">Amount:</strong> {scholarshipDetails[activeScholarship]?.amount || 'Details are being updated.'}</p>
                    <p><strong className="text-blue-400">Eligibility:</strong> {scholarshipDetails[activeScholarship]?.eligibility || 'Information not available yet.'}</p>
                    <p><strong className="text-purple-400">Last Date:</strong> {scholarshipDetails[activeScholarship]?.lastDate || 'Check official website'}</p>
                    <p><strong className="text-orange-400">Benefits:</strong> {scholarshipDetails[activeScholarship]?.benefits || ''}</p>
                    {scholarshipDetails[activeScholarship]?.applyLink && (
                      <div className="mt-4">
                        <a
                          href={scholarshipDetails[activeScholarship].applyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                        >
                          Apply Now →
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              <div className="text-center mt-8">
                <button
                  onClick={() => setActiveType(null)}
                  className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-8 py-3 rounded-full font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-300 transform hover:scale-105"
                >
                  ← Back to All Types
                </button>
              </div>
            </motion.section>
          )}

          {/* Application Tips */}
          {!activeType && (
            <div className="mt-16 backdrop-blur-sm bg-white/10 rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">💡 Application Tips</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-400 mb-3">Before Applying</h4>
                                    <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Research eligibility criteria thoroughly</li>
                    <li>• Gather all required documents in advance</li>
                    <li>• Check application deadlines carefully</li>
                    <li>• Prepare compelling personal statements</li>
                    <li>• Get recommendation letters ready</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-400 mb-3">During Application</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Apply early to avoid last-minute rush</li>
                    <li>• Double-check all information before submitting</li>
                    <li>• Keep copies of all submitted documents</li>
                    <li>• Follow up on application status regularly</li>
                    <li>• Apply to multiple scholarships to increase chances</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Application Timeline */}
          {!activeType && (
            <div className="mt-16 backdrop-blur-sm bg-white/10 rounded-2xl p-8 border border-white/20 max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">📅 Application Timeline</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: "1", title: "Research", desc: "Find suitable scholarships", icon: "🔍", time: "3-6 months before" },
                  { step: "2", title: "Prepare", desc: "Gather documents & essays", icon: "📋", time: "2-3 months before" },
                  { step: "3", title: "Apply", desc: "Submit applications", icon: "📤", time: "1-2 months before" },
                  { step: "4", title: "Follow Up", desc: "Track application status", icon: "📞", time: "After submission" }
                ].map((item, index) => (
                  <div key={index} className="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 border border-white/10">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                      {item.step}
                    </div>
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-300 mb-2">{item.desc}</p>
                    <p className="text-xs text-blue-400">{item.time}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <style jsx>{`
        .animation-delay-0 { animation-delay: 0ms; }
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        .animation-delay-2000 { animation-delay: 2000ms; }
        .animation-delay-4000 { animation-delay: 4000ms; }
      `}</style>
    </div>
  );
};

export default Scholarship;