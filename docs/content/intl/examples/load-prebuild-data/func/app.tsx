import * as React from 'react';

import likelySubtags from 'cldr-core/supplemental/likelySubtags.json';
import currencyData from 'cldr-core/supplemental/currencyData.json';
import weekData from 'cldr-core/supplemental/weekData.json';

import bgNumbers from 'cldr-numbers-full/main/bg/numbers.json';
import bgLocalCurrency from 'cldr-numbers-full/main/bg/currencies.json';
import bgCaGregorian from 'cldr-dates-full/main/bg/ca-gregorian.json';
import bgDateFields from 'cldr-dates-full/main/bg/dateFields.json';

import deNumbers from 'cldr-numbers-full/main/de/numbers.json';
import deLocalCurrency from 'cldr-numbers-full/main/de/currencies.json';
import deCaGregorian from 'cldr-dates-full/main/de/ca-gregorian.json';
import deDateFields from 'cldr-dates-full/main/de/dateFields.json';

import { IntlProvider, load } from '@progress/kendo-react-intl';
import { DateFormatter } from './DateFormatter';

load(
    likelySubtags,
    currencyData,
    weekData,
    bgLocalCurrency,
    bgNumbers,
    bgCaGregorian,
    bgDateFields,
    deLocalCurrency,
    deNumbers,
    deCaGregorian,
    deDateFields
);

const App = () => {
    const [date] = React.useState<Date>(new Date());

    return (
    <div className="row">
      <div className="col-xs-12 col-sm-4 example-col">
        Date: <strong>{date.toString()}</strong>
      </div>
      <div className="col-xs-12 col-sm-4 example-col">
        Formatted using the default <code>bg</code> locale:
        <strong>
          <IntlProvider locale="bg-BG">
            <DateFormatter date={date} />
          </IntlProvider>
        </strong>
      </div>
      <div className="col-xs-12 col-sm-4 example-col">
        Formatted using the <code>de</code> locale:
        <strong>
          <IntlProvider locale="de">
            <DateFormatter date={date} />
          </IntlProvider>
        </strong>
      </div>
    </div>
    );
}

export default App;
