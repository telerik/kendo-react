import * as React from 'react';

import { Toolbar, Button, ButtonGroup } from '@progress/kendo-react-buttons';
import { Label } from '@progress/kendo-react-labels';
import { boldIcon, italicIcon, underlineIcon } from '@progress/kendo-svg-icons';

const App = () => {
    return (
        <div className="row">
            <div className="col-12 col-sm-4 mb-4">
                <Label>Small</Label>
                <Toolbar size="small">
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
                </Toolbar>
            </div>
            <div className="col-12 col-sm-4 mb-4">
                <Label>Medium</Label>
                <Toolbar size="medium">
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
                </Toolbar>
            </div>
            <div className="col-12 col-sm-4 mb-4">
                <Label>Large</Label>
                <Toolbar size="large">
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
                </Toolbar>
            </div>
        </div>
    );
};
export default App;
