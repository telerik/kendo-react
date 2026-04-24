import * as React from 'react';

import { Toolbar, ToolbarSeparator, Button, ButtonGroup } from '@progress/kendo-react-buttons';
import {
    boldIcon,
    italicIcon,
    underlineIcon,
    alignLeftIcon,
    alignCenterIcon,
    alignRightIcon,
    alignJustifyIcon,
    cutIcon,
    copyIcon,
    clipboardIcon
} from '@progress/kendo-svg-icons';
import { ScrollConfigurator } from './ScrollConfigurator';
import { Slider } from '@progress/kendo-react-inputs';

const App = () => {
    const [scrollButtons, setScrollButtons] = React.useState<'auto' | 'visible' | 'hidden' | undefined>('auto');
    const [scrollButtonsPosition, setScrollButtonsPosition] = React.useState<'split' | 'start' | 'end' | undefined>(
        'split'
    );
    const [buttonScrollSpeed, setButtonScrollSpeed] = React.useState<number>(100);
    const [toolbarWidth, setToolbarWidth] = React.useState<number>(60);

    const handleToolbarWidthChange = (event: any) => {
        setToolbarWidth(event.value);
    };

    return (
        <React.Fragment>
            <ScrollConfigurator
                scrollButtons={scrollButtons}
                onScrollButtonsChange={setScrollButtons}
                scrollButtonsPosition={scrollButtonsPosition}
                onScrollButtonsPosition={setScrollButtonsPosition}
                buttonScrollSpeed={buttonScrollSpeed}
                onButtonScrollSpeed={setButtonScrollSpeed}
            />
            <Slider
                style={{ width: '100%', display: 'block' }}
                buttons={false}
                min={0}
                max={100}
                largeStep={1}
                value={toolbarWidth}
                onChange={handleToolbarWidthChange}
            ></Slider>
            <Toolbar
                overflow="scroll"
                scrollButtons={scrollButtons}
                scrollButtonsPosition={scrollButtonsPosition}
                buttonScrollSpeed={buttonScrollSpeed}
                style={{ width: `${toolbarWidth}%` }}
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
                    <Button
                        className="k-toolbar-button"
                        svgIcon={alignCenterIcon}
                        title="Align Center"
                        togglable={true}
                    >
                        Center
                    </Button>
                    <Button className="k-toolbar-button" svgIcon={alignRightIcon} title="Align Right" togglable={true}>
                        Right
                    </Button>
                    <Button
                        className="k-toolbar-button"
                        svgIcon={alignJustifyIcon}
                        title="Align Justify"
                        togglable={true}
                    >
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
        </React.Fragment>
    );
};
export default App;
