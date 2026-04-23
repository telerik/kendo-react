import * as React from 'react';

import { ChipList } from '@progress/kendo-react-buttons';
import { facebookIcon, pinterestIcon, redditIcon, SVGIcon, youtubeIcon } from '@progress/kendo-svg-icons';

interface Channel {
    text: string;
    value: string;
    svgIcon: SVGIcon;
}

const channels: Channel[] = [
    {
        text: 'Facebook',
        value: 'facebook',
        svgIcon: facebookIcon
    },
    {
        text: 'Reddit',
        value: 'reddit',
        svgIcon: redditIcon
    },
    {
        text: 'Pinterest',
        value: 'pinterest',
        svgIcon: pinterestIcon
    },
    {
        text: 'Youtube',
        value: 'youtube',
        svgIcon: youtubeIcon
    }
];

const App = () => {
    return <ChipList defaultData={channels} defaultValue={['Facebook', 'facebook']} selection="multiple" />;
};

export default App;
