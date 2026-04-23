import * as React from 'react';

import { SplitButton } from '@progress/kendo-react-buttons';

interface Item {
    text: string;
}

const itemRender = (props: any) => {
    return <em>{`action #${props.itemIndex}: ${props.item.text}`}</em>;
};
const items: Item[] = [{ text: 'Save as' }, { text: 'Upload to drive' }];
const App = () => {
    return (
        <div>
            <SplitButton itemRender={itemRender} items={items} text="Save" />
        </div>
    );
};
export default App;
