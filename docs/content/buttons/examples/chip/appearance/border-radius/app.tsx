import React from 'react';
import { Chip } from '@progress/kendo-react-buttons';
import { homeIcon, starIcon, globeIcon } from '@progress/kendo-svg-icons';

import './styles.css';

const App = () => {
    return (
        <div>
            <div>
                <Chip
                    text={'Small Rounded'}
                    value={'small rounded chip'}
                    svgIcon={homeIcon}
                    rounded={'small'}
                    themeColor={'info'}
                />
                <Chip
                    text={'Medium Rounded'}
                    value={'medium rounded chip'}
                    svgIcon={starIcon}
                    rounded={'medium'}
                    themeColor={'base'}
                />
                <Chip
                    text={'Large Rounded'}
                    value={'large rounded chip'}
                    svgIcon={globeIcon}
                    rounded={'large'}
                    themeColor={'success'}
                />
                <Chip
                    text={'None Rounded'}
                    value={'none rounded chip'}
                    svgIcon={homeIcon}
                    rounded={'none'}
                    themeColor={'warning'}
                />
            </div>
            <div>
                <Chip
                    text={'Small Rounded'}
                    value={'small rounded chip'}
                    svgIcon={homeIcon}
                    rounded={'small'}
                    themeColor={'info'}
                    fillMode={'outline'}
                />
                <Chip
                    text={'Medium Rounded'}
                    value={'medium rounded chip'}
                    svgIcon={starIcon}
                    rounded={'medium'}
                    themeColor={'base'}
                    fillMode={'outline'}
                />
                <Chip
                    text={'Large Rounded'}
                    value={'large rounded chip'}
                    svgIcon={globeIcon}
                    rounded={'large'}
                    themeColor={'success'}
                    fillMode={'outline'}
                />
                <Chip
                    text={'None Rounded'}
                    value={'none rounded chip'}
                    svgIcon={homeIcon}
                    rounded={'none'}
                    themeColor={'warning'}
                    fillMode={'outline'}
                />
            </div>
        </div>
    );
};

export default App;
