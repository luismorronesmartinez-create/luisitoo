import { useState } from 'react';
import { Instagram, Linkedin, Youtube, Mail, MapPin, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { FinDivider } from '@/components/FinDivider';
import { supabase } from '@/lib/supabase';
import { IMAGES } from '@/data/site';

export function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'general', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const { error } = await supabase.from('contact_submissions').insert({
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      });
      if (error) throw error;
      setStatus('success');
      setForm({ name: '', email: '', subject: 'general', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.teamWorking5} alt="Team working" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy" />
        </div>
        <div className="container-mission relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-headline text-xs uppercase tracking-[0.2em] text-green-400">
                Recruitment Open
              </span>
            </div>
            <h1 className="headline text-4xl md:text-5xl lg:text-6xl text-white text-shadow-lg">
              Join the Crew
            </h1>
            <p className="mt-5 text-lg text-sky-light/80 leading-relaxed max-w-2xl">
              Whether you want to build rockets, write flight software, or help run the team —
              there is a place for you. No prior experience required. Get in touch below.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <FinDivider className="h-12 text-navy" />
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="container-mission">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <SectionHeader
                eyebrow="Get in Touch"
                title="Send a Message"
                description="Questions about joining, sponsoring, visiting, or collaborating? Drop us a line."
              />

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-headline text-xs uppercase tracking-wider text-sky-light/60 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md text-white placeholder:text-sky-light/30 focus:outline-none focus:border-sky transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block font-headline text-xs uppercase tracking-wider text-sky-light/60 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md text-white placeholder:text-sky-light/30 focus:outline-none focus:border-sky transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-headline text-xs uppercase tracking-wider text-sky-light/60 mb-2">
                    Subject
                  </label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md text-white focus:outline-none focus:border-sky transition-colors"
                  >
                    <option value="general" className="bg-navy-800">General Inquiry</option>
                    <option value="join" className="bg-navy-800">Join the Team</option>
                    <option value="sponsor" className="bg-navy-800">Sponsorship</option>
                    <option value="media" className="bg-navy-800">Media / Press</option>
                    <option value="collaboration" className="bg-navy-800">Collaboration</option>
                  </select>
                </div>

                <div>
                  <label className="block font-headline text-xs uppercase tracking-wider text-sky-light/60 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md text-white placeholder:text-sky-light/30 focus:outline-none focus:border-sky transition-colors resize-none"
                    placeholder="Tell us what you are interested in..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    'Sending...'
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      Message Sent
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <p className="text-sm text-green-400 flex items-center gap-2 animate-fade-in">
                    <CheckCircle2 className="w-4 h-4" />
                    Thanks! We will get back to you within a few days.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-sm text-red-400">
                    Something went wrong. Please email us directly at info@hammerhead-aerospace.cat
                  </p>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <SectionHeader
                eyebrow="Find Us"
                title="Contact & Location"
                description="We are based at the Universitat Politècnica de Catalunya in Barcelona."
              />

              <div className="rounded-xl bg-navy-800/50 border border-white/10 p-6 space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sky/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-sky" />
                  </div>
                  <div>
                    <h3 className="font-headline text-xs uppercase tracking-wider text-sky-light/40">
                      Location
                    </h3>
                    <p className="mt-1 text-sm text-white">
                      Universitat Politècnica de Catalunya<br />
                      Campus Nord, Edifici C<br />
                      08034 Barcelona, Spain
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sky/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-sky" />
                  </div>
                  <div>
                    <h3 className="font-headline text-xs uppercase tracking-wider text-sky-light/40">
                      Email
                    </h3>
                    <p className="mt-1 text-sm text-white">info@hammerhead-aerospace.cat</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-navy-800/50 border border-white/10 p-6">
                <h3 className="font-headline text-xs uppercase tracking-wider text-sky-light/40 mb-4">
                  Follow Us
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { Icon: Instagram, label: 'Instagram' },
                    { Icon: Linkedin, label: 'LinkedIn' },
                    { Icon: Youtube, label: 'YouTube' },
                  ].map(({ Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-sky/15 hover:border-sky/30 transition-all duration-300 group"
                    >
                      <Icon className="w-6 h-6 text-sky-light/60 group-hover:text-sky transition-colors" />
                      <span className="text-xs font-headline uppercase tracking-wide text-sky-light/40 group-hover:text-sky transition-colors">
                        {label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-green-500/5 border border-green-500/20 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-headline text-xs uppercase tracking-[0.2em] text-green-400">
                    Recruitment Open
                  </span>
                </div>
                <h3 className="font-headline font-bold text-lg text-white uppercase tracking-wide">
                  Applications close Feb 15, 2026
                </h3>
                <p className="mt-2 text-sm text-sky-light/60 leading-relaxed">
                  We are recruiting for all departments. No experience required. Info session:
                  January 22 at the university engineering building.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
