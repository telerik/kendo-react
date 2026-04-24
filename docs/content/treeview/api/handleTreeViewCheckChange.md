---
title: handleTreeViewCheckChange
description: "Learn how to build custom functionality when working with the React TreeView by Kendo UI with the help of the handleTreeViewCheckChange."
api_reference: true
type: inner_api
slug: api_treeview_handletreeviewcheckchange
---

# handleTreeViewCheckChange
A helper function which updates the check descriptor.




```jsx
const App = () => {
   const [check, setCheck] = React.useState([]);
   const [items] = React.useState(tree);

   const onCheckChange = (event) => {
       setCheck(handleTreeViewCheckChange(event, check, items));
   }

   return (
       <div>
           <TreeView
               checkboxes={true} onCheckChange={onCheckChange}
               data={processTreeViewItems(items, { check })}
           />
           <div style={{ marginTop: 5 }}>
               <i>Press SPACE to check/uncheck the active item</i>
               <div className="example-config">
                   Checked Indices: {check.join(",")}
               </div>
           </div>
       </div>
   );
}

const tree = [ {
   text: 'Furniture', expanded: true, items: [
       { text: 'Tables & Chairs' }, { text: 'Sofas' }, { text: 'Occasional Furniture' } ]
}, {
   text: 'Decor', expanded: true, items: [
       { text: 'Bed Linen' }, { text: 'Curtains & Blinds' }, { text: 'Carpets' } ]
} ];
```


#### Parameters
##### event
<code>


[TreeViewExpandChangeEvent]({% slug api_treeview_treeviewexpandchangeevent %})


</code>
The event that triggered the change.

##### check
<code>


string[] | [TreeViewCheckDescriptor]({% slug api_treeview_treeviewcheckdescriptor %})


</code>
The check descriptor that will be updated.

##### data?
<code>


"null" | any[]


</code>
The TreeView items.

##### settings
<code>


[TreeViewCheckChangeSettings]({% slug api_treeview_treeviewcheckchangesettings %})


</code>
The additional settings that configure the update of the check descriptor.

##### childrenField?
<code>


string


</code>
The field that points to the dataItem sub items. Defaults to `items`.
The default behavior allows the selection of multiple items.

#### Returns
<code>


any[] | [TreeViewCheckDescriptor]({% slug api_treeview_treeviewcheckdescriptor %}) [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with { ids: any[]; }


</code>
 - The updated copy of the input check descriptor.
