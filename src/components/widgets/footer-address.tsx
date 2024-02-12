/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export function FooterAdress({ items }) {
	return (
		<>
			<div className="py-[2%] md:col-start-1">
				<h3 className="text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
					Template Address
				</h3>
				<p className="text-xs text-muted-foreground sm:text-sm md:text-base lg:text-lg 2xl:text-xl">
					{items.name} <br /> {items.street} <br /> {items.town} <br />{" "}
					{items.zip} <br /> {items.country}
				</p>
			</div>
		</>
	);
}
