import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link, useSearchParams } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, Search, Tag as TagIcon, X } from 'lucide-react';
import { BLOG_POSTS } from '../constants/blogData';

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  
  const selectedTag = searchParams.get('tag');

  const allTagsWithCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    BLOG_POSTS.forEach(post => {
      post.tags.forEach(tag => {
        counts[tag] = (counts[tag] || 0) + 1;
      });
    });
    return Object.entries(counts).sort((a, b) => a[0].localeCompare(b[0]));
  }, []);

  const popularTags = useMemo(() => {
    const counts: Record<string, number> = {};
    BLOG_POSTS.forEach(post => {
      post.tags.forEach(tag => {
        counts[tag] = (counts[tag] || 0) + 1;
      });
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 12);
  }, []);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter(post => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesTag = !selectedTag || post.tags.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  const handleTagClick = (tag: string | null) => {
    if (tag === null) {
      searchParams.delete('tag');
    } else {
      searchParams.set('tag', tag);
    }
    setSearchParams(searchParams);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <div className="bg-black min-h-screen pt-32 pb-20">
      <Helmet>
        <title>{selectedTag ? `${selectedTag} | Blog StrongOTT - Meilleur Abonnement IPTV France` : 'Blog IPTV France | Meilleur Abonnement & Streaming 4K Sans Coupure - StrongOTT'}</title>
        <meta name="description" content={selectedTag ? `Articles et guides sur ${selectedTag}. Apprenez à optimiser votre abonnement IPTV avec les conseils d'experts StrongOTT pour un streaming 4K sans coupure.` : 'Découvrez le blog StrongOTT : le meilleur abonnement IPTV en France. Actualités, guides d\'installation 4K streaming, tests de débits et astuces IPTV no buffering.'} />
        <meta name="keywords" content={`${selectedTag ? selectedTag + ', ' : ''}iptv france, best iptv subscription, 4k streaming, iptv no buffering, meilleur IPTV blog, guide installation IPTV, StrongOTT avis`} />
        <link rel="canonical" href={`https://strongott.com/blog${selectedTag ? `?tag=${encodeURIComponent(selectedTag)}` : ''}`} />
        <meta property="og:url" content="https://strongott.com/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={selectedTag ? `${selectedTag} | Blog StrongOTT` : "Blog IPTV France - Meilleur Abonnement & Streaming 4K"} />
        <meta property="og:description" content="Découvrez nos guides d'experts sur le streaming IPTV premium 4K sans coupure." />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": selectedTag ? `${selectedTag} | Blog StrongOTT` : "StrongOTT IPTV Blog",
            "description": "Le meilleur blog IPTV en France : guides de streaming 4K, astuces no buffering et actualités IPTV.",
            "url": `https://strongott.com/blog${selectedTag ? `?tag=${encodeURIComponent(selectedTag)}` : ''}`,
            "publisher": {
              "@type": "Organization",
              "name": "StrongOTT",
              "logo": {
                "@type": "ImageObject",
                "url": "https://strongott.com/logo.png"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-4 block">Centre de Connaissances</span>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white mb-6">Blog <span className="text-blue-500">IPTV</span> <br/> & Expertise.</h1>
            <p className="text-white/40 text-lg max-w-xl leading-relaxed">
              Guides d'experts, plongées technologiques et actualités de l'industrie. Tout ce dont vous avez besoin pour maîtriser votre expérience IPTV.
            </p>
          </motion.div>
        </header>

        <div className="mb-16 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="relative grow max-w-2xl">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input 
                type="text"
                placeholder="RECHERCHER UN ARTICLE..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-14 py-5 text-white text-xs font-bold tracking-[0.2em] uppercase focus:outline-none focus:border-blue-600 transition-colors"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500/50 block md:text-right">
              {filteredPosts.length} ARTICLE{filteredPosts.length > 1 ? 'S' : ''} TROUVÉ{filteredPosts.length > 1 ? 'S' : ''}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => handleTagClick(null)}
              className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border flex items-center gap-2 ${
                !selectedTag 
                  ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20' 
                  : 'bg-white/5 border-white/10 text-white/40 hover:border-white/20 hover:text-white'
              }`}
            >
              Tous les Tags
            </button>
            {allTagsWithCounts.map(([tag, count]) => (
              <button
                key={tag}
                onClick={() => handleTagClick(selectedTag === tag ? null : tag)}
                className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border flex items-center gap-2 group ${
                  selectedTag === tag
                    ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20'
                    : 'bg-white/5 border-white/10 text-white/40 hover:border-white/20 hover:text-white'
                }`}
              >
                <TagIcon className="w-3 h-3" />
                {tag}
                {selectedTag === tag ? (
                  <X className="w-3 h-3 ml-1 opacity-60" />
                ) : (
                  <span className={`ml-1 text-[8px] px-1.5 py-0.5 rounded-full ${
                    selectedTag === tag ? 'bg-white/20 text-white' : 'bg-white/10 text-white/20 group-hover:text-white/40'
                  }`}>
                    {count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Popular Tags Section */}
        {!searchQuery && !selectedTag && (
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Tags Populaires</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {popularTags.map(([tag, count], i) => (
                <motion.button
                  key={tag}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleTagClick(tag)}
                  className="group relative p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-blue-600/30 hover:bg-blue-600/5 transition-all text-left overflow-hidden"
                >
                  <div className="absolute -right-4 -top-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                    <TagIcon className="w-20 h-20 rotate-12" />
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 w-fit mb-4 group-hover:bg-blue-600/20 transition-colors">
                    <TagIcon className="w-4 h-4 text-blue-500" />
                  </div>
                  <div className="font-black text-xs uppercase tracking-wider text-white mb-1 group-hover:text-blue-400 transition-colors">{tag}</div>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-white/20">
                    {count} {count > 1 ? 'Articles' : 'Article'}
                  </div>
                </motion.button>
              ))}
            </div>
          </section>
        )}

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {filteredPosts.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link to={`/blog/${post.slug}`} className="block overflow-hidden rounded-3xl mb-8 aspect-[16/10] bg-zinc-900 border border-white/5 relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full z-10">
                  {post.category}
                </div>
              </Link>
              
              <div className="flex items-center gap-6 text-[10px] text-white/30 uppercase tracking-widest font-bold mb-4">
                <span className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {post.date}</span>
                <span className="flex items-center gap-2"><Clock className="w-3 h-3" /> {post.readTime}</span>
              </div>

              <Link to={`/blog/${post.slug}`}>
                <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-4 group-hover:text-blue-500 transition-colors leading-tight">
                  {post.title}
                </h2>
              </Link>

              <p className="text-white/40 text-sm leading-relaxed mb-6 flex-grow">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map(tag => (
                  <button 
                    key={tag} 
                    onClick={(e) => {
                      e.preventDefault();
                      handleTagClick(tag);
                    }}
                    className={`px-3 py-1 border rounded-full text-[9px] uppercase font-black tracking-widest transition-colors ${
                      selectedTag === tag 
                        ? 'bg-blue-600 border-blue-600 text-white' 
                        : 'bg-white/5 border-white/10 text-white/30 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              <Link 
                to={`/blog/${post.slug}`} 
                className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest hover:gap-4 transition-all"
              >
                Lire l'Article <ChevronRight className="w-4 h-4 text-blue-500" />
              </Link>
            </motion.article>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center border border-dashed border-white/10 rounded-[3rem] bg-white/5">
          <Search className="w-12 h-12 text-white/10 mx-auto mb-6" />
          <h3 className="text-2xl font-black uppercase text-white mb-2">Aucun résultat trouvé</h3>
          <p className="text-white/40 text-sm">Essayez de rechercher avec d'autres mots-clés ou vérifiez l'orthographe.</p>
        </div>
      )}
        
        {/* Newsletter Box */}
        <section className="mt-40 p-12 md:p-20 bg-zinc-950 border border-white/5 rounded-[3rem] text-center">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">Restez Informé.</h2>
            <p className="text-white/40 text-sm mb-12 max-w-md mx-auto">Recevez les derniers guides d'installation et des offres exclusives directement dans votre boîte mail.</p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                <input 
                    type="email" 
                    placeholder="ENTREZ VOTRE EMAIL" 
                    className="flex-grow bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-xs font-bold tracking-widest uppercase focus:outline-none focus:border-blue-600 transition-colors"
                />
                <button className="px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-blue-600 hover:text-white transition-all whitespace-nowrap">
                    S'abonner
                </button>
            </form>
        </section>
      </div>
    </div>
  );
}
