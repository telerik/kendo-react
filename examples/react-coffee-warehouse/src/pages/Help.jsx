import React from 'react';
import { ExpansionPanel, ExpansionPanelContent } from '@progress/kendo-react-layout';
import { Input } from '@progress/kendo-react-inputs';
import { useLocalization } from '@progress/kendo-react-intl';
import { PageHeader } from '../components/PageHeader';

const Help = () => {
    const [expanded, setExpanded] = React.useState(0);
    const localizationService = useLocalization();
    return (
        <main className="main-content help-page">
            <PageHeader
                title={localizationService.toLanguageString('custom.helpTitle')}
                description={localizationService.toLanguageString('custom.helpDescription')}
            />
            <section className="help-content">
                <Input
                    aria-label={localizationService.toLanguageString('custom.searchHelpTopics')}
                    placeholder={localizationService.toLanguageString('custom.searchHelpTopicsPlaceholder')}
                />
                {[
                    ['helpPurchaseQuestion', 'helpPurchaseAnswer'],
                    ['helpLowStockQuestion', 'helpLowStockAnswer'],
                    ['helpScheduleQuestion', 'helpScheduleAnswer']
                ].map(([title, content], index) => (
                    <ExpansionPanel key={title} title={localizationService.toLanguageString(`custom.${title}`)} expanded={expanded === index} onAction={() => setExpanded(expanded === index ? -1 : index)}>
                        <ExpansionPanelContent><p>{localizationService.toLanguageString(`custom.${content}`)}</p></ExpansionPanelContent>
                    </ExpansionPanel>
                ))}
            </section>
        </main>
    );
};

export default Help;
