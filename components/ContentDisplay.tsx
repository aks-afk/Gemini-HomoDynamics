import React from 'react';
import { SubSection } from '../types';

interface ContentDisplayProps {
  subSection: SubSection;
  isLast: boolean;
}

const ContentDisplay: React.FC<ContentDisplayProps> = ({ subSection, isLast }) => {

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

  const renderParagraph = (p: string, i: number) => (
      <p 
          key={i} 
          style={{ 
              lineHeight: '1.8', 
              fontSize: '1.1rem', 
              color: '#4A4A4A', 
              margin: '0 0 1.5em 0' 
          }} 
          dangerouslySetInnerHTML={{ __html: p.replace(/<strong>(.*?)<\/strong>/g, '<strong style="color: #1A1A1A;">$1</strong>').replace(/<u>(.*?)<\/u>/g, '<u style="text-decoration-color: #C1C1C1; text-decoration-thickness: 1px; text-underline-offset: 3px;">$1</u>') }} 
      />
  );
  
  const VisualizationComponent = subSection.component;
  const hasViz = VisualizationComponent && VisualizationComponent.name !== 'DummyViz';

  return (
    <section 
      id={`section-${subSection.id}`} 
      style={{ 
        marginBottom: isLast ? 0 : '3rem',
        paddingBottom: isLast ? 0 : '3rem',
        borderBottom: isLast ? 'none' : '1px solid #EAE8E1',
      }}
    >
      <div className="subsection-grid">
        <div className="text-content">
          {subSection.title && (
            <h3 id={subSection.id} style={{ 
                fontSize: '1.75rem', 
                marginBottom: '1.5rem', 
                color: '#3A3A3A',
                fontWeight: 'normal',
                scrollMarginTop: '90px' // Offset for sticky header
            }}>
                {subSection.title}
            </h3>
          )}
          {subSection.content.map(renderParagraph)}
        </div>
        
        {hasViz && (
          <div className="viz-content">
            <VisualizationContainer>
              <VisualizationComponent />
            </VisualizationContainer>
          </div>
        )}
      </div>

      {/* RENDER NESTED SUB-SUBSECTIONS */}
      {subSection.subSections && subSection.subSections.map((subSubSection) => {
        const SubSubVisualizationComponent = subSubSection.component;
        const subHasViz = SubSubVisualizationComponent && SubSubVisualizationComponent.name !== 'DummyViz';
        
        return (
          <div key={subSubSection.id} style={{ marginTop: '2.5rem', borderLeft: '2px solid #EAE8E1', paddingLeft: '2rem' }}>
            <div className="subsection-grid">
                <div className="text-content">
                  <h4 id={subSubSection.id} style={{ 
                      fontSize: '1.4rem', 
                      marginBottom: '1rem', 
                      color: '#3A3A3A',
                      fontWeight: 'normal',
                      scrollMarginTop: '90px' // Offset for sticky header
                  }}>
                      {subSubSection.title}
                  </h4>
                  {subSubSection.content.map(renderParagraph)}
                </div>

                {subHasViz && (
                  <div className="viz-content">
                    <VisualizationContainer>
                      <SubSubVisualizationComponent />
                    </VisualizationContainer>
                  </div>
                )}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ContentDisplay;