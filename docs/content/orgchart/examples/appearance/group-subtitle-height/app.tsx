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
        department: 'Executive',
        avatar: 'https://demos.telerik.com/kendo-ui/content/web/treelist/people/1.jpg',
        employees: [
            {
                id: 2,
                name: 'Carol Baker',
                title: 'CMO',
                department: 'Management',
                parentId: 1,
                avatar: 'https://demos.telerik.com/kendo-ui/content/web/treelist/people/3.jpg'
            },
            {
                id: 3,
                name: 'Kendra Howell',
                title: 'CFO',
                department: 'Management',
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

        event.items?.forEach((item) => {
            const index = ids.indexOf(item.id);
            index === -1 ? ids.push(item.id) : ids.splice(index, 1);
        });

        setExpand1({ ids, idField: 'id' });
    };

    const onExpandChange2 = (event: OrgChartExpandChangeEvent) => {
        let ids = expand2.ids.slice();

        event.items?.forEach((item) => {
            const index = ids.indexOf(item.id);
            index === -1 ? ids.push(item.id) : ids.splice(index, 1);
        });

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
                <h4 className="ml-4">Group Subtitle Height: 15px</h4>
                <OrgChart
                    groupField="department"
                    data={expandedData1}
                    idField={idField}
                    childrenField={childrenField}
                    titleField={titleField}
                    subtitleField={subtitleField}
                    groupSubtitleHeight={15}
                    groupSubtitleColor="rgba(60, 60, 60, 0.08)"
                    onExpandChange={onExpandChange1}
                    style={{ display: 'flex', justifyContent: 'center' }}
                />
            </div>
            <div className="col-12 col-md-6 mb-4">
                <h4 className="ml-4">Group Subtitle Height: 25px</h4>
                <OrgChart
                    groupField="department"
                    data={expandedData2}
                    idField={idField}
                    childrenField={childrenField}
                    titleField={titleField}
                    subtitleField={subtitleField}
                    groupSubtitleHeight={25}
                    groupSubtitleColor="rgba(60, 60, 60, 0.08)"
                    onExpandChange={onExpandChange2}
                    style={{ display: 'flex', justifyContent: 'center' }}
                />
            </div>
        </div>
    );
};

export default App;
