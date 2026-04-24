import * as React from 'react';
import { OrgChart, OrgChartExpandChangeEvent, processOrgChartItems } from '@progress/kendo-react-orgchart';

const idField = 'id';
const childrenField = 'employees';
const titleField = 'title';
const subtitleField = 'name';

const tree = [
    {
        id: 1,
        name: 'Gevin Bell',
        title: 'CEO',
        avatar: 'https://demos.telerik.com/kendo-ui/content/web/treelist/people/1.jpg',
        employees: [
            {
                id: 2,
                name: 'Carol Baker',
                title: 'CMO',
                parentId: 1,
                avatar: 'https://demos.telerik.com/kendo-ui/content/web/treelist/people/3.jpg'
            },
            {
                id: 3,
                name: 'Kendra Howell',
                title: 'CFO',
                parentId: 1,
                avatar: 'https://demos.telerik.com/kendo-ui/content/web/treelist/people/4.jpg'
            }
        ]
    }
];

const App = () => {
    const [expand1, setExpand1] = React.useState({
        ids: [1, 2, 3],
        idField: 'id'
    });

    const [expand2, setExpand2] = React.useState({
        ids: [1, 2, 3],
        idField: 'id'
    });

    const onExpandChange1 = (event: OrgChartExpandChangeEvent) => {
        let ids = expand1.ids.slice();
        const index = ids.indexOf(event.item.id);

        index === -1 ? ids.push(event.item.id) : ids.splice(index, 1);
        setExpand1({ ids, idField: 'id' });
    };

    const onExpandChange2 = (event: OrgChartExpandChangeEvent) => {
        let ids = expand2.ids.slice();
        const index = ids.indexOf(event.item.id);

        index === -1 ? ids.push(event.item.id) : ids.splice(index, 1);
        setExpand2({ ids, idField: 'id' });
    };

    const expandedData1 = React.useMemo(() => {
        return processOrgChartItems(tree, {
            expand: expand1,
            childrenField: 'employees'
        });
    }, [expand1]);

    const expandedData2 = React.useMemo(() => {
        return processOrgChartItems(tree, {
            expand: expand2,
            childrenField: 'employees'
        });
    }, [expand2]);

    return (
        <div className="row">
            <div className="col-12 col-md-6 mb-4">
                <h4 className="ml-4">Vertical Line: 40px</h4>
                <OrgChart
                    data={expandedData1}
                    idField={idField}
                    childrenField={childrenField}
                    titleField={titleField}
                    subtitleField={subtitleField}
                    verticalLine={40}
                    onExpandChange={onExpandChange1}
                    style={{ display: 'flex', justifyContent: 'center' }}
                />
            </div>
            <div className="col-12 col-md-6 mb-4">
                <h4 className="ml-4">Vertical Line: 80px</h4>
                <OrgChart
                    data={expandedData2}
                    idField={idField}
                    childrenField={childrenField}
                    titleField={titleField}
                    subtitleField={subtitleField}
                    verticalLine={80}
                    onExpandChange={onExpandChange2}
                    style={{ display: 'flex', justifyContent: 'center' }}
                />
            </div>
        </div>
    );
};

export default App;
