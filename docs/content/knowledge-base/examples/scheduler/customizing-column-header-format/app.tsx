import * as React from 'react';
import {
    Scheduler,
    DayView,
    WeekView,
    TimelineView,
    type DateHeaderCellProps,
    type TimeHeaderCellProps
} from '@progress/kendo-react-scheduler';
import { useInternationalization } from '@progress/kendo-react-intl';

function CustomDateHeaderCell(props: DateHeaderCellProps) {
    const intl = useInternationalization();

    const text = intl.formatDate(props.date, 'EEE, d.M.');

    const { date, format, start, end, ...domProps } = props as any;

    return <div {...domProps}>{text}</div>;
}

function CustomTimeHeaderCell(props: TimeHeaderCellProps) {
    const intl = useInternationalization();

    const text = intl.formatDate((props as any).date, 'HH:mm');

    const { format, ...domProps } = props as any;

    return <div {...domProps}>{text} aaaa</div>;
}

export default function App() {
    return (
        <Scheduler data={[]} defaultDate={new Date()}>
            <DayView dateHeaderCell={CustomDateHeaderCell} timeHeaderCell={CustomTimeHeaderCell} />
            <WeekView dateHeaderCell={CustomDateHeaderCell} timeHeaderCell={CustomTimeHeaderCell} />
            <TimelineView dateHeaderCell={CustomDateHeaderCell} timeHeaderCell={CustomTimeHeaderCell} />
        </Scheduler>
    );
}
