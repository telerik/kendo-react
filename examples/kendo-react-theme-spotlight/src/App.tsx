import React, { useState, useEffect, useRef, useId } from "react";
import {
  Switch,
  Slider,
  TextArea,
  TextBox,
  MaskedTextBox,
  NumericTextBox,
  Checkbox,
  RangeSlider,
  Rating,
  RadioGroup,
  ColorPicker,
  ColorGradient,
} from "@progress/kendo-react-inputs";
import { FloatingLabel, Label } from "@progress/kendo-react-labels";
import {
  ComboBox,
  MultiSelect,
  DropDownList,
  AutoComplete,
} from "@progress/kendo-react-dropdowns";
import {
  DatePicker,
  TimePicker,
  Calendar,
} from "@progress/kendo-react-dateinputs";
import {
  Grid,
  GridColumn,
  GridColumnMenuSort,
  GridColumnMenuFilter,
  GridToolbar,
} from "@progress/kendo-react-grid";
import { TreeView, processTreeViewItems } from "@progress/kendo-react-treeview";
import { orderBy, SortDescriptor } from "@progress/kendo-data-query";
import { Editor, EditorTools } from "@progress/kendo-react-editor";
import { Upload, ExternalDropZone } from "@progress/kendo-react-upload";
import { Chat } from "@progress/kendo-react-conversational-ui";
import { Spreadsheet } from "@progress/kendo-react-spreadsheet";
import {
  Scheduler,
  DayView,
  WeekView,
  MonthView,
} from "@progress/kendo-react-scheduler";
import {
  Avatar,
  ActionSheet,
  ActionSheetContent,
  BottomNavigation,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Drawer,
  DrawerContent,
  TabStrip,
  TabStripTab,
  Stepper,
  Breadcrumb,
} from "@progress/kendo-react-layout";
import {
  Badge,
  BadgeContainer,
  Loader,
} from "@progress/kendo-react-indicators";
import {
  ProgressBar,
  ChunkProgressBar,
} from "@progress/kendo-react-progressbars";
import {
  ArcGauge,
  RadialGauge,
  LinearGauge,
} from "@progress/kendo-react-gauges";
import {
  Button,
  ButtonGroup,
  Chip,
  ChipList,
  Toolbar,
  ToolbarItem,
  ToolbarSeparator,
  ToolbarSpacer,
} from "@progress/kendo-react-buttons";
import { Tooltip, Popover } from "@progress/kendo-react-tooltip";
import { Window } from "@progress/kendo-react-dialogs";
import {
  Notification,
  NotificationGroup,
} from "@progress/kendo-react-notification";
import { Fade } from "@progress/kendo-react-animation";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartLegend,
  ChartArea,
  ChartValueAxis,
  ChartValueAxisItem,
} from "@progress/kendo-react-charts";
import {
  bellIcon,
  arrowUpIcon,
  arrowDownIcon,
  searchIcon,
  menuIcon,
  homeIcon,
  gearIcon,
  plusIcon,
  calendarIcon,
  infoCircleIcon,
  envelopeIcon,
  folderIcon,
  starIcon,
  paperclipIcon,
  brushIcon,
  chartLineIcon,
  cartIcon,
  cloudIcon,
  pencilIcon,
  folderOpenIcon,
  trashIcon,
  categorizeIcon,
  paletteIcon,
  eyeIcon,
  userIcon,
  linkIcon,
  dollarIcon,
  planeIcon,
  clipboardTextIcon,
  checkIcon,
  bookIcon,
  sparklesIcon,
} from "@progress/kendo-svg-icons";
import { SvgIcon } from "@progress/kendo-react-common";
import "hammerjs";

import {
  chartCategories,
  chartSeries,
  barData,
  pieData,
  donutData,
  lineData,
} from "./data/chartData";
import { gridData as rawGridData } from "./data/gridData";

/* ─────────────────────────  Scene wrapper  ───────────────────────── */
const Scene: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <section className="contents">{children}</section>
);

/* ─────────────────────────  KPI tile  ───────────────────────── */
type KPI = {
  label: string;
  value: string;
  delta: number;
  gauge: number;
  tone:
    | "primary"
    | "success"
    | "warning"
    | "info"
    | "secondary"
    | "series-a"
    | "series-b"
    | "series-c"
    | "series-d";
};
const KpiTile: React.FC<KPI> = ({ label, value, delta, gauge, tone }) => (
  <Card className="kpi-tile">
    <CardHeader className="card-head">
      <CardTitle className="flex w-full align-center justify-between">
        {label}
        <Tooltip anchorElement="target" position="top" parentTitle={true}>
          <span title={`More info about ${label}`}>
            <Button
              svgIcon={infoCircleIcon}
              fillMode="flat"
              size="small"
              rounded="full"
              aria-label={`More info about ${label}`}
            />
          </span>
        </Tooltip>
      </CardTitle>
    </CardHeader>
    <CardBody className="flex items-center justify-between gap-4">
      <div className="hidden min-[560px]:flex flex-col ml-3 items-start gap-3 justify-between">
        <div className="text-[1.6rem] font-bold tracking-tight leading-[1.1] text-[var(--kendo-color-on-app-surface)]">
          {value}
        </div>
        <div
          className={`inline-flex items-center gap-[0.3rem] text-[var(--kendo-font-size-lg)] font-medium ${delta >= 0 ? "text-[var(--kendo-color-success)]" : "text-[var(--kendo-color-error)]"}`}
        >
          <SvgIcon
            icon={delta >= 0 ? arrowUpIcon : arrowDownIcon}
            size="small"
          />
          {Math.abs(delta)}%
        </div>
      </div>
      <div aria-hidden="true">
        <ArcGauge
          value={gauge}
          colors={[{ to: 100, color: `var(--kendo-color-${tone})` }]}
          scale={{ rangeSize: 12 }}
          arcCenterRender={() => <></>}
          style={{ width: 100, height: 80 }}
          className="min-[1400px]:!w-[200px]"
        />
      </div>
    </CardBody>
  </Card>
);

/* ─────────────────────────  Drawer demo (translucent)  ───────────────────────── */
const drawerItems = [
  { text: "Inbox", svgIcon: envelopeIcon, selected: true },
  { text: "Starred", svgIcon: starIcon },
  { text: "Sent", svgIcon: paperclipIcon },
  { text: "Drafts", svgIcon: pencilIcon },
  { text: "Archive", svgIcon: folderOpenIcon },
  { separator: true },
  { text: "Labels", svgIcon: categorizeIcon },
  { text: "Trash", svgIcon: trashIcon },
  { separator: true },
  { text: "Settings", svgIcon: gearIcon },
];

const drawerViews: Record<
  string,
  {
    title: string;
    rows: {
      initials: string;
      color: string;
      name: string;
      preview: string;
      time: string;
      svgIcon?: any;
    }[];
  }
> = {
  Inbox: {
    title: "Inbox",
    rows: [
      {
        initials: "AK",
        color: "primary",
        name: "Anya Kovacs",
        preview: "Quick question about the design tokens…",
        time: "9:42",
      },
      {
        initials: "RP",
        color: "info",
        name: "Ravi Patel",
        preview: "Re: Sprint review notes",
        time: "8:10",
      },
      {
        initials: "MM",
        color: "tertiary",
        name: "Maya Müller",
        preview: "Invoice #1428 attached",
        time: "Yest",
      },
      {
        initials: "JT",
        color: "warning",
        name: "Jake Torres",
        preview: "Deployment pipeline is green ✓",
        time: "Yest",
      },
      {
        initials: "SC",
        color: "success",
        name: "Sara Chen",
        preview: "Can you review the accessibility audit?",
        time: "Mon",
      },
    ],
  },
  Starred: {
    title: "Starred",
    rows: [
      {
        initials: "RP",
        color: "info",
        name: "Ravi Patel",
        preview: "Sprint review — action items inside",
        time: "Mon",
      },
      {
        initials: "LW",
        color: "success",
        name: "Lin Wei",
        preview: "Final mockups for v3 attached",
        time: "Fri",
      },
    ],
  },
  Sent: {
    title: "Sent",
    rows: [
      {
        initials: "ME",
        color: "primary",
        name: "To: Design Team",
        preview: "Updated the color palette PR",
        time: "10:15",
      },
      {
        initials: "ME",
        color: "primary",
        name: "To: Anya Kovacs",
        preview: "Re: Quick question — check the docs",
        time: "9:50",
      },
    ],
  },
  Drafts: {
    title: "Drafts",
    rows: [
      {
        initials: "ME",
        color: "warning",
        name: "To: Marketing Team",
        preview: "Q3 campaign brief — needs final numbers",
        time: "Draft",
      },
      {
        initials: "ME",
        color: "warning",
        name: "To: HR",
        preview: "Vacation request July 14–21",
        time: "Draft",
      },
      {
        initials: "ME",
        color: "warning",
        name: "To: Lin Wei",
        preview: "Feedback on the new onboarding flow…",
        time: "Draft",
      },
    ],
  },
  Archive: {
    title: "Archive",
    rows: [
      {
        initials: "NB",
        color: "tertiary",
        name: "Nora Berg",
        preview: "Old project handoff documentation",
        time: "Apr 2",
      },
      {
        initials: "RP",
        color: "info",
        name: "Ravi Patel",
        preview: "Q1 retrospective summary",
        time: "Mar 15",
      },
      {
        initials: "AK",
        color: "primary",
        name: "Anya Kovacs",
        preview: "Brand guidelines v2 — final",
        time: "Feb 28",
      },
      {
        initials: "TH",
        color: "success",
        name: "Tom Hernandez",
        preview: "Contract renewal signed ✓",
        time: "Feb 10",
      },
    ],
  },
  Labels: {
    title: "Labels",
    rows: [
      {
        initials: "",
        color: "info",
        name: "Work",
        preview: "42 conversations",
        time: "",
        svgIcon: clipboardTextIcon,
      },
      {
        initials: "",
        color: "success",
        name: "Personal",
        preview: "18 conversations",
        time: "",
        svgIcon: userIcon,
      },
      {
        initials: "",
        color: "warning",
        name: "Receipts",
        preview: "9 conversations",
        time: "",
        svgIcon: dollarIcon,
      },
      {
        initials: "",
        color: "tertiary",
        name: "Travel",
        preview: "5 conversations",
        time: "",
        svgIcon: planeIcon,
      },
    ],
  },
  Trash: {
    title: "Trash",
    rows: [
      {
        initials: "SP",
        color: "base",
        name: "Spam Sender",
        preview: "You've won a free vacation!",
        time: "Apr 30",
      },
      {
        initials: "OL",
        color: "base",
        name: "Old Newsletter",
        preview: "Weekly digest — March edition",
        time: "Mar 5",
      },
    ],
  },
  Settings: {
    title: "Settings",
    rows: [
      {
        initials: "",
        color: "base",
        name: "Notifications",
        preview: "Email & push preferences",
        time: "",
        svgIcon: bellIcon,
      },
      {
        initials: "",
        color: "base",
        name: "Appearance",
        preview: "Theme, density, language",
        time: "",
        svgIcon: paletteIcon,
      },
      {
        initials: "",
        color: "base",
        name: "Privacy",
        preview: "Data sharing & cookies",
        time: "",
        svgIcon: eyeIcon,
      },
      {
        initials: "",
        color: "base",
        name: "Account",
        preview: "Profile, password, two-factor auth",
        time: "",
        svgIcon: userIcon,
      },
      {
        initials: "",
        color: "base",
        name: "Connected Apps",
        preview: "Manage third-party integrations",
        time: "",
        svgIcon: linkIcon,
      },
    ],
  },
};

const DrawerPreview: React.FC = () => {
  const [expanded, setExpanded] = useState(true);
  const [selectedItem, setSelectedItem] = useState("Inbox");

  const items = drawerItems.map((item: any) => ({
    ...item,
    selected: item.text === selectedItem,
  }));

  const view = drawerViews[selectedItem] || drawerViews.Inbox;

  return (
    <div
      className="relative h-full min-h-[22rem] border border-[var(--kendo-color-border)] rounded-[var(--kendo-border-radius-xl)] overflow-hidden"
      style={{ background: "var(--kendo-color-surface-alt)" }}
    >
      <Drawer
        expanded={expanded}
        position="start"
        mode="push"
        mini
        width={160}
        items={items as any}
        onSelect={(e) => {
          if (e.itemTarget?.props?.text) {
            setSelectedItem(e.itemTarget.props.text);
          }
        }}
      >
        <DrawerContent>
          <div className="py-4 px-5">
            <div className="flex items-center justify-between mb-3 gap-3">
              <Button
                size="small"
                fillMode="flat"
                svgIcon={menuIcon}
                onClick={() => setExpanded(!expanded)}
                aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
              />
              <strong className="">{view.title}</strong>

              {view.title === "Inbox" && (
                <div className="flex items-center -space-x-2 mb-1">
                  <Avatar
                    type="text"
                    size="small"
                    rounded="full"
                    themeColor="primary"
                    style={{
                      border: "2px solid var(--kendo-color-app-surface)",
                    }}
                  >
                    AB
                  </Avatar>
                  <Avatar
                    type="text"
                    size="small"
                    rounded="full"
                    themeColor="secondary"
                    style={{
                      border: "2px solid var(--kendo-color-app-surface)",
                    }}
                  >
                    CD
                  </Avatar>
                  <Avatar
                    type="text"
                    size="small"
                    rounded="full"
                    themeColor="tertiary"
                    style={{
                      border: "2px solid var(--kendo-color-app-surface)",
                    }}
                  >
                    EF
                  </Avatar>
                  <Avatar
                    type="text"
                    size="small"
                    rounded="full"
                    themeColor="secondary"
                    style={{
                      border: "2px solid var(--kendo-color-app-surface)",
                    }}
                  >
                    GH
                  </Avatar>
                  <Avatar
                    type="text"
                    size="small"
                    rounded="full"
                    themeColor="tertiary"
                    style={{
                      border: "2px solid var(--kendo-color-app-surface)",
                    }}
                  >
                    +7
                  </Avatar>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              {view.rows.map((row, i) => (
                <div
                  className="flex items-center gap-[0.65rem] px-3 py-2 rounded-md hover:bg-[color-mix(in_oklch,var(--kendo-color-primary)_7%,transparent)]"
                  key={`${selectedItem}-${i}`}
                >
                  <Avatar
                    type={row.svgIcon ? "icon" : "text"}
                    themeColor={row.color as any}
                    rounded="full"
                    size="small"
                  >
                    {row.svgIcon ? (
                      <SvgIcon icon={row.svgIcon} />
                    ) : (
                      row.initials
                    )}
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="k-font-medium truncate">{row.name}</div>
                    <div className="k-text-subtle truncate">{row.preview}</div>
                  </div>
                  {row.time && (
                    <span className="k-text-subtle">{row.time}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

/* ─────────────────────────  Mobile preview (BottomNavigation)  ───────────────────────── */
const MobilePreview: React.FC = React.memo(() => {
  const [tab, setTab] = useState(0);
  const [showCheckoutSheet, setShowCheckoutSheet] = useState(false);

  const homeView = (
    <>
      <div className="px-4 py-2">
        <div className="ml-2 mt-4">
          <div className="k-text-subtle uppercase tracking-widest">Today</div>
          <div className="k-text-2xl k-font-bold">$4,820.40</div>
          <div className="k-color-success">▲ 8.4% vs yesterday</div>
        </div>
        <Chart style={{ marginTop: 8 }}>
          <ChartArea height={80} background="transparent" margin={0} />
          <ChartCategoryAxis>
            <ChartCategoryAxisItem
              categories={chartCategories}
              visible={false}
            />
          </ChartCategoryAxis>
          <ChartValueAxis>
            <ChartValueAxisItem visible={false} />
          </ChartValueAxis>
          <ChartSeries>
            <ChartSeriesItem
              type="area"
              data={lineData[0].data}
              markers={{ visible: false }}
            />
          </ChartSeries>
        </Chart>
      </div>
      <div
        className="flex-1 px-4 py-3 flex flex-col gap-2 text-[var(--kendo-color-on-app-surface)] overflow-auto"
        tabIndex={0}
        role="region"
        aria-label="Recent transactions"
      >
        <div className="flex justify-between items-center pb-1">
          <span className="k-font-medium">Recent transactions</span>
          <span className="k-text-subtle">See all</span>
        </div>
        <Card>
          <CardBody className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[color-mix(in_oklch,var(--kendo-color-success)_20%,transparent)] text-[var(--kendo-color-success)]">
              <SvgIcon icon={arrowDownIcon} size="small" />
            </div>
            <div className="flex-1">
              <div className="k-font-medium">Deposit</div>
              <div className="k-text-subtle">From Savings</div>
            </div>
            <span className="k-font-medium k-color-success">+$1,240</span>
          </CardBody>
        </Card>
        <Card>
          <CardBody className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[color-mix(in_oklch,var(--kendo-color-error)_20%,transparent)] text-[var(--kendo-color-error)]">
              <SvgIcon icon={arrowUpIcon} size="small" />
            </div>
            <div className="flex-1">
              <div className="k-font-medium">Netflix</div>
              <div className="k-text-subtle">Subscription</div>
            </div>
            <span className="k-font-medium">−$15.99</span>
          </CardBody>
        </Card>
        <Card>
          <CardBody className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[color-mix(in_oklch,var(--kendo-color-info)_20%,transparent)] text-[var(--kendo-color-info)]">
              <SvgIcon icon={cartIcon} size="small" />
            </div>
            <div className="flex-1">
              <div className="k-font-medium">Amazon</div>
              <div className="k-text-subtle">Shopping</div>
            </div>
            <span className="k-font-medium">−$89.50</span>
          </CardBody>
        </Card>
      </div>
    </>
  );

  const statsView = (
    <div className="px-4 py-2">
      <div className="ml-2 mt-4">
        <div className="k-text-subtle uppercase tracking-widest">
          Weekly Stats
        </div>
        <div className="k-text-2xl k-font-bold">+12.3%</div>
        <div className="k-color-success">Portfolio growth</div>
      </div>
      <Chart style={{ height: "150px", marginTop: 8 }}>
        <ChartArea height={150} background="transparent" margin={0} />
        <ChartCategoryAxis>
          <ChartCategoryAxisItem categories={chartCategories} visible={false} />
        </ChartCategoryAxis>
        <ChartValueAxis>
          <ChartValueAxisItem visible={false} />
        </ChartValueAxis>
        <ChartSeries>
          <ChartSeriesItem
            type="column"
            data={barData.slice(0, 6).map((d) => d.value)}
          />
        </ChartSeries>
      </Chart>

      <Card className="mt-6">
        <CardBody>
          <div className="flex k-justify-content-between k-text-xs">
            <span>Income</span>
            <span className="k-color-success">$6,240</span>
          </div>
          <ProgressBar
            value={78}
            ariaLabel="Income progress"
            style={{ marginTop: 4, marginBottom: 8 }}
          />
          <div className="flex k-justify-content-between k-text-xs">
            <span>Expenses</span>
            <span>$1,419</span>
          </div>
          <ProgressBar
            value={23}
            ariaLabel="Expenses progress"
            style={{ marginTop: 4, marginBottom: 8 }}
          />
          <div className="flex k-justify-content-between k-text-xs">
            <span>Savings</span>
            <span className="k-color-success">$4,821</span>
          </div>
          <ProgressBar
            value={55}
            ariaLabel="Savings progress"
            style={{ marginTop: 4 }}
          />
        </CardBody>
      </Card>
    </div>
  );

  const cartView = (
    <div className="px-4 py-2">
      <div className="ml-2">
        <div className="k-text-subtle uppercase tracking-widest">Cart</div>
        <div className="k-text-lg k-font-bold k-mt-1">3 items</div>
      </div>

      <Card style={{ marginTop: 8 }}>
        <CardBody className="flex items-center gap-3">
          <SvgIcon icon={paletteIcon} size="medium" />
          <div className="flex-1">
            <div className="k-font-medium">Theme License</div>
            <div className="k-text-subtle">Annual subscription</div>
          </div>
          <Chip themeColor="info" text="$299" size="small" />
        </CardBody>
      </Card>
      <Card style={{ marginTop: 8 }}>
        <CardBody className="flex items-center gap-3">
          <SvgIcon icon={clipboardTextIcon} size="medium" />
          <div className="flex-1">
            <div className="k-font-medium">Support Plan</div>
            <div className="k-text-subtle">Priority 24/7</div>
          </div>
          <Chip themeColor="info" text="$99" size="small" />
        </CardBody>
      </Card>
      <Card style={{ marginTop: 8 }}>
        <CardBody className="flex items-center gap-3">
          <SvgIcon icon={brushIcon} size="medium" />
          <div className="flex-1">
            <div className="k-font-medium">Figma Kit</div>
            <div className="k-text-subtle">Design assets</div>
          </div>
          <Chip themeColor="info" text="$49" size="small" />
        </CardBody>
      </Card>

      <Card style={{ marginTop: 8 }}>
        <CardBody>
          <div className="flex k-justify-content-between ">
            <span>Subtotal</span>
            <span>$447</span>
          </div>
          <div className="flex k-justify-content-between k-text-subtle k-mt-1">
            <span>Discount</span>
            <span className="k-color-success">−$44.70</span>
          </div>
          <div className="flex k-justify-content-between k-text-subtle k-mt-1">
            <span>Tax</span>
            <span>$36.21</span>
          </div>
          <hr
            className="k-mt-2 k-mb-2"
            style={{
              border: "none",
              borderTop: "1px solid var(--kendo-color-border)",
            }}
          />
          <div className="flex k-justify-content-between  k-font-bold">
            <span>Total</span>
            <span>$438.51</span>
          </div>
        </CardBody>
      </Card>

      <Button
        themeColor="primary"
        size="large"
        svgIcon={cartIcon}
        style={{ marginTop: 12, width: "100%" }}
        onClick={() => setShowCheckoutSheet(true)}
      >
        Checkout
      </Button>
    </div>
  );

  const profileView = (
    <div className="px-4 py-2">
      <div className="flex k-flex-col items-center gap-2">
        <Avatar type="text" themeColor="primary" rounded="full" size="large">
          AX
        </Avatar>
        <div className="k-text-lg k-font-bold">Alex Rivera</div>
        <div className="k-text-subtle">alex@example.com</div>
        <ChipList
          data={[
            { text: "128 Orders", value: "orders", themeColor: "info" },
            { text: "$12.4k Spent", value: "spent", themeColor: "success" },
            { text: "4.8★", value: "rating", themeColor: "warning" },
          ]}
          chip={(props: any) => (
            <Chip {...props} themeColor={props.dataItem.themeColor} />
          )}
          selection="none"
          size="small"
        />
      </div>

      <Card style={{ marginTop: 12 }}>
        <CardBody>
          <div className="flex items-center gap-2 mb-2">
            <SvgIcon icon={starIcon} size="medium" />
            <div>
              <div className="k-font-medium">Gold Member</div>
            </div>
          </div>
          <div className="k-text-subtle k-mb-1">Next tier: 72%</div>
          <ProgressBar value={72} ariaLabel="Gold Member tier progress" />
        </CardBody>
      </Card>

      <Card style={{ marginTop: 8 }}>
        <CardBody>
          <div className="k-font-medium k-mb-2">Monthly Activity</div>
          <Chart style={{ height: "80px" }}>
            <ChartArea height={80} background="transparent" margin={0} />
            <ChartCategoryAxis>
              <ChartCategoryAxisItem
                categories={chartCategories}
                visible={false}
              />
            </ChartCategoryAxis>
            <ChartValueAxis>
              <ChartValueAxisItem visible={false} />
            </ChartValueAxis>
            <ChartSeries>
              <ChartSeriesItem
                type="area"
                data={lineData[0].data}
                markers={{ visible: false }}
              />
            </ChartSeries>
          </Chart>
        </CardBody>
      </Card>
    </div>
  );

  const views = [homeView, statsView, cartView, profileView];

  return (
    <div className="phone-frame relative w-full h-full mx-auto rounded-[var(--kendo-border-radius-xxxl)] border border-[var(--kendo-color-border)] bg-[color-mix(in_oklch,var(--kendo-color-on-app-surface)_4%,transparent)] p-[0.6rem] shadow-[0_24px_50px_-28px_rgba(15,23,42,0.35),0_0_0_6px_color-mix(in_oklch,var(--kendo-color-on-app-surface)_6%,transparent)]">
      <div className="absolute top-[0.55rem] left-1/2 -translate-x-1/2 w-20 h-[0.35rem] rounded-full bg-[color-mix(in_oklch,var(--kendo-color-on-app-surface)_25%,transparent)]" />
      <div className="phone-frame__screen">
        <div className="flex justify-between px-4 pt-4 pb-1 text-[0.65rem] text-[var(--kendo-color-subtle)] font-[var(--kendo-font-family-monospace,monospace)]">
          <span>9:41</span>
          <span className="flex items-center gap-1">
            <SvgIcon icon={cloudIcon} size="small" />
            <SvgIcon icon={bellIcon} size="small" />
          </span>
        </div>
        {views[tab]}
        <BottomNavigation
          ref={(inst: any) => {
            if (inst?.element)
              inst.element.setAttribute("aria-label", "Mobile navigation");
          }}
          items={
            [
              { text: "Home", svgIcon: homeIcon, selected: tab === 0 },
              { text: "Stats", svgIcon: chartLineIcon, selected: tab === 1 },
              { text: "Cart", svgIcon: cartIcon, selected: tab === 2 },
              { text: "Profile", svgIcon: gearIcon, selected: tab === 3 },
            ] as any
          }
          onSelect={(e) => setTab(e.itemIndex)}
        />
        <ActionSheet
          title="Complete Your Purchase"
          subTitle="Choose your next step"
          className="phone-actionsheet"
          expand={showCheckoutSheet}
          animation={true}
          onClose={() => setShowCheckoutSheet(false)}
        >
          <ActionSheetContent>
            <div className="p-4">
              <div className="flex justify-between text-sm mb-2">
                <span>Subtotal</span>
                <span>$447.00</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span>Discount</span>
                <span className="text-[var(--kendo-color-success)]">
                  −$44.70
                </span>
              </div>
              <div className="flex justify-between text-sm mb-3">
                <span>Tax</span>
                <span>$36.21</span>
              </div>
              <hr className="mb-3 border-t border-[var(--kendo-color-border)]" />
              <div className="flex justify-between text-base font-bold mb-4">
                <span>Total</span>
                <span>$438.51</span>
              </div>
              <div className="flex justify-end mt-4 gap-2">
                <Button
                  themeColor="error"
                  fillMode="outline"
                  size="large"
                  // style={{ width: "100%"}}
                  onClick={() => setShowCheckoutSheet(false)}
                >
                  Cancel
                </Button>
                <Button
                  themeColor="primary"
                  size="large"
                  // style={{ width: "100%"}}
                  onClick={() => setShowCheckoutSheet(false)}
                >
                  Pay Now
                </Button>
              </div>
            </div>
          </ActionSheetContent>
        </ActionSheet>
      </div>
    </div>
  );
});

/* ─────────────────────────  Overlays demo (Window + Popover + Tooltip)  ───────────────────────── */
const OverlaysDemo: React.FC = () => {
  const [winOpen, setWinOpen] = useState(false);
  const [popOpen, setPopOpen] = useState(false);
  const popAnchor = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="flex flex-col gap-3">
      <div className="k-text-subtle">
        Open these to see how the title bars, popover surface and tooltip
        inherit the same translucency as the rest of the demo.
      </div>
      <Tooltip anchorElement="target" position="top" parentTitle={true}>
        <div className="flex flex-wrap items-center gap-2">
          <Button
            themeColor="primary"
            svgIcon={infoCircleIcon}
            title="Opens a draggable Kendo Window"
            onClick={() => setWinOpen(true)}
          >
            Window
          </Button>
          <button
            ref={popAnchor}
            title="Toggles a Kendo Popover"
            className="k-button k-button-md k-button-solid k-button-solid-base k-rounded-md"
            onClick={() => setPopOpen((p) => !p)}
          >
            <SvgIcon icon={chartLineIcon} />
            <span className="k-button-text">Popover</span>
          </button>
          <Button
            fillMode="outline"
            svgIcon={bellIcon}
            title="Hover anything for a tooltip"
          >
            Tooltip me
          </Button>
        </div>
      </Tooltip>

      {popAnchor.current && (
        <Popover
          show={popOpen}
          anchor={popAnchor.current}
          position="bottom"
          title="Today's traffic"
          callout={true}
        >
          <div style={{ width: 220 }}>
            <Chart>
              <ChartArea height={120} background="transparent" margin={0} />
              <ChartCategoryAxis>
                <ChartCategoryAxisItem
                  categories={chartCategories}
                  visible={false}
                />
              </ChartCategoryAxis>
              <ChartValueAxis>
                <ChartValueAxisItem visible={false} />
              </ChartValueAxis>
              <ChartSeries>
                <ChartSeriesItem
                  type="line"
                  data={lineData[0].data}
                  markers={{ visible: false }}
                />
                <ChartSeriesItem
                  type="line"
                  data={lineData[1].data}
                  markers={{ visible: false }}
                />
              </ChartSeries>
            </Chart>
            <div className="k-text-subtle mt-1">
              Last 6 months · sessions vs. expenses
            </div>
          </div>
        </Popover>
      )}

      {winOpen && (
        <Window
          title="Confirm release"
          onClose={() => setWinOpen(false)}
          initialWidth={360}
          initialHeight={null}
          modal={true}
        >
          <p className="">
            Promote build <strong>v2.4.0-rc3</strong> to production? Translucent
            title bar, draggable, resizable.
          </p>
          <div className="flex justify-end gap-2 mt-3">
            <Button onClick={() => setWinOpen(false)}>Cancel</Button>
            <Button themeColor="primary" onClick={() => setWinOpen(false)}>
              Release
            </Button>
          </div>
        </Window>
      )}
    </div>
  );
};

/* ─────────────────────────  Inline mini chart helpers  ───────────────────────── */
const DonutCard: React.FC = React.memo(() => (
  <Chart style={{ width: "50%" }}>
    <ChartArea height={165} background="transparent" margin={{ bottom: -10 }} />
    <ChartLegend visible={true} position="bottom" />
    <ChartSeries>
      <ChartSeriesItem
        type="donut"
        data={donutData}
        field="value"
        categoryField="category"
      />
    </ChartSeries>
  </Chart>
));

const PieCard: React.FC = React.memo(() => (
  <Chart style={{ width: "100%" }}>
    <ChartArea background="transparent" margin={{ bottom: -10 }} />
    <ChartLegend visible={true} position="bottom" />
    <ChartSeries>
      <ChartSeriesItem
        type="pie"
        data={pieData}
        field="value"
        categoryField="category"
      />
    </ChartSeries>
  </Chart>
));

const ColumnCard: React.FC = React.memo(() => (
  <Chart style={{ width: "100%" }}>
    <ChartArea height={240} background="transparent" margin={{ bottom: 0 }} />
    <ChartLegend visible={false} />
    <ChartCategoryAxis>
      <ChartCategoryAxisItem categories={barData.map((d) => d.category)} />
    </ChartCategoryAxis>
    <ChartSeries>
      <ChartSeriesItem type="column" data={barData.map((d) => d.value)} />
    </ChartSeries>
  </Chart>
));

const AreaCard: React.FC = React.memo(() => (
  <Chart style={{ width: "100%" }}>
    <ChartArea height={260} background="transparent" margin={{ bottom: -10 }} />
    <ChartLegend visible={true} position="bottom" />
    <ChartCategoryAxis>
      <ChartCategoryAxisItem categories={chartCategories} />
    </ChartCategoryAxis>
    <ChartSeries>
      {chartSeries.map((series, idx) => (
        <ChartSeriesItem
          key={idx}
          type="area"
          data={series.data}
          name={series.name}
        />
      ))}
    </ChartSeries>
  </Chart>
));

const LineCard: React.FC = React.memo(() => (
  <Chart style={{ width: "100%" }}>
    <ChartArea height={200} background="transparent" margin={{ bottom: -10 }} />
    <ChartLegend visible={true} position="bottom" />
    <ChartCategoryAxis>
      <ChartCategoryAxisItem categories={chartCategories} />
    </ChartCategoryAxis>
    <ChartSeries>
      {lineData.map((series, idx) => (
        <ChartSeriesItem
          key={idx}
          type="line"
          data={series.data}
          name={series.name}
          markers={{ visible: true }}
        />
      ))}
    </ChartSeries>
  </Chart>
));

const BarCard: React.FC = React.memo(() => (
  <Chart style={{ width: "100%" }}>
    <ChartArea height={240} background="transparent" margin={{ bottom: 0 }} />
    <ChartLegend visible={false} />
    <ChartCategoryAxis>
      <ChartCategoryAxisItem
        categories={["Anya", "Ravi", "Maya", "Jon", "Lin"]}
      />
    </ChartCategoryAxis>
    <ChartSeries>
      <ChartSeriesItem type="bar" data={[18, 22, 14, 11, 25]} />
    </ChartSeries>
  </Chart>
));

/* ─────────────────────────  RevenueChart  ───────────────────────── */
const revenueData: Record<
  string,
  { categories: string[]; series: { name: string; data: number[] }[] }
> = {
  "30d": {
    categories: chartCategories,
    series: chartSeries,
  },
  "90d": {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    series: [
      { name: "Revenue", data: [28, 42, 35, 50, 48, 60, 55, 70, 65] },
      { name: "Expenses", data: [18, 28, 22, 35, 30, 40, 38, 45, 42] },
    ],
  },
  YTD: {
    categories: ["Q1", "Q2", "Q3", "Q4"],
    series: [
      { name: "Revenue", data: [120, 180, 210, 240] },
      { name: "Expenses", data: [80, 110, 130, 155] },
    ],
  },
};

const RevenueChart: React.FC<{ period: string }> = React.memo(({ period }) => {
  const d = revenueData[period] || revenueData["30d"];
  return (
    <Chart key={period} style={{ width: "100%" }}>
      <ChartArea
        height={260}
        background="transparent"
        margin={{ bottom: -10 }}
      />
      <ChartLegend visible={true} position="bottom" />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem categories={d.categories} />
      </ChartCategoryAxis>
      <ChartSeries>
        {d.series.map((s, i) => (
          <ChartSeriesItem key={i} type="area" data={s.data} name={s.name} />
        ))}
      </ChartSeries>
    </Chart>
  );
});

/* ─────────────────────────  InputsSection  ───────────────────────── */
const InputsSection: React.FC<{ onCreated?: (name: string) => void }> = ({
  onCreated,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState<number | null>(null);
  const [bio, setBio] = useState("");

  const id1 = useId(),
    id2 = useId(),
    id3 = useId(),
    id4 = useId(),
    id5 = useId();

  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <FloatingLabel label="Full name" editorId={id1} editorValue={name}>
          <TextBox
            id={id1}
            value={name}
            onChange={(e) => setName(String(e.value ?? ""))}
          />
        </FloatingLabel>

        <FloatingLabel label="Email address" editorId={id2} editorValue={email}>
          <TextBox
            id={id2}
            type="email"
            value={email}
            onChange={(e) => setEmail(String(e.value ?? ""))}
          />
        </FloatingLabel>

        <FloatingLabel label="Phone" editorId={id3} editorValue={phone}>
          <MaskedTextBox
            id={id3}
            mask="+1 (999) 000-0000"
            value={phone}
            onChange={(e) => setPhone(e.value)}
          />
        </FloatingLabel>

        <FloatingLabel
          label="Age"
          editorId={id4}
          editorValue={String(age ?? "")}
        >
          <NumericTextBox
            id={id4}
            value={age}
            format="n0"
            min={18}
            max={120}
            onChange={(e) => setAge(e.value)}
          />
        </FloatingLabel>
      </div>

      <FloatingLabel
        label="Tell us about yourself"
        editorId={id5}
        editorValue={bio}
      >
        <TextArea
          id={id5}
          rows={3}
          resizable="none"
          value={bio}
          onChange={(e) => setBio(String(e.value ?? ""))}
        />
      </FloatingLabel>

      <div className="flex items-center justify-between gap-3 pt-1">
        <Checkbox label="I agree to the terms" defaultChecked />
        <Button
          themeColor="primary"
          onClick={() => {
            onCreated?.(name || "User");
          }}
        >
          Create account
        </Button>
      </div>
    </div>
  );
};

/* ─────────────────────────  DropdownsSection  ───────────────────────── */
const cities = [
  "Sofia",
  "New York",
  "London",
  "Tokyo",
  "Berlin",
  "Paris",
  "Sydney",
  "Toronto",
];
const cabins = ["Economy", "Premium economy", "Business", "First"];
const extras = [
  { text: "Extra legroom", id: 1 },
  { text: "Lounge access", id: 2 },
  { text: "Priority boarding", id: 3 },
  { text: "Extra baggage", id: 4 },
];

const DropdownsSection: React.FC = () => {
  const [from, setFrom] = useState<string | null>("Sofia");
  const [to, setTo] = useState<string | null>("London");
  const [cabin, setCabin] = useState("Economy");
  const [date, setDate] = useState<Date | null>(new Date());
  const [time, setTime] = useState<Date | null>(new Date());
  const [selectedExtras, setSelectedExtras] = useState<any[]>([extras[0]]);

  const id1 = useId(),
    id2 = useId(),
    id3 = useId(),
    id4 = useId(),
    id5 = useId(),
    id6 = useId();

  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <FloatingLabel label="From" editorId={id1} editorValue={from ?? ""}>
          <AutoComplete
            id={id1}
            data={cities}
            value={from ?? ""}
            onChange={(e) => setFrom(e.value as string)}
          />
        </FloatingLabel>
        <FloatingLabel label="To" editorId={id2} editorValue={to ?? ""}>
          <AutoComplete
            id={id2}
            data={cities}
            value={to ?? ""}
            onChange={(e) => setTo(e.value as string)}
          />
        </FloatingLabel>

        <FloatingLabel
          label="Departure date"
          editorId={id3}
          editorValue={date?.toString()}
        >
          <DatePicker
            id={id3}
            value={date}
            onChange={(e) => setDate(e.value)}
          />
        </FloatingLabel>
        <FloatingLabel
          label="Departure time"
          editorId={id4}
          editorValue={time?.toString()}
        >
          <TimePicker
            id={id4}
            value={time}
            onChange={(e) => setTime(e.value)}
          />
        </FloatingLabel>

        <FloatingLabel label="Cabin" editorId={id5} editorValue={cabin}>
          <DropDownList
            id={id5}
            data={cabins}
            value={cabin}
            onChange={(e) => setCabin(e.value)}
          />
        </FloatingLabel>
        <FloatingLabel label="Class" editorId={id6} editorValue="">
          <ComboBox
            id={id6}
            data={["1 adult", "2 adults", "2 adults + 1 child"]}
            defaultValue="1 adult"
          />
        </FloatingLabel>
      </div>

      <FloatingLabel
        label="Add-ons"
        editorId="extras"
        editorValue={selectedExtras.length ? "x" : ""}
      >
        <MultiSelect
          id="extras"
          data={extras}
          textField="text"
          dataItemKey="id"
          value={selectedExtras}
          onChange={(e) => setSelectedExtras(e.value)}
        />
      </FloatingLabel>

      <div className="flex justify-end pt-1">
        <Button themeColor="primary">Search flights</Button>
      </div>
    </div>
  );
};

/* ─────────────────────────  DateTimeSection  ───────────────────────── */
const DateTimeSection: React.FC = () => {
  const [value, setValue] = useState<Date | null>(new Date());

  return <Calendar className="lg:!w-[520px]" value={value} onChange={(e) => setValue(e.value)} />;
};

/* ─────────────────────────  GridSection  ───────────────────────── */
const GridSection: React.FC = () => {
  const [sort, setSort] = useState<SortDescriptor[]>([
    { field: "Quantity", dir: "asc" },
  ]);
  const [data, setData] = useState(rawGridData);
  const [edit, setEdit] = useState<Record<string, boolean | string[]>>({});
  const [page, setPage] = useState({ skip: 0, take: 5 });
  const [stacked, setStacked] = useState(
    () => window.matchMedia("(max-width: 600px)").matches,
  );

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 600px)");
    const handler = (e: MediaQueryListEvent) => setStacked(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  const handleSortChange = (e: any) => {
    setSort(e.sort);
  };

  const handleEditChange = (e: any) => {
    setEdit(e.edit);
  };

  const handleItemChange = (e: any) => {
    setData(
      data.map((item) =>
        item.ProductID === e.dataItem.ProductID
          ? { ...item, [e.field!]: e.value }
          : item,
      ),
    );
  };

  const ColumnMenu = (props: any) => (
    <div>
      <GridColumnMenuSort {...props} />
      <GridColumnMenuFilter {...props} />
    </div>
  );

  const sortedData = orderBy(data, sort);

  return (
    <Grid
      data={sortedData.slice(page.skip, page.skip + page.take)}
      dataItemKey="ProductID"
      className="k-grid-no-scrollbar flex-1"
      style={{ width: "100%" }}
      sortable={true}
      sort={sort}
      onSortChange={handleSortChange}
      filterable={true}
      navigatable={true}
      editable={{ enabled: true, mode: "incell" }}
      // edit={edit}
      // onEditChange={handleEditChange}
      // onItemChange={handleItemChange}
      adaptive={true}
      adaptiveTitle="Products"
      dataLayoutMode={stacked ? "stacked" : "columns"}
      pageable={{ pageSizes: [5, 10], adaptive: true }}
      skip={page.skip}
      take={page.take}
      total={data.length}
      onPageChange={(e: any) =>
        setPage({ skip: e.page.skip, take: e.page.take })
      }
    >
      <GridToolbar>
        <Button themeColor="primary">Add new</Button>
        <Button fillMode="flat">Export to PDF</Button>
        <Button fillMode="flat">Export to Excel</Button>
      </GridToolbar>
      <GridColumn
        field="ProductID"
        title="Product Id"
        width="90px"
        editable={false}
        filterable={false}
      />
      <GridColumn field="ProductName" title="Name" columnMenu={ColumnMenu} />
      <GridColumn field="Category" title="Category" columnMenu={ColumnMenu} />
      <GridColumn field="Quantity" title="Quantity" columnMenu={ColumnMenu} />
      <GridColumn
        field="UnitPrice"
        title="Unit Price"
        format="{0:c}"
        columnMenu={ColumnMenu}
      />
    </Grid>
  );
};

/* ─────────────────────────  TreeViewSection  ───────────────────────── */
const treeData = [
  {
    text: "Documents",
    items: [
      { text: "Report.pdf" },
      { text: "Summary.docx" },
      { text: "Notes.txt" },
    ],
  },
  {
    text: "Images",
    items: [
      { text: "photo.jpg" },
      { text: "logo.png" },
      { text: "banner.svg" },
    ],
  },
  {
    text: "Videos",
    items: [{ text: "intro.mp4" }, { text: "demo.webm" }],
  },
];

const TreeViewSection: React.FC = () => {
  const [expand, setExpand] = useState<string[]>(["0"]);
  const [select, setSelect] = useState<string[]>([]);
  const [check, setCheck] = useState<string[]>([]);

  return (
    <TreeView
      data={processTreeViewItems(treeData, { expand, select, check })}
      expandIcons={true}
      textField="text"
      checkboxes={true}
      onExpandChange={(e) =>
        setExpand((prev) =>
          prev.includes(e.itemHierarchicalIndex)
            ? prev.filter((id) => id !== e.itemHierarchicalIndex)
            : [...prev, e.itemHierarchicalIndex],
        )
      }
      onItemClick={(e) => setSelect([e.itemHierarchicalIndex])}
      onCheckChange={(e) =>
        setCheck((prev) =>
          prev.includes(e.itemHierarchicalIndex)
            ? prev.filter((id) => id !== e.itemHierarchicalIndex)
            : [...prev, e.itemHierarchicalIndex],
        )
      }
    />
  );
};

/* ─────────────────────────  UploadSection  ───────────────────────── */
const uploadRef = { current: null as any };

const UploadSection: React.FC = () => (
  <div className="flex flex-col gap-6">
    <Card>
      <CardBody>
        <Breadcrumb
          data={[
            { id: "home", text: "Home" },
            { id: "products", text: "Products" },
            { id: "category", text: "Components" },
            { id: "item", text: "Stepper" },
          ]}
        />
      </CardBody>
    </Card>

    <div className="h-full">
      <ExternalDropZone
        uploadRef={() => uploadRef}
        style={{
          border: "2px dashed var(--kendo-color-border)",
        }}
      />
    </div>

    <div>
      {/* <h3 className="text-sm font-semibold mb-3">Upload</h3> */}
      <Upload
        ref={(el) => {
          uploadRef.current = el;
        }}
        batch={false}
        multiple={true}
        defaultFiles={[]}
        withCredentials={false}
        saveUrl="https://demos.telerik.com/kendo-ui/service-v4/upload/save"
        removeUrl="https://demos.telerik.com/kendo-ui/service-v4/upload/remove"
      />
    </div>
  </div>
);

/* ─────────────────────────  TextEditorSection  ───────────────────────── */
const {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  OrderedList,
  UnorderedList,
  Undo,
  Redo,
  Link,
  Unlink,
  FormatBlock,
} = EditorTools;

const TextEditorSection: React.FC = () => (
  <Editor
    tools={[
      [Bold, Italic, Underline],
      [AlignLeft, AlignCenter, AlignRight],
      [OrderedList, UnorderedList],
      [Undo, Redo],
      [Link, Unlink],
      [FormatBlock],
    ]}
    contentStyle={{ height: 140 }}
    defaultContent="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>"
  />
);

/* ─────────────────────────  ChatSection  ───────────────────────── */
const botUser = {
  id: 1,
  name: "Kai",
  avatarUrl: "https://api.dicebear.com/9.x/bottts/svg?seed=Kai",
};
const chatUser = {
  id: 2,
  name: "Alex",
  avatarUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=Alex",
};

const initialMessages = [
  {
    id: 1,
    author: botUser,
    text: "Hey Alex! 👋 How can I help you today?",
    timestamp: new Date(2026, 3, 21, 9, 0),
  },
  {
    id: 2,
    author: chatUser,
    text: "Hi Kai! I have a question about the new theme.",
    timestamp: new Date(2026, 3, 21, 9, 1),
  },
  {
    id: 3,
    author: botUser,
    text: "Sure thing! The new Meridian theme comes with updated design tokens, better color contrast, and improved component spacing. What would you like to know?",
    timestamp: new Date(2026, 3, 21, 9, 1),
    status: "Seen",
  },
  {
    id: 4,
    author: chatUser,
    text: "Can I customize the primary color?",
    timestamp: new Date(2026, 3, 21, 9, 2),
  },
  {
    id: 5,
    author: botUser,
    text: "Absolutely! You can override CSS variables like --kendo-color-primary in your theme file. All components will pick it up automatically.",
    timestamp: new Date(2026, 3, 21, 9, 2),
    suggestedActions: [
      { type: "reply", value: "Show me an example" },
      { type: "reply", value: "What other tokens are available?" },
      { type: "reply", value: "Thanks, that helps!" },
    ],
  },
];

const botReplies = [
  "Great question! Let me look into that for you.",
  "Sure! You can find that in the theme configuration file.",
  "The design tokens are fully customizable — just override the CSS variables.",
  "I'd recommend checking the Kendo UI docs for a step-by-step guide.",
  "That's a popular request! It's supported out of the box.",
  "You can achieve that by combining the Meridian theme with your own overrides.",
  "Absolutely! Dark mode is just a class toggle away.",
];

const ChatSection: React.FC = () => {
  const [messages, setMessages] = useState(initialMessages);

  const handleSend = (e: any) => {
    const userMsg = {
      id: messages.length + 1,
      author: chatUser,
      text: e.message.text,
      timestamp: new Date(),
    };
    const updated = [...messages, userMsg];
    setMessages(updated);

    setTimeout(
      () => {
        const reply = {
          id: updated.length + 1,
          author: botUser,
          text: botReplies[Math.floor(Math.random() * botReplies.length)],
          timestamp: new Date(),
          suggestedActions: [
            { type: "reply" as const, value: "Tell me more" },
            { type: "reply" as const, value: "Thanks!" },
          ],
        };
        setMessages((prev) => [...prev, reply]);
      },
      800 + Math.random() * 700,
    );
  };

  const handleSuggestion = (e: any) => {
    handleSend({ message: { text: e.value || e.title || e.text } });
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Chat
          authorId={chatUser.id}
          messages={messages as any}
          placeholder="Type a message..."
          style={{ height: 550 }}
          onSendMessage={handleSend}
          onActionExecute={handleSuggestion}
        />
      </div>
    </div>
  );
};

/* ─────────────────────────  SpreadsheetSection  ───────────────────────── */
const invoiceSheets = [
  {
    name: "Invoice",
    columns: [
      { width: 50 },
      { width: 90 },
      { width: 180 },
      { width: 80 },
      { width: 90 },
    ],
    rows: [
      {
        cells: [
          { value: "" },
          { value: "" },
          {
            value: "Invoice #52 - 06/23/20",
            bold: true,
            fontSize: 16,
            colSpan: 3,
          },
        ],
      },
      {
        cells: [
          { value: "#", bold: true, background: "#e8e8e8" },
          { value: "Item", bold: true, background: "#e8e8e8" },
          { value: "Description", bold: true, background: "#e8e8e8" },
          { value: "Qty", bold: true, background: "#e8e8e8" },
          { value: "Price", bold: true, background: "#e8e8e8" },
        ],
      },
      {
        cells: [
          { value: 1 },
          { value: "6865511" },
          { value: "Margherita" },
          { value: 1 },
          { value: 25.74, format: "$#,##0.00" },
        ],
      },
      {
        cells: [
          { value: 2 },
          { value: "6496113" },
          { value: "Greek Salad" },
          { value: 2 },
          { value: 21.03, format: "$#,##0.00" },
        ],
      },
      {
        cells: [
          { value: 3 },
          { value: "6895117" },
          { value: "French Fries" },
          { value: 1 },
          { value: 15.54, format: "$#,##0.00" },
        ],
      },
      {
        cells: [
          { value: 4 },
          { value: "6565912" },
          { value: "Pasta Filata" },
          { value: 3 },
          { value: 13.26, format: "$#,##0.00" },
        ],
      },
      {
        cells: [
          { value: 5 },
          { value: "1485711" },
          { value: "Pavlova" },
          { value: 5 },
          { value: 17.45, format: "$#,##0.00" },
        ],
      },
    ],
  },
];

const SpreadsheetSection: React.FC = () => {
  return (
    <div>
      <Spreadsheet
        defaultProps={{ sheets: invoiceSheets as any }}
        style={{ width: "100%", height: 500 }}
      />
    </div>
  );
};

/* ─────────────────────────  SchedulerSection  ───────────────────────── */
const schedulerData = [
  {
    id: 1,
    title: "Team Meeting",
    start: new Date(new Date().setHours(9, 0, 0, 0)),
    end: new Date(new Date().setHours(10, 0, 0, 0)),
  },
  {
    id: 2,
    title: "Lunch Break",
    start: new Date(new Date().setHours(12, 0, 0, 0)),
    end: new Date(new Date().setHours(13, 0, 0, 0)),
  },
  {
    id: 3,
    title: "Review Session",
    start: new Date(new Date().setHours(14, 0, 0, 0)),
    end: new Date(new Date().setHours(15, 30, 0, 0)),
  },
];

const SchedulerSection: React.FC = () => {
  return (
    <div>
      <Scheduler data={schedulerData} defaultDate={new Date()} height={479}>
        <DayView />
        <WeekView />
        <MonthView />
      </Scheduler>
    </div>
  );
};

/* ─────────────────────────  ControlsSection  ───────────────────────── */
const ControlsSection: React.FC = () => {
  const [notifications, setNotifications] = useState(true);
  const [marketing, setMarketing] = useState(false);
  const [newsletter, setNewsletter] = useState(true);
  const [volume, setVolume] = useState(70);
  const [priceRange, setPriceRange] = useState({ start: 25, end: 75 });
  const [rating, setRating] = useState(4);
  const [brightness, setBrightness] = useState(60);
  const [autoSave, setAutoSave] = useState(true);

  const volId = useId(),
    priceId = useId();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <span className="k-text-base">Push notifications</span>
          <Switch
            checked={notifications}
            onChange={(e) => setNotifications(e.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="k-text-base">Marketing emails</span>
          <Switch checked={marketing} onChange={(e) => setMarketing(e.value)} />
        </div>
        <div className="flex items-center justify-between">
          <span className="k-text-base">Weekly newsletter</span>
          <Switch
            checked={newsletter}
            onChange={(e) => setNewsletter(e.value)}
          />
        </div>
      </div>

      <hr
        className="border-0 border-t"
        style={{ borderColor: "var(--kendo-color-border)" }}
      />

      <div className="flex flex-col gap-2">
        <Label>Delivery channel</Label>
        <RadioGroup
          data={[
            { label: "Email", value: "email" },
            { label: "SMS", value: "sms" },
            { label: "In-app", value: "inapp" },
          ]}
          defaultValue="email"
          layout="horizontal"
        />
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <Label editorId={volId}>Volume</Label>
          <span className="k-text-subtle ">{Math.round(volume)}%</span>
        </div>
        <Slider
          id={volId}
          min={0}
          max={100}
          value={volume}
          onChange={(e) => setVolume(e.value)}
          step={1}
          style={{ width: "100%" }}
        />
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <Label editorId={priceId}>Price range</Label>
          <span className="k-text-subtle ">
            ${Math.round(priceRange.start)} – ${Math.round(priceRange.end)}
          </span>
        </div>
        <RangeSlider
          id={priceId}
          min={0}
          max={100}
          value={priceRange}
          onChange={(e) => setPriceRange(e.value)}
          step={1}
          style={{ width: "100%" }}
        />
      </div>

      <hr
        className="border-0 border-t"
        style={{ borderColor: "var(--kendo-color-border)" }}
      />

      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <Label>Brightness</Label>
          <span className="k-text-subtle ">{brightness}%</span>
        </div>
        <Slider
          min={0}
          max={100}
          value={brightness}
          onChange={(e) => setBrightness(Math.round(e.value))}
          step={5}
          style={{ width: "100%" }}
        />
      </div>

      <div className="flex items-center justify-between">
        <span className="k-text-base">Auto-save drafts</span>
        <Switch checked={autoSave} onChange={(e) => setAutoSave(e.value)} />
      </div>

      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <Label>Rate experience</Label>
          <Rating value={rating} onChange={(e) => setRating(e.value ?? 0)} />
        </div>
        <Checkbox label="Remember my preferences" defaultChecked />
      </div>
    </div>
  );
};

/* ─────────────────────────  ColorsSection  ───────────────────────── */
const ColorsSection: React.FC = () => {
  const [primary, setPrimary] = useState("#6366f1");
  const [accent, setAccent] = useState("#ec4899");
  const [neutral, setNeutral] = useState("#475569");

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-5 items-start">
      <ColorGradient
        value={primary}
        onChange={(e) => setPrimary(e.value as string)}
      />

      <div className="flex flex-col gap-4 min-w-[14rem]">
        <div className="flex flex-col gap-1.5">
          <Label>Primary</Label>
          <ColorPicker
            value={primary}
            onChange={(e) => setPrimary(e.value as string)}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label>Accent</Label>
          <ColorPicker
            value={accent}
            onChange={(e) => setAccent(e.value as string)}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label>Neutral</Label>
          <ColorPicker
            value={neutral}
            onChange={(e) => setNeutral(e.value as string)}
          />
        </div>

        <div className="grid grid-cols-3 gap-2 pt-1">
          <div
            className="rounded-md h-10 border"
            style={{
              background: primary,
              borderColor: "var(--kendo-color-border)",
            }}
          />
          <div
            className="rounded-md h-10 border"
            style={{
              background: accent,
              borderColor: "var(--kendo-color-border)",
            }}
          />
          <div
            className="rounded-md h-10 border"
            style={{
              background: neutral,
              borderColor: "var(--kendo-color-border)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

/* ───────────────  Translucency slider (isolated state)  ───────────────── */
const TranslucencySlider: React.FC = () => {
  const [value, setValue] = useState(20);
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--kendo-translucency-base",
      `${value}%`,
    );
  }, [value]);
  return (
    <div className="flex items-center gap-[0.55rem] min-w-full md:min-w-[14rem]">
      <span className="font-medium text-[var(--kendo-color-subtle)] text-[0.8rem] whitespace-nowrap">
        Translucency
      </span>
      <Slider
        min={0}
        max={100}
        step={1}
        value={value}
        onChange={(e: any) => setValue(Math.round(e.value))}
      />
      <span className="font-[var(--kendo-font-family-monospace,monospace)] text-xs text-[var(--kendo-color-on-app-surface)] min-w-[2.5rem] text-right">
        {value}%
      </span>
    </div>
  );
};

/* ───────────────  Account card (isolated notification state)  ─────────── */
const AccountCardSection: React.FC = () => {
  const [accountCreatedName, setAccountCreatedName] = useState<string | null>(
    null,
  );
  return (
    <div style={{ position: "relative" }}>
      <Card>
        <CardHeader className="card-head">
          <Avatar type="text" size="large" themeColor="primary" rounded="full">
            JK
          </Avatar>
          <div>
            <CardTitle>Account</CardTitle>
            <div className="k-text-subtle">Personal information</div>
          </div>
        </CardHeader>
        <CardBody>
          <InputsSection
            onCreated={(n) => {
              setAccountCreatedName(n);
              setTimeout(() => setAccountCreatedName(null), 4000);
            }}
          />
        </CardBody>
      </Card>
      {accountCreatedName && (
        <div style={{ position: "absolute", top: 12, left: 10, zIndex: 10 }}>
          <Notification
            type={{ style: "success", icon: true }}
            closable
            onClose={() => setAccountCreatedName(null)}
          >
            Account created for <strong>{accountCreatedName}</strong>!
          </Notification>
        </div>
      )}
    </div>
  );
};

/* ─────────────────────────  App  ───────────────────────── */
const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [useGradient, setUseGradient] = useState(true);
  const [chartVersion, setChartVersion] = useState(0);
  const colorDebounceRef = useRef(0);
  const toolbarHintRef = useRef<HTMLDivElement>(null);
  const colorHintRef = useRef<HTMLDivElement>(null);
  const showGuide = () => {
    const anims: [HTMLDivElement | null, string][] = [
      [
        toolbarHintRef.current,
        "toolbar-hint-pop 5s cubic-bezier(.16,1,.3,1) 0s both",
      ],
      [
        colorHintRef.current,
        "color-hint-pop 5s cubic-bezier(.16,1,.3,1) 0s both",
      ],
    ];
    anims.forEach(([el, anim]) => {
      if (!el) return;
      el.style.animation = "none";
      void el.offsetWidth;
      el.style.animation = anim;
    });
  };
  const setColor = (prop: string, value: string) => {
    document.documentElement.style.setProperty(prop, value);
    window.clearTimeout(colorDebounceRef.current);
    colorDebounceRef.current = window.setTimeout(
      () => setChartVersion((n) => n + 1),
      250,
    );
  };
  // Interactive states
  const [tabSelected, setTabSelected] = useState(0);
  const [activeChips, setActiveChips] = useState<Record<string, boolean>>({
    Beach: true,
    "City break": true,
    Adventure: true,
    Family: true,
    Solo: true,
  });
  const chipBudgets: Record<string, number> = {
    Beach: 15,
    "City break": 12,
    Adventure: 18,
    Family: 10,
    Solo: 7,
  };
  const budgetUsed = Object.entries(activeChips)
    .filter(([, on]) => on)
    .reduce((sum, [key]) => sum + (chipBudgets[key] || 0), 0);
  const [toolbarDialog, setToolbarDialog] = useState<string | null>(null);
  const [alerts, setAlerts] = useState<
    {
      id: number;
      text: string;
      type: "warning" | "error" | "info" | "success";
    }[]
  >([]);
  const [revenuePeriod, setRevenuePeriod] = useState<"30d" | "90d" | "YTD">(
    "30d",
  );
  const [stepperStep, setStepperStep] = useState(1);

  useEffect(() => {
    document.documentElement.classList.toggle("k-dark", isDark);
    const themeLink = document.getElementById("kendo-theme") as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = isDark
        ? "https://unpkg.com/@progress/kendo-theme-meridian/dist/meridian-main-dark.css"
        : "https://unpkg.com/@progress/kendo-theme-meridian/dist/meridian-main.css";
    }
  }, [isDark]);

  return (
    <div
      className="showcase-page"
      data-dark={isDark ? "" : undefined}
      data-gradient={useGradient ? "" : undefined}
    >
      <div className="showcase-bg" aria-hidden="true" />
      <div className="showcase-aurora" aria-hidden="true" />

      {/* ──────────────── Guide button ──────────────── */}
      <button className="guide-btn" onClick={showGuide} aria-label="Show guide">
        <SvgIcon icon={bookIcon} size="small" />
        Guide
      </button>

      <div className="mx-auto max-w-[110rem] px-6 lg:px-10 pb-32">
        {/* ──────────────── Hero ──────────────── */}
        <header className="relative overflow-hidden pt-16 pb-12">
          <span className="hero-glow" aria-hidden="true" />

          <span className="inline-flex items-center gap-[0.55rem] py-[0.45rem] px-[0.95rem] border border-[var(--kendo-color-border)] rounded-full bg-[color-mix(in_oklch,var(--kendo-color-app-surface)_70%,transparent)] backdrop-blur-md font-[var(--kendo-font-family-monospace,'JetBrains_Mono',monospace)] text-[0.72rem] font-medium tracking-[0.18em] uppercase text-[var(--kendo-color-subtle)]">
            <span className="w-[0.4rem] h-[0.4rem] rounded-full bg-[var(--kendo-color-success)] shadow-[0_0_0_4px_color-mix(in_oklch,var(--kendo-color-success)_22%,transparent)]" />
            Meridian Theme Showcase · Live Preview
          </span>

          <h1 className="hero-title">
            Introducing Meridian.
            <br></br>A new modern theme for Kendo&nbsp;UI.
          </h1>

          <p className="max-w-[56ch] text-[1.15rem] leading-[1.55] text-[var(--kendo-color-subtle)] m-0">
            Adjustable <strong>translucency</strong>, Dark&nbsp;mode, Relative
            colors, <strong></strong>WCAG&nbsp;2.2&nbsp;AA contrast, Adaptable
            design system modules — powered by a expandable sets of design
            tokens.
          </p>

          <div className="flex flex-wrap gap-x-10 gap-y-5 mt-11 font-[var(--kendo-font-family-monospace,monospace)] text-[0.72rem] tracking-[0.14em] uppercase text-[var(--kendo-color-subtle)] [&_strong]:block [&_strong]:mt-[0.35rem] [&_strong]:font-[var(--kendo-font-family)] [&_strong]:text-[1.15rem] [&_strong]:font-bold [&_strong]:tracking-[-0.01em] [&_strong]:normal-case [&_strong]:text-[var(--kendo-color-on-app-surface)]">
            <span>
              Colors<strong>Relative</strong>
            </span>
            <span>
              Components<strong>140+</strong>
            </span>

            <span>
              A11y<strong>WCAG 2.2 AA</strong>
            </span>
          </div>
        </header>

        {/* ──────────────── Bento (gradient lives here) ──────────────── */}
        <main>
          <div className="bento-container">
            <div className="bento-glow" aria-hidden="true" />

            <div className="relative z-[1] flex flex-col gap-5">
              <Scene>
                <div className="grid grid-cols-12 gap-5 grid-flow-dense items-start auto-rows-[minmax(0,auto)]">
                  {/* Left column: booking form + cabin donut */}
                  <div className="col-span-12 bento:col-span-7 h-full flex flex-col gap-5 min-w-0">
                    <GridSection />
                    <Card style={{ "--kendo-translucency-base": "0%" }}>
                      <CardHeader className="card-head">
                        <CardTitle>Trip tags & budget</CardTitle>
                        <span className="k-text-subtle">
                          {budgetUsed}% used
                        </span>
                      </CardHeader>
                      <CardBody>
                        <div className="flex flex-wrap gap-2">
                          {Object.entries(activeChips)
                            .filter(([, on]) => on)
                            .map(([chip]) => (
                              <Chip
                                key={chip}
                                text={chip}
                                themeColor={
                                  chip === "Beach"
                                    ? "info"
                                    : chip === "City break"
                                      ? "success"
                                      : chip === "Adventure"
                                        ? "warning"
                                        : chip === "Family"
                                          ? "error"
                                          : "base"
                                }
                                removable
                                onRemove={() => {
                                  setActiveChips((prev) => ({
                                    ...prev,
                                    [chip]: false,
                                  }));
                                }}
                              />
                            ))}
                          {Object.values(activeChips).some((v) => !v) && (
                            <Button
                              size="small"
                              fillMode="flat"
                              onClick={() =>
                                setActiveChips({
                                  Beach: true,
                                  "City break": true,
                                  Adventure: true,
                                  Family: true,
                                  Solo: true,
                                })
                              }
                            >
                              Reset all
                            </Button>
                          )}
                        </div>
                        <ProgressBar
                          value={budgetUsed}
                          ariaLabel="Budget usage"
                          className="mt-3"
                        />
                      </CardBody>
                    </Card>
                  </div>

                  {/* Right column: calendar + tags + travellers */}
                  <div className="col-span-12 bento:col-span-5 h-full flex flex-col gap-5 min-w-0">
                    <Card style={{ "--kendo-translucency-base": "0%" }}>
                      <CardHeader className="card-head">
                        <CardTitle>Sessions vs expenses</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <LineCard key={chartVersion} />
                      </CardBody>
                    </Card>

                    <Toolbar>
                      <ToolbarItem>
                        <Button
                          svgIcon={homeIcon}
                          onClick={() => setToolbarDialog("home")}
                        >
                          Home
                        </Button>
                      </ToolbarItem>
                      <ToolbarItem>
                        <Button
                          svgIcon={searchIcon}
                          onClick={() => setToolbarDialog("search")}
                        >
                          Search
                        </Button>
                      </ToolbarItem>
                      <ToolbarItem>
                        <Button
                          svgIcon={folderIcon}
                          onClick={() => setToolbarDialog("files")}
                        >
                          Files
                        </Button>
                      </ToolbarItem>
                      <ToolbarSeparator />
                      <ToolbarItem>
                        <Button
                          svgIcon={gearIcon}
                          fillMode="flat"
                          onClick={() => setToolbarDialog("settings")}
                        >
                          Settings
                        </Button>
                      </ToolbarItem>
                      <ToolbarSpacer />
                      <ToolbarItem>
                        <Button
                          themeColor="primary"
                          svgIcon={plusIcon}
                          onClick={() => setToolbarDialog("new")}
                        >
                          New
                        </Button>
                      </ToolbarItem>
                    </Toolbar>

                    <Card
                      className="flex-1"
                      style={{ "--kendo-translucency-base": "0%" }}
                    >
                      <CardHeader className="card-head">
                        <CardTitle>Cabin breakdown</CardTitle>
                        <span className="k-text-subtle">last 30 days</span>
                      </CardHeader>
                      <CardBody>
                        <div className="flex gap-6 h-full">
                          <DonutCard key={chartVersion} />

                          <div
                            className="flex flex-col w-[45%] gap-2 mt-3"
                            style={{
                              borderTop: "1px solid var(--kendo-color-border)",
                              paddingTop: "0.75rem",
                            }}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span
                                  style={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: "50%",
                                    background: "var(--kendo-color-series-a)",
                                  }}
                                />
                                <span className="">Mobile</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="k-font-bold">55%</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span
                                  style={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: "50%",
                                    background:
                                      "var(--kendo-color-series-b, var(--kendo-color-secondary))",
                                  }}
                                />
                                <span className="">Desktop</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="k-font-bold">30%</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span
                                  style={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: "50%",
                                    background:
                                      "var(--kendo-color-series-c, var(--kendo-color-tertiary))",
                                  }}
                                />
                                <span className="">Tablet</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="k-font-bold">15%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              </Scene>
              <Scene>
                <div
                  className="grid grid-cols-12 gap-5 grid-flow-dense auto-rows-[minmax(0,auto)]"
                  style={{ alignItems: "stretch" }}
                >
                  <div className="flex flex-col col-span-12 md:col-span-6 bento:col-span-4 gap-4">
                    <AccountCardSection />
                    <Card className="h-full">
                      <CardBody>
                        <TabStrip
                          selected={tabSelected}
                          onSelect={(e) => setTabSelected(e.selected)}
                          animation={true}
                        >
                          <TabStripTab title="Quick toggles">
                            <div className="flex flex-col gap-3">
                              <div className="flex items-center gap-10 justify-between">
                                <span className="">Two-factor auth</span>
                                <Switch defaultChecked size="small" />
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="">Show online status</span>
                                <Switch defaultChecked={false} size="small" />
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="">Desktop alerts</span>
                                <Switch defaultChecked size="small" />
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="">Sound effects</span>
                                <Switch defaultChecked={false} size="small" />
                              </div>
                            </div>
                          </TabStripTab>
                          <TabStripTab title="Privacy">
                            <div className="flex flex-col gap-3">
                              <Checkbox
                                label="Share usage analytics"
                                defaultChecked
                              />
                              <Checkbox
                                label="Allow third-party cookies"
                                defaultChecked={false}
                              />
                              <Checkbox label="Crash reports" defaultChecked />
                              <div className="pt-1">
                                <Button size="small" fillMode="outline">
                                  Clear browsing data
                                </Button>
                              </div>
                            </div>
                          </TabStripTab>
                          <TabStripTab title="Integrations">
                            <div className="flex flex-col gap-3">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <Avatar
                                    type="text"
                                    size="small"
                                    themeColor="secondary"
                                    rounded="full"
                                  >
                                    Sl
                                  </Avatar>
                                  <span className="">Slack</span>
                                </div>
                                <span
                                  className="k-badge k-badge-solid k-badge-md k-badge-rounded k-badge-success"
                                  style={{
                                    position: "relative",
                                    transform: "none",
                                  }}
                                >
                                  Connected
                                </span>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <Avatar
                                    type="text"
                                    size="small"
                                    themeColor="base"
                                    rounded="full"
                                  >
                                    GH
                                  </Avatar>
                                  <span className="">GitHub</span>
                                </div>
                                <span
                                  className="k-badge k-badge-solid k-badge-md k-badge-rounded k-badge-success"
                                  style={{
                                    position: "relative",
                                    transform: "none",
                                  }}
                                >
                                  Connected
                                </span>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <Avatar
                                    type="text"
                                    size="small"
                                    themeColor="tertiary"
                                    rounded="full"
                                  >
                                    Fi
                                  </Avatar>
                                  <span className="">Figma</span>
                                </div>
                                <Button size="small" fillMode="flat">
                                  Connect
                                </Button>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <Avatar
                                    type="text"
                                    size="small"
                                    themeColor="base"
                                    rounded="full"
                                  >
                                    Li
                                  </Avatar>
                                  <span className="">Linear</span>
                                </div>
                                <Button size="small" fillMode="flat">
                                  Connect
                                </Button>
                              </div>
                            </div>
                          </TabStripTab>
                        </TabStrip>
                      </CardBody>
                    </Card>
                  </div>

                  <Card
                    className="col-span-12 md:col-span-6 bento:col-span-4"
                    style={{ "--kendo-translucency-base": "0%" }}
                  >
                    <CardHeader className="card-head">
                      <BadgeContainer>
                        <Avatar
                          type="icon"
                          size="large"
                          rounded="full"
                          themeColor="secondary"
                        >
                          <SvgIcon icon={bellIcon} />
                        </Avatar>
                        <Badge themeColor="error" size="small">
                          3
                        </Badge>
                      </BadgeContainer>
                      <div>
                        <CardTitle>Notifications</CardTitle>
                        <div className="k-text-subtle">Channels & alerts</div>
                      </div>
                    </CardHeader>
                    <CardBody>
                      <ControlsSection />
                    </CardBody>
                  </Card>

                  <div className="col-span-12 bento:col-span-4">
                    <MobilePreview />
                  </div>
                </div>
              </Scene>
              {/* ════════ SCENE 2 — Mission control ════════ */}
              <Scene>
                <div className="flex flex-col gap-5">
                  {/* KPI strip */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                    <KpiTile
                      key={`rev-${chartVersion}`}
                      label="Revenue"
                      value="$48.2k"
                      delta={12.4}
                      gauge={72}
                      tone="series-a"
                    />
                    <KpiTile
                      key={`usr-${chartVersion}`}
                      label="Active users"
                      value="9,348"
                      delta={5.1}
                      gauge={64}
                      tone="series-b"
                    />
                    <KpiTile
                      key={`cvr-${chartVersion}`}
                      label="Conversion"
                      value="3.42%"
                      delta={-1.8}
                      gauge={42}
                      tone="series-c"
                    />
                    <KpiTile
                      key={`nps-${chartVersion}`}
                      label="NPS"
                      value="68"
                      delta={4.0}
                      gauge={86}
                      tone="series-d"
                    />
                  </div>

                  {/* Revenue trend full-width */}
                  <div className="grid grid-cols-12 gap-5 grid-flow-dense items-start auto-rows-[minmax(0,auto)]">
                    <Card
                      className="col-span-12 bento:col-span-8 h-full"
                      style={{ "--kendo-translucency-base": "0%" }}
                    >
                      <CardHeader className="card-head">
                        <CardTitle>Revenue trend</CardTitle>
                        <ButtonGroup>
                          <Button
                            togglable={true}
                            selected={revenuePeriod === "30d"}
                            onClick={() => setRevenuePeriod("30d")}
                          >
                            30d
                          </Button>
                          <Button
                            togglable={true}
                            selected={revenuePeriod === "90d"}
                            onClick={() => setRevenuePeriod("90d")}
                          >
                            90d
                          </Button>
                          <Button
                            togglable={true}
                            selected={revenuePeriod === "YTD"}
                            onClick={() => setRevenuePeriod("YTD")}
                          >
                            YTD
                          </Button>
                        </ButtonGroup>
                      </CardHeader>
                      <CardBody>
                        <RevenueChart
                          key={chartVersion}
                          period={revenuePeriod}
                        />
                      </CardBody>
                    </Card>

                    <div className="col-span-12 bento:col-span-4 flex flex-col gap-5">
                      <Card>
                        <CardBody>
                          <div className="flex items-center justify-between">
                            <BadgeContainer>
                              <Button
                                svgIcon={bellIcon}
                                onClick={() => {
                                  const types = [
                                    "warning",
                                    "error",
                                    "info",
                                    "success",
                                  ] as const;
                                  const texts = [
                                    "CPU usage exceeded 85% threshold",
                                    "Deployment failed on staging",
                                    "New team member joined the workspace",
                                    "Build v2.4.0 deployed successfully",
                                  ];
                                  const idx = Math.floor(
                                    Math.random() * types.length,
                                  );
                                  const newAlert = {
                                    id: Date.now(),
                                    text: texts[idx],
                                    type: types[idx],
                                  };
                                  setAlerts((prev) => [...prev, newAlert]);
                                  setTimeout(
                                    () =>
                                      setAlerts((prev) =>
                                        prev.filter(
                                          (a) => a.id !== newAlert.id,
                                        ),
                                      ),
                                    4000,
                                  );
                                }}
                              >
                                Alerts
                              </Button>
                              <Badge themeColor="error" size="small">
                                {2 + alerts.length}
                              </Badge>
                            </BadgeContainer>
                            <div className="flex items-center gap-2">
                              <Loader
                                size="small"
                                type="infinite-spinner"
                                themeColor="primary"
                              />
                              <span className="k-text-subtle">Syncing…</span>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                      <Card style={{ "--kendo-translucency-base": "0%" }}>
                        <CardHeader className="card-head">
                          <CardTitle>System health</CardTitle>
                        </CardHeader>
                        <CardBody>
                          <div className="flex items-center gap-8 p-4">
                            <LinearGauge
                              key={chartVersion}
                              pointer={{ value: 78 }}
                              scale={{
                                min: 0,
                                max: 100,
                                majorUnit: 25,
                                vertical: true,
                                ranges: [
                                  {
                                    from: 0,
                                    to: 40,
                                    color: "var(--kendo-color-series-a)",
                                  },
                                  {
                                    from: 40,
                                    to: 70,
                                    color: "var(--kendo-color-series-b)",
                                  },
                                  {
                                    from: 70,
                                    to: 100,
                                    color: "var(--kendo-color-series-c)",
                                  },
                                ],
                              }}
                              style={{ width: 60, height: 167 }}
                            />
                            <div className="flex-1 flex flex-col gap-2 min-w-0">
                              <div>
                                <div className="flex justify-between k-text-xs">
                                  <span>CPU</span>
                                  <span>54%</span>
                                </div>
                                <ProgressBar value={54} ariaLabel="CPU usage" />
                              </div>
                              <div>
                                <div className="flex justify-between k-text-xs">
                                  <span>Memory</span>
                                  <span>71%</span>
                                </div>
                                <ProgressBar
                                  value={71}
                                  ariaLabel="Memory usage"
                                />
                              </div>
                              <div>
                                <div className="flex justify-between k-text-xs">
                                  <span>Disk</span>
                                  <span>38%</span>
                                </div>
                                <ChunkProgressBar
                                  value={38}
                                  chunkCount={5}
                                  ariaLabel="Disk usage"
                                />
                              </div>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </div>
                  </div>
                </div>
              </Scene>
              {/* ════════ SCENE 3 — Workspace ════════ */}
              <Scene>
                <div className="flex flex-col gap-5">
                  <div className="grid grid-cols-12 gap-5 grid-flow-dense items-start auto-rows-[minmax(0,auto)]">
                    <div className="col-span-12 bento:col-span-4 flex flex-col gap-5 min-w-0">
                      <Card>
                        <CardHeader className="card-head">
                          <CardTitle>Conversation</CardTitle>
                          <Chip
                            text="Online"
                            themeColor="success"
                            size="small"
                          />
                        </CardHeader>
                        <CardBody>
                          <ChatSection />
                        </CardBody>
                      </Card>
                    </div>

                    <div className="col-span-12 bento:col-span-8 flex flex-col gap-5 min-w-0">
                      {/* Scheduler directly on gradient */}
                      <SchedulerSection />
                      <Card style={{ "--kendo-translucency-base": "0%" }}>
                        <CardHeader className="card-head">
                          <CardTitle>Onboarding progress</CardTitle>
                        </CardHeader>
                        <CardBody>
                          <Stepper
                            ref={(inst: any) => {
                              const el = inst?.element ?? inst?._element;
                              if (el)
                                el.setAttribute(
                                  "aria-label",
                                  "Onboarding progress",
                                );
                            }}
                            value={stepperStep}
                            onChange={(e: any) => setStepperStep(e.value)}
                            items={[
                              { label: "Account", svgIcon: userIcon },
                              { label: "Details", svgIcon: clipboardTextIcon },
                              { label: "Payment", svgIcon: dollarIcon },
                              { label: "Confirm", svgIcon: checkIcon },
                            ]}
                          />
                        </CardBody>
                      </Card>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-5 grid-flow-dense items-start auto-rows-[minmax(0,auto)]">
                    <Card
                      className="col-span-12 bento:col-span-8 h-full"
                      style={{ "--kendo-translucency-base": "0%" }}
                    >
                      <CardHeader className="card-head">
                        <CardTitle>Tasks closed this week</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <BarCard key={chartVersion} />
                      </CardBody>
                    </Card>

                    <div className="col-span-12 bento:col-span-4 flex flex-col gap-5 min-w-0">
                      <Card>
                        <CardHeader className="card-head">
                          <CardTitle>Try the overlays</CardTitle>
                        </CardHeader>
                        <CardBody>
                          <OverlaysDemo />
                        </CardBody>
                      </Card>
                      <Card style={{ "--kendo-translucency-base": "0%" }}>
                        <CardHeader className="card-head">
                          <CardTitle>Quick stats</CardTitle>
                        </CardHeader>
                        <CardBody>
                          <div className="flex flex-col gap-2.5">
                            <div className="flex items-center justify-between">
                              <span className="">Unread</span>
                              <span
                                className="k-badge k-badge-solid k-badge-md k-badge-rounded k-badge-error"
                                style={{
                                  position: "relative",
                                  transform: "none",
                                }}
                              >
                                12
                              </span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="">Starred</span>
                              <span
                                className="k-badge k-badge-solid k-badge-md k-badge-rounded k-badge-warning"
                                style={{
                                  position: "relative",
                                  transform: "none",
                                }}
                              >
                                4
                              </span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="">Drafts</span>
                              <span
                                className="k-badge k-badge-solid k-badge-md k-badge-rounded k-badge-info"
                                style={{
                                  position: "relative",
                                  transform: "none",
                                }}
                              >
                                2
                              </span>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </div>
                  </div>
                </div>
              </Scene>
              {/* ════════ SCENE 4 — Inbox & compose ════════ */}
              <Scene>
                <div className="grid grid-cols-12 gap-5 grid-flow-dense items-start auto-rows-[minmax(0,auto)]">
                  <div className="col-span-12 md:col-span-6 flex h-full flex-col gap-5 min-w-0">
                    {/* Drawer directly on gradient */}
                    <DrawerPreview />
                  </div>

                  {/* Upload directly on gradient */}
                  <div className="col-span-12 md:col-span-6">
                    <UploadSection />
                  </div>
                  {/* Editor directly on gradient */}

                  <div className="col-span-12 md:col-span-6">
                    <SpreadsheetSection />
                  </div>

                  <div className="col-span-12 md:col-span-6 flex h-full flex-col gap-6">
                    <TextEditorSection />

                    <Card
                      className="col-span-12 md:col-span-6 h-full"
                      style={{ "--kendo-translucency-base": "0%" }}
                    >
                      <CardBody>
                        <PieCard key={chartVersion} />
                      </CardBody>
                    </Card>
                  </div>
                </div>
              </Scene>
              {/* ════════ SCENE 6 — Financials ════════ */}
              <Scene>
                <div className="flex flex-col lg:flex-row gap-5">
                  <Card
                    className="w-full"
                    style={{ "--kendo-translucency-base": "0%" }}
                  >
                    <CardHeader className="card-head">
                      <CardTitle>Quarterly</CardTitle>
                      <span className="k-text-subtle">YoY</span>
                    </CardHeader>
                    <CardBody>
                      <ColumnCard key={chartVersion} />
                    </CardBody>
                  </Card>
                  <DateTimeSection />
                </div>
              </Scene>
            </div>
          </div>
        </main>

        {/* ──────────────── CTA ──────────────── */}
        <aside
          aria-label="Call to action"
          className="mt-16 p-7 px-9 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center rounded-[var(--kendo-border-radius-xxxl,1.5rem)] border border-[var(--kendo-color-border)] backdrop-blur-xl bg-[linear-gradient(135deg,color-mix(in_oklch,var(--kendo-color-app-surface)_85%,transparent),color-mix(in_oklch,var(--kendo-color-app-surface)_55%,transparent))] shadow-[0_20px_50px_-30px_rgba(15,23,42,0.25)]"
        >
          <div>
            <h2 className="m-0 mb-[0.4rem] text-2xl font-bold tracking-[-0.015em] text-[var(--kendo-color-on-app-surface)]">
              One theme. Every framework.
            </h2>
            <p className="m-0 text-[var(--kendo-color-subtle)] max-w-[50ch]">
              The same Meridian theme paints React, Angular, Vue, Blazor and
              jQuery components — and Figma, too.
            </p>
          </div>
          <a
            className="inline-flex items-center gap-2 px-[1.4rem] py-[0.85rem] rounded-[var(--kendo-border-radius-lg,0.75rem)] bg-[var(--kendo-color-primary)] text-[var(--kendo-color-on-primary)] font-semibold no-underline transition-[transform,box-shadow] duration-200 hover:-translate-y-px shadow-[0_12px_24px_-14px_color-mix(in_oklch,var(--kendo-color-primary)_70%,black)] hover:shadow-[0_16px_32px_-12px_color-mix(in_oklch,var(--kendo-color-primary)_60%,black)]"
            href="https://www.telerik.com/design-system/docs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore the docs →
          </a>
        </aside>

        {/* ──────────────── Footer ──────────────── */}
        <footer className="mt-16 pt-10 pb-4 border-t border-[var(--kendo-color-border)] grid grid-cols-2 md:grid-cols-4 gap-6 text-[var(--kendo-color-subtle)] text-[0.85rem]">
          <div>
            <strong className="block mb-1 text-[var(--kendo-color-on-app-surface)] font-semibold">
              Kendo UI
            </strong>
            A Progress product · © 2026
          </div>
          <div>
            <strong className="block mb-1 text-[var(--kendo-color-on-app-surface)] font-semibold">
              Resources
            </strong>
            <a
              href="https://www.telerik.com/design-system/docs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Docs
            </a>{" "}
            ·{" "}
            <a
              href="https://www.telerik.com/design-system/docs/themes/get-started/introduction/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Themes
            </a>{" "}
            ·{" "}
            <a
              href="https://www.telerik.com/design-system/docs/resources/figma-ui-kits/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Figma kit
            </a>{" "}
            ·{" "}
            <a
              href="https://github.com/telerik/kendo-themes"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          <div>
            <strong className="block mb-1 text-[var(--kendo-color-on-app-surface)] font-semibold">
              Feedback
            </strong>
            <a
              href="https://github.com/telerik/kendo-theme-spotlight/issues/2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Share feedback
            </a>
          </div>
          <div>
            <strong className="block mb-1 text-[var(--kendo-color-on-app-surface)] font-semibold">
              Build
            </strong>
            Theme Showcase · React {React.version}
          </div>
        </footer>
      </div>

      {/* ──────────────── Floating toolbar ──────────────── */}
      <aside aria-label="Appearance controls">
        <div className="floating-toolbar__hint" ref={toolbarHintRef}>
          <SvgIcon icon={sparklesIcon} size="small" /> Use the toolbar below to
          customize appearance
        </div>
        <div className="floating-toolbar">
          <button
            onClick={() => setIsDark(!isDark)}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[var(--kendo-color-border)] bg-[var(--kendo-color-app-surface)] text-[var(--kendo-color-on-app-surface)] cursor-pointer transition-all duration-200 hover:border-[var(--kendo-color-primary)] hover:bg-[color-mix(in_oklch,var(--kendo-color-primary)_8%,var(--kendo-color-app-surface))] hover:shadow-[0_0_0_3px_color-mix(in_oklch,var(--kendo-color-primary)_14%,transparent)]"
            aria-label="Toggle dark mode"
            title={isDark ? "Switch to light" : "Switch to dark"}
          >
            {isDark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <div className="w-px h-6 bg-[var(--kendo-color-border)] shrink-0" />

          <div className="flex items-center gap-[0.55rem]">
            <span className="font-medium text-[var(--kendo-color-subtle)] text-[0.8rem] whitespace-nowrap">
              Gradient
            </span>
            <Switch
              checked={useGradient}
              onChange={(e) => setUseGradient(e.value)}
              size="small"
            />
          </div>

          <div className="w-px h-6 bg-[var(--kendo-color-border)] shrink-0" />

          <TranslucencySlider />
        </div>
      </aside>

      {/* ──────────────── Color toolbar (vertical, right) ──────────────── */}
      <aside aria-label="Color customization">
        <div className="color-toolbar__hint" ref={colorHintRef}>
          <SvgIcon icon={paletteIcon} size="small" /> Use the picker to change
          Primary, Secondary and Series colors
        </div>
        <div className="color-toolbar">
          <label className="color-toolbar__swatch" title="Primary color">
            <span
              className="color-toolbar__ball"
              style={{ background: "var(--kendo-color-primary)" }}
            />
            <input
              type="color"
              className="color-toolbar__input"
              defaultValue="#5e35b1"
              onChange={(e) =>
                setColor("--kendo-color-primary", e.target.value)
              }
            />
            <span className="color-toolbar__tip">Primary</span>
          </label>
          <label className="color-toolbar__swatch" title="Secondary color">
            <span
              className="color-toolbar__ball"
              style={{ background: "var(--kendo-color-secondary)" }}
            />
            <input
              type="color"
              className="color-toolbar__input"
              defaultValue="#e91e63"
              onChange={(e) =>
                setColor("--kendo-color-secondary", e.target.value)
              }
            />
            <span className="color-toolbar__tip">Secondary</span>
          </label>
          <label className="color-toolbar__swatch" title="Series color">
            <span
              className="color-toolbar__ball"
              style={{ background: "var(--kendo-color-series-a)" }}
            />
            <input
              type="color"
              className="color-toolbar__input"
              defaultValue="#6232cc"
              onChange={(e) => {
                setColor("--kendo-color-series", e.target.value);
                setColor("--kendo-color-series-a", e.target.value);
              }}
            />
            <span className="color-toolbar__tip">Series</span>
          </label>
        </div>
      </aside>

      {/* ──────────────── Toolbar dialogs ──────────────── */}
      {toolbarDialog && (
        <Window
          title={
            toolbarDialog === "home"
              ? "Dashboard Home"
              : toolbarDialog === "search"
                ? "Search"
                : toolbarDialog === "files"
                  ? "File Browser"
                  : toolbarDialog === "settings"
                    ? "Settings"
                    : "Create New Item"
          }
          onClose={() => setToolbarDialog(null)}
          initialWidth={420}
          initialHeight={null}
        >
          {toolbarDialog === "home" && (
            <div className="flex flex-col gap-3 p-2">
              <p className="">
                Welcome to the dashboard. Here's a quick overview of your
                workspace.
              </p>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="k-text-lg k-font-bold">24</span>
                  <span className="k-text-subtle">Projects</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="k-text-lg k-font-bold">148</span>
                  <span className="k-text-subtle">Tasks</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="k-text-lg k-font-bold">12</span>
                  <span className="k-text-subtle">Members</span>
                </div>
              </div>
            </div>
          )}
          {toolbarDialog === "search" && (
            <div className="flex flex-col gap-3 p-2">
              <TextBox placeholder="Search projects, files, people..." />
              <div className="k-text-subtle">
                Recent: Dashboard, Theme tokens, Sprint 14
              </div>
            </div>
          )}
          {toolbarDialog === "files" && (
            <div className="flex flex-col gap-3 p-2">
              <TreeViewSection />
            </div>
          )}
          {toolbarDialog === "settings" && (
            <div className="flex flex-col gap-3 p-2">
              <div className="flex items-center justify-between">
                <span className="">Dark mode</span>
                <Switch checked={isDark} onChange={(e) => setIsDark(e.value)} />
              </div>
              <div className="flex items-center justify-between">
                <span className="">Gradient</span>
                <Switch
                  checked={useGradient}
                  onChange={(e) => setUseGradient(e.value)}
                />
              </div>
            </div>
          )}
          {toolbarDialog === "new" && (
            <div className="flex flex-col gap-3 p-2">
              <p className="">What would you like to create?</p>
              <div className="flex flex-wrap gap-2">
                <Button
                  svgIcon={folderIcon}
                  onClick={() => setToolbarDialog(null)}
                >
                  Project
                </Button>
                <Button
                  svgIcon={calendarIcon}
                  onClick={() => setToolbarDialog(null)}
                >
                  Event
                </Button>
                <Button
                  svgIcon={envelopeIcon}
                  onClick={() => setToolbarDialog(null)}
                >
                  Message
                </Button>
              </div>
            </div>
          )}
        </Window>
      )}

      {/* ──────────────── Alert notifications ──────────────── */}
      <NotificationGroup
        style={{ position: "fixed", bottom: 16, right: 16, zIndex: 10000 }}
      >
        <Fade>
          {alerts.map((alert) => (
            <Notification
              key={alert.id}
              type={{ style: alert.type, icon: true }}
              closable
              onClose={() =>
                setAlerts((prev) => prev.filter((a) => a.id !== alert.id))
              }
              style={{ marginBottom: 8 }}
            >
              {alert.text}
            </Notification>
          ))}
        </Fade>
      </NotificationGroup>
    </div>
  );
};

export default App;
