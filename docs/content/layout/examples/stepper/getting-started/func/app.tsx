import * as React from 'react';
import { Stepper, StepperChangeEvent } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';
import { SvgIcon } from '@progress/kendo-react-common';
import { userIcon, pencilIcon, gearsIcon, usersIcon, checkCircleIcon } from '@progress/kendo-svg-icons';
import './styles.css';

type Plan = 'starter' | 'pro' | 'enterprise';

const steps = [
    { label: 'Account', svgIcon: userIcon },
    { label: 'Profile', svgIcon: pencilIcon },
    { label: 'Workspace', svgIcon: gearsIcon },
    { label: 'Team', svgIcon: usersIcon },
    { label: 'Done', svgIcon: checkCircleIcon }
];

const plans: { id: Plan; name: string; price: string; desc: string }[] = [
    { id: 'starter', name: 'Starter', price: 'Free', desc: '5 projects · 1 GB · 3 members' },
    { id: 'pro', name: 'Pro', price: '$29 / mo', desc: 'Unlimited projects · 3 TB · 25 members' },
    { id: 'enterprise', name: 'Enterprise', price: 'Contact', desc: 'Custom limits · SSO · SLA' }
];

const teammates = [
    { id: 1, name: 'Alex Morgan', email: 'alex@techcorp.com' },
    { id: 2, name: 'Jamie Chen', email: 'jamie@techcorp.com' },
    { id: 3, name: 'Sam Wilson', email: 'sam@techcorp.com' }
];

const industries = ['Technology', 'Finance', 'Healthcare', 'Retail', 'Education'];

const App = () => {
    const [step, setStep] = React.useState<number>(0);
    const [plan, setPlan] = React.useState<Plan>('pro');
    const [industry, setIndustry] = React.useState<string>('Technology');
    const [invited, setInvited] = React.useState<Set<number>>(new Set());

    const isLast = step === steps.length - 1;
    const isFirst = step === 0;

    const handleChange = (e: StepperChangeEvent) => setStep(e.value);
    const next = () => {
        if (!isLast) {
            setStep((s) => s + 1);
        }
    };
    const prev = () => {
        if (!isFirst) {
            setStep((s) => s - 1);
        }
    };

    const toggleInvite = (id: number) =>
        setInvited((prev) => {
            const next = new Set(prev);
            next.has(id) ? next.delete(id) : next.add(id);
            return next;
        });

    return (
        <div className="ob-shell">
            <div className="ob-card">
                <div className="ob-stepper-wrap">
                    <Stepper value={step} onChange={handleChange} items={steps} />
                </div>

                <div className="ob-body">
                    {step === 0 && (
                        <div className="ob-step">
                            <p className="ob-step-title">Choose your plan</p>
                            <div className="ob-plans">
                                {plans.map((p) => (
                                    <button
                                        key={p.id}
                                        className={`ob-plan${plan === p.id ? ' ob-plan--selected' : ''}`}
                                        onClick={() => setPlan(p.id)}
                                    >
                                        <span className="ob-plan-name">{p.name}</span>
                                        <span className="ob-plan-price">{p.price}</span>
                                        <span className="ob-plan-desc">{p.desc}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {step === 1 && (
                        <div className="ob-step">
                            <p className="ob-step-title">Tell us about yourself</p>
                            <div className="ob-fields">
                                <div className="ob-field">
                                    <label>Full Name</label>
                                    <input defaultValue="Jordan Lee" />
                                </div>
                                <div className="ob-field">
                                    <label>Job Title</label>
                                    <input defaultValue="Product Manager" />
                                </div>
                                <div className="ob-field">
                                    <label>Company</label>
                                    <input defaultValue="TechCorp Inc." />
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="ob-step">
                            <p className="ob-step-title">Set up your workspace</p>
                            <div className="ob-fields">
                                <div className="ob-field">
                                    <label>Workspace Name</label>
                                    <input defaultValue="My Workspace" />
                                </div>
                            </div>
                            <label className="ob-chips-label">Industry</label>
                            <div className="ob-chips">
                                {industries.map((ind) => (
                                    <button
                                        key={ind}
                                        className={`ob-chip${industry === ind ? ' ob-chip--on' : ''}`}
                                        onClick={() => setIndustry(ind)}
                                    >
                                        {ind}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="ob-step">
                            <p className="ob-step-title">Invite your team</p>
                            <div className="ob-teammates">
                                {teammates.map((t) => (
                                    <div key={t.id} className="ob-teammate">
                                        <div className="ob-teammate-info">
                                            <span className="ob-teammate-name">{t.name}</span>
                                            <span className="ob-teammate-email">{t.email}</span>
                                        </div>
                                        <button
                                            className={`ob-invite-btn${
                                                invited.has(t.id) ? ' ob-invite-btn--sent' : ''
                                            }`}
                                            onClick={() => toggleInvite(t.id)}
                                        >
                                            {invited.has(t.id) ? 'Invited ✓' : 'Invite'}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {step === 4 && (
                        <div className="ob-step ob-step--success">
                            <span className="ob-success-icon">
                                <SvgIcon icon={checkCircleIcon} size="xxlarge" />
                            </span>
                            <p className="ob-success-title">You're all set!</p>
                            <p className="ob-success-sub">
                                Your {plan.charAt(0).toUpperCase() + plan.slice(1)} workspace is ready to use.
                            </p>
                            <div className="ob-stats">
                                <div className="ob-stat">
                                    <span className="ob-stat-val">∞</span>
                                    <span className="ob-stat-lbl">Projects</span>
                                </div>
                                <div className="ob-stat">
                                    <span className="ob-stat-val">3 TB</span>
                                    <span className="ob-stat-lbl">Storage</span>
                                </div>
                                <div className="ob-stat">
                                    <span className="ob-stat-val">{invited.size + 1}</span>
                                    <span className="ob-stat-lbl">Members</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="ob-footer">
                    <Button fillMode="flat" disabled={isFirst} onClick={prev}>
                        Back
                    </Button>
                    <Button themeColor="primary" onClick={next} disabled={isLast}>
                        {isLast ? 'Get Started' : 'Continue'}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default App;
