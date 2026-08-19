import { DropdownOption, SegmentedControl } from './ConfiguratorContext';
import { roundedIcons, fillModeIcons, defaultIcon } from './icons';

type SegmentedOption = SegmentedControl['options'][number];

/**
 * Option presets shared by the appearance configurators so that every component exposes
 * `size` / `rounded` / `fillMode` / `themeColor` with identical labels, icons and swatches.
 * Each helper takes the subset of values the component actually supports and preserves the
 * order it is given.
 */

const sizeLabels: Record<string, string> = {
    default: 'Default',
    xs: 'XS',
    small: 'S',
    medium: 'M',
    large: 'L'
};

const roundedLabels: Record<string, string> = {
    default: 'Default',
    none: 'None',
    small: 'Small',
    medium: 'Medium',
    large: 'Large',
    full: 'Full'
};

const fillModeLabels: Record<string, string> = {
    default: 'Default',
    solid: 'Solid',
    outline: 'Outline',
    flat: 'Flat',
    link: 'Link',
    clear: 'Clear'
};

/**
 * Swatch colors fall back to the Default theme values so the swatches still render when a
 * demo is exported to StackBlitz/CodeSandbox without the theme CSS variables loaded.
 */
const themeColorSwatches: Record<string, string> = {
    base: 'var(--kendo-color-base, #f5f5f5)',
    primary: 'var(--kendo-color-primary, #ff6358)',
    secondary: 'var(--kendo-color-secondary, #666666)',
    tertiary: 'var(--kendo-color-tertiary, #03a9f4)',
    info: 'var(--kendo-color-info, #0058e9)',
    success: 'var(--kendo-color-success, #37b400)',
    warning: 'var(--kendo-color-warning, #ffc000)',
    error: 'var(--kendo-color-error, #f31700)',
    inverse: 'var(--kendo-color-inverse, #1a1a1a)',
    light: 'var(--kendo-color-light, #ebebeb)',
    dark: 'var(--kendo-color-dark, #404040)'
};

const capitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

/** Segmented options for the `size` property — `['small', 'medium', 'large']` renders as S/M/L, plus an optional `default` (unset) glyph. */
export const sizeOptions = (values: string[]): SegmentedOption[] =>
    values.map((value) => ({
        value,
        label: sizeLabels[value] ?? capitalize(value),
        icon: value === 'default' ? defaultIcon : undefined
    }));

/** Segmented options for the `rounded` property, each with its border-radius glyph. */
export const roundedOptions = (values: string[]): SegmentedOption[] =>
    values.map((value) => ({
        value,
        label: roundedLabels[value] ?? capitalize(value),
        icon: roundedIcons[value as keyof typeof roundedIcons]
    }));

/** Segmented options for the `fillMode` property, each with its fill-mode glyph. */
export const fillModeOptions = (values: string[]): SegmentedOption[] =>
    values.map((value) => ({
        value,
        label: fillModeLabels[value] ?? capitalize(value),
        icon: fillModeIcons[value as keyof typeof fillModeIcons]
    }));

const defaultThemeColors = [
    'base',
    'primary',
    'secondary',
    'tertiary',
    'info',
    'success',
    'warning',
    'error',
    'inverse'
];

/** Dropdown options for the `themeColor` property, each with a color swatch. */
export const themeColorOptions = (values: string[] = defaultThemeColors): DropdownOption[] =>
    values.map((value) => ({ value, label: capitalize(value), color: themeColorSwatches[value] }));
