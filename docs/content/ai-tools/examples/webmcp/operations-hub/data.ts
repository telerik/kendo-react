// ---------------------------------------------------------------------------
// NovaTech Global Operations Hub — data models & generators
// ---------------------------------------------------------------------------

export interface Shipment {
    id: number;
    trackingNumber: string;
    origin: string;
    destination: string;
    destinationStreet: string;
    destinationLat: number;
    destinationLng: number;
    status: string;
    carrier: string;
    value: number;
    weight: number;
    shipDate: Date;
    eta: Date;
    warehouseId: number;
    region: string;
}

export interface Warehouse {
    id: number;
    name: string;
    city: string;
    country: string;
    region: string;
    lat: number;
    lng: number;
    capacity: number;
    utilization: number;
}

export interface WarehouseMarker {
    latlng: [number, number];
    name: string;
}

interface DestinationAddress {
    street: string;
    lat: number;
    lng: number;
}

// ---------------------------------------------------------------------------
// Destination address pool (4 per city, with realistic lat/lng jitter)
// ---------------------------------------------------------------------------
const destinationAddresses: Record<string, DestinationAddress[]> = {
    'New York': [
        { street: '275 Hudson Yards Plaza', lat: 40.7536, lng: -74.0014 },
        { street: '88 Broad Street, Financial District', lat: 40.7048, lng: -74.011 },
        { street: '410 Park Avenue South', lat: 40.7421, lng: -73.9857 },
        { street: '1200 Brooklyn Navy Yard', lat: 40.7016, lng: -73.9712 }
    ],
    London: [
        { street: '15 Canary Wharf North', lat: 51.5054, lng: -0.0235 },
        { street: '220 Old Street, Shoreditch', lat: 51.5256, lng: -0.0876 },
        { street: '7 Heathrow Cargo Terminal', lat: 51.47, lng: -0.4543 },
        { street: '99 Bermondsey Trade Park', lat: 51.4979, lng: -0.0712 }
    ],
    Berlin: [
        { street: '42 Friedrichstraße, Mitte', lat: 52.517, lng: 13.3889 },
        { street: '18 Tempelhof Logistics Center', lat: 52.473, lng: 13.4036 },
        { street: '7 Spandauer Industrieweg', lat: 52.535, lng: 13.207 },
        { street: '310 Treptower Park', lat: 52.487, lng: 13.469 }
    ],
    Dubai: [
        { street: '5 Jebel Ali Free Zone, Block C', lat: 25.0119, lng: 55.0617 },
        { street: '112 Sheikh Zayed Road, Trade Tower', lat: 25.2048, lng: 55.2708 },
        { street: '34 Dubai Investment Park', lat: 24.971, lng: 55.17 },
        { street: '77 Al Quoz Industrial Area 3', lat: 25.141, lng: 55.22 }
    ],
    Singapore: [
        { street: '3 Tuas South Avenue 14', lat: 1.286, lng: 103.652 },
        { street: '21 Changi North Crescent', lat: 1.392, lng: 103.987 },
        { street: '8 Marina Boulevard, Tower 1', lat: 1.281, lng: 103.854 },
        { street: '45 Jurong Port Road', lat: 1.312, lng: 103.718 }
    ],
    'Mexico City': [
        { street: '210 Av. Reforma, Cuauhtémoc', lat: 19.428, lng: -99.167 },
        { street: '55 Parque Industrial Vallejo', lat: 19.483, lng: -99.149 },
        { street: '18 Av. Insurgentes Sur 1500', lat: 19.376, lng: -99.176 },
        { street: '7 Aeropuerto Internacional Cargo', lat: 19.4361, lng: -99.0719 }
    ],
    Toronto: [
        { street: '320 Front Street West', lat: 43.644, lng: -79.392 },
        { street: '180 Pearson Cargo Drive', lat: 43.681, lng: -79.612 },
        { street: '45 Liberty Village Distribution', lat: 43.638, lng: -79.42 },
        { street: '2200 Markham Industrial Park', lat: 43.856, lng: -79.337 }
    ],
    Johannesburg: [
        { street: '12 Sandton Trade Hub', lat: -26.1076, lng: 28.0567 },
        { street: '88 OR Tambo Cargo Terminal', lat: -26.137, lng: 28.241 },
        { street: '33 Rosebank Industrial Park', lat: -26.1467, lng: 28.044 },
        { street: '205 Soweto Logistics Way', lat: -26.268, lng: 27.859 }
    ],
    Seoul: [
        { street: '77 Gangnam-daero, Gangnam-gu', lat: 37.4979, lng: 127.0276 },
        { street: '14 Incheon Port Logistics Zone', lat: 37.45, lng: 126.65 },
        { street: '230 Yeouido Trade Plaza', lat: 37.5219, lng: 126.9245 },
        { street: '42 Guro Digital Industrial Complex', lat: 37.4854, lng: 126.9015 }
    ],
    Sydney: [
        { street: '15 Port Botany Container Terminal', lat: -33.971, lng: 151.22 },
        { street: '88 George Street, CBD', lat: -33.862, lng: 151.208 },
        { street: '42 Eastern Creek Distribution Park', lat: -33.799, lng: 150.858 },
        { street: '7 Mascot Cargo Centre', lat: -33.932, lng: 151.188 }
    ]
};

// ---------------------------------------------------------------------------
// Seeded PRNG (Mulberry32) for deterministic data generation
// ---------------------------------------------------------------------------
function mulberry32(seed: number) {
    return () => {
        /* eslint-disable no-bitwise */
        let t = (seed += 0x6d2b79f5);
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        /* eslint-enable no-bitwise */
    };
}

function weightedRandom(rnd: () => number, weights: number[]): number {
    const total = weights.reduce((s, w) => s + w, 0);
    let roll = rnd() * total;
    for (let i = 0; i < weights.length; i++) {
        roll -= weights[i];
        if (roll <= 0) {
            return i;
        }
    }
    return weights.length - 1;
}

// ---------------------------------------------------------------------------
// Warehouses
// ---------------------------------------------------------------------------
export const warehouses: Warehouse[] = [
    {
        id: 1,
        name: 'Chicago Hub',
        city: 'Chicago',
        country: 'USA',
        region: 'North America',
        lat: 41.88,
        lng: -87.63,
        capacity: 50000,
        utilization: 78
    },
    {
        id: 2,
        name: 'Rotterdam Port',
        city: 'Rotterdam',
        country: 'Netherlands',
        region: 'Europe',
        lat: 51.92,
        lng: 4.48,
        capacity: 65000,
        utilization: 85
    },
    {
        id: 3,
        name: 'Shanghai Terminal',
        city: 'Shanghai',
        country: 'China',
        region: 'Asia Pacific',
        lat: 31.23,
        lng: 121.47,
        capacity: 80000,
        utilization: 92
    },
    {
        id: 4,
        name: 'São Paulo Center',
        city: 'São Paulo',
        country: 'Brazil',
        region: 'Latin America',
        lat: -23.55,
        lng: -46.63,
        capacity: 35000,
        utilization: 61
    },
    {
        id: 5,
        name: 'Mumbai Gateway',
        city: 'Mumbai',
        country: 'India',
        region: 'Asia Pacific',
        lat: 19.08,
        lng: 72.88,
        capacity: 45000,
        utilization: 88
    },
    {
        id: 6,
        name: 'Tokyo Depot',
        city: 'Tokyo',
        country: 'Japan',
        region: 'Asia Pacific',
        lat: 35.68,
        lng: 139.69,
        capacity: 40000,
        utilization: 73
    },
    {
        id: 7,
        name: 'Sydney Warehouse',
        city: 'Sydney',
        country: 'Australia',
        region: 'Oceania',
        lat: -33.87,
        lng: 151.21,
        capacity: 30000,
        utilization: 55
    },
    {
        id: 8,
        name: 'Lagos Depot',
        city: 'Lagos',
        country: 'Nigeria',
        region: 'Africa',
        lat: 6.52,
        lng: 3.38,
        capacity: 25000,
        utilization: 42
    }
];

// ---------------------------------------------------------------------------
// Generate shipments (deterministic via seed 123)
// ---------------------------------------------------------------------------
export function generateShipments(): Shipment[] {
    const rnd = mulberry32(123);
    const origins = ['Chicago', 'Rotterdam', 'Shanghai', 'São Paulo', 'Mumbai', 'Tokyo', 'Sydney', 'Lagos'];
    const destinations = [
        'New York',
        'London',
        'Berlin',
        'Dubai',
        'Singapore',
        'Mexico City',
        'Toronto',
        'Johannesburg',
        'Seoul',
        'Sydney'
    ];
    const carriers = ['DHL Express', 'Maersk Line', 'FedEx Freight', 'UPS Worldwide', 'CMA CGM', 'COSCO Shipping'];
    const statuses = ['In Transit', 'Delivered', 'Delayed', 'Pending'];
    const statusWeights = [35, 30, 15, 20];
    const shipments: Shipment[] = [];

    for (let i = 1; i <= 80; i++) {
        const statusIdx = weightedRandom(rnd, statusWeights);
        const warehouseIdx = Math.floor(rnd() * warehouses.length);
        const dayOffset = Math.floor(rnd() * 60);
        const shipDate = new Date(2026, 3, 1);
        shipDate.setDate(shipDate.getDate() - dayOffset);
        const etaDays = 3 + Math.floor(rnd() * 18);
        const eta = new Date(shipDate);
        eta.setDate(eta.getDate() + etaDays);
        const destCity = destinations[Math.floor(rnd() * destinations.length)];
        const addressPool = destinationAddresses[destCity];
        const address = addressPool[Math.floor(rnd() * addressPool.length)];

        shipments.push({
            id: i,
            trackingNumber: `NT-${2026000 + i}`,
            origin: origins[warehouseIdx],
            destination: destCity,
            destinationStreet: address.street,
            destinationLat: address.lat,
            destinationLng: address.lng,
            status: statuses[statusIdx],
            carrier: carriers[Math.floor(rnd() * carriers.length)],
            value: (2 + Math.floor(rnd() * 199)) * 1000,
            weight: 50 + Math.floor(rnd() * 4951),
            shipDate,
            eta,
            warehouseId: warehouses[warehouseIdx].id,
            region: warehouses[warehouseIdx].region
        });
    }

    return shipments;
}

// ---------------------------------------------------------------------------
// Map markers from warehouses
// ---------------------------------------------------------------------------
export function generateWarehouseMarkers(): WarehouseMarker[] {
    return warehouses.map((w) => ({
        latlng: [w.lat, w.lng] as [number, number],
        name: `${w.name} — ${w.city}, ${w.country} (${w.utilization}% utilized)`
    }));
}

// ---------------------------------------------------------------------------
// Warehouse descriptions for map tool
// ---------------------------------------------------------------------------
export function warehouseDescriptions(): string {
    return warehouses
        .map(
            (w) =>
                `${w.name} (${w.city}, ${w.country}, ${w.region}) at [${w.lat}, ${w.lng}], capacity ${w.utilization}%`
        )
        .join('; ');
}
