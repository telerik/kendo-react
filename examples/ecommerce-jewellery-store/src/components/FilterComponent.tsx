import React, { useEffect } from "react";
import { MultiSelect, DropDownList } from "@progress/kendo-react-dropdowns";
import { SvgIcon } from "@progress/kendo-react-common";
import { filterIcon, sortAscIcon } from "@progress/kendo-svg-icons";
import { FilterDescriptor, State } from "@progress/kendo-data-query";
import { useCategoriesContext } from "../helpers/CategoriesContext";

const chips = ["Bracelets", "Rings", "Earrings", "Watches", "Necklaces"];
const statuses = ["Sale", "Recommended", "Must Have"];
const materials = ["Gold", "Silver"];

interface FilterComponentProps {
  updateUI: (state: State) => void;
}

export const FilterComponent: React.FC<FilterComponentProps> = ({ updateUI }) => {
  const { selectedCategory, setSelectedCategory } = useCategoriesContext();
  const [categoryValue, setCategoryValue] = React.useState<string[]>([]);
  const [statusValue, setStatusValue] = React.useState<string>("Recommended");
  const [materialValue, setMaterialValue] = React.useState<string>("Material");

  useEffect(() => {
    if (selectedCategory) {
      setCategoryValue([selectedCategory]); 
      applyCategoryFilter([selectedCategory]);
    } else {
      setCategoryValue([]); 
      applyCategoryFilter([]);
    }
  }, [selectedCategory]);

  const applyCategoryFilter = (categories: string[]) => {
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

    setSelectedCategory(e.value.length > 0 ? e.value[0] : null);
  };

  const onStatusChange = (e: any) => {
    setStatusValue(e.value);

    const newSorts = [
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
    setSelectedCategory(null); // Clear context filter
    updateUI({ filter: undefined, sort: undefined }); // Clear all filters
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
      <button className="k-button k-button-flat" onClick={clearFilters}>Clear Filters</button>
    </section>
  );
};
