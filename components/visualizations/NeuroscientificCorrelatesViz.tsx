import React, { useState } from 'react';

const NeuroscientificCorrelatesViz: React.FC = () => {
    const [hovered, setHovered] = useState<string | null>(null);

    const brainParts = {
        reason: { path: "M 150,30 C 100,30 80,70 90,110 C 100,150 150,150 150,150", label: "Prefrontal Cortex" },
        spirit: { path: "M 150,150 C 150,150 120,150 120,170 C 120,190 150,210 150,210", label: "ACC / Amygdala" },
        appetite: { path: "M 150,210 C 150,210 180,190 180,170 C 180,150 150,150 150,150", label: "Limbic System" },
    };

    const Label = ({ id, text, x, y }: { id: string, text: string, x: number, y: number }) => (
        <text
            x={x} y={y}
            textAnchor="middle"
            fontSize="14"
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
            style={{ cursor: 'default', fontWeight: hovered === id ? 'bold' : 'normal' }}
            fill="#3A3A3A"
        >
            {text}
        </text>
    );

    return (
        <div>
            <h4 style={{ marginTop: 0, marginBottom: '1rem', color: '#3A3A3A', fontWeight: 'normal' }}>Neuroscientific Correlates</h4>
            <svg viewBox="0 0 300 280" style={{ width: '100%', height: 'auto' }}>
                {/* Brain Outline */}
                <path d="M 150,30 C 80,30 50,100 80,170 C 110,240 190,240 220,170 C 250,100 220,30 150,30 Z" fill="#F1F0EC" stroke="#C1C1C1" strokeWidth="2" />

                {/* Brain parts */}
                {Object.entries(brainParts).map(([key, { path }]) => (
                    <path
                        key={key}
                        d={path + " Z"}
                        fill={hovered === key ? '#8A8A8A' : 'rgba(138, 138, 138, 0.3)'}
                        stroke="#5A5A5A"
                        strokeWidth="1"
                        style={{ transition: 'fill 0.3s ease' }}
                    />
                ))}

                {/* FIX: The `x` and `y` props for the `Label` component expect numbers. Passed numeric values in curly braces instead of strings. */}
                <Label id="reason" text="Reason" x={70} y={70} />
                <Label id="spirit" text="Spirit" x={70} y={160} />
                <Label id="appetite" text="Appetite" x={230} y={160} />
                
                <text x="150" y="260" textAnchor="middle" fontSize="12" fill="#5A5A5A">
                   {hovered ? brainParts[hovered as keyof typeof brainParts].label : 'Hover over a component'}
                </text>
            </svg>
        </div>
    );
};

export default NeuroscientificCorrelatesViz;