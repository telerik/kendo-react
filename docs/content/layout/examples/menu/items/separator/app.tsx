import * as React from 'react';

import { Menu } from '@progress/kendo-react-layout';

const items = [
	{ text: 'Item1', items: [{ text: 'Item1.1' }, { text: 'Item1.2' }, { separator: true }, { text: 'Item1.3' }] },
	{ text: 'Item2' },
	{ separator: true },
	{ text: 'Item3' }
];
const App = () => {
	return <Menu items={items} />;
};
export default App;
