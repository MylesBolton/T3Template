import "~/styles/globals.css";
import { TopNav } from "../nav/top-nav";
import { NavConfig } from "~/config/nav-config";
import { SocialNav } from "../nav/social-nav";
import { SideNav } from "../nav/side-nav";
import { TitleWidget } from "../widgets/title";

export function SiteHeader() {
	return (
		<header className="sticky top-0 w-full border-b bg-background">
			<div className="container flex flex-1 pb-2 pt-2">
			<div className="flex w-auto items-center md:hidden">
					<SideNav items={NavConfig.sidenav} items2={NavConfig.rightnav} items3={NavConfig.sociallinks}/>
				</div>
				<div className="hidden w-auto items-centerflex px-5 md:flex">
					<TitleWidget />
				</div>
				<div className="hidden w-auto items-center md:flex">
					<TopNav items={NavConfig.homenav} />
				</div>
				<div className="hidden w-auto items-center md:flex">
					<TopNav items={NavConfig.leftnav} />
				</div>
				<div className="flex flex-1 items-center justify-end">
					<div className="hidden w-auto items-center md:flex">
						<TopNav items={NavConfig.rightnav} />
					</div>
					<div className="w-auto items-center">
						<SocialNav items={NavConfig.sociallinks} />
					</div>
				</div>
			</div>
		</header>
	);
}
