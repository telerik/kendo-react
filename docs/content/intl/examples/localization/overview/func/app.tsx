import * as React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { IntlProvider, LocalizationProvider, loadMessages } from '@progress/kendo-react-intl';

import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';

import esMessages from './messages-es';
import heMessages from './messages-he';

loadMessages(esMessages, 'es-ES');
loadMessages(heMessages, 'he-IL');

interface LanguageOption {
    text: string;
    value: string;
}

const columnTitles: Record<string, Record<string, string>> = {
    'en-US': {
        ProductID: 'ID',
        ProductName: 'Product Name',
        FirstOrderedOn: 'First Ordered On',
        UnitPrice: 'Unit Price'
    },
    'es-ES': {
        ProductID: 'ID',
        ProductName: 'Nombre del producto',
        FirstOrderedOn: 'Primero ordenado en',
        UnitPrice: 'Precio unitario'
    },
    'he-IL': {
        ProductID: 'מזהה מוצר',
        ProductName: 'שם המוצר',
        FirstOrderedOn: 'הוזמן לראשונה בתאריך',
        UnitPrice: 'מחיר ליחידה'
    }
};

const App: React.FC = () => {
    const [locale, setLocale] = React.useState<string>('en-US');
    const [isRtl, setIsRtl] = React.useState<boolean>(false);

    const handleLocaleChange = (event: DropDownListChangeEvent) => {
        const newLocale = event.target.value;
        setLocale(newLocale.value);

        if (newLocale.value === 'he-IL') {
            setIsRtl(true);
        } else {
            setIsRtl(false);
        }
    };

    const languageOptions: LanguageOption[] = [
        { text: 'English', value: 'en-US' },
        { text: 'Español', value: 'es-ES' },
        { text: 'עברית', value: 'he-IL' }
    ];

    const titles = columnTitles[locale] || columnTitles['en-US'];

    return (
        <div>
            <div className="example-config" dir={isRtl ? 'rtl' : 'ltr'}>
                <DropDownList
                    data={languageOptions}
                    textField="text"
                    dataItemKey="value"
                    value={locale}
                    onChange={handleLocaleChange}
                />
            </div>
            <LocalizationProvider language={locale}>
                <IntlProvider locale={locale}>
                    <Grid style={{ height: '420px' }} data={[]}>
                        <Column field="ProductID" title={titles.ProductID} filterable={false} width="70px" />
                        <Column field="ProductName" title={titles.ProductName} />
                        <Column field="FirstOrderedOn" title={titles.FirstOrderedOn} filter="date" format="{0:D}" />
                        <Column field="UnitPrice" title={titles.UnitPrice} filter="numeric" format="{0:c}" />
                    </Grid>
                </IntlProvider>
            </LocalizationProvider>
        </div>
    );
};

export default App;
