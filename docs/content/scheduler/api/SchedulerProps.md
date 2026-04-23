---
title: SchedulerProps
description: "Learn how to build custom functionality when working with the React Scheduler by Kendo UI with the help of the SchedulerProps."
api_reference: true
type: inner_api
slug: api_scheduler_schedulerprops
---

# SchedulerProps
Represents the props of the [KendoReact Scheduler component](https://www.telerik.com/kendo-react-ui/components/scheduler).


<table class="api-table api-table-properties">
<thead>
<tr>
<th class="th-name">Name</th>
<th class="th-type">Type</th>
<th class="th-default">Default</th>
<th class="th-desc">Description</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td class="table-cell-name">


#### ariaLabel?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `aria-label` attribute to be applied to the Scheduler component.

For more information, refer to the [Scheduler Accessibility Compliance](https://www.telerik.com/kendo-react-ui/components/scheduler/accessibility/wai-aria-support) article.

```jsx
<Scheduler ariaLabel="Scheduler component" />
```






</td>
</tr>
<tr>
<td class="table-cell-name">


#### ariaLabelledby?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `aria-labelledby` attribute to be applied to the Scheduler component.

For more information, refer to the [Scheduler Accessibility Compliance](https://www.telerik.com/kendo-react-ui/components/scheduler/accessibility/wai-aria-support) article.

```jsx
<Scheduler ariaLabelledby="scheduler-label" />
```






</td>
</tr>
<tr>
<td class="table-cell-name">


#### children?


</td>
<td type class="table-cell-type">


<code>


[SchedulerView]({% slug api_scheduler_schedulerview %}) | [SchedulerView]({% slug api_scheduler_schedulerview %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the available `view` components as `children`. The Scheduler matches the currently selected view and renders it.

```jsx
<Scheduler>
  <DayView />
  <WeekView />
</Scheduler>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### className?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the `className` attribute of the wrapping element of the Scheduler.

```jsx
<Scheduler className="custom-scheduler" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### data?


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the data of the Scheduler component. The data is then parsed and rendered as visual Scheduler items.

```jsx
const data = [{ id: 1, title: 'Event', start: new Date(), end: new Date() }];
<Scheduler data={data} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### date?


</td>
<td type class="table-cell-type">


<code>


Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the current selected `Date`. The current selected date is passed to the selected view and transformed into a range.

```jsx
<Scheduler date={new Date()} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultDate?


</td>
<td type class="table-cell-type">


<code>


Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets a default selected `Date`. Use the `defaultDate` property to specify the initial rendered date while remaining in an uncontrolled mode.

```jsx
<Scheduler defaultDate={new Date()} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultView?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the initially selected view.

For more information refer to the [Scheduler Views](https://www.telerik.com/kendo-react-ui/components/scheduler/views) article.

Sets the initially selected view. The available values are:
* `day`
* `week`
* `month`
* `agenda`
* `timeline`

```jsx
<Scheduler defaultView="week" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### editable?


</td>
<td type class="table-cell-type">


<code>


boolean | [EditableProp]({% slug api_scheduler_editableprop %})


</code>


</td>
<td class="table-cell-default">


<code>


false


</code>


</td>
<td class="table-cell-comment">


Sets if the Scheduler component is editable. The value can be either a `boolean` or an Object to specify different types of editing.




```jsx
<Scheduler editable={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### editItem?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[SchedulerEditItemProps]({% slug api_scheduler_scheduleredititemprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default editItem. Specifying the `editItem` property of a specific view will override this property.

The default component is: [SchedulerEditItem](https://www.telerik.com/kendo-react-ui/components/scheduler/api/scheduleredititem).

For more information on customizing the scheduler items, refer to the [Item Customization](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/items) article.

```jsx
const CustomEditItem = (props) => <div>{props.title}</div>;
<Scheduler editItem={CustomEditItem} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### editSlot?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[SchedulerEditSlotProps]({% slug api_scheduler_schedulereditslotprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default editSlot component. Specifying the `editSlot` property of a specific view will override this property.

The default component is: [SchedulerEditSlot](https://www.telerik.com/kendo-react-ui/components/scheduler/api/schedulereditslot).

For more information on customizing the scheduler slots, refer to the [Slot Customization](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/slots) article.

```jsx
const CustomEditSlot = (props) => <div>{props.title}</div>;
<Scheduler editSlot={CustomEditSlot} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### editTask?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[SchedulerTaskProps]({% slug api_scheduler_schedulertaskprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default editTask. Specifying the `editTask` property of a specific view will override this property.
Currently, only the [AgendaView](https://www.telerik.com/kendo-react-ui/components/scheduler/views/agenda) uses the `editTask`.

The default component is: [SchedulerEditTask](https://www.telerik.com/kendo-react-ui/components/scheduler/api/scheduleredittask).

For more information on customizing the scheduler tasks, refer to the [Task Customization](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/tasks) article.

```jsx
const CustomEditTask = (props) => <div>{props.title}</div>;
<Scheduler editTask={CustomEditTask} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### footer?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[SchedulerFooterProps]({% slug api_scheduler_schedulerfooterprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default footer component of the Scheduler.

The default component is: [SchedulerFooter](https://www.telerik.com/kendo-react-ui/components/scheduler/api/schedulerfooter).

For more information on customizing the scheduler footer, refer to the [Footer Customization](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/header-footer) article.

```jsx
const CustomFooter = (props) => <div>Custom Footer</div>;
<Scheduler footer={CustomFooter} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### group?


</td>
<td type class="table-cell-type">


<code>


[SchedulerGroup]({% slug api_scheduler_schedulergroup %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the groups of the Scheduler.

```jsx
const group = { resources: ['Rooms'], orientation: 'horizontal' };
<Scheduler group={group} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### header?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[SchedulerHeaderProps]({% slug api_scheduler_schedulerheaderprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default header component of the Scheduler.

The default component is: [SchedulerHeader](https://www.telerik.com/kendo-react-ui/components/scheduler/api/schedulerheader).

For more information on customizing the scheduler header, refer to the [Header Customization](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/header-footer) article.

```jsx
const CustomHeader = (props) => <div>Custom Header</div>;
<Scheduler header={CustomHeader} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### height?


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">


<code>


600


</code>


</td>
<td class="table-cell-comment">


Sets the `height` of the Scheduler.




```jsx
<Scheduler height={600} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### id?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the `id` of the wrapping element of the Scheduler.

```jsx
<Scheduler id="my-scheduler" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### item?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[SchedulerItemProps]({% slug api_scheduler_scheduleritemprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default item. If you specify the `item` property of a specific view, it overrides this property.

The default component is: [SchedulerItem](https://www.telerik.com/kendo-react-ui/components/scheduler/api/scheduleritem).

For more information on customizing the scheduler items, refer to the [Item Customization](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/items) article.

```jsx
const CustomItem = (props) => <div>{props.title}</div>;
<Scheduler item={CustomItem} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### modelFields?


</td>
<td type class="table-cell-type">


<code>


[SchedulerModelFields]({% slug api_scheduler_schedulermodelfields %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the names of the model fields from which the Scheduler reads its data
([see example](https://www.telerik.com/kendo-react-ui/components/scheduler/data-binding)).

```jsx
const modelFields = { id: 'TaskID', start: 'Start', end: 'End' };
<Scheduler modelFields={modelFields} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDataChange?


</td>
<td type class="table-cell-type">


<code>


(event: [SchedulerDataChangeEvent]({% slug api_scheduler_schedulerdatachangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time editing occurs.
To enable editing set the `editable` property to `true` or an [`EditableProp`](https://www.telerik.com/kendo-react-ui/components/scheduler/api/editableprop).

For more information refer to the [Scheduler Editing](https://www.telerik.com/kendo-react-ui/components/scheduler/editing) article.

```jsx
const handleDataChange = (event) => console.log(event);
<Scheduler onDataChange={handleDataChange} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDateChange?


</td>
<td type class="table-cell-type">


<code>


(args: [SchedulerDateChangeEvent]({% slug api_scheduler_schedulerdatechangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user selects a new `date`.

```jsx
const handleDateChange = (args) => console.log(args.value);
<Scheduler onDateChange={handleDateChange} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onViewChange?


</td>
<td type class="table-cell-type">


<code>


(args: [SchedulerViewChangeEvent]({% slug api_scheduler_schedulerviewchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user selects a new `view`. [(see example)](https://www.telerik.com/kendo-react-ui/components/scheduler/views#toc-controlling-the-selected-view).

```jsx
const handleViewChange = (args) => console.log(args.value);
<Scheduler onViewChange={handleViewChange} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### resources?


</td>
<td type class="table-cell-type">


<code>


[SchedulerResource]({% slug api_scheduler_schedulerresource %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the resources of the Scheduler.

```jsx
const resources = [{ name: 'Rooms', data: [{ text: 'Room 1', value: 1 }] }];
<Scheduler resources={resources} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### role?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the `role` attribute of the Scheduler wrapping element.

For more information, refer to the [Scheduler Accessibility Compliance](https://www.telerik.com/kendo-react-ui/components/scheduler/accessibility/wai-aria-support) article.

```jsx
<Scheduler role="application" />
```






</td>
</tr>
<tr>
<td class="table-cell-name">


#### rtl?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Forces RTL mode. For more information refer to [RTL Support](https://www.telerik.com/kendo-react-ui/components/scheduler/globalization#toc-right-to-left-support).

```jsx
<Scheduler rtl={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### slot?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[SchedulerSlotProps]({% slug api_scheduler_schedulerslotprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default slot component. Specifying the `slot` property of a specific view will override this property.

The default component is: [SchedulerSlot](https://www.telerik.com/kendo-react-ui/components/scheduler/api/schedulerslot).

For more information on customizing the scheduler slots, refer to the [Slot Customization](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/slots) article.

```jsx
const CustomSlot = (props) => <div>{props.title}</div>;
<Scheduler slot={CustomSlot} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### style?


</td>
<td type class="table-cell-type">


<code>


React.CSSProperties


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the `style` object of the wrapping element of the Scheduler.

```jsx
<Scheduler style={{ height: '500px' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### tabIndex?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


-1


</code>


</td>
<td class="table-cell-comment">


Specifies the `tabIndex` attribute of the wrapping element of the Scheduler.




```jsx
<Scheduler tabIndex={0} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### task?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[SchedulerTaskProps]({% slug api_scheduler_schedulertaskprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default task. Specifying the `task` property of a specific view will override this property.
Currently, only the [AgendaView](https://www.telerik.com/kendo-react-ui/components/scheduler/views/agenda) uses the `task`.

The default component is: [SchedulerTask](https://www.telerik.com/kendo-react-ui/components/scheduler/api/schedulertask).

For more information on customizing the scheduler tasks, refer to the [Task Customization](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/tasks) article.

```jsx
const CustomTask = (props) => <div>{props.title}</div>;
<Scheduler task={CustomTask} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### timezone?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


"Etc/UTC"


</code>


</td>
<td class="table-cell-comment">


Specifies the id of the timezone that the Scheduler displays.
For example, `Europe/Sofia`.




```jsx
<Scheduler timezone="Europe/Sofia" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### view?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the currently selected view. The value is matched with the `name` property of the view.

Sets the initially selected view. The available values are:
* `day`
* `week`
* `month`
* `agenda`
* `timeline`

```jsx
<Scheduler view="day" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### viewItem?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[SchedulerViewItemProps]({% slug api_scheduler_schedulerviewitemprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default viewItem. If you specify the `viewItem` property of a specific view, it overrides this property.

The default component is: [SchedulerViewItem](https://www.telerik.com/kendo-react-ui/components/scheduler/api/schedulerviewitem).

For more information on customizing the scheduler items, refer to the [Item Customization](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/items) article.

```jsx
const CustomViewItem = (props) => <div>{props.title}</div>;
<Scheduler viewItem={CustomViewItem} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### viewSlot?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[SchedulerViewSlotProps]({% slug api_scheduler_schedulerviewslotprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default viewSlot component. Specifying the `viewSlot` property of a specific view will override this property.

The default component is: [SchedulerViewSlot](https://www.telerik.com/kendo-react-ui/components/scheduler/api/schedulerviewslot).

For more information on customizing the scheduler slots, refer to the [Slot Customization](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/slots) article.

```jsx
const CustomViewSlot = (props) => <div>{props.title}</div>;
<Scheduler viewSlot={CustomViewSlot} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### viewTask?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[SchedulerTaskProps]({% slug api_scheduler_schedulertaskprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default viewTask. Specifying the `viewTask` property of a specific view will override this property.
Currently, only the [AgendaView](https://www.telerik.com/kendo-react-ui/components/scheduler/views/agenda) uses the `viewTask`.

The default component is: [SchedulerViewTask](https://www.telerik.com/kendo-react-ui/components/scheduler/api/schedulerviewtask).

For more information on customizing the scheduler tasks, refer to the [Task Customization](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/tasks) article.

```jsx
const CustomViewTask = (props) => <div>{props.title}</div>;
<Scheduler viewTask={CustomViewTask} />
```



</td>
</tr>
</tbody>
</table>



