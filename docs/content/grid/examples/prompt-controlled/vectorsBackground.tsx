import React from 'react';

interface VectorsBackgroundProps {
    width?: string;
    height?: string;
    show?: boolean;
    isSmart?: boolean;
}

export function VectorsBackground({
    width = '569px',
    height = '704px',
    show = true,
    isSmart = false
}: VectorsBackgroundProps) {
    if (!show) return null;
    const background = `${import.meta.env.VITE_REACT_DEMOS_BASE_URL || ''}./assets/grid/prompt-controlled/vectors.svg`;

    return (
        <div
            style={{
                position: 'absolute',
                right: '0',
                top: '0',
                width,
                height,
                overflow: 'visible',
                pointerEvents: 'none',
                zIndex: 1,
                filter: isSmart ? 'none' : 'grayscale(100%)',
                transition: 'filter 0.3s ease'
            }}
        >
            <img
                src={background}
                alt=""
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    position: 'absolute',
                    right: '0',
                    top: '0'
                }}
            />
        </div>
    );
}
