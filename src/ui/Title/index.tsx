import React from 'react';

type TitleProps = {
    titleText: string;
};

const Title: React.FC<TitleProps> = ({ titleText }: TitleProps) => {
    return (
        <h1 className="border-y-2 border-primary dark:border-secondary text-[14rem] xl:text-[10rem] lg:text-[8rem] md:text-[6rem] sm:text-[4rem] xs:text-[2.5rem] xxs:text-[2rem] font-bold leading-tight uppercase text-center">
            {titleText}
        </h1>
    );
};

export default Title;
