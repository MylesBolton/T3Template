import Link from "next/link";
import { buttonVariants } from "../ui/button";
import Icon from "../backend/icon";

export function SocialNav({ items }) {
	return (
		<>
			{items.map((item, index) => (
				<Link
					key={index as number}
					href={item.href as string}
					target="_blank"
					rel="noreferrer"
				>
					<div
						className={buttonVariants({
							size: "icon",
							variant: "ghost",
						})}
					>
						<Icon name={item.icon} />
						<span className="sr-only">{item.title as string}</span>
					</div>
				</Link>
			))}
		</>
	);
}
