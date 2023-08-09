import React from 'react';

type TitleProps = {
    titleText: string;
};
const Title = ({ titleText }: TitleProps) => {
    return (
        <h1 className="border-y-2 text-[14rem] font-bold leading-tight uppercase text-center">
            {titleText}
        </h1>
    );
};

export default Title;
