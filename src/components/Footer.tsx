import { Instagram, Linkedin, Youtube, Mail, MapPin, ArrowRight } from 'lucide-react';
import { MissionPatch } from './MissionPatch';
import { FinDivider } from './FinDivider';
import { navItems } from '@/data/site';
import { useNav } from '@/lib/nav';
import type { PageId } from '@/data/site';

export function Footer() {
  const { navigate } = useNav();

  return (
    <footer className="relative bg-navy-950 text-sky-light">
      <FinDivider className="h-12 text-sky" />

      <div className="container-mission py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <MissionPatch size={56} showText />
            <p className="mt-4 text-sm text-sky-light/60 leading-relaxed max-w-xs">
              Barcelona-based student rocketry association. Designing, building, and launching rockets from scratch.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { Icon: Instagram, label: 'Instagram', href: '#' },
                { Icon: Linkedin, label: 'LinkedIn', href: '#' },
                { Icon: Youtube, label: 'YouTube', href: '#' },
                { Icon: Mail, label: 'Email', href: '#' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sky-light/70 hover:bg-sky hover:text-white hover:border-sky transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-headline text-xs uppercase tracking-[0.2em] text-sky mb-4">Navigate</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => navigate(item.id as PageId)}
                    className="text-sm text-sky-light/60 hover:text-sky transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-xs uppercase tracking-[0.2em] text-sky mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-sky-light/60">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-sky shrink-0" />
                <span>Universitat Politècnica de Catalunya<br />Barcelona, Spain</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-sky shrink-0" />
                <span>info@hammerhead-aerospace.cat</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-xs uppercase tracking-[0.2em] text-sky mb-4">Newsletter</h3>
            <p className="text-sm text-sky-light/60 mb-4">
              Launch alerts and build updates, straight to your inbox.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const input = e.currentTarget.querySelector('input');
                if (input) {
                  input.value = '';
                  navigate('contact');
                }
              }}
              className="flex gap-2"
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="flex-1 px-3 py-2.5 text-sm bg-white/5 border border-white/10 rounded-md text-white placeholder:text-sky-light/30 focus:outline-none focus:border-sky transition-colors"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="px-3 py-2.5 bg-sky rounded-md text-white hover:bg-sky-500 transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-sky-light/40">
            © 2026 Hammerhead Aerospace · Barcelona. All rights reserved.
          </p>
          <p className="text-xs text-sky-light/40">
            Registered student association · Universitat Politècnica de Catalunya
          </p>
        </div>
      </div>
    </footer>
  );
}
