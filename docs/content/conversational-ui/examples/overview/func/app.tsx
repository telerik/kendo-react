import * as React from 'react';
import { SegmentedControl } from '@progress/kendo-react-buttons';
import {
    AIPromptOutputInterface,
    ChatSendMessageEvent,
    CommandItemInterface,
    Message,
    User,
    outputViewDefaults,
    promptViewDefaults
} from '@progress/kendo-react-conversational-ui';
import { commentIcon, sparklesIcon } from '@progress/kendo-svg-icons';

import AIPrompt from './AIPrompt';
import Chat, { getChatReply } from './Chat';
import './styles.css';

type TabValue = 'assistant' | 'planner';

const user: User = { id: 'traveler' };
const bot: User = { id: 'bot', name: 'Travel Assistant' };

const getTripYear = (): number => {
    const now = new Date();
    const cutoff = new Date(now.getFullYear(), 9, 20);

    return now >= cutoff ? now.getFullYear() + 1 : now.getFullYear();
};

let messageId = 0;
const nextMessageId = (): number => {
    messageId += 1;
    return messageId;
};

const initialMessages: Message[] = [
    {
        id: nextMessageId(),
        author: bot,
        text: "Hi! I'm Travel Assistant, your AI travel assistant ✈️ I see you're planning a 10-day trip to Tokyo and Kyoto — great choice! When are you planning to travel?",
        timestamp: new Date('2026-05-07T09:00:00'),
        suggestedActions: [
            { type: 'reply', value: 'Late October, around the 20th' },
            { type: 'reply', value: 'First two weeks of November' },
            { type: 'reply', value: 'Not sure yet, still planning' }
        ]
    },
    {
        id: nextMessageId(),
        author: user,
        text: 'Late October, around the 20th',
        timestamp: new Date('2026-05-07T09:01:00')
    },
    {
        id: nextMessageId(),
        author: bot,
        text: "Late October is perfect — you'll catch the very beginning of autumn foliage in Kyoto! Temperatures will be 12–18°C, so pack a light jacket. A few things to know:\n\n🍁 Arashiyama bamboo grove turns golden around Oct 25\n🏯 Fushimi Inari is beautiful at dusk in autumn\n🍜 Ramen season is in full swing\n\nHow many people are travelling?",
        timestamp: new Date('2026-05-07T09:01:30'),
        suggestedActions: [
            { type: 'reply', value: 'Just me — solo trip' },
            { type: 'reply', value: 'Two of us, couple trip' },
            { type: 'reply', value: 'Small group of 4' }
        ]
    },
    {
        id: nextMessageId(),
        author: user,
        text: 'Two of us, couple trip',
        timestamp: new Date('2026-05-07T09:02:00')
    },
    {
        id: nextMessageId(),
        author: bot,
        text: "Wonderful! Tokyo and Kyoto are incredibly romantic in autumn 🍂 I'd suggest splitting your 10 days roughly as 5 nights Tokyo → 5 nights Kyoto. You can take the Shinkansen between them in just 2h 15min.\n\nWould you like me to suggest a daily breakdown, or would you prefer to start with must-see highlights for couples?",
        timestamp: new Date('2026-05-07T09:02:30'),
        suggestedActions: [
            { type: 'reply', value: 'Give me a full day-by-day plan' },
            { type: 'reply', value: 'Show me must-see highlights first' },
            { type: 'reply', value: 'What are the best neighbourhoods to stay in?' }
        ]
    }
];

const toHtml = (text: string): string => {
    return text
        .split('\n\n')
        .map((paragraph) => `<p>${paragraph.replace(/\n/g, '<br>')}</p>`)
        .join('');
};

const generateItinerary = (prompt: string): string => {
    const lowerPrompt = prompt.toLowerCase();

    if (lowerPrompt.includes('10-day') || lowerPrompt.includes('itinerary') || lowerPrompt.includes('schedule')) {
        return "10-Day Tokyo & Kyoto Itinerary — Late October\n\nDAY 1 (Tokyo) — Arrival & Shinjuku\n18:00 – Check in, freshen up\n19:30 – Omoide Yokocho (Memory Lane) for yakitori & sake\n\nDAY 2 (Tokyo) — Shibuya & Harajuku\n09:00 – Meiji Shrine morning walk\n11:00 – Takeshita Street, Omotesando browsing\n14:00 – Shibuya Sky observation deck\n19:00 – Dinner in Daikanyama\n\nDAY 3 (Tokyo) — Asakusa & Ueno\n08:00 – Senso-ji temple at opening\n10:00 – Nakamise shopping street\n13:00 – Ueno Park autumn foliage picnic\n15:00 – Tokyo National Museum\n\nDAY 4 (Tokyo) — TeamLab & Odaiba\n10:00 – TeamLab Planets (book in advance!)\n14:00 – Odaiba waterfront, Rainbow Bridge views\n19:00 – Dinner at DiverCity\n\nDAY 5 (Tokyo) — Tsukiji & Nikko Day Trip\n06:00 – Tsukiji outer market breakfast (best sushi of your life)\n09:30 – Shinkansen to Nikko\n10:30 – Tosho-gu shrine & Kegon Falls\n17:00 – Return to Tokyo\n\nDAY 6 — Shinkansen to Kyoto & Gion\n10:00 – Hikari Shinkansen (2h 40min)\n13:00 – Check in to ryokan in Gion\n18:00 – Gion evening walk, spot geisha\n\nDAY 7 (Kyoto) — Arashiyama\n07:30 – Bamboo grove at dawn\n09:00 – Tenryu-ji garden\n11:00 – Monkey Park\n14:00 – Hozu River boat ride\n\nDAY 8 (Kyoto) — Fushimi Inari & Nishiki\n06:00 – Fushimi Inari sunrise hike\n11:00 – Nishiki Market food tour\n14:00 – Kinkaku-ji (Golden Pavilion)\n\nDAY 9 (Kyoto) — Nara Day Trip\n08:30 – Train to Nara (45min)\n09:30 – Todai-ji & deer park\n12:00 – Lunch in Naramachi\n15:00 – Return to Kyoto, tea ceremony\n\nDAY 10 (Kyoto) — Philosopher's Path & Departure\n08:00 – Philosopher's Path morning walk\n10:00 – Nanzen-ji temple\n12:00 – Last ramen lunch\n14:00 – Head to airport";
    }

    if (lowerPrompt.includes('restaurant') || lowerPrompt.includes('food') || lowerPrompt.includes('foodie')) {
        return 'Top 10 Tokyo Restaurants for Foodies:\n\n1. Sukiyabashi Jiro (Honten) — Legendary sushi, book months ahead\n2. Ichiran Ramen Shibuya — Solo ramen booths, iconic experience\n3. Narisawa — Japanese nouvelle cuisine, 2 Michelin stars\n4. Tsukiji Sushimasa — Fresh sushi right at the outer market\n5. Kikanbo — Intensely spiced miso ramen in Akihabara\n6. Gonpachi Nishiazabu — Izakaya inspiration for the Kill Bill scene\n7. Afuri — Yuzu shio ramen, light and citrusy\n8. Sushi Saito — If you can get a reservation, the best in Tokyo\n9. Torafuku — Creative Japanese-Chinese fusion in Akasaka\n10. Uobei Shibuya — Conveyor belt sushi with tablet ordering\n\nBudget tip: Most Michelin-star lunches cost half the dinner price.';
    }

    if (lowerPrompt.includes('packing') || lowerPrompt.includes('pack')) {
        return "Japan Packing List — Late October\n\nClothing:\n✓ Light down jacket or wool coat (12–18°C days, 8°C evenings)\n✓ Comfortable walking shoes (you'll walk 15,000+ steps/day)\n✓ Slip-on shoes for temples (removed constantly)\n✓ Layers — mornings and evenings are cool\n✓ Smart casual outfit for nicer restaurants\n\nDocuments & Money:\n✓ Passport + travel insurance printout\n✓ Japan Rail Pass (activate at airport)\n✓ Yen cash (¥30,000 per person minimum — many places cash only)\n✓ Suica card for city transit\n\nTech & Essentials:\n✓ Pocket WiFi or SIM card (rent at Narita/Haneda)\n✓ Universal power adapter (Japan uses Type A)\n✓ Portable battery pack (long days out)\n✓ Google Translate with Japanese offline pack\n\nNice to have:\n✓ Small day bag for temple visits\n✓ Packable umbrella (autumn showers are common)\n✓ Hand towel (not always provided in public bathrooms)";
    }

    if (lowerPrompt.includes('nara') || lowerPrompt.includes('day trip')) {
        return 'Nara Day Trip from Kyoto — Full Plan\n\n08:30 – Depart Kyoto Station (Kintetsu Nara line, 45min, ¥1,150)\n09:30 – Nara Park: feed the bowing deer\n10:30 – Todai-ji Great Buddha Hall (largest wooden building in world)\n11:30 – Kasuga-taisha Grand Shrine & lantern-lined paths\n12:30 – Lunch in Naramachi (old merchant district)\n  Recommended: Mizuya Chaya for kaiseki bento\n14:00 – Isuien Garden for tranquil autumn foliage\n15:00 – Browse lacquerware and deer-themed souvenirs\n16:00 – Return to Kyoto\n\nTips:\n• Deer bow back if you bow first — bring deer crackers (¥200)\n• Avoid feeding deer by hand — they can bite\n• Combine with a sake tasting at Harushika Brewery nearby';
    }

    if (lowerPrompt.includes('relaxed') || lowerPrompt.includes('fewer')) {
        return "Relaxed 10-Day Itinerary — Slower Pace\n\nTokyo (Days 1–5, max 2 activities per day):\nDay 1 – Arrive, gentle Shinjuku stroll, early dinner\nDay 2 – Meiji Shrine morning, Harajuku afternoon only\nDay 3 – Senso-ji at opening, rest afternoon in Ueno\nDay 4 – TeamLab Planets only (half-day), café afternoon\nDay 5 – Tsukiji breakfast, free afternoon for shopping\n\nKyoto (Days 6–10):\nDay 6 – Shinkansen, afternoon rest, evening Gion walk\nDay 7 – Arashiyama bamboo + Tenryu-ji only\nDay 8 – Fushimi Inari morning (2h), afternoon free\nDay 9 – Nara day trip (relaxed)\nDay 10 – Philosopher's Path, afternoon tea ceremony";
    }

    if (lowerPrompt.includes('budget')) {
        return "Budget Japan Itinerary Tips:\n\nAccommodation:\n• Capsule hotel in Tokyo: ¥3,000–5,000/night\n• Guesthouse in Kyoto: ¥4,000–7,000/night\n• Skip ryokan, or do one night as a splurge\n\nFood (¥2,500–4,000/day per person):\n• Breakfast: konbini onigiri + coffee (¥300)\n• Lunch: ramen or soba shops (¥800–1,200)\n• Dinner: standing sushi bars or izakaya happy hour\n\nTransport:\n• 7-day JR Pass saves money on Shinkansen\n• Suica card for all city transit\n• Walk or cycle in Kyoto — flat city, rentals ¥1,000/day\n\nFree attractions:\n• All major shrines & temple grounds (interiors cost ¥500–1,000)\n• Shibuya Crossing, Harajuku, Akihabara, Nishiki Market\n• Ueno Park, Philosopher's Path, Gion evening walk";
    }

    if (lowerPrompt.includes('save') || lowerPrompt.includes('folder')) {
        return 'Itinerary saved to "Japan Oct 2026" trip folder.\n\nYour folder now contains:\n• 10-Day Tokyo & Kyoto overview\n• Restaurant shortlist (Tokyo)\n• Packing checklist\n\nShare link: trips.example.com/japan-oct-2026 (view-only)';
    }

    if (lowerPrompt.includes('share')) {
        return "Share link copied to clipboard:\nhttps://trips.example.com/japan-oct-2026?share=true\n\nYour travel buddy can view the full itinerary, add comments, and suggest changes. They won't be able to edit without an account.";
    }

    if (lowerPrompt.includes('accessibility')) {
        return 'Japan Accessibility Notes:\n\n♿ Generally good accessibility in cities:\n• Tokyo Metro has elevators at most major stations\n• Shinkansen has wheelchair spaces (reserve in advance)\n• Most convenience stores and malls are fully accessible\n\n⚠️ Challenges:\n• Many historic temples have uneven stone paths and stairs\n• Traditional ryokans use floor-level futons\n• Some narrow Kyoto side streets have cobblestones\n\n✅ Recommended accessible spots:\n• TeamLab Planets — fully accessible\n• Odaiba waterfront — flat and wide\n• Nara Park — mostly flat grass\n• Kyoto Botanical Garden — paved paths throughout';
    }

    return `Generated plan for: "${prompt}"\n\nBased on your 10-day Tokyo & Kyoto trip in late October, here is a tailored suggestion. Use the Chat assistant on the left to ask follow-up questions or request specific recommendations for restaurants, transport, or day trips.`;
};

const App = () => {
    const [selectedTab, setSelectedTab] = React.useState<TabValue>('assistant');
    const [messages, setMessages] = React.useState<Message[]>(initialMessages);
    const [activeView, setActiveView] = React.useState<string>(promptViewDefaults.name);
    const [promptOutputs, setPromptOutputs] = React.useState<AIPromptOutputInterface[]>([]);
    const [outputCounter, setOutputCounter] = React.useState<number>(0);

    const tripYear = React.useMemo(() => getTripYear(), []);

    const tabItems = React.useMemo(
        () => [
            { value: 'assistant', text: 'Travel Assistant', svgIcon: commentIcon },
            { value: 'planner', text: 'Itinerary Planner', svgIcon: sparklesIcon }
        ],
        []
    );

    const handleSendMessage = (event: ChatSendMessageEvent): void => {
        const text = event.message.text?.trim();

        if (!text) {
            return;
        }

        const userMessage: Message = {
            ...event.message,
            id: nextMessageId(),
            author: user,
            text,
            timestamp: new Date()
        };

        setMessages((current) => [...current, userMessage]);

        const reply = getChatReply(text);
        window.setTimeout(() => {
            setMessages((current) => [
                ...current,
                {
                    id: nextMessageId(),
                    author: bot,
                    text: reply.text,
                    timestamp: new Date(),
                    suggestedActions: reply.suggestedActions
                }
            ]);
        }, 800);
    };

    const handlePromptRequest = (prompt?: string, output?: AIPromptOutputInterface): void => {
        if (!prompt) {
            return;
        }

        const nextOutputId = outputCounter + 1;
        const generated = output?.isRetry
            ? generateItinerary(`${prompt} (alternative version)`)
            : generateItinerary(prompt);

        setOutputCounter(nextOutputId);
        setPromptOutputs((current) => [
            {
                id: nextOutputId,
                title: output?.isRetry ? 'Regenerated' : 'Generated Itinerary',
                prompt,
                responseContent: toHtml(generated)
            },
            ...current
        ]);
        setActiveView(outputViewDefaults.name);
    };

    const handleCommandExecute = (command: CommandItemInterface): void => {
        if (!command.text) {
            return;
        }

        const nextOutputId = outputCounter + 1;
        setOutputCounter(nextOutputId);
        setPromptOutputs((current) => [
            {
                id: nextOutputId,
                title: command.text,
                prompt: command.text,
                responseContent: toHtml(generateItinerary(command.text))
            },
            ...current
        ]);
        setActiveView(outputViewDefaults.name);
    };

    return (
        <div className="demo-container">
            <div className="app-shell">
                <div className="app-header">
                    <div className="app-header__brand">
                        <div className="app-header__avatar">✈️</div>
                        <div>
                            <div className="app-header__title">Japan Trip Planner</div>
                            <div className="app-header__meta">Tokyo & Kyoto · Oct 20–30, {tripYear} · 2 travelers</div>
                        </div>
                    </div>
                </div>

                <div className="app-tabs">
                    <SegmentedControl
                        items={tabItems}
                        value={selectedTab}
                        onChange={(value) => setSelectedTab(value as TabValue)}
                        layoutMode="stretch"
                    />
                </div>

                <div className="app-panel">
                    {selectedTab === 'assistant' ? (
                        <Chat messages={messages} authorId={user.id as string} onSendMessage={handleSendMessage} />
                    ) : (
                        <AIPrompt
                            activeView={activeView}
                            outputs={promptOutputs}
                            onActiveViewChange={setActiveView}
                            onPromptRequest={handlePromptRequest}
                            onCommandExecute={handleCommandExecute}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
