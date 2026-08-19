import * as React from 'react';

import { Calendar } from '@progress/kendo-react-dateinputs';
import { useConfigurator } from '@docs-shared/configurator';

const TODAY = new Date();
const defaultMin = new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() - 10);
const defaultMax = new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() + 10);

// `input[type="date"]` exchanges `YYYY-MM-DD` strings. Both helpers stay on local time —
// `toISOString()` / `new Date('YYYY-MM-DD')` would go through UTC and shift the day by one
// for users west or east of Greenwich.
const formatDate = (value: Date): string =>
    `${value.getFullYear()}-${String(value.getMonth() + 1).padStart(2, '0')}-${String(value.getDate()).padStart(
        2,
        '0'
    )}`;
const parseDate = (value: string | undefined, fallback: Date): Date => {
    // Undefined on the first render, before the configurator has registered its defaults,
    // and an empty string while the date input is cleared.
    if (!value) {
        return fallback;
    }

    const [year, month, day] = value.split('-').map(Number);
    const parsed = new Date(year, month - 1, day);

    return Number.isNaN(parsed.getTime()) ? fallback : parsed;
};

const App = () => {
    const config = useConfigurator({
        sections: [
            {
                label: 'Min Date',
                controls: [
                    {
                        type: 'date',
                        name: 'min',
                        defaultValue: formatDate(defaultMin)
                    }
                ]
            },
            {
                label: 'Max Date',
                controls: [
                    {
                        type: 'date',
                        name: 'max',
                        defaultValue: formatDate(defaultMax)
                    }
                ]
            }
        ]
    }) as {
        min?: string;
        max?: string;
    };

    const min = React.useMemo(() => parseDate(config.min, defaultMin), [config.min]);
    const max = React.useMemo(() => parseDate(config.max, defaultMax), [config.max]);

    return <Calendar min={min} max={max} />;
};

export default App;
