import * as React from 'react';
import { TabStrip, TabStripSelectEventArguments, TabStripTab } from '@progress/kendo-react-layout';
import { SvgIcon } from '@progress/kendo-react-common';
import { checkIcon, pencilIcon, plusIcon, calendarIcon, starIcon } from '@progress/kendo-svg-icons';
import './styles.css';

interface Project {
    name: string;
    status: 'In Progress' | 'Review' | 'Done' | 'Planning';
    progress: number;
}

interface ActivityItem {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any;
    text: string;
    time: string;
    id: number;
}

const projects: Project[] = [
    { name: 'Alpha Launch', status: 'In Progress', progress: 85 },
    { name: 'Beta Testing', status: 'Review', progress: 60 },
    { name: 'Q4 Roadmap', status: 'Done', progress: 100 },
    { name: 'API Integration', status: 'In Progress', progress: 45 },
    { name: 'Design System', status: 'Review', progress: 78 },
    { name: 'Mobile App', status: 'Planning', progress: 20 }
];

const activityFeed: ActivityItem[] = [
    { id: 1, icon: checkIcon, text: 'Completed "Alpha Sprint Review"', time: '2 hours ago' },
    { id: 2, icon: pencilIcon, text: 'Updated roadmap for Q4 Planning', time: '5 hours ago' },
    { id: 3, icon: plusIcon, text: 'Added 3 tasks to Beta Testing', time: 'Yesterday' },
    { id: 4, icon: calendarIcon, text: 'Set milestone: API Integration v2', time: '2 days ago' },
    { id: 5, icon: starIcon, text: 'Design System marked as featured project', time: '3 days ago' }
];

const skills = ['Strategy', 'Roadmapping', 'Agile', 'Data Analysis', 'Stakeholder Mgmt'];

interface UpcomingItem {
    title: string;
    date: string;
    type: 'Meeting' | 'Deadline' | 'Review';
}

const upcoming: UpcomingItem[] = [
    { title: 'Q3 Sprint Retrospective', date: 'Aug 5, 2026', type: 'Meeting' },
    { title: 'Design System Review', date: 'Aug 19, 2026', type: 'Review' }
];

const upcomingColor: Record<UpcomingItem['type'], string> = {
    Meeting: '#6366f1',
    Deadline: '#ef4444',
    Review: '#f59e0b'
};

const statusColor: Record<Project['status'], string> = {
    'In Progress': '#6366f1',
    Review: '#f59e0b',
    Done: '#10b981',
    Planning: '#94a3b8'
};

const App = () => {
    const [selected, setSelected] = React.useState<number>(0);

    const handleSelect = (e: TabStripSelectEventArguments) => {
        setSelected(e.selected);
    };

    return (
        <div className="ts-shell">
            <TabStrip selected={selected} onSelect={handleSelect}>
                <TabStripTab title="Overview">
                    <div className="ts-panel">
                        <div className="ts-hero">
                            <img className="ts-avatar" src="https://picsum.photos/id/1027/80/80" alt="Sarah Collins" />
                            <div>
                                <h2 className="ts-name">Sarah Collins</h2>
                                <p className="ts-role">Product Manager · TechCorp Inc.</p>
                                <p className="ts-location">New York, NY · Joined March 2022</p>
                            </div>
                        </div>
                        <p className="ts-bio">
                            Passionate about building products users love. I work at the intersection of data, design,
                            and engineering to deliver roadmaps that move the needle.
                        </p>
                        <div className="ts-stats">
                            <div className="ts-stat">
                                <span className="ts-stat-val">24</span>
                                <span className="ts-stat-lbl">Projects</span>
                            </div>
                            <div className="ts-stat">
                                <span className="ts-stat-val">8</span>
                                <span className="ts-stat-lbl">Teams</span>
                            </div>
                            <div className="ts-stat">
                                <span className="ts-stat-val">156</span>
                                <span className="ts-stat-lbl">Tasks Done</span>
                            </div>
                        </div>
                        <div className="ts-skills">
                            {skills.map((s) => (
                                <span key={s} className="ts-chip">
                                    {s}
                                </span>
                            ))}
                        </div>
                        <div className="ts-section">
                            <h4 className="ts-section-title">Upcoming</h4>
                            {upcoming.map((item) => (
                                <div key={item.title} className="ts-upcoming">
                                    <div
                                        className="ts-upcoming-dot"
                                        style={{ background: upcomingColor[item.type] }}
                                    />
                                    <div className="ts-upcoming-info">
                                        <span className="ts-upcoming-title">{item.title}</span>
                                        <span className="ts-upcoming-date">{item.date}</span>
                                    </div>
                                    <span
                                        className="ts-badge"
                                        style={{
                                            background: upcomingColor[item.type] + '22',
                                            color: upcomingColor[item.type]
                                        }}
                                    >
                                        {item.type}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </TabStripTab>

                <TabStripTab title="Projects">
                    <div className="ts-panel">
                        {projects.map((p) => (
                            <div key={p.name} className="ts-project">
                                <div className="ts-project-meta">
                                    <span className="ts-project-name">{p.name}</span>
                                    <span
                                        className="ts-badge"
                                        style={{
                                            background: statusColor[p.status] + '22',
                                            color: statusColor[p.status]
                                        }}
                                    >
                                        {p.status}
                                    </span>
                                </div>
                                <div className="ts-bar-row">
                                    <div className="ts-bar-track">
                                        <div
                                            className="ts-bar-fill"
                                            style={{ width: `${p.progress}%`, background: statusColor[p.status] }}
                                        />
                                    </div>
                                    <span className="ts-pct">{p.progress}%</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabStripTab>

                <TabStripTab title="Activity">
                    <div className="ts-panel">
                        {activityFeed.map((item) => (
                            <div key={item.id} className="ts-activity">
                                <span className="ts-act-icon">
                                    <SvgIcon icon={item.icon} />
                                </span>
                                <div>
                                    <p className="ts-act-text">{item.text}</p>
                                    <p className="ts-act-time">{item.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabStripTab>

                <TabStripTab title="Settings">
                    <div className="ts-panel">
                        {[
                            { label: 'Full Name', value: 'Sarah Collins' },
                            { label: 'Email', value: 'sarah@techcorp.com' },
                            { label: 'Department', value: 'Product Management' },
                            { label: 'Location', value: 'New York, NY' }
                        ].map(({ label, value }) => (
                            <div key={label} className="ts-field">
                                <label className="ts-field-label">{label}</label>
                                <input className="ts-input" defaultValue={value} />
                            </div>
                        ))}
                        <button className="ts-save-btn">Save Changes</button>
                    </div>
                </TabStripTab>
            </TabStrip>
        </div>
    );
};

export default App;
