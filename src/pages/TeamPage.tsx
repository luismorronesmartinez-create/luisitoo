import { Box, Cpu, Flame, CircleDot, Wind, Briefcase, ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { FinDivider } from '@/components/FinDivider';
import { useNav } from '@/lib/nav';
import { departments, teamMembers, IMAGES } from '@/data/site';
import type { TeamDepartment } from '@/data/site';

const iconMap: Record<string, typeof Box> = {
  Box,
  Cpu,
  Flame,
  CircleDot,
  Wind,
  Briefcase,
};

export function TeamPage() {
  const { navigate } = useNav();

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.teamWorking1} alt="Team working in workshop" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy" />
        </div>
        <div className="container-mission relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-sky" />
              <span className="font-headline text-xs uppercase tracking-[0.2em] text-sky">The Crew</span>
            </div>
            <h1 className="headline text-4xl md:text-5xl lg:text-6xl text-white text-shadow-lg">
              35 Students, One Mission
            </h1>
            <p className="mt-5 text-lg text-sky-light/80 leading-relaxed max-w-2xl">
              Our team is organized into six specialized departments, each responsible for a
              critical aspect of rocket design, construction, and operations. We come from
              engineering, physics, computer science, and business backgrounds — united by
              a passion for rocketry.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <FinDivider className="h-12 text-navy" />
        </div>
      </section>

      {/* Departments */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="container-mission">
          <SectionHeader
            eyebrow="Departments"
            title="Six Disciplines, One Rocket"
            description="Each department owns a domain of expertise. Together, they turn raw materials into flight-ready vehicles."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept: TeamDepartment) => {
              const Icon = iconMap[dept.icon] ?? Box;
              return (
                <div
                  key={dept.id}
                  className="group relative overflow-hidden rounded-xl bg-navy-800/50 border border-white/10 card-hover hover:border-sky/40"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={dept.image}
                      alt={dept.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent" />
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-lg bg-sky/20 backdrop-blur-md border border-sky/30 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-sky" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-headline font-bold text-xl text-white uppercase tracking-wide">
                        {dept.name}
                      </h3>
                      <span className="text-xs font-headline text-sky-light/40 uppercase">
                        {dept.count} members
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-sky-light/60 leading-relaxed">
                      {dept.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-white/5">
                      <div className="text-xs text-sky-light/40 font-headline uppercase tracking-wider">
                        Lead
                      </div>
                      <div className="text-sm text-sky font-medium mt-0.5">{dept.lead}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Member Grid */}
      <section className="bg-navy-950 py-20 lg:py-28">
        <div className="container-mission">
          <SectionHeader
            eyebrow="Members"
            title="Meet the Crew"
            description="The people who design, build, test, and fly. Hover any card to learn more."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group relative overflow-hidden rounded-xl bg-navy-800/50 border border-white/10 card-hover hover:border-sky/40"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/30 to-transparent" />
                  <div className="absolute inset-0 bg-sky/0 group-hover:bg-sky/15 transition-colors duration-500" />

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="tag tag-sky text-[10px] mb-2">{member.department}</span>
                    <h3 className="font-headline font-bold text-lg text-white uppercase tracking-wide">
                      {member.name}
                    </h3>
                    <p className="text-sm text-sky-light/70 mt-0.5">{member.role}</p>
                  </div>

                  <div className="absolute inset-0 bg-navy-900/95 p-5 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-headline font-bold text-lg text-white uppercase tracking-wide">
                      {member.name}
                    </h3>
                    <p className="text-sm text-sky mt-1">{member.role}</p>
                    <p className="mt-3 text-sm text-sky-light/60 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.teamWorking3} alt="Students working together" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/40" />
        </div>
        <div className="container-mission relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-headline text-xs uppercase tracking-[0.2em] text-green-400">
                Recruitment Open
              </span>
            </div>
            <h2 className="headline text-3xl md:text-4xl lg:text-5xl text-white">
              Join the Crew
            </h2>
            <p className="mt-4 text-lg text-sky-light/80 leading-relaxed">
              We are recruiting new members for the 2026 season. No prior experience required —
              just curiosity, commitment, and a willingness to learn. We provide training in all
              departments.
            </p>
            <button onClick={() => navigate('contact')} className="mt-8 btn-primary">
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
