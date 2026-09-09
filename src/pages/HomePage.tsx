import { ArrowRight, Rocket, Users, Trophy, Info, ChevronRight, Calendar, MapPin } from 'lucide-react';
import { Countdown } from '@/components/Countdown';
import { SectionHeader } from '@/components/SectionHeader';
import { NewsletterSignup } from '@/components/NewsletterSignup';
import { FinDivider } from '@/components/FinDivider';
import { useNav } from '@/lib/nav';
import { IMAGES, newsArticles, launchEvents, rockets, stats } from '@/data/site';
import type { PageId } from '@/data/site';

const statusColors: Record<string, string> = {
  upcoming: 'bg-sky/15 text-sky border-sky/30',
  ready: 'bg-green-500/15 text-green-400 border-green-500/30',
  launched: 'bg-sky-light/15 text-sky-light border-sky-light/30',
  'in-development': 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30',
};

export function HomePage() {
  const { navigate } = useNav();
  const nextLaunch = launchEvents.find((e) => e.status === 'upcoming');
  const featuredNews = newsArticles.slice(0, 4);
  const featuredRocket = rockets.find((r) => r.status === 'in-development') ?? rockets[0];

  const quickLinks: { id: PageId; label: string; icon: typeof Users; description: string }[] = [
    { id: 'team', label: 'The Team', icon: Users, description: 'Meet the crew' },
    { id: 'rockets', label: 'Rockets', icon: Rocket, description: 'Our fleet' },
    { id: 'launches', label: 'Launches', icon: Trophy, description: 'Competitions' },
    { id: 'information', label: 'Information', icon: Info, description: 'About us' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.heroRocket}
            alt="Rocket launch at dusk"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/60 to-navy" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/50 to-transparent" />
        </div>

        <div className="container-mission relative z-10 pt-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6 animate-fade-in">
              <span className="tag tag-sky">
                <span className="w-1.5 h-1.5 rounded-full bg-sky animate-pulse" />
                Student Rocketry · Barcelona
              </span>
            </div>

            <h1 className="headline text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white text-shadow-lg animate-fade-up animate-delay-100">
              Hammerhead
              <span className="block text-sky">Aerospace</span>
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-sky-light/80 leading-relaxed max-w-2xl animate-fade-up animate-delay-200">
              We design, build, and launch rockets from scratch. A Barcelona-based student
              association competing in national and international rocketry competitions.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-up animate-delay-300">
              <button onClick={() => navigate('contact')} className="btn-primary">
                Join the Crew
                <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => navigate('launches')} className="btn-outline">
                See Our Next Launch
              </button>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-5 gap-4 animate-fade-up animate-delay-500">
              {stats.map((stat) => (
                <div key={stat.label} className="text-left">
                  <div className="font-headline font-bold text-2xl lg:text-3xl text-white">
                    {stat.value}
                  </div>
                  <div className="font-headline text-[10px] uppercase tracking-wider text-sky-light/50 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10">
          <FinDivider className="h-16 text-navy" />
        </div>
      </section>

      {/* Next Launch Countdown */}
      {nextLaunch && (
        <section className="relative bg-navy py-20 overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="container-mission relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-px w-8 bg-sky" />
                  <span className="font-headline text-xs uppercase tracking-[0.2em] text-sky">
                    Next Mission
                  </span>
                </div>
                <h2 className="headline text-3xl md:text-4xl lg:text-5xl text-white">
                  {nextLaunch.name}
                </h2>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sky-light/70">
                    <Calendar className="w-4 h-4 text-sky" />
                    <span className="text-sm">{nextLaunch.dateLabel}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sky-light/70">
                    <MapPin className="w-4 h-4 text-sky" />
                    <span className="text-sm">{nextLaunch.location}</span>
                  </div>
                </div>
                <p className="mt-5 text-sky-light/60 leading-relaxed">
                  {nextLaunch.description}
                </p>
                <div className="mt-6">
                  <span className={`tag ${statusColors[nextLaunch.status]}`}>
                    {nextLaunch.status === 'upcoming' ? 'Upcoming' : nextLaunch.status}
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center lg:items-end">
                <Countdown
                  targetDate={nextLaunch.date}
                  label="T-Minus to Launch"
                />
                <button
                  onClick={() => navigate('launches')}
                  className="mt-6 flex items-center gap-1 text-sky hover:text-sky-light transition-colors text-sm font-headline uppercase tracking-wide"
                >
                  View All Launches
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Quick Links */}
      <section className="bg-navy-950 py-16">
        <div className="container-mission">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map(({ id, label, icon: Icon, description }) => (
              <button
                key={id}
                onClick={() => navigate(id)}
                className="group relative overflow-hidden rounded-xl bg-navy-800/50 border border-white/10 p-6 text-left card-hover hover:border-sky/50 hover:bg-navy-800"
              >
                <div className="absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 bg-sky/5 rounded-full blur-2xl group-hover:bg-sky/15 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-sky/10 flex items-center justify-center mb-4 group-hover:bg-sky/20 transition-colors">
                    <Icon className="w-6 h-6 text-sky" />
                  </div>
                  <h3 className="font-headline font-bold text-lg text-white uppercase tracking-wide">
                    {label}
                  </h3>
                  <p className="text-sm text-sky-light/50 mt-1">{description}</p>
                  <div className="mt-4 flex items-center gap-1 text-sky text-xs font-headline uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Rocket */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={featuredRocket.image} alt={featuredRocket.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/30" />
        </div>
        <div className="container-mission relative z-10">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-sky" />
              <span className="font-headline text-xs uppercase tracking-[0.2em] text-sky">
                In Development
              </span>
            </div>
            <h2 className="headline text-4xl md:text-5xl lg:text-6xl text-white">
              {featuredRocket.name}
            </h2>
            <p className="mt-2 font-headline text-lg text-sky uppercase tracking-wide">
              {featuredRocket.designation} · {featuredRocket.tagline}
            </p>
            <p className="mt-5 text-sky-light/70 leading-relaxed text-lg">
              {featuredRocket.description}
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {Object.entries(featuredRocket.specs).slice(0, 6).map(([key, value]) => (
                <div key={key} className="glass rounded-lg p-4">
                  <div className="font-headline text-[10px] uppercase tracking-wider text-sky-light/50">
                    {key}
                  </div>
                  <div className="mt-1 text-sm text-white font-medium">{value}</div>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate('rockets')}
              className="mt-8 btn-primary"
            >
              View All Rockets
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="bg-navy-950 py-20 lg:py-28">
        <div className="container-mission">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <SectionHeader
              eyebrow="Latest News"
              title="Mission Updates"
              description="Build progress, competition recaps, and technical deep-dives from the workshop."
            />
            <button
              onClick={() => navigate('news')}
              className="flex items-center gap-1 text-sky hover:text-sky-light transition-colors text-sm font-headline uppercase tracking-wide whitespace-nowrap"
            >
              All Articles
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredNews.map((article, i) => (
              <button
                key={article.id}
                onClick={() => navigate('news')}
                className="group text-left rounded-xl overflow-hidden bg-navy-800/50 border border-white/10 card-hover hover:border-sky/40"
              >
                <div className="relative h-48 overflow-hidden">
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
                  <div className="flex items-center gap-2 text-[10px] text-sky-light/40 font-headline uppercase tracking-wider mb-2">
                    <span>{article.dateLabel}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="font-headline font-bold text-base text-white leading-snug group-hover:text-sky transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm text-sky-light/50 leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-navy py-16">
        <div className="container-mission">
          <NewsletterSignup />
        </div>
      </section>
    </div>
  );
}
