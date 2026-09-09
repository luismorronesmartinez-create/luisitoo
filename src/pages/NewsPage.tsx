import { useState } from 'react';
import { ArrowRight, Clock, User, X, ChevronLeft } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { FinDivider } from '@/components/FinDivider';
import { NewsletterSignup } from '@/components/NewsletterSignup';
import { newsArticles, IMAGES } from '@/data/site';
import type { NewsArticle } from '@/data/site';

const categories = ['All', 'Build Updates', 'Competitions', 'Events', 'Technical'] as const;
type Category = (typeof categories)[number];

export function NewsPage() {
  const [category, setCategory] = useState<Category>('All');
  const [selected, setSelected] = useState<NewsArticle | null>(null);

  const filtered = category === 'All' ? newsArticles : newsArticles.filter((a) => a.category === category);

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.engineCloseup} alt="Rocket engine closeup" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy" />
        </div>
        <div className="container-mission relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-sky" />
              <span className="font-headline text-xs uppercase tracking-[0.2em] text-sky">Newsroom</span>
            </div>
            <h1 className="headline text-4xl md:text-5xl lg:text-6xl text-white text-shadow-lg">
              News & Blog
            </h1>
            <p className="mt-5 text-lg text-sky-light/80 leading-relaxed max-w-2xl">
              Build updates, competition recaps, technical deep-dives, and announcements from
              the workshop and the launch pad.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <FinDivider className="h-12 text-navy" />
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-navy py-8 border-b border-white/5">
        <div className="container-mission">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-md font-headline text-xs uppercase tracking-wide transition-all duration-200 ${
                  category === cat
                    ? 'bg-sky text-white'
                    : 'bg-white/5 text-sky-light/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="bg-navy-950 py-20 lg:py-28">
        <div className="container-mission">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <button
                key={article.id}
                onClick={() => setSelected(article)}
                className="group text-left rounded-xl overflow-hidden bg-navy-800/50 border border-white/10 card-hover hover:border-sky/40"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent" />
                  <span className="absolute top-3 left-3 tag tag-sky text-[10px]">
                    {article.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-[10px] text-sky-light/40 font-headline uppercase tracking-wider mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.dateLabel}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {article.author}
                    </span>
                  </div>
                  <h3 className="font-headline font-bold text-lg text-white leading-snug group-hover:text-sky transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm text-sky-light/50 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[10px] text-sky-light/40 font-headline uppercase tracking-wider">
                      {article.readTime}
                    </span>
                    <span className="flex items-center gap-1 text-sky text-xs font-headline uppercase tracking-wide">
                      Read
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-navy py-16">
        <div className="container-mission">
          <NewsletterSignup
            title="Never Miss a Launch"
            description="Get build updates and launch alerts delivered to your inbox."
          />
        </div>
      </section>

      {/* Article Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-navy-800 border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sky-light/60 hover:text-white hover:bg-sky/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-56 overflow-hidden rounded-t-2xl">
              <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-800 to-transparent" />
              <div className="absolute bottom-4 left-6">
                <span className="tag tag-sky text-[10px]">{selected.category}</span>
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center gap-3 text-[10px] text-sky-light/40 font-headline uppercase tracking-wider mb-4">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {selected.dateLabel}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  {selected.author}
                </span>
                <span>·</span>
                <span>{selected.readTime}</span>
              </div>

              <h1 className="headline text-2xl md:text-3xl text-white">{selected.title}</h1>

              <div className="mt-6 space-y-4">
                {selected.content.map((para, i) => (
                  <p key={i} className="text-sky-light/70 leading-relaxed">{para}</p>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <button
                  onClick={() => setSelected(null)}
                  className="flex items-center gap-1 text-sky hover:text-sky-light transition-colors text-sm font-headline uppercase tracking-wide"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back to Articles
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
