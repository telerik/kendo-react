import { MaskedTextBox } from '@progress/kendo-react-inputs';

const PhoneNumber: React.FC = () => {
  return (
    <MaskedTextBox mask="(999) 000-00-00-00" defaultValue="(359) 884-12-33-21" />
  );
};

export default PhoneNumber;