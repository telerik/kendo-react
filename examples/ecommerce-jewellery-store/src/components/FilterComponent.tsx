import React, { useEffect } from "react";
import { MultiSelect, DropDownList } from "@progress/kendo-react-dropdowns";
import { SvgIcon } from "@progress/kendo-react-common";
import { filterIcon, sortAscIcon } from "@progress/kendo-svg-icons";
import { FilterDescriptor, SortDescriptor, State } from "@progress/kendo-data-query";
import { useCategoriesContext } from "../helpers/CategoriesContext";
import { useLanguageContext } from "../helpers/LanguageContext";
import { Button } from "@progress/kendo-react-buttons";

interface FilterComponentProps {
  updateUI: (state: State) => void;
}

export const FilterComponent: React.FC<FilterComponentProps> = ({ updateUI }) => {
  const { selectedCategory, setSelectedCategory } = useCategoriesContext();
  const { t } = useLanguageContext();

  const [categoryValue, setCategoryValue] = React.useState<string[]>([]);
  const [statusValue, setStatusValue] = React.useState<string>(t.statusesData[1]);
  const [materialValue, setMaterialValue] = React.useState<string>(t.materialPlaceholder);

  const chips = t.categoriesData || [];
  const statuses = t.statusesData || [];
  const materials = t.materialsData || [];

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
    setStatusValue(t.statusesData[1]);
    setMaterialValue(t.materialPlaceholder);
    setSelectedCategory(null);
    updateUI({ filter: undefined, sort: undefined });
  };

  return (
    <section className="k-d-flex k-justify-content-between k-align-items-center">
      <span className="k-d-flex k-align-items-center">
        <span className="k-d-flex k-align-items-center k-pr-2">
          <SvgIcon icon={filterIcon}></SvgIcon> {t.filterLabel}
        </span>
        <span className="k-pr-2">
          <MultiSelect
            data={chips}
            value={categoryValue}
            placeholder={t.categoryPlaceholder}
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
          <SvgIcon icon={sortAscIcon}></SvgIcon> {t.sortByLabel}
        </span>
        <span>
          <DropDownList data={statuses} value={statusValue} onChange={onStatusChange} style={{minWidth: 150}} />
        </span>
      </span>
      <Button fillMode="flat" onClick={clearFilters}>{t.clearFiltersButton}</Button>
    </section>
  );
};