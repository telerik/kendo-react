import * as React from 'react';
import { Label } from '@progress/kendo-react-labels';
import { useInternationalization } from '@progress/kendo-react-intl';

export const DateFormatter = () => {
    const intl = useInternationalization();

    return (
        <div className="col-xs-12 col-sm-6 example-col">
            <Label>Locale date:</Label> {intl.formatDate(new Date(2000, 10, 6), 'EEEE, d.MM.y')}
        </div>
    );
};
