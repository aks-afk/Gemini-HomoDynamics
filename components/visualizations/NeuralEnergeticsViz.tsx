import React from 'react';

const NeuralEnergeticsViz: React.FC = () => {
    return (
        <div>
            <h4 style={{ marginTop: 0, marginBottom: '1rem', color: '#3A3A3A', fontWeight: 'normal' }}>Neural Energetics</h4>
            <svg viewBox="0 0 300 250" style={{ width: '100%', height: 'auto' }}>
                <style>{`
                    .particle { animation-duration: 5s; animation-timing-function: linear; animation-iteration-count: infinite; }
                    @keyframes glucose-in { from { motion-offset: 0%; } to { motion-offset: 100%; } }
                    @keyframes lactate-shuttle { from { motion-offset: 0%; } to { motion-offset: 100%; } }
                    @keyframes atp-pulse { 0%, 100% { fill-opacity: 0.5; } 50% { fill-opacity: 1; } }
                `}</style>
                {/* Cell Bodies */}
                <path d="M 0 50 C 50 0, 150 0, 200 50 L 200 120 C 150 170, 50 170, 0 120 Z" fill="#F1F0EC" stroke="#C1C1C1" />
                <path d="M 220 50 C 270 0, 350 0, 400 50 L 400 120 C 350 170, 270 170, 220 120 Z" transform="translate(-100, 0)" fill="#F1F0EC" stroke="#C1C1C1" />

                <text x="60" y="30" fontSize="14">Astrocyte</text>
                <text x="240" y="30" fontSize="14">Neuron</text>

                {/* Paths for animation */}
                <path id="glucose-path" d="M 30 200 L 30 100" fill="none" />
                <path id="lactate-path" d="M 180 80 L 220 80" fill="none" />

                {/* Glucose */}
                <g>
                    <circle r="4" fill="#3A3A3A" className="particle">
                        <animateMotion path="M 30 200 L 30 100" begin="0s" />
                    </circle>
                    <text x="35" y="160" fontSize="10">Glucose</text>
                </g>

                {/* Lactate */}
                <g>
                    <circle r="4" fill="#8A8A8A" className="particle">
                        <animateMotion path="M 180 80 L 220 80" begin="2s" />
                    </circle>
                    <text x="175" y="70" fontSize="10">Lactate</text>
                </g>
                
                {/* ATP */}
                <g transform="translate(250, 100)" style={{ animation: 'atp-pulse 2s infinite ease-in-out', animationDelay: '3.5s' }}>
                    <polygon points="0,0 10,-10 20,0 10,10" fill="#5A5A5A" />
                    <text x="10" y="25" textAnchor="middle" fontSize="10">ATP</text>
                </g>

            </svg>
            <p style={{ fontSize: '0.9rem', color: '#5A5A5A', lineHeight: 1.5, textAlign: 'center' }}>
                The Astrocyte-Neuron Lactate Shuttle: a key process for fueling neural activity.
            </p>
        </div>
    );
};

export default NeuralEnergeticsViz;