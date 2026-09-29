import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@progress/kendo-react-buttons";
import { Chat } from "@progress/kendo-react-conversational-ui";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { Switch, TextArea, TextBox } from "@progress/kendo-react-inputs";
import { PanelBar, PanelBarItem, Stepper } from "@progress/kendo-react-layout";
import { Label } from "@progress/kendo-react-labels";
import PageHeading from "../components/PageHeading";
import StatusBadge from "../components/StatusBadge";
import { AIHeaderTemplate, AIMessageTemplate } from "../components/AIChatTemplates";
import { useAIChat } from "../hooks/useAIChat";
import { useDoctorProfile } from "../context/DoctorProfileContext";
import { labResults, notifications, patients } from "../data/sampleData";

const providerData = [
  { name: "Maya Chen, MD", specialty: "Internal Medicine", department: "Primary Care", availability: "Accepting new patients", image: patients[2]?.thumbnail },
  { name: "Jordan Bell, NP", specialty: "Cardiology", department: "Heart & Vascular", availability: "Next opening: Thu, 10:30 AM", image: patients[0]?.thumbnail },
  { name: "Priya Nair, MD", specialty: "Endocrinology", department: "Diabetes Care", availability: "Accepting new patients", image: patients[4]?.thumbnail },
  { name: "Samuel Ortiz, PA", specialty: "Orthopedics", department: "Sports Medicine", availability: "Next opening: Fri, 2:00 PM", image: patients[1]?.thumbnail },
  { name: "Elena Brooks, DO", specialty: "Pulmonology", department: "Respiratory Care", availability: "Accepting new patients", image: patients[6]?.thumbnail },
  { name: "Noah Williams, RN", specialty: "Care Coordination", department: "Clinical Services", availability: "Available today", image: patients[5]?.thumbnail },
];

function AlertBanner() {
  return (
    <div className="clinical-alert" role="alert">
      <strong>Critical result requires review.</strong> Olivia Martinez&apos;s potassium result is outside the reference range.
      <Button fillMode="flat" themeColor="error" size="small">Review result</Button>
    </div>
  );
}

export function Labs() {
  const [priority, setPriority] = useState("All priorities");
  const filteredLabs = useMemo(
    () => priority === "All priorities" ? labResults : labResults.filter((lab) => lab.status === priority),
    [priority],
  );

  return (
    <>
      <PageHeading
        title="Labs & Diagnostics"
        subtitle="Review orders, acknowledge results, and release reviewed results to patient records."
        actions={<Button themeColor="primary" rounded="full">Order lab</Button>}
      />
      <AlertBanner />
      <div className="table-toolbar">
        <TextBox placeholder="Search by patient, test, or order ID" aria-label="Search lab results" />
        <DropDownList
          data={["All priorities", "Normal", "Abnormal", "Critical"]}
          value={priority}
          onChange={(event) => setPriority(String(event.value))}
          aria-label="Filter lab results by status"
        />
      </div>
      <div className="app-card data-table-card">
        <Grid data={filteredLabs} sortable pageable={{ pageSizes: [10, 20], buttonCount: 5 }}>
          <GridColumn field="date" title="Date" format="{0:d}" width="140px" />
          <GridColumn field="patientId" title="Patient ID" width="130px" />
          <GridColumn field="testName" title="Test" />
          <GridColumn field="result" title="Result" width="130px" />
          <GridColumn field="normalRange" title="Reference range" width="160px" />
          <GridColumn field="status" title="Status" width="140px" cells={{ data: ({ dataItem, tdProps }) => <td {...tdProps}><StatusBadge status={dataItem.status} /></td> }} />
          <GridColumn title="Action" width="160px" cells={{ data: ({ tdProps }) => <td {...tdProps}><Button fillMode="flat" size="small">Acknowledge</Button></td> }} />
        </Grid>
      </div>
    </>
  );
}

export function Providers() {
  const [specialty, setSpecialty] = useState("All specialties");
  const visibleProviders = specialty === "All specialties"
    ? providerData
    : providerData.filter((provider) => provider.specialty === specialty);

  return (
    <>
      <PageHeading title="Provider Directory" subtitle="Find clinicians, view availability, and coordinate patient care." />
      <div className="directory-toolbar">
        <TextBox placeholder="Search providers or departments" aria-label="Search providers" />
        <DropDownList
          data={["All specialties", ...new Set(providerData.map((provider) => provider.specialty))]}
          value={specialty}
          onChange={(event) => setSpecialty(String(event.value))}
          aria-label="Filter providers by specialty"
        />
      </div>
      <div className="provider-grid">
        {visibleProviders.map((provider) => (
          <article className="provider-card" key={provider.name}>
            <img src={provider.image} alt={`Portrait of ${provider.name}`} loading="lazy" />
            <div>
              <h2>{provider.name}</h2>
              <p>{provider.specialty} · {provider.department}</p>
              <StatusBadge status={provider.availability} themeColor="success" />
            </div>
            <Button fillMode="outline" themeColor="primary">View profile</Button>
          </article>
        ))}
      </div>
    </>
  );
}

export function Messages() {
  const { profile } = useDoctorProfile();
  const {
    chatMessages, inputValue, setInputValue, loading, handleSendMessage,
    handleSuggestionClick, authorId, defaultSuggestions,
  } = useAIChat(`Dr. ${profile.fullName.split(" ").pop()}`);

  return (
    <>
      <PageHeading title="Secure Messages" subtitle="Coordinate care securely with patients and the clinical team." actions={<Button themeColor="primary" rounded="full">New message</Button>} />
      <div className="messages-layout">
        <aside className="message-thread-list app-card">
          <h2>Inbox</h2>
          {patients.slice(0, 5).map((patient) => (
            <button className="message-thread" key={patient.id}>
              <span>{patient.name}</span>
              <small>{patient.reason}</small>
            </button>
          ))}
        </aside>
        <section className="app-card message-chat" aria-label="Secure messaging conversation">
          <Chat
            messages={chatMessages}
            authorId={authorId}
            onSendMessage={handleSendMessage}
            onSuggestionClick={handleSuggestionClick}
            suggestions={defaultSuggestions}
            headerTemplate={AIHeaderTemplate}
            receiverMessageSettings={{ messageTemplate: AIMessageTemplate }}
            placeholder="Write a secure message"
            showUsername={false}
            inputValue={inputValue}
            onInputValueChange={setInputValue}
            loading={loading}
            width="100%"
            height={560}
          />
        </section>
      </div>
    </>
  );
}

const intakeSteps = ["Demographics", "Insurance", "Medical history", "Review"];

export function Intake() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  return (
    <>
      <PageHeading title="New Patient Intake" subtitle={`Step ${step + 1} of ${intakeSteps.length}`} />
      <section className="intake-card app-card">
        <Stepper items={intakeSteps.map((label, index) => ({ label, isValid: index < step ? true : undefined }))} value={step} linear onChange={(event) => setStep(event.value)} />
        <div className="intake-content">
          <h2>{intakeSteps[step]}</h2>
          {step === 0 && <><Label editorId="patient-name">Full name</Label><TextBox id="patient-name" placeholder="e.g. Amina Patel" /><Label editorId="patient-dob">Date of birth</Label><TextBox id="patient-dob" placeholder="MM/DD/YYYY" /></>}
          {step === 1 && <><Label editorId="carrier">Insurance carrier</Label><TextBox id="carrier" placeholder="Search insurance carrier" /><Label editorId="policy">Member ID</Label><TextBox id="policy" placeholder="Enter member ID" /></>}
          {step === 2 && <><Label editorId="history">Relevant medical history</Label><TextArea id="history" rows={6} placeholder="Conditions, medications, and allergies" /></>}
          {step === 3 && <p>Review the entered information with the patient before creating their record. No information is submitted until you select Create patient.</p>}
        </div>
        <div className="intake-actions">
          <Button fillMode="flat" disabled={step === 0} onClick={() => setStep((value) => value - 1)}>Back</Button>
          {step < intakeSteps.length - 1 ? <Button themeColor="primary" onClick={() => setStep((value) => value + 1)}>Continue</Button> : <Button themeColor="primary" onClick={() => navigate("/patients")}>Create patient</Button>}
        </div>
      </section>
    </>
  );
}

export function Settings() {
  const [settings, setSettings] = useState({ appointment: true, results: true, messages: false });
  const toggle = (key: keyof typeof settings) => setSettings((current) => ({ ...current, [key]: !current[key] }));
  return (
    <>
      <PageHeading title="Settings & Profile" subtitle="Manage your clinical profile, schedule preferences, and notifications." />
      <div className="settings-stack">
        <section className="app-card settings-section">
          <h2>Clinical profile</h2>
          <Label editorId="display-name">Display name</Label><TextBox id="display-name" defaultValue="Dr. Carter" />
          <Label editorId="department">Department</Label><DropDownList id="department" data={["Internal Medicine", "Cardiology", "Primary Care"]} defaultValue="Internal Medicine" />
        </section>
        <section className="app-card settings-section">
          <h2>Notification preferences</h2>
          <label><span>Appointment changes</span><Switch checked={settings.appointment} onChange={() => toggle("appointment")} /></label>
          <label><span>Reviewed lab results</span><Switch checked={settings.results} onChange={() => toggle("results")} /></label>
          <label><span>Secure messages</span><Switch checked={settings.messages} onChange={() => toggle("messages")} /></label>
        </section>
        <section className="app-card settings-section danger-zone">
          <h2>Session security</h2><p>Sign out from inactive clinical workstations when your shift ends.</p><Button themeColor="error" fillMode="outline">Sign out all other sessions</Button>
        </section>
      </div>
    </>
  );
}

export function Notifications() {
  return (
    <>
      <PageHeading title="Notifications" subtitle="Clinical alerts, scheduling updates, and secure message activity." actions={<Button fillMode="flat">Mark all as read</Button>} />
      <section className="notification-feed app-card">
        {notifications.map((notification) => (
          <article className="notification-feed-item" key={notification.id}>
            <StatusBadge status={notification.type === "error" ? "Critical" : notification.type} />
            <div><h2>{notification.title}</h2><p>{notification.message}</p></div><time>{notification.time}</time>
          </article>
        ))}
      </section>
    </>
  );
}

export function HelpSupport() {
  return (
    <>
      <PageHeading title="Help & Support" subtitle="Find workflow guidance or contact the clinical systems team." />
      <div className="help-layout">
        <section className="app-card help-card">
          <h2>Frequently asked questions</h2>
          <PanelBar expandMode="multiple">
            <PanelBarItem title="How do I release a result to a patient?"><p>Review and acknowledge the result in Labs & Diagnostics. Released results are then visible in the patient record.</p></PanelBarItem>
            <PanelBarItem title="How do I schedule a follow-up?"><p>Open the patient record, then select Schedule to pre-load the patient context in the calendar.</p></PanelBarItem>
            <PanelBarItem title="How can I report a system issue?"><p>Use the support request form to include the affected workflow and a non-identifying description of the issue.</p></PanelBarItem>
          </PanelBar>
        </section>
        <section className="app-card help-card">
          <h2>Contact clinical systems</h2>
          <Label editorId="support-topic">Topic</Label><DropDownList id="support-topic" data={["Access request", "Scheduling issue", "Data question", "Other"]} defaultValue="Access request" />
          <Label editorId="support-message">What can we help with?</Label><TextArea id="support-message" rows={6} placeholder="Do not include patient-identifying information." />
          <Button themeColor="primary">Send support request</Button>
        </section>
      </div>
    </>
  );
}

export function Auth({ mode }: Readonly<{ mode: "login" | "register" }>) {
  const navigate = useNavigate();
  const isLogin = mode === "login";
  return (
    <main className="auth-page">
      <section className="auth-card app-card">
        <h1>{isLogin ? "Sign in to HealthPoint" : "Activate your HealthPoint account"}</h1>
        <p>{isLogin ? "Use your approved clinical account to continue." : "Enter your patient activation code to create a secure account."}</p>
        {!isLogin && <><Label editorId="activation-code">Activation code</Label><TextBox id="activation-code" autoComplete="one-time-code" /></>}
        <Label editorId="email">Email address</Label><TextBox id="email" type="email" autoComplete="email" />
        <Label editorId="password">Password</Label><TextBox id="password" type="password" autoComplete={isLogin ? "current-password" : "new-password"} />
        <Button themeColor="primary" onClick={() => navigate("/")}>{isLogin ? "Sign in" : "Create account"}</Button>
        <Button fillMode="flat" onClick={() => navigate(isLogin ? "/register" : "/login")}>{isLogin ? "Need an activation code?" : "Back to sign in"}</Button>
      </section>
    </main>
  );
}

export function NotFound() {
  const navigate = useNavigate();
  return <main className="empty-state"><h1>Page not found</h1><p>The clinical page you requested is unavailable or may have moved.</p><div><Button themeColor="primary" onClick={() => navigate("/")}>Return to dashboard</Button><Button fillMode="flat" onClick={() => navigate("/patients")}>Open patients</Button></div></main>;
}
