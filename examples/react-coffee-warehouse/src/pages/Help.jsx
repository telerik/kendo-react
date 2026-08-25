import React from 'react';
import { ExpansionPanel, ExpansionPanelContent } from '@progress/kendo-react-layout';
import { Input } from '@progress/kendo-react-inputs';
import { PageHeader } from '../components/PageHeader';

const Help = () => {
    const [expanded, setExpanded] = React.useState(0);
    return (
        <main className="main-content help-page">
            <PageHeader title="Help and support" description="Find guidance for inventory, fulfillment, and team scheduling." />
            <section className="help-content">
                <Input aria-label="Search help topics" placeholder="Search help topics" />
                {[
                    ['How do I create a purchase order?', 'From Inventory, select Create purchase order after reviewing the affected stock item and supplier.'],
                    ['Why is an item marked low stock?', 'Low stock indicates that available quantity has reached the reorder threshold after reservations are applied.'],
                    ['How do I update a team schedule?', 'Open Planning, select the team member, then create or adjust an assignment in the scheduler.']
                ].map(([title, content], index) => (
                    <ExpansionPanel key={title} title={title} expanded={expanded === index} onAction={() => setExpanded(expanded === index ? -1 : index)}>
                        <ExpansionPanelContent><p>{content}</p></ExpansionPanelContent>
                    </ExpansionPanel>
                ))}
            </section>
        </main>
    );
};

export default Help;
