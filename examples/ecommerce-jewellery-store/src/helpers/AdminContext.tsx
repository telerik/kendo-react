import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AdminContextType {
  isAdmin: boolean;
  toggleRole: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleRole = () => {
    setIsAdmin((prevRole) => !prevRole);
  };

  return (
    <AdminContext.Provider value={{ isAdmin, toggleRole }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdminContext must be used within an AdminProvider');
  }
  return context;
};
