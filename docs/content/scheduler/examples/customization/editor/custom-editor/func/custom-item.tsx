import * as React from 'react';
import { SchedulerEditItem, SchedulerEditItemProps } from '@progress/kendo-react-scheduler';

import { treatments, patients } from './data';

export const EditItemWithDynamicTitle = (props: SchedulerEditItemProps) => {
    return (<SchedulerEditItem {...props} title={generateTitle(props.dataItem)} />);
};

const generateTitle = (dataItem) => {
    const patient = patients.find(p => p.id === dataItem.Patient);
    const treatment = treatments.find(t => t.value === dataItem.Treatment);

    return `${patient && patient.name} - ${treatment && treatment.text}`;
};
