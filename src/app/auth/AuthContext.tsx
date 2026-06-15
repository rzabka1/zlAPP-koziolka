import {createContext, ReactNode, useContext, useState} from "react";

type AuthContextType = {
	isAuthenticated: boolean;
	userName: string | null;
	points: number;
	login: (name: string) => void;
	logout: () => void;
	addPoints: (amount: number) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({children}: { children: ReactNode }) {
	const [userName, setUserName] = useState<string | null>(null);
	const [points, setPoints] = useState(10);

	const login = (name: string) => {
		setUserName(name);
		setPoints(10);
	};

	const addPoints = (amount: number) => {
		setPoints((prev) => prev + amount);
	};

	const logout = () => {
		setUserName(null);
	};

	return (
		<AuthContext.Provider value={{
			isAuthenticated: !!userName,
			userName,
			points,
			login,
			logout,
			addPoints,
		}}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const ctx = useContext(AuthContext);
	if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
	return ctx;
}
