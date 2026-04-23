import * as React from 'react';
import { SegmentedControl, SegmentedItemProps } from '@progress/kendo-react-buttons';
import { IconWrap } from '@progress/kendo-react-common';
import { listUnorderedIcon, gridIcon } from '@progress/kendo-svg-icons';

const ItemTemplate = (props: SegmentedItemProps) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {props.svgIcon && (
            <span className="icon">
                <IconWrap icon={props.svgIcon} />
            </span>
        )}
        <span>{props.text}</span>
        <span className="badge">New</span>
    </div>
);

const CustomTemplateExample = () => {
    const handleChange = (value: string) => {
        console.log('Selected:', value);
    };

    const renderItemTemplate = (itemData: SegmentedItemProps) => <ItemTemplate {...itemData} />;

    return (
        <SegmentedControl
            items={[
                { value: 'list', text: 'List View', svgIcon: listUnorderedIcon },
                { value: 'grid', text: 'Grid View', svgIcon: gridIcon }
            ]}
            itemTemplate={renderItemTemplate}
            defaultValue="list"
            onChange={handleChange}
        />
    );
};

export default CustomTemplateExample;
