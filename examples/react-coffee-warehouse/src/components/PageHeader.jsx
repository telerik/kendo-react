import React from 'react';
import * as PropTypes from 'prop-types';

export const PageHeader = ({ title, description, meta }) => (
    <header className="page-header">
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
        {meta && <span className="page-header-meta">{meta}</span>}
    </header>
);

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    meta: PropTypes.string
};
