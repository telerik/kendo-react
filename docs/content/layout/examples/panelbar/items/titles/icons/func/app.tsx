import * as React from 'react'

import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';

import './styles.css';
import { fileIcon, filePdfIcon, folderIcon, imageIcon } from '@progress/kendo-svg-icons';

const App = () => {
    return (
        <div className="panelbar-wrapper">
            <PanelBar>
                <PanelBarItem title="My Web Site" svgIcon={folderIcon} expanded={true}>
                    <PanelBarItem title="images" svgIcon={folderIcon} expanded={true}>
                        <PanelBarItem title="logo.png" svgIcon={imageIcon} />
                        <PanelBarItem title="my-photo.png" svgIcon={imageIcon} />
                    </PanelBarItem>
                    <PanelBarItem title="resources" svgIcon={folderIcon} expanded={true}>
                        <PanelBarItem title="pdf" svgIcon={folderIcon} expanded={true}>
                            <PanelBarItem title="prices.pdf" svgIcon={filePdfIcon} />
                            <PanelBarItem title="brochure.pdf" svgIcon={filePdfIcon} />
                        </PanelBarItem>
                        <PanelBarItem title="zip" svgIcon={folderIcon} />
                    </PanelBarItem>
                    <PanelBarItem title="about.html" svgIcon={fileIcon} />
                    <PanelBarItem title="contacts.html" svgIcon={fileIcon} />
                    <PanelBarItem title="index.html" svgIcon={fileIcon} />
                    <PanelBarItem title="portfolio.html" svgIcon={fileIcon} />
                </PanelBarItem>
            </PanelBar>
        </div>
    );
};

export default App
