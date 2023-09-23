import React from 'react'

interface SmallHeadingProps {
    // Add any props you might need
    heading: string;
}

const SmallHeading = ({ heading }: SmallHeadingProps): JSX.Element => {

    return (
        <h4 className="">{heading}</h4>
    );
};

export default SmallHeading;
