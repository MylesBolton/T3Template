import { NavConfig } from "~/config/nav-config";
import { SocialNav } from "../nav/social-nav";

export function FooterSocial() {
	return (
		<div>
			<h2>Social Links</h2>
			<SocialNav items={NavConfig.sociallinks} />
		</div>
	);
}
