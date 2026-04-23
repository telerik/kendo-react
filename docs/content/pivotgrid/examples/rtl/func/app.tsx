import * as React from 'react';

import {
    PivotGrid,
    PivotGridContainer,
    PivotGridConfigurator,
    usePivotOLAPService,
    PivotGridAxis,
    PivotGridConfiguratorButton
} from '@progress/kendo-react-pivotgrid';
import { Loader } from '@progress/kendo-react-indicators';
import { IntlProvider, load, loadMessages, LocalizationProvider } from '@progress/kendo-react-intl';

import likelySubtags from 'cldr-core/supplemental/likelySubtags.json';
import currencyData from 'cldr-core/supplemental/currencyData.json';
import weekData from 'cldr-core/supplemental/weekData.json';

import numbers from 'cldr-numbers-full/main/es/numbers.json';
import caGregorian from 'cldr-dates-full/main/es/ca-gregorian.json';
import dateFields from 'cldr-dates-full/main/es/dateFields.json';
import timeZoneNames from 'cldr-dates-full/main/es/timeZoneNames.json';

load(likelySubtags, currencyData, weekData, numbers, caGregorian, dateFields, timeZoneNames);

import esMessages from './es.json';
loadMessages(esMessages, 'es');

const defaultColumnAxes: PivotGridAxis[] = [
    { name: ['[Date].[Calendar]'], expand: true },
    { name: ['[Product].[Category]'] }
];

const defaultRowAxes: PivotGridAxis[] = [{ name: ['[Geography].[City]'] }];

const defaultMeasureAxes: PivotGridAxis[] = [{ name: ['[Measures].[Reseller Freight Cost]'] }];

const catalog = 'Adventure Works DW 2008R2';
const cube = 'Adventure Works';
const url = 'https://demos.telerik.com/service/v2/olap/msmdpump.dll';

const App = () => {
    const [locale, setLocale] = React.useState('es');
    const [show, setShow] = React.useState(false);
    const { pivotProps, configuratorProps, state } = usePivotOLAPService({
        catalog,
        cube,
        url,
        defaultRowAxes,
        defaultColumnAxes,
        defaultMeasureAxes
    });

    const handleButtonClick = React.useCallback(() => {
        setShow(!show);
    }, [show]);

    return (
        <div dir="rtl" className="k-rtl">
            <LocalizationProvider language={locale}>
                <IntlProvider locale={locale}>
                    <PivotGridContainer>
                        <PivotGrid {...pivotProps} style={{ height: 700 }} />
                        {show && <PivotGridConfigurator {...configuratorProps} />}
                        <PivotGridConfiguratorButton onClick={handleButtonClick} />
                        {state.loading && (
                            <Loader
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%,-50%)'
                                }}
                                size="large"
                                type={'converging-spinner'}
                            />
                        )}
                    </PivotGridContainer>
                </IntlProvider>
            </LocalizationProvider>
        </div>
    );
};

export default App;
