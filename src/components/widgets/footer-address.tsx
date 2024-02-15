import React from 'react';

interface FooterAddressProps {
	items: FooterAddressItem[];
}

interface FooterAddressItem {
	name: string;
	street: string;
	town: string;
	zip: string;
	country: string;
}

export function FooterAddress({ items }: FooterAddressProps) {
	return (
		<>
			<div className="py-[2%] md:col-start-1">
				<h3 className="text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
					Template Address
				</h3>
				{items.map((item, index) => (
					<p key={index} className="text-xs text-muted-foreground sm:text-sm md:text-base lg:text-lg 2xl:text-xl">
						{item.name} <br /> {item.street} <br /> {item.town} <br /> {item.zip} <br /> {item.country}
					</p>
				))}
			</div>
		</>
	);
}
