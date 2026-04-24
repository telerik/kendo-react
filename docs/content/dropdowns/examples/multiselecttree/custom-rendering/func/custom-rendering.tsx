import * as React from 'react';
import { SvgIcon } from '@progress/kendo-react-common';
import { folderIcon, filePdfIcon, html5Icon, imageIcon } from '@progress/kendo-svg-icons';
import { ItemProps, MultiSelectTreeTagProps } from '@progress/kendo-react-dropdowns';
import { Button } from '@progress/kendo-react-buttons';

export const Item = (props: ItemProps) => {
    return (
        <React.Fragment>
            <span className={iconClassName(props.item)} />
            {props.item.text}
        </React.Fragment>
    );
};

export const Tag = (props: MultiSelectTreeTagProps) => {
    const { tagData, guid, focusedTag, onTagDelete } = props;
    return (
        <li
            id={`tag-${guid}-${tagData.text.replace(/\s+/g, '-')}`}
            aria-selected={tagData === focusedTag}
            role="option"
            className={`tag-item ${tagData === focusedTag ? 'focused' : ''}`}
            style={{ listStyleType: 'none' }}
        >
            <Button type="button">
                <span
                    style={{
                        display: 'inline-block',
                        background: '#333',
                        color: '#fff',
                        borderRadius: '50%',
                        width: '18px',
                        height: '18px',
                        textAlign: 'center',
                        lineHeight: '18px',
                        marginRight: '3px'
                    }}
                >
                    {tagData.data[0].id}
                </span>
                {tagData.text}
                <span
                    aria-label="delete"
                    className="k-select"
                    onClick={(e) => {
                        e.stopPropagation();
                        onTagDelete.call(undefined, tagData.data, e);
                    }}
                >
                    <span className="k-icon k-i-close" />
                </span>
            </Button>
        </li>
    );
};

const iconClassName = ({ text, items }) => {
    if (items !== undefined) {
        return 'k-icon k-i-folder';
    } else if (is(text, 'pdf')) {
        return 'k-icon k-i-file-pdf';
    } else if (is(text, 'html')) {
        return 'k-icon k-i-html';
    } else if (is(text, 'jpg|png')) {
        return 'k-icon k-i-image';
    } else {
        return '';
    }
};

const is = (fileName, ext) => new RegExp(`.${ext}\$`).test(fileName);
