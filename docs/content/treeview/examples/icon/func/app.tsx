import * as React from 'react';
import { TreeView } from '@progress/kendo-react-treeview';

import {
    filePdfIcon,
    folderIcon,
    html5Icon,
    imageIcon,
} from '@progress/kendo-svg-icons';
const tree = [
    {
        text: 'My Documents',
        iconField: folderIcon,
        expanded: true,
        items: [
            {
                text: 'KendoReact Project',
                iconField: folderIcon,
                expanded: true,
                items: [
                    {
                        text: 'about.html',
                        iconField: html5Icon,
                    },
                    {
                        text: 'index.html',
                        iconField: html5Icon,
                    },
                    {
                        text: 'logo.png',
                        iconField: imageIcon,
                    },
                ],
            },
            {
                text: 'New Web Site',
                iconField: folderIcon,
                expanded: true,
                items: [
                    {
                        text: 'mockup.jpg',
                        iconField: imageIcon,
                    },
                    {
                        text: 'Research.pdf',
                        iconField: filePdfIcon,
                    },
                ],
            },
            {
                text: 'Reports',
                iconField: folderIcon,
                expanded: true,
                items: [
                    {
                        text: 'February.pdf',
                        iconField: filePdfIcon,
                    },
                    {
                        text: 'March.pdf',
                        iconField: filePdfIcon,
                    },
                    {
                        text: 'April.pdf',
                        iconField: filePdfIcon,
                    },
                ],
            },
        ],
    },
];

const App = () => {
    return (
    <>
      <TreeView data={tree} iconField={'iconField'} />
    </>
    );
};

export default App;
