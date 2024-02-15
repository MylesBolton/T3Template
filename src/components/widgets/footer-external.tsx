interface FooterLink {
    href: string;
    title: string;
}

export function FooterLinks({ items }: { items: FooterLink[] }) {
    return (
        <>
            <h2>External Links</h2>
            {items.map((item, index) => (
                <a key={index} href={item.href}>
                    {item.title}
                </a>
            ))}
        </>
    );
}
