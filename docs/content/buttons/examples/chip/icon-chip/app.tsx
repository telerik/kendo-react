import * as React from 'react';
import { Chip } from '@progress/kendo-react-buttons';

interface Items {
  text: string;
  value: string;
  icon?: string;
}

const items: Items[] = [
  {
    text: 'Export to PDF',
    value: 'exportToPdf',
    icon: 'file-pdf',
  },
  {
    text: 'Export to Word',
    value: 'exportToWord',
    icon: 'file-word',
  },
];

const App = () => {
  return (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      <link
        rel="stylesheet"
        href="https://unpkg.com/@progress/kendo-font-icons/dist/index.css"
      />
      {items.map((item) => (
        <Chip key={item.value} text={item.text} icon={item.icon} />
      ))}
    </div>
  );
};

export default App;
