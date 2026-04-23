export interface DemoItem {
    id: number;
    category: string;
    subCategory: string;
    name: string;
    engagement: number;
    budget: number;
    owner: string;
    notes: string;
}

const baseItems: Array<Omit<DemoItem, 'id'>> = [
    {
        category: 'Marketing',
        subCategory: 'Social',
        name: 'Campaign A',
        engagement: 120,
        budget: 500,
        owner: 'Maria Anders',
        notes: 'Focus on awareness and reach.'
    },
    {
        category: 'Marketing',
        subCategory: 'Email',
        name: 'Newsletter',
        engagement: 80,
        budget: 200,
        owner: 'Ana Trujillo',
        notes: 'Monthly newsletter performance tracking.'
    },
    {
        category: 'Sales',
        subCategory: 'Enterprise',
        name: 'Opportunity X',
        engagement: 30,
        budget: 1000,
        owner: 'Antonio Moreno',
        notes: 'High-value account with long cycle.'
    },
    {
        category: 'Sales',
        subCategory: 'SMB',
        name: 'Pipeline Y',
        engagement: 55,
        budget: 300,
        owner: 'Thomas Hardy',
        notes: 'Mid-market pipeline health.'
    }
];

export const items: DemoItem[] = Array.from({ length: 40 }, (_, index) => {
    const base = baseItems[index % baseItems.length];

    return {
        id: index + 1,
        ...base,
        // Keep the first items stable, then make names unique.
        name: index < baseItems.length ? base.name : `${base.name} ${index + 1}`,
        // Light variation so aggregates are interesting.
        engagement: base.engagement + (index % 7) * 3,
        budget: base.budget + (index % 5) * 50
    };
});
