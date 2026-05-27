import * as React from 'react';
import { Button, DropDownButton } from '@progress/kendo-react-buttons';
import { globeIcon, slidersIcon, sparklesIcon } from '@progress/kendo-svg-icons';

export const StartAffix: React.FC = () => (
    <Button svgIcon={globeIcon} fillMode="flat" rounded="full" themeColor="primary" title="Web search" aria-label="Web search" />
);

export const EndAffix: React.FC<{ onClear: () => void }> = ({ onClear }) => (
    <Button
        svgIcon={slidersIcon}
        fillMode="flat"
        rounded="full"
        themeColor="primary"
        title="Clear message"
        aria-label="Clear message"
        onClick={onClear}
    />
);

const modelItems = [{ text: 'Auto' }, { text: 'GPT' }, { text: 'Claude' }];

export const TopAffix: React.FC = () => (
    <div className="model-selector">
        <DropDownButton
            text="Model name"
            items={modelItems}
            svgIcon={sparklesIcon}
            size="small"
            fillMode="flat"
            themeColor="primary"
            ariaLabel="Select AI model"
        />
    </div>
);

export const EmptyState: React.FC = () => (
    <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            textAlign: 'center'
        }}
    >
        <h2
            style={{
                fontSize: 'var(--kendo-font-size-xl)',
                color: 'var(--kendo-color-on-base)',
                fontWeight: 400,
                margin: 0
            }}
        >
            What's on your mind today?
        </h2>
    </div>
);
