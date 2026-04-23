import {
  useState,
  useCallback,
  useMemo,
  createContext,
  useContext,
} from "react";
import {
  Scheduler,
  DayView,
  WeekView,
  MonthView,
  AgendaView,
  SchedulerItem,
  SchedulerHeader,
} from "@progress/kendo-react-scheduler";
import type {
  SchedulerItemProps,
  SchedulerItemMouseEvent,
  SchedulerHeaderProps,
} from "@progress/kendo-react-scheduler";
import { Button, SegmentedControl } from "@progress/kendo-react-buttons";
import { TextBox, TextArea, Checkbox } from "@progress/kendo-react-inputs";
import { Dialog, DialogActionsBar } from "@progress/kendo-react-dialogs";
import { SvgIcon } from "@progress/kendo-react-common";
import SearchInputPrefix from "../components/SearchInputPrefix";
import { Label, Error } from "@progress/kendo-react-labels";
import StatusBadge from "../components/StatusBadge";
import ExpandingActionButton from "../components/ExpandingActionButton";
import {
  appBarCalendarIcon,
  appBarPatientsIcon,
  dialogClockIcon,
  dialogCollapseIcon,
  dialogExpandIcon,
  dialogLocationIcon,
} from "../icons/customIcons";
import {
  schedulerData,
  dailyTasks,
  patients,
  type DailyTask,
} from "../data/sampleData";

interface SchedulerEvent {
  id: number;
  title: string;
  start: Date;
  end: Date;
  description: string;
  eventType?: string;
}

const formatTime = (date: Date) =>
  date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });

const formatDialogTime = (date: Date) => formatTime(date).replace(":00 ", " ");

const schedulerPatientFallbackById: Record<
  number,
  { name: string; age: number; gender: string }
> = {
  1: { name: "Sarah Mitchel", age: 34, gender: "Female" },
  2: { name: "Michael Carter", age: 36, gender: "Male" },
  3: { name: "Emily Rodrigues", age: 33, gender: "Female" },
  4: { name: "David Kim", age: 41, gender: "Male" },
  5: { name: "Laura Bennett", age: 39, gender: "Female" },
};

const SelectEventContext = createContext<
  ((event: SchedulerEvent) => void) | null
>(null);

function CustomSchedulerItem(props: Readonly<SchedulerItemProps>) {
  const selectEvent = useContext(SelectEventContext);
  const { dataItem } = props;
  const eventType = dataItem.eventType || "primary";
  const isPrimary = eventType === "primary";
  const timeRange = `${formatTime(dataItem.start)}–${formatTime(dataItem.end)}`;

  const handleClick = (e: SchedulerItemMouseEvent) => {
    e.syntheticEvent?.preventDefault();
    selectEvent?.(dataItem as SchedulerEvent);
  };

  return (
    <SchedulerItem
      {...props}
      onClick={handleClick}
      className={`scheduler-event-${isPrimary ? "solid" : "light"}`}
      style={{ ...props.style, borderRadius: "var(--kendo-border-radius-lg)" }}
    >
      <div className="scheduler-event-content">
        <div className="scheduler-event-title">{dataItem.title}</div>
        <div className="scheduler-event-meta">
          {timeRange} · {dataItem.description}
        </div>
      </div>
    </SchedulerItem>
  );
}

function CustomSchedulerHeader(props: Readonly<SchedulerHeaderProps>) {
  return <SchedulerHeader {...props} overflow="scroll" />;
}

export default function Schedule() {
  const [tasks, setTasks] = useState<DailyTask[]>(dailyTasks);
  const [taskSearch, setTaskSearch] = useState("");
  const [showAddTask, setShowAddTask] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<SchedulerEvent | null>(
    null,
  );
  const [showPatientInfo, setShowPatientInfo] = useState(false);

  const handleSelectEvent = useCallback((event: SchedulerEvent) => {
    setSelectedEvent(event);
    setShowPatientInfo(false);
  }, []);

  // Add task form
  const [newTaskText, setNewTaskText] = useState("");
  const [newTaskPriority, setNewTaskPriority] = useState("Medium");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [taskError, setTaskError] = useState("");

  const filteredTasks = useMemo(
    () =>
      tasks.filter((t) =>
        t.text.toLowerCase().includes(taskSearch.toLowerCase()),
      ),
    [tasks, taskSearch],
  );

  const toggleTask = useCallback((id: number) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  }, []);

  const handleAddTask = () => {
    if (!newTaskText.trim()) {
      setTaskError("Task name is required.");
      return;
    }
    const newTask: DailyTask = {
      id: Math.max(...tasks.map((t) => t.id)) + 1,
      text: newTaskText.trim(),
      priority: newTaskPriority as DailyTask["priority"],
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
    setNewTaskText("");
    setNewTaskPriority("Medium");
    setNewTaskDescription("");
    setTaskError("");
    setShowAddTask(false);
  };

  const getPatientForEvent = useCallback((event: SchedulerEvent) => {
    const namePart = event.title.split(" – ")[1] || event.title.split(" - ")[1];
    if (!namePart) return null;
    return patients.find(
      (p) =>
        p.name.toLowerCase().includes(namePart.trim().toLowerCase()) ||
        namePart.trim().toLowerCase().includes(p.name.toLowerCase()),
    );
  }, []);

  const selectedPatient = useMemo(
    () => (selectedEvent ? getPatientForEvent(selectedEvent) : null),
    [selectedEvent, getPatientForEvent],
  );

  const selectedPatientFallback = useMemo(
    () =>
      selectedEvent ? schedulerPatientFallbackById[selectedEvent.id] : null,
    [selectedEvent],
  );

  const selectedEventPatientName = useMemo(() => {
    if (!selectedEvent) return "";
    const namePart =
      selectedEvent.title.split(" – ")[1] ||
      selectedEvent.title.split(" - ")[1];
    return namePart?.trim() ?? "";
  }, [selectedEvent]);

  return (
    <>
      <div className="schedule-layout">
        {/* Left: Scheduler */}
        <SelectEventContext.Provider value={handleSelectEvent}>
          <Scheduler
            data={schedulerData}
            defaultDate={new Date(2026, 1, 23)}
            height={820}
            onDataChange={() => {}}
            item={CustomSchedulerItem}
            header={CustomSchedulerHeader}
          >
            <DayView />
            <WeekView />
            <MonthView />
            <AgendaView />
          </Scheduler>
        </SelectEventContext.Provider>

        {/* Right: Daily Tasks */}
        <div className="daily-tasks-panel">
          <div className="app-card">
            <div className="app-card-header">
              <h3>Daily Tasks</h3>
              <TextBox
                placeholder="Search daily tasks"
                value={taskSearch}
                onChange={(e) => setTaskSearch(String(e.value ?? ""))}
                prefix={SearchInputPrefix}
                rounded="full"
                className="daily-tasks-header-search"
              />
              <ExpandingActionButton
                label="Add task"
                onClick={() => setShowAddTask(true)}
              />
            </div>
            <div className="daily-tasks-list">
              {filteredTasks.map((task) => {
                return (
                  <div
                    key={task.id}
                    className={`daily-task-item ${task.completed ? "completed" : ""}`}
                  >
                    <Checkbox
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                      aria-label={task.text}
                    />
                    <span className="task-text">{task.text}</span>
                    <StatusBadge status={task.priority} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Add Task Dialog */}
      {showAddTask && (
        <Dialog
          title="Add Task"
          onClose={() => setShowAddTask(false)}
          width={520}
        >
          <div className="window-form">
            <div>
              <Label className="form-label" editorId="task-name">
                Task Name
              </Label>
              <TextBox
                id="task-name"
                value={newTaskText}
                onChange={(e) => {
                  setNewTaskText(String(e.value ?? ""));
                  if (taskError) setTaskError("");
                }}
                placeholder="e.g. Review lab results for patient #104589"
                valid={!taskError}
              />
              {taskError && <Error>{taskError}</Error>}
            </div>
            <div>
              <Label className="form-label" id="task-priority-label">
                Priority
              </Label>
              <SegmentedControl
                value={newTaskPriority}
                onChange={(value) => setNewTaskPriority(String(value))}
                aria-labelledby="task-priority-label"
                items={[
                  { value: "Low", text: "Low" },
                  { value: "Medium", text: "Medium" },
                  { value: "High", text: "High" },
                ]}
              />
            </div>
            <div>
              <Label className="form-label" editorId="task-desc">
                Description
              </Label>
              <TextArea
                id="task-desc"
                value={newTaskDescription}
                onChange={(e) => setNewTaskDescription(String(e.value ?? ""))}
                placeholder="Add a description..."
                rows={4}
              />
            </div>
            <div className="window-form-actions">
              <Button
                themeColor="base"
                onClick={() => setShowAddTask(false)}
                size="small"
              >
                Discard
              </Button>
              <Button themeColor="primary" onClick={handleAddTask} size="small">
                Add task
              </Button>
            </div>
          </div>
        </Dialog>
      )}

      {/* Event Details Dialog */}
      {selectedEvent && (
        <Dialog
          className="schedule-event-dialog"
          title={
            <div className="schedule-event-dialog-title">
              <span>{selectedEvent.title}</span>
              <Button
                fillMode="flat"
                rounded="full"
                className="schedule-event-expand-btn"
                svgIcon={
                  showPatientInfo ? dialogCollapseIcon : dialogExpandIcon
                }
                onClick={() => setShowPatientInfo((prev) => !prev)}
                title={
                  showPatientInfo
                    ? "Collapse patient information"
                    : "Expand patient information"
                }
                aria-label={
                  showPatientInfo
                    ? "Collapse patient information"
                    : "Expand patient information"
                }
              />
            </div>
          }
          onClose={() => {
            setSelectedEvent(null);
            setShowPatientInfo(false);
          }}
          width={340}
        >
          <div className="schedule-event-dialog-body">
            <div className="schedule-event-section">
              <h4 className="schedule-event-section-title">Appointment time</h4>
              <div className="schedule-event-info-list">
                <div className="schedule-event-info-item">
                  <SvgIcon icon={appBarCalendarIcon} />
                  <span>
                    {selectedEvent.start.toLocaleDateString("en-US", {
                      weekday: "short",
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <div className="schedule-event-info-item">
                  <SvgIcon icon={dialogClockIcon} />
                  <span>
                    {formatDialogTime(selectedEvent.start)} -{" "}
                    {formatDialogTime(selectedEvent.end)}
                  </span>
                </div>
                <div className="schedule-event-info-item">
                  <SvgIcon icon={dialogLocationIcon} />
                  <span>
                    {selectedEvent.description} - Internal Medicine Clinic
                  </span>
                </div>
                <div className="schedule-event-info-item">
                  <SvgIcon icon={appBarPatientsIcon} />
                  <span>In-person visit</span>
                </div>
              </div>
            </div>

            {showPatientInfo && (
              <div className="schedule-event-section schedule-event-patient-section">
                <h4 className="schedule-event-section-title">
                  Patient Information
                </h4>
                <div className="schedule-event-patient-grid">
                  <p>
                    <strong>Name:</strong>{" "}
                    {selectedPatient?.name ||
                      selectedPatientFallback?.name ||
                      selectedEventPatientName ||
                      "Unknown"}
                  </p>
                  <p>
                    <strong>Age:</strong>{" "}
                    {selectedPatient?.age ??
                      selectedPatientFallback?.age ??
                      "--"}
                  </p>
                  <p>
                    <strong>Gender:</strong>{" "}
                    {selectedPatient?.gender ??
                      selectedPatientFallback?.gender ??
                      "--"}
                  </p>
                </div>
              </div>
            )}
          </div>
          <DialogActionsBar layout="end">
            <Button
              fillMode="flat"
              rounded="full"
              onClick={() => {
                setSelectedEvent(null);
                setShowPatientInfo(false);
              }}
            >
              Cancel
            </Button>
            <Button
              themeColor="primary"
              rounded="full"
              onClick={() => {
                setSelectedEvent(null);
                setShowPatientInfo(false);
              }}
            >
              Save
            </Button>
          </DialogActionsBar>
        </Dialog>
      )}
    </>
  );
}
