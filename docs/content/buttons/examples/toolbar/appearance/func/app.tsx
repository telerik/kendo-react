import * as React from 'react';

import { Toolbar, Button, ButtonGroup, ToolbarProps } from '@progress/kendo-react-buttons';
import { boldIcon, italicIcon, underlineIcon } from '@progress/kendo-svg-icons';
import { useConfigurator, sizeOptions, fillModeOptions } from '@docs-shared/configurator';

const App = () => {
    const config = useConfigurator({
        sections: [
            {
                label: 'Size',
                controls: [
                    {
                        type: 'segmented',
                        name: 'size',
                        options: sizeOptions(['default', 'small', 'medium', 'large']),
                        defaultValue: 'default'
                    }
                ]
            },
            {
                label: 'Fill Mode',
                controls: [
                    {
                        type: 'segmented',
                        name: 'fillMode',
                        options: fillModeOptions(['default', 'solid', 'flat', 'outline']),
                        defaultValue: 'default'
                    }
                ]
            }
        ]
    }) as {
        size: ToolbarProps['size'];
        fillMode: ToolbarProps['fillMode'];
    };

    return (
        <div className="example-wrapper-center">
            <Toolbar size={config.size} fillMode={config.fillMode}>
                <ButtonGroup>
                    <Button className="k-toolbar-button" svgIcon={boldIcon} title="Bold" togglable={true} />
                    <Button className="k-toolbar-button" svgIcon={italicIcon} title="Italic" togglable={true} />
                    <Button className="k-toolbar-button" svgIcon={underlineIcon} title="Underline" togglable={true} />
                </ButtonGroup>
            </Toolbar>
        </div>
    );
};

export default App;
