import { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2, X, Wrench, Cog } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { FinDivider } from '@/components/FinDivider';
import { MissionPatch } from '@/components/MissionPatch';
import { useNav } from '@/lib/nav';
import { rockets, IMAGES } from '@/data/site';
import type { Rocket } from '@/data/site';

const statusConfig: Record<string, { label: string; color: string }> = {
  'in-development': { label: 'In Development', color: 'border-yellow-500/30 text-yellow-400 bg-yellow-500/10' },
  ready: { label: 'Ready', color: 'border-green-500/30 text-green-400 bg-green-500/10' },
  launched: { label: 'Launched', color: 'border-sky-light/30 text-sky-light bg-sky-light/10' },
  retired: { label: 'Retired', color: 'border-white/20 text-sky-light/50 bg-white/5' },
};

export function RocketsPage() {
  const { navigate } = useNav();
  const [selected, setSelected] = useState<Rocket | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.workshopHangar} alt="Rocket assembly hangar" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy" />
        </div>
        <div className="container-mission relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-sky" />
              <span className="font-headline text-xs uppercase tracking-[0.2em] text-sky">The Fleet</span>
            </div>
            <h1 className="headline text-4xl md:text-5xl lg:text-6xl text-white text-shadow-lg">
              Rockets & Projects
            </h1>
            <p className="mt-5 text-lg text-sky-light/80 leading-relaxed max-w-2xl">
              Every rocket we build starts as a sketch on a whiteboard and ends with a flight
              log. Explore the fleet — from our first 3 km flight to our 10 km competition vehicle.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <FinDivider className="h-12 text-navy" />
        </div>
      </section>

      {/* Rocket Cards */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="container-mission">
          <SectionHeader
            eyebrow="Fleet"
            title="Mission Patches"
            description="Each rocket gets its own mission patch. Click a card to view the full fact sheet."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {rockets.map((rocket) => (
              <button
                key={rocket.id}
                onClick={() => setSelected(rocket)}
                className="group relative overflow-hidden rounded-2xl bg-navy-800/50 border border-white/10 card-hover hover:border-sky/50 text-left"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={rocket.image}
                    alt={rocket.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className={`tag border text-[10px] ${statusConfig[rocket.status].color}`}>
                      {statusConfig[rocket.status].label}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-6 flex items-center gap-4">
                    <MissionPatch size={56} />
                    <div>
                      <div className="font-headline text-xs uppercase tracking-wider text-sky">
                        {rocket.designation} · {rocket.year}
                      </div>
                      <h3 className="font-headline font-bold text-2xl text-white uppercase tracking-wide">
                        {rocket.name}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-headline text-sm text-sky-light uppercase tracking-wide mb-2">
                    {rocket.tagline}
                  </p>
                  <p className="text-sm text-sky-light/60 leading-relaxed line-clamp-2">
                    {rocket.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sky text-xs font-headline uppercase tracking-wide">
                    View Fact Sheet
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Build Gallery */}
      <section className="bg-navy-950 py-20 lg:py-28">
        <div className="container-mission">
          <SectionHeader
            eyebrow="Workshop"
            title="Build Progress Gallery"
            description="Photos from the workshop — composites layup, avionics assembly, and static test fires."
          />

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { img: IMAGES.workshopMechanic, label: 'Structures' },
              { img: IMAGES.circuitBoard, label: 'Avionics' },
              { img: IMAGES.engineTestFire, label: 'Propulsion' },
              { img: IMAGES.workshopHangar, label: 'Assembly' },
              { img: IMAGES.engineNozzle, label: 'Nozzle Detail' },
              { img: IMAGES.teamWorking4, label: 'Build Session' },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl aspect-[4/3] border border-white/10"
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="tag tag-sky text-[10px]">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fact Sheet Modal */}
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

            <div className="relative h-48 overflow-hidden rounded-t-2xl">
              <img src={selected.image} alt={selected.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-800 to-transparent" />
            </div>

            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <MissionPatch size={64} />
                <div>
                  <div className="font-headline text-xs uppercase tracking-wider text-sky">
                    {selected.designation} · {selected.year}
                  </div>
                  <h2 className="headline text-3xl text-white">{selected.name}</h2>
                  <p className="text-sm text-sky-light/60 mt-1">{selected.tagline}</p>
                </div>
              </div>

              <p className="text-sky-light/70 leading-relaxed">{selected.description}</p>

              <div className="mt-6">
                <h3 className="font-headline text-sm uppercase tracking-wider text-sky mb-3 flex items-center gap-2">
                  <Cog className="w-4 h-4" />
                  Specifications
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(selected.specs).map(([key, value]) => (
                    <div key={key} className="rounded-lg bg-navy-900/50 border border-white/5 p-3">
                      <div className="font-headline text-[10px] uppercase tracking-wider text-sky-light/40">
                        {key}
                      </div>
                      <div className="mt-0.5 text-sm text-white font-medium">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-headline text-sm uppercase tracking-wider text-sky mb-3 flex items-center gap-2">
                  <Wrench className="w-4 h-4" />
                  Achievements
                </h3>
                <ul className="space-y-2">
                  {selected.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-sky-light/70">
                      <CheckCircle2 className="w-4 h-4 text-sky mt-0.5 shrink-0" />
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex gap-3">
                <button onClick={() => { setSelected(null); navigate('launches'); }} className="btn-primary text-sm">
                  View Launch Schedule
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button onClick={() => setSelected(null)} className="btn-outline text-sm">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Fleet
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
