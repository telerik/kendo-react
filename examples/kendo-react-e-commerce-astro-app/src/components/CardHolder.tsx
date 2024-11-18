import { TextBox } from '@progress/kendo-react-inputs';
import { useStore } from '@nanostores/react';
import { selectedLanguage } from '../helpers/languageStore';
import { loadMessages, LocalizationProvider } from '@progress/kendo-react-intl';

import enMessages from '../data/messages/en';
import frMessages from '../data/messages/fr';
import esMessages from '../data/messages/es';

loadMessages(enMessages, 'en');
loadMessages(frMessages, 'fr');
loadMessages(esMessages, 'es');

const messages = {
  en: enMessages,
  fr: frMessages,
  es: esMessages,
};

const CardHolder = () => {
  const language = useStore(selectedLanguage);
  const t = messages[language] || messages['en'];

  return (
    <LocalizationProvider language={language}>
      <TextBox placeholder={t.fullNamePlaceholder || 'Full Name'} />
    </LocalizationProvider>
  );
};

export default CardHolder;
