import * as React from 'react';
import { ExpansionPanel, ExpansionPanelContent } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';
import { Input } from '@progress/kendo-react-inputs';
import { searchIcon } from '@progress/kendo-svg-icons';
import { SvgIcon } from '@progress/kendo-react-common';

const questions = [
  ['How do I change my notification preferences?', 'Open Settings, select Notifications, and choose the updates you want to receive. Changes are saved when you select Save preferences.'],
  ['Where can I manage billing details?', 'Open Settings and select Billing to review payment methods, invoices, and your current subscription.'],
  ['How can I export my team data?', 'On the dashboard team table, use Export to Excel or Export to PDF to download the current team view.'],
];

export const Help = () => {
  const [expanded, setExpanded] = React.useState(null);

  return (
    <section className="help-page" aria-labelledby="help-title">
      <div className="page-heading">
        <h1 id="help-title">Help & support</h1>
        <p>Find answers and get the most from your workspace.</p>
      </div>
      <div className="help-search">
        <label htmlFor="help-search">Search help topics</label>
        <Input id="help-search" placeholder="Search account, billing, or team topics" prefix={() => <SvgIcon icon={searchIcon} />} />
      </div>
      <section className="help-section" aria-labelledby="faq-title">
        <h2 id="faq-title">Frequently asked questions</h2>
        {questions.map(([title, answer], index) => (
          <ExpansionPanel
            key={title}
            title={title}
            expanded={expanded === index}
            onAction={() => setExpanded(expanded === index ? null : index)}
          >
            <ExpansionPanelContent>{answer}</ExpansionPanelContent>
          </ExpansionPanel>
        ))}
      </section>
      <section className="support-card" aria-labelledby="contact-title">
        <div>
          <h2 id="contact-title">Still need help?</h2>
          <p>Send the support team a request and expect a response within one business day.</p>
        </div>
        <Button themeColor="primary">Contact support</Button>
      </section>
    </section>
  );
};
