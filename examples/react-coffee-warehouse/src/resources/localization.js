export const translate = (localizationService, key, ...values) =>
    values.reduce(
        (message, value, index) => message.replace(`{${index}}`, value),
        localizationService.toLanguageString(`custom.${key}`)
    );
