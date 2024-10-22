import * as React from 'react';
import { TextBox, TextBoxChangeEvent } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { eyeIcon, eyeSlashIcon } from '@progress/kendo-svg-icons';

const PasswordInput: React.FC = () => {
  const [value, setValue] = React.useState<string>('');
  const [textboxType, setTextboxType] = React.useState<'password' | 'text'>('password');
  const [iconName, setIconName] = React.useState<typeof eyeIcon | typeof eyeSlashIcon>(eyeIcon);

  const handleClick = () => {
    setTextboxType(textboxType === 'password' ? 'text' : 'password');
    setIconName(iconName === eyeIcon ? eyeSlashIcon : eyeIcon);
  };

  const handleChange = (ev: TextBoxChangeEvent) => {
    setValue(ev.target.value as string);
};

  return (
    <div>
      <TextBox
        style={{ width: 150 }}
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

export default PasswordInput;
