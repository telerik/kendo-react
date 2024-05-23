import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useLocalization, loadMessages } from '@progress/kendo-react-intl';
import { Chooser } from './Chooser';
import {
  messages,
  todaysMessages,
  yesterdaysMessageKey,
  tomorrowsMessageKey,
} from './messages';
import { Message } from './Message'; 
//Extended LocalizationProvider for handling ${variable} syntax within messages
import MyLocalizationProvider from './MyLocalizationProvider';

const App = () => { 
  //State variable that will be used within the messages
  const [userName, setUserName] = React.useState('some user name');
  const [language, setLanguage] = React.useState('en');
  const languages = ['en', 'es', 'bg'];

  const defaultMessages = {
    [yesterdaysMessageKey]: 'Yesterday was a good day!',
    [todaysMessages]:
      'Today is a good day as well! Some count: ${this.userName}',
    [tomorrowsMessageKey]: 'Tomorrow will be even better!',
  };

  loadMessages(messages['es'], 'es');
  loadMessages(messages['bg'], 'bg');

  const handleChange = React.useCallback((event) => {
    setLanguage(event.target.value);
  }, []);

  return (
    <div>
      <Chooser
        options={languages}
        value={language}
        onChange={handleChange}
        label="Select language"
      />
      <button
        onClick={() => {
          setUserName('UserName' + Math.floor(Math.random() * 1000));
        }}
      >
        Change username
      </button>
      <MyLocalizationProvider
        language={language}
        contextParameters={{ userName: userName }}
      >
        <div>
          <Message
            messageKey={yesterdaysMessageKey}
            defaultMessage={defaultMessages[yesterdaysMessageKey]}
          />
          <Message
            messageKey={todaysMessages}
            defaultMessage={defaultMessages[todaysMessages]}
          />
          <Message
            messageKey={tomorrowsMessageKey}
            defaultMessage={defaultMessages[tomorrowsMessageKey]}
          />
        </div>
      </MyLocalizationProvider>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('my-app'));
