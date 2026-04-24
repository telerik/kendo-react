import * as React from 'react'

import { PanelBar, PanelBarUtils } from '@progress/kendo-react-layout';

const items: Array<any> = [
    {
        id: "0", title: "Projects", children: [
            { id: "1", title: "New Business Plan" },
            {
                id: "2", title: "Sales Forecasts", children: [
                    { id: "3", title: "Q1 Forecast" },
                    { id: "4", title: "Q2 Forecast" },
                    { id: "5", title: "Q3 Forecast" },
                    { id: "6", title: "Q4 Forecast" }
                ]
            }
        ]
    },
    {
        id: "7", title: "Programs", children: [
            { id: "8", title: "Monday" },
            { id: "9", title: "Tuesday" },
            { id: "10", title: "Wednesday" },
            { id: "11", title: "Thursday" },
            { id: "12", title: "Friday" }
        ]
    },
    { id: "13", title: "Communication", disabled: true }
];

const App = () => {
    const components = PanelBarUtils.mapItemsToComponents(items);

    return (
        <PanelBar children={components} />
    )
}
export default App
