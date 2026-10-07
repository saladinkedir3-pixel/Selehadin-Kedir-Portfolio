import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PageHeader } from './components/PageHeader';
import { VideoShowcase } from './components/VideoShowcase';
import { GraphicShowcase } from './components/GraphicShowcase';
import { AddressSection } from './components/AddressSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  // Separated pages: 'video' (Main Focus) vs 'graphics'
  const [activePage, setActivePage] = useState<'video' | 'graphics'>('video');

  const scrollToAddress = () => {
    document.getElementById('address')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectPage = (page: 'video' | 'graphics') => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="top" className="min-h-screen bg-[#090611] text-[#f4f4f5] selection:bg-purple-600 selection:text-white font-sans antialiased film-grain flex flex-col justify-between">
      
      <div>
        {/* Navigation with Page Switcher */}
        <Navbar
          activePage={activePage}
          onSelectPage={handleSelectPage}
          onAddressClick={scrollToAddress}
        />

        {/* Clean, Modern, Professional Hero Section */}
        <Hero
          onViewWork={scrollToWork}
          onContact={scrollToAddress}
        />

        {/* Work Category Switcher & Section Header */}
        <PageHeader
          activePage={activePage}
          onSelectPage={handleSelectPage}
        />

        <main>
          {/* Page 1: Video Editing (MAIN FOCUS) */}
          {activePage === 'video' && (
            <VideoShowcase 
              onGoToGraphics={() => handleSelectPage('graphics')} 
            />
          )}

          {/* Page 2: Graphic Design (SEPARATE PAGE) */}
          {activePage === 'graphics' && (
            <GraphicShowcase />
          )}
        </main>
      </div>

      <div>
        {/* Simple Address & Contact at the end */}
        <AddressSection />

        {/* Clean Footer */}
        <Footer />
      </div>

    </div>
  );
};

export default App;
