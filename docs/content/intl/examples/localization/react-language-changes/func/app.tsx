import * as React from 'react';

import { loadMessages, LocalizationProvider } from '@progress/kendo-react-intl';

import { Chooser } from './Chooser';
import { Message } from './Message';
import { 
    messages, 
    todaysMessages, 
    yesterdaysMessageKey, 
    tomorrowsMessageKey
} from './messages';

const languages = [ 'en', 'es', 'bg' ];

const defaultMessages = {
    [yesterdaysMessageKey]: 'Yesterday was a good day!',
    [todaysMessages]: 'Today is a good day as well!',
    [tomorrowsMessageKey]: 'Tomorrow will be even better!'
};

loadMessages(messages['es'], 'es');
loadMessages(messages['bg'], 'bg');

const App = () => {
    const [language, setLanguage] = React.useState<string>('en');

    const handleChange = React.useCallback(
        (event: React.ChangeEvent<HTMLSelectElement>) => {
            setLanguage(event.target.value);
        },
        []
    )

    return (
    <div>
      <Chooser options={languages} value={language} onChange={handleChange} label="Select language" />
      <LocalizationProvider language={language} >
        <div>
          <Message messageKey={yesterdaysMessageKey} defaultMessage={defaultMessages[yesterdaysMessageKey]} />
          <Message messageKey={todaysMessages} defaultMessage={defaultMessages[todaysMessages]} />
          <Message messageKey={tomorrowsMessageKey} defaultMessage={defaultMessages[tomorrowsMessageKey]} />
        </div>
      </LocalizationProvider>
    </div>
    )
}

export default App;
