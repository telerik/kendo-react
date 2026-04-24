import * as React from 'react';

import {
    Toolbar,
    ToolbarItem,
    ToolbarSeparator,
    Button,
    ButtonGroup,
    DropDownButton,
    DropDownButtonItem,
    SplitButton,
    SplitButtonItem
} from '@progress/kendo-react-buttons';
import {
    alignCenterIcon,
    alignJustifyIcon,
    alignLeftIcon,
    alignRightIcon,
    boldIcon,
    clipboardHtmlIcon,
    clipboardIcon,
    clipboardTextIcon,
    copyIcon,
    cutIcon,
    imageIcon,
    italicIcon,
    tableIcon,
    underlineIcon
} from '@progress/kendo-svg-icons';

const ToolbarContainer = () => {
    return (
        <Toolbar>
            <ButtonGroup>
                <Button className="k-toolbar-button" svgIcon={boldIcon} title="Bold" togglable={true} />
                <Button className="k-toolbar-button" svgIcon={italicIcon} title="Italic" togglable={true} />
                <Button className="k-toolbar-button" svgIcon={underlineIcon} title="Underline" togglable={true} />
            </ButtonGroup>
            <ButtonGroup>
                <Button className="k-toolbar-button" svgIcon={alignLeftIcon} title="Align Left" togglable={true} />
                <Button className="k-toolbar-button" svgIcon={alignCenterIcon} title="Align Center" togglable={true} />
                <Button className="k-toolbar-button" svgIcon={alignRightIcon} title="Align Right" togglable={true} />
                <Button
                    className="k-toolbar-button"
                    svgIcon={alignJustifyIcon}
                    title="Align Justify"
                    togglable={true}
                />
            </ButtonGroup>
            <SplitButton className="k-toolbar-split-button" text="Insert">
                <SplitButtonItem svgIcon={imageIcon} text="Image" />
                <SplitButtonItem svgIcon={tableIcon} text="Table" />
            </SplitButton>
            <ToolbarSeparator />
            <Button className="k-toolbar-button" svgIcon={cutIcon} title="Cut">
                Cut
            </Button>
            <Button className="k-toolbar-button" svgIcon={copyIcon} title="Copy">
                Copy
            </Button>
            <ToolbarItem>
                <DropDownButton text="Paste" svgIcon={clipboardIcon} popupSettings={{ popupClass: 'k-toolbar-popup' }}>
                    <DropDownButtonItem svgIcon={clipboardTextIcon} text="Plain Text" />
                    <DropDownButtonItem svgIcon={clipboardHtmlIcon} text="HTML" />
                </DropDownButton>
            </ToolbarItem>
        </Toolbar>
    );
};
export default ToolbarContainer;
