import * as React from 'react';

import { Menu } from '@progress/kendo-react-layout';

const App = () => {
    let items = [
        { text: "First item" },
        { text: "Second item", items: [{ text: "Second item child item" }] }
    ];

    return (
      <Menu items={items} />
    );
}
export default App;
