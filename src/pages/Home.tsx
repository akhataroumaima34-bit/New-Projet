import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, Shield, Zap, Globe, Tv, Smartphone, Layers } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-black text-white selection:bg-blue-500 selection:text-white">
      <Helmet>
        <title>IPTV France | Meilleur Abonnement IPTV 4K Streaming Sans Coupure - StrongOTT</title>
        <meta name="description" content="Découvrez StrongOTT, le meilleur abonnement IPTV en France. Profitez d'un streaming 4K sans coupure (no buffering) avec +25 000 chaînes HD et VOD. Stable et compatible tous appareils." />
        <meta name="keywords" content="iptv france, best iptv subscription, 4k streaming, iptv no buffering, meilleur abonnement IPTV, IPTV stable France, StrongOTT avis, streaming sport 4K" />
        <link rel="canonical" href="https://strongott.com/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="StrongOTT | IPTV France - Meilleur Abonnement Streaming 4K" />
        <meta property="og:description" content="Streaming 4K sans coupure avec le meilleur abonnement IPTV en France. +25 000 chaînes en direct." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=1920" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "StrongOTT",
            "url": "https://strongott.com/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://strongott.com/channels?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "description": "Le meilleur service IPTV premium en France avec plus de 20 000 chaînes 4K. Compatible avec Smart TV, Android, MAG, et iOS."
          })}
        </script>

        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "StrongOTT",
            "url": "https://strongott.com",
            "logo": "https://strongott.com/logo.png",
            "description": "Fournisseur leader d'abonnements IPTV premium avec plus de 20 000 chaînes en direct et 60 000 VOD.",
            "sameAs": [
              "https://twitter.com/strongott",
              "https://instagram.com/strongott"
            ]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Accueil",
                "item": "https://strongott.com/"
              }
            ]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Abonnement StrongOTT IPTV Premium",
            "description": "Service IPTV premium avec plus de 20 000 chaînes et VOD en qualité 4K/8K.",
            "brand": {
              "@type": "Brand",
              "name": "StrongOTT"
            },
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "11.99",
              "highPrice": "59.99",
              "priceCurrency": "EUR",
              "offerCount": "4"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "1250"
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Pourquoi choisir l'abonnement StrongOTT en 2026 ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "StrongOTT s'impose comme le leader de l'IPTV premium grâce à une infrastructure serveur redondante. Nous offrons plus de 20 000 chaînes en direct et une bibliothèque VOD de 60 000 titres incluant les dernières sorties Netflix, Disney+ et Amazon Prime. Notre service est optimisé pour le streaming 4K et 8K sans aucun décalage."
                }
              },
              {
                "@type": "Question",
                "name": "Comment installer mon service IPTV sur Smart TV ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "L'installation est instantanée. Que vous utilisiez une Smart TV Samsung, LG ou Android TV, il vous suffit de télécharger une application comme IPTV Smarters Pro, TiviMate ou IBO Player. Une fois votre abonnement StrongOTT activé, nous vous fournissons vos identifiants Xtream Codes pour une connexion simplifiée."
                }
              },
              {
                "@type": "Question",
                "name": "Est-ce que StrongOTT fonctionne avec un VPN ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolument. Nos serveurs sont 100% compatibles avec les meilleurs VPN (NordVPN, CyberGhost, ExpressVPN). L'utilisation d'un VPN est recommandée pour contourner le bridage de certains fournisseurs d'accès internet et garantir une fluidité totale en 4K Ultra HD."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black z-10" />
          <motion.div 
            className="flex h-full w-[400%]"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 40, 
              ease: "linear", 
              repeat: Infinity 
            }}
          >
            {[
              "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=1200",
              "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200",
              "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=1200",
              "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200",
              "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=1200",
              "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200",
              "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=1200",
              "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200"
            ].map((img, i) => (
              <div key={i} className="w-[12.5%] h-full flex-shrink-0">
                <img 
                  src={img} 
                  alt={`Streaming IPTV Premium - Content ${i + 1}`} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.3
                }
              }
            }}
          >
            <motion.span 
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/20 border border-blue-600/30 text-blue-400 text-[9px] font-black uppercase tracking-[0.3em] rounded-full mb-8 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Premium Experience
            </motion.span>
            
            <div className="relative mb-10">
              <div className="absolute inset-0 bg-blue-600/30 blur-[120px] rounded-full pointer-events-none" />
              <motion.h1 
                variants={{
                  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                }}
                className="relative text-7xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.8] skew-x-[-1deg]"
              >
                Strong <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-white to-purple-500 bg-[length:200%_auto] animate-gradient-x">IPTV.</span>
              </motion.h1>
            </div>

            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-lg md:text-xl text-white/50 font-light max-w-2xl mx-auto mb-14 leading-relaxed"
            >
              Plus de 25 000 chaînes internationales, films et séries en 4K. <br className="hidden md:block" /> La nouvelle norme du divertissement à domicile.
            </motion.p>
            
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
            >
              <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative w-full sm:w-auto px-12 py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-[10px] rounded-full overflow-hidden hover:scale-105 transition-all active:scale-95 shadow-[0_20px_50px_-5px_rgba(255,255,255,0.1)]"
              >
                <span className="relative z-10 transition-colors group-hover:text-blue-600">Démarrer Maintenant</span>
                <div className="absolute inset-0 bg-zinc-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              <button 
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-12 py-5 bg-white/5 border border-white/10 font-black uppercase tracking-[0.2em] text-[10px] rounded-full hover:bg-white/10 transition-all text-white/80 backdrop-blur-md"
              >
                Explorer l'offre
              </button>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
              className="pt-10 border-t border-white/5"
            >
              <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/20 mb-8">Compatible avec les meilleures plateformes</p>
              <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 grayscale opacity-30 hover:opacity-60 transition-opacity">
                {['SAMSUNG', 'LG TV', 'ANDROID', 'SONY', 'APPLE TV', 'MAG'].map((brand) => (
                  <span key={brand} className="text-sm font-black tracking-widest">{brand}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 animate-bounce">
          <ChevronRight className="rotate-90 w-10 h-10" />
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="relative py-32 overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ 
              scale: [1.1, 1.15, 1.1],
              opacity: [0.15, 0.2, 0.15]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1920" 
            alt="Dynamic Stadium Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-radial-[at_center_center] from-transparent via-black/50 to-black" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
        </div>

        <div className="relative z-10 px-6 max-w-7xl mx-auto">
          <div className="mb-24 text-center">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9] text-white">Conçu pour la <br/> Perfection.</h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/5 border border-white/10 bg-black/30 backdrop-blur-xl rounded-2xl overflow-hidden">
            <FeatureCard 
              icon={<Zap className="w-8 h-8 text-blue-500" />}
              title="Zéro Buffering"
              description="Notre technologie anti-freeze garantit une expérience fluide, même sur les connexions lentes."
            />
            <FeatureCard 
              icon={<Globe className="w-8 h-8 text-purple-500" />}
              title="Partout"
              description="Compatible avec Smart TV, box Android, Mag, PC, Tablettes et Smartphones."
            />
            <FeatureCard 
              icon={<Shield className="w-8 h-8 text-green-500" />}
              title="Sécurité Totale"
              description="Un cryptage de niveau militaire protège vos données de streaming et votre vie privée."
            />
            <FeatureCard 
              icon={<Tv className="w-8 h-8 text-orange-500" />}
              title="Événements en Direct"
              description="Ne manquez aucun match avec des chaînes sportives dédiées couvrant toutes les ligues majeures."
            />
            <FeatureCard 
              icon={<Layers className="w-8 h-8 text-cyan-500" />}
              title="Multi-Appareils"
              description="Regardez sur plusieurs appareils simultanément sans aucune baisse de qualité."
            />
            <FeatureCard 
              icon={<Smartphone className="w-8 h-8 text-pink-500" />}
              title="Support 24/7"
              description="Notre équipe d'experts dédiée est toujours disponible pour vous aider."
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 bg-black border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24">
            {[
              { label: "Chaînes Live", value: "25K+" },
              { label: "Uptime Serveur", value: "99.9%" },
              { label: "Utilisateurs", value: "150K+" },
              { label: "Support 24/7", value: "Live" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center md:text-left"
              >
                <div className="text-4xl md:text-5xl font-black tracking-tighter mb-2 flex items-center justify-center md:justify-start gap-3">
                  {stat.value}
                  {stat.label === "Support 24/7" && (
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                  )}
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-32 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.05 }}
            animate={{ 
              scale: [1.05, 1.1, 1.05],
              rotate: [0, 1, 0, -1, 0]
            }}
            transition={{ 
              duration: 30, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=1920" 
            alt="Stadium Night Background"
            className="w-full h-full object-cover opacity-[0.12]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-radial-[at_top_center] from-transparent via-black/60 to-black" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="inline-block px-4 py-1.5 bg-blue-600/10 border border-blue-600/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-6">
              Meilleur Rapport Qualité/Prix
            </span>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 underline decoration-blue-600 decoration-8 underline-offset-8 text-white">Tarifs.</h2>
            <p className="text-white/40 uppercase tracking-[0.3em] font-medium text-xs">Choisissez votre forfait. Changez à tout moment.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <PricingCard 
              name="Basique"
              price="11.99"
              period="Mois"
              features={[
                "Activation instantanée !",
                "Mise à jour gratuite",
                "(TV et VOD)",
                "Rapide et stable",
                "Serveur toujours disponible",
                "4K, UHD, FHD, HD, Chaînes",
                "Compatible avec tous les appareils",
                "Assistance par chat en direct 24h/24 et 7j/7"
              ]}
              accent="white/10"
            />
            <PricingCard 
              name="Plus"
              price="17.99"
              period="3 Mois"
              features={[
                "Activation instantanée !",
                "Mise à jour gratuite",
                "(TV et VOD)",
                "Rapide et stable",
                "Serveur toujours disponible",
                "4K, UHD, FHD, HD, Chaînes",
                "Compatible avec tous les appareils",
                "Assistance par chat en direct 24h/24 et 7j/7"
              ]}
              accent="white/10"
            />
            <PricingCard 
              name="Pro"
              price="35.99"
              period="6 Mois"
              features={[
                "Activation instantanée !",
                "Mise à jour gratuite",
                "(TV et VOD)",
                "Rapide et stable",
                "Serveur toujours disponible",
                "4K, UHD, FHD, HD, Chaînes",
                "Compatible avec tous les appareils",
                "Assistance par chat en direct 24h/24 et 7j/7"
              ]}
              accent="white/10"
            />
            <PricingCard 
              name="Elite"
              price="59.99"
              period="An"
              featured
              features={[
                "Activation instantanée !",
                "Mise à jour gratuite",
                "(TV et VOD)",
                "Rapide et stable",
                "Serveur toujours disponible",
                "4K, UHD, FHD, HD, Chaînes",
                "Compatible avec tous les appareils",
                "Assistance par chat en direct 24h/24 et 7j/7"
              ]}
              accent="blue-600"
            />
          </div>
        </div>
      </section>

      {/* Compatibility Section for SEO */}
      <section className="relative py-32 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0.1 }}
            whileInView={{ scale: 1, opacity: 0.15 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1920" 
            alt="Gaming and Tech Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-radial-[at_left] from-transparent via-black/40 to-black" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
                Compatible avec <br />
                <span className="text-blue-500">Tous vos Appareils.</span>
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed max-w-xl">
                Que vous soyez à la maison ou en déplacement, StrongOTT vous accompagne partout. Notre service est optimisé pour fonctionner sur toutes les plateformes majeures avec une configuration simple et rapide.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { name: "Smart TV", apps: "Samsung, LG, Sony, Android TV" },
                  { name: "Box Android", apps: "Formuler, Nvidia Shield, Xiaomi Mi Box" },
                  { name: "iOS & Android", apps: "Smartphones et Tablettes" },
                  { name: "PC & Mac", apps: "VLC Player, Web Browser" },
                  { name: "MAG Device", apps: "Mag 254, 322, 420, 520" },
                  { name: "Firestick", apps: "Amazon Fire TV Stick 4K" }
                ].map((item, i) => (
                  <div key={i} className="space-y-1">
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider">{item.name}</h4>
                    <p className="text-white/40 text-xs">{item.apps}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl opacity-50" />
              <div className="relative bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-6 uppercase tracking-tighter">Applications Recommandées</h3>
                <ul className="space-y-4">
                  {[
                    { name: "IPTV Smarters Pro", desc: "La référence absolue sur Android et iOS." },
                    { name: "TiviMate IPTV Player", desc: "Le meilleur choix pour les box Android TV." },
                    { name: "IBO Player / Flix IPTV", desc: "Idéal pour les Smart TV Samsung & LG." },
                    { name: "GSE Smart IPTV", desc: "Polyvalent et puissant pour Apple TV." }
                  ].map((app, i) => (
                    <li key={i} className="flex gap-4 items-start pb-4 border-b border-white/10 last:border-0 last:pb-0">
                      <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                        <Smartphone className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{app.name}</h4>
                        <p className="text-xs text-white/40">{app.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional SEO Section */}
      <section className="py-20 bg-black border-t border-white/5 opacity-40">
        <div className="absolute inset-0 bg-radial-[at_center] from-transparent via-black/20 to-black pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">
            <span>IPTV France</span>
            <span>IPTV Belgique</span>
            <span>IPTV Suisse</span>
            <span>IPTV Canada</span>
            <span>IPTV Maghreb</span>
            <span>IPTV Europe</span>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-40 bg-zinc-950 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <blockquote className="text-3xl md:text-5xl font-light italic text-white/80 leading-tight mb-12">
            "StrongOTT a complètement changé ma façon de consommer les médias. La qualité est impossible à distinguer du câble, mais pour une fraction du prix."
            </blockquote>
            <p className="uppercase tracking-[0.4em] text-blue-500 font-bold text-sm">— James Miller, Critique Tech</p>
        </div>
      </section>

      {/* Trust Review Section */}
      <section className="relative py-32 overflow-hidden bg-zinc-950/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.03),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full mb-8"
            >
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Shield key={s} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-yellow-500">Trust Review 4.9/5</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">La Confiance de nos <span className="text-blue-500">Utilisateurs.</span></h2>
            <p className="text-white/30 text-xs font-bold uppercase tracking-[0.4em]">Optimisé pour le SEO : Meilleur Abonnement IPTV France</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Jean-P. (Paris)",
                location: "🇫🇷 FRANCE",
                review: "Incroyable. Qualité 4K pure sur beIN et Canal. Zéro coupure pendant le Classico. L'installation a pris moins de 60 secondes.",
                tag: "Meilleur Service Foot"
              },
              {
                name: "Sarah M. (Lyon)",
                location: "🇫🇷 FRANCE",
                review: "Le support WhatsApp est une merveille. Réponse en 2 min pour m'aider à configurer IPTV Smarters. Stable et rapide.",
                tag: "Support Client 24/7"
              },
              {
                name: "Lucas V. (Belgique)",
                location: "🇧🇪 BELGIQUE",
                review: "Bibliothèque VOD immense. Les films sortent en UHD quelques jours après le ciné. Streaming sans buffering même en WiFi.",
                tag: "Qualité 4K UHD"
              }
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, backgroundColor: "rgba(255, 255, 255, 0.04)" }}
                className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-black text-white shadow-lg shadow-blue-600/20">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="font-black text-white text-xs uppercase tracking-wider">{review.name}</h4>
                    <p className="text-[10px] text-white/40 font-bold tracking-widest">{review.location}</p>
                  </div>
                </div>
                <p className="text-sm text-white/70 leading-relaxed mb-8 italic font-medium">"{review.review}"</p>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-600/10 border border-blue-600/20 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-400">
                    {review.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* SEO Trust Keywords Bar */}
          <div className="mt-24 pt-20 border-t border-white/5 flex flex-wrap justify-center items-center gap-x-16 gap-y-8 grayscale opacity-20 hover:opacity-100 transition-opacity duration-700">
            {[
              { text: 'SERVEURS STABLES', icon: <Layers className="w-4 h-4" /> },
              { text: 'QUALITÉ 4K UHD', icon: <Tv className="w-4 h-4" /> },
              { text: 'SUPPORT WHATSAPP', icon: <Smartphone className="w-4 h-4" /> },
              { text: 'ANTIFREEZE 5.0', icon: <Zap className="w-4 h-4" /> },
              { text: 'SANS COUPURE', icon: <Shield className="w-4 h-4" /> }
            ].map((kw) => (
              <div key={kw.text} className="flex items-center gap-3">
                <div className="p-2 bg-white/5 rounded-lg">{kw.icon}</div>
                <span className="text-[10px] font-black uppercase tracking-[0.5em]">{kw.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Content Section for SEO */}
      <section className="py-32 px-6 max-w-4xl mx-auto border-t border-white/5">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-16 text-center">Questions Fréquentes & <span className="text-blue-500">Expertise IPTV</span></h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Pourquoi choisir l'abonnement StrongOTT en 2026 ?</h3>
            <p className="text-white/40 leading-relaxed">
              StrongOTT s'impose comme le leader de l'IPTV premium grâce à une infrastructure serveur redondante. Nous offrons plus de 20 000 chaînes en direct et une bibliothèque VOD de 60 000 titres incluant les dernières sorties Netflix, Disney+ et Amazon Prime. Notre service est optimisé pour le streaming 4K et 8K sans aucun décalage.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Comment installer mon service IPTV sur Smart TV ?</h3>
            <p className="text-white/40 leading-relaxed">
              L'installation est instantanée. Que vous utilisiez une Smart TV Samsung, LG ou Android TV, il vous suffit de télécharger une application comme IPTV Smarters Pro, TiviMate ou IBO Player. Une fois votre abonnement StrongOTT activé, nous vous fournissons vos identifiants Xtream Codes pour une connexion simplifiée.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Est-ce que StrongOTT fonctionne avec un VPN ?</h3>
            <p className="text-white/40 leading-relaxed">
              Absolument. Nos serveurs sont 100% compatibles avec les meilleurs VPN (NordVPN, CyberGhost, ExpressVPN). L'utilisation d'un VPN est recommandée pour contourner le bridage de certains fournisseurs d'accès internet et garantir une fluidité totale en 4K Ultra HD.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ / Content Section for SEO */}
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
      className="p-12 md:p-16 transition-all group cursor-default relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10">
        <div className="mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform origin-left">{icon}</div>
        <h3 className="text-xl font-bold uppercase tracking-tight mb-4 group-hover:text-blue-400 transition-colors">{title}</h3>
        <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">{description}</p>
      </div>
    </motion.div>
  );
}

function PricingCard({ name, price, period, features, featured, accent }: { 
  name: string, 
  price: string, 
  period: string, 
  features: string[], 
  featured?: boolean,
  accent: string
}) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className={`relative p-8 xl:p-12 rounded-[2.5rem] border backdrop-blur-xl transition-all duration-500 overflow-hidden group flex flex-col h-full ${
        featured 
          ? 'border-blue-500/30 bg-gradient-to-b from-blue-600/10 to-blue-600/5 shadow-[0_0_50px_-12px_rgba(37,99,235,0.2)]' 
          : 'border-white/10 bg-white/[0.03] hover:border-white/20'
      }`}
    >
      {/* Decorative Background Elements */}
      <div className={`absolute -top-24 -right-24 w-48 h-48 blur-3xl rounded-full transition-opacity duration-500 z-0 ${featured ? 'bg-blue-600/20 opacity-100' : 'bg-white/5 opacity-0 group-hover:opacity-100'}`} />
      
      {featured && (
        <span className="absolute top-6 right-8 px-3 py-1 bg-blue-600 text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg shadow-blue-600/20 z-20">
          Meilleur Choix
        </span>
      )}

      <div className="relative z-10 flex flex-col flex-grow">
        <h4 className={`uppercase tracking-[0.3em] font-black text-[10px] mb-8 ${featured ? 'text-blue-400' : 'text-white/40'}`}>
          {name}
        </h4>
        
        <div className="mb-10">
          <div className="flex items-baseline gap-1">
            <span className="text-6xl font-black tracking-tighter">{price}€</span>
            <span className="text-white/40 text-xs font-bold uppercase tracking-widest">/ {period}</span>
          </div>
        </div>

        <ul className="space-y-4 mb-12 flex-grow">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-3 text-xs font-medium text-white/70 leading-tight">
              <div className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${featured ? 'bg-blue-500 ring-4 ring-blue-500/20' : 'bg-white/20'}`} />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <a 
            href={`https://wa.me/447853159847?text=${encodeURIComponent(`Bonjour, je souhaite souscrire au forfait ${name} (${price}€)`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative block w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] transition-all text-center overflow-hidden group/btn ${
              featured 
                ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20 hover:bg-blue-500' 
                : 'bg-white text-black hover:bg-zinc-100 shadow-xl shadow-white/5'
            }`}
          >
            <span className="relative z-10">Choisir ce Plan</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
