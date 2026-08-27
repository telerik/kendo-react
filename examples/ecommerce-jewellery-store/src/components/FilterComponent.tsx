import React, { useCallback, useEffect } from "react";
import { MultiSelect, DropDownList } from "@progress/kendo-react-dropdowns";
import { SvgIcon } from "@progress/kendo-react-common";
import { filterIcon, sortAscIcon } from "@progress/kendo-svg-icons";
import { Chip } from "@progress/kendo-react-buttons";
import { CompositeFilterDescriptor, FilterDescriptor, State } from "@progress/kendo-data-query";
import { useCategoriesContext } from "../helpers/CategoriesContext";
import { useLanguageContext } from "../helpers/LanguageContext";
import { Button } from "@progress/kendo-react-buttons";
import { ProductFilters } from "../data/types";

interface FilterComponentProps {
  updateUI?: (state: State) => void;
  onFiltersChange?: (filters: ProductFilters) => void;
  resetKey?: number;
}

export const FilterComponent: React.FC<FilterComponentProps> = ({ updateUI, onFiltersChange, resetKey = 0 }) => {
  const { selectedCategory, setSelectedCategory } = useCategoriesContext();
  const { t } = useLanguageContext();

  const [categoryValue, setCategoryValue] = React.useState<string[]>([]);
  const [statusValue, setStatusValue] = React.useState<string>(t.statusesData[1]);
  const [materialValue, setMaterialValue] = React.useState<string>(t.materialPlaceholder);

  const chips = t.categoriesData || [];
  const statuses = t.statusesData || [];
  const materials = t.materialsData || [];
  const defaultStatus = t.statusesData[1];

  const notify = useCallback((categories: string[], material: string, status: string) => {
    const filterGroups: CompositeFilterDescriptor[] = [];
    if (categories.length > 0) {
      const categoryFilters: FilterDescriptor[] = categories.map((category) => ({
        field: "category",
        operator: "eq",
        value: category,
      }));
      filterGroups.push({ logic: "or", filters: categoryFilters });
    }
    if (material !== t.materialPlaceholder) {
      filterGroups.push({
        logic: "and",
        filters: [{ field: "material", operator: "eq", value: material }],
      });
    }

    const filter = filterGroups.length === 0
      ? undefined
      : filterGroups.length === 1
        ? filterGroups[0]
        : { logic: "and" as const, filters: filterGroups };
    updateUI?.({ filter, sort: [{ field: "status", dir: "desc" }] });
    onFiltersChange?.({
      categories,
      material: material === t.materialPlaceholder ? "" : material,
      status,
    });
  }, [onFiltersChange, t.materialPlaceholder, updateUI]);

  useEffect(() => {
    if (selectedCategory) {
      setCategoryValue([selectedCategory]);
      notify([selectedCategory], materialValue, statusValue);
    } else {
      setCategoryValue([]);
      notify([], materialValue, statusValue);
    }
  }, [materialValue, notify, selectedCategory, statusValue]);

  useEffect(() => {
    if (resetKey === 0) {
      return;
    }

    setCategoryValue([]);
    setStatusValue(defaultStatus);
    setMaterialValue(t.materialPlaceholder);
    setSelectedCategory(null);
    notify([], t.materialPlaceholder, defaultStatus);
  }, [defaultStatus, notify, resetKey, setSelectedCategory, t.materialPlaceholder]);

  const onCategoryChange = (e: { value: string[] }) => {
    setCategoryValue(e.value);
    setSelectedCategory(e.value.length > 0 ? e.value[0] : null);
    notify(e.value, materialValue, statusValue);
  };

  const onStatusChange = (e: { value: string }) => {
    setStatusValue(e.value);
    notify(categoryValue, materialValue, e.value);
  };

  const onMaterialChange = (e: { value: string }) => {
    setMaterialValue(e.value);
    notify(categoryValue, e.value, statusValue);
  };

  const clearFilters = () => {
    setCategoryValue([]);
    setStatusValue(t.statusesData[1]);
    setMaterialValue(t.materialPlaceholder);
    setSelectedCategory(null);
    notify([], t.materialPlaceholder, t.statusesData[1]);
  };

  const removeCategory = (category: string) => {
    const nextCategories = categoryValue.filter((value) => value !== category);
    setCategoryValue(nextCategories);
    setSelectedCategory(nextCategories[0] ?? null);
    notify(nextCategories, materialValue, statusValue);
  };

  const removeMaterial = () => {
    setMaterialValue(t.materialPlaceholder);
    notify(categoryValue, t.materialPlaceholder, statusValue);
  };

  const categoryChipLabel = (category: string) => `${t.filterLabel.replace(":", "")}: ${category}`;
  const materialChipLabel = `${t.materialPlaceholder}: ${materialValue}`;

  return (
    <section className="filter-component" aria-label={t.filterLabel}>
      <div className="filter-component__controls">
        <div className="filter-component__group">
          <span className="filter-component__label">
          <SvgIcon icon={filterIcon}></SvgIcon> {t.filterLabel}
          </span>
          <span className="filter-component__control">
            <MultiSelect
              data={chips}
              value={categoryValue}
              placeholder={t.categoryPlaceholder}
              onChange={onCategoryChange}
            />
          </span>
          <span className="filter-component__control">
            <DropDownList value={materialValue} data={materials} onChange={onMaterialChange} />
          </span>
        </div>
        <div className="filter-component__group">
          <span className="filter-component__label">
            <SvgIcon icon={sortAscIcon}></SvgIcon> {t.sortByLabel}
          </span>
          <span className="filter-component__control">
            <DropDownList data={statuses} value={statusValue} onChange={onStatusChange} />
          </span>
        </div>
        <Button fillMode="flat" onClick={clearFilters}>{t.clearFiltersButton}</Button>
      </div>
      {(categoryValue.length > 0 || materialValue !== t.materialPlaceholder) && (
        <div className="filter-component__chips" aria-label={t.activeFiltersLabel}>
          <span className="filter-component__chips-label">{t.activeFiltersLabel}</span>
          {categoryValue.map((category) => (
            <Chip
              key={category}
              text={categoryChipLabel(category)}
              removable={true}
              fillMode="outline"
              onRemove={() => removeCategory(category)}
            />
          ))}
          {materialValue !== t.materialPlaceholder && (
            <Chip
              text={materialChipLabel}
              removable={true}
              fillMode="outline"
              onRemove={removeMaterial}
            />
          )}
        </div>
      )}
    </section>
  );
};
