
import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  ExternalLink,
  Award,
  BookOpen,
  Briefcase,
  Code,
  GraduationCap,
  Sun,
  Moon,
  Trophy,
  CheckCircle,
  ArrowRight,
  FileText,
  Terminal,
  Search,
  Target,
  Flag,
  Menu,
  X,
  Cpu,
  Database,
  Globe,
  Layers,
  Sparkles,
  MapPin,
  Calendar
} from 'lucide-react';
import TextType from './TextType';
import { PROJECTS, SKILLS, PUBLICATIONS, ACHIEVEMENTS, CERTIFICATIONS, EDUCATION_HISTORY, EXPERIENCES } from './constants';
import SplitText from './SplitText';

const TechIconMap: Record<string, React.ReactNode> = {
  "AI/ML & Data Science": <Cpu className="w-6 h-6" />,
  "Programming": <Terminal className="w-6 h-6" />,
  "Web & Database": <Globe className="w-6 h-6" />,
  "Core Computer Science": <Database className="w-6 h-6" />
};

const Section: React.FC<{ id: string; title: string; children: React.ReactNode; icon?: React.ReactNode }> = ({ id, title, children, icon }) => (
  <section id={id} className="py-20 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto relative overflow-hidden">
    <div className="flex flex-col items-center gap-3 sm:gap-4 mb-16 sm:mb-20 animate-on-scroll">
      {icon && (
        <div className="p-3 sm:p-4 bg-indigo-50/80 dark:bg-indigo-500/20 rounded-2xl sm:rounded-3xl text-indigo-600 dark:text-indigo-400 shadow-sm backdrop-blur-sm ring-1 ring-indigo-100 dark:ring-transparent">
          {icon}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter text-center">
        {title}
      </h2>
      <div className="w-16 sm:w-20 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
    </div>
    {children}
  </section>
);

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedCert, setSelectedCert] = useState<typeof CERTIFICATIONS[0] | null>(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll Progress Logic for Experience Timeline
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('experience');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the section has been scrolled past
      // Start filling when the top of the section enters the viewport
      // Complete when the bottom of the section leaves or is near the top
      const start = rect.top - windowHeight / 2;
      const height = rect.height;

      let progress = 0;
      if (start < 0) {
        progress = Math.min(100, Math.max(0, (Math.abs(start) / height) * 100));
      }

      setScrollProgress(progress);
      document.documentElement.style.setProperty('--scroll-percent', `${progress}%`);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 transition-colors duration-500 selection:bg-indigo-500/30 font-sans overflow-x-hidden">
      {/* Background elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-400/20 dark:bg-indigo-500/5 blur-[120px] rounded-full animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-400/20 dark:bg-purple-500/5 blur-[120px] rounded-full animate-blob animation-delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-5 left-0 right-0 mx-auto max-w-7xl w-[92%] sm:w-[95%] z-50 glass rounded-[2rem] border border-white/40 dark:border-white/5 shadow-lg shadow-indigo-500/5 transition-all duration-300 backdrop-blur-md bg-white/70 dark:bg-slate-900/80">
        <div className="px-5 sm:px-8 py-4 flex items-center justify-between">
          <a href="#" className="text-xl sm:text-2xl font-black tracking-tighter flex items-center gap-2">
            <span className="gradient-text">SPANDANA</span>
          </a>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="lg:hidden p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-800 dark:text-slate-100"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-800 dark:text-slate-100"
            >
              {isNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
            {['About', 'Expertise', 'Experience', 'Projects', 'Awards', 'Certifications', 'Research', 'Education'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-indigo-600 dark:hover:text-slate-100 transition-colors px-1">
                {item}
              </a>
            ))}
            <div className="h-4 w-px bg-slate-300 dark:bg-slate-700 mx-2"></div>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-800 dark:text-slate-100"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out border-t border-slate-100 dark:border-white/5 overflow-hidden ${isNavOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-8 py-6 flex flex-col gap-4 text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
            {['About', 'Expertise', 'Experience', 'Projects', 'Awards', 'Certifications', 'Research', 'Education'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsNavOpen(false)}
                className="hover:text-indigo-600 dark:hover:text-slate-100 transition-colors py-2 border-b border-slate-50 dark:border-white/5 last:border-0"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero / About */}
      <section id="about" className="relative pt-48 pb-32 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 z-10">
        <div className="flex-1 space-y-10">
          <div className="text-5xl sm:text-6xl md:text-8xl font-black leading-[1.1] tracking-tighter text-slate-900 dark:text-white">
            <SplitText
              text="Hello, I'm"
              className="block"
              delay={30}
              duration={0.8}
              enableScrollTrigger={false}
            />
            <SplitText
              text="Spandana A P"
              className="text-indigo-600 dark:text-indigo-400 italic font-serif block sm:inline"
              tag="span"
              delay={60}
              duration={0.8}
              enableScrollTrigger={false}
            />
          </div>
          {/* Description with layout preservation */}
          <div className="relative max-w-2xl animate-on-scroll">
            <p className="text-lg font-medium leading-relaxed invisible text-justify">
              A Computer Science undergraduate fueled by the challenge of architecting intelligent systems and end-to-end software solutions. With a proven track record across government research labs, startups, and innovative tech spaces, I specialize in bridging the gap between theoretical machine learning and scalable real-world impact. I am passionate about transforming complex data into reliable, user-centric products. I value clean design, robust engineering, and continuous learning, and I thrive in environments that push the boundaries of innovation to create meaningful, lasting impact.
            </p>
            <div className="absolute top-0 left-0 w-full h-full">
              <TextType
                text={[
                  "A Computer Science undergraduate fueled by the challenge of architecting intelligent systems and end-to-end software solutions. With a proven track record across government research labs, startups, and innovative tech spaces, I specialize in bridging the gap between theoretical machine learning and scalable real-world impact. I am passionate about transforming complex data into reliable, user-centric products. I value clean design, robust engineering, and continuous learning, and I thrive in environments that push the boundaries of innovation to create meaningful, lasting impact."
                ]}
                className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed"
                typingSpeed={10}
                cursorCharacter="|"
                loop={false}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4 animate-on-scroll">
            <a href="https://linkedin.com/in/spandana-a-p-23451924b/" target="_blank" className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-2xl hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10 transition-all hover:scale-110 shadow-sm dark:text-slate-100 text-slate-600">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/spandana2004" target="_blank" className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-2xl hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10 transition-all hover:scale-110 shadow-sm dark:text-slate-100 text-slate-600">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Orbiting Avatar System */}
        <div className="relative lg:w-1/3 flex justify-center items-center py-12 lg:py-0 scale-[0.6] sm:scale-[0.8] lg:scale-100 transition-transform origin-center">
          <style>{`
            @keyframes orbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            @keyframes orbit-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
            @keyframes slide-up-fade { from { transform: translateY(100px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
            .animate-orbit { animation: orbit 40s linear infinite; }
            .animate-orbit-reverse { animation: orbit-reverse 40s linear infinite; }
            .animate-slide-up { animation: slide-up-fade 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
          `}</style>

          {/* Background Glow */}
          <div className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-indigo-500/5 dark:bg-indigo-500/10 blur-[60px] sm:blur-[80px] rounded-full animate-pulse"></div>

          {/* Outer Ring with Combined Tech Stack */}
          <div className="absolute w-[420px] h-[420px] border border-indigo-500/10 dark:border-indigo-500/20 rounded-full animate-orbit">
            {[
              { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', alt: 'Python' },
              { type: 'icon', Component: Globe, color: 'text-blue-500' },
              { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React' },
              { type: 'icon', Component: Code, color: 'text-emerald-500' },
              { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', alt: 'HTML5' },
              { type: 'icon', Component: Database, color: 'text-purple-500' },
              { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', alt: 'CSS3' },
              { type: 'icon', Component: Cpu, color: 'text-pink-500' },
              { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', alt: 'JS' }
            ].map((item, idx, arr) => {
              const angleRef = (idx * 360) / arr.length;
              const rad = (angleRef * Math.PI) / 180;
              const x = 50 + 50 * Math.cos(rad);
              const y = 50 + 50 * Math.sin(rad);
              return (
                <div
                  key={idx}
                  className="absolute w-12 h-12 flex items-center justify-center"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-100 dark:border-white/10 flex items-center justify-center animate-orbit-reverse">
                    {item.type === 'img' ? (
                      <img src={item.src} alt={item.alt} className="w-7 h-7" />
                    ) : (
                      <item.Component className={`w-6 h-6 ${item.color}`} />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Middle Ring (Decorative) */}
          <div className="absolute w-[320px] h-[320px] border border-dashed border-slate-300 dark:border-white/10 rounded-full animate-orbit">
          </div>

          {/* Inner Ring */}
          <div className="absolute w-[240px] h-[240px] border border-indigo-500/5 dark:border-indigo-500/10 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>

          {/* Main Character Image */}
          {/* Main Character Image */}
          <div className="relative z-10 w-80 h-80 sm:w-[28rem] sm:h-[28rem] flex items-center justify-center animate-slide-up">
            <img
              src="/About1.png"
              alt="Spandana A P"
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
            />

            {/* Floating badge */}
            <div className="absolute bottom-10 right-0 sm:right-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md py-2 px-4 rounded-xl shadow-lg border border-slate-100 dark:border-white/10 flex items-center gap-2 animate-bounce">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-800 dark:text-slate-200">Creator</span>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <Section id="expertise" title="Technical Expertise">
        <div className="w-full relative space-y-6">

          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes marquee-reverse {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
            .animate-marquee {
              animation: marquee 40s linear infinite;
              width: max-content;
            }
            .animate-marquee-reverse {
              animation: marquee-reverse 40s linear infinite;
              width: max-content;
            }
            .group:hover .animate-marquee,
            .group:hover .animate-marquee-reverse {
              animation-play-state: paused;
            }
            .mask-linear-fade {
              mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
              -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            }
          `}</style>

          {(() => {
            // Define icons locally
            const iconMap: Record<string, string | null> = {
              "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
              "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
              "C": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
              "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
              "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
              "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
              "TensorFlow": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
              "Keras": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg",
              "Scikit-learn": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
              "Pandas": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
              "NumPy": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
              "Streamlit": "https://streamlit.io/images/brand/streamlit-mark-color.svg",
              "Gen-AI": null,
              "Machine Learning": null,
              "Deep Learning": null,
              "NLP": null,
              "RL": null,
              "Data Structures": null,
              "Algorithms": null,
              "Quantum Computing Foundations": null
            };

            return SKILLS.map((cat, rowIdx) => (
              <div key={cat.category} className="relative group overflow-hidden mask-linear-fade">
                <div className={`flex gap-6 py-2 ${rowIdx % 2 === 0 ? 'animate-marquee' : 'animate-marquee-reverse'}`}>
                  {/* Duplicate 4 times to ensure enough length for any screen size */}
                  {[...cat.items, ...cat.items, ...cat.items, ...cat.items].map((skill, idx) => {
                    const iconUrl = iconMap[skill];
                    return (
                      <div key={`${cat.category}-${skill}-${idx}`} className="flex items-center gap-3 px-5 py-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-white/5 shadow-sm hover:border-indigo-500 hover:shadow-md transition-all cursor-default min-w-[140px] justify-center backdrop-blur-sm">
                        {iconUrl ? (
                          <img src={iconUrl} alt={skill} className="w-6 h-6 object-contain" />
                        ) : (
                          <div className="w-6 h-6 flex items-center justify-center bg-indigo-50 dark:bg-indigo-500/20 rounded-md text-indigo-600 dark:text-indigo-400 font-bold text-[10px] ring-1 ring-indigo-500/20">
                            {skill.substring(0, 2).toUpperCase()}
                          </div>
                        )}
                        <span className="font-bold text-slate-700 dark:text-slate-200 text-xs whitespace-nowrap">{skill}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ));
          })()}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <div className="relative max-w-5xl mx-auto px-4 md:pl-20">
          {/* Animated Background Decoration */}
          <div className="absolute top-0 -left-10 w-72 h-72 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 -right-10 w-72 h-72 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

          {/* Left-aligned Timeline Line */}
          <div className="hidden md:block absolute left-8 md:left-12 top-0 bottom-0 w-[2px] bg-slate-300 dark:bg-white/10">
            {/* Scroll Fill Effect */}
            <div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-indigo-500 via-purple-500 to-emerald-500 transition-all duration-300"
              style={{
                height: 'calc(var(--scroll-percent, 0) * 1% )', // Directly drive height
              }}
            />
          </div>

          <div className="space-y-16 relative">
            {EXPERIENCES.map((exp, idx) => {
              // Calculate if this specific dot should be "active" based on its position
              const dotProgress = (idx / (EXPERIENCES.length - 1)) * 100;

              return (
                <div
                  key={idx}
                  className="relative flex items-start w-full animate-on-scroll group/exp"
                >
                  {/* TIMELINE DOT (Perfectly Centered on Line) */}
                  <div className="hidden md:flex absolute -left-[1.25rem] md:-left-[3.25rem] mt-10 items-center justify-center z-20">
                    <div className={`w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-950 flex items-center justify-center border-2 transition-all duration-500 ${scrollProgress >= dotProgress
                      ? 'border-indigo-500 scale-110 shadow-[0_0_15px_rgba(79,70,229,0.3)]'
                      : 'border-slate-300 dark:border-white/20 scale-100'
                      }`}>
                      <div className={`w-3 h-3 rounded-full transition-all duration-500 ${scrollProgress >= dotProgress
                        ? 'bg-indigo-600'
                        : 'bg-slate-400 dark:bg-slate-600'
                        } relative`}>
                        {/* Pulse effect only for active dot */}
                        <div className={`absolute inset-0 rounded-full bg-indigo-600 animate-ping opacity-20 ${scrollProgress >= dotProgress ? 'block' : 'hidden'
                          }`} />
                      </div>
                    </div>
                  </div>

                  {/* CONTENT CARD (Right Aligned) */}
                  <div
                    className="w-full md:ml-0 p-8 sm:p-10 bg-white dark:bg-slate-900/50 
                               rounded-[3rem] border border-slate-100 dark:border-white/5 
                               shadow-xl shadow-slate-200/50 dark:shadow-none
                               hover:shadow-2xl hover:shadow-indigo-500/10 group 
                               hover:border-indigo-500/30 transition-all duration-500
                               backdrop-blur-md relative overflow-hidden"
                  >
                    {/* Decorative Gradient Background on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Header */}
                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-8">
                        <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-500/10 
                                      rounded-2xl flex items-center justify-center 
                                      text-indigo-600 dark:text-indigo-400 shrink-0 shadow-sm
                                      group-hover:scale-110 transition-transform duration-500">
                          <Briefcase className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-indigo-600 dark:text-indigo-400 
                                        font-black text-[10px] uppercase tracking-[0.2em] mb-1">
                            {exp.company}
                          </div>
                          <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100 leading-tight">
                            {exp.role}
                          </h3>
                        </div>
                      </div>

                      {/* Bullets */}
                      <ul className="space-y-4 mb-8">
                        {exp.bullets.map((bullet, i) => (
                          <li
                            key={i}
                            className="text-slate-600 dark:text-slate-400 
                                     text-sm flex items-start gap-4 font-medium leading-relaxed"
                          >
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      {/* Footer */}
                      <div className="pt-8 border-t border-slate-100 dark:border-white/5 
                                    flex flex-wrap items-center justify-between gap-6">
                        <div className="flex items-center gap-2.5 text-xs font-bold text-slate-400 dark:text-slate-500">
                          <Calendar className="w-4 h-4 text-indigo-500/50" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2.5 text-xs font-bold text-slate-400 dark:text-slate-500">
                          <ArrowRight className="w-4 h-4 text-indigo-500/50" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Card Numbering */}
                    <div className="absolute -top-4 -right-4 text-9xl font-black text-slate-950/5 dark:text-white/5 select-none transition-transform group-hover:scale-110">
                      {idx + 1}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>


      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="space-y-12">
          {/* Custom Grid Logic: 1 Featured, then 2 Standard, then 1 Featured... */}
          {(() => {
            const result = [];
            for (let i = 0; i < PROJECTS.length; i++) {
              // 0 and 3 are featured (horizontal), others are standard (grid)
              const isFeatured = i === 0 || i === 3;

              if (isFeatured) {
                const project = PROJECTS[i];
                result.push(
                  <div key={i} className="group relative bg-white dark:bg-slate-900 rounded-[2rem] border-2 border-slate-900 dark:border-white/20 overflow-hidden shadow-[12px_12px_0_0_rgba(0,0,0,1)] dark:shadow-[12px_12px_0_0_rgba(255,255,255,0.05)] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[16px_16px_0_0_rgba(0,0,0,1)] animate-on-scroll">
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-1/2 p-6 lg:p-8">
                        <div className="relative aspect-video rounded-3xl overflow-hidden border-2 border-slate-900 dark:border-white/10">
                          <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                      </div>
                      <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                        <span className="text-fuchsia-600 dark:text-fuchsia-400 font-black text-sm uppercase tracking-widest mb-4">Featured Project</span>
                        <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-6 leading-tight">{project.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed font-medium">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-6 items-center">
                          {project.link && (
                            <a href={project.link} target="_blank" className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-8 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-slate-800 dark:hover:bg-white hover:-translate-y-1 transition-all flex items-center gap-2">
                              Visit Project <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                          {project.github && (
                            <a href={project.github} target="_blank" className="text-slate-900 dark:text-white hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors">
                              <Github className="w-8 h-8" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else {
                // Collect standard projects to be rendered in a grid
                const standardProjects = [];
                standardProjects.push(PROJECTS[i]);
                if (i + 1 < PROJECTS.length && (i + 1 !== 3)) {
                  standardProjects.push(PROJECTS[i + 1]);
                  i++; // Skip next because we grouped it
                }

                result.push(
                  <div key={`grid-${i}`} className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {standardProjects.map((proj, idx) => (
                      <div key={idx} className="group bg-white dark:bg-slate-900 rounded-[2rem] border-2 border-slate-900 dark:border-white/20 overflow-hidden shadow-[12px_12px_0_0_rgba(0,0,0,1)] dark:shadow-[12px_12px_0_0_rgba(255,255,255,0.05)] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[16px_16px_0_0_rgba(0,0,0,1)] animate-on-scroll">
                        <div className="p-6">
                          <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-slate-900 dark:border-white/10 mb-8">
                            <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          </div>
                          <span className="text-fuchsia-600 dark:text-fuchsia-400 font-black text-xs uppercase tracking-widest mb-3 block">Website Template</span>
                          <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 leading-tight">{proj.title}</h3>
                          <div className="flex justify-between items-center">
                            <a href={proj.link || proj.github} target="_blank" className="text-slate-900 dark:text-white font-black text-xs uppercase tracking-widest underline underline-offset-8 hover:text-fuchsia-600 transition-colors">Visit</a>
                            <a href={proj.github} target="_blank" className="text-slate-900 dark:text-white hover:text-fuchsia-600 transition-colors">
                              <Github className="w-6 h-6" />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              }
            }
            return result;
          })()}
        </div>
      </Section>

      {/* Awards */}
      <Section id="awards" title="Awards & Honors">
        <div className="relative max-w-6xl mx-auto py-12">
          {/* Vertical central line - only visible on desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 hidden md:block -translate-x-1/2" />

          <div className="space-y-24 relative">
            {ACHIEVEMENTS.map((ach, idx) => {
              const colors = [
                { text: 'text-blue-600/60 dark:text-blue-400/60', icon: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-500/10', border: 'border-t-blue-500 border-r-blue-500', hover: 'group-hover/ach:text-blue-600 dark:group-hover/ach:text-blue-400' },
                { text: 'text-orange-600/60 dark:text-orange-400/60', icon: 'text-orange-600 dark:text-orange-400', bg: 'bg-orange-50 dark:bg-orange-500/10', border: 'border-t-orange-500 border-r-orange-500', hover: 'group-hover/ach:text-orange-600 dark:group-hover/ach:text-orange-400' },
                { text: 'text-emerald-600/60 dark:text-emerald-400/60', icon: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-500/10', border: 'border-t-emerald-500 border-r-emerald-500', hover: 'group-hover/ach:text-emerald-600 dark:group-hover/ach:text-emerald-400' },
                { text: 'text-purple-600/60 dark:text-purple-400/60', icon: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-50 dark:bg-purple-500/10', border: 'border-t-purple-500 border-r-purple-500', hover: 'group-hover/ach:text-purple-600 dark:group-hover/ach:text-purple-400' },
              ];
              const color = colors[idx % colors.length];

              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                >
                  {/* Content Side */}
                  <div className={`w-full md:w-[42%] animate-on-scroll ${idx % 2 === 0 ? 'md:pr-20 md:text-right' : 'md:pl-20 md:text-left'}`}>
                    <div className="relative group/ach">
                      <div className={`text-3xl md:text-6xl font-black ${color.text} absolute -top-10 md:-top-16 left-0 md:static block mb-4 transition-all duration-500 ${color.hover} scale-100 group-hover/ach:scale-110`}>
                        {ach.date}
                      </div>
                      <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-2 leading-tight group-hover/ach:text-indigo-600 transition-colors">
                        {ach.title}
                      </h3>
                      <div className="text-indigo-600 dark:text-indigo-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
                        {ach.org}
                      </div>
                      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-md ml-auto mr-0 md:mr-auto font-medium">
                        {ach.description}
                      </p>
                    </div>
                  </div>

                  {/* Central Indicator */}
                  <div className="relative z-10 flex items-center justify-center w-24 h-24">
                    {/* Outer Arcs */}
                    <div className={`absolute inset-0 rounded-full border-2 border-transparent ${color.border} transition-transform duration-1000 group-hover:rotate-180 ${idx % 2 === 0 ? 'rotate-45' : '-rotate-135'}`} />
                    <div className={`absolute inset-2 rounded-full border border-slate-200 dark:border-white/10`} />

                    {/* Central Node */}
                    <div className="relative z-20 w-14 h-14 bg-white dark:bg-slate-900 rounded-full shadow-2xl flex items-center justify-center border border-slate-50 dark:border-white/5 group">
                      <div className={`w-10 h-10 ${color.bg} rounded-full flex items-center justify-center ${color.icon} transition-transform group-hover:scale-110`}>
                        <Trophy className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Connector Line/Arrow */}
                    <div className={`hidden md:flex items-center absolute top-1/2 -translate-y-1/2 w-12 ${idx % 2 === 0 ? 'right-full' : 'left-full'}`}>
                      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-slate-400 dark:via-white/10 dark:to-white/20" />
                      <div className={`w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-white/20 ${idx % 2 === 0 ? 'mr-auto' : 'ml-auto'}`} />
                    </div>
                  </div>

                  {/* Spacer Side */}
                  <div className="hidden md:block w-[42%]" />
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Certifications */}
      <Section id="certifications" title="Certifications">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert, idx) => {
            // Transform Google Drive links for better embedding
            const embedLink = cert.link.includes('drive.google.com')
              ? cert.link.replace('/view', '/preview').replace('?usp=sharing', '')
              : cert.link;

            return (
              <div
                key={idx}
                className="group relative bg-white dark:bg-slate-900 rounded-[2.5rem] border-2 border-slate-100 dark:border-white/5 p-8 transition-all duration-500 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 animate-on-scroll overflow-hidden flex flex-col"
              >
                {/* Certificate Preview Frame */}
                <div className="relative aspect-[4/3] mb-8 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/10 group-hover:border-indigo-500/30 transition-all shadow-inner">
                  <iframe
                    src={embedLink}
                    className="w-full h-full border-none opacity-90 group-hover:opacity-100 transition-opacity"
                    title={cert.name}
                    loading="lazy"
                  />
                </div>

                <div className="relative z-10 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full">
                      <CheckCircle className="w-3 h-3 text-emerald-500" />
                      <span className="text-[9px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Official Credential</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-indigo-600 transition-colors">
                    {cert.name}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-bold text-[10px] uppercase tracking-widest mb-8">
                    {cert.issuer}
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section id="research" title="Research & Publications">
        <style>{`
          @keyframes research-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-320px * 6 - 2rem * 6)); }
          }
          .research-marquee-container {
            display: flex;
            gap: 2rem;
            width: max-content;
            animation: research-scroll 40s linear infinite;
          }
          .research-marquee-container:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="relative overflow-hidden py-12">
          <div className="research-marquee-container">
            {/* First Set */}
            {PUBLICATIONS.map((pub, idx) => {
              const themes = [
                { color: 'bg-[#F97316]', text: 'text-[#F97316]', shadow: 'shadow-orange-500/20' },
                { color: 'bg-[#EC4899]', text: 'text-[#EC4899]', shadow: 'shadow-pink-500/20' },
                { color: 'bg-[#3B82F6]', text: 'text-[#3B82F6]', shadow: 'shadow-blue-500/20' },
                { color: 'bg-[#10B981]', text: 'text-[#10B981]', shadow: 'shadow-emerald-500/20' },
                { color: 'bg-[#EF4444]', text: 'text-[#EF4444]', shadow: 'shadow-red-500/20' },
                { color: 'bg-[#8B5CF6]', text: 'text-[#8B5CF6]', shadow: 'shadow-purple-500/20' },
              ];
              const theme = themes[idx % themes.length];

              return (
                <div
                  key={`research-1-${idx}`}
                  className="group relative flex flex-col items-center w-[320px] shrink-0"
                >
                  {/* Arrow Header - Consistent for all */}
                  <div className={`relative w-full h-32 ${theme.color} flex items-center justify-center shadow-2xl ${theme.shadow} z-20 transition-all duration-500 group-hover:scale-[1.03] active:scale-95 rounded-t-[1.5rem]`}
                    style={{
                      clipPath: 'polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%)'
                    }}
                  >
                    <span className="text-5xl font-black text-white/40 absolute inset-0 flex items-center justify-center select-none pointer-events-none tracking-tighter">
                      {pub.year}
                    </span>
                  </div>

                  {/* Body Card - Consistent for all */}
                  <div className="w-full bg-white dark:bg-slate-900 px-7 pb-8 pt-10 shadow-xl border border-slate-100 dark:border-white/5 transition-all duration-500 group-hover:border-indigo-500/30 rounded-b-[1.5rem] -mt-5">
                    <h3 className={`text-base font-black ${theme.text} mb-3 uppercase tracking-tight leading-[1.1] min-h-[2.2rem] line-clamp-2`}>
                      {pub.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-bold line-clamp-3 mb-4">
                      {pub.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-50 dark:border-white/5">
                      <div className="text-[9px] font-black text-slate-300 dark:text-slate-600 truncate max-w-[120px]">
                        ID: {pub.doi || "N/A"}
                      </div>
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-8 h-8 rounded-full ${theme.color} flex items-center justify-center text-white scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-md`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Duplicate Set for Loop */}
            {PUBLICATIONS.map((pub, idx) => {
              const themes = [
                { color: 'bg-[#F97316]', text: 'text-[#F97316]', shadow: 'shadow-orange-500/20' },
                { color: 'bg-[#EC4899]', text: 'text-[#EC4899]', shadow: 'shadow-pink-500/20' },
                { color: 'bg-[#3B82F6]', text: 'text-[#3B82F6]', shadow: 'shadow-blue-500/20' },
                { color: 'bg-[#10B981]', text: 'text-[#10B981]', shadow: 'shadow-emerald-500/20' },
                { color: 'bg-[#EF4444]', text: 'text-[#EF4444]', shadow: 'shadow-red-500/20' },
                { color: 'bg-[#8B5CF6]', text: 'text-[#8B5CF6]', shadow: 'shadow-purple-500/20' },
              ];
              const theme = themes[idx % themes.length];

              return (
                <div
                  key={`research-2-${idx}`}
                  className="group relative flex flex-col items-center w-[320px] shrink-0"
                >
                  {/* Arrow Header - Consistent for all */}
                  <div className={`relative w-full h-32 ${theme.color} flex items-center justify-center shadow-2xl ${theme.shadow} z-20 transition-all duration-500 group-hover:scale-[1.03] active:scale-95 rounded-t-[1.5rem]`}
                    style={{
                      clipPath: 'polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%)'
                    }}
                  >
                    <span className="text-5xl font-black text-white/40 absolute inset-0 flex items-center justify-center select-none pointer-events-none tracking-tighter">
                      {pub.year}
                    </span>
                  </div>

                  {/* Body Card - Consistent for all */}
                  <div className="w-full bg-white dark:bg-slate-900 px-7 pb-8 pt-10 shadow-xl border border-slate-100 dark:border-white/5 transition-all duration-500 group-hover:border-indigo-500/30 rounded-b-[1.5rem] -mt-5">
                    <h3 className={`text-base font-black ${theme.text} mb-3 uppercase tracking-tight leading-[1.1] min-h-[2.2rem] line-clamp-2`}>
                      {pub.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-bold line-clamp-3 mb-4">
                      {pub.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-50 dark:border-white/5">
                      <div className="text-[9px] font-black text-slate-300 dark:text-slate-600 truncate max-w-[120px]">
                        ID: {pub.doi || "N/A"}
                      </div>
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-8 h-8 rounded-full ${theme.color} flex items-center justify-center text-white scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-md`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>


      <Section id="education" title="Education History">
        <div className="relative max-w-6xl mx-auto py-20 px-4 overflow-hidden lg:overflow-visible">
          {/* Timeline Path (SVG) - Flowing from bottom (2008) to top (Present) */}
          <svg className="absolute inset-0 w-full h-full hidden lg:block pointer-events-none" viewBox="0 0 1000 800" fill="none" preserveAspectRatio="none">
            <path
              d="M300 750 C 600 750, 900 500, 850 400 S 500 100, 250 100"
              stroke="currentColor"
              strokeWidth="3"
              strokeDasharray="12 12"
              className="text-slate-200 dark:text-slate-800"
            />
          </svg>

          <div className="flex flex-col space-y-24 lg:space-y-0 relative min-h-[900px]">
            {EDUCATION_HISTORY.map((edu, idx) => {
              const themes = [
                // Present (Top Left)
                { color: 'text-blue-500', bg: 'bg-blue-500', dot: 'bg-blue-500', icon: <GraduationCap className="w-16 h-16" />, pos: 'lg:top-0 lg:left-10' },
                // 2020 (Middle Right)
                { color: 'text-rose-500', bg: 'bg-rose-500', dot: 'bg-rose-500', icon: <BookOpen className="w-16 h-16" />, pos: 'lg:top-[40%] lg:right-10' },
                // 2008 (Bottom Left)
                { color: 'text-orange-500', bg: 'bg-orange-500', dot: 'bg-orange-500', icon: <Cpu className="w-16 h-16" />, pos: 'lg:bottom-0 lg:left-10' },
              ];
              // Map themes chronologically ( idx 0 is Present, idx 1 is 2020, idx 2 is 2008 )
              const theme = themes[idx];

              const year = edu.period.split(' – ')[0] || edu.period;

              return (
                <div
                  key={idx}
                  className={`relative lg:absolute ${theme.pos} w-full lg:w-[420px] group animate-on-scroll`}
                >
                  {/* Milestone Dot - Reversed Logic to match chronological path */}
                  <div className={`hidden lg:flex absolute ${idx === 1 ? '-left-20' : '-right-16'} top-1/2 -translate-y-1/2 w-14 h-14 ${theme.dot} rounded-full items-center justify-center text-white font-black text-xs shadow-2xl z-30 transition-all duration-500 group-hover:scale-125 group-hover:rotate-[360deg]`}>
                    <div className="absolute inset-0 rounded-full border-2 border-white/50 scale-90" />
                    {year === "Present" || idx === 0 ? "NOW" : year}
                  </div>

                  {/* sticky Note Card */}
                  <div className="relative bg-white dark:bg-slate-900 p-10 shadow-2xl rounded-sm border-l-8 border-transparent transition-all duration-500 group-hover:shadow-indigo-500/20 group-hover:scale-[1.02]">
                    {/* Artistic Corner */}
                    <div className={`absolute top-0 right-0 w-16 h-16 ${theme.bg} rounded-bl-[3rem] opacity-5 group-hover:opacity-100 transition-all duration-700`} />
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[3.5rem] border-r-[3.5rem] border-t-white dark:border-t-slate-900 border-r-transparent" />

                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-2 h-2 rounded-full ${theme.bg}`} />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Education Milestone</span>
                      </div>

                      <h4 className={`text-2xl font-black ${theme.color} mb-3 uppercase tracking-tighter leading-none`}>
                        {edu.school}
                      </h4>
                      <p className="text-slate-900 dark:text-white font-black text-sm mb-6 tracking-tight">
                        {edu.degree}
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                          <Globe className="w-3 h-3" /> {edu.location}
                        </div>
                        <div className="inline-flex items-center gap-4 px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-white/5">
                          <span className={`text-xs font-black ${theme.color}`}>{edu.details}</span>
                          <span className="w-1 h-4 bg-slate-200 dark:bg-slate-700" />
                          <span className="text-[10px] font-black text-slate-400">{edu.period}</span>
                        </div>
                      </div>

                      {/* Giant Thematic background icon */}
                      <div className={`absolute -bottom-4 -right-4 ${theme.color} opacity-[0.03] group-hover:opacity-10 transition-all duration-1000 transform group-hover:scale-150 rotate-12`}>
                        {theme.icon}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 sm:py-24 px-4 sm:px-6 border-t border-slate-200 dark:border-white/5 text-center relative z-10 transition-colors bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-12 text-slate-900 dark:text-white tracking-tighter">
            Ready for new challenges.
          </h2>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
            <a
              href="mailto:ap.spandana@gmail.com"
              className="w-full sm:w-auto px-6 sm:px-12 py-5 bg-indigo-600 text-white rounded-3xl font-black shadow-2xl shadow-indigo-500/30 hover:scale-105 transition-all text-sm tracking-widest text-center hover:shadow-indigo-500/50"
            >
              Email me at: ap.spandana@gmail.com
            </a>
            <a
              href="/Spandana_AP.pdf"
              className="w-full sm:w-auto px-6 sm:px-12 py-5 glass dark:bg-slate-900 text-slate-900 dark:text-white rounded-3xl font-black hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex justify-center items-center gap-2 text-sm uppercase tracking-widest border border-slate-200 dark:border-white/5 shadow-xl hover:shadow-2xl"
            >
              <FileText className="w-5 h-5" /> Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-10 mb-12 text-slate-400 font-black uppercase text-[10px] tracking-[0.4em]">
            <a
              href="https://linkedin.com/in/spandana-a-p-23451924b/"
              target="_blank"
              className="hover:text-indigo-600 dark:hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/spandana2004"
              target="_blank"
              className="hover:text-indigo-600 dark:hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>

          {/* Divider */}
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-8 rounded-full"></div>

          {/* Footer Text */}
          <p className="text-slate-400 dark:text-slate-600 text-[10px] font-black uppercase tracking-[0.5em]">
            &copy; 2025 SPANDANA A P • AI/ML • DATA SCIENCE • SOFTWARE ENGINEER
          </p>
        </div>
      </footer>
      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10">
          <div
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setSelectedCert(null)}
          />
          <div className="relative w-full max-w-5xl h-full max-h-[90vh] bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-white/10 overflow-hidden flex flex-col animate-in zoom-in-95 duration-300">
            {/* Modal Header */}
            <div className="p-6 sm:px-10 flex items-center justify-between border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/50">
              <div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white leading-none mb-2">{selectedCert.name}</h3>
                <p className="text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400">{selectedCert.issuer}</p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-3 bg-slate-200 dark:bg-white/10 rounded-2xl hover:bg-red-500 hover:text-white transition-all"
              >
                <Code className="w-5 h-5 rotate-45" /> {/* Using Code as a cross replacement for variety */}
              </button>
            </div>
            {/* Modal Content - The actual certificate */}
            <div className="flex-grow bg-slate-50 dark:bg-slate-950">
              <iframe
                src={selectedCert.link.includes('drive.google.com') ? selectedCert.link.replace('/view', '/preview') : selectedCert.link}
                className="w-full h-full border-none"
                title="Full Certificate"
              />
            </div>
          </div>
        </div>
      )}
    </div >
  );
};

export default App;
