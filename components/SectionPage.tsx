import React, { useEffect, useMemo, useRef } from 'react';
import { Section, SubSection, SubSubSection } from '../types';
import ContentDisplay from './ContentDisplay';

interface SectionPageProps {
  section: Section;
  activeSubSectionId: string | null;
  setActiveSubSectionId: (id: string | null) => void;
}

const SectionPage: React.FC<SectionPageProps> = ({ section, activeSubSectionId, setActiveSubSectionId }) => {
  const articleRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const articleElement = articleRef.current;
    if (!articleElement) return;

    // Set an initial active subsection when the main section loads
    const firstSubSectionId = section.subSections[0]?.id || null;
    setActiveSubSectionId(firstSubSectionId);

    const headings = Array.from(articleElement.querySelectorAll('h3[id], h4[id]'));
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const intersectingEntry = entries.find(entry => entry.isIntersecting);
        if (intersectingEntry) {
          setActiveSubSectionId(intersectingEntry.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -60% 0px", // Trigger when an element is in the upper-middle third of the viewport
        threshold: 0,
      }
    );

    headings.forEach(heading => observer.observe(heading));

    return () => {
      headings.forEach(heading => observer.unobserve(heading));
    };
  }, [section, setActiveSubSectionId]);

  const ActiveVisualization = useMemo(() => {
    let activeComponent: React.ComponentType | undefined = section.component;
    
    // Recursive function to find the component in nested subsections
    const findComponent = (subSections: (SubSection | SubSubSection)[], id: string): React.ComponentType | undefined => {
      for (const sub of subSections) {
        if (sub.id === id) return sub.component;
        if ('subSections' in sub && sub.subSections) {
          const found = findComponent(sub.subSections, id);
          if (found) return found;
        }
      }
      return undefined;
    };

    if (activeSubSectionId) {
      const component = findComponent(section.subSections, activeSubSectionId);
      if (component) {
        activeComponent = component;
      }
    }
    
    // Default to the main section's visualization if the active one is a DummyViz or not found
    return activeComponent && activeComponent.name !== 'DummyViz' ? activeComponent : section.component;
  }, [section, activeSubSectionId]);

  const VisualizationComponent = ActiveVisualization;
  
  const VisualizationContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
      <div className="visualization-wrapper" style={{
          border: '1px solid #EAE8E1',
          borderRadius: '4px',
          background: '#FCFBF8',
          padding: '1.5rem',
      }}>
          {children}
      </div>
  );

  return (
    <div className="page-layout">
      <article ref={articleRef}>
        <header>
          <h2 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '0.5rem', 
            color: '#3A3A3A',
            fontWeight: 'normal',
          }}>
            {section.title}
          </h2>
          <div style={{width: '80px', height: '2px', backgroundColor: '#3A3A3A', marginBottom: '1.5rem'}}></div>
        </header>
        <div>
          {section.subSections.map((subSection, index) => (
              <ContentDisplay 
                key={subSection.id} 
                subSection={subSection} 
                isLast={index === section.subSections.length - 1}
              />
          ))}
        </div>
      </article>

      <aside className="viz-panel-sticky">
          <VisualizationContainer>
              {VisualizationComponent && <VisualizationComponent />}
          </VisualizationContainer>
      </aside>
    </div>
  );
};

export default SectionPage;