import React, { useState } from 'react';

const StaticVsDynamicModelsViz: React.FC = () => {
    const [perturbed, setPerturbed] = useState(false);

    const buttonStyle: React.CSSProperties = {
        display: 'block',
        width: '100%',
        padding: '0.75rem',
        fontSize: '1rem',
        cursor: 'pointer',
        background: '#FCFBF8',
        color: '#3A3A3A',
        border: '1px solid #C1C1C1',
        borderRadius: '4px',
        fontFamily: 'Georgia, serif',
        marginTop: '1rem',
        transition: 'background 0.2s ease',
    };

    const staticPath = "M 20 150 L 40 150 L 40 50 L 110 50 L 110 150 L 130 150";
    const dynamicPath = "M 170 150 C 180 80, 210 80, 220 150 C 230 80, 260 80, 270 150 C 280 80, 310 80, 320 150"; // Offscreen

    return (
        <div>
            <h4 style={{ marginTop: 0, marginBottom: '1rem', color: '#3A3A3A', fontWeight: 'normal' }}>Static vs. Dynamic Systems</h4>
            <svg viewBox="0 0 300 200" style={{ width: '100%', height: 'auto', overflow: 'hidden' }}>
                <style>{`
                    .static-model { transition: transform 0.5s ease-in-out, opacity 0.5s; }
                    .dynamic-model { animation: sway 4s ease-in-out infinite alternate; transform-origin: bottom center; }
                    @keyframes sway {
                        from { transform: skewX(-3deg); }
                        to { transform: skewX(3deg); }
                    }
                `}</style>
                {/* Static Model */}
                <g className="static-model" style={{ transform: perturbed ? 'translateY(10px) rotate(5deg)' : 'none', opacity: perturbed ? 0.3 : 1 }}>
                    <path d={staticPath} stroke="#5A5A5A" strokeWidth="3" fill="none" />
                    <text x="75" y="170" textAnchor="middle" fontSize="12">Static Model</text>
                </g>

                {/* Dynamic Model */}
                <g className="dynamic-model">
                     <path d={dynamicPath.substring(0, dynamicPath.length - 20)} stroke="#3A3A3A" strokeWidth="3" fill="none" transform="translate(-130, 0) scale(0.8)" />
                    <text x="225" y="170" textAnchor="middle" fontSize="12">Dynamic Model</text>
                </g>

                {/* Perturbation Force */}
                <g style={{ opacity: perturbed ? 0 : 1, transition: 'opacity 0.2s' }}>
                    <line x1="140" y1="100" x2="160" y2="100" stroke="#8A8A8A" strokeWidth="2" />
                    <polygon points="160,97 165,100 160,103" fill="#8A8A8A" />
                </g>

            </svg>
            <button
                onClick={() => {
                    setPerturbed(true);
                    setTimeout(() => setPerturbed(false), 1500);
                }}
                onMouseOver={(e) => (e.currentTarget.style.background = '#F1F0EC')}
                onMouseOut={(e) => (e.currentTarget.style.background = '#FCFBF8')}
                style={buttonStyle}
            >
                Apply Perturbation
            </button>
        </div>
    );
};

export default StaticVsDynamicModelsViz;