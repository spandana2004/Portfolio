
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface SplitTextProps {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
    ease?: string;
    splitType?: 'chars' | 'words' | 'lines';
    from?: gsap.TweenVars; // Use GSAP types
    to?: gsap.TweenVars;
    threshold?: number;
    rootMargin?: string;
    textAlign?: 'left' | 'right' | 'center' | 'justify' | 'match-parent';
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
    onLetterAnimationComplete?: () => void;
    enableScrollTrigger?: boolean;
}

const SplitText: React.FC<SplitTextProps> = ({
    text,
    className = '',
    delay = 50,
    duration = 1.25,
    ease = 'power3.out',
    splitType = 'chars', // Currently only 'chars' and 'words' are easily supported with manual split
    from = { opacity: 0, y: 40 },
    to = { opacity: 1, y: 0 },
    threshold = 0.1,
    rootMargin = '-100px',
    textAlign = 'center',
    tag = 'p',
    enableScrollTrigger = true,
    onLetterAnimationComplete
}) => {
    const containerRef = useRef<HTMLElement | null>(null);
    const onCompleteRef = useRef(onLetterAnimationComplete);
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        onCompleteRef.current = onLetterAnimationComplete;
    }, [onLetterAnimationComplete]);

    useEffect(() => {
        if (document.fonts.status === 'loaded') {
            setFontsLoaded(true);
        } else {
            document.fonts.ready.then(() => {
                setFontsLoaded(true);
            });
        }
    }, []);

    useGSAP(
        () => {
            if (!containerRef.current || !fontsLoaded) return;

            const elements = containerRef.current.querySelectorAll('.split-item');
            if (elements.length === 0) return;

            const staggerTime = delay / 1000;

            const vars: gsap.TweenVars = {
                ...to,
                duration,
                ease,
                stagger: staggerTime,
                onComplete: () => {
                    onCompleteRef.current?.();
                },
                willChange: 'transform, opacity',
                force3D: true
            };

            if (enableScrollTrigger) {
                vars.scrollTrigger = {
                    trigger: containerRef.current,
                    start: `top bottom${rootMargin ? rootMargin : ''}`, // Approximate trigger match
                    toggleActions: 'play none none none',
                    once: true,
                };
            }

            gsap.fromTo(
                elements,
                { ...from },
                vars
            );
        },
        {
            dependencies: [text, fontsLoaded, delay, duration, ease, JSON.stringify(from), JSON.stringify(to), enableScrollTrigger],
            scope: containerRef
        }
    );

    // Manual splitting logic to replace gsap/SplitText
    const renderContent = () => {
        if (splitType === 'words') {
            return text.split(' ').map((word, i) => (
                <span key={i} style={{ display: 'inline-block', whiteSpace: 'pre' }}>
                    <span className="split-item" style={{ display: 'inline-block' }}>{word}</span>
                    {i < text.split(' ').length - 1 ? ' ' : ''}
                </span>
            ));
        } else {
            // Default to chars
            // We need to handle spaces specifically to avoid collapsing
            return text.split('').map((char, i) => (
                <span key={i} className="split-item" style={{ display: 'inline-block', whiteSpace: 'pre' }}>
                    {char}
                </span>
            ));
        }
    };

    const Tag = tag as React.ElementType;

    return (
        <Tag
            ref={containerRef}
            className={className}
            style={{ textAlign, display: 'inline-block' }}
        >
            {renderContent()}
        </Tag>
    );
};

export default SplitText;
