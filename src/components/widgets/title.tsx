import Link from "next/link";
import Image from "next/image";
import { SiteConfig } from "~/config/site-config";

export function TitleWidget() {
	return (
<Link href="/">
<div className="w-auto items-center flex col-span-2 space-x-1">
    <Image src="/favicon.ico" width="32" height="32" alt="Tmp" />
    <h1>{SiteConfig.sitetitle}</h1>
</div>
</Link>
    )
}