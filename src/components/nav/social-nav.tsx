/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import Icon from "../backend/icon";

interface SocialNavItem {
  href: string;
  icon: any;
  title: string;
}

interface SocialNavProps {
  items: SocialNavItem[];
}

export function SocialNav({ items }: SocialNavProps) {
  return (
    <>
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
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
            <span className="sr-only">{item.title}</span>
          </div>
        </Link>
      ))}
    </>
  );
}
