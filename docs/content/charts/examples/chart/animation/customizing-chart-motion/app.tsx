import * as React from 'react';

import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
    ChartCategoryAxis,
    ChartCategoryAxisItem
} from '@progress/kendo-react-charts';
import { useConfigurator } from '@docs-shared/configurator';

const categories = ['Q1', 'Q2', 'Q3', 'Q4'];
const data = [100, 180, 150, 220];
const presets = ['default', 'standard', 'rapid', 'stretchy', 'linear'] as const;

type MotionPreset = (typeof presets)[number];

const presetStyles: Record<MotionPreset, React.CSSProperties> = {
    default: {},
    standard: {
        ['--kendo-duration-steady' as string]: '1200ms',
        ['--kendo-duration-rapid' as string]: '400ms',
        ['--kendo-easing-standard' as string]: 'cubic-bezier(0.4, 0, 0.2, 1)'
    },
    rapid: {
        ['--kendo-duration-steady' as string]: '250ms',
        ['--kendo-duration-rapid' as string]: '80ms'
    },
    stretchy: {
        ['--kendo-duration-steady' as string]: '1400ms',
        ['--kendo-duration-rapid' as string]: '500ms',
        ['--kendo-easing-stretchy' as string]: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    },
    linear: {
        ['--kendo-duration-steady' as string]: '900ms',
        ['--kendo-duration-rapid' as string]: '300ms',
        ['--kendo-easing-linear' as string]: 'cubic-bezier(0.25, 0.25, 0.75, 0.75)'
    }
};

const App = () => {
    const config = useConfigurator({
        sections: [
            {
                label: 'Motion Preset',
                controls: [
                    {
                        type: 'dropdown',
                        name: 'preset',
                        options: presets.map((value) => ({
                            value,
                            label: value.charAt(0).toUpperCase() + value.slice(1)
                        })),
                        defaultValue: 'default'
                    }
                ]
            }
        ]
    });
    const preset = (config.preset as MotionPreset | undefined) ?? 'default';

    return (
        <div style={presetStyles[preset]}>
            <Chart key={preset}>
                <ChartCategoryAxis>
                    <ChartCategoryAxisItem categories={categories} />
                </ChartCategoryAxis>
                <ChartSeries>
                    <ChartSeriesItem type="column" data={data} name="Revenue">
                        <ChartSeriesLabels />
                    </ChartSeriesItem>
                </ChartSeries>
            </Chart>
        </div>
    );
};

export default App;
