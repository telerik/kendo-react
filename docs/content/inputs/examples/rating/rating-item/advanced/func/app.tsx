import * as React from 'react';
import { SvgIcon } from '@progress/kendo-react-common';
import { heartIcon } from '@progress/kendo-svg-icons';
import { Rating, RatingItem, RatingItemProps } from '@progress/kendo-react-inputs';
import { classNames } from '@progress/kendo-react-common';

const CustomItem = (props: RatingItemProps) => {
    return (
        <RatingItem {...props}>
            {props.half && (
                <div
                    className={'k-rating-precision-complement'}
                    style={{
                        width: '12px',
                        [props.dir === 'rtl' ? 'right' : 'left']: '50%'
                    }}
                >
                    <SvgIcon
                        icon={heartIcon}
                        className={classNames({
                            [`${props.icon}-outline`]: props.icon
                        })}
                    />
                </div>
            )}
            {props.half && (
                <div className={'k-rating-precision-part'} style={{ width: '12px' }}>
                    <SvgIcon icon={heartIcon} />
                </div>
            )}
            {props.half && <div style={{ width: '24px', height: '24px', display: 'block' }} />}
            {!props.half && (
                <SvgIcon
                    icon={heartIcon}
                    className={classNames({
                        [`${props.icon}`]: props.icon
                    })}
                />
            )}
        </RatingItem>
    );
};

const App = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px'
            }}
        >
            <Rating defaultValue={2} item={CustomItem} />
        </div>
    );
};

export default App;
