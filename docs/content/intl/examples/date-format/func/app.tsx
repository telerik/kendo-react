import React from 'react';
import {
    IntlProvider,
    load,
    useInternationalization,
} from '@progress/kendo-react-intl';
import likelySubtags from 'cldr-core/supplemental/likelySubtags.json';
import weekData from 'cldr-core/supplemental/weekData.json';
import enCaGregorian from 'cldr-dates-full/main/en/ca-gregorian.json';
import deCaGregorian from 'cldr-dates-full/main/de/ca-gregorian.json';
import bgCaGregorian from 'cldr-dates-full/main/bg/ca-gregorian.json';

// Load the necessary CLDR data for the locales
load(likelySubtags, weekData, enCaGregorian, deCaGregorian, bgCaGregorian);

const App: React.FC = () => {
    const dateValue: Date = new Date(2000, 10, 6);

    return (
        <div>
            <IntlProvider locale="en">
                <div style={{ marginBottom: '1em' }}>
                    <h5>Format 2000-11-06 using 'd'</h5>
                    <div style={{ fontSize: '1.2em' }}>
                        Result:
                        <strong>
                            <FormattedDate value={dateValue} format="d" />
                        </strong>
                    </div>
                </div>
            </IntlProvider>

            <IntlProvider locale="de">
                <div style={{ marginBottom: '1em' }}>
                    <h5>Format 2000-11-06 using 'y.M.d'</h5>
                    <div style={{ fontSize: '1.2em' }}>
                        Result:
                        <strong>
                            <FormattedDate value={dateValue} format="y.M.d" />
                        </strong>
                    </div>
                </div>
            </IntlProvider>

            <IntlProvider locale="bg">
                <div style={{ marginBottom: '1em' }}>
                    <h5>Format 2000-11-06 using "EEEE, d.MM.y" (Bulgarian locale)</h5>
                    <div style={{ fontSize: '1.2em' }}>
                        Result:
                        <strong>
                            <FormattedDate value={dateValue} format="EEEE, d.MM.y" />
                        </strong>
                    </div>
                </div>
            </IntlProvider>
        </div>
    );
};

const FormattedDate: React.FC<{ value: Date; format: string }> = ({
    value,
    format,
}) => {
    const intl = useInternationalization();
    return <em>{intl.formatDate(value, format)}</em>;
};

export default App;
