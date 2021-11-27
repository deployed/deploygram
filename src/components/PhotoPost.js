
/** A simple photo component.
 * 
 * Essentially it simply wraps over `img` tag.
 * 
 * @param {*} image a link to image source.
 * @param {*} alt alternative message when there's no image.
 * @returns image view.
 */
const PhotoPost = ({ image, alt = '' }) => {
    const style = {
        objectFit: 'cover',
    };

    return (
        <img src={"https://deploygram.deployed.space/"+image.toString().substr(8,)} width="625px" height="625px" style={style} alt={alt}/>
    );
};

export default PhotoPost;
