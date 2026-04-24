import * as React from 'react';
import { TreeView } from '@progress/kendo-react-treeview';
import { Avatar } from '@progress/kendo-react-layout';
import { SvgIcon } from '@progress/kendo-react-common';
import {
    starIcon,
    checkIcon,
    xIcon,
    exclamationCircleIcon,
} from '@progress/kendo-svg-icons';
const tree = [
    {
        text: 'My Documents',
        expanded: true,
        items: [
            {
                text: 'KendoReact Project',
                expanded: true,
                items: [
                    {
                        text: 'about.html',
                    },
                    {
                        text: 'index.html',
                    },
                    {
                        text: 'logo.png',
                    },
                ],
            },
            {
                text: 'New Web Site',
                expanded: true,
                items: [
                    {
                        text: 'mockup.jpg',
                    },
                    {
                        text: 'Research.pdf',
                    },
                ],
            },
            {
                text: 'Reports',
                expanded: true,
                items: [
                    {
                        text: 'February.pdf',
                    },
                    {
                        text: 'March.pdf',
                    },
                    {
                        text: 'April.pdf',
                    },
                ],
            },
        ],
    },
];
const MyItem = (props) => {
    const text = props.item.text;
    const showStarIcon = text == 'mockup.jpg';
    const showCheckIcon = text == 'KendoReact Project';
    const showXIcon = text == 'April.pdf';
    const showExclamationIcon = text == 'logo.png';
    return (
    <>
      <Avatar type={'text'} size={'small'}>
        {props.item.text[0].toUpperCase()}
      </Avatar>
      <span style={{ padding: '4px' }}>{text}</span>
      {showStarIcon && <SvgIcon icon={starIcon} themeColor={'warning'} />}
      {showCheckIcon && <SvgIcon icon={checkIcon} themeColor={'success'} />}
      {showXIcon && <SvgIcon icon={xIcon} themeColor={'error'} />}
      {showExclamationIcon && (
        <SvgIcon icon={exclamationCircleIcon} themeColor={'warning'} />
      )}
    </>
    );
};
const App = () => {
    const [data, setData] = React.useState(tree);

    const onExpandChange = (event) => {
        event.item.expanded = !event.item.expanded;
        setData([...data]);
    };
    return (
    <TreeView
      data={data}
      item={MyItem}
      expandIcons={true}
      onExpandChange={onExpandChange}
    />
    );
};

export default App;
