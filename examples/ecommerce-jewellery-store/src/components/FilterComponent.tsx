import * as React from "react";
import { filterIcon, sortAscIcon } from "@progress/kendo-svg-icons";
import {
  MultiSelect,
  DropDownList,
  DropDownsPopupSettings,
  DropDownListChangeEvent,
  MultiSelectChangeEvent,
} from "@progress/kendo-react-dropdowns";
import { SvgIcon } from "@progress/kendo-react-common";
import {
  FilterDescriptor,
  SortDescriptor,
  State,
} from "@progress/kendo-data-query";

const chips: string[] = [
  "Bracelets",
  "Rings",
  "Earrings",
  "Watches",
  "Necklaces",
];

const statuses: string[] = ["Sale", "Recommended", "Must Have"];
const materials: string[] = ["Gold", "Silver"];

const DropDownSettings: DropDownsPopupSettings = {
  width: "119px",
};

export const FilterComponent = (props: any) => {
  const [categoryValue, setCategoryValue] = React.useState<string[]>([]);
  const [statusValue, setStatusValue] = React.useState<string>("Recommended");
  const [materialValue, setMaterialValue] = React.useState<string>("Material");

  const onStatusChange = (e: DropDownListChangeEvent) => {
    setStatusValue(e.value);

    const newSorts: SortDescriptor[] = [
      {
        field: "status",
        dir: "desc",
      },
    ];

    const customCompositeFilters: State = {
      filter: undefined,
      sort: newSorts,
    };

    props.updateUI(customCompositeFilters);
  };

  const onMsChange = (e: MultiSelectChangeEvent) => {
    setCategoryValue(e.value);

    const newFilters = e.value.map((c: any) => ({
      field: "category",
      operator: "eq",
      value: c,
    }));

    const customCompositeFilters: State = {
      filter: {
        logic: "or",
        filters: newFilters,
      },
      sort: undefined,
    };

    props.updateUI(customCompositeFilters);
    setMaterialValue("Material");
  };

  const onMaterialChange = (e: DropDownListChangeEvent) => {
    setMaterialValue(e.value);

    const newFilter: FilterDescriptor[] = [
      {
        field: "material",
        operator: "eq",
        value: e.value,
      },
    ];

    const customCompositeFilters: State = {
      filter: {
        logic: "or",
        filters: newFilter,
      },
      sort: undefined,
    };

    props.updateUI(customCompositeFilters);
    setCategoryValue([]);
  };

  return (
    <>
      <section className="k-d-flex k-justify-content-between k-align-items-center">
        <span className="k-d-flex k-align-items-center">
          <span className="k-d-flex k-align-items-center k-pr-2">
            <SvgIcon icon={filterIcon}></SvgIcon>
            Filter:
          </span>           
          <span className="k-pr-2">
          <MultiSelect
            popupSettings={DropDownSettings}
            style={{
              minWidth: "119px",
            }}
            fillMode={"flat"}
            data={chips}
            value={categoryValue}
            placeholder="Category"
            onChange={onMsChange}
          ></MultiSelect>
          </span>
            <span className="k-pr-2">
            <DropDownList
              value={materialValue}
              data={materials}
              onChange={onMaterialChange}
            ></DropDownList>
            </span>
        </span>

        <span className="k-d-flex k-align-items-center">
          <span className="k-d-flex k-align-items-center k-pr-2">
            <SvgIcon icon={sortAscIcon}></SvgIcon>
            Sort by:
          </span>
          <span>
            <DropDownList
              data={statuses}
              value={statusValue}
              onChange={onStatusChange}
            ></DropDownList>
          </span>
        </span>
      </section>
    </>
  );
};
