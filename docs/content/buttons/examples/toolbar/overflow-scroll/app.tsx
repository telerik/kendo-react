import * as React from 'react';

import { Button, ButtonGroup, Toolbar, ToolbarSeparator } from '@progress/kendo-react-buttons';
import {
    alignCenterIcon,
    alignJustifyIcon,
    alignLeftIcon,
    alignRightIcon,
    boldIcon,
    clipboardIcon,
    copyIcon,
    cutIcon,
    italicIcon,
    underlineIcon
} from '@progress/kendo-svg-icons';
import { useConfigurator } from '@docs-shared/configurator';

const App = () => {
    const config = useConfigurator({
        sections: [
            {
                label: 'Scroll Buttons',
                controls: [
                    {
                        type: 'segmented',
                        name: 'scrollButtons',
                        options: [
                            { label: 'Auto', value: 'auto' },
                            { label: 'Visible', value: 'visible' },
                            { label: 'Hidden', value: 'hidden' }
                        ],
                        defaultValue: 'auto'
                    }
                ]
            },
            {
                label: 'Scroll Buttons Position',
                controls: [
                    {
                        type: 'segmented',
                        name: 'scrollButtonsPosition',
                        options: [
                            { label: 'Split', value: 'split' },
                            { label: 'Start', value: 'start' },
                            { label: 'End', value: 'end' }
                        ],
                        defaultValue: 'split'
                    }
                ]
            },
            {
                label: 'Scroll Speed (px)',
                controls: [
                    {
                        type: 'slider',
                        name: 'buttonScrollSpeed',
                        min: 100,
                        max: 500,
                        step: 100,
                        defaultValue: 100
                    }
                ]
            },
            {
                label: 'Toolbar Width (%)',
                controls: [
                    {
                        type: 'slider',
                        name: 'toolbarWidth',
                        min: 40,
                        max: 100,
                        step: 10,
                        defaultValue: 60
                    }
                ]
            }
        ]
    }) as {
        scrollButtons: 'auto' | 'visible' | 'hidden';
        scrollButtonsPosition: 'split' | 'start' | 'end';
        buttonScrollSpeed: number;
        toolbarWidth: number;
    };

    return (
        <Toolbar
            overflow="scroll"
            scrollButtons={config.scrollButtons}
            scrollButtonsPosition={config.scrollButtonsPosition}
            buttonScrollSpeed={config.buttonScrollSpeed}
            style={{ width: `${config.toolbarWidth}%` }}
        >
            <ButtonGroup>
                <Button className="k-toolbar-button" svgIcon={boldIcon} title="Bold" togglable={true} />
                <Button className="k-toolbar-button" svgIcon={italicIcon} title="Italic" togglable={true} />
                <Button className="k-toolbar-button" svgIcon={underlineIcon} title="Underline" togglable={true} />
            </ButtonGroup>
            <ToolbarSeparator />
            <ButtonGroup>
                <Button className="k-toolbar-button" svgIcon={alignLeftIcon} title="Align Left" togglable={true}>
                    Left
                </Button>
                <Button className="k-toolbar-button" svgIcon={alignCenterIcon} title="Align Center" togglable={true}>
                    Center
                </Button>
                <Button className="k-toolbar-button" svgIcon={alignRightIcon} title="Align Right" togglable={true}>
                    Right
                </Button>
                <Button className="k-toolbar-button" svgIcon={alignJustifyIcon} title="Align Justify" togglable={true}>
                    Justify
                </Button>
            </ButtonGroup>
            <ToolbarSeparator />
            <Button className="k-toolbar-button" svgIcon={cutIcon} title="Cut">
                Cut
            </Button>
            <Button className="k-toolbar-button" svgIcon={copyIcon} title="Copy">
                Copy
            </Button>
            <Button className="k-toolbar-button" svgIcon={clipboardIcon} title="Paste">
                Paste
            </Button>
        </Toolbar>
    );
};

export default App;
