import React from 'react';

export const ConfiguratorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => React.createElement(React.Fragment, null, children);

export function useConfigurator(schema: { sections: any[] }): Record<string, any> {
    const defaults: Record<string, any> = {};
    schema.sections.forEach((s: any) => s.controls?.forEach((c: any) => { defaults[c.name] = c.defaultValue; }));
    return defaults;
}

export function useConfiguratorContext(): any {
    return { sections: [], values: {}, open: false, hasConfigurator: false, setSections: () => {}, setValue: () => {}, clearSections: () => {}, toggleOpen: () => {}, setOpen: () => {} };
}

export const ConfiguratorPanel: React.FC<any> = () => null;
export const ConfiguratorTrigger: React.FC = () => null;

export const roundedIcons: Record<string, React.ReactNode> = {};
export const fillModeIcons: Record<string, React.ReactNode> = {};

export const sizeOptions = (values: string[]) => values.map(v => ({ value: v, label: v }));
export const roundedOptions = (values: string[]) => values.map(v => ({ value: v, label: v }));
export const fillModeOptions = (values: string[]) => values.map(v => ({ value: v, label: v }));
export const themeColorOptions = (values?: string[]) => (values ?? []).map(v => ({ value: v, label: v }));

export type ConfigSection = any;
export type ConfigControl = any;
