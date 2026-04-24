import * as React from 'react';
import { Label } from '@progress/kendo-react-labels';
import { useInternationalization } from '@progress/kendo-react-intl';

export const CurrencyFormatter = () => {
    const intl = useInternationalization();

    return (
        <div className="col-xs-12 col-sm-6 example-col">
            <Label>Locale currency:</Label> {intl.formatNumber(100, 'c')}
        </div>
    );
};
