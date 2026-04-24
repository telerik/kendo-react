import React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { saveIcon, pencilIcon } from '@progress/kendo-svg-icons';
import { EditDescriptor } from '@progress/kendo-react-data-tools';

interface Product {
    ProductID: number;
    ProductName?: string;
    UnitsInStock?: number;
    Discontinued?: boolean;
}

interface GridToolbarEditProps {
    edit: EditDescriptor;
    setEdit: React.Dispatch<React.SetStateAction<EditDescriptor>>;
    data: Product[];
}

const GridToolbarEdit: React.FC<GridToolbarEditProps> = ({ edit, setEdit, data }) => {
    const isInEdit = Object.keys(edit).length > 0;
    const allInEdit = data.reduce((acc, item) => ({ ...acc, [item.ProductID]: true }), {});

    const toggleEdit = () => {
        isInEdit ? setEdit({}) : setEdit(allInEdit);
    };

    return (
        <Button svgIcon={isInEdit ? saveIcon : pencilIcon} onClick={toggleEdit}>
            {isInEdit ? 'Save' : 'Edit'}
        </Button>
    );
};

export default GridToolbarEdit;
