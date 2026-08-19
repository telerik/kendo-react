import * as React from 'react';

/**
 * Icon set shared by the appearance configurators. All glyphs are authored on a 16x16
 * viewBox with the artwork occupying the central 12x12 area, so they line up with the
 * 12px icons used by the design and inherit the segmented item color via `currentColor`.
 */

const svgProps = {
    width: 16,
    height: 16,
    viewBox: '0 0 16 16',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    focusable: false,
    'aria-hidden': true
} as const;

/** Square spanning (2,2)-(14,14) with only the top-left corner rounded by `r`. */
const roundedCornerPath = (r: number) => `M${2 + r} 2H14V14H2V${2 + r}A${r} ${r} 0 0 1 ${2 + r} 2Z`;

const RoundedShape: React.FC<{ radius: number }> = ({ radius }) => (
    <svg {...svgProps}>
        <path d={roundedCornerPath(radius)} fill="currentColor" fillOpacity="0.2" stroke="currentColor" />
    </svg>
);

/** `rounded="none"` — a square with a diagonal strike-through, signalling corners are forced square. */
const RoundedNone: React.FC = () => (
    <svg {...svgProps}>
        <rect
            x="2.5"
            y="2.5"
            width="11"
            height="11"
            rx="1.5"
            fill="currentColor"
            fillOpacity="0.2"
            stroke="currentColor"
        />
        <path d="M3 13L13 3" stroke="var(--kendo-color-error, #f31700)" strokeLinecap="round" />
    </svg>
);

const RoundedFull: React.FC = () => (
    <svg {...svgProps}>
        <path d="M14 2V14H2A12 12 0 0 1 14 2Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" />
    </svg>
);

/**
 * Shared "unset" glyph — a flat line with no shape — used whenever a control is left at its
 * literal `default` value, so the demo omits the prop and the component falls back to its own
 * built-in default instead of an explicit value.
 */
const DefaultGlyph: React.FC = () => (
    <svg {...svgProps}>
        <path d="M4.5 8H11.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

/** Reusable "unset" glyph element for any preset (`size`, `rounded`, `fillMode`, ...) whose `default` option leaves the prop unset. */
export const defaultIcon = <DefaultGlyph />;

/** Border-radius glyphs keyed by the KendoReact `rounded` value, plus the `default` (unset) option. */
export const roundedIcons = {
    default: defaultIcon,
    none: <RoundedNone />,
    small: <RoundedShape radius={1} />,
    medium: <RoundedShape radius={3} />,
    large: <RoundedShape radius={5} />,
    full: <RoundedFull />
};

const FillModeSolid: React.FC = () => (
    <svg {...svgProps}>
        <rect x="2" y="2" width="12" height="12" rx="2" fill="currentColor" />
    </svg>
);

const FillModeOutline: React.FC = () => (
    <svg {...svgProps}>
        <rect x="2.5" y="2.5" width="11" height="11" rx="1.5" stroke="currentColor" />
    </svg>
);

const FillModeFlat: React.FC = () => (
    <svg {...svgProps}>
        {Array.from({ length: 16 }, (_, i) => {
            const row = Math.floor(i / 4);
            const col = i % 4;
            return (
                <rect
                    key={i}
                    x={2 + col * 3}
                    y={2 + row * 3}
                    width="3"
                    height="3"
                    fill="currentColor"
                    fillOpacity={(row + col) % 2 === 0 ? 1 : 0.2}
                />
            );
        })}
    </svg>
);

const FillModeLink: React.FC = () => (
    <svg {...svgProps}>
        <rect x="2" y="2" width="12" height="9" rx="2" fill="currentColor" fillOpacity="0.2" />
        <rect x="2" y="13" width="12" height="1" rx="0.5" fill="currentColor" />
    </svg>
);

const FillModeClear: React.FC = () => (
    <svg {...svgProps}>
        <rect x="2" y="2" width="12" height="12" rx="2" fill="currentColor" fillOpacity="0.2" />
        <path d="M10 6L6 10M6 6L10 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

/** Fill-mode glyphs keyed by the KendoReact `fillMode` value, plus the `default` (unset) option. */
export const fillModeIcons = {
    default: defaultIcon,
    solid: <FillModeSolid />,
    outline: <FillModeOutline />,
    flat: <FillModeFlat />,
    link: <FillModeLink />,
    clear: <FillModeClear />
};
