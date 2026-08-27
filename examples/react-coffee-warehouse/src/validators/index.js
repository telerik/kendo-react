import { enMessages } from '../messages/en-US';

const emailRegex = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
const phoneRegex = new RegExp(/^[0-9 ()+-]+$/);
const htmlRegex = new RegExp(/<[^>]*>/g);

const defaultMessages = {
    email: enMessages.custom.validationEmail,
    required: enMessages.custom.validationRequired,
    phone: enMessages.custom.validationPhone,
    biography: enMessages.custom.validationBiography
};

export const createValidators = (localizationService) => ({
    emailValidator: (value) => (emailRegex.test(value) ? '' : localizationService.toLanguageString('custom.validationEmail')),
    requiredValidator: (value) => value ? '' : localizationService.toLanguageString('custom.validationRequired'),
    phoneValidator: (value) => value && phoneRegex.test(value) ? '' : localizationService.toLanguageString('custom.validationPhone'),
    biographyValidator: (value) => value && value.replace(htmlRegex, '').length >= 50 ? '' : localizationService.toLanguageString('custom.validationBiography')
});

export const emailValidator = (value) => (emailRegex.test(value) ? '' : defaultMessages.email);
export const requiredValidator = (value) => value ? '' : defaultMessages.required;
export const phoneValidator = (value) => value && phoneRegex.test(value) ? '' : defaultMessages.phone;
export const biographyValidator = (value) => value && value.replace(htmlRegex, '').length >= 50 ? '' : defaultMessages.biography;