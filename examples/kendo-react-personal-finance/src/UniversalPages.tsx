import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@progress/kendo-react-buttons";
import { ExpansionPanel, Card } from "@progress/kendo-react-layout";
import { ListView, ListViewItemProps } from "@progress/kendo-react-listview";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Input } from "@progress/kendo-react-inputs";
import { Label } from "@progress/kendo-react-labels";
import { checkLocalStorageData } from "./data/localStorageUtils";
import PersonalInfo from "./SettingsComponents/PersonalInfo";

const baseRoute = import.meta.env.BASE_URL;

const notifications = [
  {
    id: 1,
    title: "Transfer completed",
    message: "$425.00 moved to your Rainy Day Savings account.",
    time: "18 minutes ago",
    category: "Accounts",
    unread: true,
  },
  {
    id: 2,
    title: "Electricity bill due soon",
    message: "Northline Energy payment of $86.42 is scheduled for Aug 28.",
    time: "Yesterday",
    category: "Bills",
    unread: true,
  },
  {
    id: 3,
    title: "Monthly statement is ready",
    message: "Your August checking statement is available to download.",
    time: "Aug 22",
    category: "Statements",
    unread: false,
  },
];

export function Profile() {
  return (
    <>
      <h1 className="app-page-title">Profile</h1>
      <main className="app-centered-page">
        <PersonalInfo />
      </main>
    </>
  );
}

export function Notifications() {
  const [items, setItems] = React.useState(notifications);
  const markAllRead = () => setItems((current) => current.map((item) => ({ ...item, unread: false })));
  const NotificationItem = (props: ListViewItemProps) => {
    const item = props.dataItem as (typeof notifications)[number];
    return (
      <div className={`app-notification${item.unread ? " app-notification--unread" : ""}`}>
        <div>
          <span className="app-notification__category">{item.category}</span>
          <h2>{item.title}</h2>
          <p>{item.message}</p>
        </div>
        <time>{item.time}</time>
      </div>
    );
  };

  return (
    <>
      <div className="app-page-heading">
        <div>
          <h1 className="app-page-title">Notifications</h1>
          <p>Account activity, payment reminders, and statement updates.</p>
        </div>
        <Button fillMode="outline" onClick={markAllRead}>Mark all as read</Button>
      </div>
      <main className="app-list-page">
        <ListView data={items} item={NotificationItem} />
      </main>
    </>
  );
}

export function Help() {
  const [expanded, setExpanded] = React.useState<number | null>(null);
  const faqs = [
    ["How do I transfer money between my accounts?", "Open Transactions, select the source account, and confirm the destination, amount, and transfer date."],
    ["When will a scheduled payment be processed?", "Scheduled payments are submitted on the selected business day. You can review pending activity from Transactions."],
    ["How can I protect my account?", "Use a unique password, keep your contact details current, and review account activity regularly."],
  ];
  return (
    <>
      <div className="app-page-heading">
        <div>
          <h1 className="app-page-title">Help & Support</h1>
          <p>Answers to common personal-finance questions.</p>
        </div>
      </div>
      <main className="app-help-page">
        <section aria-label="Frequently asked questions">
          {faqs.map(([title, content], index) => (
            <ExpansionPanel
              key={title}
              title={title}
              expanded={expanded === index}
              onAction={() => setExpanded(expanded === index ? null : index)}
            >
              <p>{content}</p>
            </ExpansionPanel>
          ))}
        </section>
        <Card className="app-support-card">
          <h2>Need more help?</h2>
          <p>Our support team responds to secure messages within one business day.</p>
          <Button themeColor="primary">Contact support</Button>
        </Card>
      </main>
    </>
  );
}

export function Login() {
  const navigate = useNavigate();
  return (
    <main className="app-access-page">
      <Card className="app-access-card">
        <h1>Sign in to your finances</h1>
        <p>Securely access your accounts and personal insights.</p>
        <Form
          onSubmit={() => navigate(baseRoute)}
          render={() => (
            <FormElement className="app-form">
              <div>
                <Label editorId="email">Email address</Label>
                <Field id="email" name="email" type="email" component={Input} />
              </div>
              <div>
                <Label editorId="password">Password</Label>
                <Field id="password" name="password" type="password" component={Input} />
              </div>
              <Button type="submit" themeColor="primary" size="large">Sign in securely</Button>
              <Button fillMode="flat" type="button">Forgot password?</Button>
            </FormElement>
          )}
        />
      </Card>
    </main>
  );
}

export function NotFound() {
  const navigate = useNavigate();
  const name = checkLocalStorageData("personalInfo").name;
  return (
    <main className="app-empty-page">
      <Card className="app-empty-card">
        <p className="app-empty-card__eyebrow">404</p>
        <h1>Page not found</h1>
        <p>We could not find that page, {name}. Return to your account overview to continue.</p>
        <Button themeColor="primary" onClick={() => navigate(baseRoute)}>Return to overview</Button>
      </Card>
    </main>
  );
}
