import * as React from 'react';
import { Citation } from '@progress/kendo-react-conversational-ui';
import type { CitationSource } from '@progress/kendo-react-conversational-ui';

const sources: CitationSource[] = [
    {
        title: 'Advances in Natural Language Processing',
        url: 'https://example.com/nlp-advances',
        description:
            'A comprehensive study on the recent developments in natural language processing technologies and their applications.'
    },
    {
        title: 'Designing Inline Citations for AI',
        url: 'https://uxdesign.cc/inline-citations',
        description:
            'Best practices for embedding source references directly within AI-generated responses to improve trust and verifiability.'
    },
    {
        title: 'Retrieval-Augmented Generation: A Survey',
        url: 'https://arxiv.org/abs/2312.10997',
        description:
            'Survey of RAG architectures and how citation grounding mechanisms enhance factual accuracy in large language model outputs.'
    }
];

const App = () => {
    return (
        <p style={{ maxWidth: 700 }}>
            An inline citation component is an interactive UI element that embeds clickable reference badges, like or
            source names, directly into text. When users hover over or click these badges, the component displays full
            source details, such as titles, domains, URLs{' '}
            <Citation label="some-link.com" sources={sources} additionalCount />
        </p>
    );
};

export default App;
