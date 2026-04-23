import * as React from 'react';
import { createDataTree } from '@progress/kendo-react-data-tools';
import {
    OrgChart,
    OrgChartExpandChangeEvent,
    processOrgChartItems
} from '@progress/kendo-react-orgchart';

const idField = 'id';
const childrenField = 'employees';
const titleField = 'name';
const subtitleField = 'title';
const expandField = 'expanded';
const flatdata = [
    {
        id: 1,
        name: 'Gevin Bell',
        title: 'CEO',
        avatar:
      'https://demos.telerik.com/kendo-ui/content/web/treelist/people/1.jpg'
    },
    {
        id: 2,
        name: 'Clevey Thrustfield',
        title: 'COO',
        parentId: 1,
        avatar:
      'https://demos.telerik.com/kendo-ui/content/web/treelist/people/2.jpg'
    },
    {
        id: 3,
        name: 'Carol Baker',
        title: 'CFO',
        parentId: 1,
        avatar:
      'https://demos.telerik.com/kendo-ui/content/web/treelist/people/3.jpg'
    },
    {
        id: 4,
        name: 'Kendra Howell',
        title: 'CMO',
        parentId: 1,
        avatar:
      'https://demos.telerik.com/kendo-ui/content/web/treelist/people/4.jpg'
    },
    {
        id: 6,
        name: 'Steven North',
        title: 'Senior Manager',
        parentId: 3,
        avatar:
      'https://demos.telerik.com/kendo-ui/content/web/treelist/people/6.jpg'
    },
    {
        id: 7,
        name: 'Michelle Hudson',
        title: 'Operations Manager',
        parentId: 2,
        avatar:
      'https://demos.telerik.com/kendo-ui/content/web/treelist/people/7.jpg'
    },
    {
        id: 12,
        name: 'Eva Andrews',
        title: 'Team Lead',
        parentId: 6,
        avatar:
      'https://demos.telerik.com/kendo-ui/content/web/treelist/people/12.jpg'
    },
    {
        id: 13,
        name: 'Kaya Nilsen',
        title: 'Financial Specialist',
        parentId: 6,
        avatar:
      'https://demos.telerik.com/kendo-ui/content/web/treelist/people/13.jpg'
    },
    {
        id: 14,
        name: 'Elena Austin',
        title: 'Team Lead',
        parentId: 4,
        avatar:
      'https://demos.telerik.com/kendo-ui/content/web/treelist/people/14.jpg'
    },
    {
        id: 15,
        name: 'Lora Samuels',
        title: 'Lawyer',
        parentId: 4,
        avatar:
      'https://demos.telerik.com/kendo-ui/content/web/treelist/people/15.jpg'
    }
];

const App = () => {
    const [expand, setExpand] = React.useState({ ids: [1], idField: 'id' });

    const onExpandChange = (event: OrgChartExpandChangeEvent) => {
        let ids = expand.ids.slice();

        const index = ids.indexOf(event.item.id);

        index === -1 ? ids.push(event.item.id) : ids.splice(index, 1);
        setExpand({ ids, idField: 'id' });
    };

    const expandedData = React.useMemo(() => {
        const treeData = createDataTree(
            flatdata,
            (i) => i.id,
            (i) => i.parentId,
            childrenField
        );
        return processOrgChartItems(treeData, {
            expand: expand,
            childrenField: childrenField
        });
    }, [expand]);
    return (
    <OrgChart
      data={expandedData}
      navigatable={true}
      idField={idField}
      cardWidth={270}
      childrenField={childrenField}
      titleField={titleField}
      subtitleField={subtitleField}
      expandField={expandField}
      onExpandChange={onExpandChange}
    />
    );
};

export default App;
