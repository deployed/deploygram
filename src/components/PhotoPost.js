
/** A simple photo component.
 * 
 * Essentially it simply wraps over `img` tag.
 * 
 * @param {*} image a link to image source.
 * @returns image view.
 */
const PhotoPost = ({ image }) => {
    const style = {
        objectFit: 'cover',
    };

    return (
        <img src={image} width="625px" height="625px" style={style}/>
    );
};

export default PhotoPost;
