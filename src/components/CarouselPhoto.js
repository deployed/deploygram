import PhotoPost from './PhotoPost';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

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
        {images.map((image, index) => {
            return (<PhotoPost image={image} key={index}></PhotoPost>);
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
            style={{ ...style, display: 'block', color: 'black', scale:'2' , left: '575px' }}
            onClick={onClick}
        />
    );
}
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', color: 'black', scale:'2', left: '25px' }}
            onClick={onClick}
        />
    );
}
