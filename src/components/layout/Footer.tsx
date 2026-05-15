import { Link } from 'react-router-dom';
import { Github, Twitter, Instagram, Play } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Play className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="text-lg font-bold text-white uppercase tracking-tighter">StrongOTT</span>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs mb-4">
              StrongOTT est votre fournisseur #1 d'abonnements IPTV premium. Streaming en 4K/8K Ultra HD avec plus de 20 000 chaînes et VOD.
            </p>
            <div className="hidden" itemScope itemType="https://schema.org/Organization">
              <meta itemProp="name" content="StrongOTT" />
              <meta itemProp="url" content="https://strongott.com" />
              <meta itemProp="logo" content="https://strongott.com/logo.png" />
              <meta itemProp="description" content="Leader du streaming IPTV premium 4K/8K." />
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Plateforme</h4>
            <ul className="space-y-4">
              <li><Link to="/channels" className="text-sm text-white/40 hover:text-white transition-colors">Liste des Chaînes</Link></li>
              <li><Link to="/apps" className="text-sm text-white/40 hover:text-white transition-colors">Télécharger les Apps</Link></li>
              <li><Link to="/setup" className="text-sm text-white/40 hover:text-white transition-colors">Guide d'Installation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Entreprise</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm text-white/40 hover:text-white transition-colors">À Propos</Link></li>
              <li><Link to="/blog" className="text-sm text-white/40 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-sm text-white/40 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Suivez-nous</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-[10px] uppercase tracking-widest text-white/30">
            © 2024 StrongOTT. Tous droits réservés.
          </p>
          <div className="flex gap-8">
            <Link to="/terms" className="text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-colors">Conditions d'Utilisation</Link>
            <Link to="/privacy" className="text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-colors">Politique de Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
