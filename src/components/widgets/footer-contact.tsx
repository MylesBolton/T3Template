import { SiteConfig } from "~/config/site-config";

export function FooterContact({}) {
	return (
		<>
			<h2 className="text-base">Contact info</h2>
			<div>
				<a href={`mailto:${SiteConfig.email}`}>{SiteConfig.email}</a>
			</div>
			<div>
				<a className="row-start-3" href={`tel:${SiteConfig.phone}`}>
					{SiteConfig.phone}
				</a>
			</div>
		</>
	);
}
