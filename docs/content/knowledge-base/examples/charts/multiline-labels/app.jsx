import * as React from 'react';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartTitle,
    ChartLegend,
    ChartValueAxis,
    ChartValueAxisItem,
} from '@progress/kendo-react-charts';

const categories = [
    '14M Tele-porter',
    'Articulating Boom Lift',
    'Yanmar Excavator Vi012-2A',
    '14M Tele-porter',
    'Articulating Boom Lift',
];
const series = [
    {
        inventory_id: 'b66446ea-bb22-452a-9d65-51647b2ac860',
        item: ' 14M Tele-porter',
        total: '1',
        color: '#3390FF',
    },
    {
        inventory_id: 'eaeb6fbe-4af9-42ab-8584-2d1e09fe725e',
        item: '8-Series 1.0-3.5 Tonne 4-Wheel Forklift',
        total: '2',
        color: '#FF6833',
    },
    {
        inventory_id: '1b3b0db4-cbd6-4c41-89a2-4503eda46737',
        item: 'Articulating Boom Lift',
        total: '3',
        color: '#FFDD33',
    },
    {
        inventory_id: '5175239e-b539-4ae7-b72d-9e15828a8b02',
        item: 'Yanmar Excavator Vi012-2A ',
        total: '3',
        color: '#1DBE57',
    },
    {
        inventory_id: '333a4d12-5fa8-4dd9-9eae-10dd74a36df2',
        item: 'Crossvent 2+ Infant-Pediatric Ventilator',
        total: '2',
        color: '#CB67DD',
    },
];

function splitString(str, maxLength) {
    const words = str.split(' ');
    let result = '';
    let lineLength = 0;

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (lineLength + word.length > maxLength) {
            result += '\n';
            lineLength = 0;
        }
        result += word + ' ';
        lineLength += word.length + 1;
    }

    return result.trim();
}

const labelContent = (props) => {
    const maxLengthPerLine = 20;
    const labelsContent = `${props.dataItem.item}`;

    const result = splitString(labelsContent, maxLengthPerLine);

    return result;
};

const ChartContainer = () => (
    <>
        <div className="">
            <div className="">
                <div className="k-card">
                    <Chart
                        style={{
                            height: 350,
                        }}
                    >
                        <ChartTitle text="Column Chart" />
                        <ChartLegend position="top" orientation="horizontal" />
                        <ChartCategoryAxis>
                            <ChartCategoryAxisItem
                                categories={categories}
                                labels={{ content: labelContent }}
                                type="numeric"
                            />
                        </ChartCategoryAxis>
                        <ChartValueAxis>
                            <ChartValueAxisItem labels={{ step: 2 }}></ChartValueAxisItem>
                        </ChartValueAxis>
                        <ChartSeries>
                            <ChartSeriesItem data={series} categoryField="item" field="total" colorField="color" />
                        </ChartSeries>
                    </Chart>
                </div>
            </div>
        </div>
    </>
);

export default ChartContainer;
