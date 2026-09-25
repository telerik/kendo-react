import React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { SvgIcon } from '@progress/kendo-react-common';
import { TextBox, InputSuffix, InputSeparator } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';
import {
  facebookIcon,
  linkedinIcon,
  xLogoIcon,
} from '@progress/kendo-svg-icons';
import viloraLogo from '@/assets/vilora-logo.png';
import { useLanguageContext } from '../helpers/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguageContext();

  return (
    <section className="footer">
      <div className="footer__content">
        <div className="footer__about">
          <a href="#" className="footer__logo">
            <img src={viloraLogo} alt="Logo" />
          </a>
          <p>{t.cookiesText}</p> 
          <p>{t.rightsReservedText}</p>
          <p>{t.subscribeText}</p>
          <Label editorId="email" className="footer__visually-hidden">{t.emailPlaceholder}</Label>
          <TextBox
            placeholder={t.emailPlaceholder}
            className="footer__subscribe"
            suffix={() => (
              <InputSuffix>
                <InputSeparator />
                <Button themeColor="primary">{t.subscribeButtonText}</Button>
              </InputSuffix>
            )}
          />
          <p>{t.followUsText}</p>  
          <div className="footer__social-links">
            <p className="footer__social-link">
              <SvgIcon icon={facebookIcon} size="xlarge" /> Facebook
            </p>
            <p className="footer__social-link">
              <SvgIcon icon={xLogoIcon} size="xlarge" /> X
            </p>
            <p className="footer__social-link">
              <SvgIcon icon={linkedinIcon} size="xlarge" /> LinkedIn
            </p>
          </div>
        </div>

        <div className="footer__links">
          <h4 className="footer__link-title">{t.customerCareTitle}</h4>
          {Array.isArray(t.customerCareLinks) &&
            t.customerCareLinks.map((link: string, index: number) => (
              <a key={index} href="#" className="k-link">{link}</a>
            ))}
        </div>

        <div className="footer__links">
          <h4 className="footer__link-title">{t.ourCompanyTitle}</h4>
          {Array.isArray(t.ourCompanyLinks) &&
            t.ourCompanyLinks.map((link: string, index: number) => (
              <a key={index} href="#" className="k-link">{link}</a>
            ))}
        </div>

        <div className="footer__links">
          <h4 className="footer__link-title">{t.legalPrivacyTitle}</h4>
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
