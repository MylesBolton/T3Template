"use client";
import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetHeader,
	SheetClose,
} from "../ui/sheet";
import Icon from "../backend/icon";
import * as React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { TitleWidgetSide } from "../widgets/title";
import { ScrollArea } from "../ui/scroll-area";

interface SideNavItem {
	href: string;
	title: string;
}

interface SideNavProps {
	items: SideNavItem[];
	items2: SideNavItem[];
	items3: SideNavItem[];
}

export function SideNav({ items, items2, items3 }: SideNavProps) {
	const [open, setOpen] = React.useState(false);
	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button variant="ghost">
					<Icon name="menu" />
					<span className="sr-only">Menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent side="left">
				<SheetHeader>
					<TitleWidgetSide />
				</SheetHeader>
				<ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-5 pl-5">
					<div className="py-5 flex flex-col space-y-2">
						<h1 className="font-bold">Main Links</h1>
						{items.map((item, index) => (
							<SheetClose key={index} asChild>
								<Link href={item.href}>{item.title}</Link>
							</SheetClose>
						))}
					</div>
					<div className="py-5 flex flex-col space-y-2">
						<h1 className="font-bold">External Links</h1>
						{items2.map((item2, index2) => (
							<SheetClose key={index2} asChild>
								<Link
									href={item2.href}
									rel="noopener noreferrer"
									target="_blank"
								>
									{item2.title}
								</Link>
							</SheetClose>
						))}
					</div>
					<div className="py-5 flex flex-col space-y-2">
						<h1 className="font-bold">Social Links</h1>
						{items3.map((item3, index3) => (
							<SheetClose key={index3} asChild>
								<Link
									href={item3.href}
									rel="noopener noreferrer"
									target="_blank"
								>
									{item3.title}
								</Link>
							</SheetClose>
						))}
					</div>
				</ScrollArea>
			</SheetContent>
		</Sheet>
	);
}
