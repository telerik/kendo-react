import * as React from "react";
import { Navigation } from "../settings/Navigation"
import { TileLayout } from '@progress/kendo-react-layout';
import { Date } from "../settings/Date";
import { Weather } from '../settings/Weather';
import { IconHeader } from "../settings/IconHeader";
import { Cards } from '../settings/Cards';

export const Billing = () => {
   const [data] = React.useState([
      {
        col: 1,
        colSpan: 3,
        rowSpan: 3,
      },
      {
        col: 4,
        colSpan: 3,
        rowSpan: 2,
      },
      {
        col: 4,
        colSpan: 3,
        rowSpan: 2,
      },
    ]);

    const tiles = [
      {
        header: <Navigation/>,
        body: <Cards/>,
        reorderable: false
      },
      {
        header: 'Date',
        body: <Date />,
        reorderable: false

      },
      {
        header: <IconHeader/>,
        body: <Weather />,
        reorderable: false

      },
    ];
    

   return <div>          
      <TileLayout
      columns={5}
      rowHeight={255}
      positions={data}
      gap={{
        rows: 12,
        columns: 12,
      }}
      items={tiles}
    />
   </div>
}