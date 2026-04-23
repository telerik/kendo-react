import * as React from 'react';

import { DropDownList } from '@progress/kendo-react-dropdowns';

const categories: string[] = [
    'some text',
    'some longer text',
    'some very long textsome very long textsome very long text'
];

const App = () => {
    const getLongestText = (arr: string[]) =>
        arr.reduce((savedText, text) => (text.length > savedText.length ? text : savedText), '');
    const longest = getLongestText(categories);
    return (
        <DropDownList
            style={{
                width: `${longest.length * 7}px`
            }}
            data={categories}
            defaultValue="some text"
        />
    );
};

export default App;
