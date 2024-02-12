import Link from "next/link";

export function FooterFeed({}) {
	return (
		<>
			<h3 className="align-text-top text-base">Blog Posts</h3>
			<Link className="text-xs text-muted-foreground" href="">
				<p className="align-text-top text-xs text-muted-foreground">
					--- Template ---
				</p>
			</Link>
		</>
	);
}
