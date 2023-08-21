import React from "react";

type TitleProps = {
	titleText: string;
};

const Title: React.FC<TitleProps> = ({ titleText }: TitleProps) => {
	return (
		<h1 className="xs:text-[2.5rem] xxs:text-[2rem] border-y-2 border-primary text-center text-[14rem] font-bold uppercase leading-tight dark:border-secondary sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem]">
			{titleText}
		</h1>
	);
};

export default Title;
