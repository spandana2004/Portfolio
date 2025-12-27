
import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
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
  Cpu,
  Database,
  Globe,
  Layers,
  Sparkles,
  MapPin,
  Calendar
} from 'lucide-react';
import { EXPERIENCES, PROJECTS, SKILLS, PUBLICATIONS, ACHIEVEMENTS, CERTIFICATIONS, EDUCATION_HISTORY } from './constants';

const TechIconMap: Record<string, React.ReactNode> = {
  "AI/ML & Data Science": <Cpu className="w-6 h-6" />,
  "Programming": <Terminal className="w-6 h-6" />,
  "Web & Database": <Globe className="w-6 h-6" />,
  "Core Computer Science": <Database className="w-6 h-6" />
};

const Section: React.FC<{ id: string; title: string; children: React.ReactNode; icon: React.ReactNode }> = ({ id, title, children, icon }) => (
  <section id={id} className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
    <div className="flex flex-col items-center gap-4 mb-20 animate-on-scroll">
      <div className="p-4 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-3xl text-indigo-600 dark:text-indigo-400">
        {icon}
      </div>
      <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-slate-100 text-center">{title}</h2>
      <div className="w-20 h-1.5 bg-indigo-600 rounded-full"></div>
    </div>
    {children}
  </section>
);

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
 
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

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 selection:bg-indigo-500/30 font-sans overflow-x-hidden">
      {/* Background elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full animate-blob animation-delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-black/5 dark:border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-2xl font-black tracking-tighter flex items-center gap-2">
            <span className="gradient-text">SPANDANA</span>
          </a>
          
          <div className="hidden lg:flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
            {['About', 'Expertise', 'Work', 'Projects', 'Awards', 'Certifications', 'Research', 'Education'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-indigo-600 dark:hover:text-slate-100 transition-colors px-1">
                {item}
              </a>
            ))}
            <div className="h-4 w-px bg-slate-300 dark:bg-slate-700 mx-2"></div>
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-800 dark:text-slate-100"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a href="mailto:ap.spandana@gmail.com" className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-700 ml-2">
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* Hero / About */}
      <section id="about" className="relative pt-48 pb-32 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 z-10">
        <div className="flex-1 space-y-10 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-[10px] font-black uppercase tracking-[0.3em]">
            <Sparkles className="w-3 h-3" />
            Computer Science Engineering Student
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[1.1] tracking-tighter text-slate-900 dark:text-white">
            Hello, I'm <br />
            <span className="gradient-text italic font-serif block sm:inline">
              Spandana A P
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl font-medium leading-relaxed text-justify">
            A Computer Science undergraduate fueled by the challenge of architecting intelligent systems and end-to-end software solutions. With a proven track record across government research labs, startups, and innovative tech spaces, I specialize in bridging the gap between theoretical machine learning and scalable real-world impact. I am passionate about transforming complex data into reliable, user-centric products. I value clean design, robust engineering, and continuous learning, and I thrive in environments that push the boundaries of innovation to create meaningful, lasting impact.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="https://linkedin.com/in/spandana-a-p-23451924b/" target="_blank" className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-2xl hover:border-indigo-500 transition-all hover:scale-110 shadow-sm dark:text-slate-100">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/spandana2004" target="_blank" className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-2xl hover:border-indigo-500 transition-all hover:scale-110 shadow-sm dark:text-slate-100">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        {/* Holographic Visual Portal */}
        <div className="relative group lg:w-1/3 animate-on-scroll delay-300 perspective-1000">
          <div className="absolute -inset-8 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-[4rem] blur-[60px] opacity-20 group-hover:opacity-40 transition-all duration-1000 animate-pulse"></div>
          
          <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden border border-white/20 dark:border-white/5 bg-slate-200 dark:bg-slate-800/50 shadow-2xl transition-all duration-700 group-hover:rotate-y-6 group-hover:scale-[1.03] backdrop-blur-3xl">
            {/* UI Decals (Futuristic Feel) */}
            <img 
              src="/about.jpg"
              className="w-full h-full object-cover group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
            />
            
            {/* Holographic Overlay Grids */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
          </div>
          
          {/* Floating Data Nodes */}
          <div className="absolute -top-6 -right-6 w-16 h-16 bg-white dark:bg-slate-900 rounded-2xl shadow-xl flex items-center justify-center text-indigo-500 border border-indigo-500/20 animate-bounce transition-all group-hover:scale-125">
            <Cpu className="w-8 h-8" />
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <Section id="expertise" title="Technical Expertise" icon={<Layers />}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((cat, idx) => (
            <div key={cat.category} className="p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-white/5 hover:border-indigo-500/30 transition-all group animate-on-scrollitems-center" style={{ transitionDelay: `${idx * 100}ms` }}>
              <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-8 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all transform group-hover:rotate-6">
                {TechIconMap[cat.category] || <Code />}
              </div>
              <h3 className="text-xl font-black mb-6 text-slate-900 dark:text-slate-100">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map(skill => (
                  <span key={skill} className="px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 border border-transparent hover:border-indigo-500/20 transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

{/* Work History */}
<Section id="work" title="Professional Journey" icon={<Briefcase />}>
  <div className="relative max-w-5xl mx-auto">
    
    {/* Center Line */}
    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 
                    bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent 
                    opacity-20 hidden md:block" />

    <div className="space-y-12">
      {EXPERIENCES.map((exp, idx) => (
        <div
          key={idx}
          className={`relative flex flex-col md:flex-row items-center justify-between 
          w-full animate-on-scroll ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
        >
          {/* CARD */}
          <div
            className="w-full md:w-[45%] p-8 bg-white dark:bg-slate-900 
                       rounded-[2.5rem] border border-slate-100 dark:border-white/5 
                       shadow-sm group hover:border-indigo-500/40 transition-all"
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-500/10 
                              rounded-xl flex items-center justify-center 
                              text-indigo-600 shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900 dark:text-slate-100">
                  {exp.role}
                </h3>
                <div className="text-indigo-600 dark:text-indigo-400 
                                font-black text-sm uppercase tracking-wider">
                  {exp.company}
                </div>
              </div>
            </div>

            {/* Bullets */}
            <ul className="space-y-3 mb-6">
              {exp.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="text-slate-500 dark:text-slate-400 
                             text-sm flex items-start gap-3"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  {bullet}
                </li>
              ))}
            </ul>

            {/* LINK BUTTON (added) */}
            {exp.link && (
              <div className="mb-6">
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 
                             rounded-xl bg-indigo-50 dark:bg-indigo-500/10 
                             text-indigo-600 dark:text-indigo-400 
                             text-xs font-black uppercase tracking-wider
                             border border-indigo-500/20
                             hover:bg-indigo-600 hover:text-white 
                             transition-all"
                >
                  View Work
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            )}

            {/* Footer */}
            <div className="pt-6 border-t border-slate-100 dark:border-white/5 
                            flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                <Calendar className="w-3.5 h-3.5" />
                {exp.period}
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                <MapPin className="w-3.5 h-3.5" />
                {exp.location}
              </div>
            </div>
          </div>

          {/* CENTER DOT */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 
                          w-4 h-4 rounded-full bg-white dark:bg-slate-950 
                          border-4 border-indigo-500 z-10" />

          {/* SPACER */}
          <div className="hidden md:block w-[45%]" />
        </div>
      ))}
    </div>
  </div>
</Section>


      {/* Projects */}
      <Section id="projects" title="Core Projects" icon={<Terminal />}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="group bg-white dark:bg-slate-900 rounded-[3rem] overflow-hidden border border-slate-100 dark:border-white/5 hover:translate-y-[-8px] transition-all duration-500 animate-on-scroll shadow-lg shadow-black/5">
              <img
                  src={project.image}
                  alt={project.title}
                  className="max-w-[100%] max-h-[90%] object-contain 
             grayscale group-hover:grayscale-0 
             transition-all duration-700 
             group-hover:scale-105"
                  loading="lazy"
              />
              <div className="p-10">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">{project.title}</h3>
                  <div className="flex gap-4">
                    {project.github && (
                      <a href={project.github} target="_blank" className="p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl text-slate-600 dark:text-slate-400 hover:bg-indigo-600 hover:text-white transition-all shadow-sm"><Github className="w-5 h-5" /></a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" className="p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl text-slate-600 dark:text-slate-400 hover:bg-indigo-600 hover:text-white transition-all shadow-sm"><ExternalLink className="w-5 h-5" /></a>
                    )}
                  </div>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 leading-relaxed font-medium">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl text-[10px] font-black uppercase text-indigo-600 dark:text-indigo-400 tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Awards */}
      <Section id="awards" title="Awards & Honors" icon={<Trophy />}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ACHIEVEMENTS.map((ach, idx) => (
            <div key={idx} className="p-10 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-white/5 animate-on-scroll relative group hover:bg-indigo-600 transition-all duration-500 shadow-xl shadow-black/5">
              <div className="w-14 h-14 bg-amber-100 dark:bg-amber-500/10 rounded-2xl flex items-center justify-center mb-8 text-amber-600 group-hover:bg-white group-hover:text-indigo-600 transition-all">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900 dark:text-slate-100 mb-2 leading-tight group-hover:text-white transition-all">{ach.title}</h3>
              <p className="text-indigo-600 dark:text-indigo-400 text-[10px] font-black mb-4 uppercase tracking-[0.2em] group-hover:text-indigo-100 transition-all">{ach.org} • {ach.date}</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed group-hover:text-indigo-50 transition-all">{ach.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section id="certifications" title="Certifications" icon={<Award />}>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CERTIFICATIONS.map((cert, idx) => (
                <a
                  key={idx}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-white/5 rounded-3xl animate-on-scroll hover:shadow-2xl hover:scale-[1.02] transition-all cursor-pointer"
                >
                  <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-1">
                    {cert.name}
                  </h4>
                  <p className="text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-wider">
                    {cert.issuer}
                  </p>
                  <div className="mt-4 flex justify-end">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                  </div>
                </a>
              ))}
          </div>
      </Section>

      {/* Research */}
      <Section id="research" title="Research & Publications" icon={<BookOpen />}>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-4">
        {PUBLICATIONS.map((pub, idx) => (
          <div
            key={idx}
            className="group p-6 sm:p-8 md:p-10 bg-white dark:bg-slate-900 rounded-[2rem] sm:rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-lg shadow-black/5 hover:border-emerald-500/30 transition-all animate-on-scroll w-full"
          >
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              {/* Icon */}
              <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl flex items-center justify-center shrink-0 text-emerald-600">
                <FileText className="w-6 h-6" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 transition-colors mb-2 leading-tight">
                  {pub.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-bold mb-3 sm:mb-4">
                  {pub.description} ({pub.year})
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 text-[8px] sm:text-[10px] font-black text-emerald-600 bg-emerald-500/5 px-2 sm:px-4 py-1 sm:py-2 rounded-xl border border-emerald-500/10 uppercase tracking-widest">
                    DOI: {pub.doi}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>


      {/* Education */}
      <Section id="education" title="Education History" icon={<GraduationCap />}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6">
          {EDUCATION_HISTORY.map((edu, idx) => (
            <div key={idx} className="p-10 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-white/5 hover:border-purple-500/30 transition-all group animate-on-scroll">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-purple-50 dark:bg-purple-500/10 rounded-3xl flex items-center justify-center text-purple-600 group-hover:rotate-6 transition-all">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-black text-2xl text-slate-900 dark:text-slate-100 mb-1">{edu.school}</h4>
                    <p className="text-purple-600 dark:text-purple-400 font-black text-sm uppercase tracking-wider">{edu.degree}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[12px] font-black px-4 py-2 bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-300 rounded-xl uppercase tracking-tighter shadow-sm">{edu.details}</span>
                  <div className="mt-4 flex items-center gap-3 text-slate-400 text-xs font-bold uppercase tracking-[0.2em] justify-end">
                    {edu.period} • {edu.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 sm:py-24 px-4 sm:px-6 border-t border-slate-100 dark:border-white/5 text-center relative z-10 transition-colors bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-12 dark:text-white tracking-tighter">
            Ready for new challenges.
          </h2>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
            <a
              href="mailto:ap.spandana@gmail.com"
              className="w-full sm:w-auto px-6 sm:px-12 py-5 bg-indigo-600 text-white rounded-3xl font-black shadow-2xl shadow-indigo-500/30 hover:scale-105 transition-all text-sm tracking-widest text-center"
            >
              Email me at: ap.spandana@gmail.com
            </a>
            <a
              href="/Spandana_AP.pdf"
              className="w-full sm:w-auto px-6 sm:px-12 py-5 glass dark:bg-slate-900 text-slate-900 dark:text-white rounded-3xl font-black hover:bg-slate-100 transition-all flex justify-center items-center gap-2 text-sm uppercase tracking-widest border border-black/5 dark:border-white/5 shadow-xl"
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
    </div>
  );
};

export default App;
