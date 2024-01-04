import * as React from "react";
import { Navigation } from "../settings/Navigation"
import { TileLayout } from '@progress/kendo-react-layout';
import { UserForm } from "../settings/UserForms";
import { Date } from "../settings/Date";
import { Weather } from '../settings/Weather';
import { IconHeader } from "../settings/IconHeader";

export const Account = () => {
   const [data, setData] = React.useState([
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
        colSpan: 4,
        rowSpan: 2,
      },
    ]);
    const tiles = [
      {
        header: <Navigation/>,
        body: <UserForm/>,
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
    const handleReposition = (e) => {
      setData(e.value);
    };
   return <div>
      <div>
         
      <TileLayout
      columns={5}
      rowHeight={255}
      positions={data}
      gap={{
        rows: 12,
        columns: 12,
      }}
      items={tiles}
      onReposition={handleReposition}
    />
      </div>
    </div>
}