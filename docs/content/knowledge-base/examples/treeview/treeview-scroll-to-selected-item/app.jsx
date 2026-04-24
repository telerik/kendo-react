import * as React from 'react';

import { TreeView, processTreeViewItems } from '@progress/kendo-react-treeview';
import { Button } from '@progress/kendo-react-buttons';

const generateTree = () => {
	var data = [];
	for (var i = 0; i < 1000; i++) {
		data.push({ text: 'Item ' + i });
	}
	return data;
};

const App = () => {
	const treeviewRef = React.createRef();
	const [treeDataItems, setData] = React.useState(generateTree());
	const [select, setSelect] = React.useState([]);

	const onItemClick = (event) => {
		setSelect([event.itemHierarchicalIndex]);
	};

	const selectRow = () => {
		let indexToSelect = '70';
		setSelect([indexToSelect]);

		if (treeviewRef.current) {
			scrollToSelectedEl(treeviewRef.current.element);
		}
	};

	const scrollToSelectedEl = (treeViewEl) => {
		setTimeout(() => {
			let element = treeViewEl.getElementsByClassName('k-treeview-leaf k-selected')[0];
			element.scrollIntoView();
		}, 100); //the timeout is needed as the class is available after the item is selected
	};

	return (
		<>
			<Button onClick={selectRow}>Select Row 100</Button>
			<TreeView
				ref={treeviewRef}
				data={processTreeViewItems(treeDataItems, { select })}
				onItemClick={onItemClick}
			/>
		</>
	);
};

export default App;
