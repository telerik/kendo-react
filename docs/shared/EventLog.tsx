import React from 'react';

export interface EventLogProps { events: string[]; onClear?: () => void; children?: React.ReactNode; }
export const EventLog: React.FC<EventLogProps> = ({ children }) => React.createElement(React.Fragment, null, children);
