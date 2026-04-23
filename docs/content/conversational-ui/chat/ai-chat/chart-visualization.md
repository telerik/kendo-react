---
title: Chart Content Visualization
description: 'Display financial or statistical data visualizations directly in Chat messages for engaging data analysis.'
components: ['chat']
slug: ai_chat_chart_visualization
position: 1
---

# React Chat Chart Visualization

Display financial or statistical data visualizations directly in Chat messages. Users can view and interact with charts and graphs as part of the conversation flow, making data analysis more accessible and engaging.

<demo metaUrl="conversational-ui/chat/chart-visualization/" height="700"></demo>

## Setup

To display Chart components inside the Chat messages interface, follow these steps:

### 1. Install the Charts package

Follow the [Getting Started with Charts](slug:getstarted_charts) guide to install and set up the Charts package in your project:

```bash
npm install @progress/kendo-react-charts
```

### 2. Import the necessary components

```tsx
import { Chat, Message, User, ChatSendMessageEvent } from '@progress/kendo-react-conversational-ui';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem
} from '@progress/kendo-react-charts';
```

### 3. Prepare chart data and components

Create chart components for the visualizations you want to display:

```tsx
const TrendsChart = () => {
    const data = [
        { name: 'Jan', value: 45000 },
        { name: 'Feb', value: 52000 },
        { name: 'Mar', value: 48000 }
        // ... more data
    ];

    return (
        <Chart style={{ height: 250 }}>
            <ChartSeries>
                <ChartSeriesItem type="line" data={data} field="value" categoryField="name" />
            </ChartSeries>
            <ChartCategoryAxis>
                <ChartCategoryAxisItem />
            </ChartCategoryAxis>
        </Chart>
    );
};
```

### 4. Use messageTemplate to conditionally render charts

```tsx
type AppMessage = Message & {
    chartType?: 'trends' | 'performance' | 'marketShare';
};

const MessageTemplate = (props: { item: AppMessage }) => {
    const message = props.item;
    const isUser = message.author?.id === user.id;

    if (message.chartType) {
        return (
            <div style={{ width: '100%' }}>
                <div>{message.text}</div>
                <div style={{ marginTop: 16 }}>
                    {message.chartType === 'trends' && <TrendsChart />}
                    {message.chartType === 'performance' && <PerformanceChart />}
                    {message.chartType === 'marketShare' && <MarketShareChart />}
                </div>
            </div>
        );
    }

    return (
        <div>
            <span>{message.text}</span>
        </div>
    );
};

<Chat messages={messages} authorId={user.id} messageTemplate={MessageTemplate} />;
```

## Suggested Links

-   [Chat Data Binding](slug:databinding_standard_chat)
-   [Message Templates](slug:customization_message_templates_chat)
-   [Quick Actions](slug:quick_actions_suggestions_chat)
-   [Chat API Reference](slug:api_conversational-ui)
