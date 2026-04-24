import * as React from 'react';
export const DragHandleCell = (props) => {
	return (
		<td {...props.tdProps} style={{ touchAction: 'none' }}>
			<span
				className="k-icon k-i-reorder"
				style={{
					cursor: 'move'
				}}
				data-drag-handle={true}
			/>
		</td>
	);
};
