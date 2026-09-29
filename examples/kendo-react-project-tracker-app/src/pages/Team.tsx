import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { teamsData } from "./data";
import { ButtonGroup, Button, FloatingActionButton } from "@progress/kendo-react-buttons";
import { Breadcrumb, Card, CardBody, Avatar, CardTitle, CardSubtitle, CardFooter, BreadcrumbLinkMouseEvent, GridLayout } from "@progress/kendo-react-layout";
import { groupIcon, listUnorderedSquareIcon, homeIcon, detailSectionIcon, plusIcon } from "@progress/kendo-svg-icons";
import { SvgIcon } from "@progress/kendo-react-common";
import { Dialog, DialogActionsBar, Window } from '@progress/kendo-react-dialogs';
import React from "react";
import { MaskedTextBox, TextBox } from "@progress/kendo-react-inputs";
import { FloatingLabel, Hint } from "@progress/kendo-react-labels";
import { MultiSelect } from "@progress/kendo-react-dropdowns";
import PageFooter from "../components/PageFooter";

const teamThemeColors = ["primary", "secondary", "tertiary", "base"] as const;

interface DataModel {
  id: string;
  text?: string;
  icon?: React.ReactNode;
}

export default function Team() {
  let params = useParams();
  const navigate = useNavigate();
  const [isGridView, setIsGridView] = React.useState(true);
  const [openWindow, setOpenWindow] = React.useState(false);
  const [windowContent, setWindowContent] = React.useState({ teamMember: '', title: '' });
  const [openDialog, setOpenDialog] = React.useState(false);
  const [fNValue, setFNValue] = React.useState('First Name');
  const [lNValue, setLNValue] = React.useState('Last Name');
  const [emailValue, setEmailValue] = React.useState('Email');
  const [titleValue, setTitleValue] = React.useState('Job Title');
  const [phoneValue, setPhoneValue] = React.useState('(___) ___-___-___');
  const [reportsToValue, setReportsToValue] = React.useState(['Name', 'Name']);

  const team = teamsData.filter(team => team.teamCode === params.teamId)[0];

  const breadcrumbItems: DataModel[] = [
    {
        id: "home",
        icon: <SvgIcon icon={homeIcon} />,
    },
    {
        id: "team-management",
        text: "Team Management",
    },
    {
        id: `${params.teamId}`,
        text: `${teamsData.filter(team => team.teamCode === params.teamId)[0].teamName}`,
    }
  ];

  const handleItemSelect = (e: BreadcrumbLinkMouseEvent) => {
    if (e.id === 'home') {
      navigate('/');
    } else if (e.id === 'team-management') {
      navigate('/team-management');
    }
  }

  const handleViewChange = (view: 'grid' | 'list') => {
    if (view === 'grid') {
      setIsGridView(true);
    } else {
      setIsGridView(false);
    }
  };

  const getInitials = (fullName: string) => {
    const nameParts = fullName.split(" ");
    const firstNameInitial = nameParts[0].charAt(0).toUpperCase();
    const lastNameInitial = nameParts[1].charAt(0).toUpperCase();
    return firstNameInitial + lastNameInitial;
  }

  const getEmail = (fullName: string) => {
    const nameParts = fullName.split(" ");
    return nameParts[0].toLowerCase() + '_' + nameParts[1].toLowerCase() + '@company.com';
  }

  const openDetailsWindow = (member: { teamMember: string; title: string }) => {
    setWindowContent({
      teamMember: member.teamMember,
      title: member.title,
    });
    setOpenWindow(!openWindow);
  };

  const addNewMember = () => {
    setOpenDialog(true);
  }

  return (
      <>
         <main className="tracker-page">
               <Breadcrumb data={breadcrumbItems} onItemSelect={handleItemSelect} className="tracker-page__breadcrumb" />

               <div>
                  <h1 className="tracker-page__heading">{teamsData.map(team => { return team.teamCode === params.teamId ? team.teamName : '' })}</h1>
                  <h2 className="tracker-page__subtitle">{teamsData.map(team => { return team.teamCode === params.teamId ? team.teamMembers.length : '' })} members</h2>
               </div>

               <div className="tracker-page__toolbar">
                   <ButtonGroup>
                       <Button svgIcon={groupIcon} togglable={true} selected={isGridView}
                         onClick={() => handleViewChange('grid')} title="Grid View button"/>
                       <Button svgIcon={listUnorderedSquareIcon} togglable={true} selected={!isGridView}
                       onClick={() => handleViewChange('list')} title="List View button" />
                   </ButtonGroup>
               </div>

              <GridLayout className={`tracker-grid${isGridView ? '' : ' tracker-grid--list'}`}>
                {team.teamMembers.map((member, index) => {
                    return <Card key={index} className="tracker-card">
                    <CardBody className="tracker-card__body">
                      <Avatar themeColor={teamThemeColors[index % teamThemeColors.length]}>{getInitials(member.teamMember)}</Avatar>
                      <div className="tracker-card__copy">
                        <CardTitle className="tracker-card__title">{member.teamMember}</CardTitle>
                        <CardSubtitle className="tracker-card__subtitle">{member.title}</CardSubtitle>
                      </div>
                    </CardBody>
                    <CardFooter className="tracker-card__footer">
                        <Button svgIcon={detailSectionIcon} fillMode="flat" onClick={() => openDetailsWindow(member)}>Details</Button>
                    </CardFooter>
                    </Card>


                })}
               </GridLayout>

               <div className="tracker-card__actions">
                  <FloatingActionButton svgIcon={plusIcon} text="Add new member" size="small" alignOffset={{ x: 40, y: 75 }} onClick={addNewMember} />
               </div>

              {openWindow &&
              <Window title={windowContent.teamMember + ' Details'} onClose={() => setOpenWindow(false)}>
                    <div className="tracker-modal__details">
                          <div className="tracker-modal__person">
                              <Avatar themeColor="primary">JS</Avatar>
                              <div className="tracker-modal__person-copy">
                                  <span className="tracker-emphasis">{windowContent.teamMember}</span>
                                  <span className="tracker-page__subtitle">{windowContent.title}</span>
                              </div>
                          </div>
                          <div className="tracker-modal__row">
                              <span className="tracker-modal__label">Team:</span>
                              <span className="tracker-modal__link">{team.teamName}</span>
                          </div>
                          <div className="tracker-modal__row">
                              <span className="tracker-modal__label">Email:</span>
                              <span className="tracker-modal__link">{getEmail(windowContent.teamMember)}</span>
                          </div>
                          <div className="tracker-modal__row">
                              <span className="tracker-modal__label">Phone Number:</span>
                              <span>(436)-256-140-482</span>
                          </div>
                          <div className="tracker-modal__row">
                              <span className="tracker-modal__label">Reports to:</span>
                              <span className="tracker-modal__link">{team.teamMembers[0].teamMember}</span>
                          </div>
                      </div>
                  </Window>}

                  {openDialog && <Dialog title="Add Member" onClose={() => setOpenDialog(false)}>
                      <div className="tracker-modal__details">
                        <FloatingLabel label="First Name" editorId={'first-name'} editorValue={fNValue}>
                          <TextBox aria-label="First Name" size="large" value={fNValue} onChange={e => setFNValue(e.value as string)} />
                            </FloatingLabel>
                        <FloatingLabel label="Last Name" editorId={'last-name'} editorValue={lNValue}>
                            <TextBox aria-label="Last Name" size="large" value={lNValue} onChange={e => setLNValue(e.value as string)} />
                        </FloatingLabel>
                        <FloatingLabel label="Job Title" editorId={'job-title'} editorValue={titleValue}>
                            <TextBox aria-label="Job Title" size="large" value={titleValue} onChange={e => setTitleValue(e.value as string)} />
                        </FloatingLabel>
                        <FloatingLabel label="Email" editorId={'email'} editorValue={emailValue}>
                            <TextBox aria-label="Email" size="large" value={emailValue} onChange={e => setEmailValue(e.value as string)} />
                        </FloatingLabel>
                        <FloatingLabel label="Phone Number" editorId={'phone'} editorValue={phoneValue}>
                            <MaskedTextBox aria-label="Phone Number" size="large" value={phoneValue} mask="(999) 000-000-000" onChange={e => setPhoneValue(e.value as string)} />
                        </FloatingLabel>
                        <FloatingLabel label="Reports to" editorId={'email'} editorValue={emailValue}>
                            <MultiSelect aria-label="Reports to" size="large" data={['William Smith', 'Alex Morgan', 'James Parker', 'Nina Roberts', 'Isabella White']} value={reportsToValue} onChange={e => setReportsToValue([...e.value])} />
                            <Hint>Multiple options could be selected at once.</Hint>
                        </FloatingLabel>
                      </div>
                      <DialogActionsBar>
                        <Button type="button" themeColor={'primary'} onClick={() => alert('Member added successfully!')} title="Save button">
                            Save
                        </Button>
                        <Button type="button" onClick={() => setOpenDialog(false)} title="Cancel button">
                            Cancel
                        </Button>
                    </DialogActionsBar>
                  </Dialog>}
           </main>
           <PageFooter />
       </>
  )
}