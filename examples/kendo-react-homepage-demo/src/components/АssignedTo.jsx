import React from 'react';

export const АssignedTo = (props) => {
    return (
        <td>
            {props.dataItem.node.assignees.nodes.map((item, index) => (
                (
                    <p key={index} className="assign-to-container">
                        <span>
                            <img
                                className="img-circle"
                                alt="User Avatar"
                                src={item.avatarUrl} style={{ width: 30, height: 30 }}
                            />
                        </span>
                        {item.name}
                    </p>)
            ))}
        </td>
    )
}