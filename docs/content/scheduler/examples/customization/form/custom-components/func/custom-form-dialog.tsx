import * as React from 'react';
import { Dialog, DialogProps } from '@progress/kendo-react-dialogs'
import { Button } from '@progress/kendo-react-buttons';

import {
    useSchedulerEditItemPropsContext,
    useSchedulerEditItemRemoveItemContext,
    useSchedulerEditItemFormItemContext,
    useSchedulerEditItemShowRemoveDialogContext
} from '@progress/kendo-react-scheduler';

export const CustomFormDialog = (props: DialogProps) => {
    const editItemProps = useSchedulerEditItemPropsContext();
    const [, setRemoveItem] = useSchedulerEditItemRemoveItemContext();
    const [, setFormItem] = useSchedulerEditItemFormItemContext();
    const [, setShowRemoveItemDialog] = useSchedulerEditItemShowRemoveDialogContext();

    const handleRemoveClick = () => {
        // Sets the item to be removed
        setRemoveItem(editItemProps.dataItem)
        // Closes the form
        setFormItem(null);
        // Shows the remove confirmation dialog
        setShowRemoveItemDialog(true);
    }

    const Title = (
      <React.Fragment>
        {props.title}&nbsp;
        <Button onClick={handleRemoveClick} fillMode="flat" icon="delete" />
      </React.Fragment>);

    return (
      <Dialog
        {...props}
        title={Title}
      />
    )
}
