import * as React from 'react';
import styles from './header.module.scss';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { CURRENCY, CurrencyContext } from '../../context/CurrencyContext';
import { classNames } from '@progress/kendo-react-common';

const headerBg = `${import.meta.env.BASE_URL}header-bg.svg`;
import userImg from '../../images/user.jpg';
import { Link, NavLink } from 'react-router-dom';

const customValueRender = (el: any, value: any) => (
    <el.type
        {...el.props}
        className={classNames(el.props.className, "text-left pl-0")}
    >
        {value
            ? (<>
                <span className="text-left">Currency in {value.name}</span></>)
            : null}

    </el.type>)

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
            className={classNames(styles.header, styles['currency-input'], 'py-3')}
            style={{ background: `url(${headerBg})` }}
        >
            <div className="container pt-4 pb-2">
                <div className="row">
                    <div className="col-8">
                        <Link className={styles.brand} to="/">
                            <h1 className={classNames(styles.title, "mb-0")}>My Stocks Portfolio</h1>
                        </Link>
                        <DropDownList
                            popupSettings={{
                                animate: {
                                    closeDuration: 0
                                }
                            }}
                            data={data}
                            style={{
                                width: 200,
                                border: 'none'
                            }}
                            value={data.find(c => c.value === currency)}
                            onChange={handleChange}
                            valueRender={customValueRender}
                            textField="name"
                        />
                    </div>
                    <div className="col-4">
                        <div className="text-right">
                            <Link to="/settings" aria-label="Open account settings">
                                <img src={userImg} alt="Collin Johnson" />
                            </Link>
                        </div>
                    </div>
                </div>
                <nav className={styles.navigation} aria-label="Primary navigation">
                    <NavLink end to="/">Portfolio</NavLink>
                    <NavLink to="/watchlist">Watchlist</NavLink>
                    <NavLink to="/markets">Markets</NavLink>
                    <NavLink to="/trade">Trade</NavLink>
                    <NavLink to="/transactions">Transactions</NavLink>
                    <NavLink to="/accounts">Account</NavLink>
                </nav>
            </div>
        </header >
    )
}
