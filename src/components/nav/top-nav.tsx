"use client";
import "~/styles/globals.css";
import * as React from "react";
import Link from "next/link";
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

interface MenuItem {
    href: string;
    title: string;
}

interface TopNavProps {
    items: MenuItem[];
}

export function TopNav({ items }: TopNavProps) {
    return (
		<>
        <NavigationMenu>
            <NavigationMenuList>
                {items.map((item) => (
                    <Link key={item.href} href={item.href} legacyBehavior passHref>
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
