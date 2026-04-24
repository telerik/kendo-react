import * as React from 'react';
import { createDataTree } from '@progress/kendo-react-data-tools';
import { OrgChart } from '@progress/kendo-react-orgchart';

const idField = 'ID';
const childrenField = 'employees';
const titleField = 'name';
const subtitleField = 'title';
const flatdata = [
    {
        ID: 1,
        name: 'Gevin Bell',
        position: 'CEO',
        department: 'CEO',
        expanded: true,
        avatar:
      'https://demos.telerik.com/kendo-ui/content/web/treelist/people/1.jpg',
        parentId: null
    },
    {
        ID: 2,
        name: 'Clevey Thrustfield',
        position: 'CEO',
        department: 'CEO',
        expanded: true,
        avatar:
      'https://demos.telerik.com/kendo-ui/content/web/treelist/people/2.jpg',
        parentId: null
    },
    {
        ID: 3,
        name: 'Carol Baker',
        position: 'CMO',
        department: 'Chief Officers',
        parentId: 1,
        expanded: true,
        avatar:
      'https://demos.telerik.com/kendo-ui/content/web/treelist/people/3.jpg'
    },
    {
        ID: 4,
        name: 'Kendra Howell',
        position: 'CFO',
        department: 'Chief Officers',
        parentId: 1,
        expanded: true,
        avatar:
      'https://demos.telerik.com/kendo-ui/content/web/treelist/people/4.jpg'
    },
    {
        ID: 5,
        name: 'Sean Rusell',
        position: 'Financial Manager',
        department: 'Financial Department',
        parentId: 2,
        expanded: true,
        avatar:
      'https://demos.telerik.com/kendo-ui/content/web/treelist/people/5.jpg'
    },
    {
        ID: 6,
        name: 'Andrew Berry',
        position: 'Team Lead',
        department: 'Team Leads',
        parentId: 3,
        expanded: true,
        avatar:
      'https://demos.telerik.com/kendo-ui/content/web/treelist/people/8.jpg'
    },
    {
        ID: 7,
        name: 'Jake Miller',
        position: 'Senior Operations Manager',
        department: 'Operations Managers',
        parentId: 3,
        expanded: true,
        avatar:
      'https://demos.telerik.com/kendo-ui/content/web/treelist/people/9.jpg'
    },
    {
        ID: 8,
        name: 'Austin Piper',
        position: 'Accountant',
        department: 'Accountants',
        parentId: 5,
        expanded: true,
        avatar:
      'https://demos.telerik.com/kendo-ui/content/web/treelist/people/10.jpg'
    },
    {
        ID: 9,
        name: 'Dilyana Newman',
        position: 'Junior Accountant',
        department: 'Accountants',
        parentId: 5,
        expanded: true,
        avatar:
      'https://demos.telerik.com/kendo-ui/content/web/treelist/people/11.jpg'
    },
    {
        ID: 10,
        name: 'Eva Andrews',
        position: 'Operations Manager',
        department: 'Operations Managers',
        parentId: 4,
        expanded: true,
        avatar:
      'https://demos.telerik.com/kendo-ui/content/web/treelist/people/12.jpg'
    }
];

const treeData = createDataTree(
    flatdata,
    (i) => i.ID,
    (i) => i.parentId,
    childrenField
);

const itemRender = (props) => {
    return <div>title: {props.title}</div>;
};

const groupTitleRender = (props) => {
    return (
    <div style={props.style} className={props.className}>
      group title: {props.title} {props.level}
    </div>
    );
};

const groupSubtitleRender = (props) => {
    return (
    <div style={props.style} className={props.className}>
      group subtitle: {props.subtitle} {props.level}
    </div>
    );
};

const App = () => {
    return (
    <OrgChart
      groupField="department"
      idField={idField}
      childrenField={childrenField}
      titleField={titleField}
      subtitleField={subtitleField}
      itemRender={itemRender}
      cardHeight={100}
      cardWidth={100}
      groupTitleRender={groupTitleRender}
      groupSubtitleRender={groupSubtitleRender}
      groupTitleHeight={50}
      groupSubtitleHeight={50}
      verticalLine={120}
      data={treeData}
    />
    );
};

export default App;
