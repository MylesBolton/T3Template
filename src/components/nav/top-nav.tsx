"use client";
import "~/styles/globals.css";
import {
	navigationMenuTriggerStyle,
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuContent,
	NavigationMenuTrigger,
	NavigationMenuLink,
	NavigationMenuIndicator,
	NavigationMenuViewport,
} from "../ui/navigation-menu";
import { SiteConfig } from "~/config/site-config";
import { NavConfig } from "~/config/nav-config";
import * as React from "react";
import Link from "next/link";

export function TopNav({ items }) {
	return (
		<>
			<NavigationMenu>
				<NavigationMenuList>
					{items.map((item, index) => (
						<Link key={index} href={item.href} legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								{item.title}
							</NavigationMenuLink>
						</Link>
					))}
				</NavigationMenuList>
			</NavigationMenu>
		</>
	);
}
