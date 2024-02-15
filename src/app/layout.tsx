import "~/styles/globals.css";
import { Inter } from "next/font/google";
import { SiteHeader } from "~/components/main/site-header";
import { SiteFooter } from "~/components/main/site-footer";
import { SiteConfig } from "~/config/site-config";
import Head from "next/head";
import { cn } from "~/lib/utils";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata = {
	title: SiteConfig.sitetitle,
	description: SiteConfig.sitedescription,
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<html lang="en" suppressHydrationWarning>
			<body>
				<Head>{children}</Head>
				<SiteHeader />
				<div className="mx-auto">{children}</div>
				<SiteFooter />
				</body>
			</html>
		</>
	);
}
