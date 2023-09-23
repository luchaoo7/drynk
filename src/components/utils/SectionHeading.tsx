import React, { CSSProperties } from 'react'

interface SectionHeadingProps {
    // Add any props you might need
    heading: string;
    style?: CSSProperties | undefined;
}

const SectionHeading = ({ heading, style }: SectionHeadingProps): JSX.Element => {

    return (
        <h2 style={style} className="section-heading">{heading}</h2>
    );
};

export default SectionHeading;
