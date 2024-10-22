import React, { useEffect, useState } from "react";
import { MultiSelect, DropDownList } from "@progress/kendo-react-dropdowns";
import { SvgIcon } from "@progress/kendo-react-common";
import { filterIcon, sortAscIcon } from "@progress/kendo-svg-icons";
import { FilterDescriptor, SortDescriptor, State } from "@progress/kendo-data-query";

const chips: string[]= ["Bracelets", "Rings", "Earrings", "Watches", "Necklaces"];
const statuses:  string[] = ["Sale", "Recommended", "Must Have"];
const materials: string[] = ["Gold", "Silver"];

interface FilterComponentProps {
  updateUI: (state: State) => void;
}

export const FilterComponent: React.FC<FilterComponentProps> = ({ updateUI }) => {
  const [categoryValue, setCategoryValue] = useState<string[]>([]);
  const [statusValue, setStatusValue] = useState<string>("Recommended");
  const [materialValue, setMaterialValue] = useState<string>("Material");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");

    if (category && category !== "All") {
      setCategoryValue([category]);
      applyCategoryFilter([category]);
    } else {
      setCategoryValue([]);
      applyCategoryFilter([]);
    }
  }, []);

  const applyCategoryFilter = (categories: string[]) => {
    if (categories.length === 0) {
      updateUI({ filter: undefined, sort: undefined });
      return;
    }

    const filters = categories.map((category) => ({
      field: "category",
      operator: "eq",
      value: category,
    }));

    const customCompositeFilters: State = {
      filter: {
        logic: "or",
        filters,
      },
      sort: undefined,
    };

    updateUI(customCompositeFilters);
  };

  const onCategoryChange = (e: any) => {
    setCategoryValue(e.value);
    applyCategoryFilter(e.value);
  };

  const onStatusChange = (e: any) => {
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

    updateUI(customCompositeFilters);
  };

  const onMaterialChange = (e: any) => {
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

    updateUI(customCompositeFilters);
    setCategoryValue([]);
  };

  const clearFilters = () => {
    setCategoryValue([]);
    setStatusValue("Recommended");
    setMaterialValue("Material");
    updateUI({ filter: undefined, sort: undefined });
  };

  return (
    <section className="k-d-flex k-justify-content-between k-align-items-center">
      <span className="k-d-flex k-align-items-center">
        <span className="k-d-flex k-align-items-center k-pr-2">
          <SvgIcon icon={filterIcon}></SvgIcon> Filter:
        </span>
        <span className="k-pr-2">
          <MultiSelect
            data={chips}
            value={categoryValue}
            placeholder="Category"
            onChange={onCategoryChange}
            style={{ minWidth: "119px" }}
          />
        </span>
        <span className="k-pr-2">
          <DropDownList value={materialValue} data={materials} onChange={onMaterialChange} />
        </span>
      </span>
      <span className="k-d-flex k-align-items-center">
        <span className="k-d-flex k-align-items-center k-pr-2">
          <SvgIcon icon={sortAscIcon}></SvgIcon> Sort by:
        </span>
        <span>
          <DropDownList data={statuses} value={statusValue} onChange={onStatusChange} />
        </span>
      </span>
      <button className="k-button k-button-flat" onClick={clearFilters}>
        Clear Filters
      </button>
    </section>
  );
};
