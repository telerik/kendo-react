import { Message, User } from '@progress/kendo-react-conversational-ui';

export const JANE: User = { id: 'jane', name: 'Jane', avatarUrl: 'assets/conversational-ui/chat/avatar.png' };
export const JAMIE: User = { id: 'jamie', name: 'Jamie', avatarUrl: 'assets/conversational-ui/chat/avatar.png' };

export interface FetchPageResult {
    messages: Message[];
    startIndex: number;
    endIndex: number;
    total: number;
    pinnedMessages: Message[];
    repliedToMessages: Message[];
}

const BASE_TIME = new Date('2026-04-27T18:00:00Z').getTime();

const ALL_MESSAGES: Message[] = [
    { id: 1,   author: JANE,  text: 'I went through the Kendo Chat endless scrolling documentation today.', timestamp: new Date(BASE_TIME + 0 * 15000) },
    { id: 2,   author: JAMIE, text: "That's the feature that loads messages in chunks as you scroll, right?", timestamp: new Date(BASE_TIME + 1 * 15000) },
    { id: 3,   author: JANE,  text: 'Exactly. Instead of rendering everything, it only loads pages on demand.', timestamp: new Date(BASE_TIME + 2 * 15000) },
    { id: 4,   author: JAMIE, text: "That's huge for performance in long conversations.", timestamp: new Date(BASE_TIME + 3 * 15000) },
    { id: 5,   author: JANE,  text: 'Especially where rendering costs add up quickly.', timestamp: new Date(BASE_TIME + 4 * 15000), isPinned: true },
    { id: 6,   author: JAMIE, text: 'I like that it defaults to showing only the most recent messages.', timestamp: new Date(BASE_TIME + 5 * 15000) },
    { id: 7,   author: JANE,  text: 'And then pulls older ones when you scroll upward.', timestamp: new Date(BASE_TIME + 6 * 15000) },
    { id: 8,   author: JAMIE, text: 'That matches user expectations from apps like Teams.', timestamp: new Date(BASE_TIME + 7 * 15000) },
    { id: 9,   author: JANE,  text: 'The scroll position preservation impressed me the most.', timestamp: new Date(BASE_TIME + 8 * 15000) },
    { id: 10,  author: JAMIE, text: 'Yeah, no jumping when new messages appear at the top.', timestamp: new Date(BASE_TIME + 9 * 15000), replyToId: 5 },
    { id: 11,  author: JANE,  text: 'The setup seems simple: just switch the scroll mode.', timestamp: new Date(BASE_TIME + 10 * 15000) },
    { id: 12,  author: JAMIE, text: 'And optionally tweak the page size.', timestamp: new Date(BASE_TIME + 11 * 15000) },
    { id: 13,  author: JANE,  text: 'Twenty messages per batch feels reasonable.', timestamp: new Date(BASE_TIME + 12 * 15000) },
    { id: 14,  author: JAMIE, text: 'You could increase it for faster scrolling.', timestamp: new Date(BASE_TIME + 13 * 15000) },
    { id: 15,  author: JANE,  text: 'Or reduce it for lower memory usage.', timestamp: new Date(BASE_TIME + 14 * 15000), isPinned: true },
    { id: 16,  author: JAMIE, text: 'I also noticed there are two different modes.', timestamp: new Date(BASE_TIME + 15 * 15000) },
    { id: 17,  author: JANE,  text: 'Client-side and server-side loading.', timestamp: new Date(BASE_TIME + 16 * 15000) },
    { id: 18,  author: JAMIE, text: 'Client-side is easiest since the Chat handles paging.', timestamp: new Date(BASE_TIME + 17 * 15000) },
    { id: 19,  author: JANE,  text: 'But it assumes the whole dataset is already loaded.', timestamp: new Date(BASE_TIME + 18 * 15000) },
    { id: 20,  author: JAMIE, text: "Which isn't great for enterprise-scale chat logs.", timestamp: new Date(BASE_TIME + 19 * 15000), replyToId: 5 },
    { id: 21,  author: JANE,  text: "That's where server-side endless scrolling shines.", timestamp: new Date(BASE_TIME + 20 * 15000) },
    { id: 22,  author: JAMIE, text: 'Right, you only fetch slices of the data.', timestamp: new Date(BASE_TIME + 21 * 15000) },
    { id: 23,  author: JANE,  text: 'The component asks for more when needed.', timestamp: new Date(BASE_TIME + 22 * 15000) },
    { id: 24,  author: JAMIE, text: 'Through that load-more event.', timestamp: new Date(BASE_TIME + 23 * 15000) },
    { id: 25,  author: JANE,  text: 'Exactly. You respond with older messages.', timestamp: new Date(BASE_TIME + 24 * 15000) },
    { id: 26,  author: JAMIE, text: 'I like that it keeps track of indices internally.', timestamp: new Date(BASE_TIME + 25 * 15000) },
    { id: 27,  author: JANE,  text: 'It helps the component know if more history exists.', timestamp: new Date(BASE_TIME + 26 * 15000) },
    { id: 28,  author: JAMIE, text: 'And when to stop requesting data.', timestamp: new Date(BASE_TIME + 27 * 15000) },
    { id: 29,  author: JANE,  text: 'The demo shows it stopping cleanly at the beginning.', timestamp: new Date(BASE_TIME + 28 * 15000) },
    { id: 30,  author: JAMIE, text: 'No empty gaps or confusing states.', timestamp: new Date(BASE_TIME + 29 * 15000), replyToId: 15 },
    { id: 31,  author: JANE,  text: 'From a UX perspective, endless scrolling feels invisible.', timestamp: new Date(BASE_TIME + 30 * 15000) },
    { id: 32,  author: JAMIE, text: "Which is ideal—users shouldn't think about data loading.", timestamp: new Date(BASE_TIME + 31 * 15000) },
    { id: 33,  author: JANE,  text: 'They just scroll naturally.', timestamp: new Date(BASE_TIME + 32 * 15000) },
    { id: 34,  author: JAMIE, text: 'And the chat responds smoothly.', timestamp: new Date(BASE_TIME + 33 * 15000) },
    { id: 35,  author: JANE,  text: 'I also appreciate that sending new messages still works normally.', timestamp: new Date(BASE_TIME + 34 * 15000), isPinned: true },
    { id: 36,  author: JAMIE, text: "Yeah, history loading doesn't block real-time interaction.", timestamp: new Date(BASE_TIME + 35 * 15000) },
    { id: 37,  author: JANE,  text: 'That separation is important.', timestamp: new Date(BASE_TIME + 36 * 15000) },
    { id: 38,  author: JAMIE, text: 'Otherwise chats feel sluggish.', timestamp: new Date(BASE_TIME + 37 * 15000) },
    { id: 39,  author: JANE,  text: 'Performance-wise, it keeps DOM size under control.', timestamp: new Date(BASE_TIME + 38 * 15000) },
    { id: 40,  author: JAMIE, text: 'Which prevents unnecessary re-rendering.', timestamp: new Date(BASE_TIME + 39 * 15000), replyToId: 35 },
    { id: 41,  author: JANE,  text: "I'm thinking about accessibility implications though.", timestamp: new Date(BASE_TIME + 40 * 15000) },
    { id: 42,  author: JAMIE, text: 'Endless scrolling always needs careful handling.', timestamp: new Date(BASE_TIME + 41 * 15000) },
    { id: 43,  author: JANE,  text: 'Especially for screen readers.', timestamp: new Date(BASE_TIME + 42 * 15000) },
    { id: 44,  author: JAMIE, text: 'Focus can get lost when content is injected.', timestamp: new Date(BASE_TIME + 43 * 15000) },
    { id: 45,  author: JANE,  text: 'But starting with a structured component helps.', timestamp: new Date(BASE_TIME + 44 * 15000) },
    { id: 46,  author: JAMIE, text: 'You can layer accessibility improvements on top.', timestamp: new Date(BASE_TIME + 45 * 15000) },
    { id: 47,  author: JANE,  text: 'The demo serves as a solid baseline.', timestamp: new Date(BASE_TIME + 46 * 15000) },
    { id: 48,  author: JAMIE, text: "Agreed, it's not overly complex.", timestamp: new Date(BASE_TIME + 47 * 15000) },
    { id: 49,  author: JANE,  text: 'Just enough logic to cover the common cases.', timestamp: new Date(BASE_TIME + 48 * 15000) },
    { id: 50,  author: JAMIE, text: 'Which is good for maintainability.', timestamp: new Date(BASE_TIME + 49 * 15000), replyToId: 5 },
    { id: 51,  author: JANE,  text: 'I also like that developers control the data source.', timestamp: new Date(BASE_TIME + 50 * 15000) },
    { id: 52,  author: JAMIE, text: 'That keeps concerns nicely separated.', timestamp: new Date(BASE_TIME + 51 * 15000) },
    { id: 53,  author: JANE,  text: 'UI handles display, app handles data.', timestamp: new Date(BASE_TIME + 52 * 15000) },
    { id: 54,  author: JAMIE, text: 'Makes testing easier too.', timestamp: new Date(BASE_TIME + 53 * 15000) },
    { id: 55,  author: JANE,  text: 'Especially when simulating latency.', timestamp: new Date(BASE_TIME + 54 * 15000) },
    { id: 56,  author: JAMIE, text: 'You can catch edge cases early.', timestamp: new Date(BASE_TIME + 55 * 15000) },
    { id: 57,  author: JANE,  text: 'For example, loading delays or partial pages.', timestamp: new Date(BASE_TIME + 56 * 15000) },
    { id: 58,  author: JAMIE, text: 'Or rapid scrolling.', timestamp: new Date(BASE_TIME + 57 * 15000) },
    { id: 59,  author: JANE,  text: 'The Chat copes with that surprisingly well.', timestamp: new Date(BASE_TIME + 58 * 15000) },
    { id: 60,  author: JAMIE, text: 'It queues requests cleanly.', timestamp: new Date(BASE_TIME + 59 * 15000), replyToId: 15 },
    { id: 61,  author: JANE,  text: 'Overall, it scales much better than full rendering.', timestamp: new Date(BASE_TIME + 60 * 15000) },
    { id: 62,  author: JAMIE, text: 'Definitely the right approach for real chats.', timestamp: new Date(BASE_TIME + 61 * 15000) },
    { id: 63,  author: JANE,  text: "I wouldn't consider building a chat without it.", timestamp: new Date(BASE_TIME + 62 * 15000) },
    { id: 64,  author: JAMIE, text: 'Same here. Users expect it now.', timestamp: new Date(BASE_TIME + 63 * 15000) },
    { id: 65,  author: JANE,  text: "Even if they don't consciously notice it.", timestamp: new Date(BASE_TIME + 64 * 15000) },
    { id: 66,  author: JAMIE, text: "That's the mark of good UX.", timestamp: new Date(BASE_TIME + 65 * 15000) },
    { id: 67,  author: JANE,  text: 'The Telerik demo makes it easy to understand.', timestamp: new Date(BASE_TIME + 66 * 15000) },
    { id: 68,  author: JAMIE, text: 'And easier to adopt.', timestamp: new Date(BASE_TIME + 67 * 15000) },
    { id: 69,  author: JANE,  text: 'We should mirror this pattern in our project.', timestamp: new Date(BASE_TIME + 68 * 15000) },
    { id: 70,  author: JAMIE, text: "I'm on board with that.", timestamp: new Date(BASE_TIME + 69 * 15000), replyToId: 35 },
    { id: 71,  author: JANE,  text: "We'll need server-side paging for sure.", timestamp: new Date(BASE_TIME + 70 * 15000) },
    { id: 72,  author: JAMIE, text: 'Our message history is way too large.', timestamp: new Date(BASE_TIME + 71 * 15000) },
    { id: 73,  author: JANE,  text: 'But the API hooks are straightforward.', timestamp: new Date(BASE_TIME + 72 * 15000) },
    { id: 74,  author: JAMIE, text: 'We just have to manage indices correctly.', timestamp: new Date(BASE_TIME + 73 * 15000) },
    { id: 75,  author: JANE,  text: 'And update totals when new messages arrive.', timestamp: new Date(BASE_TIME + 74 * 15000) },
    { id: 76,  author: JAMIE, text: 'That part is easy to overlook.', timestamp: new Date(BASE_TIME + 75 * 15000) },
    { id: 77,  author: JANE,  text: 'Still, the documentation covers it clearly.', timestamp: new Date(BASE_TIME + 76 * 15000) },
    { id: 78,  author: JAMIE, text: 'Which helps avoid mistakes.', timestamp: new Date(BASE_TIME + 77 * 15000) },
    { id: 79,  author: JANE,  text: 'Overall, it feels production-ready.', timestamp: new Date(BASE_TIME + 78 * 15000) },
    { id: 80,  author: JAMIE, text: "Definitely not just a demo feature.", timestamp: new Date(BASE_TIME + 79 * 15000), replyToId: 5 },
    { id: 81,  author: JANE,  text: "I'm glad we reviewed it closely.", timestamp: new Date(BASE_TIME + 80 * 15000) },
    { id: 82,  author: JAMIE, text: 'Same, it answers a lot of scalability questions.', timestamp: new Date(BASE_TIME + 81 * 15000) },
    { id: 83,  author: JANE,  text: 'And validates our approach.', timestamp: new Date(BASE_TIME + 82 * 15000) },
    { id: 84,  author: JAMIE, text: 'We should share this with the rest of the team.', timestamp: new Date(BASE_TIME + 83 * 15000) },
    { id: 85,  author: JANE,  text: 'Agreed, especially the performance benefits.', timestamp: new Date(BASE_TIME + 84 * 15000) },
    { id: 86,  author: JAMIE, text: 'People underestimate how heavy chat UIs can be.', timestamp: new Date(BASE_TIME + 85 * 15000) },
    { id: 87,  author: JANE,  text: 'Endless scrolling solves a big part of that.', timestamp: new Date(BASE_TIME + 86 * 15000) },
    { id: 88,  author: JAMIE, text: 'Without compromising user experience.', timestamp: new Date(BASE_TIME + 87 * 15000) },
    { id: 89,  author: JANE,  text: "That's the key takeaway for me.", timestamp: new Date(BASE_TIME + 88 * 15000) },
    { id: 90,  author: JAMIE, text: 'Same here.', timestamp: new Date(BASE_TIME + 89 * 15000), replyToId: 15 },
    { id: 91,  author: JANE,  text: "Let's plan a prototype using this model.", timestamp: new Date(BASE_TIME + 90 * 15000) },
    { id: 92,  author: JAMIE, text: "I'll help with the data layer.", timestamp: new Date(BASE_TIME + 91 * 15000) },
    { id: 93,  author: JANE,  text: "I'll focus on the UI integration.", timestamp: new Date(BASE_TIME + 92 * 15000) },
    { id: 94,  author: JAMIE, text: 'Sounds like a good split.', timestamp: new Date(BASE_TIME + 93 * 15000) },
    { id: 95,  author: JANE,  text: 'This should improve our app noticeably.', timestamp: new Date(BASE_TIME + 94 * 15000) },
    { id: 96,  author: JAMIE, text: 'Both in speed and usability.', timestamp: new Date(BASE_TIME + 95 * 15000) },
    { id: 97,  author: JANE,  text: "Alright, let's get started.", timestamp: new Date(BASE_TIME + 96 * 15000) },
    { id: 98,  author: JAMIE, text: 'Looking forward to it.', timestamp: new Date(BASE_TIME + 97 * 15000) },
    { id: 99,  author: JANE,  text: 'Thanks for the discussion.', timestamp: new Date(BASE_TIME + 98 * 15000) },
    { id: 100, author: JAMIE, text: 'Anytime!', timestamp: new Date(BASE_TIME + 99 * 15000) },
    { id: 101, author: JANE,  text: "Good morning! I started wiring up the server-side paging endpoint yesterday.", timestamp: new Date(BASE_TIME + 100 * 15000) },
    { id: 102, author: JAMIE, text: 'How did it go?', timestamp: new Date(BASE_TIME + 101 * 15000) },
    { id: 103, author: JANE,  text: 'Pretty smoothly. The API accepts startIndex and endIndex and returns the slice.', timestamp: new Date(BASE_TIME + 102 * 15000) },
    { id: 104, author: JAMIE, text: 'That matches exactly what the loadMore event provides.', timestamp: new Date(BASE_TIME + 103 * 15000) },
    { id: 105, author: JANE,  text: "Right, so the component and the API speak the same language.", timestamp: new Date(BASE_TIME + 104 * 15000), isPinned: true },
    { id: 106, author: JAMIE, text: 'Did you include the total in the response too?', timestamp: new Date(BASE_TIME + 105 * 15000) },
    { id: 107, author: JANE,  text: "Yes, the server returns total along with the messages.", timestamp: new Date(BASE_TIME + 106 * 15000) },
    { id: 108, author: JAMIE, text: "Good, the Chat needs that to know when there's no more history to load.", timestamp: new Date(BASE_TIME + 107 * 15000) },
    { id: 109, author: JANE,  text: "Exactly. Without total, the component can't disable the upward scroll trigger.", timestamp: new Date(BASE_TIME + 108 * 15000) },
    { id: 110, author: JAMIE, text: 'I ran into that in an earlier spike.', timestamp: new Date(BASE_TIME + 109 * 15000), replyToId: 105 },
    { id: 111, author: JANE,  text: "What happened?", timestamp: new Date(BASE_TIME + 110 * 15000) },
    { id: 112, author: JAMIE, text: "It kept firing loadMore even when the first message was already visible.", timestamp: new Date(BASE_TIME + 111 * 15000) },
    { id: 113, author: JANE,  text: "Classic. Once you pass total correctly it stops.", timestamp: new Date(BASE_TIME + 112 * 15000) },
    { id: 114, author: JAMIE, text: 'And startIndex being 0 tells the component nothing older exists.', timestamp: new Date(BASE_TIME + 113 * 15000) },
    { id: 115, author: JANE,  text: 'Yep. Those two values together act as the boundary markers.', timestamp: new Date(BASE_TIME + 114 * 15000) },
    { id: 116, author: JAMIE, text: "I also realized we should debounce the loadMore handler.", timestamp: new Date(BASE_TIME + 115 * 15000) },
    { id: 117, author: JANE,  text: "Does the component handle that internally?", timestamp: new Date(BASE_TIME + 116 * 15000) },
    { id: 118, author: JAMIE, text: 'It throttles scroll events, but the handler itself runs every time.', timestamp: new Date(BASE_TIME + 117 * 15000) },
    { id: 119, author: JANE,  text: "So we should guard against concurrent fetches.", timestamp: new Date(BASE_TIME + 118 * 15000) },
    { id: 120, author: JAMIE, text: "A simple loading flag works well enough for most cases.", timestamp: new Date(BASE_TIME + 119 * 15000), replyToId: 105 },
    { id: 121, author: JANE,  text: "That's what I have. The handler returns early if loading is already true.", timestamp: new Date(BASE_TIME + 120 * 15000) },
    { id: 122, author: JAMIE, text: "Clean and simple.", timestamp: new Date(BASE_TIME + 121 * 15000) },
    { id: 123, author: JANE,  text: "I also added an error state in case the fetch fails.", timestamp: new Date(BASE_TIME + 122 * 15000) },
    { id: 124, author: JAMIE, text: "What do you show the user in that case?", timestamp: new Date(BASE_TIME + 123 * 15000) },
    { id: 125, author: JANE,  text: "A retry button above the message list for now.", timestamp: new Date(BASE_TIME + 124 * 15000), isPinned: true },
    { id: 126, author: JAMIE, text: "Nice touch. Users appreciate that over a silent failure.", timestamp: new Date(BASE_TIME + 125 * 15000) },
    { id: 127, author: JANE,  text: "Agreed. I'll refine the styling later.", timestamp: new Date(BASE_TIME + 126 * 15000) },
    { id: 128, author: JAMIE, text: "Did you also handle the initial page load?", timestamp: new Date(BASE_TIME + 127 * 15000) },
    { id: 129, author: JANE,  text: "Yes, on mount it fetches the last page so the chat opens at the bottom.", timestamp: new Date(BASE_TIME + 128 * 15000) },
    { id: 130, author: JAMIE, text: "That's the expected behavior. Users want to see the latest first.", timestamp: new Date(BASE_TIME + 129 * 15000), replyToId: 125 },
    { id: 131, author: JANE,  text: "And then scroll up to dig into history.", timestamp: new Date(BASE_TIME + 130 * 15000) },
    { id: 132, author: JAMIE, text: "Exactly like every major chat app.", timestamp: new Date(BASE_TIME + 131 * 15000) },
    { id: 133, author: JANE,  text: "I noticed the Chat also has an autoScrollThreshold input.", timestamp: new Date(BASE_TIME + 132 * 15000) },
    { id: 134, author: JAMIE, text: "What does that control?", timestamp: new Date(BASE_TIME + 133 * 15000) },
    { id: 135, author: JANE,  text: "It determines how close to the bottom the user must be for auto-scroll to activate.", timestamp: new Date(BASE_TIME + 134 * 15000) },
    { id: 136, author: JAMIE, text: "So if you're reading old messages, new ones don't yank you down?", timestamp: new Date(BASE_TIME + 135 * 15000) },
    { id: 137, author: JANE,  text: "Precisely. It only follows if you're near the bottom already.", timestamp: new Date(BASE_TIME + 136 * 15000) },
    { id: 138, author: JAMIE, text: "That's a thoughtful default.", timestamp: new Date(BASE_TIME + 137 * 15000) },
    { id: 139, author: JANE,  text: "You can tune it with a pixel value or a percentage.", timestamp: new Date(BASE_TIME + 138 * 15000) },
    { id: 140, author: JAMIE, text: "Percentage makes more sense for responsive layouts.", timestamp: new Date(BASE_TIME + 139 * 15000), replyToId: 35 },
    { id: 141, author: JANE,  text: "I also explored the pinnedMessages input.", timestamp: new Date(BASE_TIME + 140 * 15000) },
    { id: 142, author: JAMIE, text: "How does it work in remote mode?", timestamp: new Date(BASE_TIME + 141 * 15000) },
    { id: 143, author: JANE,  text: "You pass the full list of pinned messages from the server.", timestamp: new Date(BASE_TIME + 142 * 15000) },
    { id: 144, author: JAMIE, text: "Even ones outside the current batch?", timestamp: new Date(BASE_TIME + 143 * 15000) },
    { id: 145, author: JANE,  text: "Exactly. The Chat shows the most recently pinned one at the top.", timestamp: new Date(BASE_TIME + 144 * 15000), isPinned: true },
    { id: 146, author: JAMIE, text: "And clicking it navigates to that message?", timestamp: new Date(BASE_TIME + 145 * 15000) },
    { id: 147, author: JANE,  text: "Yes. It fires referencedMessageClick if the message isn't in the loaded batch.", timestamp: new Date(BASE_TIME + 146 * 15000) },
    { id: 148, author: JAMIE, text: "So you fetch the right page and the user lands there.", timestamp: new Date(BASE_TIME + 147 * 15000) },
    { id: 149, author: JANE,  text: "Right. The component handles the scroll-to once the batch is updated.", timestamp: new Date(BASE_TIME + 148 * 15000) },
    { id: 150, author: JAMIE, text: "That interaction feels seamless from the user's perspective.", timestamp: new Date(BASE_TIME + 149 * 15000), replyToId: 145 },
    { id: 151, author: JANE,  text: "I tested it with messages near the beginning of history.", timestamp: new Date(BASE_TIME + 150 * 15000) },
    { id: 152, author: JAMIE, text: "Any issues?", timestamp: new Date(BASE_TIME + 151 * 15000) },
    { id: 153, author: JANE,  text: "None. The index resolution worked perfectly.", timestamp: new Date(BASE_TIME + 152 * 15000) },
    { id: 154, author: JAMIE, text: "What about repliedToMessages?", timestamp: new Date(BASE_TIME + 153 * 15000) },
    { id: 155, author: JANE,  text: "Similar concept — you provide the reply targets that aren't in the batch.", timestamp: new Date(BASE_TIME + 154 * 15000) },
    { id: 156, author: JAMIE, text: "So the reply preview still renders even if the original is 200 messages back.", timestamp: new Date(BASE_TIME + 155 * 15000) },
    { id: 157, author: JANE,  text: "Exactly. The Chat uses repliedToMessages as a lookup.", timestamp: new Date(BASE_TIME + 156 * 15000) },
    { id: 158, author: JAMIE, text: "And clicking the reply preview fires referencedMessageClick too?", timestamp: new Date(BASE_TIME + 157 * 15000) },
    { id: 159, author: JANE,  text: "Yes, with type set to 'reply' instead of 'pinned'.", timestamp: new Date(BASE_TIME + 158 * 15000) },
    { id: 160, author: JAMIE, text: "Good distinction. You can handle them differently if needed.", timestamp: new Date(BASE_TIME + 159 * 15000), replyToId: 145 },
    { id: 161, author: JANE,  text: "I wrote some unit tests for the paging logic today.", timestamp: new Date(BASE_TIME + 160 * 15000) },
    { id: 162, author: JAMIE, text: "What edge cases did you cover?", timestamp: new Date(BASE_TIME + 161 * 15000) },
    { id: 163, author: JANE,  text: "Fetching the first page, the last page, and a page near each boundary.", timestamp: new Date(BASE_TIME + 162 * 15000) },
    { id: 164, author: JAMIE, text: "What about sending a message while still loading history?", timestamp: new Date(BASE_TIME + 163 * 15000) },
    { id: 165, author: JANE,  text: "That one's tricky. We append optimistically and update the total.", timestamp: new Date(BASE_TIME + 164 * 15000), isPinned: true },
    { id: 166, author: JAMIE, text: "Does it break the index alignment?", timestamp: new Date(BASE_TIME + 165 * 15000) },
    { id: 167, author: JANE,  text: "Not if you increment endIndex alongside the total.", timestamp: new Date(BASE_TIME + 166 * 15000) },
    { id: 168, author: JAMIE, text: "That keeps the window consistent.", timestamp: new Date(BASE_TIME + 167 * 15000) },
    { id: 169, author: JANE,  text: "Right. The server validates on the next fetch anyway.", timestamp: new Date(BASE_TIME + 168 * 15000) },
    { id: 170, author: JAMIE, text: "What about messages arriving from other users while scrolling back?", timestamp: new Date(BASE_TIME + 169 * 15000), replyToId: 165 },
    { id: 171, author: JANE,  text: "Those only affect total. We don't inject them into the batch.", timestamp: new Date(BASE_TIME + 170 * 15000) },
    { id: 172, author: JAMIE, text: "So the scroll-to-bottom button appears instead?", timestamp: new Date(BASE_TIME + 171 * 15000) },
    { id: 173, author: JANE,  text: "Yes. When the user clicks it, we fetch the last page.", timestamp: new Date(BASE_TIME + 172 * 15000) },
    { id: 174, author: JAMIE, text: "That's the jumpToEnd pattern.", timestamp: new Date(BASE_TIME + 173 * 15000) },
    { id: 175, author: JANE,  text: "Exactly. The component emits loadMore with the last page's range.", timestamp: new Date(BASE_TIME + 174 * 15000) },
    { id: 176, author: JAMIE, text: "And you replace the batch rather than prepending.", timestamp: new Date(BASE_TIME + 175 * 15000) },
    { id: 177, author: JANE,  text: "Right, since the new range isn't contiguous with the old one.", timestamp: new Date(BASE_TIME + 176 * 15000) },
    { id: 178, author: JAMIE, text: "Makes sense. A full replacement avoids rendering a discontinuous history.", timestamp: new Date(BASE_TIME + 177 * 15000) },
    { id: 179, author: JANE,  text: "I added a comment in the handler to make that intent clear.", timestamp: new Date(BASE_TIME + 178 * 15000) },
    { id: 180, author: JAMIE, text: "Good. Future developers will thank you.", timestamp: new Date(BASE_TIME + 179 * 15000), replyToId: 165 },
    { id: 181, author: JANE,  text: "I'm almost ready to open the PR.", timestamp: new Date(BASE_TIME + 180 * 15000) },
    { id: 182, author: JAMIE, text: "What's left?", timestamp: new Date(BASE_TIME + 181 * 15000) },
    { id: 183, author: JANE,  text: "Just the demo component and the documentation article.", timestamp: new Date(BASE_TIME + 182 * 15000) },
    { id: 184, author: JAMIE, text: "Is the demo self-contained?", timestamp: new Date(BASE_TIME + 183 * 15000) },
    { id: 185, author: JANE,  text: "Yes, it uses a local mock service to simulate the server.", timestamp: new Date(BASE_TIME + 184 * 15000), isPinned: true },
    { id: 186, author: JAMIE, text: "With artificial delay to show the loading state?", timestamp: new Date(BASE_TIME + 185 * 15000) },
    { id: 187, author: JANE,  text: "Five hundred milliseconds. Feels realistic without being annoying.", timestamp: new Date(BASE_TIME + 186 * 15000) },
    { id: 188, author: JAMIE, text: "Good balance.", timestamp: new Date(BASE_TIME + 187 * 15000) },
    { id: 189, author: JANE,  text: "The demo also includes pinned messages and replies to show those features off.", timestamp: new Date(BASE_TIME + 188 * 15000) },
    { id: 190, author: JAMIE, text: "That's the right call — the demo should showcase the full capability.", timestamp: new Date(BASE_TIME + 189 * 15000), replyToId: 185 },
    { id: 191, author: JANE,  text: "Exactly what I was thinking.", timestamp: new Date(BASE_TIME + 190 * 15000) },
    { id: 192, author: JAMIE, text: "Do you need me to review before you push?", timestamp: new Date(BASE_TIME + 191 * 15000) },
    { id: 193, author: JANE,  text: "That would be great. I'll share the branch link.", timestamp: new Date(BASE_TIME + 192 * 15000) },
    { id: 194, author: JAMIE, text: "Send it over when you're ready.", timestamp: new Date(BASE_TIME + 193 * 15000) },
    { id: 195, author: JANE,  text: "Will do. Should be later today.", timestamp: new Date(BASE_TIME + 194 * 15000) },
    { id: 196, author: JAMIE, text: "Perfect timing — I have a gap this afternoon.", timestamp: new Date(BASE_TIME + 195 * 15000) },
    { id: 197, author: JANE,  text: "Thanks, I really appreciate it.", timestamp: new Date(BASE_TIME + 196 * 15000), replyToId: 192 },
    { id: 198, author: JAMIE, text: "Happy to help. This feature is worth getting right.", timestamp: new Date(BASE_TIME + 197 * 15000) },
    { id: 199, author: JANE,  text: 'Branch is up. PR link coming your way in a minute.', timestamp: new Date(BASE_TIME + 198 * 15000) },
    { id: 200, author: JAMIE, text: 'Got it. On it now.', timestamp: new Date(BASE_TIME + 199 * 15000), replyToId: 185 },
];

export class MockChatService {
    private allMessages: Message[] = [...ALL_MESSAGES];

    public get total(): number {
        return this.allMessages.length;
    }

    public async fetchPage(startIndex: number, endIndex: number): Promise<FetchPageResult> {
        await this.delay(500);

        const start = Math.max(0, startIndex);
        const end = Math.min(this.allMessages.length, endIndex);
        const batch = this.allMessages.slice(start, end);

        return {
            messages: batch,
            startIndex: start,
            endIndex: end,
            total: this.allMessages.length,
            pinnedMessages: this.resolvePinnedMessages(),
            repliedToMessages: this.resolveRepliedToMessages(batch),
        };
    }

    public async resolveMessage(id: string | number): Promise<{ index: number; message: Message } | null> {
        await this.delay(500);
        const index = this.allMessages.findIndex((m) => m.id === id);
        return index === -1 ? null : { index, message: this.allMessages[index] };
    }

    public addMessage(message: Message): void {
        this.allMessages = [...this.allMessages, message];
    }

    public unpinMessage(id: string | number): void {
        this.allMessages = this.allMessages.map((m) => (m.id === id ? { ...m, isPinned: false } : m));
    }

    public resolvePinnedMessages(): Message[] {
        return this.allMessages.filter((m) => m.isPinned);
    }

    public resolveRepliedToMessages(batch: Message[]): Message[] {
        const batchIds = new Set(batch.map((m) => m.id));
        const missingIds = new Set<string | number>();

        for (const msg of batch) {
            if (msg.replyToId !== undefined && !batchIds.has(msg.replyToId)) {
                missingIds.add(msg.replyToId);
            }
        }

        return this.allMessages.filter((m) => missingIds.has(m.id));
    }

    private delay(ms: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}
