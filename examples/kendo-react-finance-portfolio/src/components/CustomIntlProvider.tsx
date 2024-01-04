import { IntlProvider, IntlService } from '@progress/kendo-react-intl';

const rates: any = {
    'en-US': 1,
    'en-GB': 0.77,
    'bg-BG': 1.75
}

class CustomFormatIntlService extends IntlService {
    formatNumber(value: number, format: string) {
        if (format === 'c' || format === 'c2') {
            const locale = this.locale;
            const rate = rates[locale];
            const converted = value * rate;

            return `${super.formatNumber(converted, format)}`;
        } else {
            return `${super.formatNumber(value, format)}`
        }
    }
}


export class CustomIntlProvider extends IntlProvider {
    getIntlService() {
        return new CustomFormatIntlService(this.props.locale);
    }
}