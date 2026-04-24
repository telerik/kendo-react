import * as React from 'react';
import { createDataTree } from '@progress/kendo-react-data-tools';
import {
    OrgChart,
    OrgChartExpandChangeEvent,
    processOrgChartItems
} from '@progress/kendo-react-orgchart';
import { flatdata } from "./flat-data";

const idField = 'id';
const childrenField = 'employees';
const titleField = 'name';
const subtitleField = 'title';
const expandField = 'expanded';

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
      childrenField={childrenField}
      titleField={titleField}
      subtitleField={subtitleField}
      expandField={expandField}
      cardWidth={250}
      onExpandChange={onExpandChange}
      />
    );
};

export default App;
