import * as React from 'react';
import styles from './header.module.scss';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { CURRENCY, CurrencyContext } from '../../context/CurrencyContext';
import { classNames } from '@progress/kendo-react-common';

const headerBg = `${import.meta.env.BASE_URL}header-bg.svg`;
import userImg from '../../images/user.jpg';
import { Link } from 'react-router-dom';

export const Header: React.FunctionComponent<any> = () => {
    const { currency, onCurrencyChange } = React.useContext(CurrencyContext);
    const data = [
        { name: 'USD', value: CURRENCY.USD },
        { name: 'BGN', value: CURRENCY.BGN },
        { name: 'GBP', value: CURRENCY.GBP }
    ];

    const handleChange = React.useCallback(
        (event: DropDownListChangeEvent) => {
            if (onCurrencyChange) {
                onCurrencyChange.call(undefined, event.target.value.value)
            }
        },
        [onCurrencyChange]
    )

    return (

        <header
            className={styles.header}
            style={{ background: `url(${headerBg})` }}
        >
            <div className={classNames('container', styles.headerContent)}>
                <div className={styles.headerRow}>
                    <Link className={styles.brand} to="/">
                        <h1 className={classNames(styles.title, "mb-0")}>My Stocks Portfolio</h1>
                    </Link>
                    <div className={styles.controls}>
                        <DropDownList
                            data={data}
                            style={{ width: 160 }}
                            value={data.find(c => c.value === currency)}
                            onChange={handleChange}
                            textField="name"
                            aria-label="Currency"
                        />
                        <div className={styles.avatar}>
                            <img src={userImg} alt="Collin Johnson" />
                        </div>
                    </div>
                </div>
            </div>
        </header >
    )
}
