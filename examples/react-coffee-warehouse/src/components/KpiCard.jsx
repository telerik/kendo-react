import React from 'react';
import * as PropTypes from 'prop-types';
import { Card, CardBody } from '@progress/kendo-react-layout';

export const KpiCard = ({ label, value, detail, status = 'success' }) => (
    <Card className="kpi-card">
        <CardBody>
            <span className="kpi-label">{label}</span>
            <strong className="kpi-value">{value}</strong>
            <span className={`kpi-detail kpi-detail--${status}`}>{detail}</span>
        </CardBody>
    </Card>
);

KpiCard.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['success', 'warning', 'error'])
};
