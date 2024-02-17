import "~/styles/globals.css";
import { SiteHeader } from "~/components/main/site-header";
import { SiteFooter } from "~/components/main/site-footer";
import { SiteConfig } from "~/config/site-config";
import Head from "next/head";
import { ThemeProvider } from "~/components/backend/theme-provider";

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
				<Head>{children}</Head>
				<body>
					<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
						<SiteHeader />
						<div className="mx-auto">{children}</div>
						<SiteFooter />
					</ThemeProvider>
				</body>
			</html>
		</>
	);
}
