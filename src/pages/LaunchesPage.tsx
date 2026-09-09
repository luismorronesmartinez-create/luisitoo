import { Calendar, MapPin, Rocket, Flame, Trophy, ArrowRight, CheckCircle2, Clock, Circle } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { FinDivider } from '@/components/FinDivider';
import { Countdown } from '@/components/Countdown';
import { useNav } from '@/lib/nav';
import { launchEvents, IMAGES } from '@/data/site';
import type { LaunchEvent } from '@/data/site';

const typeIcons: Record<string, typeof Rocket> = {
  launch: Rocket,
  'test-fire': Flame,
  competition: Trophy,
};

const statusConfig: Record<string, { label: string; color: string; dot: string }> = {
  upcoming: { label: 'Upcoming', color: 'text-sky', dot: 'bg-sky animate-pulse' },
  ready: { label: 'Ready', color: 'text-green-400', dot: 'bg-green-400' },
  launched: { label: 'Launched', color: 'text-sky-light/70', dot: 'bg-sky-light/50' },
  scrubbed: { label: 'Scrubbed', color: 'text-red-400', dot: 'bg-red-400' },
};

export function LaunchesPage() {
  const { navigate } = useNav();
  const upcoming = launchEvents.filter((e) => e.status === 'upcoming' || e.status === 'ready');
  const past = launchEvents.filter((e) => e.status === 'launched' || e.status === 'scrubbed');
  const nextLaunch = upcoming[0];

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.rocketLaunchSmoke} alt="Rocket launch" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy" />
        </div>
        <div className="container-mission relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-sky" />
              <span className="font-headline text-xs uppercase tracking-[0.2em] text-sky">Mission Schedule</span>
            </div>
            <h1 className="headline text-4xl md:text-5xl lg:text-6xl text-white text-shadow-lg">
              Launches & Competitions
            </h1>
            <p className="mt-5 text-lg text-sky-light/80 leading-relaxed max-w-2xl">
              From static test fires to international competitions. Track our upcoming missions
              and revisit past results.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <FinDivider className="h-12 text-navy" />
        </div>
      </section>

      {/* Next Launch Highlight */}
      {nextLaunch && (
        <section className="bg-navy py-16 overflow-hidden">
          <div className="container-mission">
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <div className="absolute inset-0">
                <img src={IMAGES.heroTwilightPad} alt="Launch pad" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
              </div>
              <div className="relative z-10 p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`w-2 h-2 rounded-full ${statusConfig[nextLaunch.status].dot}`} />
                    <span className={`font-headline text-xs uppercase tracking-[0.2em] ${statusConfig[nextLaunch.status].color}`}>
                      {statusConfig[nextLaunch.status].label}
                    </span>
                  </div>
                  <h2 className="headline text-3xl md:text-4xl text-white">{nextLaunch.name}</h2>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sky-light/70">
                      <Calendar className="w-4 h-4 text-sky" />
                      <span className="text-sm">{nextLaunch.dateLabel}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sky-light/70">
                      <MapPin className="w-4 h-4 text-sky" />
                      <span className="text-sm">{nextLaunch.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sky-light/70">
                      <Rocket className="w-4 h-4 text-sky" />
                      <span className="text-sm">{nextLaunch.rocket}</span>
                    </div>
                  </div>
                  <p className="mt-5 text-sky-light/60 leading-relaxed">{nextLaunch.description}</p>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <Countdown targetDate={nextLaunch.date} label="T-Minus" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Upcoming Timeline */}
      <section className="bg-navy-950 py-20 lg:py-28">
        <div className="container-mission">
          <SectionHeader
            eyebrow="Upcoming"
            title="Mission Timeline"
            description="Scheduled launches, test fires, and competitions."
          />

          <div className="mt-12 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px" />

            <div className="space-y-8">
              {upcoming.map((event: LaunchEvent, i: number) => {
                const Icon = typeIcons[event.type] ?? Rocket;
                const isLeft = i % 2 === 0;
                return (
                  <div
                    key={event.id}
                    className={`relative flex flex-col md:flex-row ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6`}
                  >
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-sky ring-4 ring-navy-950 -translate-x-1.5 md:-translate-x-1.5 z-10 mt-2" />

                    <div className="md:w-1/2 pl-12 md:pl-0 md:pr-8 md:text-right">
                      {isLeft && (
                        <div className="md:pr-8">
                          <TimelineCard event={event} Icon={Icon} align="right" />
                        </div>
                      )}
                    </div>
                    <div className="md:w-1/2 pl-12 md:pl-8">
                      {!isLeft && (
                        <div className="md:pl-8">
                          <TimelineCard event={event} Icon={Icon} align="left" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Past Results */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="container-mission">
          <SectionHeader
            eyebrow="Archive"
            title="Past Missions & Results"
            description="Every launch, every test fire — the full flight log."
          />

          <div className="mt-12 space-y-4">
            {past.map((event: LaunchEvent) => {
              const Icon = typeIcons[event.type] ?? Rocket;
              return (
                <div
                  key={event.id}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-4 items-center rounded-xl bg-navy-800/50 border border-white/10 p-5 card-hover hover:border-sky/40"
                >
                  <div className="md:col-span-2 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-sky/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-sky" />
                    </div>
                    <span className="font-headline text-xs uppercase tracking-wider text-sky-light/50">
                      {event.dateLabel}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-headline font-bold text-white uppercase tracking-wide">
                      {event.name}
                    </h3>
                    <p className="text-sm text-sky-light/50 mt-0.5">{event.location}</p>
                  </div>
                  <div className="md:col-span-3 text-sm text-sky-light/60">{event.rocket}</div>
                  <div className="md:col-span-2">
                    {event.result ? (
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                        <span className="text-sm text-green-400 font-medium">{event.result}</span>
                      </div>
                    ) : (
                      <span className={`flex items-center gap-1.5 text-sm ${statusConfig[event.status].color}`}>
                        <Clock className="w-4 h-4" />
                        {statusConfig[event.status].label}
                      </span>
                    )}
                  </div>
                  <div className="md:col-span-1 md:text-right">
                    <span className={`tag border text-[10px] ${event.status === 'launched' ? 'border-green-500/30 text-green-400 bg-green-500/10' : 'border-red-500/30 text-red-400 bg-red-500/10'}`}>
                      {event.status === 'launched' ? 'Success' : 'Scrubbed'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-950 py-16">
        <div className="container-mission">
          <div className="rounded-2xl glass p-8 lg:p-12 text-center">
            <h2 className="headline text-2xl md:text-3xl text-white">Want to be part of the next launch?</h2>
            <p className="mt-3 text-sky-light/60 max-w-xl mx-auto">
              We need engineers, programmers, and organizers. Join the team and help us reach 10 km.
            </p>
            <button onClick={() => navigate('contact')} className="mt-6 btn-primary">
              Join the Crew
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function TimelineCard({ event, Icon, align }: { event: LaunchEvent; Icon: typeof Rocket; align: 'left' | 'right' }) {
  const status = statusConfig[event.status];
  return (
    <div className="rounded-xl bg-navy-800/50 border border-white/10 p-6 card-hover hover:border-sky/40">
      <div className={`flex items-center gap-3 mb-3 ${align === 'right' ? 'md:justify-end' : ''}`}>
        <div className="w-10 h-10 rounded-lg bg-sky/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-sky" />
        </div>
        <span className={`tag border text-[10px] ${event.status === 'upcoming' ? 'tag-sky' : 'border-green-500/30 text-green-400 bg-green-500/10'}`}>
          {status.label}
        </span>
      </div>
      <h3 className="font-headline font-bold text-lg text-white uppercase tracking-wide">{event.name}</h3>
      <div className="mt-2 space-y-1">
        <div className="flex items-center gap-2 text-sm text-sky-light/60">
          <Calendar className="w-3.5 h-3.5 text-sky" />
          {event.dateLabel}
        </div>
        <div className="flex items-center gap-2 text-sm text-sky-light/60">
          <MapPin className="w-3.5 h-3.5 text-sky" />
          {event.location}
        </div>
        <div className="flex items-center gap-2 text-sm text-sky-light/60">
          <Rocket className="w-3.5 h-3.5 text-sky" />
          {event.rocket}
        </div>
      </div>
      <p className="mt-3 text-sm text-sky-light/50 leading-relaxed">{event.description}</p>
    </div>
  );
}
