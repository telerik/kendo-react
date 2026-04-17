import { useState, useRef, cloneElement } from "react";
import { useNavigate } from "react-router-dom";
import {
  ComboBox,
  type ComboBoxCloseEvent,
  type ComboBoxFilterChangeEvent,
  type ComboBoxHandle,
  type ListItemProps,
} from "@progress/kendo-react-dropdowns";
import { patients, type Patient } from "../data/sampleData";
import { globalCaretAltDownIcon } from "../icons/customIcons";
import SearchInputPrefix from "./SearchInputPrefix";

const patientSearchItemRender = (
  li: React.ReactElement<HTMLLIElement>,
  itemProps: ListItemProps,
) => {
  const patient = itemProps.dataItem as Patient;
  const itemChildren = (
    <span className="patient-search-item">
      <span className="patient-search-item-name">{patient.name}</span>
      <span className="patient-search-item-id">ID: {patient.id}</span>
    </span>
  );
  return cloneElement(li, li.props, itemChildren);
};

const ComboBoxSearchPrefix = () => <SearchInputPrefix />;

export default function PatientSearchComboBox() {
  const navigate = useNavigate();
  const comboBoxRef = useRef<ComboBoxHandle>(null);
  const [data, setData] = useState(patients.slice());

  const filterChange = (event: ComboBoxFilterChangeEvent) => {
    const filter = event.filter.value.toLowerCase();
    if (!filter) {
      setData(patients.slice());
      return;
    }
    setData(
      patients.filter(
        (p) =>
          p.name.toLowerCase().includes(filter) ||
          String(p.id).includes(filter),
      ),
    );
  };

  return (
    <span className="app-search-combo-wrapper">
      <ComboBox
        ref={comboBoxRef}
        data={data}
        textField="name"
        dataItemKey="id"
        filterable
        placeholder="Search patient name or ID"
        itemRender={patientSearchItemRender}
        prefix={ComboBoxSearchPrefix}
        rounded="full"
        size="medium"
        className="app-search-input"
        clearButton={false}
        aria-label="Search patients by name or ID"
        svgIcon={globalCaretAltDownIcon}
        onFilterChange={filterChange}
        onChange={(e) => {
          if (e.nativeEvent.type === "click") {
            navigate(`/patients/${(e.value as Patient).id}`);
          }
        }}
        onClose={(e: ComboBoxCloseEvent) => {
          const nativeEvent = e.nativeEvent as KeyboardEvent;
          if (nativeEvent.key === "Enter") {
            const value = comboBoxRef.current?.value as Patient | null;
            if (value) {
              navigate(`/patients/${value.id}`);
            }
          }
        }}
      />
    </span>
  );
}
