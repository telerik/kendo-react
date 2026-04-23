import * as React from 'react';

import {
    Toolbar,
    ToolbarSeparator,
    ChipList,
    Button,
    ButtonGroup,
    DropDownButton,
    DropDownButtonItem,
    FloatingActionButton,
    SplitButton,
    SplitButtonItem,
    SpeechToTextButton,
    SmartPasteButton
} from '@progress/kendo-react-buttons';
import {
    alignCenterIcon,
    alignJustifyIcon,
    alignLeftIcon,
    alignRightIcon,
    boldIcon,
    checkIcon,
    clipboardHtmlIcon,
    clipboardIcon,
    clipboardMarkdownIcon,
    clipboardTextIcon,
    copyIcon,
    cutIcon,
    editToolsIcon,
    gearIcon,
    italicIcon,
    searchIcon,
    underlineIcon
} from '@progress/kendo-svg-icons';

const App = () => {
    return (
        <div className="example-wrapper">
            <div className="example-row">
                <div className="example-col">
                    <p>Button</p>
                    <Button svgIcon={editToolsIcon} dir="rtl">
                        Edit &nbsp;
                    </Button>
                    &nbsp;
                    <Button svgIcon={searchIcon} dir="rtl" themeColor={'primary'}>
                        Search &nbsp;
                    </Button>
                </div>
                <div className="example-col">
                    <p>ButtonGroup</p>
                    <ButtonGroup dir="rtl">
                        <Button>Option A</Button>
                        <Button>Option B</Button>
                        <Button>Option C</Button>
                    </ButtonGroup>
                </div>
            </div>
            <div className="example-row">
                <div className="example-col">
                    <p>DropDownButton</p>
                    <DropDownButton text="User Settings" svgIcon={gearIcon} dir="rtl">
                        <DropDownButtonItem text="My Profile" />
                        <DropDownButtonItem text="Friend Requests" />
                        <DropDownButtonItem text="Account Settings" />
                        <DropDownButtonItem text="Support" />
                        <DropDownButtonItem text="Log Out" />
                    </DropDownButton>
                </div>
                <div className="example-col">
                    <p>SplitButton</p>
                    <SplitButton text="Paste" svgIcon={clipboardIcon} dir="rtl">
                        <SplitButtonItem text="Keep Text Only" svgIcon={clipboardTextIcon} />
                        <SplitButtonItem text="Paste as HTML" svgIcon={clipboardHtmlIcon} />
                        <SplitButtonItem text="Paste Markdown" svgIcon={clipboardMarkdownIcon} />
                        <SplitButtonItem text="Set Default Paste" />
                    </SplitButton>
                </div>
            </div>
            <div className="example-row">
                <div className="example-col">
                    <p>Toolbar</p>
                    <Toolbar dir="rtl">
                        <ButtonGroup>
                            <Button className="k-toolbar-button" svgIcon={boldIcon} title="Bold" togglable={true} />
                            <Button className="k-toolbar-button" svgIcon={italicIcon} title="Italic" togglable={true} />
                            <Button
                                className="k-toolbar-button"
                                svgIcon={underlineIcon}
                                title="Underline"
                                togglable={true}
                            />
                        </ButtonGroup>
                        <ToolbarSeparator />
                        <ButtonGroup>
                            <Button
                                className="k-toolbar-button"
                                svgIcon={alignLeftIcon}
                                title="Align Left"
                                togglable={true}
                            />
                            <Button
                                className="k-toolbar-button"
                                svgIcon={alignCenterIcon}
                                title="Align Center"
                                togglable={true}
                            />
                            <Button
                                className="k-toolbar-button"
                                svgIcon={alignRightIcon}
                                title="Align Right"
                                togglable={true}
                            />
                            <Button
                                className="k-toolbar-button"
                                svgIcon={alignJustifyIcon}
                                title="Align Justify"
                                togglable={true}
                            />
                        </ButtonGroup>
                        <ToolbarSeparator />
                        <Button className="k-toolbar-button" svgIcon={cutIcon} title="Cut" dir="rtl">
                            Cut
                        </Button>
                        <ToolbarSeparator />
                        <Button className="k-toolbar-button" svgIcon={copyIcon} title="Copy" dir="rtl">
                            Copy
                        </Button>
                        <ToolbarSeparator />
                        <Button className="k-toolbar-button" svgIcon={clipboardIcon} title="Paste" dir="rtl">
                            Paste
                        </Button>
                    </Toolbar>
                </div>
            </div>
            <div className="example-row">
                <div className="example-col">
                    <p>Chip and ChipList</p>
                    <ChipList
                        dir="rtl"
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
                    <SpeechToTextButton dir="rtl">Click to speak</SpeechToTextButton>
                </div>
                <div className="example-col">
                    <p>SmartPasteButton</p>
                    <SmartPasteButton dir="rtl">Smart Paste</SmartPasteButton>
                </div>
            </div>
            <div className="example-row">
                <div className="example-col">
                    <FloatingActionButton svgIcon={checkIcon} text="Floating Action Button" dir="rtl" />
                </div>
            </div>
        </div>
    );
};

export default App;
