import * as React from 'react';
import { Dialog, DialogActionsBar, Window } from '@progress/kendo-react-dialogs';
import { Button } from '@progress/kendo-react-buttons';
import { Input, InputChangeEvent } from '@progress/kendo-react-inputs';
import { Label, Error, Hint } from '@progress/kendo-react-labels';
import { SvgIcon } from '@progress/kendo-react-common';
import { pencilIcon, trashIcon, userIcon } from '@progress/kendo-svg-icons';
import './styles.css';

interface UserProfile {
    name: string;
    email: string;
    role: string;
    location: string;
}

interface FormErrors {
    name?: string;
    email?: string;
}

const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const App = () => {
    const [profile, setProfile] = React.useState<UserProfile>({
        name: 'Alexandra Bennett',
        email: 'a.bennett@northwindtech.com',
        role: 'Senior Product Manager',
        location: 'Austin, TX'
    });

    const [deleteConfirmOpen, setDeleteConfirmOpen] = React.useState<boolean>(true);
    const [editorOpen, setEditorOpen] = React.useState<boolean>(false);
    const [editProfile, setEditProfile] = React.useState<UserProfile>({ ...profile });
    const [touched, setTouched] = React.useState<{ name?: boolean; email?: boolean }>({});

    const errors: FormErrors = {};
    if (!editProfile.name) {
        errors.name = 'Name is required.';
    } else if (editProfile.name.length > 50) {
        errors.name = 'Name cannot exceed 50 characters.';
    }
    if (!editProfile.email) {
        errors.email = 'Email is required.';
    } else if (!EMAIL_PATTERN.test(editProfile.email)) {
        errors.email = 'Enter a valid email address.';
    }

    const isFormValid = Object.keys(errors).length === 0;

    const windowLeft = typeof window !== 'undefined' ? Math.max(0, (window.innerWidth - 460) / 2) : 0;
    const windowTop = typeof window !== 'undefined' ? Math.max(40, (window.innerHeight - 400) / 2) : 60;

    const openEditor = () => {
        setEditProfile({ ...profile });
        setTouched({});
        setEditorOpen(true);
    };

    const closeEditor = () => setEditorOpen(false);

    const saveProfile = () => {
        if (!isFormValid) {
            return;
        }
        setProfile({ ...editProfile });
        setEditorOpen(false);
    };

    const openDeleteConfirm = () => {
        setEditorOpen(false);
        setDeleteConfirmOpen(true);
    };

    const closeDeleteConfirm = () => setDeleteConfirmOpen(false);

    const confirmDelete = () => {
        setDeleteConfirmOpen(false);
        setEditorOpen(false);
    };

    const handleBlur = (field: 'name' | 'email') => {
        setTouched((prev) => ({ ...prev, [field]: true }));
    };

    const handleFieldChange = (field: keyof UserProfile) => (e: InputChangeEvent) => {
        setEditProfile((prev) => ({ ...prev, [field]: e.value }));
    };

    return (
        <div className="demo-container">
            <div className="profile-card">
                <div className="profile-hero">
                    <div className="profile-avatar">
                        <SvgIcon icon={userIcon} size="xxlarge" />
                    </div>
                    <div className="profile-identity">
                        <h2 className="profile-name">{profile.name}</h2>
                        <p className="profile-role">{profile.role}</p>
                        <p className="profile-contact">{profile.email}</p>
                        <p className="profile-contact">{profile.location}</p>
                    </div>
                    <div className="profile-actions">
                        <Button themeColor="primary" svgIcon={pencilIcon} onClick={openEditor}>
                            Edit Profile
                        </Button>
                        <Button themeColor="warning" fillMode="outline" svgIcon={trashIcon} onClick={openDeleteConfirm}>
                            Archive Account
                        </Button>
                    </div>
                </div>

                <div className="profile-divider"></div>

                <div className="profile-stats">
                    <div className="stat-item">
                        <span className="stat-value">142</span>
                        <span className="stat-label">Projects</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">38</span>
                        <span className="stat-label">Team Members</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">4.9</span>
                        <span className="stat-label">Avg. Rating</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">6 yrs</span>
                        <span className="stat-label">Tenure</span>
                    </div>
                </div>
            </div>

            {deleteConfirmOpen && (
                <Dialog title="Archive Account" minWidth={320} width={460} onClose={closeDeleteConfirm}>
                    <div className="confirm-body">
                        <p className="confirm-message">
                            Are you sure you want to Archive the account of <strong>{profile.name}</strong>?
                        </p>
                        <p className="confirm-warning">
                            The account will be archived and can be restored at any time from the account settings.
                        </p>
                    </div>
                    <DialogActionsBar layout="end">
                        <Button onClick={closeDeleteConfirm}>Cancel</Button>
                        <Button themeColor="warning" onClick={confirmDelete}>
                            Archive Account
                        </Button>
                    </DialogActionsBar>
                </Dialog>
            )}

            {editorOpen && (
                <Window
                    title="Edit Profile"
                    minWidth={340}
                    width={460}
                    minHeight={300}
                    initialTop={windowTop}
                    initialLeft={windowLeft}
                    onClose={closeEditor}
                >
                    <div className="editor-body">
                        <div>
                            <Label editorId="edit-name">Full Name</Label>
                            <Input
                                id="edit-name"
                                value={editProfile.name}
                                maxLength={50}
                                onChange={handleFieldChange('name')}
                                onBlur={() => handleBlur('name')}
                            />
                            <Hint direction="end">{editProfile.name.length}/50</Hint>
                            {touched.name && errors.name && <Error>{errors.name}</Error>}
                        </div>
                        <div>
                            <Label editorId="edit-email">Email Address</Label>
                            <Input
                                id="edit-email"
                                value={editProfile.email}
                                onChange={handleFieldChange('email')}
                                onBlur={() => handleBlur('email')}
                            />
                            {touched.email && errors.email && <Error>{errors.email}</Error>}
                        </div>
                        <div>
                            <Label editorId="edit-location">Location</Label>
                            <Input
                                id="edit-location"
                                value={editProfile.location}
                                disabled={true}
                                onChange={() => undefined}
                            />
                        </div>
                    </div>
                    <div className="editor-actions">
                        <Button onClick={closeEditor}>Cancel</Button>
                        <Button themeColor="primary" disabled={!isFormValid} onClick={saveProfile}>
                            Save Changes
                        </Button>
                    </div>
                </Window>
            )}
        </div>
    );
};

export default App;
