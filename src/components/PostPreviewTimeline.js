import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { borders } from '@mui/system';
import { spacing } from '@mui/system';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PostInfo from 'components/PostInfo';
import PhotoPost from 'components/PhotoPost';
import { useEffect, useState } from 'react';

const PostPreviewTimeline = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const [username, setUsername] = useState(null);

  useEffect(() => {
    fetch('https://deploygram.deployed.space/users/'+ props.username)
      .then(res => res.json())
      .then((res) => {
        setUsername(res.nickname)
      });
  }, [])

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', left: '600px' }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', left: '2px', zIndex: '1'}}
        onClick={onClick}
      />
    );
  }

  return (
    <Box sx={{ border: 1, borderColor: 'grey.500', width:'625px', margin: '10px'}}>
    <Stack sx={{flexDirection: 'row', alignItems: 'center', padding: '0.5rem' }} >
      <Avatar alt="User" src="/static/images/avatar/1.jpg" />
      <Box sx={{ marginLeft: '0.5rem' }}>
        {username}
      </Box>
    </Stack>
    <Box>
        <Slider {...settings}>
        {props.images.map((item)=>{
            return <PhotoPost image={item} key={item.key} />
        })}
      </Slider>
    </Box>
  </Box>
  );
};

  

export default PostPreviewTimeline;
