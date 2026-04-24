import * as React from 'react';
import {
    LocalizationService,
    GlobalizationContext,
} from '@progress/kendo-react-intl';

import { messages } from './messages';

const fillTemplate = (templateString, templateVars) => {
    return new Function('return `' + templateString + '`;').call(templateVars);
};

const createMyLocalizationService = (props) => {
    const baseService = new LocalizationService(props);

    const customService = Object.create(baseService);
    customService.language = props.language;
    customService.contextParameters = props.contextParameters;

    customService.toLanguageString = (key, defaultValue) => {
        if (
            customService.language &&
            messages[customService.language] &&
            messages[customService.language].hasOwnProperty(key)
        ) {
            return fillTemplate(messages[customService.language][key], customService.contextParameters);
        } else {
            return fillTemplate(defaultValue, customService.contextParameters);
        }
    };

    return customService;
};

const MyLocalizationProvider = (props) => {
    const customLocalizationService = React.useMemo(
        () => createMyLocalizationService({
            language: props.language,
            contextParameters: props.contextParameters,
        }),
        [props.language, props.contextParameters]
    );

    return (
        <GlobalizationContext.Consumer>
            {(glob) => (
                <GlobalizationContext.Provider value={{ ...glob, localization: customLocalizationService }}>
                    {props.children}
                </GlobalizationContext.Provider>
            )}
        </GlobalizationContext.Consumer>
    );
};

export default MyLocalizationProvider;
