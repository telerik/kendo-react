import { useState, useMemo, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@progress/kendo-react-buttons";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { saveGridPDF } from "@progress/kendo-react-pdf";
import type {
  GridSortChangeEvent,
  GridPageChangeEvent,
  GridCustomCellProps,
  GridHandle,
} from "@progress/kendo-react-grid";
import { orderBy } from "@progress/kendo-data-query";
import type { SortDescriptor } from "@progress/kendo-data-query";
import { Editor, EditorTools } from "@progress/kendo-react-editor";
import {
  patients,
  labResults,
  patientVitals,
  patientDefaultNotes,
} from "../data/sampleData";
import StatusBadge from "../components/StatusBadge";
import AvatarCircle from "../components/AvatarCircle";
import PageHeading from "../components/PageHeading";
import AIChatButton from "../components/AIChatButton";
import {
  appBarPatientsIcon,
  aiAssistanceSparklesIcon,
  exportButtonIcon,
  patientProfileBreadcrumbIcon,
  patientNoteSaveIcon,
} from "../icons/customIcons";

const {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  FontName,
  FontSize,
  FormatBlock,
} = EditorTools;

const editorTools = [
  [Bold, Italic, Underline, Strikethrough],
  [FontName],
  [FontSize],
  [AlignLeft, AlignCenter, AlignRight],
  [FormatBlock],
];

const O2_ALERT_THRESHOLD = 95;

function LabStatusCell(props: Readonly<GridCustomCellProps>) {
  return (
    <td {...props.tdProps}>
      <StatusBadge status={props.dataItem.status as string} />
    </td>
  );
}

export default function PatientProfile() {
  const gridRef = useRef<GridHandle | null>(null);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [sort, setSort] = useState<SortDescriptor[]>([]);
  const [page, setPage] = useState({ skip: 0, take: 10 });
  const [showAiPanel, setShowAiPanel] = useState(false);

  const handleGridExportButtonClick = () => {
    gridRef.current?.exportAsPdf();
  };

  const patient = useMemo(
    () => patients.find((p) => p.id === Number(id)),
    [id],
  );

  const vitals = useMemo(() => {
    if (!patient) return null;
    const vd = patientVitals[patient.id];
    return {
      heartRate: vd?.heartRate ?? patient.heartRate ?? "—",
      bloodPressure: vd?.bloodPressure ?? patient.bloodPressure ?? "—",
      temperature: vd?.temperature ?? patient.temperature ?? "—",
      o2Saturation: vd?.o2Saturation ?? patient.o2Saturation ?? "—",
      respiratoryRate: vd?.respiratoryRate ?? patient.respiratoryRate ?? "—",
      department: vd?.department ?? patient.department ?? patient.ward,
      admissionDate: vd?.admissionDate ?? patient.admissionDate,
      assignedNurse: vd?.assignedNurse ?? patient.assignedNurse ?? "—",
    };
  }, [patient]);

  const defaultNoteContent = useMemo(() => {
    if (!patient) return "";
    return (
      patientDefaultNotes[patient.id] ??
      `<p>Clinical note for ${patient.name}. ${patient.condition} — ${patient.ward}. No additional notes recorded at this time.</p>`
    );
  }, [patient]);

  const o2Value = vitals
    ? Number.parseFloat(vitals.o2Saturation.replace("%", "").trim())
    : Number.NaN;
  const isO2Alert = !Number.isNaN(o2Value) && o2Value < O2_ALERT_THRESHOLD;

  if (!patient || !vitals) {
    return (
      <div className="page-heading">
        <h1>Patient Not Found</h1>
        <p>The patient you are looking for does not exist.</p>
        <Button themeColor="primary" onClick={() => navigate("/patients")}>
          Back to Patients
        </Button>
      </div>
    );
  }

  const patientLabs = labResults;
  const labResultsPdfFileName = `${patient.name.replace(/\s+/g, "-").toLowerCase()}-labs.pdf`;

  const handleGridPdfExport = async (event: { target: HTMLDivElement }) => {
    saveGridPDF(event.target, { fileName: labResultsPdfFileName });
  };

  return (
    <>
      <PageHeading
        title="Patient Profile"
        subtitle="View and manage detailed patient records, vitals, lab results, and clinical notes"
        breadcrumbs={[
          { text: "Patients", href: "/patients", svgIcon: appBarPatientsIcon },
          { text: "Patient Profile", svgIcon: patientProfileBreadcrumbIcon },
        ]}
        actions={
          <>
            <Button
              svgIcon={aiAssistanceSparklesIcon}
              themeColor="primary"
              rounded="full"
              onClick={() => setShowAiPanel(!showAiPanel)}
            >
              AI Assistance
            </Button>
            <Button
              svgIcon={exportButtonIcon}
              themeColor="base"
              rounded="full"
              onClick={handleGridExportButtonClick}
            >
              Export
            </Button>
          </>
        }
      />

      <div className="profile-stack">
        {/* Top row: 3 cards */}
        <div className="profile-top-row">
          {/* Patient Identity Card */}
          <div className="app-card profile-identity-card">
            <div className="profile-identity-avatar">
              <AvatarCircle
                name={patient.name}
                image={patient.avatar}
                size="xl"
              />
              <div className="profile-identity-name-row">
                <h3>{patient.name}</h3>
                <StatusBadge status={patient.status} />
              </div>
            </div>
            <div className="profile-identity-info">
              <p className="profile-section-label">Basic Information</p>
              <div className="profile-detail-row">
                <span className="profile-detail-label">Patient ID</span>
                <span className="profile-detail-value profile-detail-bold">
                  P-{patient.id}
                </span>
              </div>
              <div className="profile-detail-row">
                <span className="profile-detail-label">Age/Gender</span>
                <span className="profile-detail-value profile-detail-bold">
                  {patient.age} years, {patient.gender}
                </span>
              </div>
            </div>
          </div>

          {/* Recent Vitals Card */}
          <div className="app-card profile-vitals-card">
            <div className="app-card-header">
              <h3>Recent Vitals</h3>
            </div>
            <div className="profile-metric-list">
              <div className="profile-metric-item">
                <span>Heart Rate</span>
                <span>{vitals.heartRate}</span>
              </div>
              <div className="profile-metric-item">
                <span>Blood Pressure</span>
                <span>{vitals.bloodPressure}</span>
              </div>
              <div className="profile-metric-item">
                <span>Temperature</span>
                <span>{vitals.temperature}</span>
              </div>
              <div className="profile-metric-item">
                <span>O2 Saturation</span>
                <span className={isO2Alert ? "text-error" : ""}>
                  {vitals.o2Saturation}
                </span>
              </div>
              <div className="profile-metric-item">
                <span>Respiratory Rate</span>
                <span>{vitals.respiratoryRate}</span>
              </div>
            </div>
          </div>

          {/* Admission Details Card */}
          <div className="app-card profile-admission-card">
            <div className="app-card-header">
              <h3>Admission Details</h3>
            </div>
            <div className="profile-metric-list">
              <div className="profile-metric-item">
                <span>Department</span>
                <span>{vitals.department}</span>
              </div>
              <div className="profile-metric-item">
                <span>Ward</span>
                <span>{patient.ward}</span>
              </div>
              <div className="profile-metric-item">
                <span>Room</span>
                <span>{patient.room}</span>
              </div>
              <div className="profile-metric-item">
                <span>Admission Date</span>
                <span>
                  {vitals.admissionDate
                    ? vitals.admissionDate.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })
                    : "—"}
                </span>
              </div>
              <div className="profile-metric-item">
                <span>Assigned Nurse</span>
                <span>{vitals.assignedNurse}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Patient Note Card with Editor */}
        <div className="app-card">
          <div className="app-card-header">
            <h3>Patient Note</h3>
            <Button
              size="small"
              rounded="full"
              themeColor="base"
              svgIcon={patientNoteSaveIcon}
            >
              Save
            </Button>
          </div>
          <div className="profile-editor-wrap">
            <Editor
              key={patient.id}
              tools={editorTools}
              defaultEditMode="div"
              defaultContent={defaultNoteContent}
            />
          </div>
        </div>

        {/* Lab Results Card */}
        <div className="app-card">
          <Grid
            ref={gridRef}
            data={orderBy(patientLabs, sort).slice(
              page.skip,
              page.skip + page.take,
            )}
            total={patientLabs.length}
            skip={page.skip}
            take={page.take}
            pageable
            sortable
            sort={sort}
            pdf={true}
            onPdfExport={handleGridPdfExport}
            onSortChange={(e: GridSortChangeEvent) => setSort(e.sort)}
            onPageChange={(e: GridPageChangeEvent) =>
              setPage({ skip: e.page.skip, take: e.page.take })
            }
          >
            <GridColumn field="testName" title="Test" />
            <GridColumn field="result" title="Result" />
            <GridColumn field="normalRange" title="Reference" />
            <GridColumn
              field="status"
              title="Status"
              cells={{ data: LabStatusCell }}
            />
            <GridColumn field="note" title="Note" />
          </Grid>
        </div>
      </div>

      <AIChatButton />
    </>
  );
}
