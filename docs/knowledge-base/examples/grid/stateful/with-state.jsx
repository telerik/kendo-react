import React, { useState } from "react";
import { process } from "@progress/kendo-data-query";

export const withState = (WrappedGrid) => {
  return (props) => {
    const [gridState, setGridState] = useState(
      props.pageable === false
        ? {}
        : { skip: 0, take: 10, sort: [], filter: null }
    );

    const onDataStateChange = (event) => {
      const updatedState = {
        ...gridState,
        skip: event.dataState?.skip,
        take: event.dataState?.take,
        sort: event.dataState?.sort,
        filter: event.dataState?.filter,
      };
      setGridState(updatedState);
    };

    return (
      <WrappedGrid
        filterable={true}
        sortable={true}
        pageable={{ pageSizes: true }}
        {...props}
        data={process(props.data, gridState)}
        onDataStateChange={onDataStateChange}
        {...gridState}
      />
    );
  };
};
