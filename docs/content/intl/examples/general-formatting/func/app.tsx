import React from 'react';
import {
    IntlProvider,
    load,
    useInternationalization,
} from '@progress/kendo-react-intl';
import likelySubtags from 'cldr-core/supplemental/likelySubtags.json';
import currencyData from 'cldr-core/supplemental/currencyData.json';
import weekData from 'cldr-core/supplemental/weekData.json';
import enNumbers from 'cldr-numbers-full/main/en/numbers.json';
import enCurrencies from 'cldr-numbers-full/main/en/currencies.json';
import enCaGregorian from 'cldr-dates-full/main/en/ca-gregorian.json';
import bgNumbers from 'cldr-numbers-full/main/bg/numbers.json';
import bgCurrencies from 'cldr-numbers-full/main/bg/currencies.json';
import bgCaGregorian from 'cldr-dates-full/main/bg/ca-gregorian.json';


load(
    likelySubtags,
    currencyData,
    weekData,
    enNumbers,
    enCurrencies,
    enCaGregorian,
    bgNumbers,
    bgCurrencies,
    bgCaGregorian
);

const App: React.FC = () => {
    const formatData = [new Date(), 10.5];
    const newDate = new Date();

    return (
        <div>
            <IntlProvider locale="en">
                <div style={{ marginBottom: '1em' }}>
                    <h5>Format Date and Number</h5>
                    <div style={{ fontSize: '1.2em' }}>
                        Result:
                        <strong>
                            <FormattedText
                                template="Date: {0:d} - Price: {1:c}"
                                values={formatData}
                            />
                        </strong>
                    </div>
                </div>
            </IntlProvider>

            <IntlProvider locale="en">
                <div style={{ marginBottom: '1em' }}>
                    <h5>Convert Date to String</h5>
                    <div style={{ fontSize: '1.2em' }}>
                        Result:
                        <strong>
                            <FormattedDate value={newDate} format="d" />
                        </strong>
                    </div>
                </div>
            </IntlProvider>

            <IntlProvider locale="bg">
                <div style={{ marginBottom: '1em' }}>
                    <h5>Convert Number to String</h5>
                    <div style={{ fontSize: '1.2em' }}>
                        Result:
                        <strong>
                            <FormattedNumber value={10.5} format="c" />
                        </strong>
                    </div>
                </div>
            </IntlProvider>
        </div>
    );
};

const FormattedText: React.FC<{ template: string; values: any[] }> = ({
    template,
    values,
}) => {
    const intl = useInternationalization();
    return <em>{intl.format(template, values)}</em>;
};

const FormattedDate: React.FC<{ value: Date; format: string }> = ({
    value,
    format,
}) => {
    const intl = useInternationalization();
    return <em>{intl.toString(value, format)}</em>;
};

const FormattedNumber: React.FC<{ value: number; format: string }> = ({
    value,
    format,
}) => {
    const intl = useInternationalization();
    return <em>{intl.toString(value, format)}</em>;
};

export default App;
