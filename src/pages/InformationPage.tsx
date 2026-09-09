import { Target, Shield, BookOpen, Rocket, ArrowRight, Cog, Gauge, Wind, CircleDot } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { FinDivider } from '@/components/FinDivider';
import { useNav } from '@/lib/nav';
import { IMAGES } from '@/data/site';

const values = [
  { icon: Target, title: 'Our Mission', text: 'To design, build, and fly high-power rockets from scratch — pushing the boundaries of what a student team can achieve.' },
  { icon: BookOpen, title: 'Education First', text: 'We exist to teach. Every member learns hands-on engineering, from composite manufacturing to embedded systems.' },
  { icon: Shield, title: 'Safety Always', text: 'No flight happens without rigorous safety protocols. Every motor is static-tested, every recovery system is proven.' },
];

const rocketrySteps = [
  { icon: Cog, title: '1. Design', text: 'CAD modeling, CFD simulations, and structural analysis. Every component is designed and validated before manufacturing begins.' },
  { icon: Rocket, title: '2. Build', text: 'Composite layup for the airframe, CNC machining for metal parts, 3D printing for prototypes, and PCB fabrication for avionics.' },
  { icon: Gauge, title: '3. Test', text: 'Static test fires for motors, bench tests for avionics, and ground integration tests. Nothing flies untested.' },
  { icon: Wind, title: '4. Launch', text: 'Final assembly, pre-flight checklist, ignition, and liftoff. The flight computer logs every second of the trajectory.' },
  { icon: CircleDot, title: '5. Recover', text: 'Dual-deploy parachute system brings the rocket home. We recover, inspect, and log the data for the next iteration.' },
];

export function InformationPage() {
  const { navigate } = useNav();

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.spacenight} alt="Space facility at night" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy" />
        </div>
        <div className="container-mission relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-sky" />
              <span className="font-headline text-xs uppercase tracking-[0.2em] text-sky">About Us</span>
            </div>
            <h1 className="headline text-4xl md:text-5xl lg:text-6xl text-white text-shadow-lg">
              Hammerhead Aerospace
            </h1>
            <p className="mt-5 text-lg text-sky-light/80 leading-relaxed max-w-2xl">
              A student rocketry association based in Barcelona. Founded in 2024, we are a team
              of 35 students from across the university, building rockets from scratch and
              competing nationally and internationally.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <FinDivider className="h-12 text-navy" />
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="container-mission">
          <SectionHeader
            eyebrow="Who We Are"
            title="Mission, History & Values"
            description="We started with a simple goal: prove that students can build rockets that fly. Two years later, we have flown three vehicles and are aiming for 10 km."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl bg-navy-800/50 border border-white/10 p-6 card-hover hover:border-sky/40"
              >
                <div className="w-12 h-12 rounded-lg bg-sky/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-sky" />
                </div>
                <h3 className="font-headline font-bold text-lg text-white uppercase tracking-wide">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-sky-light/60 leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="bg-navy-950 py-20 lg:py-28">
        <div className="container-mission">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                eyebrow="Timeline"
                title="From Sketch to Sky"
                description="Two years of building, testing, and flying."
              />
              <div className="mt-8 space-y-6">
                {[
                  { year: '2024', title: 'Founding', text: 'Hammerhead Aerospace is founded by a group of 8 engineering students at UPC Barcelona.' },
                  { year: '2024', title: 'Mako Maiden Flight', text: 'Our first rocket, Mako, flies to 3,200 m and is recovered intact.' },
                  { year: '2025', title: 'National Cup', text: 'Bullhead places 2nd at the National Collegiate Rocketry Cup with a 4,100 m flight.' },
                  { year: '2026', title: 'Going International', text: 'Great Hammerhead enters development for the Spaceport America Cup. Target: 10 km.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-sky/10 border border-sky/20 flex items-center justify-center">
                        <span className="font-headline text-xs font-bold text-sky">{item.year}</span>
                      </div>
                    </div>
                    <div className="pt-1">
                      <h3 className="font-headline font-bold text-white uppercase tracking-wide">{item.title}</h3>
                      <p className="mt-1 text-sm text-sky-light/60 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <img src={IMAGES.rocketBody} alt="Rocket body detail" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Rocketry 101 */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="container-mission">
          <SectionHeader
            eyebrow="Rocketry 101"
            title="How a Student Rocket Gets Built"
            description="From CAD file to recovered airframe — the five stages of every Hammerhead mission."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-4">
            {rocketrySteps.map((step, i) => (
              <div key={i} className="relative">
                {i < rocketrySteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-px bg-gradient-to-r from-sky/30 to-transparent -z-0" />
                )}
                <div className="relative z-10 rounded-xl bg-navy-800/50 border border-white/10 p-5 card-hover hover:border-sky/40">
                  <div className="w-10 h-10 rounded-lg bg-sky/10 flex items-center justify-center mb-3">
                    <step.icon className="w-5 h-5 text-sky" />
                  </div>
                  <h3 className="font-headline font-bold text-sm text-white uppercase tracking-wide">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-sky-light/50 leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="bg-navy-950 py-20 lg:py-28">
        <div className="container-mission">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeader
                eyebrow="Safety & Regulation"
                title="Safety is Not Optional"
                description="Every motor is static-tested. Every launch is permitted. Every team member is trained."
              />
              <div className="mt-8 space-y-4">
                {[
                  { title: 'Certifications', text: 'All team members handling motors hold NAR/TRA high-power rocketry certifications (Level 1 and Level 2).' },
                  { title: 'Launch Permits', text: 'Every flight is conducted at authorized launch sites with proper airspace coordination and permits.' },
                  { title: 'Motor Testing', text: 'No motor flies without a successful static test fire on the Bonnethead test stand.' },
                  { title: 'Pre-Flight Checklist', text: 'A 47-point checklist is completed before every ignition. No exceptions.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-sky mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-headline font-bold text-sm text-white uppercase tracking-wide">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-sky-light/60 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10">
              <img src={IMAGES.engineSaturnV} alt="Rocket engine detail" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="container-mission">
          <div className="rounded-2xl glass p-8 lg:p-12 text-center">
            <h2 className="headline text-2xl md:text-3xl text-white">Questions? Want to Visit?</h2>
            <p className="mt-3 text-sky-light/60 max-w-xl mx-auto">
              Get in touch for workshop tours, educational collaborations, or media inquiries.
            </p>
            <button onClick={() => navigate('contact')} className="mt-6 btn-primary">
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
