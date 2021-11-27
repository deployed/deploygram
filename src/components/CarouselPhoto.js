import PhotoPost from './PhotoPost';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

/** A carousel photo component.
 * 
 * Example of usage:
 * ```
 *  <CarouselPhoto images={['https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
 *      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
 *      'https://im0-tub-ru.yandex.net/i?id=84dbd50839c3d640ebfc0de20994c30d&n=27&h=480&w=480']}>
 *  </CarouselPhoto>
 * ```
 * 
 * @param {*} images Array of link to image sources.
 * @returns carousel view.      
 */
const CarouselPhoto = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <SamplePrevArrow/>,
        nextArrow: <SampleNextArrow/>,
    };

    const style = {
        width: '625px',
        height: '100%'
    };

    return (<Slider {...settings} style={style}>
        {images.map((image) => {
            return (<PhotoPost image={image} key={image} />);
        })
        }
    </Slider>
    );
};

export default CarouselPhoto;


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', color: 'black', scale:'2' , left: '575px', zIndex:'2' }}
            onClick={onClick}
        />
    );
}
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', color: 'black', scale:'2', left: '25px',  zIndex:'2' }}
            onClick={onClick}
        />
    );
}
