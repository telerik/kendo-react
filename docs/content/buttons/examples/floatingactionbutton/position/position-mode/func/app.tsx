import * as React from 'react';

import { FloatingActionButton, FloatingActionButtonPositionMode } from '@progress/kendo-react-buttons';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { plusIcon } from '@progress/kendo-svg-icons';

interface PositionMode {
    value: FloatingActionButtonPositionMode;
    text: string;
}

const positionModes: PositionMode[] = [
    { value: 'fixed', text: 'Fixed' },
    { value: 'absolute', text: 'Absolute' }
];

const initialPositionValue: FloatingActionButtonPositionMode = 'fixed';

const App = () => {
    const [positionMode, setPositionMode] = React.useState({ value: initialPositionValue, text: 'Fixed' });

    const handleChange = (e: DropDownListChangeEvent) => {
        setPositionMode(e.value);
    };

    return (
        <div className="example" style={{ position: 'relative' }}>
            <DropDownList data={positionModes} textField="text" value={positionMode} onChange={handleChange} />

            <div className="mt-3">
                <p>
                    National Parks protect some of our nation’s most beautiful and remarkable landscapes. There’s no
                    denying that National Parks are a primary go to destination for millions of Americans. However,
                    nearby National Forests often go unnoticed by the millions of visitors driving by on route to some
                    of our nation’s best-known natural landmarks. These surrounding National Forest landscapes can be
                    just as grand. They provide similar vistas, wildlife viewing, and camping options but lack the
                    crowds and expense that come with visiting a National Park. As you're planning your next trip to a
                    National Park - whether it's Yellowstone, Shenandoah, Zion - keep these things in mind:
                </p>
                <ul>
                    <li>Some National Parks require an entrance fee; many National Forest recreation areas do not.</li>
                    <li>
                        Camping in a National Park can be expensive and competitive. Backcountry camping typically
                        requires obtaining additional permits as well. National Forest campgrounds are more economical,
                        less crowded and dispersed or backcountry camping is usually free.
                    </li>
                    <li>
                        Dogs must be leashed or restrained at all times in a National Park and leashes cannot exceed six
                        feet in length.
                    </li>
                    <li>So, this summer be sure to make a stop at our National Parks and our National Forests.</li>
                    <li>NFF Blog post: What are the differences between National Forests and National Parks?</li>
                </ul>
            </div>
            <FloatingActionButton positionMode={positionMode.value} svgIcon={plusIcon} text={'Create New'} />
        </div>
    );
};

export default App;
