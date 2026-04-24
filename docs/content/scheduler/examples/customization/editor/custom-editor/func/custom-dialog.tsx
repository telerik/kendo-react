import * as React from 'react';
import { Dialog, DialogProps } from '@progress/kendo-react-dialogs';

export const CustomDialog = (props: DialogProps) => {
    return <Dialog {...props} title={'Appointment'} />;
};
