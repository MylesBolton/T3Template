import { SiteConfig } from "~/config/site-config";

export default function HomePage() {
	return (
		<main className="flex flex-col items-center min-h-screen justify-center">
			<div className="container flex flex-col items-center justify-center ">
				<h1 className="text-2xl font-extrabold tracking-tight">
					{SiteConfig.sitetitle} About Page
				</h1>
				<h2>{SiteConfig.sitedescription}</h2>
			</div>
		</main>
	);
}
