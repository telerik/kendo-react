import React from 'react';

export const Author = (props) => {
    return (
        <td>
            <p className="author-container">
                <span>
                    <img
                        className="img-circle"
                        alt="User Avatar"
                        src={props.dataItem.node.author.avatarUrl} style={{ width: 30, height: 30 }}
                    />
                </span>
                {props.dataItem.node.author.login}
            </p>
        </td>
    )
}