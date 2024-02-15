import "~/styles/globals.css";
import { SiteConfig } from "~/config/site-config";
import { TopNav } from "../nav/top-nav";
import { NavConfig } from "~/config/nav-config";
import { SocialNav } from "../nav/social-nav";
import Link from "next/link";
import Image from "next/image";
import { SideNav } from "../nav/side-nav";

export function SiteHeader() {
	return (
		<header className="sticky top-0 w-full border-b bg-background">
			<div className="container flex flex-1 pb-2 pt-2">
			<div className="flex w-auto items-center md:hidden">
					<SideNav items={NavConfig.sidenav} />
				</div>
				<div className="hidden w-auto items-centerflex px-5 md:flex">
					<Link href="/">
						<div className="w-auto items-center flex col-span-2 space-x-1">
							<Image src="/favicon.ico" width="32" height="32" alt="Tmp" />
							<h1>{SiteConfig.sitetitle}</h1>
						</div>
					</Link>
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
