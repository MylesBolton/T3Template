"use client";
import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetHeader,
} from "../ui/sheet";
import Icon from "../backend/icon";
import * as React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { TitleWidget } from "../widgets/title";

interface SideNavItem {
	href: string;
	title: string;
  }
  
  interface SideNavProps {
	items: SideNavItem[];
  }

export function SideNav({ items }: SideNavProps) {
	const [open, setOpen] = React.useState(false);
	return (
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger asChild>
					<Button variant="ghost">
						<Icon name="menu" />
						<span className="sr-only">Menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left" className="items-center">
					<SheetHeader>
						<TitleWidget />
					</SheetHeader>
					<div className="py-10">
						{items.map((item, index) => (
							<Link key={index} href={item.href}>
								{item.title}
							</Link>
						))}
					</div>
				</SheetContent>
			</Sheet>
	);
}
