import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import type { GridCustomCellProps } from "@progress/kendo-react-grid";
import { Button } from "@progress/kendo-react-buttons";
import { SvgIcon } from "@progress/kendo-react-common";
import { useMediaQuery } from "../hooks/useMediaQuery";
import {
  allergyAlertCardIcon,
  clinicalNoteCardIcon,
  globalCaretAltRightIcon,
  labFlaskCardIcon,
  messageCardIcon,
  nextPatientViewProfileIcon,
  plusWhiteIcon,
  reasonForVisitCardIcon,
} from "../icons/customIcons";
import ExpandingActionButton from "../components/ExpandingActionButton";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { TextArea } from "@progress/kendo-react-inputs";
import NewMessageWindow from "../components/NewMessageWindow";
import {
  Window,
  Dialog,
  DialogActionsBar,
} from "@progress/kendo-react-dialogs";
import {
  patients,
  patientOptions,
  appointments,
  dailyAlerts,
  type Appointment,
} from "../data/sampleData";

import AppointmentBadge from "../components/AppointmentBadge";
import PageHeading from "../components/PageHeading";
import LabRequestWindow from "../components/LabRequestWindow";
import AIChatButton from "../components/AIChatButton";
import { Label, Error } from "@progress/kendo-react-labels";
import { useDoctorProfile } from "../context/DoctorProfileContext";

function AppointmentStatusCell(props: Readonly<GridCustomCellProps>) {
  const status = (props.dataItem as Appointment).status;
  return (
    <td {...props.tdProps}>
      <AppointmentBadge status={status} />
    </td>
  );
}

export default function Dashboard() {
  const navigate = useNavigate();
  const { profile } = useDoctorProfile();
  const isViewProfileIconOnly = useMediaQuery(
    "(max-width: 899px), (min-width: 1440px) and (max-width: 1759px)",
  );

  const [showNoteWindow, setShowNoteWindow] = useState(false);
  const [showLabWindow, setShowLabWindow] = useState(false);
  const [showMessageWindow, setShowMessageWindow] = useState(false);

  const [showReasonDialog, setShowReasonDialog] = useState(false);
  const [showAllergyDialog, setShowAllergyDialog] = useState(false);
  const [reviewAlert, setReviewAlert] = useState<
    (typeof dailyAlerts)[0] | null
  >(null);

  const [notePatient, setNotePatient] = useState(patientOptions[0]);
  const [noteText, setNoteText] = useState("");
  const [noteError, setNoteError] = useState("");

  const quickActions = useMemo(
    () => [
      {
        title: "Add new clinical note",
        description: "Clinical text overview",
        icon: clinicalNoteCardIcon,
        buttonLabel: "Add note",
        action: () => setShowNoteWindow(true),
      },
      {
        title: "Request lab test",
        description: "Request information",
        icon: labFlaskCardIcon,
        buttonLabel: "Request test",
        action: () => setShowLabWindow(true),
      },
      {
        title: "Message nurse",
        description: "Communication note",
        icon: messageCardIcon,
        buttonLabel: "Send message",
        action: () => setShowMessageWindow(true),
      },
    ],
    [],
  );

  const nextPatient = useMemo(
    () => patients.find((p) => p.name === "James Wilson")!,
    [],
  );

  return (
    <>
      <PageHeading
        title={`Good morning, Dr. ${profile.fullName.split(" ").pop()}`}
        subtitle="Today is Monday, February, 23 2026"
      />

      <div className="general-info">
        <div className="general-info-main">
          {/* Quick Actions */}
          <div className="app-card">
            <div className="app-card-header">
              <h3>Quick Actions</h3>
            </div>
            <div className="app-card-body">
              <div className="quick-actions">
                {quickActions.map((action) => (
                  <div key={action.title} className="quick-action-card">
                    <div className="quick-action-top">
                      <div>
                        <h4>{action.title}</h4>
                        <p>{action.description}</p>
                      </div>
                      <div className="quick-action-icon">
                        <SvgIcon icon={action.icon} width={42} height={42} />
                      </div>
                    </div>
                    <div className="quick-action-bottom">
                      <ExpandingActionButton
                        label={action.buttonLabel}
                        onClick={action.action}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Today's Appointments Grid */}
          <div className="app-card">
            <div className="app-card-header">
              <h3>Today's Appointments</h3>
              <Button
                themeColor="primary"
                svgIcon={plusWhiteIcon}
                onClick={() => navigate("/schedule")}
                rounded="full"
                className="btn-segmented-size"
              >
                View Schedule
              </Button>
            </div>
            <div className="appointments-grid-wrapper">
              <Grid data={appointments}>
                <GridColumn field="time" title="Time" width="110px" />
                <GridColumn
                  field="patientName"
                  title="Patient Name"
                  width="180px"
                />
                <GridColumn field="reason" title="Reason" />
                <GridColumn
                  field="status"
                  title="Status"
                  width="130px"
                  cells={{ data: AppointmentStatusCell }}
                />
                <GridColumn field="room" title="Room" width="110px" />
              </Grid>
            </div>
          </div>
        </div>

        {/* Right column: Next Patient + Daily Alerts */}
        <div className="general-info-sidebar">
          <div className="app-card">
            <div className="app-card-header">
              <h3>Next Patient</h3>
            </div>
            <div className="next-patient-section">
              <div className="next-patient-top">
                {nextPatient.avatar ? (
                  <img
                    className="next-patient-avatar"
                    src={nextPatient.avatar}
                    alt={nextPatient.name}
                  />
                ) : (
                  <div className="next-patient-avatar next-patient-avatar-initials">
                    {nextPatient.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                )}
                <div className="next-patient-info">
                  <div className="next-patient-name-row">
                    <h4>{nextPatient.name}</h4>
                    <Button
                      fillMode="flat"
                      onClick={() => navigate(`/patients/${nextPatient.id}`)}
                      svgIcon={nextPatientViewProfileIcon}
                      rounded="full"
                      size="small"
                    >
                      {!isViewProfileIconOnly && "View profile"}
                    </Button>
                  </div>
                  <p>
                    {nextPatient.age} years, {nextPatient.gender}
                  </p>
                </div>
                <div className="next-patient-time">
                  <span className="time-value">
                    <SvgIcon
                      icon={{
                        name: "clock",
                        content:
                          '<svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="6.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M8 4.5V8L10.5 10.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
                        viewBox: "0 0 16 16",
                      }}
                      size="small"
                    />
                    {nextPatient.appointmentTime}
                  </span>
                  <span className="time-label">Appointment time</span>
                </div>
              </div>

              <div className="next-patient-detail-card reason-card">
                <div className="detail-card-icon reason-icon">
                  <SvgIcon icon={reasonForVisitCardIcon} size="medium" />
                </div>
                <div className="detail-card-content">
                  <h5>Reason for visit</h5>
                  <p>{nextPatient.reason}</p>
                </div>
                <Button
                  fillMode="flat"
                  size="small"
                  rounded="full"
                  onClick={() => setShowReasonDialog(true)}
                  className="detail-card-details-btn"
                >
                  Details{" "}
                  <SvgIcon icon={globalCaretAltRightIcon} size="small" />
                </Button>
              </div>

              <div className="next-patient-detail-card allergy-card">
                <div className="detail-card-icon allergy-icon">
                  <SvgIcon icon={allergyAlertCardIcon} size="medium" />
                </div>
                <div className="detail-card-content">
                  <h5>Allergy Alert</h5>
                  <p>
                    {nextPatient.allergies.length > 0
                      ? nextPatient.allergies.join(", ")
                      : "None"}
                  </p>
                </div>
                <Button
                  fillMode="flat"
                  size="small"
                  rounded="full"
                  onClick={() => setShowAllergyDialog(true)}
                  className="detail-card-details-btn"
                >
                  Details{" "}
                  <SvgIcon icon={globalCaretAltRightIcon} size="small" />
                </Button>
              </div>
            </div>

            <div className="section-separator" />

            <div className="app-card-header">
              <h3>Daily Alerts</h3>
            </div>
            <div className="daily-alerts-list">
              {dailyAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`daily-alert-item severity-${alert.severity}`}
                >
                  <div className="daily-alert-content">
                    <h5>{alert.title}</h5>
                    <span className="daily-alert-time">{alert.time}</span>
                  </div>
                  <Button
                    fillMode="flat"
                    size="small"
                    rounded="full"
                    onClick={() => setReviewAlert(alert)}
                  >
                    Review{" "}
                    <SvgIcon icon={globalCaretAltRightIcon} size="small" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showNoteWindow && (
        <Window
          title="New Clinical Note"
          onClose={() => setShowNoteWindow(false)}
          initialWidth={520}
          initialHeight={490}
          maximizeButton={() => null}
          minimizeButton={() => null}
          modal
        >
          <div className="window-form">
            <div>
              <Label className="form-label" editorId="dash-note-patient">
                Patient
              </Label>
              <DropDownList
                id="dash-note-patient"
                data={patientOptions}
                textField="text"
                dataItemKey="value"
                value={notePatient}
                onChange={(e) => setNotePatient(e.value)}
                className="window-form-patient-select"
              />
            </div>
            <div>
              <Label className="form-label" editorId="dash-note-text">
                Clinical Note
              </Label>
              <TextArea
                id="dash-note-text"
                value={noteText}
                onChange={(e) => {
                  setNoteText(String(e.value ?? ""));
                  if (noteError) setNoteError("");
                }}
                placeholder="Add clinical notes, observations, treatment plans, etc."
                rows={10}
                valid={!noteError}
              />
              {noteError && <Error>{noteError}</Error>}
            </div>
            <div className="window-form-actions">
              <Button
                themeColor="base"
                onClick={() => setShowNoteWindow(false)}
                size="small"
              >
                Discard
              </Button>
              <Button
                themeColor="primary"
                onClick={() => {
                  if (!noteText.trim()) {
                    setNoteError("Clinical note is required.");
                    return;
                  }
                  setNoteError("");
                  setShowNoteWindow(false);
                }}
                size="small"
              >
                Save Note
              </Button>
            </div>
          </div>
        </Window>
      )}

      {showLabWindow && (
        <LabRequestWindow onClose={() => setShowLabWindow(false)} />
      )}

      {showMessageWindow && (
        <NewMessageWindow onClose={() => setShowMessageWindow(false)} />
      )}
      {showReasonDialog && (
        <Dialog
          title="Reason for Visit"
          onClose={() => setShowReasonDialog(false)}
          width={420}
        >
          <div className="dialog-detail-body">
            <div>
              <Label className="detail-label">Patient</Label>
              <p>{nextPatient.name}</p>
            </div>
            <div>
              <Label className="detail-label">Chief Complaint</Label>
              <p>{nextPatient.reason}</p>
            </div>
            <div>
              <Label className="detail-label">Diagnosis</Label>
              <p>{nextPatient.diagnosis}</p>
            </div>
            <div>
              <Label className="detail-label">Current Condition</Label>
              <p>{nextPatient.condition}</p>
            </div>
          </div>
          <DialogActionsBar layout="end">
            <Button
              fillMode="flat"
              rounded="full"
              onClick={() => setShowReasonDialog(false)}
            >
              Close
            </Button>
            <Button
              themeColor="primary"
              rounded="full"
              onClick={() => {
                setShowReasonDialog(false);
                navigate(`/patients/${nextPatient.id}`);
              }}
            >
              View Full Profile
            </Button>
          </DialogActionsBar>
        </Dialog>
      )}

      {showAllergyDialog && (
        <Dialog
          title="Allergy Alert"
          onClose={() => setShowAllergyDialog(false)}
          width={420}
        >
          <div className="dialog-detail-body">
            <div>
              <Label className="detail-label">Patient</Label>
              <p>{nextPatient.name}</p>
            </div>
            <div>
              <Label className="detail-label">Known Allergies</Label>
              {nextPatient.allergies.length > 0 ? (
                <ul className="dialog-body-list">
                  {nextPatient.allergies.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              ) : (
                <p>No known allergies recorded.</p>
              )}
            </div>
            <div>
              <Label className="detail-label">Blood Type</Label>
              <p>{nextPatient.bloodType}</p>
            </div>
          </div>
          <DialogActionsBar layout="end">
            <Button
              fillMode="flat"
              rounded="full"
              onClick={() => setShowAllergyDialog(false)}
            >
              Close
            </Button>
            <Button
              themeColor="primary"
              rounded="full"
              onClick={() => {
                setShowAllergyDialog(false);
                navigate(`/patients/${nextPatient.id}`);
              }}
            >
              View Full Profile
            </Button>
          </DialogActionsBar>
        </Dialog>
      )}

      {reviewAlert && (
        <Dialog
          title={reviewAlert.title}
          onClose={() => setReviewAlert(null)}
          width={420}
        >
          <div className="dialog-detail-body">
            <div>
              <Label className="detail-label">Severity</Label>
              <p className="text-capitalize">{reviewAlert.severity}</p>
            </div>
            <div>
              <Label className="detail-label">Time</Label>
              <p>{reviewAlert.time}</p>
            </div>
            <div>
              <Label className="detail-label">Recommended Action</Label>
              <p>
                {reviewAlert.severity === "critical"
                  ? "Immediate review required. Contact the patient or responsible physician."
                  : "Monitor closely and follow up within the hour."}
              </p>
            </div>
          </div>
          <DialogActionsBar layout="end">
            <Button
              fillMode="flat"
              rounded="full"
              onClick={() => setReviewAlert(null)}
            >
              Dismiss
            </Button>
            <Button
              themeColor="primary"
              rounded="full"
              onClick={() => setReviewAlert(null)}
            >
              Acknowledge
            </Button>
          </DialogActionsBar>
        </Dialog>
      )}

      <AIChatButton />
    </>
  );
}
