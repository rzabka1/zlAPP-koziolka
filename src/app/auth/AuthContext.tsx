import { createContext, useContext, useState, ReactNode } from "react";

type AuthContextType = {
  userName: string | null;
  login: (name: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [userName, setUserName] = useState<string | null>(null);

  const login = (name: string) => {
    setUserName(name);
  };

  const logout = () => {
    setUserName(null);
  };

  return (
    <AuthContext.Provider
      value={{
        userName,
        login,
        logout,
        isAuthenticated: !!userName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
