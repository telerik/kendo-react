const patients = [
    {
        id: 1,
        name: 'Alex Morgan',
        diagnosis: 'Type 2 Diabetes',
        treatmentPlanStatus: 'Active',
        medicationCount: 3,
        riskIndicators: 'Fall Risk',
        recentLabResults: {
            hbA1c: '7.8%',
            fastingGlucose: '145 mg/dL'
        }
    },
    {
        id: 2,
        name: 'Sam Patel',
        diagnosis: 'Chronic Kidney Disease',
        treatmentPlanStatus: 'Under Evaluation',
        medicationCount: 4,
        riskIndicators: 'Infection Risk',
        recentLabResults: {
            egfr: '55',
            potassium: '5.1 mmol/L'
        }
    },
    {
        id: 3,
        name: 'Taylor Kim',
        diagnosis: 'Asthma',
        treatmentPlanStatus: 'Active',
        medicationCount: 2,
        riskIndicators: 'None',
        recentLabResults: {
            fev1Percent: '82%',
            o2Sat: '98%'
        }
    },
    {
        id: 4,
        name: 'Riley Carter',
        diagnosis: 'Rheumatoid Arthritis',
        treatmentPlanStatus: 'Adjusting',
        medicationCount: 3,
        riskIndicators: 'Infection Risk',
        recentLabResults: {
            crp: '12 mg/L',
            esr: '28 mm/hr'
        }
    },
    {
        id: 5,
        name: 'Finley Rivera',
        diagnosis: 'Chronic Hepatitis B',
        treatmentPlanStatus: 'Stable',
        medicationCount: 2,
        riskIndicators: 'None',
        recentLabResults: {
            hbvDna: '530 IU/mL',
            alt: '52 U/L'
        }
    },
    {
        id: 6,
        name: 'Casey Nguyen',
        diagnosis: 'Coronary Artery Disease',
        treatmentPlanStatus: 'Active',
        medicationCount: 5,
        riskIndicators: 'Fall Risk',
        recentLabResults: {
            ldl: '110 mg/dL',
            troponin: 'Normal'
        }
    },
    {
        id: 7,
        name: "Jamie Singh",
        diagnosis: "Hyperthyroidism",
        treatmentPlanStatus: "Stable",
        medicationCount: 2,
        riskIndicators: "None",
        recentLabResults: {
            TSH: "0.1 mIU/L",
            FreeT4: "2.3 ng/dL"
        }
    }
];

export { patients };
