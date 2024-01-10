import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import SideNav from "@/components/side-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Next.JS User management app example",
	description:
		"User management app exaple using NextJS, Prostgres and DrizzleORM",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<div>
						<Navbar />
						<div className="flex gap-2">
							<SideNav />
							<div className="p-4 py-8 min-h-[100vh] flex-grow mx-auto max-w-7xl">
								{children}
							</div>
						</div>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
