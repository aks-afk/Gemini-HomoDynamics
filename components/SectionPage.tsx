import React from 'react';
import { Section } from '../types';
import ContentDisplay from './ContentDisplay';

interface SectionPageProps {
  section: Section;
}

const SectionPage: React.FC<SectionPageProps> = ({ section }) => {
  return (
    <div>
      <article>
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
    </div>
  );
};

export default SectionPage;