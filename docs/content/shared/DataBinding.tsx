import * as React from 'react';
import './data-binding.css';

const DataBindingIcon = () => (
    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.5 3.5C11.5 5.15685 9.03757 6.5 6 6.5C2.96243 6.5 0.5 5.15685 0.5 3.5M11.5 3.5C11.5 1.84315 9.03757 0.5 6 0.5C2.96243 0.5 0.5 1.84315 0.5 3.5M11.5 3.5V6.5M0.5 3.5V6.5M0.5 6.5C0.5 8.15688 2.9625 9.5 6 9.5C9.0375 9.5 11.5 8.15688 11.5 6.5M0.5 6.5V9.5C0.5 11.1569 2.9625 12.5 6 12.5C9.0375 12.5 11.5 11.1569 11.5 9.5V6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export interface DataBindingField {
    label: string;
    value: unknown;
}

export interface DataBindingProps {
    fields: DataBindingField[];
    children?: React.ReactNode;
}

const formatValue = (value: unknown): string => {
    if (value === undefined || value === null || value === '') return '—';
    if (typeof value === 'object') {
        try { return JSON.stringify(value); } catch { return String(value); }
    }
    return String(value);
};

export const DataBinding = ({ fields, children }: DataBindingProps) => {
    const panel = (
        <div className="data-binding">
            <div className="data-binding-header">
                <div className="data-binding-title">
                    <DataBindingIcon />
                    <span>Data Binding</span>
                </div>
            </div>
            <div className="data-binding-body">
                {fields.map(({ label, value }, index) => (
                    <div key={`${label}-${index}`} className="data-binding-row">
                        <span className="data-binding-label">{label}:</span>
                        <span className="data-binding-value">{formatValue(value)}</span>
                    </div>
                ))}
            </div>
        </div>
    );

    if (children) {
        return (
            <div className="data-binding-layout">
                <div className="data-binding-content">
                    {children}
                </div>
                {panel}
            </div>
        );
    }

    return panel;
};

export default DataBinding;
