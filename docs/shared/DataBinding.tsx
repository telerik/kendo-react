import React from 'react';

export interface DataBindingField { label: string; value: unknown; }
export interface DataBindingProps { fields: DataBindingField[]; children?: React.ReactNode; }
export const DataBinding: React.FC<DataBindingProps> = ({ children }) => React.createElement(React.Fragment, null, children);
