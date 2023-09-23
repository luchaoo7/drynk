import React from 'react'

interface SmallerHeadingProps {
    // Add any props you might need
    heading: string;
}

const SmallerHeading = ({ heading }: SmallerHeadingProps): JSX.Element => {

    return (
        <h6 className="">{heading}</h6>
    );
};

export default SmallerHeading;
