import * as React from 'react';
import { Sortable, SortableItemUIProps, SortableOnDragOverEvent, SortableOnNavigateEvent } from '@progress/kendo-react-sortable';

const NestedSortableUI = (props: SortableItemUIProps) => {
    const { style, attributes, dataItem, forwardRef, isActive } = props;

    return (
      <div
        ref={forwardRef}
        {...attributes}
        style={{
                ...style,
                border: isActive ? '2px dashed black' : 0,
                paddingTop: 1,
                paddingBottom: 1,
                paddingLeft: 2,
                paddingRight: 2

            }}
        >
        <div
          style={{
                    backgroundColor: dataItem.color,
                    color: 'white',
                    height: 30,
                    border: '1px solid black'
                }}
            >
          {dataItem.color}
        </div>
      </div>
    );
};

const SortableItemUI = (props: SortableItemUIProps) => {
    const [colors, setColors] = React.useState(props.dataItem.data.map(item => ({
        colorId: item,
        color: item
    })));

    const onDragOver = (event: SortableOnDragOverEvent) => {
        setColors(event.newState);
    }

    const onNavigate = (event: SortableOnNavigateEvent) => {
        setColors(event.newState);
    }

    const { style, attributes, dataItem, forwardRef } = props;

    return (
      <div
        ref={forwardRef}
        {...attributes}
        style={{
                  ...style,
                  float: 'left',
                  display: 'inline-block',
                  width: 125,
                  backgroundColor: '#fffaed',
                  margin: 4,
                  border: '1px solid black'
              }}
          >
        {dataItem.name}
        <Sortable
          idField={'colorId'}
          data={colors}

          itemUI={NestedSortableUI}

          onDragOver={onDragOver}
          onNavigate={onNavigate}
              />
      </div>
    );

}

const colorsA = [ 'Violet', 'Magenta', 'Purple', 'SlateBlue' ];
const colorsB = [ 'SteelBlue', 'CornflowerBlue', 'RoyalBlue', 'MediumBlue' ];
const colorsC = [ 'LimeGreen', 'SeaGreen', 'Green', 'OliveDrab' ];
const colorsD = [ 'LightSalmon', 'Salmon', 'IndianRed', 'FireBrick' ];

const App = () => {
    const [palettes, setPalettes] = React.useState<object[]>([
        { data: colorsA, name: 'Palette A', id: 1 },
        { data: colorsB, name: 'Palette B', id: 2 },
        { data: colorsC, name: 'Palette C', id: 3 },
        { data: colorsD, name: 'Palette D', id: 4 }
    ]);

    const onDragOver = (event: SortableOnDragOverEvent) => {
        setPalettes(event.newState);
    }

    const onNavigate = (event: SortableOnNavigateEvent) => {
        setPalettes(event.newState);
    }

    return (
      <Sortable
        idField={'id'}
        data={palettes}

        itemUI={SortableItemUI}

        onDragOver={onDragOver}
        onNavigate={onNavigate}
          />
    );
}

export default App;
