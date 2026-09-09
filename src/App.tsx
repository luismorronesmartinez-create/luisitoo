import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { NavProvider } from '@/lib/nav';
import { HomePage } from '@/pages/HomePage';
import { TeamPage } from '@/pages/TeamPage';
import { LaunchesPage } from '@/pages/LaunchesPage';
import { RocketsPage } from '@/pages/RocketsPage';
import { InformationPage } from '@/pages/InformationPage';
import { SponsorsPage } from '@/pages/SponsorsPage';
import { NewsPage } from '@/pages/NewsPage';
import { ContactPage } from '@/pages/ContactPage';
import type { PageId } from '@/data/site';

function App() {
  const [page, setPage] = useState<PageId>('home');

  const navigate = (p: PageId) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case 'home': return <HomePage />;
      case 'team': return <TeamPage />;
      case 'launches': return <LaunchesPage />;
      case 'rockets': return <RocketsPage />;
      case 'information': return <InformationPage />;
      case 'sponsors': return <SponsorsPage />;
      case 'news': return <NewsPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <NavProvider value={{ page, navigate }}>
      <div className="min-h-screen bg-navy flex flex-col">
        <Navbar />
        <main className="flex-1">
          {renderPage()}
        </main>
        <Footer />
      </div>
    </NavProvider>
  );
}

export default App;
