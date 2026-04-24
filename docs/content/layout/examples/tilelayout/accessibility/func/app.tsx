import * as React from 'react';
import {
    TileLayout,
    TileLayoutRepositionEvent,
    ContextMenu,
    MenuItem,
    MenuSelectEvent,
    TileStrictPosition,
} from '@progress/kendo-react-layout';
import { SvgIcon } from '@progress/kendo-react-common';
import {
    arrowsLeftRightIcon,
    checkIcon,
    cancelIcon,
    reorderIcon,
    menuIcon,
} from '@progress/kendo-svg-icons';
import { Window, WindowActionsBar } from '@progress/kendo-react-dialogs';
import {
    DropDownList,
    DropDownListChangeEvent,
} from '@progress/kendo-react-dropdowns';
import { Button } from '@progress/kendo-react-buttons';

const INCREMENT_VALUE = 1;

const App = () => {
    const handleOnClose = () => setShow(false);
    const [reorderVisibleWindow, setReorderVisibleWindow] = React.useState(false);
    const [resizeVisibleWindow, setResizeVisibleWindow] = React.useState(false);
    const columnsAvailable = [1, 2, 3];
    const rowsAvailable = [1, 2, 3, 4, 5];
    const [columnSpanValue, setColumnSpanValue] = React.useState(1);
    const [rowSpanValue, setRowSpanValue] = React.useState(1);
    const [selectedCardIndex, setSelectedCardIndex] = React.useState(-1);
    const beforePositions = [1, 2, 3, 4, 5];
    const [beforeValue, setBeforeValue] = React.useState(1);
    const [tileLayoutKey, setTileLayoutKey] = React.useState(1);

    const tiles = [
        {
            defaultPosition: { col: 1, colSpan: 2, rowSpan: 1 },
            header: (
      <div>
        Tile{' '}
        <span
          onContextMenu={(e) => handleTileContextMenu(e, 1)}
          style={{ float: 'right' }}
        >
          <SvgIcon icon={menuIcon} size="medium" />
        </span>
      </div>
            ),
            body: <p>1.</p>,
        },
        {
            defaultPosition: { col: 3, colSpan: 1, rowSpan: 2 },
            header: (
      <div>
        Tile{' '}
        <span
          onContextMenu={(e) => handleTileContextMenu(e, 2)}
          style={{ float: 'right' }}
        >
          <SvgIcon icon={menuIcon} size="medium" />
        </span>
      </div>
            ),
            body: <p>2</p>,
        },
        {
            defaultPosition: { col: 1, colSpan: 2, rowSpan: 3 },
            header: (
      <div>
        Tile{' '}
        <span
          onContextMenu={(e) => handleTileContextMenu(e, 3)}
          style={{ float: 'right' }}
        >
          <SvgIcon icon={menuIcon} size="medium" />
        </span>
      </div>
            ),
            body: <p>Reorderable and resizable tile.</p>,
        },
        {
            defaultPosition: { col: 1, colSpan: 2, rowSpan: 1 },
            header: (
      <div>
        Tile{' '}
        <span
          onContextMenu={(e) => handleTileContextMenu(e, 4)}
          style={{ float: 'right' }}
        >
          <SvgIcon icon={menuIcon} size="medium" />
        </span>
      </div>
            ),
            body: <p>Reorderable and resizable tile.</p>,
        },
        {
            defaultPosition: { col: 1, colSpan: 2, rowSpan: 1 },
            header: (
      <div>
        Tile{' '}
        <span
          onContextMenu={(e) => handleTileContextMenu(e, 5)}
          style={{ float: 'right' }}
        >
          <SvgIcon icon={menuIcon} size="medium" />
        </span>
      </div>
            ),
            body: <p>Reorderable and resizable tile.</p>,
        },
    ];

    const handleBeforeChange = (event) => {
        setBeforeValue(event.target.value);
    };

    const handleReorder = () => {
        const selectedCard = data[selectedCardIndex];
        const newOrder = beforeValue;
        const itemToReplace = data.find((card) => card.order === newOrder);

        if (!itemToReplace) {
            console.error('Cannot find item to replace.');
            return;
        }

        const {
            col: replaceCol,
            colSpan: replaceColSpan,
            rowSpan: replaceRowSpan,
        } = itemToReplace;

        const updatedData = data.map((item) => ({
            ...item,
            order:
        item.id === selectedCard.id
            ? newOrder
            : item.order < selectedCard.order
                ? item.order + INCREMENT_VALUE
                : item.order,
            col: item.id === selectedCard.id ? selectedCard.col : item.col,
            colSpan:
        item.id === selectedCard.id ? selectedCard.colSpan : item.colSpan,
            rowSpan:
        item.id === selectedCard.id ? selectedCard.rowSpan : item.rowSpan,
        }));

        updatedData[selectedCardIndex] = {
            ...updatedData[selectedCardIndex],
            col: replaceCol,
            colSpan: replaceColSpan,
            rowSpan: replaceRowSpan,
        };

        setData(updatedData);
        setTileLayoutKey(tileLayoutKey + INCREMENT_VALUE);
        setReorderVisibleWindow(false);
    };
    const closeWindow = () => {
        setReorderVisibleWindow(false);
    };

    const handleColumnSpanChange = (event: DropDownListChangeEvent) => {
        setColumnSpanValue(event.value);
    };

    const handleRowSpanChange = (event: DropDownListChangeEvent) => {
        setRowSpanValue(event.value);
    };

    const handleResize = () => {
        const updatedData = data.map((item) => {
            if (item.id === data[selectedCardIndex].id) {
                return {
                    ...item,
                    colSpan: columnSpanValue,
                    rowSpan: rowSpanValue,
                };
            }
            return item;
        });

        setData(updatedData);
        setResizeVisibleWindow(false);
        setTileLayoutKey((prevKey) => prevKey + 1);
    };
    const [show, setShow] = React.useState(false);
    const offset = React.useRef({ left: 0, top: 0 });
    const [data, setData] = React.useState<any[]>([
        { col: 1, colSpan: 1, rowSpan: 2, id: 1, order: 1 },
        { col: 2, colSpan: 2, rowSpan: 2, id: 2, order: 2 },
        { col: 1, colSpan: 3, rowSpan: 1, id: 3, order: 3 },
        { col: 1, colSpan: 2, rowSpan: 2, id: 4, order: 4 },
        { col: 3, colSpan: 1, rowSpan: 2, id: 5, order: 5 },
    ]);

    const handleTileContextMenu = (e: React.MouseEvent, index: number) => {
        e.preventDefault();
        setShow(true);
        setSelectedCardIndex(index);

        offset.current = {
            left: e.clientX,
            top: e.clientY,
        };
    };

    const handleReposition = (e: TileLayoutRepositionEvent) => {
        setData(e.value);
    };

    const handleOnSelect = (e: MenuSelectEvent) => {
        switch (e.item.data.action) {
            case 'reorder':
                setReorderVisibleWindow(true);
                break;
            case 'resize':
                setResizeVisibleWindow(true);
                break;
            default:
        }
        setShow(false);
    };

    return (
    <div>
      <TileLayout
        key={tileLayoutKey}
        columns={3}
        items={data.map((item, index) => ({
          defaultPosition: item,
          header: (
            <div>
              Tile{' '}
              <span
                onContextMenu={(e) => handleTileContextMenu(e, index)}
                style={{ float: 'right' }}
              >
                <SvgIcon icon={menuIcon} size="medium" />
              </span>
            </div>
          ),
          body: <p>{item.id}.</p>,
        }))}
        positions={data}
        onReposition={handleReposition}
      />
      {reorderVisibleWindow && (
        <Window title={'Reorder'} initialHeight={250} onClose={closeWindow}>
          <p>
            Move card:
            <span style={{ fontWeight: 'bold' }}>
              {' '}
              {data[selectedCardIndex].id} to:
            </span>
          </p>
          {tiles.slice(0, 2).map((tile, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '10px',
              }}
            >
              {index === 0 && (
                <>
                  <DropDownList
                    style={{
                      marginLeft: '10px',
                      width: '200px',
                    }}
                    data={beforePositions}
                    value={beforeValue}
                    onChange={handleBeforeChange}
                  />
                </>
              )}
            </div>
          ))}

          <WindowActionsBar>
            <Button onClick={handleReorder} svgIcon={checkIcon}>
              <SvgIcon size="medium" style={{ marginRight: '5px' }} />
              Reorder
            </Button>
            <Button onClick={closeWindow} svgIcon={cancelIcon}>
              <SvgIcon size="medium" style={{ marginRight: '5px' }} />
              Cancel
            </Button>
          </WindowActionsBar>
        </Window>
      )}

      {resizeVisibleWindow && (
        <Window
          title={'Pane Size'}
          onClose={() => setResizeVisibleWindow(false)}
          initialHeight={240}
        >
          <div>
            <p style={{ marginLeft: '10px' }}>
              <span>span card: </span>
              {data[selectedCardIndex].id}
            </p>

            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                padding: '0 10px',
              }}
            >
              <div style={{ marginRight: '10px' }}>
                <DropDownList
                  data={columnsAvailable}
                  value={columnSpanValue}
                  style={{ width: '90px' }}
                  onChange={handleColumnSpanChange}
                />
                <p style={{ textAlign: 'center', marginTop: '5px' }}>
                  Column span
                </p>
              </div>

              <div style={{ marginRight: '10px' }}>
                <DropDownList
                  data={rowsAvailable}
                  value={rowSpanValue}
                  style={{ width: '90px' }}
                  onChange={handleRowSpanChange}
                />
                <p style={{ textAlign: 'center', marginTop: '5px' }}>
                  Row span
                </p>
              </div>
            </div>

            <br />
            <div style={{ marginLeft: '10px' }}>
              <Button onClick={handleResize} svgIcon={checkIcon}>
                Resize
              </Button>
              <Button
                style={{ marginLeft: '10px' }}
                svgIcon={cancelIcon}
                onClick={() => setReorderVisibleWindow(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </Window>
      )}

      <ContextMenu
        vertical={true}
        show={show}
        offset={offset.current}
        onClose={handleOnClose}
        onSelect={handleOnSelect}
      >
        <MenuItem
          text="Reorder Card"
          data={{ action: 'reorder' }}
          svgIcon={reorderIcon}
        />
        <MenuItem
          text="Resize Card"
          data={{ action: 'resize' }}
          svgIcon={arrowsLeftRightIcon}
        />
      </ContextMenu>
    </div>
    );
};

export default App;
