import { SankeyData } from '@progress/kendo-react-charts';

export const data: SankeyData = {
    nodes: [
        { id: 'female', label: { text: 'Female (58%)' } },
        { id: 'male', label: { text: 'Male (42%)' } },
        { id: 'tablet', label: { text: 'Tablet (12%)' } },
        { id: 'mobile', label: { text: 'Mobile (40%)' } },
        { id: 'desktop', label: { text: 'Desktop (48%)' } },
        { id: '< 18', label: { text: '< 18 years (8%)' } },
        { id: '18-26', label: { text: '18-26 years (35%)' } },
        { id: '27-40', label: { text: '27-40 years (38%)' } },
        { id: '> 40', label: { text: '> 40 years (19%)' } }
    ],
    links: [
        { sourceId: 'female', targetId: 'tablet', value: 12 },
        { sourceId: 'female', targetId: 'mobile', value: 14 },
        { sourceId: 'female', targetId: 'desktop', value: 32 },
        { sourceId: 'male', targetId: 'mobile', value: 26 },
        { sourceId: 'male', targetId: 'desktop', value: 16 },
        { sourceId: 'tablet', targetId: '< 18', value: 4 },
        { sourceId: 'tablet', targetId: '> 40', value: 8 },
        { sourceId: 'mobile', targetId: '< 18', value: 4 },
        { sourceId: 'mobile', targetId: '18-26', value: 24 },
        { sourceId: 'mobile', targetId: '27-40', value: 10 },
        { sourceId: 'mobile', targetId: '> 40', value: 2 },
        { sourceId: 'desktop', targetId: '18-26', value: 11 },
        { sourceId: 'desktop', targetId: '27-40', value: 28 },
        { sourceId: 'desktop', targetId: '> 40', value: 9 }
    ]
};
