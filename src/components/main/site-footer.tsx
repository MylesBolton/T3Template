import "~/styles/globals.css";
import Link from "next/link";
import Image from "next/image";
import { SiteConfig } from "~/config/site-config";
import { SocialNav } from "../nav/social-nav";
import { NavConfig } from "~/config/nav-config";
import { FooterSocial } from "../widgets/footer-social";
import { FooterLinks } from "../widgets/footer-external";
import { FooterContact } from "../widgets/footer-contact";

export function SiteFooter() {
	return (
		<footer className="w-fill bottom-0 border-b bg-background py-5">
			<div className="container grid grid-cols-1 content-center items-start text-center md:grid-cols-3 space-x-5 space-y-5">
				<div className="flex flex-col items-center md:col-span-3">
					<Link href="/">
						<div className="w-auto items-center flex col-span-2">
							<Image src="/favicon.ico" width="32" height="32" alt="Tmp" />
							<h1>{SiteConfig.sitetitle}</h1>
						</div>
					</Link>
				</div>
				<div className="md:col-start-1">
					<FooterContact />
				</div>
				<div className="md:col-start-2">
					<FooterLinks items={NavConfig.rightnav} />
				</div>
				<div className="md:col-start-3">
					<FooterSocial />
				</div>
			</div>
		</footer>
	);
}
