import * as React from 'react';
import { FloatingLabel, Label } from '@progress/kendo-react-labels';
import { Input, InputChangeEvent } from '@progress/kendo-react-inputs';

import { IntlProvider, loadMessages, LocalizationProvider } from '@progress/kendo-react-intl';

import esMessages from './shared-la-es';
// @ts-expect-error
import { Button } from '@progress/kendo-react-buttons';
import { FieldWrapper, FormElement } from '@progress/kendo-react-form';
loadMessages([], 'es');

const App = () => {
    const [locale, setLocale] = React.useState('en');
    const [lastName, setLastName] = React.useState<string | undefined>(undefined);

    const toggleLocale = () => {
        setLocale(locale === 'en' ? 'es' : 'en');
    };

    return (
        <>
            <div className="example-config">
                <Button onClick={toggleLocale}>{locale === 'en' ? 'Change to Spanish' : 'Change to English'}</Button>
            </div>
            <LocalizationProvider language={locale}>
                <IntlProvider locale={locale === 'en' ? 'en' : 'es'}>
                    <FormElement>
                        <FieldWrapper>
                            <Label optional={true} editorId={'firstName'}>
                                Label
                            </Label>
                            <Input id={'firstName'} />
                        </FieldWrapper>
                        <FieldWrapper>
                            <FloatingLabel
                                optional={true}
                                label={'Floating Label'}
                                editorId={'lastName'}
                                editorValue={lastName}
                            >
                                <Input
                                    id={'lastName'}
                                    value={lastName}
                                    onChange={(e: InputChangeEvent) => setLastName(e.value)}
                                />
                            </FloatingLabel>
                        </FieldWrapper>
                    </FormElement>
                </IntlProvider>
            </LocalizationProvider>
        </>
    );
};

export default App;
