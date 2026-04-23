import * as React from 'react';

import { MultiSelect, MultiSelectChangeEvent, TagData } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';

import './styles.css';

const sizes = ['Small', 'Medium', 'Large'];

const App = () => {
    const [value, setValue] = React.useState<string[]>(['Medium']);

    const handleChange = (event: MultiSelectChangeEvent) => {
        setValue(event.target.value);
    };

    const tagRender = (
        tagData: TagData,
        li: React.ReactElement<HTMLLIElement, string | React.JSXElementConstructor<any>>
    ) =>
        React.cloneElement(li, li.props, [
            (
                <span key={sizes.indexOf(tagData.data[0])} className="custom-tag">
                    {tagData.data[0][0]}
                </span>
            ) as any,
            li.props.children
        ]);

    return (
        <div>
            <Label editorId="size">Select sizes</Label>
            <br />
            <MultiSelect
                id="size"
                style={{ width: '300px' }}
                data={sizes}
                value={value}
                onChange={handleChange}
                tagRender={tagRender}
                placeholder="e.g. Medium"
            />
        </div>
    );
};

export default App;
