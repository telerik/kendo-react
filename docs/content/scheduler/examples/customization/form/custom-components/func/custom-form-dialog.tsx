import * as React from 'react';
import { Dialog, DialogProps } from '@progress/kendo-react-dialogs';
import './styles.css';

const Title = ({ title }) => {
    return <span>{title}(custom)</span>;
};

export const CustomFormDialog = (props: DialogProps) => {
    return <Dialog {...props} title={<Title title={props.title} />} width={800} className="custom-scheduler-dialog" />;
};
