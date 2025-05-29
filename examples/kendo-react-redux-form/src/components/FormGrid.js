import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, GridColumn, GridToolbar } from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import { Field, change as formChange } from 'redux-form';
import RemoveCell from './RemoveCell';
import { CellEditor, INDEXFIELD } from './Editors';

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        formChange: bindActionCreators(formChange, dispatch)
    };
};

class GridHOC extends React.Component {
    onAdd = (e) => {
        const { fields, defaultValue } = this.props;

        e.preventDefault();
        fields.unshift(defaultValue);
    }

    onRemove = (cellProps) => {
        const { fields } = this.props;

        if (window.confirm('Are you sure you want to delete this item?')) {
            fields.remove(cellProps.dataItem[INDEXFIELD]);
        }
    }

    renderCommandCell = (cellProps) => {
        return <td>
            <Field
                component={RemoveCell}
                name={`${this.props.fields.name}[${cellProps.dataItem[INDEXFIELD]}].${this.props.editField}`}
                onRemove={() => { this.onRemove(cellProps) }}
            />
        </td>;
    }

    renderCellEditor = (cellInfo) => {
        const columnOptions = this.props.columns.find(col => col.field === cellInfo.field);

        return CellEditor(cellInfo, this.props.fields.name, columnOptions);
    }

    renderColumns = (columns) => {
        return [...columns, {
            field: '',
            cell: this.renderCommandCell
        }].map(column => {
            const { field, cell, ...rest } = column;

            return <GridColumn
                key={field}
                field={field}
                cell={cell || this.renderCellEditor}
                {...rest}
            />
        });
    }

    render() {
        const { columns, fields } = this.props;

        // Use this approach till index is made build in
        const data = fields.getAll().map((item, index) => {
            return {
                ...item,
                [INDEXFIELD]: index
            };
        });

        return (
            <Grid
                style={{ maxHeight: "600px" }}
                data={data}
            >
                <GridToolbar>
                    <Button primary={true} onClick={this.onAdd}>
                        Add new
                    </Button>
                </GridToolbar>
                {
                    this.renderColumns(columns)
                }
            </Grid>
        );
    }
}

GridHOC = connect(mapStateToProps, mapDispatchToProps)(GridHOC);

export default GridHOC