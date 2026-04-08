import { createContext, useContext, useState, useMemo, useCallback } from 'react';
import type { ReactNode } from 'react';
import drCarterImage from '../assets/Dr-Carter.jpg';

export interface DoctorProfile {
    fullName: string;
    email: string;
    phone: string;
    image: string;
}

interface DoctorProfileContextValue {
    profile: DoctorProfile;
    updateProfile: (updates: Partial<DoctorProfile>) => void;
}

const DoctorProfileContext = createContext<DoctorProfileContextValue | null>(null);

const defaultProfile: DoctorProfile = {
    fullName: 'Emily Carter',
    email: 'drcarter@email.com',
    phone: '+(555) 776-90-84',
    image: drCarterImage
};

export function DoctorProfileProvider({ children }: Readonly<{ children: ReactNode }>) {
    const [profile, setProfile] = useState<DoctorProfile>(defaultProfile);

    const updateProfile = useCallback(
        (updates: Partial<DoctorProfile>) => setProfile((prev) => ({ ...prev, ...updates })),
        []
    );

    const value = useMemo(() => ({ profile, updateProfile }), [profile, updateProfile]);

    return <DoctorProfileContext.Provider value={value}>{children}</DoctorProfileContext.Provider>;
}

export function useDoctorProfile() {
    const ctx = useContext(DoctorProfileContext);
    if (!ctx) throw new Error('useDoctorProfile must be used inside DoctorProfileProvider');
    return ctx;
}
