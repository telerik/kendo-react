import * as React from 'react';

import { SvgIcon, IconVariant } from '@progress/kendo-react-common';

import { starIcon } from '@progress/kendo-svg-icons';

const variantOptions: Array<{ label: string; value: IconVariant | undefined }> = [
    { label: 'Default', value: undefined },
    { label: 'Solid', value: 'solid' },
    { label: 'Outline', value: 'outline' },
    { label: 'Duotone', value: 'duotone' }
];

const App = () => {
    return (
        <div className="variant-grid">
            {variantOptions.map((variant) => {
                return (
                    <span key={variant.label} className="variant-card">
                        <SvgIcon icon={starIcon} variant={variant.value} size="xxlarge" />
                        <span className="variant-label">{variant.label}</span>
                    </span>
                );
            })}
            <style>
                {`
                .variant-grid {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 24px;
                    justify-content: center;
                    padding: 24px;
                }

                .variant-card {
                    display: inline-flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 8px;
                    padding: 16px;
                    min-width: 96px;
                    border-radius: 6px;
                    background: var(--kendo-color-surface-alt, #f5f5f5);
                }

                .variant-label {
                    font-size: 14px;
                    font-weight: 500;
                }
                `}
            </style>
        </div>
    );
};

export default App;
