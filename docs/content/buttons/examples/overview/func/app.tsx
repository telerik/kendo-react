import * as React from 'react';
import {
    Button,
    ButtonGroup,
    DropDownButton,
    DropDownButtonItem,
    FloatingActionButton,
    SplitButton,
    SplitButtonItem,
    Toolbar,
    ToolbarSeparator,
    ChipList,
    SpeechToTextButton,
    SmartPasteButton
} from '@progress/kendo-react-buttons';

import {
    clipboardIcon,
    clipboardTextIcon,
    clipboardHtmlIcon,
    clipboardMarkdownIcon,
    boldIcon,
    italicIcon,
    underlineIcon,
    cutIcon,
    copyIcon,
    alignLeftIcon,
    alignRightIcon,
    alignCenterIcon,
    alignJustifyIcon,
    checkIcon,
    userIcon
} from '@progress/kendo-svg-icons';

import './styles.css';

const App = () => {
    return (
        <div className="example-wrapper">
            <div className="example-row">
                <div className="example-col">
                    <p>Button</p>
                    <Button className="action-button">Default</Button>
                    <Button className="action-button" themeColor={'primary'}>
                        Primary
                    </Button>
                    <Button className="action-button" disabled={true}>
                        Disabled
                    </Button>
                </div>
                <div className="example-col">
                    <p>ButtonGroup</p>
                    <ButtonGroup>
                        <Button className="action-button" togglable={true}>
                            Option A
                        </Button>
                        <Button className="action-button" togglable={true}>
                            Option B
                        </Button>
                        <Button className="action-button" togglable={true}>
                            Option C
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
            <div className="example-row">
                <div className="example-col">
                    <p>SplitButton</p>
                    <SplitButton text="Paste" svgIcon={clipboardIcon}>
                        <SplitButtonItem text="Keep Text Only" svgIcon={clipboardTextIcon} />
                        <SplitButtonItem text="Paste as HTML" svgIcon={clipboardHtmlIcon} />
                        <SplitButtonItem text="Paste Markdown" svgIcon={clipboardMarkdownIcon} />
                        <SplitButtonItem text="Set Default Paste" />
                    </SplitButton>
                </div>
                <div className="example-col">
                    <p>DropDownButton</p>
                    <DropDownButton text="User Settings" svgIcon={userIcon}>
                        <DropDownButtonItem text="My Profile" />
                        <DropDownButtonItem text="Friend Requests" />
                        <DropDownButtonItem text="Account Settings" />
                        <DropDownButtonItem text="Support" />
                        <DropDownButtonItem text="Log Out" />
                    </DropDownButton>
                </div>
            </div>
            <div className="example-row">
                <div className="example-col">
                    <p>Toolbar</p>
                    <Toolbar>
                        <ButtonGroup>
                            <Button
                                className="k-toolbar-button action-button"
                                svgIcon={boldIcon}
                                title="Bold"
                                togglable={true}
                            />
                            <Button
                                className="k-toolbar-button action-button"
                                svgIcon={italicIcon}
                                title="Italic"
                                togglable={true}
                            />
                            <Button
                                className="k-toolbar-button action-button"
                                svgIcon={underlineIcon}
                                title="Underline"
                                togglable={true}
                            />
                        </ButtonGroup>
                        <ToolbarSeparator />
                        <ButtonGroup>
                            <Button
                                className="k-toolbar-button action-button"
                                svgIcon={alignLeftIcon}
                                title="Align Left"
                                togglable={true}
                            />
                            <Button
                                className="k-toolbar-button action-button"
                                svgIcon={alignCenterIcon}
                                title="Align Center"
                                togglable={true}
                            />
                            <Button
                                className="k-toolbar-button action-button"
                                svgIcon={alignRightIcon}
                                title="Align Right"
                                togglable={true}
                            />
                            <Button
                                className="k-toolbar-button action-button"
                                svgIcon={alignJustifyIcon}
                                title="Align Justify"
                                togglable={true}
                            />
                        </ButtonGroup>
                        <ToolbarSeparator />
                        <Button className="k-toolbar-button action-button" svgIcon={cutIcon} title="Cut">
                            Cut
                        </Button>
                        <ToolbarSeparator />
                        <Button className="k-toolbar-button action-button" svgIcon={copyIcon} title="Copy">
                            Copy
                        </Button>
                        <ToolbarSeparator />
                        <Button className="k-toolbar-button action-button" svgIcon={clipboardIcon} title="Paste">
                            Paste
                        </Button>
                    </Toolbar>
                </div>
            </div>
            <div className="example-row">
                <div className="example-col">
                    <p>Chip and ChipList</p>
                    <ChipList
                        selection="single"
                        data={[
                            { text: 'Berry', value: 'berry' },
                            { text: 'Apple', value: 'apple' },
                            { text: 'Kiwi', value: 'kiwi' },
                            { text: 'Banana', value: 'banana' }
                        ]}
                    />
                </div>
                <div className="example-col">
                    <p>SpeechToTextButton</p>
                    <SpeechToTextButton />
                </div>
                <div className="example-col">
                    <p>SmartPasteButton</p>
                    <SmartPasteButton>Smart Paste</SmartPasteButton>
                </div>
            </div>
            <div className="example-row">
                <div className="example-col">
                    <FloatingActionButton svgIcon={checkIcon} text="Floating Action Button" />
                </div>
            </div>
        </div>
    );
};

export default App;
