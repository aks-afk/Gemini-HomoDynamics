import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const timers = [
            setTimeout(() => setStep(1), 100),  // Words slide in
            setTimeout(() => setStep(2), 800), // Fade in '+'
            setTimeout(() => setStep(3), 2000), // Fade out '+' and merge words
            setTimeout(() => setStep(4), 2800) // Fade in byline
        ];
        return () => timers.forEach(clearTimeout);
    }, []);

    const baseTextStyle: React.CSSProperties = {
        fontFamily: 'Georgia, serif',
        fontSize: 'clamp(2.5rem, 8vw, 5rem)',
        fontWeight: 'normal',
        color: '#FDFBF6',
        transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.5s ease',
        display: 'inline-block',
        verticalAlign: 'baseline',
    };

    const homoStyle: React.CSSProperties = {
        ...baseTextStyle,
        transform: step < 1 ? 'translateX(-20px)' : 'translateX(0)',
        opacity: step >= 1 ? 1 : 0,
    };

    const dynamicsStyle: React.CSSProperties = {
        ...baseTextStyle,
        transform: step < 1 ? 'translateX(20px)' : 'translateX(0)',
        opacity: step >= 1 ? 1 : 0,
    };
    
    const plusStyle: React.CSSProperties = {
        ...baseTextStyle,
        overflow: 'hidden', // Hide content as the container collapses
        margin: step >= 3 ? '0' : '0 1rem',
        maxWidth: step >= 3 ? '0' : '5rem', // Animate max-width to collapse the element
        opacity: step === 2 ? 1 : 0,
        transition: 'opacity 0.4s ease, margin 0.8s cubic-bezier(0.25, 1, 0.5, 1), max-width 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
    };

    const bylineStyle: React.CSSProperties = {
        fontFamily: 'Georgia, serif',
        fontSize: '1.2rem',
        color: '#C1C1C1',
        marginTop: '1.5rem',
        opacity: step >= 4 ? 1 : 0,
        transition: 'opacity 1s ease',
    };

    return (
        <section className="hero" style={{
            height: '220px',
            backgroundColor: '#3A3A3A',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
        }}>
            {/* Flex container solves whitespace rendering issues between spans */}
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center' }}>
                <span style={homoStyle}>Homo</span>
                <span style={plusStyle}>+</span>
                <span style={dynamicsStyle}>Dynamics</span>
            </div>
            <p style={bylineStyle}>By Amit Srivastava</p>
        </section>
    );
};

export default Hero;