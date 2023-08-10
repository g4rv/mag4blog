import React from 'react';

type TitleProps = {
    titleText: string;
};

const Title = ({ titleText }: TitleProps) => {
    return (
        <h1 className="border-y-2 text-[14rem] xl:text-[10rem] lg:text-[8rem] md:text-[6rem] font-bold leading-tight uppercase text-center">
            {titleText}
        </h1>
    );
};

export default Title;
