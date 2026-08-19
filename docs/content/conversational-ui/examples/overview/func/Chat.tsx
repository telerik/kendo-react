import * as React from 'react';
import { Chat, ChatSendMessageEvent, Message } from '@progress/kendo-react-conversational-ui';

interface OverviewChatProps {
    messages: Message[];
    authorId: string;
    onSendMessage: (event: ChatSendMessageEvent) => void;
}

export interface ChatReply {
    text: string;
    suggestedActions?: Array<{ type: 'reply'; value: string }>;
}

const DEMO_HINT: ChatReply = {
    text: 'This is a demo with simulated responses. Select one of the suggested replies below to explore the conversation.',
    suggestedActions: [
        { type: 'reply', value: 'Give me a full day-by-day plan' },
        { type: 'reply', value: 'Show me must-see highlights first' },
        { type: 'reply', value: 'What are the best neighbourhoods to stay in?' },
        { type: 'reply', value: 'Any tips for the Shinkansen booking?' }
    ]
};

const REPLIES: Record<string, ChatReply> = {
    'Late October, around the 20th': {
        text: "Late October is perfect — you'll catch the very beginning of autumn foliage in Kyoto! Temperatures will be 12–18°C, so pack a light jacket.\n\n🍁 Arashiyama bamboo grove turns golden around Oct 25\n🏯 Fushimi Inari is beautiful at dusk in autumn\n🍜 Ramen season is in full swing\n\nHow many people are travelling?",
        suggestedActions: [
            { type: 'reply', value: 'Just me — solo trip' },
            { type: 'reply', value: 'Two of us, couple trip' },
            { type: 'reply', value: 'Small group of 4' }
        ]
    },
    'First two weeks of November': {
        text: "Early November is stunning — peak autumn foliage in both Tokyo and Kyoto! Expect 10–16°C, with crisp clear days perfect for temple walks.\n\n🍂 Arashiyama and Philosopher's Path will be at their peak\n🎑 Smaller crowds than late October\n🧥 Bring a warm layer for evenings\n\nHow many people are travelling?",
        suggestedActions: [
            { type: 'reply', value: 'Just me — solo trip' },
            { type: 'reply', value: 'Two of us, couple trip' },
            { type: 'reply', value: 'Small group of 4' }
        ]
    },
    'Not sure yet, still planning': {
        text: "No problem! Late October to mid-November is generally the best window for Japan — you'll get autumn foliage, cooler temperatures, and fewer typhoons than September.\n\nWhenever you decide, I can help you build a full itinerary. How many people are travelling?",
        suggestedActions: [
            { type: 'reply', value: 'Just me — solo trip' },
            { type: 'reply', value: 'Two of us, couple trip' },
            { type: 'reply', value: 'Small group of 4' }
        ]
    },
    'Just me — solo trip': {
        text: "Solo travel in Japan is wonderful — the country is extremely safe, easy to navigate, and solo travelers are very welcome everywhere.\n\nFor a solo 10-day trip I'd suggest:\n• Stay in a mix of hostels and capsule hotels for the social experience\n• Eat at the counter of ramen and sushi bars\n• Join a free walking tour in both Tokyo and Kyoto\n\nWould you like me to suggest a daily breakdown or start with must-see highlights?",
        suggestedActions: [
            { type: 'reply', value: 'Give me a full day-by-day plan' },
            { type: 'reply', value: 'Show me must-see highlights first' }
        ]
    },
    'Two of us, couple trip': {
        text: "Wonderful! Tokyo and Kyoto are incredibly romantic in autumn 🍂 I'd suggest splitting your 10 days as 5 nights Tokyo → 5 nights Kyoto. The Shinkansen connects them in just 2h 15min.\n\nWould you like me to suggest a daily breakdown, or start with must-see highlights for couples?",
        suggestedActions: [
            { type: 'reply', value: 'Give me a full day-by-day plan' },
            { type: 'reply', value: 'Show me must-see highlights first' },
            { type: 'reply', value: 'What are the best neighbourhoods to stay in?' }
        ]
    },
    'Small group of 4': {
        text: 'A group of 4 is a great size for Japan! A few tips:\n\n🚄 Book Shinkansen seats together as soon as you have dates — groups fill fast\n🍣 Many omakase restaurants only take groups of 2, so check ahead\n🏨 Consider an Airbnb in Kyoto for the full traditional house experience\n\nWould you like me to suggest a daily breakdown or start with must-see highlights?',
        suggestedActions: [
            { type: 'reply', value: 'Give me a full day-by-day plan' },
            { type: 'reply', value: 'Show me must-see highlights first' }
        ]
    },
    'Give me a full day-by-day plan': {
        text: "Here's your 10-day structure:\n\nTokyo (Days 1–5):\n• Day 1 – Arrive, Shinjuku & Omoide Yokocho\n• Day 2 – Shibuya, Harajuku, Meiji Shrine\n• Day 3 – Asakusa, Senso-ji, Ueno Park\n• Day 4 – TeamLab Planets + Odaiba waterfront\n• Day 5 – Tsukiji market breakfast + Nikko day trip\n\nKyoto (Days 6–10):\n• Day 6 – Shinkansen + Gion evening walk\n• Day 7 – Arashiyama: bamboo, monkey park, boat ride\n• Day 8 – Fushimi Inari at sunrise, Nishiki Market\n• Day 9 – Nara day trip: deer park, Todai-ji\n• Day 10 – Philosopher's Path, last-minute shopping\n\nUse the Itinerary Builder on the right to generate a detailed version with timings!",
        suggestedActions: [
            { type: 'reply', value: 'Which day is best for Arashiyama?' },
            { type: 'reply', value: 'Any tips for the Shinkansen booking?' },
            { type: 'reply', value: 'What are the best neighbourhoods to stay in?' }
        ]
    },
    'Show me must-see highlights first': {
        text: "Top highlights for couples in autumn:\n\n🗼 Shibuya Crossing at night — iconic and electric\n🌸 Philosopher's Path — serene Kyoto canal walk\n🍣 Tsukiji outer market breakfast — unforgettable sushi\n🏯 Fushimi Inari at dawn — almost no crowds\n🛁 Ryokan stay in Gion — onsen, kaiseki dinner, tatami room\n🎑 Arashiyama bamboo grove — magical in morning light",
        suggestedActions: [
            { type: 'reply', value: 'What is a ryokan stay like?' },
            { type: 'reply', value: 'Give me a full day-by-day plan' }
        ]
    },
    'What are the best neighbourhoods to stay in?': {
        text: "Best neighbourhoods for a couple trip:\n\nTokyo:\n• Asakusa — traditional atmosphere, near Senso-ji\n• Shinjuku — best transport links, great nightlife\n• Shibuya — trendy, central, walkable\n\nKyoto:\n• Gion — most atmospheric, geisha district\n• Higashiyama — walking distance to all major temples\n• Fushimi — quieter, local feel, near Inari shrine\n\nI'd recommend Asakusa in Tokyo and Gion in Kyoto for the most memorable experience.",
        suggestedActions: [
            { type: 'reply', value: 'What is a ryokan stay like?' },
            { type: 'reply', value: 'Give me a full day-by-day plan' }
        ]
    },
    'Which day is best for Arashiyama?': {
        text: 'Go early — arrive at the bamboo grove by 7:30am to beat the crowds.\n\nFull Arashiyama day:\n• 7:30am – Bamboo grove (near-empty at this hour)\n• 9:00am – Tenryu-ji temple and garden\n• 11:00am – Monkey Park Iwatayama (views over Kyoto)\n• 12:30pm – Lunch at a riverside restaurant\n• 2:00pm – Boat ride on the Hozu River\n• 4:00pm – Stroll back through Sagano village',
        suggestedActions: [
            { type: 'reply', value: 'Give me a full day-by-day plan' },
            { type: 'reply', value: 'Any tips for the Shinkansen booking?' }
        ]
    },
    'Any tips for the Shinkansen booking?': {
        text: 'Shinkansen tips:\n\n🎫 Buy a 7-day Japan Rail Pass before you leave — covers all Shinkansen\n⏱ Tokyo → Kyoto: 2h 15min on Nozomi (not JR Pass) or 2h 40min on Hikari (JR Pass covered)\n💼 Reserve luggage space online if you have large bags\n🍱 Pick up an ekiben (station bento box) on the platform — a classic experience',
        suggestedActions: [
            { type: 'reply', value: 'Give me a full day-by-day plan' },
            { type: 'reply', value: 'What are the best neighbourhoods to stay in?' }
        ]
    },
    'What is a ryokan stay like?': {
        text: 'A ryokan is a traditional Japanese inn — one of the most unique experiences in Japan:\n\n🛏 Sleep on a futon on tatami floors\n♨️ Private or communal onsen (hot spring baths)\n🍱 Kaiseki dinner served in your room — 7–12 courses\n👘 Wear yukata robes around the inn\n\nRecommended in Kyoto: Gion Hatanaka or Tawaraya (book 3–6 months ahead). Budget ¥30,000–60,000 per room per night, including dinner & breakfast.',
        suggestedActions: [
            { type: 'reply', value: 'Give me a full day-by-day plan' },
            { type: 'reply', value: 'Any tips for the Shinkansen booking?' }
        ]
    }
};

export const getChatReply = (message: string): ChatReply => {
    return REPLIES[message] ?? DEMO_HINT;
};

const OverviewChat = ({ messages, authorId, onSendMessage }: OverviewChatProps) => {
    return (
        <Chat
            className="chat"
            messages={messages}
            authorId={authorId}
            onSendMessage={onSendMessage}
            placeholder="Type your message..."
        />
    );
};

export default OverviewChat;
