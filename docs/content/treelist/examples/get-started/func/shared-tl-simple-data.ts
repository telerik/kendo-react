const data: any[] = [
    {
        id: 1,
        name: "Daryl Sweeney",
        title: "Chief Executive Officer",
        phone: "(555) 924-9726",
        managerId: null,
        expanded: true,
        employees: [
            {
                id: 2,
                name: "Guy Wooten",
                title: "Chief Technical Officer",
                phone: "(438) 738-4935",
                managerId: 1
            }
        ]
    },
    {
        id: 32,
        name: "Buffy Weber",
        title: "VP, Engineering",
        phone: "(699) 838-6121",
        managerId: null
    }
];

export default data;
