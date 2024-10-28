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

const Footer: React.FC = () => {
  return (
    <section className="k-py-10 k-px-12 header"> 
      <div className="k-d-flex k-flex-wrap k-justify-content-between k-gap-8 k-text-align-left">
        <div className="k-flex-basis-250 k-flex-grow-1 k-mb-4 k-mt-6" style={{marginLeft: '50px'}}> 
          <a href="#" className="k-d-block k-mb-4 k-text-align-center">
            <img src={viloraLogo} alt="Logo" />
          </a>
          <p className="k-m-0">We use cookies to improve your experience.</p> 
          <p className="k-m-0">All rights reserved.</p>
          <p className="k-mt-4">Subscribe to our Newsletter:</p>
          <Label editorId="email" className="k-sr-only">Your Email</Label>
          <TextBox
            placeholder="Email"
            className="k-w-full"
            suffix={() => (
              <InputSuffix>
                <InputSeparator />
                <Button themeColor="primary">Subscribe</Button>
              </InputSuffix>
            )}
          />
          <p className="k-mt-6 k-font-weight-bold">Follow us:</p>  
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

        <div className="k-flex-basis-200 k-flex-grow-1 k-d-flex k-flex-col k-gap-2 k-mt-6">  
          <h4 className="k-color-primary k-font-bold">Customer Care</h4>
          <a href="#" className="k-link">Contact Us</a>
          <a href="#" className="k-link">Shopping Online</a>
          <a href="#" className="k-link">Track Your Order</a>
          <a href="#" className="k-link">Shipping & Delivery</a>
          <a href="#" className="k-link">Orders & Payment</a>
          <a href="#" className="k-link">Help</a>
        </div>

        <div className="k-flex-basis-200 k-flex-grow-1 k-d-flex k-flex-col k-gap-2 k-mt-6">  
          <h4 className="k-color-primary k-font-bold">Our Company</h4>
          <a href="#" className="k-link">Prominent Locations</a>
          <a href="#" className="k-link">Careers</a>
          <a href="#" className="k-link">Corporate Responsibility</a>
          <a href="#" className="k-link">Sustainability</a>
          <a href="#" className="k-link">Society Care</a>
        </div>

        <div className="k-flex-basis-200 k-flex-grow-1 k-d-flex k-flex-col k-gap-2 k-mt-6" style={{marginRight: '150px'}}>  
          <h4 className="k-color-primary k-font-bold">Legal & Privacy</h4>
          <div className="k-d-flex k-gap-2">
            <p className="k-m-0">Prominent Locations</p>
          </div>
          <div className="k-d-flex k-gap-2">
            <p className="k-m-0">Careers</p>
          </div>
          <div className="k-d-flex k-gap-2">
            <p className="k-m-0">Corporate Responsibility</p>
          </div>
          <div className="k-d-flex k-gap-2">
            <p className="k-m-0">Sustainability</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
