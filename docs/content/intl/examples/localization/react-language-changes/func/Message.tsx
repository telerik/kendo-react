import * as React from 'react';

import { useLocalization } from '@progress/kendo-react-intl';

interface MessageProps {
    messageKey: string;
    defaultMessage: string;
}

export const Message = (props: MessageProps) => {
    const localization = useLocalization();

    return (
    <span style={{ display: 'block' }}>
      {localization.toLanguageString(props.messageKey, props.defaultMessage)}
    </span>
    )
}
