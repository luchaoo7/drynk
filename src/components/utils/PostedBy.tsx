import React from 'react'

interface PostedByProps {
    // Add any props you might need
    by: string;
    month: string;
    day: string;
    year: string;
}

const PostedBy = ({ by, month, day, year }: PostedByProps): JSX.Element => {

    return (
        <p className="post-meta"> Posted by <a href="#!">{by}</a> on {month} {day}, {year} </p>
    );
};

export default PostedBy;
