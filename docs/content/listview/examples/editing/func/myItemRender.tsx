import React, { useEffect, useState, useCallback } from 'react';
import { Card, CardTitle, CardSubtitle, CardBody } from '@progress/kendo-react-layout';
import { Input, NumericTextBox } from '@progress/kendo-react-inputs';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { ListViewItemProps } from '@progress/kendo-react-listview';
import { Button } from '@progress/kendo-react-buttons';
import { Label } from '@progress/kendo-react-labels';

interface MyItemRenderProps extends ListViewItemProps {
    saveItem: (item: any) => void;
    deleteItem: (item: any) => void;
}

const dropDownData = [
    { CategoryName: 'Beverages', CategoryID: 1 },
    { CategoryName: 'Condiments', CategoryID: 2 },
    { CategoryName: 'Confections', CategoryID: 3 },
    { CategoryName: 'Dairy Products', CategoryID: 4 },
    { CategoryName: 'Grains/Cereals', CategoryID: 5 },
    { CategoryName: 'Meat/Poultry', CategoryID: 6 },
    { CategoryName: 'Produce', CategoryID: 7 },
    { CategoryName: 'Seafood', CategoryID: 8 }
];

const MyItemRender = (props: MyItemRenderProps) => {
    const [item, setItem] = useState(props.dataItem);
    useEffect(() => {
        if (item.ProductID !== props.dataItem.ProductID) {
            setItem(props.dataItem);
        }
    }, [props.dataItem, item.ProductID]);
    const enterEdit = useCallback(() => setItem({ ...item, edit: true }), [item]);
    const cancelEdit = useCallback(() => setItem({ ...item, edit: false }), [item]);
    const handleChange = useCallback((e: any, field: string) => {
        setItem((prev) => ({ ...prev, [field]: e.value }));
    }, []);
    const handleSave = useCallback(() => {
        props.saveItem(item);
        setItem({ ...item, edit: false });
    }, [item, props]);
    const handleDelete = useCallback(() => props.deleteItem(item), [item, props]);
    return (
        <div key={props.dataItem.ProductID}>
            <Card orientation="horizontal" style={{ borderWidth: '0px 0px 1px' }}>
                {item.edit ? (
                    <CardBody>
                        <div className="k-hbox k-justify-content-between k-flex-wrap">
                            <div style={{ width: '40%', padding: '5 0' }}>
                                <Label style={{ display: 'block' }}>Name:</Label>
                                <Input value={item.ProductName} onChange={(e) => handleChange(e, 'ProductName')} />
                                <Label style={{ display: 'block' }}>Category:</Label>
                                <DropDownList
                                    data={dropDownData}
                                    textField="CategoryName"
                                    value={item.Category}
                                    onChange={(e) => handleChange(e, 'Category')}
                                />
                            </div>
                            <div style={{ width: '35%', padding: '5 0' }}>
                                <Label style={{ display: 'block' }}>Price:</Label>
                                <NumericTextBox
                                    value={item.UnitPrice}
                                    format="c2"
                                    onChange={(e) => handleChange(e, 'UnitPrice')}
                                />
                                <Label style={{ display: 'block' }}>Available:</Label>
                                <NumericTextBox
                                    value={item.UnitsInStock}
                                    onChange={(e) => handleChange(e, 'UnitsInStock')}
                                />
                            </div>
                            <div style={{ width: '25%', padding: '5 0' }}>
                                <Button
                                    themeColor="primary"
                                    type="button"
                                    style={{ marginRight: 5 }}
                                    onClick={handleSave}
                                >
                                    Save
                                </Button>
                                <Button type="button" onClick={cancelEdit}>
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    </CardBody>
                ) : (
                    <CardBody>
                        <div className="k-hbox k-justify-content-between k-flex-wrap">
                            <div style={{ width: '40%', padding: '5 0' }}>
                                <CardTitle style={{ fontSize: 16 }}>{item.ProductName}</CardTitle>
                                <CardSubtitle>{item.Category.CategoryName}</CardSubtitle>
                            </div>
                            <div style={{ width: '35%', padding: '5 0' }}>
                                <div>
                                    Price:{' '}
                                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
                                        item.UnitPrice
                                    )}
                                </div>
                                <div>Available units: {item.UnitsInStock}</div>
                            </div>
                            <div style={{ width: '25%', padding: '5 0' }}>
                                <Button
                                    themeColor="primary"
                                    type="button"
                                    style={{ marginRight: 5 }}
                                    onClick={enterEdit}
                                >
                                    Edit
                                </Button>
                                <Button type="button" onClick={handleDelete}>
                                    Delete
                                </Button>
                            </div>
                        </div>
                    </CardBody>
                )}
            </Card>
        </div>
    );
};

export default MyItemRender;
