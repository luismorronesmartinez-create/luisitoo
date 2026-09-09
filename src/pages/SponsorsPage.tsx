import { ArrowRight, Star, Award, Gem } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { FinDivider } from '@/components/FinDivider';
import { useNav } from '@/lib/nav';
import { sponsors, sponsorTiers, IMAGES } from '@/data/site';

const tierConfig: Record<string, { icon: typeof Star; border: string; bg: string }> = {
  platinum: { icon: Gem, border: 'border-sky-light/40', bg: 'bg-sky-light/5' },
  gold: { icon: Award, border: 'border-sky/40', bg: 'bg-sky/5' },
  silver: { icon: Star, border: 'border-white/20', bg: 'bg-white/5' },
  bronze: { icon: Star, border: 'border-white/10', bg: 'bg-white/[0.03]' },
};

export function SponsorsPage() {
  const { navigate } = useNav();

  const tieredSponsors = ['platinum', 'gold', 'silver', 'bronze'].map((tier) => ({
    tier,
    sponsors: sponsors.filter((s) => s.tier === tier),
  }));

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.rocketBoosters} alt="Rocket boosters" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy" />
        </div>
        <div className="container-mission relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-sky" />
              <span className="font-headline text-xs uppercase tracking-[0.2em] text-sky">Partners</span>
            </div>
            <h1 className="headline text-4xl md:text-5xl lg:text-6xl text-white text-shadow-lg">
              Sponsors & Partners
            </h1>
            <p className="mt-5 text-lg text-sky-light/80 leading-relaxed max-w-2xl">
              Our rockets are built with the support of companies and institutions who believe
              in student engineering. Their materials, expertise, and funding make every flight
              possible.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <FinDivider className="h-12 text-navy" />
        </div>
      </section>

      {/* Sponsor Grid */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="container-mission">
          <SectionHeader
            eyebrow="Thank You"
            title="Our Sponsors"
            description="The companies and institutions that fuel our missions."
          />

          <div className="mt-12 space-y-12">
            {tieredSponsors.map(({ tier, sponsors: tierSponsors }) => {
              if (tierSponsors.length === 0) return null;
              const config = tierConfig[tier];
              const Icon = config.icon;
              return (
                <div key={tier}>
                  <div className="flex items-center gap-3 mb-6">
                    <Icon className="w-5 h-5 text-sky" />
                    <h3 className="font-headline font-bold text-lg text-white uppercase tracking-wide">
                      {tier.charAt(0).toUpperCase() + tier.slice(1)} Partners
                    </h3>
                    <div className="flex-1 h-px bg-white/10" />
                    <span className="text-xs text-sky-light/40 font-headline uppercase">
                      {tierSponsors.length} {tierSponsors.length === 1 ? 'Partner' : 'Partners'}
                    </span>
                  </div>
                  <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`}>
                    {tierSponsors.map((sponsor) => (
                      <div
                        key={sponsor.id}
                        className={`group rounded-xl ${config.bg} border ${config.border} p-6 card-hover hover:shadow-lg hover:shadow-sky/10`}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-lg bg-sky/10 flex items-center justify-center">
                            <span className="font-headline font-bold text-sky text-lg">
                              {sponsor.name.charAt(0)}
                            </span>
                          </div>
                        </div>
                        <h4 className="font-headline font-bold text-white text-sm uppercase tracking-wide">
                          {sponsor.name}
                        </h4>
                        <p className="mt-1 text-xs text-sky-light/50 leading-relaxed">
                          {sponsor.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="bg-navy-950 py-20 lg:py-28">
        <div className="container-mission">
          <SectionHeader
            eyebrow="Become a Sponsor"
            title="Sponsorship Tiers"
            description="Support student rocketry and get your brand on the next rocket to fly."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorTiers.map((tier, i) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl border p-8 card-hover ${
                  i === 0
                    ? 'border-sky-light/40 bg-sky-light/5'
                    : 'border-white/10 bg-navy-800/50'
                }`}
              >
                {i === 0 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="tag tag-sky text-[10px]">Most Popular</span>
                  </div>
                )}
                <h3 className={`font-headline font-bold text-2xl uppercase tracking-wide ${tier.color}`}>
                  {tier.name}
                </h3>
                <ul className="mt-6 space-y-3">
                  {tier.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-sky-light/60">
                      <ArrowRight className="w-4 h-4 text-sky mt-0.5 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.rocketLaunchDay} alt="Rocket launch" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
        </div>
        <div className="container-mission relative z-10">
          <div className="max-w-2xl">
            <h2 className="headline text-3xl md:text-4xl lg:text-5xl text-white">
              Put Your Brand on a Rocket
            </h2>
            <p className="mt-4 text-lg text-sky-light/80 leading-relaxed">
              Your logo could fly to 10 km at the Spaceport America Cup. Partner with us and
              support the next generation of aerospace engineers.
            </p>
            <button onClick={() => navigate('contact')} className="mt-8 btn-primary">
              Become a Sponsor
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
