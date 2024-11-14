import * as React from 'react';
import { Input, InputChangeEvent } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { eyeIcon, eyeSlashIcon } from '@progress/kendo-svg-icons';

const EmailInput: React.FC = () => {
 
  return (
    <div>
      <Input placeholder="glen_starcke@email.com"/>
    </div>
  );
};

export default EmailInput;
