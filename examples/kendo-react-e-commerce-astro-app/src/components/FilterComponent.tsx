import React, { useEffect, useState, useCallback } from "react";
import { MultiSelect, DropDownList } from "@progress/kendo-react-dropdowns";
import { SvgIcon } from "@progress/kendo-react-common";
import { filterIcon, sortAscIcon } from "@progress/kendo-svg-icons";
import { FilterDescriptor, State } from "@progress/kendo-data-query";
import { useStore } from "@nanostores/react";
import { selectedLanguage } from "../helpers/languageStore";
import enMessages from "../data/messages/en";
import frMessages from "../data/messages/fr";
import esMessages from "../data/messages/es";
import { Button } from "@progress/kendo-react-buttons";

const translations = {
  en: enMessages,
  fr: frMessages,
  es: esMessages,
};

const getTranslations = (language: string) => {
  return translations[language] || translations["en"];
};

interface FilterComponentProps {
  updateUI: (state: State) => void;
}

export const FilterComponent: React.FC<FilterComponentProps> = ({ updateUI }) => {
  const language = useStore(selectedLanguage); 
  const t = getTranslations(language); 

  const [categoryValue, setCategoryValue] = useState<string[]>([]);
  const [statusValue, setStatusValue] = useState<string>(t.statusesData[1]);
  const [materialValue, setMaterialValue] = useState<string>(t.materialPlaceholder);

  const chips = t.categoriesData || [];
  const statuses = t.statusesData || [];
  const materials = t.materialsData || [];

  useEffect(() => {
    setCategoryValue([]);
    setStatusValue(t.statusesData[1]);
    setMaterialValue(t.materialPlaceholder);
    updateUI({ filter: undefined, sort: undefined }); 
  }, [language, t, updateUI]);

  const applyFilters = useCallback(() => {
    const filters: FilterDescriptor[] = [];

    if (categoryValue.length > 0) {
      filters.push({
        field: "category",
        operator: "eq",
        value: categoryValue[0], 
      });
    }

    if (statusValue !== t.statusesData[0]) {
      filters.push({
        field: "status",
        operator: "eq",
        value: statusValue, 
      });
    }

    if (materialValue !== t.materialPlaceholder) {
      filters.push({
        field: "material",
        operator: "eq",
        value: materialValue,
      });
    }

    const customCompositeFilters: State = {
      filter: filters.length > 0 ? { logic: "and", filters } : undefined,
      sort: undefined,
    };

    updateUI(customCompositeFilters);
  }, [categoryValue, statusValue, materialValue, t, updateUI]);

  useEffect(() => {
    applyFilters();
  }, [categoryValue, statusValue, materialValue, applyFilters]);

  const onCategoryChange = (e: any) => setCategoryValue(e.value);
  const onStatusChange = (e: any) => setStatusValue(e.value);
  const onMaterialChange = (e: any) => setMaterialValue(e.value);

  const clearFilters = () => {
    setCategoryValue([]);
    setStatusValue(t.statusesData[1]);
    setMaterialValue(t.materialPlaceholder);
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
      <Button fillMode="flat" onClick={clearFilters}>
        {t.clearFiltersButton}
      </Button>
    </section>
  );
};
