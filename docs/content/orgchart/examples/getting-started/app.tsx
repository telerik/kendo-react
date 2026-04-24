import * as React from 'react';
import {
    OrgChart,
    OrgChartExpandChangeEvent,
    processOrgChartItems
} from '@progress/kendo-react-orgchart';

interface TreeViewDataItem {
    id: number;
    parentId?: number | null;
    name: string;
    title: string;
    avatar: string;
    expanded?: boolean;
    employees?: TreeViewDataItem[];
}

const tree: TreeViewDataItem[] = [
    {
        id: 1,
        name: 'Gevin Bell',
        title: 'CEO',
        avatar:
      'https://demos.telerik.com/kendo-ui/content/web/treelist/people/1.jpg',
        employees: [
            {
                id: 2,
                name: 'Clevey Thrustfield',
                title: 'COO',
                parentId: 1,
                avatar:
          'https://demos.telerik.com/kendo-ui/content/web/treelist/people/2.jpg',
                employees: [
                    {
                        id: 7,
                        name: 'Michelle Hudson',
                        title: 'Operations Manager',
                        parentId: 2,
                        avatar:
              'https://demos.telerik.com/kendo-ui/content/web/treelist/people/7.jpg'
                    }
                ]
            },
            {
                id: 3,
                name: 'Carol Baker',
                title: 'CFO',
                parentId: 1,
                avatar:
          'https://demos.telerik.com/kendo-ui/content/web/treelist/people/3.jpg',
                employees: [
                    {
                        id: 6,
                        name: 'Steven North',
                        title: 'Senior Manager',
                        parentId: 3,
                        avatar:
              'https://demos.telerik.com/kendo-ui/content/web/treelist/people/6.jpg'
                    }
                ]
            },
            {
                id: 4,
                name: 'Kendra Howell',
                title: 'CMO',
                parentId: 1,
                avatar:
          'https://demos.telerik.com/kendo-ui/content/web/treelist/people/4.jpg'
            }
        ]
    }
];

const App = () => {
    const [expand, setExpand] = React.useState({
        ids: [1],
        idField: 'id'
    });

    const onExpandChange = (event: OrgChartExpandChangeEvent) => {
        let ids = expand.ids.slice();
        const index = ids.indexOf(event.item.id);

        index === -1 ? ids.push(event.item.id) : ids.splice(index, 1);
        setExpand({ ids, idField: 'id' });
    };

    const expandedData = React.useMemo(() => {
        return processOrgChartItems(tree, {
            expand: expand,
            childrenField: 'employees'
        });
    }, [expand]);

    return (
    <OrgChart
      data={expandedData}
      idField={'id'}
      titleField="title"
      subtitleField="name"
      childrenField="employees"
      onExpandChange={onExpandChange}
      cardWidth={270}
    />
    );
};

export default App;
