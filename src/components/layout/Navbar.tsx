import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Play, Menu, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link 
          to="/" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <Play className="w-6 h-6 text-white fill-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white uppercase">Strong<span className="text-blue-500">OTT</span></span>
        </Link>

        {/* Live Server Status */}
        <div className="hidden lg:flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </div>
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40">Status: <span className="text-green-500">Live Server</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            Accueil
          </Link>
          <Link to="/#features" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Fonctionnalités</Link>
          <Link to="/#pricing" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Tarifs</Link>
          <Link to="/channels" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Chaînes</Link>
          <Link to="/blog" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Blog</Link>
          <Link 
            to="/#get-started" 
            className="px-5 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-blue-500 hover:text-white transition-all"
          >
            Accès Anticipé
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black border-b border-white/10 px-6 py-8 flex flex-col gap-6"
        >
          <Link 
            to="/" 
            onClick={() => {
              setIsOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} 
            className="text-lg font-medium text-white"
          >
            Accueil
          </Link>
          <Link to="/#features" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white/70">Fonctionnalités</Link>
          <Link to="/#pricing" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white/70">Tarifs</Link>
          <Link to="/channels" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white/70">Chaînes</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white/70">Blog</Link>
          <Link 
            to="/#get-started" 
            onClick={() => setIsOpen(false)}
            className="w-full py-4 bg-blue-600 text-white text-sm font-bold uppercase tracking-widest rounded-xl text-center"
          >
            Commencer
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
