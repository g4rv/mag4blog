"use client";
import { FC, ReactNode, createContext, useContext, useState } from "react";

type ThemeProviderProps = {
	children: ReactNode;
};

type Theme = "dark" | "light";

type ThemeContextValue = {
	theme: Theme;
	toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextValue | undefined>(
	undefined,
);

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>("dark");

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<div
				className={`${theme} grid h-full grid-rows-[min-content_1fr_min-content]`}
			>
				{children}
			</div>
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context)
		throw new Error("useTheme must be used within a ThemeProvider");
	return context;
};
