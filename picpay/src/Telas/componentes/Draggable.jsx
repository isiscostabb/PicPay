
import React, { useRef, useState, useEffect } from 'react';

const Draggable = ({ children, axis = 'both' }) => {
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const container = containerRef.current;

        const onMouseDown = (e) => {
            setIsDragging(true);
            setStartPos({
                x: e.clientX,
                y: e.clientY,
            });
        };

        const onMouseMove = (e) => {
            if (!isDragging) return;

            const deltaX = e.clientX - startPos.x;
            const deltaY = e.clientY - startPos.y;

            if (axis === 'x' || axis === 'both') {
                container.scrollLeft -= deltaX;
            }
            if (axis === 'y' || axis === 'both') {
                container.scrollTop -= deltaY;
            }

            setStartPos({
                x: e.clientX,
                y: e.clientY,
            });
        };

        const onMouseUp = () => {
            setIsDragging(false);
        };

        if (container) {
            container.addEventListener('mousedown', onMouseDown);
            container.addEventListener('mousemove', onMouseMove);
            container.addEventListener('mouseup', onMouseUp);
            container.addEventListener('mouseleave', onMouseUp);
        }

        return () => {
            if (container) {
                container.removeEventListener('mousedown', onMouseDown);
                container.removeEventListener('mousemove', onMouseMove);
                container.removeEventListener('mouseup', onMouseUp);
                container.removeEventListener('mouseleave', onMouseUp);
            }
        };
    }, [isDragging, startPos, axis]);

    return (
        <div
            ref={containerRef}
            style={{
                overflow: 'hidden',
                cursor: isDragging ? 'grabbing' : 'grab',
                userSelect: 'none', // Evitar seleção de texto enquanto arrasta
            }}
        >
            {children}
        </div>
    );
};

export default Draggable;
