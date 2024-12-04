import React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { SvgIcon } from '@progress/kendo-react-common';
import { TextBox, InputSuffix, InputSeparator } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';
import {
  facebookIcon,
  linkedinIcon,
  twitterIcon,
} from '@progress/kendo-svg-icons';
import viloraLogo from '@/assets/vilora-logo.png';
import { useLanguageContext } from '../helpers/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguageContext();

  return (
    <section className="k-py-10 k-px-12 footer"> 
      <div className="k-d-flex k-flex-wrap k-justify-content-between k-gap-8 k-text-align-left">
        <div className="k-flex-basis-250 k-flex-grow-1 k-mb-4 k-mt-6" style={{ marginLeft: '50px' }}> 
          <a href="#" className="k-d-block k-mb-4 k-text-align-center">
            <img src={viloraLogo} alt="Logo" />
          </a>
          <p className="k-m-0">{t.cookiesText}</p> 
          <p className="k-m-0">{t.rightsReservedText}</p>
          <p className="k-mt-4">{t.subscribeText}</p>
          <Label editorId="email" className="k-sr-only">{t.emailPlaceholder}</Label>
          <TextBox
            placeholder={t.emailPlaceholder}
            className="k-w-full"
            suffix={() => (
              <InputSuffix>
                <InputSeparator />
                <Button themeColor="primary">{t.subscribeButtonText}</Button>
              </InputSuffix>
            )}
          />
          <p className="k-mt-6">{t.followUsText}</p>  
          <div className="k-d-flex k-gap-2 k-align-items-center">
            <p className="k-d-flex k-align-items-center" style={{ gap: '10px' }}>
              <SvgIcon icon={facebookIcon} size="xlarge" /> Facebook
            </p>
            <p className="k-d-flex k-align-items-center" style={{ gap: '10px' }}>
              <SvgIcon icon={twitterIcon} size="xlarge" /> Twitter
            </p>
            <p className="k-d-flex k-align-items-center" style={{ gap: '10px' }}>
              <SvgIcon icon={linkedinIcon} size="xlarge" /> LinkedIn
            </p>
          </div>
        </div>

        <div className="k-flex-basis-200 k-flex-grow-1 k-d-flex k-flex-col k-gap-4 k-mt-6 k-text-align-center">  
          <h4 className="k-color-primary k-font-bold">{t.customerCareTitle}</h4>
          {Array.isArray(t.customerCareLinks) &&
            t.customerCareLinks.map((link: string, index: number) => (
              <a key={index} href="#" className="k-link">{link}</a>
            ))}
        </div>

        <div className="k-flex-basis-200 k-flex-grow-1 k-d-flex k-flex-col k-gap-4 k-mt-6 k-text-align-center">  
          <h4 className="k-color-primary k-font-bold">{t.ourCompanyTitle}</h4>
          {Array.isArray(t.ourCompanyLinks) &&
            t.ourCompanyLinks.map((link: string, index: number) => (
              <a key={index} href="#" className="k-link">{link}</a>
            ))}
        </div>

        <div className="k-flex-basis-200 k-flex-grow-1 k-d-flex k-flex-col k-gap-4 k-mt-6 k-text-align-center" style={{ marginRight: '150px' }}>  
          <h4 className="k-color-primary k-font-bold">{t.legalPrivacyTitle}</h4>
          {Array.isArray(t.legalPrivacyLinks) &&
            t.legalPrivacyLinks.map((link: string, index: number) => (
              <a key={index} href="#" className="k-link">{link}</a>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
