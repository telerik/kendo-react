import * as React from 'react';
import { TextBox } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { eyeIcon, eyeSlashIcon } from '@progress/kendo-svg-icons';

const App = () => {
  const [value, setValue] = React.useState('');
  const [textboxType, setTextboxType] = React.useState('password');
  const [iconName, setIconName] = React.useState(eyeIcon);

  const handleClick = () => {
    setTextboxType(textboxType === 'password' ? 'text' : 'password');
    setIconName(iconName === eyeIcon ? eyeSlashIcon : eyeIcon);
  };

  const handleChange = (ev) => {
    setValue(ev.target.value);
  };

  return (
    <div>
      <TextBox
        value={value}
        onChange={handleChange}
        type={textboxType}
        suffix={() => (
          <Button svgIcon={iconName} onClick={handleClick} fillMode="flat" />
        )}
      />
    </div>
  );
};

export default App;

