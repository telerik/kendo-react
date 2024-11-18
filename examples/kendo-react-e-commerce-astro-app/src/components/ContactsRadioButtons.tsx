import * as React from 'react';
import { RadioButton, RadioButtonChangeEvent } from '@progress/kendo-react-inputs';
import { useStore } from '@nanostores/react';
import { selectedLanguage } from '../helpers/languageStore';
import enMessages from '../data/messages/en';
import frMessages from '../data/messages/fr';
import esMessages from '../data/messages/es';

const translations = {
  en: enMessages,
  fr: frMessages,
  es: esMessages,
};

const ContactsRadioButtons: React.FC = () => {
    const language = useStore(selectedLanguage);
    const t = translations[language]; 

    const [selectedValue, setSelectedValue] = React.useState('first');

    const handleChange = React.useCallback(
        (e: RadioButtonChangeEvent) => {
            setSelectedValue(e.value);
        },
        [setSelectedValue]
    );

    return (
      <div className="k-d-flex k-gap-4">
        <RadioButton
          name="group1"
          value="new"
          checked={selectedValue === 'new'}
          label={t.radioButtons.new} 
          onChange={handleChange}
        />
        <br />
        <RadioButton
          name="group2"
          value="existing"
          checked={selectedValue === 'existing'}
          label={t.radioButtons.existing} 
          onChange={handleChange}
        />
        <br />
        <RadioButton
          name="group3"
          value="just curious"
          checked={selectedValue === 'just curious'}
          label={t.radioButtons.justCurious} 
          onChange={handleChange}
        />
      </div>
    );
}

export default ContactsRadioButtons;
