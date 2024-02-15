import Link from "next/link";

export function FooterFeed({}) {
	return (
		<>
			<h3 className="align-text-top">Blog Posts</h3>
			<Link className="text-muted-foreground" href="">
				<p className="align-text-top text-muted-foreground">
					--- Template ---
				</p>
			</Link>
		</>
	);
}
