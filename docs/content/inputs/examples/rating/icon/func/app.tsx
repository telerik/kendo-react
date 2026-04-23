import * as React from 'react';
import { Rating } from '@progress/kendo-react-inputs';
import { heartIcon } from '@progress/kendo-svg-icons';

const App = () => {
    return (
        <div className="k-d-flex k-justify-content-center k-align-items-center">
            <Rating defaultValue={2} svgIcon={heartIcon} svgIconOutline={heartIcon} />
        </div>
    );
};

export default App;
