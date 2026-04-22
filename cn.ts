import { motion, Variants } from 'framer-motion';
import { 
  BookOpen, 
  Map, 
  GitBranch, 
  FileText, 
  Globe, 
  Shield, 
  Brain, 
  Users, 
  Award,
  ExternalLink,
  Gamepad2,
  MessageSquare,
  Scroll,
  ChevronDown,
  Mail,
  Link2,
  Code2
} from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-heading font-bold text-xl text-slate-900 tracking-tight">
            [Twoje Imię i Nazwisko]
          </span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-20%,rgba(59,130,246,0.15),rgba(16,185,129,0.05),transparent)]" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl" />
        
        <motion.div 
          className="relative max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
            <Gamepad2 className="w-4 h-4" />
            Open to internship opportunities
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="font-heading text-5xl md:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tighter"
          >
            ASPIRES NARRATIVE
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              & QUEST DESIGN
            </span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Crafting morally complex, choice-driven stories for immersive game worlds. 
            Based in Poland, writing in English (C1).
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-6 text-sm font-bold tracking-wide uppercase">
            <span className="flex items-center gap-2 text-slate-300">
              <Map className="w-4 h-4 text-blue-500" /> Poland
            </span>
            <span className="flex items-center gap-2 text-slate-300">
              <Award className="w-4 h-4 text-emerald-500" /> English C1
            </span>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="mt-16">
            <a 
              href="#about" 
              className="inline-flex flex-col items-center gap-2 text-slate-500 hover:text-blue-400 transition-colors uppercase text-[10px] font-bold tracking-[0.2em]"
            >
              <span>Explore Portfolio</span>
              <ChevronDown className="w-5 h-5 animate-bounce text-blue-500" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Me */}
      <section id="about" className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-16">
              <span className="text-blue-600 font-black text-xs tracking-[0.3em] uppercase block mb-4">Biography</span>
              <h2 className="font-heading text-4xl md:text-6xl font-black text-slate-950 mt-3 leading-none tracking-tighter">
                Storyteller with a <br/><span className="text-slate-400">Unique Background</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16 items-start">
              <motion.div variants={fadeInUp} className="space-y-8 text-slate-600 leading-relaxed text-xl font-medium">
                <p>
                  I am an aspiring narrative and quest designer focused on morally complex, 
                  choice-driven storytelling that makes players think twice.
                </p>
                <p>
                  I graduated from a police and law-focused high school, where I studied 
                  negotiation, criminal psychology, and conflict resolution. These themes strongly influence my narrative work, especially 
                  in stories centered around <strong className="text-slate-950 font-black underline decoration-blue-500 underline-offset-4">responsibility, authority, and consequences</strong>.
                </p>
                <p>
                  I have written long-form fiction for several years. One of my serialized 
                  stories reached over <strong className="text-slate-950 font-black underline decoration-emerald-500 underline-offset-4">100,000 reads online</strong>, which taught me audience 
                  retention, character arcs, and emotional pacing.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-8">
                <h3 className="font-heading text-xs font-black text-slate-400 uppercase tracking-widest">Specializations</h3>
                <div className="grid gap-3">
                  {[
                    { icon: GitBranch, title: 'Non-linear storytelling', color: 'bg-blue-600' },
                    { icon: Shield, title: 'Moral ambiguity', color: 'bg-slate-950' },
                    { icon: Map, title: 'Branching quest design', color: 'bg-emerald-600' },
                    { icon: Globe, title: 'Environmental storytelling', color: 'bg-blue-600' },
                    { icon: FileText, title: 'Worldbuilding through documents', color: 'bg-slate-950' },
                  ].map((item, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-5 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all group"
                    >
                      <div className={`p-2.5 rounded-lg ${item.color} text-white shadow-lg`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-slate-900 tracking-tight">{item.title}</h4>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 md:py-32 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-20 text-center">
              <span className="text-emerald-600 font-black text-xs tracking-[0.3em] uppercase block mb-4">Works</span>
              <h2 className="font-heading text-4xl md:text-7xl font-black text-slate-950 mt-3 leading-none tracking-tighter">
                Selected Projects
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <motion.div 
                variants={fadeInUp}
                className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-2 bg-gradient-to-r from-blue-600 to-emerald-500" />
                <div className="p-8 flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider">
                      Quest Design
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-wider">
                      The Witcher 3
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    Echoes of a Broken Heart
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                    A side quest concept where Geralt investigates a mysterious illness in Novigrad. 
                    What appears to be poison turns out to be a location-based curse born from heartbreak. 
                    Features investigation-driven structure, irreversible branching, and no combat.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <GitBranch className="w-4 h-4 text-emerald-500" />
                      <span>Irreversible accusation branch</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <MessageSquare className="w-4 h-4 text-emerald-500" />
                      <span>Dialogue tone affects outcomes</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Map className="w-4 h-4 text-emerald-500" />
                      <span>Location-based curse system</span>
                    </div>
                  </div>
                  <a 
                    href="https://zuzanna-klimas.github.io/Demo-portfolio-ZK/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-blue-600 transition-all active:scale-95 shadow-lg shadow-slate-200"
                  >
                    Play Twine Prototype <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              {/* Project 2 */}
              <motion.div 
                variants={fadeInUp}
                className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-2 bg-gradient-to-r from-emerald-500 to-blue-600" />
                <div className="p-8 flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold uppercase tracking-wider">
                      Quest Design
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-wider">
                      Witcher 3
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    The Most Expensive Dwarf in Novigrad
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                    A comedic side quest concept where Geralt uncovers a staged kidnapping orchestrated by familiar faces attempting to steal his rare gwent cards.

                    Includes branching social choices, optional gwent duel resolution, and strong character-driven humor as tonal contrast to darker narratives.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Gamepad2 className="w-4 h-4 text-blue-500" />
                      <span>Branching social choices</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Brain className="w-4 h-4 text-blue-500" />
                      <span>Optional gwent duel resolution</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Scroll className="w-4 h-4 text-blue-500" />
                      <span>Character-driven humor</span>
                    </div>
                  </div>
                  <a 
                    href="https://endearing-cendol-426497.netlify.app/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-emerald-600 transition-all active:scale-95 shadow-lg shadow-slate-200"
                  >
                    Play Twine Prototype <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              {/* Project 3 */}
              <motion.div 
                variants={fadeInUp}
                className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-2 bg-gradient-to-r from-blue-700 to-blue-900" />
                <div className="p-8 flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider">
                      Worldbuilding
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold uppercase tracking-wider">
                      Interactive Narrative
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">
                    Epidemic Protocol Project F.E.N.I.X
                  </h3>
                  <p className="text-blue-600 text-xs font-bold uppercase tracking-tight mb-4">
                    Interactive Worldbuilding Project
                  </p>
                  
                  <div className="text-sm text-slate-600 leading-relaxed mb-6 space-y-3 flex-grow">
                    <p>
                      This project places the player in the role of an investigator during the early stages of a hidden epidemic outbreak.
                    </p>
                    <p>
                      Instead of traditional combat or action, progression depends on information access. Through branching decisions, the player may uncover classified mutation reports, suppressed government documents, and conflicting testimonies.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <a 
                      href="https://interaktywna-strona-7una.bolt.host/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-medium text-slate-700 hover:border-blue-300 hover:bg-blue-50 transition-colors group/link"
                    >
                      <span className="flex items-center gap-2">
                        <Globe className="w-3.5 h-3.5 text-blue-600" />
                        In-universe government site
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover/link:text-blue-600 transition-colors" />
                    </a>

                    <details className="group/details rounded-xl border border-slate-200 bg-slate-50">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-2.5 text-xs font-medium text-slate-700">
                        <span className="flex items-center gap-2">
                          <FileText className="w-3.5 h-3.5 text-emerald-600" />
                          Hidden login reports
                        </span>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 transition-transform group-open/details:rotate-180" />
                      </summary>
                      <div className="border-t border-slate-200 px-4 py-3 text-[11px] text-slate-600 space-y-1 bg-white rounded-b-xl">
                        <p><span className="font-bold text-slate-900">User:</span> Victor_Noctar</p>
                        <p><span className="font-bold text-slate-900">Pass:</span> W4terzwijn</p>
                        <p><span className="font-bold text-slate-900">Report:</span> 5483 | <span className="font-bold text-slate-900">Extra:</span> K3Y4P</p>
                      </div>
                    </details>

                    <a 
                      href="https://canva.link/g2bgx9utigp1ldu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-medium text-slate-700 hover:border-emerald-300 hover:bg-emerald-50 transition-colors group/link"
                    >
                      <span className="flex items-center gap-2">
                        <Scroll className="w-3.5 h-3.5 text-emerald-600" />
                        Mutation Docs (ALFA/BETA)
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover/link:text-emerald-600 transition-colors" />
                    </a>

                    <a 
                      href="https://serene-valkyrie-ce65e1.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-medium text-slate-700 hover:border-blue-300 hover:bg-blue-50 transition-colors group/link"
                    >
                      <span className="flex items-center gap-2">
                        <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                        Individual perspectives
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover/link:text-blue-600 transition-colors" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills & Experience */}
      <section id="skills" className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-20 text-center">
              <span className="text-blue-600 font-black text-xs tracking-[0.3em] uppercase block mb-4">Competencies</span>
              <h2 className="font-heading text-4xl md:text-7xl font-black text-slate-950 mt-3 leading-none tracking-tighter">
                Experience & Skills
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16">
              {/* Narrative & Design */}
              <motion.div variants={fadeInUp} className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-4 rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-200">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-3xl font-black text-slate-950 tracking-tighter">Narrative & Design</h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'Branching quest design',
                    'Moral decision structures',
                    'Dialogue writing',
                    'Environmental storytelling',
                    'Twine (SugarCube)',
                    'Basic Godot knowledge'
                  ].map((skill, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-400 transition-colors group">
                      <div className="w-2 h-2 rounded-full bg-blue-600 group-hover:scale-150 transition-transform" />
                      <span className="text-slate-800 font-bold tracking-tight">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Analytical & Leadership */}
              <motion.div variants={fadeInUp} className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-4 rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-200">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-3xl font-black text-slate-950 tracking-tighter">Analytical & Strategic</h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'Negotiation training',
                    'Criminal psychology foundations',
                    'Tactical decision-making',
                    'Conflict analysis',
                    'Leadership development (ALA)',
                    'Volunteer work with children'
                  ].map((skill, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-emerald-400 transition-colors group">
                      <div className="w-2 h-2 rounded-full bg-emerald-600 group-hover:scale-150 transition-transform" />
                      <span className="text-slate-800 font-bold tracking-tight">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-6 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(16,185,129,0.1),transparent)]" />
        <motion.div 
          className="relative max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeInUp}
            className="font-heading text-5xl md:text-8xl font-black text-white mb-8 leading-none tracking-tighter"
          >
            LET'S BUILD SOMETHING <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              MEMORABLE
            </span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            I'm currently open to internship opportunities in game narrative and quest design. 
            If you're looking for a storyteller who understands consequence, let's talk.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-6">
            <a 
              href="mailto:your.email@example.com" 
              className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-white text-slate-950 font-black text-lg hover:bg-blue-600 hover:text-white transition-all active:scale-95 overflow-hidden"
            >
              <Mail className="w-6 h-6" />
              <span>Get in Touch</span>
            </a>
            <a 
              href="#" 
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-slate-900 text-white font-black text-lg hover:bg-slate-800 transition-all active:scale-95 border border-slate-800"
            >
              <Link2 className="w-6 h-6 text-emerald-400" />
              <span>LinkedIn</span>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-slate-500 text-sm">
            © 2025 [Twoje Imię i Nazwisko]. All rights reserved.
          </span>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-primary-400 transition-colors">
              <Code2 className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-500 hover:text-primary-400 transition-colors">
              <Link2 className="w-5 h-5" />
            </a>
            <a href="mailto:your.email@example.com" className="text-slate-500 hover:text-primary-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
