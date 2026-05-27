export interface SalesRep {
    id: number;
    rep: string;
    region: string;
    country: string;
    quarter: string;
    revenue: number;
    target: number;
    deals: number;
    delta: number;
}

export interface ChartMetric {
    category: string;
    revenue: number;
    target: number;
}

export interface SchedulerEvent {
    id: number;
    title: string;
    start: Date;
    end: Date;
    description?: string;
    isAllDay?: boolean;
}

function round1(n: number): number {
    return Math.round(n * 10) / 10;
}

function makeSalesReps(): SalesRep[] {
    const raw = [
        // Europe Q3
        {
            rep: 'Anna Schmidt',
            region: 'Europe',
            country: 'Germany',
            quarter: 'Q3',
            revenue: 820000,
            target: 750000,
            deals: 18
        },
        {
            rep: 'Pierre Dupont',
            region: 'Europe',
            country: 'France',
            quarter: 'Q3',
            revenue: 610000,
            target: 700000,
            deals: 12
        },
        {
            rep: "Liam O'Brien",
            region: 'Europe',
            country: 'Ireland',
            quarter: 'Q3',
            revenue: 430000,
            target: 400000,
            deals: 10
        },
        {
            rep: 'Sofia Rossi',
            region: 'Europe',
            country: 'Italy',
            quarter: 'Q3',
            revenue: 540000,
            target: 600000,
            deals: 11
        },
        {
            rep: 'Jan de Vries',
            region: 'Europe',
            country: 'Netherlands',
            quarter: 'Q3',
            revenue: 390000,
            target: 350000,
            deals: 9
        },

        // Europe Q4 — Pierre & Sofia underperform
        {
            rep: 'Anna Schmidt',
            region: 'Europe',
            country: 'Germany',
            quarter: 'Q4',
            revenue: 910000,
            target: 800000,
            deals: 20
        },
        {
            rep: 'Pierre Dupont',
            region: 'Europe',
            country: 'France',
            quarter: 'Q4',
            revenue: 580000,
            target: 750000,
            deals: 11
        },
        {
            rep: "Liam O'Brien",
            region: 'Europe',
            country: 'Ireland',
            quarter: 'Q4',
            revenue: 470000,
            target: 450000,
            deals: 10
        },
        {
            rep: 'Sofia Rossi',
            region: 'Europe',
            country: 'Italy',
            quarter: 'Q4',
            revenue: 520000,
            target: 600000,
            deals: 10
        },
        {
            rep: 'Jan de Vries',
            region: 'Europe',
            country: 'Netherlands',
            quarter: 'Q4',
            revenue: 420000,
            target: 380000,
            deals: 9
        },

        // NA Q4
        {
            rep: 'Emily Johnson',
            region: 'NA',
            country: 'USA',
            quarter: 'Q4',
            revenue: 1100000,
            target: 950000,
            deals: 22
        },
        {
            rep: 'Michael Brown',
            region: 'NA',
            country: 'USA',
            quarter: 'Q4',
            revenue: 880000,
            target: 850000,
            deals: 19
        },
        {
            rep: 'Sarah Wilson',
            region: 'NA',
            country: 'Canada',
            quarter: 'Q4',
            revenue: 720000,
            target: 700000,
            deals: 16
        },

        // APAC Q4
        {
            rep: 'Yuki Tanaka',
            region: 'APAC',
            country: 'Japan',
            quarter: 'Q4',
            revenue: 560000,
            target: 500000,
            deals: 12
        },
        {
            rep: 'Priya Sharma',
            region: 'APAC',
            country: 'India',
            quarter: 'Q4',
            revenue: 380000,
            target: 400000,
            deals: 9
        },
        {
            rep: 'Liam Walsh',
            region: 'APAC',
            country: 'Australia',
            quarter: 'Q4',
            revenue: 470000,
            target: 450000,
            deals: 11
        },

        // LATAM Q4
        {
            rep: 'Mateo Lopez',
            region: 'LATAM',
            country: 'Mexico',
            quarter: 'Q4',
            revenue: 320000,
            target: 350000,
            deals: 8
        },
        {
            rep: 'Ana Silva',
            region: 'LATAM',
            country: 'Brazil',
            quarter: 'Q4',
            revenue: 410000,
            target: 380000,
            deals: 9
        },

        // MEA Q4
        { rep: 'Omar Hassan', region: 'MEA', country: 'UAE', quarter: 'Q4', revenue: 180000, target: 200000, deals: 6 }
    ];

    return raw.map((r, i) => ({
        ...r,
        id: i + 1,
        delta: r.target === 0 ? 0 : round1(((r.revenue - r.target) / r.target) * 100)
    }));
}

export const salesReps: SalesRep[] = makeSalesReps();

export function buildChartData(
    data: SalesRep[],
    mode: 'by-region' | 'by-rep' = 'by-region',
    reps?: string[]
): ChartMetric[] {
    if (mode === 'by-rep') {
        let items = data;
        if (reps && reps.length > 0) {
            const repSet = new Set(reps.map((r) => r.toLowerCase()));
            items = items.filter((r) => repSet.has(r.rep.toLowerCase()));
        }
        return items
            .map((r) => ({ category: r.rep, revenue: r.revenue, target: r.target }))
            .sort((a, b) => b.revenue - a.revenue);
    }

    const groups = new Map<string, { revenue: number; target: number }>();
    for (const r of data) {
        const g = groups.get(r.region) || { revenue: 0, target: 0 };
        g.revenue += r.revenue;
        g.target += r.target;
        groups.set(r.region, g);
    }
    return Array.from(groups.entries())
        .map(([region, g]) => ({ category: region, revenue: g.revenue, target: g.target }))
        .sort((a, b) => b.revenue - a.revenue);
}

export function makeAppointments(): SchedulerEvent[] {
    const today = new Date();
    const y = today.getFullYear();
    const m = today.getMonth();
    const d = today.getDate();

    return [
        { id: 1, title: 'Sales Pipeline Sync', start: new Date(y, m, d, 10, 0), end: new Date(y, m, d, 11, 0) },
        { id: 2, title: 'EMEA Forecast Review', start: new Date(y, m, d + 1, 14, 0), end: new Date(y, m, d + 1, 15, 0) }
    ];
}
