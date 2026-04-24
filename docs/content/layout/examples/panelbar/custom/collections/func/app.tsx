import * as React from 'react'

import { PanelBar, PanelBarItemProps, PanelBarUtils } from '@progress/kendo-react-layout';

import './styles.css';

const items: PanelBarItemProps[] = [
    { title: "First item", content: (<div className="custom-template">First item content</div>) },
    {
        title: "Second item", children: [
            {
                title: "Child item"
            }
        ]
    }
]

const App = () => {
    const components = PanelBarUtils.mapItemsToComponents(items);

    return (
      <PanelBar children={components} />
    )
}

export default App
