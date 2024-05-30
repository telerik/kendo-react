import {
    LocalizationProvider,
    LocalizationService,
  } from '@progress/kendo-react-intl';
  
  import { messages } from './messages';
  
  const fillTemplate = (templateString, templateVars) => {
    return new Function('return `' + templateString + '`;').call(templateVars);
  };
  
  export default class MyLocalizationProvider extends LocalizationProvider {
    constructor(language, contextParameters) {
      super(language, contextParameters);
      this.language = language;
      this.contextParameters = this.props.contextParameters;
    }
    getLocalizationService() {
      return new MyLocalizationService({
        language: this.props.language,
        contextParameters: this.props.contextParameters,
      });
    }
  }
  
  export class MyLocalizationService extends LocalizationService {
    constructor(props) {
      super(props);
      this.language = props.language;
      this.contextParameters = props.contextParameters;
    }
    toLanguageString(key, defaultValue) {
      if (
        this.language &&
        messages[this.language] &&
        messages[this.language].hasOwnProperty(key)
      ) {
        return fillTemplate(messages[this.language][key], this.contextParameters);
      } else {
        return fillTemplate(defaultValue, this.contextParameters);
      }
    }
  }
  