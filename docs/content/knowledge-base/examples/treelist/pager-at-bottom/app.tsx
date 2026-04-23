import React, { useState, useCallback } from "react";
import { TreeList, mapTreeItem, extendDataItem } from "@progress/kendo-react-treelist";
import { TreeListPager } from "./pager";
import { generateData } from "./shared-kb-treelist-data";

const numberOfColumns = 4;
const columnWidth = 200;
const numberOfRows = 5000;
const subItemsField = "subItems";
const expandField = "expanded";

const { columns, data } = generateData(numberOfColumns, columnWidth, numberOfRows, subItemsField);

const App = () => {
  const [treeData, setTreeData] = useState<any[]>([...data]);
  const [expanded, setExpanded] = useState<any[]>([]);
  const [skip, setSkip] = useState(0);
  const [take, setTake] = useState(20);

  const onExpandChange = useCallback((event: any) => {
    const willExpand = !event.value;
    const updated = [...treeData];
    mapTreeItem(updated, event.level, subItemsField, (item: any) =>
      extendDataItem(item, subItemsField, { [expandField]: willExpand })
    );
    setTreeData(updated);
    setExpanded((prev) =>
      event.value ? prev.filter((id: any) => id !== event.dataItem.id) : [...prev, event.dataItem.id]
    );
  }, [treeData]);

  const onPageChange = useCallback((event: any) => {
    const { skip, take } = event;
    setSkip(skip);
    setTake(take);
  }, []);

  const getTotal = useCallback(() => {
    let total = numberOfRows;
    treeData.forEach((i: any) => {
      if (i.expanded === true && Array.isArray(i[subItemsField])) {
        total = total + i[subItemsField].length;
      }
    });
    return total;
  }, [treeData]);

  return (
    <>
      <TreeList
        style={{ height: 500, overflow: "auto" }}
        onPageChange={onPageChange}
        skip={skip}
        take={take}
        data={treeData}
        expandField={expandField}
        subItemsField={subItemsField}
        onExpandChange={onExpandChange}
        columns={columns}
      />
      <TreeListPager
        skip={skip}
        take={take}
        className={"k-grid-pager"}
        onPageChange={onPageChange}
        total={getTotal()}
      />
    </>
  );
};

export default App;
