import React from 'react';
import { Button } from '@progress/kendo-react-buttons';

export default class RemoveCell extends React.Component {
    render() {
        const { onRemove } = this.props;

        return <Button onClick={() => onRemove()}>
            Remove
        </Button>
    }
}