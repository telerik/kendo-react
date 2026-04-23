---
title: External Form
description: 'Get started with the KendoReact TreeList and implement external popup-editing forms.'
components: ["treelist"]
slug: external_editing_treelist
position: 4
---

# External Form

The data of the KendoReact TreeList can be edited by using an external form.

{% meta height:580 %}
{% embed_file editing-external-form/func/app.tsx preview %}
{% embed_file editing-external-form/func/main.tsx %}
{% embed_file editing-external-form/func/EditingDialog.tsx %}
{% endmeta %}

## Setup

The following example utilizes the KendoReact [Dialog]({% slug overview_dialog %}) as a modal form for editing the data of the TreeList.

1. When a record is in edit mode, show the editing dialog and pass the edited item to it.

    ```jsx-no-run
        {this.state.itemInEdit &&
            <EditingDialog
                itemInEdit={this.state.itemInEdit}
                onChange={this.onItemChange}
                save={this.save}
                cancel={this.cancel}
            />
        }
    ```

1. Inside `EditingDialog`, bind the editors to the value of the row data.

    ```jsx-no-run
        <FormElement>
            <FieldWrapper>
                <Label editorId={'Employee'} className={'k-form-label'}>
                    {'Employee'}
                </Label>
                <div className={'k-form-field-wrap'}>
                    <Field name={'name'} id={'Employee'} component={TextBox} />
                </div>
            </FieldWrapper>
            <FieldWrapper>
                <Label editorId={'Position'} className={'k-form-label'}>
                    {'Position'}
                </Label>
                <div className={'k-form-field-wrap'}>
                    <Field name="position" id={'Position'} component={TextBox} />
                </div>
            </FieldWrapper>
            <FieldWrapper>
                <Label editorId={'fullTime'} className={'k-checkbox-label'}>
                    <div className={'k-form-field-wrap'}>
                        <Field name="fullTime" id={'fullTime'} component={Checkbox} />
                    </div>
                    {'Full Time'}
                </Label>
            </FieldWrapper>
        </FormElement>
    ```

1. Handle the `change` events of the editors. To update the TreeList edited item, update the `itemInEdit` property in the application state of the TreeList.

    ```jsx-no-run
        const EditingDialog = (props) => {
            const onInputChange = (event) => {
                const { itemInEdit } = props;
                const input = event.target;

                // Will call the `onItemChange` function from the app.
                props.onChange({
                    ...itemInEdit,
                    [input.name]: input.type === 'checkbox' ? input.checked : input.value
                });
            }
        }

        const App = () => {
            const [itemInEdit, setItemInEdit] = useState(null);

            const onItemChange = (itemInEdit) => {
                setItemInEdit(itemInEdit);
            }
            ...
        }
    ```

## Suggested Links

-   [API Reference of the TreeList]({% slug api_treelist_treelistprops %})
-   [API Reference of the TreeListToolbar]({% slug api_treelist_treelisttoolbar %})
-   [API Index of the TreeList]({% slug api_treelist %})
