import * as React from 'react';
import {
  MultiSelect,
  MultiSelectChangeEvent,
} from '@progress/kendo-react-dropdowns';

const App = () => {
  const [value, setValue] = React.useState<string[]>([]);
  const sizes: string[] = [
    'X-Small',
    'Small',
    'Medium',
    'Large',
    'X-Large',
    '2X-Large',
  ];

  const handleChange = (event: MultiSelectChangeEvent) => {
    const target = (event.nativeEvent?.target as HTMLElement) ?? null;

    // Safety: if no DOM target, just trust Kendo's next value (covers programmatic clear)
    if (!target) {
      if (Array.isArray(event.value)) setValue(event.value as string[]);
      return;
    }

    if (target.tagName === 'LI' || target.parentElement?.tagName === 'LI') {
      const li = target.tagName === 'LI' ? target : target.parentElement!;
      const ul = li.parentElement;
      if (!ul) return;

      const itemIndex = Array.from(ul.children).indexOf(li);
      if (itemIndex >= 0) {
        setValue([...value, sizes[itemIndex]]);
      }
      return;
    }

    const chipEl = target.closest?.('.k-chip') as HTMLElement | null;
    if (chipEl && chipEl.parentElement) {
      const chipIndex = Array.from(chipEl.parentElement.children).indexOf(
        chipEl
      );
      if (chipIndex >= 0) {
        const next = [...value];
        next.splice(chipIndex, 1);
        setValue(next);
      }
      return;
    }

    if (Array.isArray(event.value)) {
      setValue(event.value as string[]);
    }
  };

  return (
    <div>
      <div>T-shirt sizes:</div>
      <MultiSelect
        data={sizes}
        value={value}
        onChange={handleChange}
        style={{ width: '300px' }}
        placeholder="Please select ..."
      />
    </div>
  );
};

export default App;
