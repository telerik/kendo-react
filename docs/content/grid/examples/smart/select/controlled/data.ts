const ConditionSeverityOptions = ['Mild', 'Moderate', 'Severe', 'Critical', 'N/A'];

const DepartmentOptions = [
    'Anesthesiology',
    'Oncology',
    'Neurology',
    'Intensive Care',
    'ENT',
    'Endocrinology',
    'Emergency',
    'General Medicine',
    'Rheumatology',
    'Nephrology',
    'Gastroenterology',
    'Neurosurgery',
    'Dermatology',
    'Ophthalmology'
];

const StatusOptions = [
    'Critical',
    'Palliative',
    'Under Treatment',
    'Deceased',
    'Awaiting Diagnosis',
    'Discharged',
    'Transferred',
    'Monitoring',
    'In Surgery'
];

type Patient = {
    Id: number;
    PatientName: string;
    Age: number;
    ConditionSeverity: string;
    Department: string;
    Status: string;
    AdmissionDate: Date;
    RiskScore: number;
};

const patients: Patient[] = [
    {
        Id: 1,
        PatientName: 'Marian Koch',
        Age: 38,
        ConditionSeverity: 'Critical',
        Department: 'Anesthesiology',
        Status: 'Critical',
        AdmissionDate: new Date('2025-06-13'),
        RiskScore: 87
    },
    {
        Id: 2,
        PatientName: 'Liam Anderson',
        Age: 70,
        ConditionSeverity: 'Severe',
        Department: 'Oncology',
        Status: 'Palliative',
        AdmissionDate: new Date('2025-06-12'),
        RiskScore: 74
    },
    {
        Id: 3,
        PatientName: 'Mia Davis',
        Age: 29,
        ConditionSeverity: 'Moderate',
        Department: 'Neurology',
        Status: 'Under Treatment',
        AdmissionDate: new Date('2025-06-23'),
        RiskScore: 0
    },
    {
        Id: 4,
        PatientName: 'Tricia Stanton',
        Age: 66,
        ConditionSeverity: 'N/A',
        Department: 'Intensive care',
        Status: 'Deceased',
        AdmissionDate: new Date('2025-6-12'),
        RiskScore: 5
    },
    {
        Id: 5,
        PatientName: 'Isabella Lee',
        Age: 50,
        ConditionSeverity: 'Mild',
        Department: 'ENT',
        Status: 'Awaiting Diagnosis',
        AdmissionDate: new Date('2025-07-02'),
        RiskScore: 22
    },
    {
        Id: 6,
        PatientName: 'James Garcia',
        Age: 33,
        ConditionSeverity: 'Moderate',
        Department: 'Endocrinology',
        Status: 'Under Treatment',
        AdmissionDate: new Date('2025-06-21'),
        RiskScore: 53
    },
    {
        Id: 7,
        PatientName: 'Wilbert Hoeger',
        Age: 72,
        ConditionSeverity: 'Critical',
        Department: 'Emergency',
        Status: 'Under Treatment',
        AdmissionDate: new Date('2025-06-13'),
        RiskScore: 98
    },
    {
        Id: 8,
        PatientName: 'Lucas Brown',
        Age: 45,
        ConditionSeverity: 'Mild',
        Department: 'General Medicine',
        Status: 'Discharged',
        AdmissionDate: new Date('2025-07-02'),
        RiskScore: 18
    },
    {
        Id: 9,
        PatientName: 'Wendell Dach',
        Age: 58,
        ConditionSeverity: 'Severe',
        Department: 'Rheumatology',
        Status: 'Transferred',
        AdmissionDate: new Date('2025-06-22'),
        RiskScore: 79
    },
    {
        Id: 10,
        PatientName: 'Dianne Rippin',
        Age: 64,
        ConditionSeverity: 'Severe',
        Department: 'Nephrology',
        Status: 'Under Treatment',
        AdmissionDate: new Date('2025-06-21'),
        RiskScore: 82
    },
    {
        Id: 11,
        PatientName: 'Sophia Martinez',
        Age: 40,
        ConditionSeverity: 'Moderate',
        Department: 'Gastroenterology',
        Status: 'Monitoring',
        AdmissionDate: new Date('2025-06-22'),
        RiskScore: 4
    },
    {
        Id: 12,
        PatientName: 'Everett Konopelski',
        Age: 47,
        ConditionSeverity: 'Critical',
        Department: 'Neurosurgery',
        Status: 'In Surgery',
        AdmissionDate: new Date('2025-06-12'),
        RiskScore: 99
    },
    {
        Id: 13,
        PatientName: 'Emma Johnson',
        Age: 32,
        ConditionSeverity: 'Moderate',
        Department: 'Dermatology',
        Status: 'Monitoring',
        AdmissionDate: new Date('2025-07-13'),
        RiskScore: 45
    },
    {
        Id: 14,
        PatientName: 'Emma Johnson',
        Age: 28,
        ConditionSeverity: 'Mild',
        Department: 'Ophthalmology',
        Status: 'Monitoring',
        AdmissionDate: new Date('2025-07-14'),
        RiskScore: 38
    },
    {
        Id: 15,
        PatientName: 'Noah Bennett',
        Age: 55,
        ConditionSeverity: 'Severe',
        Department: 'Cardiology',
        Status: 'Under Observation',
        AdmissionDate: new Date('2025-07-15'),
        RiskScore: 61
    },
    {
        Id: 16,
        PatientName: 'Ava Thompson',
        Age: 36,
        ConditionSeverity: 'Moderate',
        Department: 'Pulmonology',
        Status: 'Under Treatment',
        AdmissionDate: new Date('2025-07-16'),
        RiskScore: 49
    },
    {
        Id: 17,
        PatientName: 'Ethan Wright',
        Age: 60,
        ConditionSeverity: 'Critical',
        Department: 'ICU',
        Status: 'Critical',
        AdmissionDate: new Date('2025-07-17'),
        RiskScore: 91
    },
    {
        Id: 18,
        PatientName: 'Olivia Harris',
        Age: 42,
        ConditionSeverity: 'Mild',
        Department: 'ENT',
        Status: 'Discharged',
        AdmissionDate: new Date('2025-07-18'),
        RiskScore: 27
    },
    {
        Id: 19,
        PatientName: 'Benjamin Scott',
        Age: 50,
        ConditionSeverity: 'Severe',
        Department: 'Orthopedics',
        Status: 'Surgery Scheduled',
        AdmissionDate: new Date('2025-07-19'),
        RiskScore: 66
    },
    {
        Id: 20,
        PatientName: 'Charlotte Evans',
        Age: 39,
        ConditionSeverity: 'Moderate',
        Department: 'Neurology',
        Status: 'Under Treatment',
        AdmissionDate: new Date('2025-07-20'),
        RiskScore: 58
    }
];

const addColumnsValues = (columns) => {
    return columns.map((col) => {
        if (col.field === 'ConditionSeverity') {
            return {
                ...col,
                values: ConditionSeverityOptions
            };
        }
        if (col.field === 'Department') {
            return {
                ...col,
                values: DepartmentOptions
            };
        }
        if (col.field === 'Status') {
            return {
                ...col,
                values: StatusOptions
            };
        }
        return col;
    });
};

export { patients, addColumnsValues };
