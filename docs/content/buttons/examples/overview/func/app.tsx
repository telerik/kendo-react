import * as React from 'react';
import {
    Button,
    ButtonGroup,
    Chip,
    ChipList,
    ChipListDataChangeEvent,
    ChipProps,
    DropDownButton,
    DropDownButtonItem,
    FloatingActionButton,
    SegmentedControl,
    SplitButton,
    SplitButtonItem,
    Toolbar,
    ToolbarItem,
    ToolbarSeparator,
    ToolbarSpacer
} from '@progress/kendo-react-buttons';
import {
    alignCenterIcon,
    alignJustifyIcon,
    alignLeftIcon,
    alignRightIcon,
    boldIcon,
    checkIcon,
    copyIcon,
    filePdfIcon,
    folderIcon,
    folderOpenIcon,
    gridIcon,
    imageIcon,
    italicIcon,
    listUnorderedIcon,
    menuIcon,
    plusIcon,
    saveIcon,
    tableIcon,
    underlineIcon,
    undoIcon,
    uploadIcon,
    xIcon
} from '@progress/kendo-svg-icons';
import './styles.css';

interface FilterChip {
    text: string;
    value: string;
}

const viewItems = [
    { value: 'board', text: 'Board', svgIcon: gridIcon },
    { value: 'list', text: 'List', svgIcon: listUnorderedIcon },
    { value: 'compact', text: 'Compact', svgIcon: menuIcon }
];

const renderChip = (props: ChipProps) => <Chip removable={true} {...props} />;

const App = () => {
    const [canUndo, setCanUndo] = React.useState(false);
    const [canRedo, setCanRedo] = React.useState(false);
    const [lastAction, setLastAction] = React.useState('');
    const [selectedView, setSelectedView] = React.useState('board');
    const [selectedStatus, setSelectedStatus] = React.useState('all');
    const [filters, setFilters] = React.useState<FilterChip[]>([
        { text: 'Tag: Technology', value: 'tech' },
        { text: 'Status: Draft', value: 'draft' },
        { text: 'Author: Me', value: 'me' }
    ]);

    const recordAction = (action: string) => {
        setLastAction(action);
        setCanUndo(true);
    };

    const handleUndo = () => {
        setLastAction('Undo');
        setCanUndo(false);
        setCanRedo(true);
    };

    return (
        <div className="demo-container">
            <div className="catalog-header">
                <h2 className="catalog-title">Articles</h2>
            </div>

            <div className="controls-row">
                <SegmentedControl items={viewItems} value={selectedView} onChange={(value) => setSelectedView(value)} />
                <ButtonGroup>
                    <Button
                        togglable={true}
                        selected={selectedStatus === 'all'}
                        onClick={() => setSelectedStatus('all')}
                    >
                        All
                    </Button>
                    <Button
                        togglable={true}
                        selected={selectedStatus === 'draft'}
                        onClick={() => setSelectedStatus('draft')}
                    >
                        Draft
                    </Button>
                    <Button
                        togglable={true}
                        selected={selectedStatus === 'published'}
                        onClick={() => setSelectedStatus('published')}
                    >
                        Published
                    </Button>
                    <Button
                        togglable={true}
                        selected={selectedStatus === 'archived'}
                        onClick={() => setSelectedStatus('archived')}
                    >
                        Archived
                    </Button>
                </ButtonGroup>
            </div>

            <div className="actions-row">
                <SplitButton
                    text="New Article"
                    svgIcon={plusIcon}
                    themeColor="primary"
                    onButtonClick={() => recordAction('New Article')}
                    onItemClick={(e) => recordAction(e.item.text)}
                >
                    <SplitButtonItem text="New from Template" svgIcon={folderIcon} />
                    <SplitButtonItem text="Import Markdown" svgIcon={uploadIcon} />
                    <SplitButtonItem text="Duplicate Existing" svgIcon={copyIcon} />
                </SplitButton>
                <DropDownButton text="Bulk Actions" onItemClick={(e) => recordAction(e.item.text)}>
                    <DropDownButtonItem text="Set Category" svgIcon={folderIcon} />
                    <DropDownButtonItem text="Archive" svgIcon={folderOpenIcon} />
                </DropDownButton>
            </div>

            <div className="filters-row">
                <ChipList
                    selection="none"
                    data={filters}
                    chip={renderChip}
                    onDataChange={(e: ChipListDataChangeEvent) => setFilters(e.value)}
                />
                {filters.length > 0 && (
                    <Button fillMode="flat" svgIcon={xIcon} size="small" onClick={() => setFilters([])}>
                        Clear All
                    </Button>
                )}
            </div>
            <Toolbar>
                <Button svgIcon={undoIcon} fillMode="flat" disabled={!canUndo} title="Undo" onClick={handleUndo} />
                <ToolbarSeparator />
                <ButtonGroup>
                    <Button className="k-toolbar-button" svgIcon={boldIcon} title="Bold" togglable={true} />
                    <Button className="k-toolbar-button" svgIcon={italicIcon} title="Italic" togglable={true} />
                    <Button className="k-toolbar-button" svgIcon={underlineIcon} title="Underline" togglable={true} />
                </ButtonGroup>
                <ButtonGroup>
                    <Button className="k-toolbar-button" svgIcon={alignLeftIcon} title="Align Left" togglable={true} />
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
                <ToolbarSeparator />
                <ToolbarItem>
                    <DropDownButton
                        text="Insert"
                        svgIcon={plusIcon}
                        onItemClick={(e) => recordAction(`Inserted ${e.item.text}`)}
                    >
                        <DropDownButtonItem text="Image" svgIcon={imageIcon} />
                        <DropDownButtonItem text="Table" svgIcon={tableIcon} />
                    </DropDownButton>
                </ToolbarItem>
                <ToolbarSeparator />
                <ToolbarItem>
                    <SplitButton
                        text="Save"
                        svgIcon={saveIcon}
                        onButtonClick={() => recordAction('Saved')}
                        onItemClick={(e) => recordAction(e.item.text)}
                    >
                        <SplitButtonItem text="Save As Draft" svgIcon={saveIcon} />
                        <SplitButtonItem text="Export as PDF" svgIcon={filePdfIcon} />
                    </SplitButton>
                </ToolbarItem>
                <ToolbarSpacer />
                <Button svgIcon={checkIcon} themeColor="primary" onClick={() => recordAction('Published')}>
                    Publish
                </Button>
                <ToolbarSeparator />
            </Toolbar>
            <div className="editor-canvas">
                <div className="canvas-info">
                    <span className="canvas-label">
                        {lastAction
                            ? `Last action: ${lastAction}`
                            : 'Use the toolbar to format content, or manage articles below'}
                    </span>
                </div>
                <div className="article-skeletons">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="article-skeleton">
                            <div className="skeleton-line skeleton-title" />
                            <div className="skeleton-line skeleton-subtitle" />
                            <div className="skeleton-footer">
                                <div className="skeleton-tag" />
                                <div className="skeleton-tag skeleton-tag-short" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <FloatingActionButton
                svgIcon={plusIcon}
                text="Quick Add"
                title="New Article"
                themeColor="primary"
                positionMode="absolute"
                align={{ horizontal: 'end', vertical: 'bottom' }}
                onClick={() => recordAction('Quick Add')}
            />
        </div>
    );
};

export default App;
