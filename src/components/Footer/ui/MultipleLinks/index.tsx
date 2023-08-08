
'use client'
import React, { FC } from "react";
type MultipleLinksProps = {
    links: string[]
}
const MultipleLinks: FC<MultipleLinksProps> = ({ links }) => {
    const openMultipleLinks = () => {
        // links.forEach((link: string) => {
            window.open('https://github.com/maximqu', '_blank');
            window.open('https://github.com/g4rv', '_blank');
        // });
    };

    return (
        <div onClick={openMultipleLinks}>
            Githubs
        </div>
    );
};
export default MultipleLinks;
