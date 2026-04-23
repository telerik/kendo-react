import * as React from 'react'

import { PanelBar, PanelBarUtils } from '@progress/kendo-react-layout';

import './styles.css';

const items: Array<any> = [
    { title: "First item", content: "First item content", expanded: true },
    {
        title: "Second item", children: [
            { title: "Second item child item" }
        ]
    }
];

const App = () => {
    let components: any = PanelBarUtils.mapItemsToComponents(items);

    return (
      <PanelBar children={components} />
    )
}
export default App;
