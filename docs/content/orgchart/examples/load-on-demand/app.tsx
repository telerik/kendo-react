import * as React from 'react';
import { createPortal } from 'react-dom';
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
        hasChildren: true,
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
    }
];

const initialData = [flatdata[0], flatdata[1]];

const LoadingPanel = () => {
    const loadingPanel = (
    <div className="k-loading-mask">
      <span className="k-loading-text">Loading</span>
      <div className="k-loading-image" />
      <div className="k-loading-color" />
    </div>
    );

    const orgchart = document && document.querySelector('.k-orgchart');
    return orgchart ? createPortal(loadingPanel, orgchart) : loadingPanel;
};
const App = () => {
    const [expand, setExpand] = React.useState({ ids: [], idField: 'id' });
    const [loading, setLoading] = React.useState(false);
    const [orgChartData, setOrgChartData] = React.useState<any[]>(initialData);

    const onExpandChange = (event: OrgChartExpandChangeEvent) => {
        let ids = expand.ids.slice();

        const index = ids.indexOf(event.item.id as never);

        index === -1 ? ids.push(event.item.id as never) : ids.splice(index, 1);

        const filteredChildren = flatdata.filter(
            (i) =>
                i.parentId === event.item.id &&
        !orgChartData.some((it) => it.id === i.id)
        );
        const newData = [...orgChartData, ...filteredChildren];
        setLoading(true);
        // simulate a server call
        setTimeout(() => {
            setExpand({ ids, idField: 'id' });
            setLoading(false);
            setOrgChartData(newData);
        }, 300);
    };

    const expandedData = React.useMemo(() => {
        const treeData = createDataTree(
            orgChartData,
            (i) => i.id,
            (i) => i.parentId,
            childrenField
        );
        return processOrgChartItems(treeData, {
            expand: expand,
            childrenField: childrenField
        });
    }, [expand, orgChartData]);
    return (
    <>
      <OrgChart
        data={expandedData}
        idField={idField}
        childrenField={childrenField}
        titleField={titleField}
        subtitleField={subtitleField}
        expandField={expandField}
        hasChildrenField={'hasChildren'}
        onExpandChange={onExpandChange}
      />
      {loading && <LoadingPanel />}
    </>
    );
};

export default App;
