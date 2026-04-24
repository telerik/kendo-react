import * as React from "react";;
import { TileLayout, TileLayoutRepositionEvent } from "@progress/kendo-react-layout";

import { conversions, channelUsers, pageViews, visitors } from "./tileLayout-data";

import ConversionsChart from "./conversions-chart";
import ConversionRate from "./conversion-rate";
import PageViewsChart from "./page-views";
import PopularPagesChart from "./popular-pages-chart";
import UsersGrid from "./users-grid";
import VisitorsDonut from "./visitors-donut";

const App = () => {
    const [data, setData] = React.useState([
        { col: 1, colSpan: 3, rowSpan: 1 },
        { col: 1, colSpan: 2, rowSpan: 1 },
        { col: 1, colSpan: 2, rowSpan: 2 },
        { col: 4, colSpan: 1, rowSpan: 1 },
        { col: 3, colSpan: 1, rowSpan: 1 },
        { col: 3, colSpan: 1, rowSpan: 1 },
        { col: 4, colSpan: 1, rowSpan: 2 },
        { col: 3, colSpan: 2, rowSpan: 1 }
    ])

    const tiles = [
        {
            header: "Page Views",
            body: <PageViewsChart data={pageViews} />
        },
        {
            header: "Most Visited Pages",
            body: <PopularPagesChart  />
        },
        {
            header: "Users by Channel",
            body: <UsersGrid data={channelUsers} />
        },
        {
            header: "Conversion Rate",
            body: (
        <div>
          <ConversionRate data={channelUsers} />
        </div>
            )
        },
        {
            header: "Currently",
            body: (
        <div>
          <h3 style={{ marginBottom: "-1px", marginTop: "-10px" }}>2399</h3>
          <p>Active users right now</p>
        </div>
            )
        },
        {
            header: "Bounce Rate",
            body: (
        <div>
          <h3 style={{ marginBottom: "-1px", marginTop: "-10px" }}>55%</h3>
          <p>
            The percentage of all sessions on your site in which users viewed
            only a single page.
          </p>
        </div>
            )
        },
        {
            header: "Visitors",
            body: <VisitorsDonut data={visitors} />
        },
        {
            header: "Conversions This Month",
            body: <ConversionsChart data={conversions} />
        }
    ];

    const handleReposition = (e: TileLayoutRepositionEvent) => {
        setData(e.value);
        console.log(e.value);
    }

    return (
    <TileLayout
      columns={4}
      rowHeight={255}
      positions={data}
      gap={{ rows: 10, columns: 10 }}
      items={tiles}
      onReposition={handleReposition}
    />
    );
};

export default App;
