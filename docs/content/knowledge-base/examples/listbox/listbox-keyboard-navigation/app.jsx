import * as React from 'react';
import { ListBox, ListBoxToolbar, processListBoxData, processListBoxDragAndDrop } from '@progress/kendo-react-listbox';

const EUROPEAN_NAMES = [
    'Austria',
    'Belgium',
    'Bulgaria',
    'Croatia',
    'Czech Republic',
    'Denmark',
    'Finland',
    'France',
    'Germany',
    'Greece',
    'Hungary',
    'Ireland',
    'Italy',
    'Netherlands',
    'Poland',
    'Portugal',
    'Romania',
    'Spain',
    'Sweden',
    'Switzerland'
];

const ASIAN_NAMES = [
    'China',
    'India',
    'Indonesia',
    'Japan',
    'Malaysia',
    'Philippines',
    'Singapore',
    'South Korea',
    'Thailand',
    'Vietnam'
];

const SELECTED_FIELD = 'selected';
const toItems = (names) => names.map((name) => ({ name, [SELECTED_FIELD]: false }));

const applySelection = (items, targetName, nativeEvent) => {
    const { ctrlKey, metaKey, shiftKey } = nativeEvent;
    const ctrlOrMeta = ctrlKey || metaKey;

    return items.map((item) => {
        if (item.name === targetName) {
            if (ctrlOrMeta && !shiftKey) {
                return { ...item, [SELECTED_FIELD]: !item[SELECTED_FIELD] };
            }
            return { ...item, [SELECTED_FIELD]: true };
        }
        if (shiftKey || ctrlOrMeta) {
            return item;
        }
        return { ...item, [SELECTED_FIELD]: false };
    });
};

const App = () => {
    const [state, setState] = React.useState({
        european: toItems(EUROPEAN_NAMES),
        asian: toItems(ASIAN_NAMES),
        draggedItem: {}
    });

    const europeanRef = React.useRef(null);
    const asianRef = React.useRef(null);

    const focusLastItemInList = (listBoxHandle) => {
        requestAnimationFrame(() => {
            const el = listBoxHandle?.current?.element;
            if (!el) return;
            const items = el.querySelectorAll('.k-list-item');
            if (items.length === 0) return;
            const lastItem = items[items.length - 1];
            items.forEach((item) => item.setAttribute('tabindex', '-1'));
            lastItem.setAttribute('tabindex', '0');
            lastItem.scrollIntoView({ block: 'nearest' });
            lastItem.focus();
        });
    };

    const applyPostTransfer = (destData, sourceData) => {
        const clearAll = (items) => items.map((item) => ({ ...item, [SELECTED_FIELD]: false }));
        const newDest = clearAll(destData).map((item, index, arr) =>
            index === arr.length - 1 ? { ...item, [SELECTED_FIELD]: true } : item
        );
        return { dest: newDest, source: clearAll(sourceData) };
    };

    const handleSelect = (event, listKey, connectedKey) => {
        setState((prev) => ({
            ...prev,
            [listKey]: applySelection(prev[listKey], event.dataItem.name, event.nativeEvent),
            // Deselect everything in the other list (mirrors Angular's cross-listbox deselect)
            [connectedKey]: prev[connectedKey].map((item) => ({ ...item, [SELECTED_FIELD]: false }))
        }));
    };

    const handleKeyboardNavigate = (e) => {
        const action = e.actionName || '';
        let { listBoxOneData: european, listBoxTwoData: asian } = processListBoxData(
            state.european,
            state.asian,
            action,
            SELECTED_FIELD
        );

        if (action === 'transferTo' || action === 'transferAllTo') {
            const { dest, source } = applyPostTransfer(asian, european);
            asian = dest;
            european = source;
            focusLastItemInList(asianRef);
        } else if (action === 'transferFrom' || action === 'transferAllFrom') {
            const { dest, source } = applyPostTransfer(european, asian);
            european = dest;
            asian = source;
            focusLastItemInList(europeanRef);
        }

        setState((prev) => ({ ...prev, european, asian }));
    };

    const handleToolBarClick = (e) => {
        const toolName = e.toolName || '';
        let { listBoxOneData: european, listBoxTwoData: asian } = processListBoxData(
            state.european,
            state.asian,
            toolName,
            SELECTED_FIELD
        );

        if (toolName === 'transferTo' || toolName === 'transferAllTo') {
            const { dest, source } = applyPostTransfer(asian, european);
            asian = dest;
            european = source;
            focusLastItemInList(asianRef);
        } else if (toolName === 'transferFrom' || toolName === 'transferAllFrom') {
            const { dest, source } = applyPostTransfer(european, asian);
            european = dest;
            asian = source;
            focusLastItemInList(europeanRef);
        }

        setState((prev) => ({ ...prev, european, asian }));
    };

    const handleDragStart = (e) => setState((prev) => ({ ...prev, draggedItem: e.dataItem }));

    const handleDrop = (e) => {
        const result = processListBoxDragAndDrop(state.european, state.asian, state.draggedItem, e.dataItem, 'name');
        setState((prev) => ({ ...prev, european: result.listBoxOneData, asian: result.listBoxTwoData }));
    };

    return (
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h4 style={{ margin: '0 0 8px', fontSize: 14, fontWeight: 600 }}>European Countries</h4>
                <ListBox
                    ref={europeanRef}
                    style={{ height: 330, width: 220 }}
                    data={state.european}
                    textField="name"
                    selectedField={SELECTED_FIELD}
                    onItemClick={(e) => handleSelect(e, 'european', 'asian')}
                    onItemSelect={(e) => handleSelect(e, 'european', 'asian')}
                    onKeyboardNavigate={handleKeyboardNavigate}
                    onDragStart={handleDragStart}
                    onDrop={handleDrop}
                    toolbar={() => (
                        <ListBoxToolbar
                            tools={[
                                'moveUp',
                                'moveDown',
                                'transferTo',
                                'transferFrom',
                                'transferAllTo',
                                'transferAllFrom',
                                'remove'
                            ]}
                            data={state.european}
                            dataConnected={state.asian}
                            onToolClick={handleToolBarClick}
                        />
                    )}
                />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h4 style={{ margin: '0 0 8px', fontSize: 14, fontWeight: 600 }}>Asian Countries</h4>
                <ListBox
                    ref={asianRef}
                    style={{ height: 330, width: 220 }}
                    data={state.asian}
                    textField="name"
                    selectedField={SELECTED_FIELD}
                    onItemClick={(e) => handleSelect(e, 'asian', 'european')}
                    onItemSelect={(e) => handleSelect(e, 'asian', 'european')}
                    onKeyboardNavigate={handleKeyboardNavigate}
                    onDragStart={handleDragStart}
                    onDrop={handleDrop}
                />
            </div>
        </div>
    );
};

export default App;
