import React, {useRef} from 'react'

const ImageTogglerOnMouseOver = ({alt, primaryImage, secundaryImage }) => {

    const imageRef = useRef(null);

    return(
        <img
            onMouseOver={() => {
                imageRef.current.src= secundaryImage;
            }}
            onMouseOut={() => {
                imageRef.current.src= primaryImage;
            }}
            src={primaryImage}
            className="thumbnail"
            alt={alt}
            ref={imageRef}
        />
    );

};

export default ImageTogglerOnMouseOver;