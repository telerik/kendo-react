import { Layout } from "@progress/kendo-drawing";
import { ButtonGroup, Button, ChipList, Chip, ChipProps, ChipListChangeEvent } from "@progress/kendo-react-buttons";
import { SvgIcon } from "@progress/kendo-react-common";
import { Breadcrumb, Card, CardBody, Avatar, CardTitle, CardSubtitle, CardFooter, BreadcrumbLinkMouseEvent, StackLayout } from "@progress/kendo-react-layout";
import { checkIcon, chevronRightIcon, groupIcon, homeIcon, listUnorderedSquareIcon } from "@progress/kendo-svg-icons";
import React from "react";
import { useNavigate } from "react-router-dom";

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

const teamsChips = [
  { text: "All", value: 'all', disabled: false },
  { text: "Technology and Developement", value: 'technology', disabled: true },
  { text: "Product and Design", value: 'product', disabled: true },
  { text: "Business Operation", value: 'business', disabled: true },
  { text: "Marketing and Sales", value: 'marketing', disabled: true },
];

const teamsData = [
  {
    teamCode: 'FE',
    teamName: 'Frontend team',
    teamMembers: '10 members',
    avatarColor: '#9C38FF',
    group: 'technology'
  },
  {
    teamCode: 'BE',
    teamName: 'Backend Team',
    teamMembers: '10 members',
    avatarColor: '#800000',
    group: 'technology'
  },
  {
    teamCode: 'DO',
    teamName: 'DevOps Team',
    teamMembers: '10 members',
    avatarColor: '#333333',
    group: 'technology'
  },
  {
    teamCode: 'QA',
    teamName: 'QA Team',
    teamMembers: '10 members',
    avatarColor: '#218247',
    group: 'technology'
  },
  {
    teamCode: 'UX',
    teamName: 'UX/UI Design Team',
    teamMembers: '10 members',
    avatarColor: '#DB0000',
    group: 'product'
  },
  {
    teamCode: 'DB',
    teamName: 'Database Team',
    teamMembers: '10 members',
    avatarColor: '#8F7200',
    group: 'technology'
  },
  {
    teamCode: 'М',
    teamName: 'Marketing Team',
    teamMembers: '10 members',
    avatarColor: '#008B8B',
    group: 'marketing'
  },
  {
    teamCode: 'PM',
    teamName: 'Product Management Team',
    teamMembers: '10 members',
    avatarColor: '#C14E34',
    group: 'product'
  },
  {
    teamCode: 'TS',
    teamName: 'Technical Support Team',
    teamMembers: '10 members',
    avatarColor: '#027EB5',
    group: 'technology'
  },
  {
    teamCode: 'S',
    teamName: 'Security Team',
    teamMembers: '10 members',
    avatarColor: '#267B92',
    group: 'technology'
  },
  {
    teamCode: 'DS',
    teamName: 'Data Science Team',
    teamMembers: '10 members',
    avatarColor: '#708090',
    group: 'technology'
  },
  {
    teamCode: 'IE',
    teamName: 'Infrastructure Engineering',
    teamMembers: '10 members',
    avatarColor: '#191970',
    group: 'technology'
  },
  {
    teamCode: 'RD',
    teamName: 'Research and Development',
    teamMembers: '10 members',
    avatarColor: '#7B3F00',
    group: 'technology'
  },
  {
    teamCode: 'BA',
    teamName: 'Business Analysis Team',
    teamMembers: '10 members',
    avatarColor: '#607F1F',
    group: 'business'
  },
  {
    teamCode: 'TW',
    teamName: 'Technical Writing Team',
    teamMembers: '10 members',
    avatarColor: '#DC147F',
    group: 'business'
  },
  {
    teamCode: 'S',
    teamName: 'Sales Team',
    teamMembers: '10 members',
    avatarColor: '#5769D2',
    group: 'marketing'
  },
  {
    teamCode: 'SA',
    teamName: 'System Administration',
    teamMembers: '10 members',
    avatarColor: '#4682B4',
    group: 'technology'
  },
  {
    teamCode: 'CG',
    teamName: 'Compliance and Governance',
    teamMembers: '10 members',
    avatarColor: '#4B0082',
    group: 'business'
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
  console.log(chipValue)

  return (
    <>
      <div style={{minHeight: 'calc(100vh - 106px)'}} className="flex flex-col p-10 gap-6">
            <Breadcrumb data={breadcrumbItems} onItemSelect={handleItemSelect} className="!bg-app-surface" />

            <div>
                <h1 className="text-4xl">Team Management</h1>
                <h5 className="text-subtle">18 teams</h5>
            </div>

            <div className="flex justify-between items-start gap-6">
                <ButtonGroup>
                    <Button svgIcon={groupIcon} togglable={true} selected={isGridView}
                      onClick={() => handleViewChange('grid')} />
                    <Button svgIcon={listUnorderedSquareIcon} togglable={true} selected={!isGridView}
                    onClick={() => handleViewChange('list')} />
                </ButtonGroup>
                <ChipList className="justify-end" data={teamsChips} selection="multiple" onChange={handleChipValueChange} value={chipValue}
                    chip={(props: ChipProps) => (
                      <Chip
                        {...props}
                        selected={chipValue.includes(props.dataItem.value)}
                        selectedSvgIcon={checkIcon}
                        fillMode="outline"
                      />
                  )} />
            </div>

            <StackLayout className={`grid ${isGridView ? 'grid-cols-2' : 'grid-cols-1'} ${isGridView ? 'lg:grid-cols-4' : 'lg:grid-cols-1'}`} orientation="horizontal" style={{gap: "var(--kendo-spacing-4) var(--kendo-spacing-6)"}}>
                {teams.map((team, index) => {
                  return <Card key={index}>
                    <CardBody className="flex items-center">
                      <Avatar style={{ background: team.avatarColor }}>{team.teamCode}</Avatar>
                      <div className="overflow-hidden">
                        <CardTitle className="font-medium truncate">{team.teamName}</CardTitle>
                        <CardSubtitle className="text-subtle m-0 truncate">{team.teamMembers}</CardSubtitle>
                      </div>
                    </CardBody>
                    <CardFooter className="border-0 p-2">
                      <Button svgIcon={chevronRightIcon} fillMode="flat">Explore team</Button>
                    </CardFooter>
                  </Card>
                })}
            </StackLayout>

        </div>
        <div className="bg-surface-alt color-subtle p-2 text-center">
            <span>Copyright &#169; 2025 Progress Software. All rights reserved.</span>
        </div>
    </>
  )
}
