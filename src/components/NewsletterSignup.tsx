import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface NewsletterSignupProps {
  variant?: 'dark' | 'light';
  title?: string;
  description?: string;
}

export function NewsletterSignup({
  variant = 'dark',
  title = 'Get Launch Alerts',
  description = 'Subscribe to receive mission updates, build progress, and launch notifications.',
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  const isDark = variant === 'dark';

  return (
    <div
      className={`rounded-2xl p-8 lg:p-10 ${
        isDark
          ? 'bg-navy-800/50 border border-white/10'
          : 'bg-sky-light/20 border border-navy/10'
      }`}
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
        <div className="flex-1">
          <h3 className={`headline text-2xl ${isDark ? 'text-white' : 'text-navy'}`}>{title}</h3>
          <p className={`mt-2 text-sm ${isDark ? 'text-sky-light/60' : 'text-navy-600'}`}>
            {description}
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2 w-full lg:w-auto">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className={`flex-1 lg:w-64 px-4 py-3 text-sm rounded-md focus:outline-none transition-colors ${
              isDark
                ? 'bg-white/5 border border-white/10 text-white placeholder:text-sky-light/30 focus:border-sky'
                : 'bg-white border border-navy/10 text-navy placeholder:text-navy-400 focus:border-sky'
            }`}
          />
          <button
            type="submit"
            className="btn-primary text-sm whitespace-nowrap"
          >
            {submitted ? (
              <CheckCircle2 className="w-4 h-4" />
            ) : (
              <>
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>
      {submitted && (
        <p className={`mt-3 text-sm text-sky font-medium animate-fade-in`}>
          You are on the list. Watch the skies.
        </p>
      )}
    </div>
  );
}
