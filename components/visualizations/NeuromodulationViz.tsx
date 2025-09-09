import React, { useState, useMemo } from 'react';

const Slider = ({ label, value, onChange, color }: { label: string, value: number, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, color: string }) => (
    <div style={{ marginBottom: '0.75rem' }}>
        <label style={{ display: 'block', marginBottom: '0.2rem', color: '#5A5A5A', fontSize: '0.9rem' }}>{label}</label>
        <input type="range" min="0" max="100" value={value} onChange={onChange} style={{ width: '100%', accentColor: color }} />
    </div>
);

const NeuromodulationViz: React.FC = () => {
    const [cholinergic, setCholinergic] = useState(50);
    const [dopaminergic, setDopaminergic] = useState(50);
    const [serotonergic, setSerotonergic] = useState(50);
    const [noradrenergic, setNoradrenergic] = useState(50);

    const brainState = useMemo(() => {
        if (cholinergic > 70 && dopaminergic > 60 && noradrenergic < 40) return { name: "Focused Attention", desc: "High alertness, optimized for deep work." };
        if (dopaminergic > 70 && noradrenergic > 60 && serotonergic < 50) return { name: "Exploration / Motivation", desc: "High drive, seeking novelty and rewards." };
        if (serotonergic > 70 && cholinergic < 40 && noradrenergic < 40) return { name: "Rest & Recovery", desc: "Calm, content state promoting restoration." };
        if (noradrenergic > 80) return { name: "Stress / High Alert", desc: "Fight-or-flight response, heightened vigilance." };
        if (cholinergic < 30 && dopaminergic < 30 && noradrenergic < 30) return { name: "Low Arousal / Drowsy", desc: "Reduced cognitive energy and focus." };
        return { name: "Balanced State", desc: "A stable, baseline state of functioning." };
    }, [cholinergic, dopaminergic, serotonergic, noradrenergic]);

    return (
        <div>
            <h4 style={{ marginTop: 0, marginBottom: '1rem', color: '#3A3A3A', fontWeight: 'normal' }}>Neuromodulation Brain States</h4>
            <div style={{
                padding: '1rem', background: '#F1F0EC', borderRadius: '4px',
                border: '1px solid #EAE8E1', textAlign: 'center', marginBottom: '1.5rem', minHeight: '80px',
                display: 'flex', flexDirection: 'column', justifyContent: 'center'
            }}>
                <div style={{ color: '#3A3A3A', fontWeight: 'bold', fontSize: '1.1rem' }}>{brainState.name}</div>
                <div style={{ color: '#5A5A5A', fontSize: '0.9rem', marginTop: '0.25rem' }}>{brainState.desc}</div>
            </div>

            <Slider label="Cholinergic (Attention)" value={cholinergic} onChange={e => setCholinergic(+e.target.value)} color="#3A3A3A" />
            <Slider label="Dopaminergic (Motivation)" value={dopaminergic} onChange={e => setDopaminergic(+e.target.value)} color="#5A5A5A" />
            <Slider label="Serotonergic (Mood)" value={serotonergic} onChange={e => setSerotonergic(+e.target.value)} color="#8A8A8A" />
            <Slider label="Noradrenergic (Arousal)" value={noradrenergic} onChange={e => setNoradrenergic(+e.target.value)} color="#C1C1C1" />
        </div>
    );
};

export default NeuromodulationViz;