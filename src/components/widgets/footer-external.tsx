import { NavConfig } from "~/config/nav-config";
import { SocialNav } from "../nav/social-nav";

export function FooterLinks({ items }) {
	return (
		<>
			<h2>External Links</h2>
			{items.map((item, index) => (
				<a key={index} href={item.href}>
					{item.title}
				</a>
			))}
		</>
	);
}
