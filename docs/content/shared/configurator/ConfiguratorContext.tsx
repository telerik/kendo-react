import * as React from 'react';
import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';

// Control type definitions. Only `switch` and `checkbox` carry a `label` — they render it
// inline next to the input. Every other control is named by the label of the section that
// holds it, so give each such control its own single-control section.
export interface ButtonGroupControl {
    type: 'buttonGroup';
    name: string;
    options: string[];
    defaultValue: string;
}

export interface ChipControl {
    type: 'chip';
    name: string;
    options: string[];
    defaultValue: string;
}

export interface RadioControl {
    type: 'radio';
    name: string;
    options: string[];
    defaultValue: string;
}

export interface DropdownOption {
    value: string;
    label?: string;
    /** Optional CSS color rendered as a round swatch in front of the label. */
    color?: string;
}

export interface DropdownControl {
    type: 'dropdown';
    name: string;
    options: (string | DropdownOption)[];
    defaultValue: string;
}

export interface SwitchControl {
    type: 'switch';
    name: string;
    /** Caption rendered next to the switch. */
    label: string;
    defaultValue: boolean;
}

export interface CheckboxControl {
    type: 'checkbox';
    name: string;
    /** Caption rendered next to the checkbox. */
    label: string;
    defaultValue: boolean;
}

export interface SegmentedControl {
    type: 'segmented';
    name: string;
    options: { label?: string; icon?: React.ReactNode; value: string }[];
    defaultValue: string;
}

export interface SliderControl {
    type: 'slider';
    name: string;
    min: number;
    max: number;
    step?: number;
    defaultValue: number;
}

export interface TextBoxControl {
    type: 'textbox';
    name: string;
    placeholder?: string;
    defaultValue: string;
}

/**
 * Native `input[type="date"]`. Values are `YYYY-MM-DD` strings so they round-trip through
 * the input without timezone shifts. Avoid `new Date(value)` to parse them — it is parsed
 * as UTC in many environments and can shift the day for users in non-UTC timezones. Parse
 * the year/month/day components manually and construct a local `Date` instead.
 */
export interface DateControl {
    type: 'date';
    name: string;
    /** Earliest selectable date, as `YYYY-MM-DD`. */
    min?: string;
    /** Latest selectable date, as `YYYY-MM-DD`. */
    max?: string;
    defaultValue: string;
}

export interface ColorPickerControl {
    type: 'colorPicker';
    name: string;
    defaultValue: string;
}

export interface NumericTextBoxControl {
    type: 'numericTextBox';
    name: string;
    min?: number;
    max?: number;
    step?: number;
    defaultValue: number;
}

export type ConfigControl =
    | ButtonGroupControl
    | ChipControl
    | RadioControl
    | DropdownControl
    | SwitchControl
    | CheckboxControl
    | SegmentedControl
    | SliderControl
    | TextBoxControl
    | DateControl
    | NumericTextBoxControl
    | ColorPickerControl;

export interface ConfigSection {
    label: string;
    controls: ConfigControl[];
}

export interface ConfiguratorContextValue {
    sections: ConfigSection[];
    values: Record<string, any>;
    open: boolean;
    hasConfigurator: boolean;
    setSections: (sections: ConfigSection[]) => void;
    setValue: (name: string, value: any) => void;
    clearSections: () => void;
    toggleOpen: () => void;
    setOpen: (open: boolean) => void;
}

const ConfiguratorContext = createContext<ConfiguratorContextValue>({
    sections: [],
    values: {},
    open: false,
    hasConfigurator: false,
    setSections: () => {},
    setValue: () => {},
    clearSections: () => {},
    toggleOpen: () => {},
    setOpen: () => {}
});

export const ConfiguratorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [sections, setSectionsState] = useState<ConfigSection[]>([]);
    const [values, setValues] = useState<Record<string, any>>({});
    const [open, setOpenState] = useState(false);
    const hasConfiguratorRef = useRef(false);
    const [hasConfigurator, setHasConfigurator] = useState(false);

    const setSections = useCallback((newSections: ConfigSection[]) => {
        setSectionsState(newSections);
        if (!hasConfiguratorRef.current && newSections.length > 0) {
            hasConfiguratorRef.current = true;
            setHasConfigurator(true);
        }
        // Initialize default values
        const defaults: Record<string, any> = {};
        newSections.forEach((section) => {
            section.controls.forEach((control) => {
                defaults[control.name] = control.defaultValue;
            });
        });
        setValues(defaults);
    }, []);

    const setValue = useCallback((name: string, value: any) => {
        setValues((prev) => ({ ...prev, [name]: value }));
    }, []);

    const clearSections = useCallback(() => {
        setSectionsState([]);
        setValues({});
    }, []);

    const toggleOpen = useCallback(() => setOpenState((v) => !v), []);
    const setOpen = useCallback((v: boolean) => setOpenState(v), []);

    return (
        <ConfiguratorContext.Provider
            value={{
                sections,
                values,
                open,
                hasConfigurator,
                setSections,
                setValue,
                clearSections,
                toggleOpen,
                setOpen
            }}
        >
            {children}
        </ConfiguratorContext.Provider>
    );
};

export const useConfiguratorContext = () => useContext(ConfiguratorContext);

/**
 * Hook for demo components to register configurator controls and read current values.
 *
 * Usage:
 * ```tsx
 * const config = useConfigurator({
 *   sections: [
 *     {
 *       label: 'Button',
 *       controls: [
 *         { type: 'buttonGroup', name: 'variant', options: ['Solid', 'Outline'], defaultValue: 'Solid' },
 *         { type: 'switch', name: 'disabled', label: 'Disabled', defaultValue: false },
 *       ]
 *     }
 *   ]
 * });
 * // config.variant === 'Solid', config.disabled === false
 * ```
 */
export function useConfigurator(schema: { sections: ConfigSection[] }): Record<string, any> {
    const { setSections, clearSections, values } = useConfiguratorContext();
    const schemaRef = useRef(schema);

    useEffect(() => {
        schemaRef.current = schema;
        setSections(schema.sections);
        return () => {
            clearSections();
        };
    }, [
        JSON.stringify(
            schema.sections.map((s) => ({ l: s.label, c: s.controls.map((c) => ({ t: c.type, n: c.name })) }))
        )
    ]);

    // The literal 'default' value (e.g. the `roundedOptions` "Default" glyph) marks a control
    // as intentionally unset, so the demo passes `undefined` and the component falls back to
    // its own built-in default instead of an explicit prop value.
    return Object.keys(values).reduce((result, key) => {
        result[key] = values[key] === 'default' ? undefined : values[key];
        return result;
    }, {} as Record<string, any>);
}
