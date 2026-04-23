export const COLORS = {
    design: '#9EC5FE',
    development: '#E2D9F3',
    testing: '#C5B3E6',
    review: '#A3CFBB',
    deployment: '#FFE69C',
    maintenance: '#9EEAF9'
} as const;

export const BORDER_COLORS = {
    design: '#6DA7FD',
    development: '#C4B1E7',
    testing: '#A78CD9',
    review: '#83BEA3',
    deployment: '#FFDA6B',
    maintenance: '#6FE0F6'
} as const;

export const TEXT_COLOR = '#1F2937';

export type ColorKey = keyof typeof COLORS;

export function arrowCap(color: string) {
    return {
        type: 'ArrowEnd',
        fill: { color },
        stroke: { color, width: 1 }
    };
}

export function labelContent(text: string, overrides: Record<string, unknown> = {}) {
    return {
        text,
        color: TEXT_COLOR,
        fontSize: 12,
        ...overrides
    };
}