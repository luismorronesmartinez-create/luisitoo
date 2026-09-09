import { useEffect, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { MissionPatch } from './MissionPatch';
import { navItems } from '@/data/site';
import { useNav } from '@/lib/nav';
import type { PageId } from '@/data/site';

export function Navbar() {
  const { page, navigate } = useNav();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (p: PageId) => {
    navigate(p);
    setMobileOpen(false);
    setDropdownOpen(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy/95 backdrop-blur-md shadow-lg shadow-navy-950/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container-mission">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button onClick={() => go('home')} className="flex items-center gap-3 group">
            <MissionPatch size={scrolled ? 38 : 44} className="transition-all duration-300 group-hover:scale-105" />
            <div className="flex flex-col leading-none">
              <span className="font-headline font-bold uppercase text-sm tracking-wider text-white">
                Hammerhead
              </span>
              <span className="font-headline font-medium uppercase text-[9px] tracking-[0.2em] text-sky">
                Aerospace · BCN
              </span>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => setDropdownOpen(item.children ? item.id : null)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <button
                  onClick={() => go(item.id)}
                  className={`flex items-center gap-1 px-4 py-2 font-headline text-sm uppercase tracking-wide transition-colors duration-200 ${
                    page === item.id
                      ? 'text-sky'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3" />}
                </button>

                {item.children && dropdownOpen === item.id && (
                  <div className="absolute top-full left-0 pt-2 animate-slide-down">
                    <div className="w-72 bg-navy-800 border border-white/10 rounded-lg shadow-xl shadow-navy-950/50 overflow-hidden">
                      {item.children.map((child) => (
                        <button
                          key={child.label}
                          onClick={() => go(child.id)}
                          className="w-full text-left px-4 py-3 hover:bg-sky/15 transition-colors group"
                        >
                          <div className="font-headline text-sm text-white group-hover:text-sky">
                            {child.label}
                          </div>
                          <div className="text-xs text-sky-light/50 mt-0.5">
                            {child.description}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <button onClick={() => go('contact')} className="btn-primary text-sm py-2.5 px-5">
              Join the Crew
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-navy-950/98 backdrop-blur-md border-t border-white/10 animate-slide-down">
          <nav className="container-mission py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => go(item.id)}
                  className={`w-full text-left px-4 py-3 font-headline text-sm uppercase tracking-wide rounded-md transition-colors ${
                    page === item.id ? 'bg-sky/15 text-sky' : 'text-white/80 hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
                {item.children && (
                  <div className="ml-4 pl-4 border-l border-white/10">
                    {item.children.map((child) => (
                      <button
                        key={child.label}
                        onClick={() => go(child.id)}
                        className="w-full text-left px-4 py-2 text-sm text-sky-light/60 hover:text-sky"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button onClick={() => go('contact')} className="btn-primary mt-3">
              Join the Crew
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
