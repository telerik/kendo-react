import * as React from 'react';
import { Navigation } from '@progress/kendo-react-common';
import { cellAt } from './utils';

const tabIndex = 0;

const App = () => {
    const root = React.useRef<HTMLTableElement>(null);

    const navigation = React.useMemo(
        () =>
            new Navigation({
                root,
                selectors: ['th', 'td'],
                keyboardEvents: {
                    keydown: {
                        ArrowRight: (target, nav, ev) => {
                            ev.preventDefault();
                            const next = cellAt(root.current!, target, [0, 1]);
                            nav.focusElement(next, target);
                        },
                        ArrowLeft: (target, nav, ev) => {
                            ev.preventDefault();
                            const next = cellAt(root.current!, target, [0, -1]);
                            nav.focusElement(next, target);
                        },
                        ArrowUp: (target, nav, ev) => {
                            ev.preventDefault();
                            const next = cellAt(root.current!, target, [-1, 0]);
                            nav.focusElement(next, target);
                        },
                        ArrowDown: (target, nav, ev) => {
                            ev.preventDefault();
                            const next = cellAt(root.current!, target, [1, 0]);
                            nav.focusElement(next, target);
                        }
                    }
                },
                tabIndex
            }),
        []
    );

    React.useEffect(() => {
        navigation.first?.setAttribute('tabindex', String(tabIndex));
    }, []);

    const onKeyDown = React.useCallback(navigation.triggerKeyboardEvent.bind(navigation), []);

    return (
        <React.Fragment>
            <table className="table" onKeyDown={onKeyDown} ref={root}>
                <tbody>
                    <tr>
                        <th colSpan={2}>Name</th>
                        <th>Age</th>
                    </tr>
                    <tr>
                        <td>John</td>
                        <td>Smith</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td>Jim</td>
                        <td>Jackson</td>
                        <td rowSpan={2}>27</td>
                    </tr>
                    <tr>
                        <td>Elye</td>
                        <td>Jackson</td>
                    </tr>
                </tbody>
            </table>
            <style>
                {`.table, .table th, .table td {
              border:1px solid rgba(0, 0, 0, 0.08);
              border-collapse: collapse;
            }
            .table th, .table td {
              padding: 15px;
            }`}
            </style>
        </React.Fragment>
    );
};

export default App;
