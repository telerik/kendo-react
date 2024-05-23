import React, { useState, useEffect } from "react";
import { MultiSelect } from "@progress/kendo-react-dropdowns";
import { filterBy } from "@progress/kendo-data-query";
import countries from "./countries";

const App = () => {
  const [data, setData] = useState(countries.slice());
  const [value, setValue] = useState("");

  const onFilterChange = (event) => {
    setData(filterBy(countries.slice(), event.filter));
    setValue(event.filter.value);
  };

  useEffect(() => {
    const input = document.getElementsByClassName("k-input-inner");
    input[0].setAttribute("maxlength", 2);
  }, []);

  return (
    <div>
      <div>Select country:</div>
      <MultiSelect
        data={data}
        filterable={true}
        onFilterChange={onFilterChange}
        style={{
          width: "300px",
        }}
        placeholder="e.g. Austria"
      />
    </div>
  );
};

export default App;
