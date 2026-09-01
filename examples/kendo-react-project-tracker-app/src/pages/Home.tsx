import { Button } from "@progress/kendo-react-buttons";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { Badge } from "@progress/kendo-react-indicators";
import { Checkbox } from "@progress/kendo-react-inputs";
import { Avatar, Card, CardBody, CardFooter, CardHeader, CardSubtitle, CardTitle } from "@progress/kendo-react-layout";
import { Calendar } from "@progress/kendo-react-dateinputs";
import { pencilIcon, plusIcon, trashIcon } from "@progress/kendo-svg-icons";
import { tasksData, listData, projectsData, teamsData } from "./data";
import { useNavigate } from "react-router-dom";
import React from "react";
import PageFooter from "../components/PageFooter";

const teamThemeColors = ["primary", "secondary", "tertiary", "base"] as const;

export default function Home() {
    const navigate = useNavigate();
    const [date, setDate] = React.useState(new Date());

    const handleSeeAllProjectsClick = () => {
        navigate('/projects');
    };

    const handleSeeAllTeamsClick = () => {
        navigate('/team-management');
    };

    const handleSeeAllTasksClick = () => {
        navigate('/tasks');
    }

  return (
    <>
      <main className="tracker-page tracker-page--dashboard">
        <h1 className="tracker-page__title">Welcome John Porter</h1>
        <div className="dashboard-grid">
            <div className="dashboard-card--projects">
                <Card className="dashboard-card">
                    <CardHeader className="tracker-card-header">
                        <CardTitle className="dashboard-card__title">Projects</CardTitle>
                    </CardHeader>
                    <CardBody>
                              <div className="dashboard-project-list">
                                  {projectsData.slice(0, 5).map((project, index) => {
                                      return <Card key={'project-' + index} className="dashboard-project">
                                          <CardBody className="dashboard-project__body">
                                              <div onClick={() => navigate('/projects')} className="dashboard-team__link">
                                                <CardTitle className="dashboard-project__title">{project.ProjectName}</CardTitle>
                                                <div><Badge themeColor={
                                                    project.Priority === "Urgent"
                                                    ? "error"
                                                    : project.Priority === "Medium priority"
                                                    ? "warning"
                                                    : project.Priority === "Low priority"
                                                    ? "success"
                                                    : project.Priority === "Routine"
                                                    ? "tertiary"
                                                    : "primary"
                                                } rounded="full" position={'inside'} align={{ vertical: 'bottom', horizontal: 'start' }} className="tracker-badge">{project.Priority}</Badge></div>
                                              </div>
                                          </CardBody>
                                      </Card>
                                  })}
                        </div>
                    </CardBody>
                    <CardFooter className="dashboard-card__footer">
                        <Button fillMode="flat" themeColor="primary" onClick={handleSeeAllProjectsClick} title="See all projects">See all</Button>
                    </CardFooter>
                </Card>
            </div>
            <div className="dashboard-card--calendar">
                <Calendar value={date} onChange={e => setDate(e.value)} tabIndex={0}/>
            </div>
            <div className="dashboard-card--teams">
                <Card className="dashboard-card">
                    <CardHeader className="tracker-card-header">
                        <CardTitle className="dashboard-card__title">Teams</CardTitle>
                    </CardHeader>
                    <CardBody className="dashboard-card__list">
                        {teamsData.slice(0, 4).map((team, index) => {
                            return <Card key={'team-' + index} className="tracker-card">
                                    <div onClick={() => navigate('/team-management')} className="dashboard-team__link">
                                        <CardBody className="dashboard-team__body">
                                            <Avatar themeColor={teamThemeColors[index % teamThemeColors.length]}>{team.teamCode}</Avatar>
                                            <div className="tracker-card__copy">
                                                <CardTitle className="tracker-card__title">{team.teamName.replace("Team", "")}</CardTitle>
                                                <CardSubtitle className="tracker-card__subtitle">{team.teamMembers.length} members</CardSubtitle>
                                            </div>
                                        </CardBody>
                                    </div>
                            </Card>
                        })}
                    </CardBody>
                    <CardFooter className="dashboard-card__footer">
                        <Button fillMode="flat" themeColor="primary" onClick={handleSeeAllTeamsClick} title="See all teams">See all</Button>
                    </CardFooter>
                </Card>
            </div>
            <div className="dashboard-card--todo">
                <Card className="dashboard-card">
                    <CardHeader className="tracker-card-header">
                        <CardTitle className="dashboard-card__title">To-Do List</CardTitle>
                    </CardHeader>
                    <CardBody className="dashboard-card__scroll">
                        <div className="dashboard-card__list">
                            {listData.map((item, index) => <div className="dashboard-team__body" key={'list-item-' + index}>
                                    <Checkbox rounded="small" label={item.text}/>
                                    <div className="task-actions__secondary">
                                        <Button svgIcon={pencilIcon} fillMode="flat" title="Edit button"/>
                                        <Button svgIcon={trashIcon} fillMode="flat" themeColor="error" title="Delete button"/>
                                    </div>
                            </div>)}
                        </div>
                        <Button fillMode="flat" themeColor="primary" svgIcon={plusIcon} title="Add more tasks">Add more tasks</Button>
                    </CardBody>
                </Card>
            </div>
            <div className="dashboard-card--tasks">
                <Card className="dashboard-card">
                    <CardHeader className="tracker-card-header">
                        <CardTitle className="dashboard-card__title">Tasks</CardTitle>
                    </CardHeader>
                    <CardBody className="dashboard-card__scroll">
                        <Grid className="tracker-grid__table" data={tasksData} navigatable={true}>
                            <GridColumn field="taskName" title="Task Name" />
                            <GridColumn field="status" title="Status" />
                        </Grid>
                    </CardBody>
                    <CardFooter className="dashboard-card__footer">
                              <Button fillMode="flat" themeColor="primary" onClick={handleSeeAllTasksClick} title="See all tasks">See all</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    </main>
    <PageFooter />
    </>
  )
}
