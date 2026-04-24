import * as React from 'react';

import { Navigation } from '@progress/kendo-react-common';

import { TreeListApp } from './treelist';
import { scrollTo } from './nav-utils';

const App = () => {
    const root = React.useRef<HTMLDivElement>(null);

    const navigation = React.useMemo(
        () =>
            new Navigation({
                root,
                selectors: ['td.k-table-td'],
                keyboardEvents: {
                    keydown: {
                        ArrowDown: (target, nav, ev) => {
                            ev.preventDefault();
                            const focused = nav.focusNext(target);
                            scrollTo(focused);
                        },
                        ArrowUp: (target, nav, ev) => {
                            ev.preventDefault();
                            const focused = nav.focusPrevious(target);
                            scrollTo(focused);
                        },
                        Space: (target, _nav, ev) => {
                            ev.preventDefault();
                            const button = target.querySelector<HTMLElement>('.k-svg-icon svg');
                            button?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
                        }
                    }
                },
                tabIndex: 0
            }),
        []
    );

    React.useEffect(() => {
        navigation.first?.setAttribute('tabindex', String(0));
    }, []);

    const onKeyDown = React.useCallback(navigation.triggerKeyboardEvent.bind(navigation), []);

    return (
        <div onKeyDown={onKeyDown} ref={root}>
            <TreeListApp />
        </div>
    );
};

export default App;
