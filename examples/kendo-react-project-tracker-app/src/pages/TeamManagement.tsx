import { ButtonGroup, Button, ChipList, Chip, ChipProps, ChipListChangeEvent } from "@progress/kendo-react-buttons";
import { SvgIcon } from "@progress/kendo-react-common";
import { Breadcrumb, Card, CardBody, Avatar, CardTitle, CardSubtitle, CardFooter, BreadcrumbLinkMouseEvent, GridLayout } from "@progress/kendo-react-layout";
import { checkIcon, chevronRightIcon, groupIcon, homeIcon, listUnorderedSquareIcon } from "@progress/kendo-svg-icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import { teamsChips, teamsData } from "./data";

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
      <div style={{minHeight: 'calc(100vh - 106px)'}} className="flex flex-col p-10 gap-6">
            <Breadcrumb data={breadcrumbItems} onItemSelect={handleItemSelect} className="!bg-app-surface" />

            <div>
                <h1 className="text-4xl">Team Management</h1>
                <h2 className="text-subtle">18 teams</h2>
            </div>

            <div className="flex justify-between items-start gap-6">
                <ButtonGroup>
                    <Button svgIcon={groupIcon} togglable={true} selected={isGridView}
                      onClick={() => handleViewChange('grid')} title="Grid view button" />
                    <Button svgIcon={listUnorderedSquareIcon} togglable={true} selected={!isGridView}
                    onClick={() => handleViewChange('list')} title="List view button" />
                </ButtonGroup>
                <ChipList ariaLabel="Filter by Team" className="justify-end" data={teamsChips} selection="multiple" onChange={handleChipValueChange} value={chipValue}
                    chip={(props: ChipProps) => (
                      <Chip
                        {...props}
                        selected={chipValue.includes(props.dataItem.value)}
                        selectedSvgIcon={checkIcon}
                        fillMode="outline"
                      />
                  )} />
            </div>

            <GridLayout className={`${isGridView ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'}`} style={{gap: "var(--kendo-spacing-4) var(--kendo-spacing-6)"}}>
                {teams.map((team, index) => {
                  return <Card key={index}>
                    <CardBody className="flex items-center">
                      <Avatar style={{ background: team.avatarColor }}>{team.teamCode}</Avatar>
                      <div className="overflow-hidden">
                        <CardTitle className="font-medium truncate">{team.teamName}</CardTitle>
                        <CardSubtitle className="text-subtle m-0 truncate">{team.teamMembers.length} team members</CardSubtitle>
                      </div>
                    </CardBody>
                    <CardFooter className="border-0 p-2">
                      <Button svgIcon={chevronRightIcon} fillMode="flat" onClick={() => navigate(`/team-management/${team.teamCode}`)} title="Explore team">Explore team</Button>
                    </CardFooter>
                  </Card>
                })}
            </GridLayout>

        </div>
        <div className="bg-surface-alt color-subtle p-2 text-center">
            <span>Copyright &#169; 2025 Progress Software. All rights reserved.</span>
        </div>
    </>
  )
}
