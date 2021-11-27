
const PhotoPost = (image) => {
    const style = {
        objectFit: 'cover',
    };

    return (
        <img src={image.image} width="625px" height="625px" style={style}/>
    );
};

export default PhotoPost;
