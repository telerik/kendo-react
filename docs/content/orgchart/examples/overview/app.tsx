import * as React from 'react';
import { createDataTree } from '@progress/kendo-react-data-tools';
import { OrgChart, OrgChartExpandChangeEvent, processOrgChartItems } from '@progress/kendo-react-orgchart';
import { flatdata } from './flat-data';

const idField = 'id';
const childrenField = 'employees';
const titleField = 'name';
const subtitleField = 'title';
const expandField = 'expanded';

const App = () => {
    const [expand, setExpand] = React.useState({ ids: [1], idField: 'id' });

    const onExpandChange = (event: OrgChartExpandChangeEvent) => {
        const ids = [...expand.ids];
        const index = ids.indexOf(event.item.id);
        if (index === -1) {
            ids.push(event.item.id);
        } else {
            ids.splice(index, 1);
        }
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
            expand,
            childrenField
        });
    }, [expand]);

    return (
        <div className="k-display-flex k-justify-content-center k-mx-auto k-mt-4">
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
        </div>
    );
};

export default App;
