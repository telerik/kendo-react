import * as React from 'react';
import { ArcGauge, LinearGauge, RadialGauge } from '@progress/kendo-react-gauges';

import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';

import { IntlProvider } from '@progress/kendo-react-intl';
import { loadCldr } from './cldr';

loadCldr();

const value = 30;

const GaugeContainer = () => {
    const [locale, setLocale] = React.useState('bg-BG');
    const onChange = (event: DropDownListChangeEvent) => {
        setLocale(event.target.value);
    };

    return (
        <div>
            <div className="example-config">
                <Label>Current locale</Label>
                <DropDownList style={{ marginLeft: 5 }} value={locale} onChange={onChange} data={['bg-BG', 'en-US']} />
            </div>
            <IntlProvider locale={locale}>
                <div className="row">
                    <div className="col-sm-12 col-md-2">
                        <LinearGauge pointer={{ value }} scale={{ labels: { format: 'c' } }} />
                    </div>
                    <div className="col-sm-12 col-md-5">
                        <RadialGauge pointer={{ value }} scale={{ labels: { format: 'c' } }} />
                    </div>
                    <div className="col-sm-12 col-md-5">
                        <ArcGauge
                            value={value}
                            scale={{
                                labels: { format: 'c', visible: true },
                                majorTicks: { visible: true },
                                minorTicks: { visible: true }
                            }}
                        />
                    </div>
                </div>
            </IntlProvider>
        </div>
    );
};

export default GaugeContainer;
