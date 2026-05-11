import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, Award, Globe, Clock, ArrowRight } from 'lucide-react';
import { PROFILE, EXPERIENCE, EDUCATION, SKILLS, LANGUAGES, REFERENCES } from '@/src/constants';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen selection:bg-luxury-gold/30 text-luxury-cream overflow-x-hidden">
      <motion.div className="scroller-bar" style={{ scaleX, transformOrigin: "0%" }} />
      <div className="noise-overlay" />
      
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <SkillsSection />
      <EducationSection />
      <ReferencesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

function Navbar() {
  const [time, setTime] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-luxury-slate/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-luxury-gold font-serif text-lg md:text-xl font-bold tracking-tighter"
            >
              KJB.
            </motion.div>
            <div className="hidden sm:block border-l border-white/10 pl-4">
              <div className="flex items-center gap-2">
                 <span className="relative flex h-1.5 w-1.5">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-luxury-gold opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-luxury-gold"></span>
                 </span>
                 <p className="text-[8px] text-luxury-gold uppercase tracking-[0.2em] font-semibold">Online Now</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden lg:flex items-center gap-6 text-[9px] uppercase tracking-[0.3em] text-white/30 border-r border-white/10 pr-8 font-medium">
              <div className="flex items-center gap-2">
                <Globe size={11} className="text-luxury-gold/50" />
                <span>Dubai</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={11} className="text-luxury-gold/50" />
                <span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
              </div>
            </div>
            
            <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.3em] text-white/50 font-bold">
              <a href="#about" className="hover:text-luxury-gold transition-colors">About</a>
              <a href="#experience" className="hover:text-luxury-gold transition-colors">Career</a>
              <a href="#skills" className="hover:text-luxury-gold transition-colors">Expertise</a>
              <a href="#contact" className="hover:text-luxury-gold transition-colors">Inquiry</a>
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-luxury-gold p-2"
              aria-label="Toggle Menu"
            >
              <motion.div animate={isMenuOpen ? { rotate: 90 } : { rotate: 0 }}>
                {isMenuOpen ? <Briefcase size={24} /> : <div className="space-y-1.5 w-6">
                  <div className="h-px bg-current w-full" />
                  <div className="h-px bg-current w-2/3 ml-auto" />
                </div>}
              </motion.div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <motion.div 
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="fixed inset-0 z-[49] bg-luxury-slate flex flex-col items-center justify-center gap-8 md:hidden"
      >
        {["About", "Experience", "Skills", "Contact"].map((item) => (
          <a 
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setIsMenuOpen(false)}
            className="text-4xl font-serif italic text-white/80 hover:text-luxury-gold transition-colors"
          >
            {item}
          </a>
        ))}
      </motion.div>
    </>
  );
}

function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-luxury-charcoal text-luxury-cream">
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-luxury-gold/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 15, repeat: Infinity, delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-luxury-gold/5 rounded-full blur-[150px]" 
        />
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block text-[9px] uppercase tracking-[0.6em] font-bold text-luxury-gold mb-12 opacity-60">
            Private Portfolio / MMXXVI
          </span>
          
          <h1 className="text-4xl sm:text-7xl md:text-9xl font-serif tracking-tighter mb-8 gold-text-gradient leading-tight">
            {PROFILE.name}
          </h1>
          
          <div className="flex flex-col items-center gap-6">
            <span className="text-sm sm:text-lg md:text-2xl font-light tracking-[0.3em] uppercase text-white/60">
              {PROFILE.title}
            </span>
            <div className="w-12 h-px bg-white/10" />
            <p className="max-w-2xl text-[10px] md:text-sm text-white/30 uppercase tracking-[0.2em] leading-relaxed italic px-4">
              Strategic sales growth, digital transformation, and executive business coordination.
            </p>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1, duration: 1 }}
           className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-4"
        >
          <div className="w-px h-16 bg-gradient-to-b from-luxury-gold/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-48 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-12 gap-16 md:gap-24 items-start">
        <motion.div {...fadeUp} className="md:col-span-8 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-10">
            <div className="w-10 h-px bg-luxury-gold/30" />
            <span className="text-[10px] text-luxury-gold uppercase tracking-[0.4em] font-bold">Biography</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-light italic serif leading-[1.3] mb-12 text-white/90" style={{ fontFamily: 'Georgia, serif' }}>
            {PROFILE.summary}
          </h2>
          <div className="grid sm:grid-cols-2 gap-8 md:gap-12 text-left">
            <div className="p-8 border border-white/5 bg-white/[0.03] rounded-sm group hover:border-luxury-gold/20 transition-all">
              <h4 className="text-[9px] uppercase tracking-widest text-luxury-gold font-bold mb-4 flex items-center gap-3">
                <Briefcase size={12} className="opacity-50" />
                Strategic Vision
              </h4>
              <p className="text-xs md:text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors italic">Aligning corporate objectives with high-impact sales execution and resonance.</p>
            </div>
            <div className="p-8 border border-white/5 bg-white/[0.03] rounded-sm group hover:border-luxury-gold/20 transition-all">
              <h4 className="text-[9px] uppercase tracking-widest text-luxury-gold font-bold mb-4 flex items-center gap-3">
                <Award size={12} className="opacity-50" />
                Leadership Equity
              </h4>
              <p className="text-xs md:text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors italic">Fostering excellence through discipline, management, and analytical precision.</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="md:col-span-4 grid gap-4 lg:sticky lg:top-32"
        >
          <ContactItem icon={<Mail size={16} />} label="Enquire" value={PROFILE.contact.email} href={`mailto:${PROFILE.contact.email}`} />
          <ContactItem icon={<Phone size={16} />} label="UAE Presence" value={PROFILE.contact.phone_uae} href={`tel:${PROFILE.contact.phone_uae}`} />
          <ContactItem icon={<Linkedin size={16} />} label="Professional" value="Kaid Johar Bohra" href={`https://linkedin.com/in/${PROFILE.contact.linkedin}`} />
        </motion.div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-24 md:py-48 bg-luxury-charcoal/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp} className="mb-20 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
            <div className="w-12 h-px bg-luxury-gold/30" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-luxury-gold font-bold">Chronology</span>
          </div>
          <h3 className="text-4xl md:text-7xl font-serif tracking-tight gold-text-gradient italic">Professional Career</h3>
        </motion.div>

        <div className="space-y-6">
          {EXPERIENCE.map((exp) => (
            <motion.div
              key={exp.company}
              {...fadeUp}
              className="group relative grid lg:grid-cols-12 gap-8 md:gap-16 p-8 md:p-12 card-luxury"
            >
              <div className="lg:col-span-4">
                <span className="text-[11px] font-bold text-luxury-gold uppercase tracking-[0.4em] block mb-6">{exp.period}</span>
                <h4 className="text-2xl md:text-3xl font-serif font-medium mb-4 group-hover:text-luxury-gold transition-colors duration-500">{exp.company}</h4>
                <div className="flex items-center gap-3 text-white/30 text-[10px] uppercase tracking-[0.2em] italic font-semibold">
                   <div className="w-2 h-[1px] bg-luxury-gold/40" />
                   {exp.role}
                </div>
              </div>
              <div className="lg:col-span-8 flex flex-col justify-center">
                <ul className="space-y-5">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-6 text-white/50 text-xs md:text-sm leading-relaxed group/item hover:text-white/80 transition-colors">
                      <div className="w-1.5 h-1.5 border border-luxury-gold/30 rounded-full shrink-0 mt-1.5 flex items-center justify-center">
                        <div className="w-1 h-1 bg-luxury-gold rounded-full opacity-60" />
                      </div>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-48 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-24 md:gap-32">
        <motion.div {...fadeUp}>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-luxury-gold/30" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-luxury-gold font-bold">DNA</span>
          </div>
          <h3 className="text-4xl md:text-6xl font-serif mb-16 tracking-tight italic text-white/90 text-center md:text-left" style={{ fontFamily: 'Georgia, serif' }}>Core Competencies</h3>
          <div className="grid grid-cols-2 gap-x-12 gap-y-6">
            {SKILLS.map((skill) => (
              <motion.div 
                key={skill}
                whileHover={{ x: 8 }}
                className="flex items-center gap-3 py-4 border-b border-white/5 group"
              >
                <div className="w-1 h-1 bg-luxury-gold scale-0 group-hover:scale-100 transition-transform" />
                <span className="text-white/40 text-[10px] md:text-[11px] uppercase tracking-[0.3em] group-hover:text-luxury-gold transition-colors font-medium">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeUp} className="mt-24 lg:mt-0">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-luxury-gold/30" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-luxury-gold font-bold">Dialect</span>
          </div>
          <h3 className="text-4xl md:text-6xl font-serif mb-16 tracking-tight italic text-white/90 text-center md:text-left" style={{ fontFamily: 'Georgia, serif' }}>Languages</h3>
          <div className="space-y-12 text-center md:text-left">
            {LANGUAGES.map((lang) => (
              <div key={lang.name} className="group">
                <div className="flex justify-between items-end mb-4 px-2">
                  <span className="text-2xl font-serif italic text-white/80 group-hover:text-luxury-gold transition-colors">{lang.name}</span>
                  <span className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-bold opacity-60">{lang.level}</span>
                </div>
                <div className="h-[1px] w-full bg-white/5 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: lang.level === 'Fluent' ? '100%' : lang.level === 'Intermediate' ? '65%' : '30%' }}
                    transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full bg-luxury-gold shadow-[0_0_10px_rgba(197,160,89,0.3)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section className="py-24 md:py-48 bg-luxury-charcoal/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
        <motion.div {...fadeUp} className="text-center mb-24">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-8 h-px bg-luxury-gold/30" />
            <span className="text-[10px] uppercase tracking-[0.6em] text-luxury-gold font-bold">Scholastic</span>
            <div className="w-8 h-px bg-luxury-gold/30" />
          </div>
          <h3 className="text-4xl md:text-7xl font-serif tracking-tight gold-text-gradient italic">Degrees of Merit</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {EDUCATION.map((edu) => (
            <motion.div 
              key={edu.degree}
              {...fadeUp}
              className="p-10 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all group relative flex flex-col items-center md:items-start"
            >
              <div className="mb-10 text-luxury-gold transform group-hover:rotate-12 transition-transform duration-500">
                <GraduationCap size={32} strokeWidth={1.5} />
              </div>
              <span className="text-[9px] font-bold text-luxury-gold uppercase tracking-[0.4em] mb-6 block opacity-60">{edu.period}</span>
              <h4 className="text-xl md:text-2xl font-serif mb-3 leading-tight text-white/90 italic">{edu.degree}</h4>
              <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] mb-10 leading-relaxed font-semibold">{edu.institution}</p>
              <div className="inline-flex items-center gap-3 text-[9px] font-bold border border-luxury-gold/20 px-4 py-2 text-luxury-gold">
                <Award size={10} />
                {edu.grade}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReferencesSection() {
  return (
    <section className="py-24 md:py-48 px-6 max-w-7xl mx-auto border-b border-white/5">
      <motion.div {...fadeUp} className="mb-24 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
          <div className="w-12 h-px bg-luxury-gold/30" />
          <span className="text-[10px] uppercase tracking-[0.6em] text-luxury-gold font-bold">Validation</span>
        </div>
        <h3 className="text-4xl md:text-7xl font-serif tracking-tight gold-text-gradient italic">Professional Endorsements</h3>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        {REFERENCES.map((ref) => (
          <motion.div 
            key={ref.email}
            {...fadeUp}
            className="p-10 md:p-16 card-luxury group overflow-hidden relative text-center md:text-left"
          >
            <h4 className="text-3xl md:text-4xl font-serif mb-4 group-hover:text-luxury-gold transition-colors duration-500 italic leading-none">{ref.name}</h4>
            <div className="flex items-center justify-center md:justify-start gap-4 mb-12">
               <span className="text-[11px] font-bold text-luxury-gold uppercase tracking-[0.3em]">{ref.company}</span>
            </div>
            
            <div className="space-y-6">
              <a href={`tel:${ref.phone}`} className="flex items-center justify-between group/link border-b border-white/5 pb-4">
                <div className="flex items-center gap-4 text-[10px] text-white/30 hover:text-white transition-colors tracking-[0.3em] uppercase font-bold">
                  <Phone size={14} className="text-luxury-gold/40" />
                  {ref.phone}
                </div>
                <ArrowRight size={14} className="opacity-0 group-hover/link:opacity-40 group-hover/link:translate-x-1 transition-all" />
              </a>
              <a href={`mailto:${ref.email}`} className="flex items-center justify-between group/link border-b border-white/5 pb-4">
                <div className="flex items-center gap-4 text-[10px] text-white/30 hover:text-white transition-colors tracking-[0.3em] uppercase font-bold">
                  <Mail size={14} className="text-luxury-gold/40" />
                  {ref.email}
                </div>
                <ArrowRight size={14} className="opacity-0 group-hover/link:opacity-40 group-hover/link:translate-x-1 transition-all" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-48 px-4 sm:px-6 max-w-7xl mx-auto">
      <motion.div 
        {...fadeUp} 
        className="relative overflow-hidden bg-luxury-gold p-12 md:p-32 text-black text-center"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black via-transparent to-transparent" />
        </div>
        
        <h2 className="text-[10px] font-bold uppercase tracking-[0.6em] mb-12 opacity-70">Engagement</h2>
        <p className="text-3xl sm:text-6xl md:text-8xl font-light leading-[1.1] mb-16 md:mb-24 max-w-6xl mx-auto italic drop-shadow-sm" style={{ fontFamily: 'Georgia, serif' }}>
          Drive your trajectory with <span className="underline decoration-1 underline-offset-8">strategic precision</span>.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <a 
            href={`mailto:${PROFILE.contact.email}`}
            className="group w-full md:w-auto flex items-center justify-center gap-6 text-[11px] font-bold uppercase tracking-[0.5em] px-16 py-8 bg-black text-luxury-gold hover:bg-black/90 transition-all duration-500 shadow-2xl"
          >
            Initiate Contact
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
          </a>
          <div className="text-black/40 font-serif text-sm italic border-t md:border-t-0 md:border-l border-black/10 md:pl-8 pt-8 md:pt-2">
            Professional excellence <br /> by design.
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-luxury-slate border-t border-white/10 relative z-10 py-16 md:py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">
        <div className="hidden sm:flex flex-wrap justify-center gap-10 md:gap-16 text-[9px] uppercase tracking-[0.5em] text-white/10 italic">
          <span>Strategy</span>
          <span>Sales</span>
          <span>Growth</span>
          <span>Digital</span>
          <span>Logic</span>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-12 border-t border-white/5 pt-16">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
             <div className="font-serif text-2xl md:text-3xl italic text-luxury-gold opacity-80 font-bold tracking-tighter">KJB.</div>
             <div>
               <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 block mb-1">{PROFILE.name}</span>
               <span className="text-[9px] uppercase tracking-[0.2em] text-white/20">Executive Sales Strategist &copy; {new Date().getFullYear()}</span>
             </div>
          </div>

          <div className="flex items-center gap-10">
            <a href={`https://linkedin.com/in/${PROFILE.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-luxury-gold transition-all hover:scale-110">
              <Linkedin size={22} strokeWidth={1.5} />
            </a>
            <a href={`mailto:${PROFILE.contact.email}`} className="text-white/20 hover:text-luxury-gold transition-all hover:scale-110">
              <Mail size={22} strokeWidth={1.5} />
            </a>
          </div>
        </div>
        
        <div className="text-[8px] uppercase tracking-[0.6em] text-white/5 font-bold mt-10">
          Quiet Luxury &middot; Professionalism &middot; Precision
        </div>
      </div>
    </footer>
  );
}

function ContactItem({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href: string }) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? "_blank" : undefined}
      rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
      className="flex items-center justify-between p-6 group border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-luxury-gold/30 transition-all duration-500"
    >
      <div className="flex items-center gap-5">
        <div className="text-luxury-gold/40 group-hover:text-luxury-gold transition-colors duration-500">
          {icon}
        </div>
        <div>
          <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-white/20 block mb-1.5">{label}</span>
          <span className="text-xs font-medium group-hover:text-luxury-gold transition-colors truncate max-w-[150px] block leading-none">{value}</span>
        </div>
      </div>
      <ArrowRight size={14} className="opacity-0 group-hover:opacity-20 group-hover:translate-x-1 transition-all" />
    </motion.a>
  );
}
