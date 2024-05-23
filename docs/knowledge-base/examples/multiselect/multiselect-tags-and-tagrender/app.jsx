import * as React from 'react';

import { MultiSelect } from '@progress/kendo-react-dropdowns';
const sizes = ['X-Small', 'Small', 'Medium'];
const App = () => {
  const [value, setValue] = React.useState([]);
  const selected = value.length;
  const [tags, setTags] = React.useState([
    {
      text: `${selected} tasks`,
      data: [...value],
    },
  ]);

  const tagRender = (tagData, li) => {
    let icon;
    if (tagData.text === 'X-Small') {
      icon = <span className="k-icon k-font-icon k-i-gear k-icon-xs"></span>;
    } else if (tagData.text === 'Small') {
      icon = <span className="k-icon k-font-icon k-i-pencil"></span>;
    } else if (tagData.text === 'Medium') {
      icon = <span class="k-icon k-font-icon k-i-clock"></span>;
    } else {
      icon = null;
    }
    return React.cloneElement(li, li.props, [
      <span key={sizes.indexOf(tagData.data[0])} style={{ color: 'red' }}>
        {icon ? icon : tagData.text}
      </span>,
      li.props.children,
    ]);
  };

  const handleChange = React.useCallback(
    (event) => {
      const close = event.syntheticEvent.target.classList[0] === 'k-icon';
      if (!(event.value.length < value.length) && !close) {
        tags[0].text = `${event.value.length} task`;
        setTags((tags) => [
          ...tags,
          {
            text: `${event.value[event.value.length - 1]}`,
            data: [...value],
          },
        ]);
      } else {
        const deletedEl = event.nativeEvent.target.outerText;
        setTags((tags) => tags.filter((tag) => tag.text !== deletedEl));
      }

      setValue(event.value);
    },
    [tags]
  );

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://unpkg.com/@progress/kendo-font-icons/dist/index.css"
      />
      <div>T-shirt sizes:</div>
      <MultiSelect
        style={{
          width: '300px',
        }}
        data={sizes}
        value={value}
        onChange={handleChange}
        placeholder="Please select ..."
        tags={tags}
        tagRender={tagRender}
      />
      <style>
        {`
        .k-chip-action.k-chip-remove-action {
          display: none;
        }
        `}
      </style>
    </div>
  );
};
export default App;
