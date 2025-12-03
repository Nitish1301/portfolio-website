import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [cursorVariant, setCursorVariant] = useState("default");

    // For trailing effect
    const cursorRef = useRef(null);
    const trailsRef = useRef([]);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });

            // Create trail particle
            const trail = document.createElement('div');
            trail.className = 'fixed w-1 h-1 bg-cyan-400 rounded-full pointer-events-none z-[9997] mix-blend-screen';
            trail.style.left = `${e.clientX}px`;
            trail.style.top = `${e.clientY}px`;
            document.body.appendChild(trail);

            // Animate and remove trail
            const animation = trail.animate([
                { transform: 'scale(1)', opacity: 0.8 },
                { transform: 'scale(0)', opacity: 0 }
            ], {
                duration: 500,
                easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
            });

            animation.onfinish = () => trail.remove();
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
                setCursorVariant("hover");
            } else {
                setIsHovering(false);
                setCursorVariant("default");
            }
        };

        const handleMouseDown = () => setCursorVariant("click");
        const handleMouseUp = () => setCursorVariant(isHovering ? "hover" : "default");

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isHovering]);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            height: 32,
            width: 32,
            border: '1px solid #22d3ee', // cyan-400
            backgroundColor: 'transparent',
            mixBlendMode: 'difference'
        },
        hover: {
            x: mousePosition.x - 24,
            y: mousePosition.y - 24,
            height: 48,
            width: 48,
            border: '2px solid #22d3ee',
            backgroundColor: 'rgba(34, 211, 238, 0.1)',
            mixBlendMode: 'normal'
        },
        click: {
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
            height: 24,
            width: 24,
            border: '2px solid #22d3ee',
            backgroundColor: '#22d3ee',
        }
    };

    return (
        <>
            {/* Main Cursor Ring */}
            <motion.div
                className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center"
                variants={variants}
                animate={cursorVariant}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    mass: 0.5
                }}
            >
                {/* Crosshair Center */}
                <div className="w-1 h-1 bg-cyan-400 rounded-full" />

                {/* Decorative Crosshair Lines */}
                <AnimatePresence>
                    {isHovering && (
                        <>
                            <motion.div
                                initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                                className="absolute w-full h-[1px] bg-cyan-400/50"
                            />
                            <motion.div
                                initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                                className="absolute h-full w-[1px] bg-cyan-400/50"
                            />
                        </>
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    );
};

export default CustomCursor;
