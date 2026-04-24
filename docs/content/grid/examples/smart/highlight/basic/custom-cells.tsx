import * as React from 'react';
import { Chip } from '@progress/kendo-react-buttons';
import { GridCustomCellProps } from '@progress/kendo-react-grid';
import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';
import { ProgressBar } from '@progress/kendo-react-progressbars';

const CustomConditionSeverityCell = (props: GridCustomCellProps) => {
    let color;
    switch (props.dataItem.ConditionSeverity) {
        case 'Critical':
            color = 'error';
            break;
        case 'Severe':
            color = 'warning';
            break;
        case 'Mild':
            color = 'success';
            break;
        case 'Moderate':
            color = 'info';
            break;
        default:
            color = '';
    }
    return (
        <td {...props.tdProps}>
            {color ? (
                <BadgeContainer style={{ margin: '0 auto' }}>
                    <Badge position="outside" themeColor={color}>
                        {props.children}
                    </Badge>
                </BadgeContainer>
            ) : (
                'N/A'
            )}
        </td>
    );
};

const CustomStatusCell = (props: GridCustomCellProps) => {
    let customStyle;
    switch (props.dataItem.Status) {
        case 'Critical':
            customStyle = {
                borderColor: 'var(--kendo-color-error-emphasis, #d32f2f)',
                backgroundColor: 'var(--kendo-color-error-subtle, #ffebee)'
            };
            break;
        case 'Monitoring':
            customStyle = {
                borderColor: '#0DCAF066',
                backgroundColor: '#CFF4FC'
            };
            break;
        case 'Deceased':
            customStyle = {
                color: '#FFFFFF',
                borderColor: '#21252966',
                backgroundColor: '#495057'
            };
            break;
        case 'Under Treatment':
            customStyle = {
                borderColor: '#6F42C166',
                backgroundColor: '#E2D9F3'
            };
            break;
        case 'Awaiting Diagnosis':
            customStyle = {
                borderColor: '#0D6EFD66',
                backgroundColor: '#CFE2FF'
            };
            break;
        case 'Discharged':
            customStyle = {
                borderColor: '#2125291A',
                backgroundColor: '#FFFFFF'
            };
            break;
        case 'In Surgery':
            customStyle = {
                borderColor: '#FFC10766',
                backgroundColor: '#FFF3CD'
            };
            break;
        case 'Palliative':
            customStyle = {
                borderColor: 'var(--kendo-color-secondary-emphasis, #7b1fa2)',
                backgroundColor: 'var(--kendo-color-secondary-subtle, #f3e5f5)'
            };
            break;
        case 'Transferred':
            customStyle = {
                borderColor: '#ED621F66',
                backgroundColor: '#FCE0D2'
            };
            break;
        case 'Stable':
            customStyle = {
                borderColor: '#19875466',
                backgroundColor: '#D1E7DD'
            };
            break;
        default:
            customStyle = {};
    }

    return (
        <td {...props.tdProps}>
            <Chip text={props.dataItem.Status} style={customStyle} />
        </td>
    );
};

const CustomRiskScoreCell = (props: GridCustomCellProps) => {
    const progress = props.dataItem.RiskScore;
    return (
        <td {...props.tdProps}>
            <ProgressBar
                style={{
                    width: '150px'
                }}
                value={progress}
                label={(props) => {
                    return <>{props.value}%</>;
                }}
                labelPlacement="center"
            />
        </td>
    );
};

export { CustomConditionSeverityCell, CustomStatusCell, CustomRiskScoreCell };
