import * as React from 'react';
import { MaskedTextBox } from '@progress/kendo-react-inputs';
import { DropDownList } from '@progress/kendo-react-dropdowns';

const App = () => {

    const countries = [
        { name: 'Andorra', code: '🇦🇩', mask: '000-000-000', prefix: '+376' },
        { name: 'Germany', code: '🇩🇪', mask: '0000-0000000', prefix: '+49' },
    ];

    const defaultCountry = countries[0];

    const [selectedCountry, setSelectedCountry] = React.useState(defaultCountry);
    const [mask, setMask] = React.useState(defaultCountry.mask);
    const [value, setValue] = React.useState('');
    const [formattedValue, setFormattedValue] = React.useState('');

    const handleCountryChange = (event) => {
        const selected = countries.find(
            (country) => country.code === event.target.value
        );
        setSelectedCountry(selected);
        setMask(selected ? selected.mask : '');
        setValue('');
        setFormattedValue('');
    };

    const handleOnChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
        const cleanValue = newValue.replace(/[^0-9]/g, '');
        if (selectedCountry) {
            setFormattedValue(`${selectedCountry.prefix}${cleanValue}`);
        } else {
            setFormattedValue(newValue);
        }
    };

    return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <DropDownList
          style={{ width: '100px' }}
          data={countries.map((country) => country.code)}
          defaultValue={defaultCountry.code}
          onChange={handleCountryChange}
        />
        <MaskedTextBox
          width={200}
          mask={mask}
          value={value}
          onChange={handleOnChange}
          style={{ width: '300px' }}
        />
      </div>
      <div>{formattedValue && <p>Formatted Value: {formattedValue}</p>}</div>
    </div>
    );
};

export default App;
