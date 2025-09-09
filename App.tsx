import React, { useState, useEffect } from 'react';
import SectionPage from './components/SectionPage';
import { contentData } from './data';
import Hero from './components/Hero';
import Header from './components/Header';
import ErrorBoundary from './components/ErrorBoundary';

const App: React.FC = () => {
  const [currentSectionId, setCurrentSectionId] = useState<string>(contentData[0].id);
  const [activeSubSectionId, setActiveSubSectionId] = useState<string | null>(null);
  
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const section = contentData.find(s => s.id === hash);
      if (section) {
        if (currentSectionId !== section.id) {
          window.scrollTo(0, 0);
        }
        setCurrentSectionId(section.id);
      } else {
        const firstSectionId = contentData[0].id;
        setCurrentSectionId(firstSectionId);
        window.location.hash = firstSectionId;
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial load

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [currentSectionId]);

  const handleSelectSection = (sectionId: string, elementId?: string) => {
    const performScroll = () => {
        if (elementId) {
            const element = document.getElementById(elementId);
            if (element) {
                const headerOffset = 90; // 70px header + 20px space
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    if (sectionId !== currentSectionId) {
      window.location.hash = sectionId;
      // The hash change triggers a re-render. We need to wait for it before scrolling.
      setTimeout(performScroll, 100); 
    } else {
      performScroll();
    }
  };

  const currentSection = contentData.find(section => section.id === currentSectionId) || contentData[0];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FDFBF6' }}>
      <Header
        sections={contentData}
        currentSectionId={currentSectionId}
        onSelectSection={handleSelectSection}
      />
      
      <main 
        className="main-content" 
        style={{ 
            paddingTop: '70px',
            position: 'relative', // Create a stacking context
            zIndex: 1,            // Ensure it's below the header (z-index: 900)
        }}
      >
        <Hero />
        <ErrorBoundary>
          <div className="content-wrapper" style={{ padding: '2rem 4rem' }}>
            <SectionPage 
              section={currentSection} 
              activeSubSectionId={activeSubSectionId}
              setActiveSubSectionId={setActiveSubSectionId}
            />
            <footer style={{
              textAlign: 'center',
              padding: '2rem 0 0 0',
              marginTop: '2rem',
              fontSize: '0.9rem',
              color: '#8A8A8A',
              borderTop: '1px solid #EAE8E1',
            }}>
              © 2024 Homodynamics. Created by Amit Srivastava. All rights reserved.
            </footer>
          </div>
        </ErrorBoundary>
      </main>
    </div>
  );
};

export default App;