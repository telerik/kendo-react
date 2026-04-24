---
title: External Form
description: 'Get started with the KendoKendoReact Data Grid and implement external popup-editing forms.'
components: ["datagrid"]
slug: external_editing_grid
position: 70
tier: premium
subject: External Form Editing feature of the Grid
---

# External Form Editing in KendoReact Data Grid

The data of the KendoKendoReact Data Grid can be edited by using the [KendoReact Form component]({% slug overview_form %}).

<CtaPanelOverview></CtaPanelOverview>

{% meta height:480 %}
{% embed_file editing-kr-form/func/app.tsx preview %}
{% embed_file editing-kr-form/func/main.tsx %}
{% embed_file editing-kr-form/func/editForm.tsx %}
{% endmeta %}

## Setup

The following example utilizes the KendoReact [Dialog]({% slug overview_dialog %}) as a modal form for editing the data of the Grid.

1. When a record is in edit mode, show the container and pass the edited item to the `EditForm` component.

    ```jsx-no-run
    {editItem ? <EditForm cancelEdit={handleCancelEdit} onSubmit={handleSubmit} item={editItem} /> : null}
    ```

1. Inside `EditForm` we use the [KendoReact Form component]({% slug overview_form %}) and set the edited item as initial values for the Form to populate it.

    ```jsx-no-run
    <Form
        initialValues={item}
        onSubmit={onSubmit}
        render={(renderProps) => (
            <Dialog title={`Edit ${item.ProductName}`} onClose={cancelEdit} style={{ maxWidth: '650px' }}>
                <FormElement>
                    <FieldWrapper>
                        <Field name={'ProductName'} component={TextBoxField} label={'Product Name'} />
                    </FieldWrapper>
                    <FieldWrapper>
                        <Label editorId={'Category'} className={'k-form-label'}>
                            {'Category'}
                        </Label>
                        <div className={'k-form-field-wrap'}>
                            <Field
                                id={'Category'}
                                name={'Category'}
                                component={DropDownList}
                                data={categories}
                                textField={'CategoryName'}
                            />
                        </div>
                    </FieldWrapper>
                    <FieldWrapper>
                        <Field
                            name={'UnitPrice'}
                            component={NonNegativeNumericInput}
                            label={'Price'}
                            validator={minValueValidator}
                        />
                    </FieldWrapper>
                    <FieldWrapper>
                        <Field
                            name={'UnitsInStock'}
                            component={NonNegativeNumericInput}
                            label={'In stock'}
                            validator={minValueValidator}
                        />
                    </FieldWrapper>
                </FormElement>
                <DialogActionsBar layout="start">
                    <Button
                        type={'submit'}
                        themeColor={'primary'}
                        disabled={!renderProps.allowSubmit}
                        onClick={renderProps.onSubmit}
                        icon="save"
                        svgIcon={saveIcon}
                    >
                        Update
                    </Button>
                    <Button onClick={cancelEdit} icon="cancel" svgIcon={cancelIcon}>
                        Cancel
                    </Button>
                </DialogActionsBar>
            </Dialog>
        )}
        {...other}
    />
    ```

1. Add validation using the built-it [validation functionality of the Form]({% slug validation_form %}).

    ```jsx-no-run
    <Field
        name={'UnitPrice'}
        component={NonNegativeNumericInput}
        label={'Price'}
        validator={minValueValidator}
    />
    ```

1. Handle the onSubmit event of the Form to update the Grid value.

    ```jsx-no-run
    <Form onSubmit={onSubmit}>
    ...
    const handleSubmit = (newDataItem) => {
        let newItem = true;
        let newData = data.map((item) => {
            if (newDataItem.ProductID === item.ProductID) {
                newItem = false;
                item = { ...newDataItem };
            }
            return item;
        });
        if (newItem) {
            newData.push(newDataItem);
        }
        setData(newData);
        setEdit({});
    };
    ```

## Suggested Links

-   [Data Query Overview]({% slug overview_dataquery %})
-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Reference of the GridToolbar]({% slug api_grid_gridtoolbar %})
-   [API Index of the Grid]({% slug api_grid %})
