import React, { CSSProperties } from 'react'

interface PostImageProps {
    // Add any props you might need
    image_path: string;
    caption?: string;
    style?: CSSProperties;
    className?: string;
}


const PostImage = ({ image_path, caption, style, className }: PostImageProps): JSX.Element => {

    return (
        <div className="text-center">
            <img style={style} className={`img-fluid ${className}`} src={image_path} alt="..." />
            { caption ?  <span className="caption text-muted">{caption}</span> : null }
        </div>
    );
};

export default PostImage;
