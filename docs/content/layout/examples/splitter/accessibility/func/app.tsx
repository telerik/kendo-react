import * as React from 'react';
import { Splitter, SplitterOnChangeEvent, SplitterPaneProps } from '@progress/kendo-react-layout';
import { ContextMenu, MenuItem, MenuSelectEvent } from '@progress/kendo-react-layout';
import { NumericTextBox, NumericTextBoxChangeEvent } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { Window } from '@progress/kendo-react-dialogs';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { arrowsLeftRightIcon, cancelIcon } from '@progress/kendo-svg-icons';
import './styles.css';

import { checkIcon } from '@progress/kendo-svg-icons';

const INNER_SPLITTER_PANE_COUNT = 3;

const App = () => {
    const sizeValues = ['px', '%'];
    const [unit, setUnit] = React.useState('%');
    const [show, setShow] = React.useState(false);
    const [value, setValue] = React.useState<number | null>(null);
    const offset = React.useRef({ left: 0, top: 0 });
    const [visible, setVisible] = React.useState(false);
    const clickedPaneIndex = React.useRef<number | null>(null);
    const [panes, setPanes] = React.useState<SplitterPaneProps[]>([
        { size: '20%', min: '20px', collapsible: false },
        {},
        { size: '30%', min: '20px', collapsible: true },
    ]);

    const [nestedPanes, setNestedPanes] = React.useState<SplitterPaneProps[]>([
        { size: '40%' },
        {},
        { size: '30%', resizable: false },
    ]);

    const handleOnClose = () => setShow(false);

    const resize = () => {
        setVisible(true);
    };

    const handleUnitChange = (event: DropDownListChangeEvent) => {
        setUnit(event.target.value);
    };

    const handleContextMenu = (e: React.MouseEvent<HTMLElement>, index: number) => {
        e.nativeEvent.preventDefault();
        setShow(true);
        offset.current = {
            left: e.nativeEvent.clientX,
            top: e.nativeEvent.clientY,
        };
        clickedPaneIndex.current = index;
    };

    const handleResize = (e: MenuSelectEvent) => {
        if (e.item.text === 'resize') {
            resize();
        }
        setVisible(true);
    };

    const onSplitterChange = (event: SplitterOnChangeEvent) =>
        setPanes(event.newState);
    const onNestedChange = (event: SplitterOnChangeEvent) =>
        setNestedPanes(event.newState);

    const handleOnChange = (event: NumericTextBoxChangeEvent) => {
        setValue(event.value);
    };

    const resizeSplitter = () => {
        if (clickedPaneIndex.current !== null) {
            const newSize = `${value}${unit}`;
            if (clickedPaneIndex.current < INNER_SPLITTER_PANE_COUNT) {
                const newPanes = [...panes];
                newPanes[clickedPaneIndex.current].size = newSize;
                setPanes(newPanes);
            } else {
                const newNestedPanes = [...nestedPanes];
                newNestedPanes[clickedPaneIndex.current - INNER_SPLITTER_PANE_COUNT].size = newSize;
                setNestedPanes(newNestedPanes);
            }
        }
        setVisible(false);
    };
    return (
        <div>
            <Splitter
                style={{ height: 650 }}
                panes={nestedPanes}
                orientation={'vertical'}
                onChange={onNestedChange}
            >
                <Splitter panes={panes} onChange={onSplitterChange}>
                    <div
                        className="pane-content"
                        onContextMenu={(e) => handleContextMenu(e, 0)}
                    >
                        <h3>Inner splitter / left pane</h3>
                        <p>Resizable and collapsible.</p>
                    </div>
                    <div
                        className="pane-content"
                        onContextMenu={(e) => handleContextMenu(e, 0)}
                    >
                        <h3>Inner splitter / center pane</h3>
                        <p>Resizable only.</p>
                    </div>
                    <div
                        className="pane-content"
                        onContextMenu={(e) => handleContextMenu(e, 2)}
                    >
                        <h3>Inner splitter / right pane</h3>
                        <p>Resizable and collapsible.</p>
                    </div>
                </Splitter>
                <div
                    className="pane-content"
                    onContextMenu={(e) => handleContextMenu(e, 3)}
                >
                    <h3>Outer splitter / Middle pane</h3>
                    <p>Resizable only.</p>
                </div>

                {visible && (
                    <Window
                        title={'Pane Size'}
                        onClose={() => setVisible(false)}
                        initialHeight={180}
                    >
                        <div>
                            <p> New Width: </p>
                            <NumericTextBox width="90px" onChange={handleOnChange} />
                            <DropDownList
                                style={{ width: '90px', marginLeft: '10px' }}
                                data={sizeValues}
                                onChange={handleUnitChange}
                            />

                            <br />
                            <br />
                            <Button onClick={resizeSplitter} svgIcon={checkIcon}>
                                Resize
                            </Button>
                            <Button
                                onClick={resizeSplitter}
                                svgIcon={cancelIcon}
                                style={{
                                    marginLeft: '10px',
                                }}
                            >
                                Cancel
                            </Button>
                        </div>
                    </Window>
                )}
            </Splitter>
            <ContextMenu
                vertical={true}
                show={show}
                offset={offset.current}
                onClose={handleOnClose}
                onSelect={handleResize}
            >
                <MenuItem
                    text="resize"
                    data={{ action: 'right' }}
                    svgIcon={arrowsLeftRightIcon}
                />
            </ContextMenu>
        </div>
    );
};

export default App;
