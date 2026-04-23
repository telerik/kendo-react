import * as React from 'react'

import { PanelBar, PanelBarSelectEventArguments, PanelBarUtils } from '@progress/kendo-react-layout';

const items: Array<any> = [
    {
        id: '1', title: '.0', children: [
            {
                id: '2', title: '.0.0'
            },
            {
                id: '3', title: '.0.1'
            },
            {
                id: '4', title: '.0.2'
            }
        ]
    },
    {
        id: '5', title: '.1', children: [
            {
                id: '6', title: '.1.0'
            },
            {
                id: '7', title: '.1.1', children: [
                    {
                        id: '8', title: '.1.1.0'
                    },
                    {
                        id: '9', title: '.1.1.1'
                    },
                    {
                        id: '10', title: '.1.1.2'
                    },
                    {
                        id: '11', title: '.1.1.3'
                    }
                ]
            },
            {
                id: '12', title: '.1.2'
            }
        ]
    },
    {
        id: '13', title: '.2', disabled: true
    }
]

const App = () => {
    let components = PanelBarUtils.mapItemsToComponents(items);
    const [selected, setSelected] = React.useState('8');

    const handleSelect = (event: PanelBarSelectEventArguments) => {
        if (event.target.props.id) {
            setSelected(event.target.props.id);
        }
    };

    return (
      <PanelBar expanded={['5', '7']} selected={selected} focused={'11'} children={components} onSelect={handleSelect}/>
    )
}
export default App
