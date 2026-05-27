import * as React from 'react';
import styles from './footer.module.scss';
import ProgressLogo from '../../icons/progress-logo.svg?react';

const footerBg = `${import.meta.env.BASE_URL}footer-bg.svg`;

export const Footer = () => {
    return (
        <footer
            className={styles.footer}
            style={{ background: `url(${footerBg}) no-repeat`, backgroundSize: 'cover' }}
        >
            <div className="container-fluid">
                <p className="text-center m-0">
                    Copyright © 2024 Progress Software Corporation and/or its subsidiaries or affiliates. <ProgressLogo />
                </p>
            </div>
        </footer>
    )
}
