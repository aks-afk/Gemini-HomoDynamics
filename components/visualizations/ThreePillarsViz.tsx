import React from 'react';

const ThreePillarsViz: React.FC = () => {
    return (
        <div>
            <h4 style={{ marginTop: 0, marginBottom: '1rem', color: '#3A3A3A', fontWeight: 'normal' }}>The Three Pillars</h4>
            <svg viewBox="0 0 300 250" style={{ width: '100%', height: 'auto' }}>
                <style>{`
                    .strand {
                        stroke-dasharray: 300;
                        stroke-dashoffset: 300;
                        animation: weave 4s ease-in-out forwards;
                    }
                    @keyframes weave {
                        to { stroke-dashoffset: 0; }
                    }
                `}</style>
                <defs>
                    <linearGradient id="ropeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8A8A8A" />
                        <stop offset="50%" stopColor="#5A5A5A" />
                        <stop offset="100%" stopColor="#3A3A3A" />
                    </linearGradient>
                </defs>

                {/* Individual Strands */}
                <path className="strand" d="M 50 30 C 150 30, 150 80, 150 80" stroke="#3A3A3A" strokeWidth="4" fill="none" style={{ animationDelay: '0s' }}/>
                <path className="strand" d="M 150 30 C 150 30, 150 80, 150 80" stroke="#5A5A5A" strokeWidth="4" fill="none" style={{ animationDelay: '0.2s' }} />
                <path className="strand" d="M 250 30 C 150 30, 150 80, 150 80" stroke="#8A8A8A" strokeWidth="4" fill="none" style={{ animationDelay: '0.4s' }}/>

                {/* Woven Rope */}
                <path className="strand" d="M 150 80 V 220" stroke="url(#ropeGradient)" strokeWidth="8" fill="none" strokeLinecap="round" style={{ animationDelay: '1s' }} />

                <text x="50" y="20" textAnchor="middle" fontSize="12">Wisdom</text>
                <text x="150" y="20" textAnchor="middle" fontSize="12">Conduct</text>
                <text x="250" y="20" textAnchor="middle" fontSize="12">Discipline</text>

                <text x="150" y="240" textAnchor="middle" fontSize="14" fontWeight="bold">The Path</text>
            </svg>
             <p style={{ fontSize: '0.9rem', color: '#5A5A5A', lineHeight: 1.5, textAlign: 'center' }}>
                The three pillars intertwine to create a single, strong, and coherent path.
            </p>
        </div>
    );
};

export default ThreePillarsViz;