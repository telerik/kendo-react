---
title: EditItem
description: 'Overview of the SchedulerEditItem component. Provide custom editing logic by extending the SchedulerEditItem component'
components: ["scheduler"]
slug: edit-item_items_scheduler
position: 3
---

# SchedulerEditItem

The [SchedulerEditItem]({% slug api_scheduler_scheduleredititem %}) component is responsible for the editing functionality of an [Item]({% slug overview_items_scheduler %}#toc-item-composition).

To extend the default `SchedulerEditItem`, set the [editItem]({% slug api_scheduler_schedulerprops %}#toc-edititem) property to either the `Scheduler` or a specific view, to a modified version of the `SchedulerEditItem` component.

## Controlling the Editing

The `SchedulerEditItem` exposes the following properties to allow controlling the internal edit state.

-   [formItem]({% slug api_scheduler_scheduleredititemprops %}#toc-formitem) and [onFormItemChange]({% slug api_scheduler_scheduleredititemprops %}#toc-onformitemchange)
-   [dragItem]({% slug api_scheduler_scheduleredititemprops %}#toc-dragitem) and [onDragItemChange]({% slug api_scheduler_scheduleredititemprops %}#toc-ondragitemchange)
-   [resizeItem]({% slug api_scheduler_scheduleredititemprops %}#toc-resizeitem) and [onResizeItemChange]({% slug api_scheduler_scheduleredititemprops %}#toc-onresizeitemchange)
-   [removeItem]({% slug api_scheduler_scheduleredititemprops %}#toc-removeitem) and [onRemoveItemChange]({% slug api_scheduler_scheduleredititemprops %}#toc-onremoveitemchange)
-   [showOccurrenceDialog]({% slug api_scheduler_scheduleredititemprops %}#toc-showoccurrencedialog) and [onShowOccurrenceDialogChange]({% slug api_scheduler_scheduleredititemprops %}#toc-onshowoccurrencedialogchange)
-   [showRemoveDialog]({% slug api_scheduler_scheduleredititemprops %}#toc-showremovedialog) and [onShowRemoveDialogChange]({% slug api_scheduler_scheduleredititemprops %}#toc-onshowremovedialogchange)

To control the state of any of the state fields, provide the corresponding `value`-`handler` pair. For example, if you want to control the `dragItem`, provide your own `onDragItemChange` handler, modify the `DataItem` as needed, and pass it back through the `dragItem` property.

The following example demonstrates controlling the `dragItem` state to disallow dragging outside of working hours. We will be hard-coding the `timezone` to the `Etc/UTC` standard.

{% meta height:700 %}
{% embed_file items/edit-item/controlled-state/func/app.tsx preview %}
{% embed_file items/edit-item/controlled-state/func/main.tsx %}
{% endmeta %}

## Extending the Editing

The most common scenario of controlling the editing is to build on top of it. Adding additional functionality without modifying the current one is possible by controlling the state, but do not override the current state.

In the following example we will create an additional step before entering `form-edit` mode. The requirements are:

-   On `click`, display a custom [Popup]({% slug overview_popup %}) with additional info and a `close` button and an `expand` button.
-   On `close` button click, `close` the popup.
-   On `expand` button click, change the `formItem` state of the `SchedulerEditItem`.

First, we will define our custom `SchedulerEditItem` which will contain our logic.

```jsx-no-run
    const CustomEditItem = (props) => {
        return (<SchedulerEditItem {...props} />)
    }
```

Now we'd like to render a `Popup`, whenever the `item` receives a focus.

```jsx-no-run
    const CustomEditItem = (props) => {
        const [show, setShow] = React.useState(false);

        const handleFocus = React.useCallback(
            (event) => { setShow(true); if(props.onFocus) {props.onFocus(event)} },
            [setShow]
        )

        return (
            <React.Fragment>
                <SchedulerEditItem
                    {...props}
                    onFocus={handleFocus}
                />
                <Popup
                    show={show}
                >
                    <div>
                        <h5>{props.title}</h5>
                        <Button className="k-icon k-i-edit"/>
                        <Button className="k-icon k-i-close"/>
                    </div>
                </Popup>
            </React.Fragment>
        )
    }
```

The popup needs an `anchor`, so we will need the `ref` from the default item.

```jsx-no-run
    const CustomEditItem = (props) => {
        const ref = React.useRef(null);
        const [show, setShow] = React.useState(false);

        const handleFocus = React.useCallback(
            (event) => { setShow(true); if(props.onFocus) {props.onFocus(event)} },
            [setShow]
        )

        return (
            <React.Fragment>
                <SchedulerEditItem
                    ref={ref}
                    {...props}
                    onFocus={handleFocus}
                />
                <Popup
                    anchor={ref.current && ref.current.element}
                    show={show}
                >
                    <div>
                        <h5>{props.title}</h5>
                        <Button className="k-icon k-i-edit"/>
                        <Button className="k-icon k-i-close"/>
                    </div>
                </Popup>
            </React.Fragment>
        )
    }
```

Adding the handler to handle the `close` click and the `edit` click, as well as controlling the `formItem` state, while still accepting any change to it proposed by the `SchedulerItem` through the `onEditItemChange` event.

```jsx-no-run
    const CustomEditItem = (props) => {
        const ref = React.useRef(null);

        const [show, setShow] = React.useState(false);
        const [formItem, setFormItem] = React.useState(null);

        const handleFocus = React.useCallback(
            (event) => { setShow(true); if(props.onFocus) {props.onFocus(event)} },
            [setShow]
        )

        const handleCloseClick = React.useCallback(
            (event) => { setShow(false); },
            [setShow]
        )

        const handleEditClick = React.useCallback(
            (event) => { setFormItem(props.dataItem); },
            [setShow]
        )

        const handleFormItemChange = React.useCallback(
            (event) => { setFormItem(event.value); },
            [setShow]
        )

        return (
            <React.Fragment>
                <SchedulerEditItem
                    ref={ref}
                    {...props}
                    onFocus={handleFocus}
                    formItem={formItem}
                    onFormItemChange={handleFormItemChange}
                />
                <Popup
                    anchor={ref.current && ref.current.element}
                    show={show}
                >
                    <div>
                        <h5>{props.title}</h5>
                        <Button className="k-icon k-i-edit" onClick={handleEditClick} />
                        <Button className="k-icon k-i-close" onClick={handleCloseClick} />
                    </div>
                </Popup>
            </React.Fragment>
        )
    }
```

Now lets pass the `CustomEditItem` to the `Scheduler` and see our example in action:

{% meta height:700 %}
{% embed_file items/edit-item/extending/func/app.tsx preview %}
{% embed_file items/edit-item/extending/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Scheduler]({% slug api_scheduler_scheduler %})
-   [API Reference of the SchedulerEditItemProps]({% slug api_scheduler_scheduleredititemprops %})
-   [KendoReact Scheduler](https://www.telerik.com/kendo-react-ui/components/scheduler/)
