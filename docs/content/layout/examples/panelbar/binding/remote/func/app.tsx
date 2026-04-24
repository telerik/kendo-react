import * as React from 'react'

import { PanelBar, PanelBarUtils } from '@progress/kendo-react-layout';

import './styles.css';

const serverData = [
    {
        id: '1', title: 'My Teammates', children: [
            {
                id: '2', title: 'Andrew Fuller', content: 'Team Lead'
            },
            {
                id: '3', title: 'Nancy Leveling', content: 'Sales Associate'
            },
            {
                id: '4', title: 'Robert King', content: 'Sales Associate'
            }
        ]
    },
    {
        id: '5', title: 'Project', children: [
            {
                id: '6', title: 'New Business Plan'
            },
            {
                id: '7', title: 'Sales Forecast', children: [
                    {
                        id: '8', title: 'Q1 Forecast'
                    },
                    {
                        id: '9', title: 'Q2 Forecast'
                    },
                    {
                        id: '10', title: 'Q3 Forecast'
                    },
                    {
                        id: '11', title: 'Q4 Forecast'
                    }
                ]
            },
            {
                id: '12', title: 'Sales Reports'
            }
        ]
    },
    {
        id: '13', title: 'Communication', disabled: true
    }
]

const App = () => {
    const [data, setData] = React.useState<Array<any>>([]);

    React.useEffect(()=>{
        fetchRoot()
            .then((result: any) => {
                setData(result);
            })
            .then(() => {
                return fetchChildren();
            })
            .then((result: any) => {
                setData(result);
            })
    },[])

    // Simulate root items fetch
    const fetchRoot = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let newData = serverData.map(item => {
                    return {
                        ...item, children: undefined, content: (<div className="custom-loading-template"><h4>LOADING</h4>
                          <span className="k-icon k-i-loading" /></div>)
                    };
                })
                resolve(newData);
            }, 1000)
        })
    }

    // Simulate child items fetch
    const fetchChildren = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(serverData);
            }, 5000)
        })
    }

    const components = PanelBarUtils.mapItemsToComponents(data);

    return (
      <PanelBar children={components} />
    )
}

export default App;
