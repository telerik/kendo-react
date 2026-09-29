import * as React from 'react';

import {
    Sparkline,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartArea
} from '@progress/kendo-react-charts';
import { Badge } from '@progress/kendo-react-indicators';
import { Rating } from '@progress/kendo-react-inputs';
import {
    useInternationalization
} from '@progress/kendo-react-intl';
import { useLocalization } from '@progress/kendo-react-intl';

import { images } from './../resources/images';

export const FullNameCell = (props) => {
    if (props.rowType === 'groupHeader') {
        return null;
    }

    return (
        <td>
            <div
                className="grid-cell-photo"
                style={{ backgroundImage: images[props.dataItem.imgId + props.dataItem.gender] }}
            />
            <div className="grid-cell-name">{ props.dataItem.fullName }</div>
        </td>
    );
};

export const FlagCell = (props) => {
    if (props.rowType === 'groupHeader') {
        return null;
    }

    return (
        <td className="grid-cell-center">
            <img
                src={images[props.dataItem.country]}
                className="grid-cell-flag"
                alt={props.dataItem.country}
            />
        </td>
    );
};

export const RatingCell = (props) => {
    const localizationService = useLocalization();

    if (props.rowType === 'groupHeader') {
        return null;
    }

    return (
        <td>
            <Rating
                className="grid-cell-rating"
                value={props.dataItem.rating}
                max={5}
                readonly={true}
                tabIndex={-1}
                ariaLabel={localizationService.toLanguageString('custom.rating')}
            />
        </td>
    );
};

export const OnlineCell = (props) => {
    const localizationService = useLocalization();
    if (props.rowType === 'groupHeader') {
        return null;
    }

    return (
        <td className="grid-cell-center">

            {
                props.dataItem.isOnline === true ?
                    <Badge themeColor={'success'} shape={'rounded'} className="grid-cell-badge">{localizationService.toLanguageString('custom.online')}</Badge> :
                    <Badge themeColor={'error'} shape={'rounded'} className="grid-cell-badge">{localizationService.toLanguageString('custom.offline')}</Badge>
            }
        </td>
    );
};

export const EngagementCell = (props) => {
    if (props.rowType === 'groupHeader') {
        return null;
    }

    return (
        <td>
            <Sparkline
                type={'bar'}
                data={props.dataItem.target}
            >
                <ChartArea opacity={0} width={200} />
                <ChartValueAxis visible={false} >
                    <ChartValueAxisItem min={0} max={130} />
                </ChartValueAxis>
            </Sparkline>
        </td>
    );
};

export const CurrencyCell = (props) => {
    const intlService = useInternationalization();

    if (props.rowType === 'groupHeader') {
        return null;
    }

    return (
        <td>
             <span className={props.dataItem.budget < 0 ? 'grid-cell-negative' : undefined}>{ intlService.formatNumber(props.dataItem.budget, 'c') }</span>
        </td>
    );
};