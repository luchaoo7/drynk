import React from 'react'

interface QuoteProps {
    // Add any props you might need
    quote: string;
}

const Quote = ({ quote }: QuoteProps): JSX.Element => {

    return (
        <blockquote className="blockquote">{quote}</blockquote>
    );
};

export default Quote;
