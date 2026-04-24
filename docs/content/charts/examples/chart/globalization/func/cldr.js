import { load } from '@progress/kendo-react-intl';

import likelySubtags from 'cldr-core/supplemental/likelySubtags.json';
import currencyData from 'cldr-core/supplemental/currencyData.json';
import weekData from 'cldr-core/supplemental/weekData.json';

import bgNumbers from 'cldr-numbers-full/main/bg/numbers.json';
import bgCurrencies from 'cldr-numbers-full/main/bg/currencies.json';
import bgCaGregorian from 'cldr-dates-full/main/bg/ca-gregorian.json';
import bgDataFields from 'cldr-dates-full/main/bg/dateFields.json';
import bgTimeZoneNames from 'cldr-dates-full/main/bg/timeZoneNames.json';

function loadCldr() {
    load(likelySubtags, currencyData, weekData, bgNumbers, bgCurrencies, bgCaGregorian, bgDataFields, bgTimeZoneNames);
}

export { loadCldr };
