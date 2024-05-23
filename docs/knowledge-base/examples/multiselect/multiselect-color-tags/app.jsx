import * as React from 'react';
import { MultiSelect } from '@progress/kendo-react-dropdowns';

const sizes = [
  'X-Small - Event',
  'Small - Visit',
  'Medium - Visit',
  'Large - Event',
  'X-Large - Visit',
  '2X-Large - Event',
];

const App = () => {
  const [value, setValue] = React.useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const tagRender = (tagData, li) => {
    const tagText = tagData.data[0];
    let backgroundColor = '';

    if (tagText.includes('Event')) {
      backgroundColor = 'red';
    } else if (tagText.includes('Visit')) {
      backgroundColor = '#599e0e';
    }

    const tagStyle = {
      backgroundColor: backgroundColor,
      display: 'inline-block',
      padding: '2px 8px',
      borderRadius: '4px',
      color: '#fff',
    };

    return React.cloneElement(
      li,
      {
        ...li.props,
        style: {
          ...li.props.style,
          backgroundColor: backgroundColor,
        },
      },
      [
        <span key={tagText} className="custom-tag" style={tagStyle}>
          {tagText}
        </span>,
        li.props.children,
      ]
    );
  };
  return (
    <div>
      <div>T-shirt sizes:</div>
      <MultiSelect
        style={{ width: '300px' }}
        data={sizes}
        value={value}
        onChange={handleChange}
        tagRender={tagRender}
        placeholder="Please select ..."
      />
    </div>
  );
};

export default App;