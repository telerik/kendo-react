import * as React from 'react';
import {
    ListBox,
    ListBoxToolbar,
    processListBoxData,
    processListBoxDragAndDrop,
    ListBoxDragEvent,
    ListBoxItemClickEvent,
    ListBoxItemNavigateEvent,
    ListBoxItemSelectEvent,
    ListBoxToolbarClickEvent
} from '@progress/kendo-react-listbox';

interface CountryItem {
    name: string;
    selected: boolean;
}

interface AppState {
    european: CountryItem[];
    asian: CountryItem[];
    draggedItem: CountryItem | null;
}

interface ListBoxRefHandle {
    element: HTMLDivElement | null;
}

type ListKey = 'european' | 'asian';

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
const toItems = (names: string[]): CountryItem[] => names.map((name) => ({ name, [SELECTED_FIELD]: false }));

const applySelection = (
    items: CountryItem[],
    targetName: string,
    nativeEvent: MouseEvent | KeyboardEvent
): CountryItem[] => {
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
    const [state, setState] = React.useState<AppState>({
        european: toItems(EUROPEAN_NAMES),
        asian: toItems(ASIAN_NAMES),
        draggedItem: null
    });

    const europeanRef = React.useRef<ListBoxRefHandle | null>(null);
    const asianRef = React.useRef<ListBoxRefHandle | null>(null);

    const focusLastItemInList = (listBoxHandle: React.RefObject<ListBoxRefHandle | null>) => {
        requestAnimationFrame(() => {
            const el = listBoxHandle?.current?.element;
            if (!el) return;
            const items = el.querySelectorAll<HTMLElement>('.k-list-item');
            if (items.length === 0) return;
            const lastItem = items[items.length - 1];
            items.forEach((item) => item.setAttribute('tabindex', '-1'));
            lastItem.setAttribute('tabindex', '0');
            lastItem.scrollIntoView({ block: 'nearest' });
            lastItem.focus();
        });
    };

    const applyPostTransfer = (destData: CountryItem[], sourceData: CountryItem[]) => {
        const clearAll = (items: CountryItem[]): CountryItem[] =>
            items.map((item) => ({ ...item, [SELECTED_FIELD]: false }));
        const newDest = clearAll(destData).map((item, index, arr) =>
            index === arr.length - 1 ? { ...item, [SELECTED_FIELD]: true } : item
        );
        return { dest: newDest, source: clearAll(sourceData) };
    };

    const handleSelect = (
        event: ListBoxItemClickEvent | ListBoxItemSelectEvent,
        listKey: ListKey,
        connectedKey: ListKey
    ) => {
        const item = event.dataItem as CountryItem | undefined;
        if (!item) {
            return;
        }

        setState((prev) => ({
            ...prev,
            [listKey]: applySelection(prev[listKey], item.name, event.nativeEvent),
            [connectedKey]: prev[connectedKey].map((item) => ({ ...item, [SELECTED_FIELD]: false }))
        }));
    };

    const handleKeyboardNavigate = (e: ListBoxItemNavigateEvent) => {
        const action = e.actionName || '';
        let { listBoxOneData: european, listBoxTwoData: asian } = processListBoxData(
            state.european,
            state.asian,
            action,
            SELECTED_FIELD
        ) as { listBoxOneData: CountryItem[]; listBoxTwoData: CountryItem[] };

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

    const handleToolBarClick = (e: ListBoxToolbarClickEvent) => {
        const toolName = e.toolName || '';
        let { listBoxOneData: european, listBoxTwoData: asian } = processListBoxData(
            state.european,
            state.asian,
            toolName,
            SELECTED_FIELD
        ) as { listBoxOneData: CountryItem[]; listBoxTwoData: CountryItem[] };

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

    const handleDragStart = (e: ListBoxDragEvent) =>
        setState((prev) => ({ ...prev, draggedItem: (e.dataItem as CountryItem) || null }));

    const handleDrop = (e: ListBoxDragEvent) => {
        const dropItem = e.dataItem as CountryItem | null;
        if (!state.draggedItem) {
            return;
        }

        const result = processListBoxDragAndDrop(state.european, state.asian, state.draggedItem, dropItem, 'name') as {
            listBoxOneData: CountryItem[];
            listBoxTwoData: CountryItem[];
        };

        setState((prev) => ({
            ...prev,
            european: result.listBoxOneData,
            asian: result.listBoxTwoData
        }));
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
