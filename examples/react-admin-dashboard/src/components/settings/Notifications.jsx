import * as React from "react";
import { Navigation } from "../settings/Navigation"
import { TileLayout } from '@progress/kendo-react-layout';
import { Date } from "../settings/Date";
import { Weather } from '../settings/Weather';
import { IconHeader } from "../settings/IconHeader";
import { SwitchOptions } from '../settings/SwitchOptions';

export const Notifications = () => {
   const [data] = React.useState([
      {
        col: 1,
        colSpan: 3,
        rowSpan: 4,
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
        body: <SwitchOptions/>,
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
