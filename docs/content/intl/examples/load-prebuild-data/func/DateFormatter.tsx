import * as React from 'react';
import { useInternationalization } from '@progress/kendo-react-intl';

interface DateFormatterProps {
    date: Date
}

export const DateFormatter = (props: DateFormatterProps) => {
    const intl = useInternationalization();

    return (
    <div>
      <span>{intl.formatDate(props.date, 'EEEE, d.MM.y')}</span>
    </div>
    );
}
