import * as React from 'react';

import { Toolbar, ToolbarSeparator, Button, ButtonGroup } from '@progress/kendo-react-buttons';
import { Label } from '@progress/kendo-react-labels';
import {
    boldIcon,
    italicIcon,
    underlineIcon,
    alignLeftIcon,
    alignCenterIcon,
    alignRightIcon,
    alignJustifyIcon
} from '@progress/kendo-svg-icons';

const App = () => {
    const fillModes: Array<'solid' | 'flat' | 'outline' | null> = ['solid', 'flat', 'outline', null];

    return (
        <div className="k-d-flex k-flex-col k-gap-6">
            {/* Section 1: Fill mode applied to both toolbar and buttons */}
            <section>
                <h4 className="k-h4 k-mb-4">Fill mode applied both to the Toolbar and its tools</h4>
                <div className="row">
                    {fillModes.map((fillMode) => (
                        <div key={fillMode || 'null'} className="col-12 col-sm-6 mb-4">
                            <Label>
                                {fillMode === null ? 'Null' : fillMode.charAt(0).toUpperCase() + fillMode.slice(1)}
                            </Label>
                            <Toolbar fillMode={fillMode}>
                                <ButtonGroup>
                                    <Button
                                        className="k-toolbar-button"
                                        fillMode={fillMode}
                                        svgIcon={boldIcon}
                                        title="Bold"
                                        togglable={true}
                                    />
                                    <Button
                                        className="k-toolbar-button"
                                        fillMode={fillMode}
                                        svgIcon={italicIcon}
                                        title="Italic"
                                        togglable={true}
                                    />
                                    <Button
                                        className="k-toolbar-button"
                                        fillMode={fillMode}
                                        svgIcon={underlineIcon}
                                        title="Underline"
                                        togglable={true}
                                    />
                                </ButtonGroup>
                                <ToolbarSeparator />
                                <ButtonGroup>
                                    <Button
                                        className="k-toolbar-button"
                                        fillMode={fillMode}
                                        svgIcon={alignLeftIcon}
                                        title="Align Left"
                                        togglable={true}
                                    />
                                    <Button
                                        className="k-toolbar-button"
                                        fillMode={fillMode}
                                        svgIcon={alignCenterIcon}
                                        title="Align Center"
                                        togglable={true}
                                    />
                                    <Button
                                        className="k-toolbar-button"
                                        fillMode={fillMode}
                                        svgIcon={alignRightIcon}
                                        title="Align Right"
                                        togglable={true}
                                    />
                                    <Button
                                        className="k-toolbar-button"
                                        fillMode={fillMode}
                                        svgIcon={alignJustifyIcon}
                                        title="Align Justify"
                                        togglable={true}
                                    />
                                </ButtonGroup>
                            </Toolbar>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 2: Fill mode applied to toolbar only */}
            <section>
                <h4 className="k-h4 k-mb-4">Fill mode applied to the Toolbar only</h4>
                <div className="row">
                    {fillModes.map((fillMode) => (
                        <div key={fillMode || 'null'} className="col-12 col-sm-6 mb-4">
                            <Label>
                                {fillMode === null ? 'Null' : fillMode.charAt(0).toUpperCase() + fillMode.slice(1)}
                            </Label>
                            <Toolbar fillMode={fillMode}>
                                <ButtonGroup>
                                    <Button
                                        className="k-toolbar-button"
                                        svgIcon={boldIcon}
                                        title="Bold"
                                        togglable={true}
                                    />
                                    <Button
                                        className="k-toolbar-button"
                                        svgIcon={italicIcon}
                                        title="Italic"
                                        togglable={true}
                                    />
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
                            </Toolbar>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};
export default App;
