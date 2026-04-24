import * as React from "react";;
import { createDataTree } from "@progress/kendo-react-data-tools";
import {
    OrgChart,
    OrgChartExpandChangeEvent,
    processOrgChartItems
} from "@progress/kendo-react-orgchart";

const idField = "ID";
const childrenField = "employees";
const titleField = "name";
const subtitleField = "title";
const flatdata = [
    {
        ID: 1,
        name: "Gevin Bell",
        position: "CEO",
        department: "CEO",
        avatar:
      "https://demos.telerik.com/kendo-ui/content/web/treelist/people/1.jpg",
        parentId: null
    },
    {
        ID: 2,
        name: "Clevey Thrustfield",
        position: "CEO",
        department: "CEO",
        avatar:
      "https://demos.telerik.com/kendo-ui/content/web/treelist/people/2.jpg",
        parentId: null
    },
    {
        ID: 3,
        name: "Carol Baker",
        position: "CMO",
        department: "Chief Officers",
        parentId: 1,
        avatar:
      "https://demos.telerik.com/kendo-ui/content/web/treelist/people/3.jpg"
    },
    {
        ID: 4,
        name: "Kendra Howell",
        position: "CFO",
        department: "Chief Officers",
        parentId: 1,
        avatar:
      "https://demos.telerik.com/kendo-ui/content/web/treelist/people/4.jpg"
    },
    {
        ID: 5,
        name: "Sean Rusell",
        position: "Financial Manager",
        department: "Financial Dep.",
        parentId: 2,
        avatar:
      "https://demos.telerik.com/kendo-ui/content/web/treelist/people/5.jpg"
    },
    {
        ID: 6,
        name: "Andrew Berry",
        position: "Team Lead",
        department: "Team Leads",
        parentId: 3,
        avatar:
      "https://demos.telerik.com/kendo-ui/content/web/treelist/people/8.jpg"
    },
    {
        ID: 8,
        name: "Austin Piper",
        position: "Accountant",
        department: "Accountants",
        parentId: 5,
        avatar:
      "https://demos.telerik.com/kendo-ui/content/web/treelist/people/10.jpg"
    },
    {
        ID: 9,
        name: "Dilyana Newman",
        position: "Junior Accountant",
        department: "Accountants",
        parentId: 5,
        avatar:
      "https://demos.telerik.com/kendo-ui/content/web/treelist/people/11.jpg"
    },
    {
        ID: 10,
        name: "Eva Andrews",
        position: "Operations Manager",
        department: "Operations Managers",
        parentId: 4,
        avatar:
      "https://demos.telerik.com/kendo-ui/content/web/treelist/people/12.jpg"
    }
];

const treeData = createDataTree(
    flatdata,
    (i) => i.ID,
    (i) => i.parentId,
    childrenField
);

const App = () => {
    const [expand, setExpand] = React.useState({ ids: [1, 2], idField: "ID" });

    const onExpandChange = (event: OrgChartExpandChangeEvent) => {
        let ids = expand.ids.slice();

        event.items?.forEach((item) => {
            const index = ids.indexOf(item.ID);

            index === -1 ? ids.push(item.ID) : ids.splice(index, 1);
        });

        setExpand({ ids, idField: "ID" });
    };

    const expandedData = React.useMemo(() => {
        return processOrgChartItems(treeData, {
            expand: expand,
            childrenField: childrenField
        });
    }, [expand]);

    return (
    <>
      <OrgChart
        cardWidth={270}
        groupField="department"
        idField={idField}
        childrenField={childrenField}
        titleField={titleField}
        subtitleField={subtitleField}
        data={expandedData}
        onExpandChange={onExpandChange}
        groupTitleHeight={20}
      />
    </>
    );
};

export default App;
