import { Series, LegendItem } from '@progress/kendo-react-charts';

const customLegendItem: LegendItem = {
    type: 'area',
    area: {
        opacity: 0.5
    },
    highlight: {
        visible: false
    }
};

const series: Series[] = [
    {
        name: 'Series 1',
        type: 'line',
        data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.89, 8.238, 9.552, 6.855]
    },
    {
        name: 'Series 2',
        type: 'line',
        data: [4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, -7.832, 4.3, 4.3],
        markers: { type: 'square' }
    },
    {
        name: 'Series 3',
        type: 'line',
        data: [5.743, 8.295, 8.175, 7.376, 9.153, 9.535, 6.247, 1.832, 5.3, 5.3],
        markers: { type: 'roundedRect', visible: false }
    },
    {
        name: 'Series 4',
        type: 'area',
        data: [0.01, -0.375, 1.161, 0.684, 3.7, 3.269, 1.083, -5.127, 3.69, 2.995],
        markers: { visible: false }
    },
    {
        name: 'Custom',
        type: 'line',
        data: [2, 1.2, 4, 2, 5, 6, -4, -6, -4, -6],
        markers: { visible: false },
        legendItem: customLegendItem
    }
];

const categories = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011];

export { series, categories };
