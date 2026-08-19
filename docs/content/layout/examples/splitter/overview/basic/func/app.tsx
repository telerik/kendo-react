import * as React from 'react';
import { Splitter, SplitterOnChangeEvent, SplitterPaneProps } from '@progress/kendo-react-layout';
import { SvgIcon } from '@progress/kendo-react-common';
import { inboxIcon, folderIcon, pencilIcon, trashIcon, plusIcon, bellIcon } from '@progress/kendo-svg-icons';
import './styles.css';

interface Email {
    id: number;
    from: string;
    initials: string;
    subject: string;
    preview: string;
    time: string;
    unread: boolean;
    label: string | null;
}

const emails: Email[] = [
    {
        id: 1,
        from: 'Alex Morgan',
        initials: 'AM',
        subject: 'Re: Q4 Roadmap',
        time: '10:42 AM',
        unread: true,
        label: 'Alpha',
        preview:
            'The updated timeline looks great. I reviewed the milestones and have a few suggestions about the API integration sprint before we finalize...'
    },
    {
        id: 2,
        from: 'Jamie Chen',
        initials: 'JC',
        subject: 'Design Review Notes',
        time: '9:15 AM',
        unread: true,
        label: 'Beta',
        preview:
            "Here are my notes from yesterday's session. Overall the direction is solid — the component library changes are especially well thought out..."
    },
    {
        id: 3,
        from: 'Sam Wilson',
        initials: 'SW',
        subject: 'Deploy update — staging',
        time: 'Yesterday',
        unread: false,
        label: null,
        preview:
            'The latest build has been pushed to staging. Please verify the API changes before we proceed to production. CI checks are all green...'
    },
    {
        id: 4,
        from: 'Product Team',
        initials: 'PT',
        subject: 'Sprint Planning: Week 31',
        time: 'Yesterday',
        unread: false,
        label: 'Alpha',
        preview:
            'Sprint planning is scheduled for Monday at 10 AM. Please review the backlog items and flag any blockers before the session...'
    },
    {
        id: 5,
        from: 'Sarah Collins',
        initials: 'SC',
        subject: 'Investor deck — final draft',
        time: 'Mon',
        unread: false,
        label: null,
        preview:
            "I've incorporated all the feedback from last week. The deck is ready for your final review before we present on Thursday morning..."
    }
];

const folders = [
    { id: 'inbox', label: 'Inbox', count: 2, icon: inboxIcon },
    { id: 'sent', label: 'Sent', count: 0, icon: folderIcon },
    { id: 'drafts', label: 'Drafts', count: 3, icon: pencilIcon },
    { id: 'trash', label: 'Trash', count: 0, icon: trashIcon }
];

const labelColor: Record<string, string> = { Alpha: '#6366f1', Beta: '#f59e0b' };

const App = () => {
    const [panes, setPanes] = React.useState<SplitterPaneProps[]>([
        { size: '180px', min: '100px', collapsible: true },
        {},
        { size: '290px', min: '150px', collapsible: true }
    ]);
    const [innerPanes, setInnerPanes] = React.useState<SplitterPaneProps[]>([{ size: '65%' }, {}]);
    const [folder, setFolder] = React.useState<string>('inbox');
    const [selectedId, setSelectedId] = React.useState<number>(1);

    const selected = emails.find((e) => e.id === selectedId)!;

    return (
        <div className="mc-shell">
            <div className="mc-header">
                <span className="mc-logo">MailFlow</span>
                <button className="mc-compose-btn">
                    <SvgIcon icon={plusIcon} />
                    <span>Compose</span>
                </button>
                <div className="mc-header-right">
                    <span className="mc-icon-btn">
                        <SvgIcon icon={bellIcon} />
                    </span>
                    <img className="mc-user-img" src="https://picsum.photos/id/1027/28/28" alt="user" />
                </div>
            </div>

            <Splitter
                style={{ height: 530 }}
                panes={panes}
                onChange={(e: SplitterOnChangeEvent) => setPanes(e.newState)}
            >
                {/* Left nav */}
                <div className="mc-nav">
                    {folders.map((f) => (
                        <button
                            key={f.id}
                            className={`mc-nav-btn${folder === f.id ? ' mc-nav-btn--on' : ''}`}
                            onClick={() => setFolder(f.id)}
                        >
                            <SvgIcon icon={f.icon} />
                            <span>{f.label}</span>
                            {f.count > 0 && <span className="mc-badge">{f.count}</span>}
                        </button>
                    ))}
                    <div className="mc-nav-sep" />
                    <p className="mc-nav-head">Labels</p>
                    {Object.keys(labelColor).map((lbl) => (
                        <div key={lbl} className="mc-label-row">
                            <span className="mc-dot" style={{ background: labelColor[lbl] }} />
                            {lbl}
                        </div>
                    ))}
                </div>

                {/* Center — nested vertical splitter */}
                <Splitter
                    style={{ height: '100%' }}
                    panes={innerPanes}
                    orientation="vertical"
                    onChange={(e: SplitterOnChangeEvent) => setInnerPanes(e.newState)}
                >
                    {/* Email list */}
                    <div className="mc-list">
                        <div className="mc-list-bar">
                            <span className="mc-list-title">Inbox</span>
                            <span className="mc-list-badge">{emails.filter((e) => e.unread).length} unread</span>
                        </div>
                        <div className="mc-list-scroll">
                            {emails.map((email) => (
                                <div
                                    key={email.id}
                                    className={`mc-row${selectedId === email.id ? ' mc-row--sel' : ''}${
                                        email.unread ? ' mc-row--unread' : ''
                                    }`}
                                    onClick={() => setSelectedId(email.id)}
                                >
                                    <div className="mc-avatar">{email.initials}</div>
                                    <div className="mc-row-body">
                                        <div className="mc-row-top">
                                            <span className="mc-from">{email.from}</span>
                                            <span className="mc-time">{email.time}</span>
                                        </div>
                                        <p className="mc-subject">{email.subject}</p>
                                        <p className="mc-preview">{email.preview.slice(0, 58)}…</p>
                                        {email.label && (
                                            <span
                                                className="mc-chip"
                                                style={{
                                                    background: labelColor[email.label] + '22',
                                                    color: labelColor[email.label]
                                                }}
                                            >
                                                {email.label}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick reply */}
                    <div className="mc-reply">
                        <p className="mc-reply-label">Quick Reply</p>
                        <textarea className="mc-reply-area" placeholder="Type your reply…" />
                        <div className="mc-reply-foot">
                            <button className="mc-send-btn">Send</button>
                        </div>
                    </div>
                </Splitter>

                {/* Reading pane */}
                <div className="mc-read">
                    <h3 className="mc-read-subject">{selected.subject}</h3>
                    <div className="mc-read-meta">
                        <div className="mc-avatar mc-avatar--lg">{selected.initials}</div>
                        <div>
                            <p className="mc-read-from">{selected.from}</p>
                            <p className="mc-read-time">{selected.time}</p>
                        </div>
                    </div>
                    <div className="mc-read-body">
                        <p>Hi Jordan,</p>
                        <p>{selected.preview}</p>
                        <p>Let me know if you need anything else before we move forward.</p>
                        <p>
                            Best,
                            <br />
                            {selected.from.split(' ')[0]}
                        </p>
                    </div>
                </div>
            </Splitter>
        </div>
    );
};

export default App;
