import * as React from 'react';
import { DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';

export const useValueField = <
  TItem extends Record<string, any>,
  TValue extends string | number | null
>(opts: {
  value: TValue;
  setValue: (v: TValue) => void;
  data: TItem[];
  valueField: keyof TItem;
}) => {
  const { value, data, valueField } = opts;

  const valueToItem = React.useMemo<TItem | null>(() => {
    if (value === null || value === undefined) return null;
    return (data.find(it => it[valueField] === value) as TItem) ?? null;
  }, [value, data, valueField]);

  const handleChange = (set: (v: TValue) => void) => (e: DropDownListChangeEvent) => {
    const next = e.value ? ((e.value as TItem)[valueField] as TValue) : (null as TValue);
    set(next);
  };

  return { valueToItem, handleChange };
};
