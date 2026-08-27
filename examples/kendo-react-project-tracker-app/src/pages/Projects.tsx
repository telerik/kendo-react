import {
  Avatar,
  Breadcrumb,
  BreadcrumbLinkMouseEvent,
  BreadcrumbLinkProps,
  GridLayout,
} from "@progress/kendo-react-layout";
import {
  homeIcon
} from "@progress/kendo-svg-icons";
import { SvgIcon } from "@progress/kendo-react-common";

import { useNavigate } from "react-router-dom";
import { Badge } from "@progress/kendo-react-indicators";
import { projectsData } from "./data";
import PageFooter from "../components/PageFooter";

const breadcrumbItems: BreadcrumbLinkProps[] = [
  { id: "home", icon: <SvgIcon icon={homeIcon} /> },
  { id: "projects", text: "Projects" },
];

export default function Projects() {
  const navigate = useNavigate();

  const handleItemSelect = (e: BreadcrumbLinkMouseEvent) => {
    if (e.id === "home") {
      navigate("/");
    }
  };

  return (
    <>
    <main className="tracker-page">
      <Breadcrumb
        data={breadcrumbItems}
        onItemSelect={handleItemSelect}
        className="tracker-page__breadcrumb"
      />

      <div className="tracker-page__toolbar">
        <h1 className="tracker-page__heading">Projects</h1>
      </div>

      <GridLayout className="tracker-grid">
        {projectsData.map((project) => (
          <button
            key={project.ProjectID}
            type="button"
            onClick={() => navigate(`/projects/${project.ProjectID}`)}
            className="tracker-card--project tracker-action"
            aria-label={`Open ${project.ProjectName}`}
          >
            <div className="tracker-card--project__section">
              <div className="tracker-emphasis">{project.ProjectName}</div>
              <div className="tracker-card--project__meta">
                <span className="tracker-card--project__label">Due date: <span className="tracker-emphasis">{project.DueDate}</span></span>
                <Badge themeColor={project.Priority === "Urgent" ? "error" : project.Priority === "Medium priority" ? "warning" : project.Priority === "Low priority" ? "success" : project.Priority === "Routine" ? "tertiary" : "primary"} rounded="full" position="inside" className="tracker-badge">{project.Priority}</Badge>
              </div>
            </div>
            <div className="tracker-card--project__section">
              <div>
                <div className="tracker-card--project__label">Project manager</div>
                <div className="tracker-card--project__person">
                  <Avatar type="image" size="small" border={false}><img src={project.AvatarSrc} alt={project.ProjectManager} /></Avatar>
                  <span className="tracker-card--project__person-name">{project.ProjectManager}</span>
                </div>
              </div>
              <div>
                <div className="tracker-card--project__label">Stakeholder</div>
                <div className="tracker-card--project__person">
                  <Avatar type="image" size="small"><img src={project.AvatarSrc} alt={project.Stakeholders} /></Avatar>
                  <span className="tracker-card--project__person-name">{project.Stakeholders}</span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </GridLayout>
    </main>
    <PageFooter />
    </>
  );
}