import React, { useState } from 'react';
import { Section, SubSection } from '../types';

interface HeaderProps {
  sections: Section[];
  currentSectionId: string;
  onSelectSection: (sectionId: string, elementId?: string) => void;
}

const MobileNavLink: React.FC<{
  onClick: () => void;
  isActive: boolean;
  isSubItem?: boolean;
  children: React.ReactNode;
}> = ({ onClick, isActive, isSubItem, children }) => {
  const style: React.CSSProperties = {
    display: 'block',
    padding: '0.75rem 1rem',
    textDecoration: 'none',
    color: isActive ? '#1A1A1A' : '#5A5A5A',
    fontWeight: isActive ? 'bold' : 'normal',
    background: isActive ? '#F1F0EC' : 'transparent',
    borderRadius: '4px',
    paddingLeft: isSubItem ? '2rem' : '1rem',
    fontSize: isSubItem ? '1rem' : '1.1rem'
  };

  return (
    <a href="#" onClick={(e) => { e.preventDefault(); onClick(); }} style={style}>
      {children}
    </a>
  );
};

const Header: React.FC<HeaderProps> = ({ sections, currentSectionId, onSelectSection }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Create a hierarchical navigation structure
  const navStructure = sections.reduce<any[]>((acc, section) => {
    if (section.type === 'header') {
      acc.push({
        id: section.id,
        title: section.title,
        shortTitle: section.title.split(':')[0],
        children: []
      });
    } else if (acc.length > 0 && Array.isArray(acc[acc.length - 1].children)) {
      acc[acc.length - 1].children.push(section);
    } else {
      acc.push(section);
    }
    return acc;
  }, []);

  const handleLinkClick = (sectionId: string, elementId?: string) => {
    onSelectSection(sectionId, elementId);
    setIsMobileMenuOpen(false);
  };

  const headerStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '70px',
    backgroundColor: '#FCFBF8',
    borderBottom: '1px solid #EAE8E1',
    zIndex: 900,
    display: 'flex',
    alignItems: 'center',
    padding: '0 2rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  };
  
  const titleStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    color: '#3A3A3A',
    fontFamily: 'Georgia, serif',
    fontWeight: 'normal',
    margin: 0,
  };

  const navListStyle: React.CSSProperties = {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    gap: '1.5rem',
  };

  const navLinkStyle: React.CSSProperties = {
    textDecoration: 'none',
    color: '#5A5A5A',
    fontSize: '1rem',
    padding: '0.5rem 0',
    position: 'relative',
    transition: 'color 0.2s ease',
    cursor: 'pointer',
  };

  const activeNavLinkStyle: React.CSSProperties = {
    color: '#1A1A1A',
    fontWeight: 'bold',
  };

  const dropdownMenuStyle: React.CSSProperties = {
    display: 'block',
    position: 'absolute',
    top: '100%',
    left: '-1rem',
    backgroundColor: '#FCFBF8',
    border: '1px solid #EAE8E1',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    listStyle: 'none',
    padding: '0.5rem 0',
    marginTop: '10px',
    borderRadius: '4px',
    minWidth: '220px',
    zIndex: 1000,
  };

  const dropdownItemStyle: React.CSSProperties = {
    display: 'block',
    padding: '0.6rem 1.2rem',
    color: '#5A5A5A',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    fontSize: '0.95rem',
  };

  return (
    <>
      <header style={headerStyle} className="top-header">
        <div style={containerStyle}>
          <h1 style={titleStyle}>Homodynamics</h1>
          
          <nav className="desktop-nav">
            <ul style={navListStyle}>
              {navStructure.map(item => {
                const isParentOfCurrent = item.children?.some((c: Section) => c.id === currentSectionId);
                const isParent = item.children && item.children.length > 0;

                return (
                  <li 
                    key={item.id}
                    style={{ position: 'relative' }}
                    onMouseEnter={() => isParent && setOpenDropdown(item.id)}
                    onMouseLeave={() => isParent && setOpenDropdown(null)}
                  >
                    <a 
                      href={`#${isParent ? item.children[0].id : item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const targetId = isParent ? item.children[0].id : item.id;
                        onSelectSection(targetId);
                      }}
                      style={{...navLinkStyle, ...((currentSectionId === item.id || isParentOfCurrent) ? activeNavLinkStyle : {})}}
                    >
                      {item.shortTitle}
                    </a>

                    {isParent && openDropdown === item.id && (
                      <ul style={dropdownMenuStyle}>
                        {item.children.map((child: Section) => (
                          <li key={child.id}>
                            <a 
                              href={`#${child.id}`}
                              onClick={(e) => { e.preventDefault(); onSelectSection(child.id); setOpenDropdown(null); }}
                              style={dropdownItemStyle}
                              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#F1F0EC'}
                              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                            >
                              {child.shortTitle}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mobile-menu-button-container">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="mobile-menu-button" aria-label="Open menu">
              <div style={{ transform: isMobileMenuOpen ? 'rotate(45deg) translate(7px, 7px)' : 'none', backgroundColor: isMobileMenuOpen ? '#3A3A3A' : '#3A3A3A' }} />
              <div style={{ opacity: isMobileMenuOpen ? 0 : 1 }} />
              <div style={{ transform: isMobileMenuOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none', backgroundColor: isMobileMenuOpen ? '#3A3A3A' : '#3A3A3A' }} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'is-open' : ''}`}>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {navStructure.map(item => {
              const isCurrentPart = item.children?.some((child: Section) => child.id === currentSectionId);
              // Render a "Part" header with its children
              if (item.children) {
                return (
                  <li key={item.id} style={{ marginBottom: '1rem' }}>
                    <h2 style={{
                      fontSize: '0.9rem',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      color: isCurrentPart ? '#3A3A3A' : '#8A8A8A',
                      margin: '0 0 0.5rem 1rem',
                      fontWeight: 600,
                    }}>
                      {item.shortTitle}
                    </h2>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {item.children.map((childSection: Section) => (
                        <li key={childSection.id}>
                          <MobileNavLink
                            onClick={() => handleLinkClick(childSection.id)}
                            isActive={childSection.id === currentSectionId}
                          >
                            {childSection.shortTitle}
                          </MobileNavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }

              // Render a top-level section (About, Introduction)
              return (
                <li key={item.id} style={{ marginBottom: '1rem' }}>
                  <MobileNavLink
                    onClick={() => handleLinkClick(item.id)}
                    isActive={item.id === currentSectionId}
                  >
                    {item.shortTitle}
                  </MobileNavLink>
                  {/* Also show subsections for all items */}
                  {item.id === currentSectionId && (
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0.25rem 0' }}>
                      {item.subSections.map((subSection: SubSection) => (
                        <li key={subSection.id}>
                          <MobileNavLink
                            isSubItem
                            onClick={() => handleLinkClick(item.id, subSection.id)}
                            isActive={false} // No persistent active state for subsections
                          >
                            {subSection.title || <em>(Introduction)</em>}
                          </MobileNavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;