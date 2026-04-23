import * as React from 'react';
import { Chip } from '@progress/kendo-react-buttons';
import './styles.css';

type ChipData = {
    text: string;
    value: string;
    removable?: boolean;
    size?: 'small' | 'medium' | 'large';
    themeColor?: 'base' | 'error' | 'info' | 'success' | 'warning' | null;
    fillMode?: 'solid' | 'outline' | null;
    disabled?: boolean;
};

const initialChips: ChipData[] = [
    { text: 'Remove', value: 'filled chip', removable: true, size: 'small', themeColor: 'error', fillMode: 'solid' },
    {
        text: 'Remove',
        value: 'chip outlined',
        removable: true,
        size: 'medium',
        themeColor: 'error',
        fillMode: 'outline'
    },
    { text: 'Remove', value: 'disabled chip', removable: true, size: 'large', themeColor: 'error', disabled: true }
];

const App = () => {
    const [chips, setChips] = React.useState<ChipData[]>(initialChips);

    const handleRemove = (value: string) => {
        setChips((prevChips) => prevChips.filter((chip) => chip.value !== value));
    };

    return (
        <div>
            {chips.map((chip) => (
                <Chip
                    key={chip.value}
                    text={chip.text}
                    value={chip.value}
                    removable={chip.removable}
                    size={chip.size}
                    themeColor={chip.themeColor}
                    fillMode={chip.fillMode}
                    disabled={chip.disabled}
                    onRemove={() => handleRemove(chip.value)}
                />
            ))}
        </div>
    );
};

export default App;
