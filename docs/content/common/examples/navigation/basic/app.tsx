import * as React from 'react';

import { ButtonGroup, Button } from '@progress/kendo-react-buttons';
import { Navigation } from '@progress/kendo-react-common';
import {
    boldIcon,
    italicIcon,
    underlineIcon,
    alignLeftIcon,
    alignRightIcon,
    alignCenterIcon
} from '@progress/kendo-svg-icons';

const App = () => {
    const root = React.useRef<HTMLDivElement>(null);

    const navigation = React.useMemo(
        () =>
            new Navigation({
                root,
                selectors: ['.k-button-group > button'],
                keyboardEvents: {
                    keydown: {
                        ArrowRight: (target, nav, ev) => {
                            ev.preventDefault();
                            nav.focusNext(target);
                        },
                        ArrowLeft: (target, nav, ev) => {
                            ev.preventDefault();
                            nav.focusPrevious(target);
                        }
                    }
                },
                tabIndex: 0
            }),
        []
    );

    const onKeyDown = React.useCallback(navigation.triggerKeyboardEvent.bind(navigation), []);

    return (
        <div onKeyDown={onKeyDown} ref={root} className="k-toolbar k-toolbar-md k-toolbar-solid" role="toolbar">
            <div className="k-toolbar-item">
                <ButtonGroup>
                    <Button svgIcon={boldIcon} title="Bold" togglable={true} />
                    <Button svgIcon={italicIcon} title="Italic" togglable={true} />
                    <Button svgIcon={underlineIcon} title="Underline" togglable={true} />
                </ButtonGroup>
            </div>
            <div className="k-toolbar-item">
                <ButtonGroup>
                    <Button svgIcon={alignLeftIcon} title="Align Left" togglable={true} />
                    <Button svgIcon={alignCenterIcon} title="Align Center" togglable={true} />
                    <Button svgIcon={alignRightIcon} title="Align Right" togglable={true} />
                </ButtonGroup>
            </div>
        </div>
    );
};

export default App;
