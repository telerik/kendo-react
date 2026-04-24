import * as React from 'react';

import { Menu } from '@progress/kendo-react-layout';

const items = [
    { text: 'Item1', disabled: true, items: [{ text: 'Item1.1' }] },
    { text: 'Item2', disabled: true }
];
const App = () => {
    return <Menu items={items} />;
}
export default App;
