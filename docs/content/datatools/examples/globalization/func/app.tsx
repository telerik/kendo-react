import * as React from 'react';
import {
    Pager,
    Filter,
    Operators,
    TextFilter,
    NumericFilter,
    BooleanFilter,
    DateFilter,
    FilterChangeEvent,
    PageChangeEvent
} from '@progress/kendo-react-data-tools';

import { IntlProvider, load, LocalizationProvider, loadMessages } from '@progress/kendo-react-intl';

import likelySubtags from 'cldr-core/supplemental/likelySubtags.json';
import currencyData from 'cldr-core/supplemental/currencyData.json';
import weekData from 'cldr-core/supplemental/weekData.json';

import numbers from 'cldr-numbers-full/main/es/numbers.json';
import currencies from 'cldr-numbers-full/main/es/currencies.json';
import caGregorian from 'cldr-dates-full/main/es/ca-gregorian.json';
import dateFields from 'cldr-dates-full/main/es/dateFields.json';
import timeZoneNames from 'cldr-dates-full/main/es/timeZoneNames.json';

import { CompositeFilterDescriptor } from '@progress/kendo-data-query';

load(likelySubtags, currencyData, weekData, numbers, currencies, caGregorian, dateFields, timeZoneNames);
import esMessages from './shared-dt-es';
loadMessages(esMessages, 'es');
import products from './shared-dt-products';

interface PageInterface {
    skip: number;
    take: number;
}

const initialFilter: CompositeFilterDescriptor = {
    logic: 'and',
    filters: [{ field: 'FirstOrderedOn', operator: 'lt', value: new Date(2010, 11, 2) }]
};

const App = () => {
    const [page, setPage] = React.useState<PageInterface>({ skip: 0, take: 5 });
    const [filter, setFilter] = React.useState(initialFilter);

    const onFilterChange = (event: FilterChangeEvent) => {
        setFilter(event.filter);
        console.log(event.filter);
    };

    const handlePageChange = (event: PageChangeEvent) => {
        const { skip, take } = event;
        setPage({ skip, take });

        console.log(`Page Change: skip ${skip}, take ${take}`);
        console.log('Current Products: ', products.slice(skip, skip + take));
    };

    return (
        <React.Fragment>
            <LocalizationProvider language="es">
                <Pager
                    skip={page.skip}
                    take={page.take}
                    total={products.length}
                    buttonCount={5}
                    info={true}
                    type="numeric"
                    pageSizes={[5, 10, 20]}
                    previousNext={true}
                    onPageChange={handlePageChange}
                />
            </LocalizationProvider>
            <br />
            <LocalizationProvider language="es">
                <IntlProvider locale="es">
                    <Filter
                        fields={[
                            { name: 'ProductName', label: 'Nombre', filter: TextFilter, operators: Operators.text },
                            { name: 'UnitPrice', label: 'Precio', filter: NumericFilter, operators: Operators.numeric },
                            {
                                name: 'Discontinued',
                                label: 'Interrumpido',
                                filter: BooleanFilter,
                                operators: Operators.boolean
                            },
                            {
                                name: 'FirstOrderedOn',
                                label: 'Primero ordenado',
                                filter: DateFilter,
                                operators: Operators.date
                            }
                        ]}
                        onChange={onFilterChange}
                        value={filter}
                    />
                </IntlProvider>
            </LocalizationProvider>
        </React.Fragment>
    );
};

export default App;
