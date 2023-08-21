"use client";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<SessionProvider>
			<ThemeProvider attribute="class">{children}</ThemeProvider>
		</SessionProvider>
	);
};
export default Providers;
