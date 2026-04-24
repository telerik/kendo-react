import * as React from 'react';

import { CalendarNavigationItem, CalendarNavigationItemProps } from '@progress/kendo-react-dateinputs';
import './styles.css';
const CustomNavigationItem = (props: CalendarNavigationItemProps) => {
    return <CalendarNavigationItem className="custom-navigation" {...props} />;
};

export default CustomNavigationItem;
