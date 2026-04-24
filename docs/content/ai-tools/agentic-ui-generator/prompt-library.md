---
title: Prompt Library
page_title: KendoReact Agentic UI Generator Prompt Library
description: Explore the extensive collection of prompts that you can use with the KendoReact Agentic UI Generator.
slug: agentic_ui_generator_prompt_library
position: 20
---

# KendoReact Agentic UI Generator Prompt Library

Welcome to the KendoReact Agentic UI Generator Prompt Library.

The prompts provided here are intended and optimized for use with the KendoReact MCP Server tools, including the Agentic UI Generator and the [specialized assistants](#assistant-specific-prompts). They can help you accelerate the creation and styling of modern web applications, from individual components to complete responsive pages and custom themes.

This collection of prompts is not exhaustive and the KendoReact team is constantly working on adding more prompts to the library.

> tip [Go straight to the prompts ⬇️](#general-prompts)


## How to Use the Prompts

The prompts in this library target the [Agentic UI Generator](slug:agentic_ui_generator_getting_started) using the main `#kendo_ui_generator` handle, individual assistant handles, or natural language descriptions. Make sure that you have [installed and enabled](slug:agentic_ui_generator_getting_started#quick-start) the Agentic UI Generator before attempting to run the prompts.

1. Browse the prompt library to find a prompt that suits your needs.
2. Copy the prompt text (including any handles like `#kendo_ui_generator` if needed) or use it as inspiration for your natural language description.
3. (Optional) Customize the prompt as needed for your specific use case.<br/>When modifying the prompts, make sure the changes comply with the [intended use](slug:agentic_ui_generator_getting_started#use-cases) and the [recommendations](slug:agentic_ui_generator_getting_started#best-practices) for the Agentic UI Generator.
4. Start a new chat session and run the chosen prompt.

### General Prompts

This section provides examples of common UI creation tasks using the Agentic UI Generator. Prefixing the prompts with the `#kendo_ui_generator` handle is optional, but including it ensures the main generator is explicitly invoked.

```prompt Project Setup
I have created an empty application that now needs a login screen and an admin dashboard. Add a login form with email/password fields and validation using Kendo components. After successful login, redirect to an admin dashboard page featuring a sidebar menu and a main content area displaying key metrics and recent activity.
```
```ts
```

```prompt System Dashboard Section
Create a new page using the existing top navigation and footer. In the middle, add 3 rows with 3 responsive columns each. The top row shows system health KPIs for CPU, memory, and error counts. The middle rows include a Log Stream panel, a Kendo Line Chart of API response times, and a Bar Chart of requests per service. The bottom row contains a Deployment History table, an Alerts panel, and a list of open tickets.
```
```ts
```

```prompt Appointments Dashboard
Create a responsive appointments dashboard in the schedule page using a 3x2 grid layout. The top row contains a kendo dropdown to filter appointments by doctor and a list of today's upcoming appointments. The middle row displays a month-view scheduler showing the filtered appointments. The bottom row shows a bar chart visualizing doctor occupancy rates and a pie chart showing appointment status distribution (completed, pending, canceled).
```
```ts
```

```prompt Responsive Page
Create a product catalog page with a responsive CSS grid layout displaying product cards. Add a kendo toolbar with filtering options, and expandable detail view for each product that work seamlessly on mobile, tablet, and desktop.
```
```ts
```

```prompt Landing Page
Build a landing page similar to the automotive industry kendo ui template with a hero section, feature highlights, statistics, and a call-to-action section.
```
```ts
```

```prompt Employee Directory
Add an employee directory page with a search bar and department filter at the top. Display employee details in a responsive grid layout showing names, titles, hiring dates. Include a TreeView on the left for navigating the organizational hierarchy. Add a Tooltip showing detailed employee information when a row in the Grid is hovered.
```
```ts
```

```prompt Event Management Calendar
Create an event management interface with a Scheduler component as the main element displaying events in month, week, and day views. Add a top toolbar with view switcher, date navigation, and create event button. Include a sidebar showing upcoming events list and a small Calendar for quick date selection. Add filtering options for event types and venues.
```
```ts
```

```prompt Healthcare Patient Portal
Build a patient portal with a Card layout showing different sections: upcoming appointments with a ListView, current prescriptions Grid, recent lab results with expandable rows, and a messaging panel for communicating with healthcare providers. Add a top navigation with icons for appointments, records, billing, and messages. Include a notification Badge showing unread messages.
```
```ts
```

```prompt Maintenance Schedule
Build a patient portal with a Card layout showing different sections: upcoming appointments with a ListView, current prescriptions Grid, recent lab results with expandable rows, and a messaging panel for communicating with healthcare providers. Add a top navigation with icons for appointments, records, billing, and messages. Include a notification Badge showing unread messages.
```
```ts
```

```prompt Employee Multi-Step Form
Create an employee onboarding multi-step form with the following steps: personal info, job details, credentials, review. Step 1 shows a Form for name, email, and phone with user icon in the header. Step 2 displays department DropDownList and role selection with clipboard icon. Step 3 contains system access CheckBoxList and password setup with lock icon. Final step shows a summary Card with all entered information and a submit Button with checkmark icon.
```
```ts
```

### Assistant-Specific Prompts

For more precise control over the generation process, you can invoke the specialized assistants individually using their dedicated handles.

<table>
<thead>
<tr>
<th width="15%">Assistant</th>
<th width="30%">Handle</th>
<th width="55%">Purpose</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Getting Started Assistant</strong></td>
<td><code>#kendo_getting_started_assistant</code></td>
<td>Performs the initial KendoReact setup workflow, including project scaffolding, MCP server configuration, and license activation. You can specify the project name, project type, and Kendo theme for the scaffolded app. Use this assistant when you want to get from zero setup to your first working prompt quickly.
</td>
</tr>
<tr>
<td><strong>Layout Assistant</strong></td>
<td><code>#kendo_layout_assistant</code></td>
<td>Applies suitable <a href="https://www.telerik.com/design-system/docs/utils/get-started/introduction/">CSS utility classes</a> from the Progress Design System for styling and positioning elements. Use this assistant when you need help with spacing, typography, colors, layout structure, or transforms.</td>
</tr>
<tr>
<td><strong>Component Assistant</strong></td>
<td><code>#kendo_component_assistant</code></td>
<td>Answers questions and generates code related to KendoReact components. Use this assistant when you need to implement or configure specific KendoReact components like Grid, Charts, Forms, and more.</td>
</tr>
<tr>
<td><strong>Styling Assistant</strong></td>
<td><code>#kendo_style_assistant</code></td>
<td>Generates custom styles and theme configurations for your application. Use this assistant when you need to apply brand-specific colors, create custom themes, or modify the overall visual design of your UI.</td>
</tr>
<tr>
<td><strong>Icon Assistant</strong></td>
<td><code>#kendo_icon_assistant</code></td>
<td>Searches and retrieves icons from the <a href="https://www.telerik.com/design-system/docs/foundation/iconography/icon-list/">Progress Design System iconography</a> by name, category, or keywords. Use this assistant when you need to find and add specific icons for your UI components or design elements.</td>
</tr>
<tr>
<td><strong>Accessibility Assistant</strong></td>
<td><code>#kendo_accessibility_assistant</code></td>
<td>Provides WCAG 2.2 Level AA guidance and component-specific accessibility implementation details. Use this assistant to ensure your UI meets compliance standards, implement correct ARIA roles, validate color contrast, and retrieve accessibility API references for KendoReact components.</td>
</tr>
</tbody>
</table>


#### Layout Assistant

Use the `#kendo_layout_assistant` handle to structure your page layout and organize your UI elements:

```prompt Responsive Layout
#kendo_layout_assistant Update the existing page layout by adding a new section in the middle of the page. In that added section, a Dashboard Card displays summary KPIs (revenue, active users, growth rate), next to a Compact Card showing a recent alert or message. Make the page responsive with proper spacing and typography.
```
```ts
```

```prompt Layout Transformation
#kendo_layout_assistant I have an existing carousel feature section that needs to be replaced with a responsive 3-column grid layout. Convert the carousel items into a grid that displays 3 columns on desktop, 2 columns on tablet, and 1 column on mobile with proper spacing and alignment.
```
```ts
```

#### Component Assistant

Use the `#kendo_component_assistant` handle for specific implementations that need the KendoReact components:

```prompt Interactive Data Page
#kendo_component_assistant Create a Grid component with paging, sorting, and filtering. Include column configuration for a product catalog with name, price, category, and actions. Ensure the Grid is properly integrated into a card layout with responsive design and consistent spacing.
```
```ts
```

```prompt Multi-Component Data View
#kendo_component_assistant Insert a new section with a Grid on the left to filter and sort product data. On the right, add a Chart and DateRangePicker to visualize product sales over time. Both components should be data-bound to the same source and reactively update based on the selected date range.
```
```ts
```

#### Styling Assistant

Use the `#kendo_style_assistant` handle for custom themes and brand-specific styling:

```prompt Accessible Color Theme
#kendo_style_assistant Generate custom CSS variables for a corporate blue and green color scheme with high contrast accessibility requirements.
```
```ts
```

```prompt Dark Mode Theme
#kendo_style_assistant Create a comprehensive dark mode theme with a dark background, light text, subtle border radius on cards and buttons, and increased spacing between the UI components.
```
```ts
```

#### Icon Assistant

Use the `#kendo_icon_assistant` handle for finding and implementing suitable icons based on your scenario:

```prompt Navigation Icons
#kendo_icon_assistant Add icons suitable for the Home, Settings, and User Profile buttons in my navigation bar.
```
```ts
```

```prompt Toolbar Action Icons
#kendo_icon_assistant Find appropriate icons for data visualization actions like export, print, refresh, and search in a dashboard toolbar.
```
```ts
```

#### Accessibility Assistant

Use the `#kendo_accessibility_assistant` handle to verify WCAG 2.2 Level AA compliance, including color contrast verification, and implement proper accessibility features:

```prompt Grid Cell Template Navigation
#kendo_accessibility_assistant I have a Grid with a custom cell template that has multiple buttons like view report, download PDF, and send email. When I try to navigate with the keyboard, I can't get to these buttons properly. How can I make the keyboard navigation work for focusable elements inside the cell?
```
```ts
```

```prompt Grid Row Headers
#kendo_accessibility_assistant I have a Grid that displays employee data where the first column contains employee names, followed by columns for department, salary, and hire date. How can I improve accessibility for screen reader users navigating this table?
```
```ts
```

## See Also

-   [KendoReact MCP Server Overview](slug:ai_tools_overview)
-   [KendoReact Agentic UI Generator Getting Started](slug:agentic_ui_generator_getting_started)
-   [KendoReact Agentic UI Generator Intended Use](slug:agentic_ui_generator_getting_started#use-cases)

<style>
.d-print-none button:nth-child(2) {
  display: none !important;
}
</style>
