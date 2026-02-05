import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const groups = [
  {
    name: 'Maths Computer Science',
    icon: '💻',
    bg: 'from-blue-500 via-indigo-500 to-purple-600',
    particles: '💻🔬⚡'
  },
  {
    name: 'Pure Science',
    icon: '🔬',
    bg: 'from-emerald-400 via-teal-500 to-cyan-600',
    particles: '🧪⚛️🔬'
  },
  {
    name: 'Maths Biology',
    icon: '🧬',
    bg: 'from-green-400 via-emerald-500 to-teal-600',
    particles: '🧬📊🔬'
  },
  {
    name: 'Commerce',
    icon: '💼',
    bg: 'from-amber-400 via-orange-500 to-red-500',
    particles: '💰📈💼'
  },
  {
    name: 'Vocational Groups',
    icon: '🛠️',
    bg: 'from-purple-500 via-pink-500 to-rose-600',
    particles: '🛠️⚙️🎨'
  },
  {
    name: 'Arts & Humanities',
    icon: '📚',
    bg: 'from-pink-400 via-rose-500 to-red-500',
    particles: '📚🎭🏛️'
  },
];

const subjectDetails = {
  // Maths Computer Science Group
  Mathematics: {
    topics: 'Algebra, Trigonometry, Calculus, Geometry, Statistics',
    importance: 'Foundation for Computer Science, Engineering, Data Science.',
    focus: 'Calculus, Coordinate Geometry, Probability, Vectors & Matrices.',
  },
  Physics: {
    topics: 'Mechanics, Electricity & Magnetism, Optics, Thermodynamics',
    importance: 'Key in engineering entrance exams.',
    focus: 'Mechanics (11th), Electricity & Magnetism (12th).',
  },
  Chemistry: {
    topics: 'Physical, Organic, Inorganic Chemistry',
    importance: 'Needed for exams and semiconductors basics.',
    focus: 'Organic (12th), Physical basics (11th).',
  },
  'Computer Science': {
    topics: 'Programming (C/C++/Python), Data Structures, Algorithms, DBMS, Boolean Algebra',
    importance: 'Core for B.Tech/B.Sc CS, IT, AI.',
    focus: 'Problem solving, algorithms, data structures.',
  },
  // Pure Science Group
  'Physics (Pure Science)': {
    topics: 'Mechanics, Thermodynamics, Electromagnetism, Optics',
    importance: 'Essential for science research, physics honors.',
    focus: 'Laws of motion, energy, waves, electromagnetism.',
  },
  'Chemistry (Pure Science)': {
    topics: 'Physical, Inorganic, Organic Chemistry',
    importance: 'For medical, engineering, and research fields.',
    focus: 'Atomic structure, bonding, organic reactions.',
  },
  Biology: {
    topics: 'Botany, Zoology, Genetics, Biotechnology',
    importance: 'For medicine, research, agriculture, biotechnology.',
    focus: 'Cell biology, genetics, ecology, evolution.',
  },
  // Maths Biology Group
  'Mathematics (Biology)': {
    topics: 'Algebra, Vector Algebra, Probability, Statistics',
    importance: 'Useful for biostatistics, bioinformatics.',
    focus: 'Probability, statistics, data analysis.',
  },
  'Biology (Maths Biology)': {
    topics: 'Botany, Zoology, Genetics, Microbiology, Biotechnology',
    importance: 'For medical, biotechnology, and research.',
    focus: 'Cell biology, genetics, biotechnology.',
  },
  // Commerce Group
  Accountancy: {
    topics: 'Financial Accounting, Cost Accounting, Management Accounting',
    importance: 'For Chartered Accountancy, Commerce, Finance.',
    focus: 'Book-keeping, financial statements, auditing.',
  },
  'Business Studies': {
    topics: 'Business Environment, Marketing, Finance, Entrepreneurship',
    importance: 'For management, business administration, entrepreneurship.',
    focus: 'Business environment, marketing, finance.',
  },
  'Economics (Commerce)': {
    topics: 'Microeconomics, Macroeconomics, Indian Economy',
    importance: 'For economics honors, management, policy.',
    focus: 'Market, theory of demand, national income, money.',
  },
  // Vocational Groups
  'Computer Applications': {
    topics: 'Programming, Web Technology, Office Applications',
    importance: 'For IT, computer-based roles, office jobs.',
    focus: 'Programming, web development, office automation.',
  },
  Entrepreneurship: {
    topics: 'Business Planning, Finance, Marketing, Startups',
    importance: 'For starting your own business, startups.',
    focus: 'Business planning, marketing, finance, innovation.',
  },
  // Arts & Humanities
  'History & Culture': {
    topics: 'Ancient, Medieval, Modern History, Cultural Studies',
    importance: 'Understanding societal changes and modern world.',
    focus: 'Critical thinking, analysis of events, essay writing.',
  },
  Literature: {
    topics: 'English, Regional Languages, World Literature',
    importance: 'Enhances language skills and cultural awareness.',
    focus: 'Reading comprehension, creative writing, critique.',
  },
  'Political Science': {
    topics: 'Government systems, International relations, Public policy',
    importance: 'Understanding governance and civic responsibilities.',
    focus: 'Debate skills, policy analysis, current affairs.',
  },
  'Economics (Arts)': {
    topics: 'Microeconomics, Macroeconomics, Development Economics',
    importance: 'Fundamental for business and policy careers.',
    focus: 'Statistical analysis, market understanding.',
  },
};

const After10th = () => {
  const [activeGroup, setActiveGroup] = useState(null);
  const [activeSubject, setActiveSubject] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [groupsExpanded, setGroupsExpanded] = useState(false);

  const toggleGroup = (group) => {
    setActiveSubject(null);
    setActiveGroup(activeGroup === group ? null : group);
  };

  const toggleSubject = (subject) => {
    setActiveSubject(activeSubject === subject ? null : subject);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleGroupsInSidebar = () => {
    setGroupsExpanded(!groupsExpanded);
  };

  const getGroupSubjects = (group) => {
    switch (group) {
      case 'Maths Computer Science':
        return ['Mathematics', 'Physics', 'Chemistry', 'Computer Science'];
      case 'Pure Science':
        return ['Physics (Pure Science)', 'Chemistry (Pure Science)', 'Biology'];
      case 'Maths Biology':
        return ['Mathematics (Biology)', 'Biology (Maths Biology)'];
      case 'Commerce':
        return ['Accountancy', 'Business Studies', 'Economics (Commerce)'];
      case 'Vocational Groups':
        return ['Computer Applications', 'Entrepreneurship'];
      case 'Arts & Humanities':
        return ['History & Culture', 'Literature', 'Political Science', 'Economics (Arts)'];
      default:
        return [];
    }
  };

  const floatingElements = ["🎨", "🔬", "💻", "📊", "🎭", "🏛️", "⚡", "🧬", "💼"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden font-poppins select-none">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className={`absolute text-4xl opacity-10 animate-bounce`}
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
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>

      {/* Hamburger Button */}
      <button
        onClick={toggleSidebar}
        className="fixed bg-blue-600 ml-8 mt-6 text-white p-3 rounded-lg shadow-lg hover:bg-blue-700 transition z-50"
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

              {/* Groups Section */}
              <div className="mb-4">
                <button
                  onClick={toggleGroupsInSidebar}
                  className="w-full text-left py-3 px-4 font-semibold rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors duration-300 backdrop-blur-sm border border-white/20"
                >
                  Groups {groupsExpanded ? '▼' : '▶'}
                </button>
                
                <AnimatePresence>
                  {groupsExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-black/20 backdrop-blur-sm rounded-md mt-2 border border-white/10"
                    >
                      {groups.map((group) => (
                        <motion.button
                          key={group.name}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -20, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          whileHover={{ scale: 1.02, x: 5 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => toggleGroup(group.name)}
                          className={`w-full text-left py-2 px-4 text-sm font-medium rounded transition-colors duration-300 ${
                            activeGroup === group.name
                              ? 'bg-cyan-500 text-white shadow-md'
                              : 'hover:bg-white/20 text-gray-200'
                          }`}
                        >
                          <span className="mr-2">{group.icon}</span>
                          {group.name}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Enhanced Navigation Links */}
              <Link
                                to="/after10th/course"
                                className="block w-full mb-4 py-3 px-4 font-semibold rounded-md bg-yellow-500/20 hover:bg-cyan-500/30 text-cyan-200 text-center transition backdrop-blur-sm border border-cyan-500/30"
                              >
                                📚 Explore All Courses
                              </Link>


              <Link
                to="/after10th/scholarship"
                className="block w-full mb-4 py-3 px-4 font-semibold rounded-md bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 text-center transition backdrop-blur-sm border border-cyan-500/30"
              >
                🎓 Scholarships
              </Link>

              <Link
                to="/after10th/entrance"
                className="block w-full mb-4 py-3 px-4 font-semibold rounded-md bg-blue-500/20 hover:bg-blue-500/30 text-blue-200 text-center transition backdrop-blur-sm border border-blue-500/30"
              >
                🎯 Entrance Exams
              </Link>

              <Link
                to="/after10th/diploma"
                className="block w-full mb-4 py-3 px-4 font-semibold rounded-md bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 text-center transition backdrop-blur-sm border border-purple-500/30"
              >
                📜 Diploma Courses
              </Link>

              <Link
                                to="/"
                                className="block w-full py-3 px-4 font-semibold rounded-md bg-pink-50 hover:bg-pink-100 text-pink-700 text-center transition border border-pink-200"
                              >
                                🏠 Back to Home
                              </Link>
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
              <span className="animation-delay-0">🎓</span>
              <span className="animation-delay-200">✨</span>
              <span className="animation-delay-400">🚀</span>
            </div>
          </div>
          
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 animate-pulse">
            After 10th Guidance
          </h1>
          
         
        </div>

        {/* Content Area */}
        <div className="px-8 pb-8">
          <AnimatePresence>
            {!activeGroup && (
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
                    Choosing the right course after 10th is a turning point in every student's life. It decides the subjects you will study, the skills you will build, and the career opportunities you can explore in the future. Many students and parents feel confused while selecting between Science, Commerce, Arts, or vocational courses. To make this important decision easier, <span className="text-cyan-400 font-semibold">EduAdvisor</span> provides proper guidance, expert advice, and information about different courses, colleges, and career paths. With <span className="text-purple-400 font-semibold">EduAdvisor</span>, you can match your interests and strengths with the right stream, explore future opportunities, and confidently step into the next stage of your education.
                  </p>
                </div>

                {/* Enhanced Group Cards */}
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl mx-auto">
                  {groups.map((group, index) => (
                    <div
                      key={group.name}
                      onClick={() => toggleGroup(group.name)}
                      className={`group cursor-pointer relative overflow-hidden bg-gradient-to-br ${group.bg} rounded-3xl shadow-2xl p-8 flex flex-col justify-between hover:rotate-1 hover:scale-105 transition-all duration-500 transform hover:shadow-purple-500/25 hover:shadow-2xl`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      {/* Card Background Pattern */}
                      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12 group-hover:scale-150 transition-transform duration-700"></div>

                      {/* Floating Particles */}
                      <div className="absolute top-4 right-4 text-2xl opacity-60 group-hover:animate-spin">
                        {group.particles.split('')[0]}
                      </div>
                      <div className="absolute top-8 right-8 text-lg opacity-40 group-hover:animate-bounce">
                        {group.particles.split('')[1]}
                      </div>
                      <div className="absolute top-12 right-12 text-sm opacity-30 group-hover:animate-pulse">
                        {group.particles.split('')[2]}
                      </div>

                      <div className="relative z-10">
                        {/* Icon */}
                        <div className="text-6xl mb-6 group-hover:animate-bounce">
                          {group.icon}
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl font-bold mb-4 text-white group-hover:text-yellow-200 transition-colors duration-300">
                          {group.name}
                        </h2>

                        {/* Enhanced Button */}
                        <button className="relative overflow-hidden bg-white/20 backdrop-blur-sm text-white font-bold py-3 px-8 rounded-full border border-white/30 hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg">
                          <span className="relative z-10">Explore Subjects</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </button>
                      </div>

                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/10 group-hover:to-white/5 transition-all duration-500"></div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Enhanced Subject Details */}
          {activeGroup && (
            <motion.section
              key={activeGroup}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 border border-white/20"
            >
              <h2 className="text-4xl font-bold text-white mb-8 text-center">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {activeGroup}
                </span>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {getGroupSubjects(activeGroup).map((subject) => (
                  <motion.div
                    key={subject}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow cursor-pointer hover:shadow-xl transition border border-white/20"
                    onClick={() => toggleSubject(subject)}
                  >
                    <h3 className="font-semibold text-white text-lg mb-3">{subject}</h3>
                    <p className="text-gray-300">{subjectDetails[subject]?.importance || 'Detailed information coming soon.'}</p>
                  </motion.div>
                ))}
              </div>

              {activeSubject && (
                <motion.div
                  key={activeSubject}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                  className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-white/30 p-6 rounded-xl shadow-xl"
                >
                  <h4 className="text-2xl font-bold text-white mb-4">{activeSubject}</h4>
                  <div className="space-y-3 text-gray-200">
                    <p><strong className="text-cyan-400">Topics:</strong> {subjectDetails[activeSubject]?.topics || 'Details are being updated.'}</p>
                    <p><strong className="text-purple-400">Importance:</strong> {subjectDetails[activeSubject]?.importance || 'Information not available yet.'}</p>
                    <p><strong className="text-pink-400">Focus:</strong> {subjectDetails[activeSubject]?.focus || ''}</p>
                  </div>
                </motion.div>
              )}

              <div className="text-center mt-8">
                <button
                  onClick={() => setActiveGroup(null)}
                  className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105"
                >
                  ← Back to All Groups
                </button>
              </div>
            </motion.section>
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

export default After10th;