import "~/styles/globals.css";
import { NavConfig } from "~/config/nav-config";
import { FooterSocial } from "../widgets/footer-social";
import { FooterLinks } from "../widgets/footer-external";
import { FooterContact } from "../widgets/footer-contact";
import { TitleWidget } from "../widgets/title";

export function SiteFooter() {
	return (
		<footer className="w-fill bottom-0 border-b bg-background py-5">
			<div className="container grid grid-cols-1 content-center items-start text-center md:grid-cols-3 space-x-5 space-y-5">
				<div className="flex flex-col items-center md:col-span-3">
					<TitleWidget />
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
