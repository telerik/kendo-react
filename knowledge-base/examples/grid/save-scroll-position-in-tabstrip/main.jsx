import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import products from './products.json';

const App = () => {
  const [selected, setSelected] = React.useState(1);
  const [gridScrollPosition, setGridScrollPosition] = React.useState(0);
  const ROW_HEIGHT = 40;
  const handleSelect = (e) => {
    setSelected(e.selected);
  };
  const onGridScroll = (ev) => {
    setGridScrollPosition(ev.nativeEvent.target.scrollTop);
  };
  const gridRef = React.useRef();
  React.useEffect(() => {
    if (gridRef != undefined) {
      let rowIndex = Math.round(gridScrollPosition / ROW_HEIGHT);
      gridRef.current.scrollIntoView({ rowIndex: rowIndex });
    }
  }, [selected]);
  return (
    <TabStrip
      keepTabsMounted={false}
      selected={selected}
      onSelect={handleSelect}
    >
      <TabStripTab title="Paris">
        <div>
          <p>
            Paris is the capital and most populous city of France. It has an
            area of 105 square kilometres (41 square miles) and a population in
            2013 of 2,229,621 within its administrative limits. The city is both
            a commune and department, and forms the centre and headquarters of
            the Île-de-France, or Paris Region, which has an area of 12,012
            square kilometres (4,638 square miles) and a population in 2014 of
            12,005,077, comprising 18.2 percent of the population of France.
          </p>
        </div>
      </TabStripTab>
      <TabStripTab title="New York City">
        <div>
          <Grid
            rowHeight={ROW_HEIGHT}
            ref={gridRef}
            onScroll={onGridScroll}
            style={{
              height: '400px',
            }}
            data={products}
          >
            <Column field="ProductID" title="ID" width="40px" />
            <Column field="ProductName" title="Name" width="250px" />
            <Column field="Category.CategoryName" title="CategoryName" />
            <Column field="UnitPrice" title="Price" />
            <Column field="UnitsInStock" title="In stock" />
            <Column
              field="Discontinued"
              cell={(props) => (
                <td>
                  <input
                    disabled={true}
                    type="checkbox"
                    checked={props.dataItem[props.field || '']}
                  />
                </td>
              )}
            />
          </Grid>
        </div>
      </TabStripTab>
      <TabStripTab title="Tallinn">
        <div>
          <p>
            Tallinn is the capital and largest city of Estonia. It is situated
            on the northern coast of the country, on the shore of the Gulf of
            Finland, 80 km (50 mi) south of Helsinki, east of Stockholm and west
            of Saint Petersburg. From the 13th century until 1918 (and briefly
            during the Nazi occupation of Estonia from 1941 to 1944), the city
            was known as Reval. Tallinn occupies an area of 159.2 km2 (61.5 sq
            mi) and has a population of 443,894. Approximately 32% of Estonia's
            total population lives in Tallinn.
          </p>
          <p>
            Tallinn was founded in 1248, but the earliest human settlements are
            over 5,000 years old, making it one of the oldest capital cities of
            Northern Europe. Due to its strategic location, the city became a
            major trade hub, especially from the 14th to the 16th century, when
            it grew in importance as part of the Hanseatic League.
          </p>
        </div>
      </TabStripTab>
      <TabStripTab title="Sydney" disabled={true} />
    </TabStrip>
  );
};

ReactDOM.render(<App />, document.querySelector('my-app'));
