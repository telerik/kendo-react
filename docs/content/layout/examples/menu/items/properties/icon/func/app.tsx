import * as React from 'react';

import { Menu } from '@progress/kendo-react-layout';
import { fileIcon, filePdfIcon, folderIcon, imageIcon } from '@progress/kendo-svg-icons';

const items = [
    {
        text: 'My Web Site',
        svgIcon: folderIcon,
        items: [
            {
                text: 'images',
                svgIcon: folderIcon,
                items: [
                    { text: 'logo.png', svgIcon: imageIcon },
                    { text: 'body-back.png', svgIcon: imageIcon },
                    { text: 'my-photo.png', svgIcon: imageIcon },
                ],
            },
            {
                text: 'resources',
                svgIcon: folderIcon,
                items: [
                    {
                        text: 'pdf',
                        svgIcon: folderIcon,
                        items: [
                            { text: 'prices.pdf', svgIcon: filePdfIcon },
                            { text: 'brochure.pdf', svgIcon: filePdfIcon },
                        ],
                    },
                    { text: 'zip', svgIcon: folderIcon },
                ],
            },
            { text: 'about.html', svgIcon: fileIcon },
            { text: 'contacts.html', svgIcon: fileIcon },
            { text: 'index.html', svgIcon: fileIcon },
            { text: 'portfolio.html', svgIcon: fileIcon },
        ],
    },
];
const App = () => {
    return <Menu items={items} />;
}
export default App;
