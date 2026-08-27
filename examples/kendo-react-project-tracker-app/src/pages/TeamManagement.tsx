import { ButtonGroup, Button, ChipList, Chip, ChipProps, ChipListChangeEvent } from "@progress/kendo-react-buttons";
import { SvgIcon } from "@progress/kendo-react-common";
import { Breadcrumb, Card, CardBody, Avatar, CardTitle, CardSubtitle, CardFooter, BreadcrumbLinkMouseEvent, GridLayout } from "@progress/kendo-react-layout";
import { checkIcon, chevronRightIcon, groupIcon, homeIcon, listUnorderedSquareIcon } from "@progress/kendo-svg-icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import { teamsChips, teamsData } from "./data";
import PageFooter from "../components/PageFooter";

const teamThemeColors = ["primary", "secondary", "tertiary", "base"] as const;

interface DataModel {
  id: string;
  text?: string;
  icon?: React.ReactNode;
}

const breadcrumbItems: DataModel[] = [
  {
      id: "home",
      icon: <SvgIcon icon={homeIcon} />,
  },
  {
      id: "team-management",
      text: "Team Management",
  }
];

export default function TeamManagement() {
  const navigate = useNavigate();
  const [chipValue, setChipValue] = React.useState<string[]>(['all']);
  const [isGridView, setIsGridView] = React.useState(true);
  const [teams, setTeams] = React.useState(teamsData);

  const handleItemSelect = (e: BreadcrumbLinkMouseEvent) => {
    if (e.id === 'home') {
      navigate('/');
    }
  }

  const handleChipValueChange = (event: ChipListChangeEvent) => {
    if (event.value.includes('all')) {
      setChipValue(['all']);
      setTeams(teamsData);
      return;
    }
    setChipValue(event.value.filter((value: any) => value !== 'all'));
    setTeams(teamsData.filter(team => event.value.includes(team.group)));
  };

  const handleViewChange = (view: 'grid' | 'list') => {
    if (view === 'grid') {
      setIsGridView(true);
    } else {
      setIsGridView(false);
    }
  };

  return (
    <>
      <main className="tracker-page">
            <Breadcrumb data={breadcrumbItems} onItemSelect={handleItemSelect} className="tracker-page__breadcrumb" />

            <div>
                <h1 className="tracker-page__heading">Team Management</h1>
                <h2 className="tracker-page__subtitle">18 teams</h2>
            </div>

            <div className="tracker-page__toolbar">
                <ButtonGroup>
                    <Button svgIcon={groupIcon} togglable={true} selected={isGridView}
                      onClick={() => handleViewChange('grid')} title="Grid view button" />
                    <Button svgIcon={listUnorderedSquareIcon} togglable={true} selected={!isGridView}
                    onClick={() => handleViewChange('list')} title="List view button" />
                </ButtonGroup>
                <ChipList ariaLabel="Filter by Team" data={teamsChips} selection="multiple" onChange={handleChipValueChange} value={chipValue}
                    chip={(props: ChipProps) => (
                      <Chip
                        {...props}
                        selected={chipValue.includes(props.dataItem.value)}
                        selectedSvgIcon={checkIcon}
                        fillMode="outline"
                      />
                  )} />
            </div>

            <GridLayout className={`tracker-grid${isGridView ? '' : ' tracker-grid--list'}`}>
                {teams.map((team, index) => {
                  return <Card key={index} className="tracker-card">
                    <CardBody className="tracker-card__body">
                      <Avatar themeColor={teamThemeColors[index % teamThemeColors.length]}>{team.teamCode}</Avatar>
                      <div className="tracker-card__copy">
                        <CardTitle className="tracker-card__title">{team.teamName}</CardTitle>
                        <CardSubtitle className="tracker-card__subtitle">{team.teamMembers.length} team members</CardSubtitle>
                      </div>
                    </CardBody>
                    <CardFooter className="tracker-card__footer">
                      <Button svgIcon={chevronRightIcon} fillMode="flat" onClick={() => navigate(`/team-management/${team.teamCode}`)} title="Explore team">Explore team</Button>
                    </CardFooter>
                  </Card>
                })}
            </GridLayout>

        </main>
        <PageFooter />
    </>
  )
}
