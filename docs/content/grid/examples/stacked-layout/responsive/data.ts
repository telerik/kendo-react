export interface Employee {
    id: number;
    fullName: string;
    jobTitle: string;
    country: string;
    isOnline: string;
    rating: number;
    target: number;
    budget: number;
}

export const employees: Employee[] = [
    {
        id: 1,
        fullName: 'Nancy Davolio',
        jobTitle: 'Sales Representative',
        country: 'USA',
        isOnline: 'Online',
        rating: 4,
        target: 85,
        budget: 52000
    },
    {
        id: 2,
        fullName: 'Andrew Fuller',
        jobTitle: 'Vice President, Sales',
        country: 'USA',
        isOnline: 'Offline',
        rating: 5,
        target: 92,
        budget: 78000
    },
    {
        id: 3,
        fullName: 'Janet Leverling',
        jobTitle: 'Sales Representative',
        country: 'USA',
        isOnline: 'Online',
        rating: 4,
        target: 78,
        budget: 48000
    },
    {
        id: 4,
        fullName: 'Margaret Peacock',
        jobTitle: 'Sales Representative',
        country: 'USA',
        isOnline: 'Online',
        rating: 3,
        target: 65,
        budget: 45000
    },
    {
        id: 5,
        fullName: 'Steven Buchanan',
        jobTitle: 'Sales Manager',
        country: 'UK',
        isOnline: 'Offline',
        rating: 4,
        target: 88,
        budget: 65000
    },
    {
        id: 6,
        fullName: 'Michael Suyama',
        jobTitle: 'Sales Representative',
        country: 'UK',
        isOnline: 'Online',
        rating: 4,
        target: 72,
        budget: 42000
    },
    {
        id: 7,
        fullName: 'Robert King',
        jobTitle: 'Sales Representative',
        country: 'UK',
        isOnline: 'Online',
        rating: 3,
        target: 68,
        budget: 44000
    },
    {
        id: 8,
        fullName: 'Laura Callahan',
        jobTitle: 'Inside Sales Coordinator',
        country: 'USA',
        isOnline: 'Offline',
        rating: 4,
        target: 80,
        budget: 55000
    }
];
