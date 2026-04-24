import * as React from 'react';

import { ChipList, Chip, ChipProps } from '@progress/kendo-react-buttons';

interface Food {
  text: string;
  value: string;
  avatar?: {};
}

const food: Food[] = [
  {
    text: 'Tiramisu',
    value: 'tiramisu',
    avatar: {
      image:
        'https://demos.telerik.com/kendo-react-ui/assets/dropdowns/products/4.jpg',
      imageAlt: 'Tiramisu',
      rounded: 'circle',
    },
  },
  {
    text: 'Salmon sandwich',
    value: 'salmon sandwich',
    avatar: {
      image:
        'https://demos.telerik.com/kendo-react-ui/assets/dropdowns/products/17.jpg',
      imageAlt: 'Salmon sandwich',
      rounded: 'circle',
    },
  },
  {
    text: 'Sushi',
    value: 'sushi',
    avatar: {
      image:
        'https://demos.telerik.com/kendo-react-ui/assets/dropdowns/products/40.jpg',
      imageAlt: 'Sushi',
      rounded: 'circle',
    },
  },
];

const App = () => {
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
                    .color {
                        color: grey;
                }`,
        }}
      />
      <ChipList
        data={food}
        selection={'single'}
        chip={(props: ChipProps) => (
          <Chip {...props} avatar={props.dataItem.avatar} />
        )}
      />
    </div>
  );
};

export default App;
