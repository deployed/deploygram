import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/system";

import axios from "axios";
import Slider from "react-slick";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const SinglePostPhoto = () => {
  const images = [
    "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
    "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
    "https://homepages.cae.wisc.edu/~ece533/images/baboon.png",
    "https://homepages.cae.wisc.edu/~ece533/images/barbara.png",
  ];

  const { id } = useParams();
  const [photosSrc, setPhotosSrc] = useState([]);

  useEffect(() => {
    axios
      .get(`https://deploygram.deployed.space/posts/${id}`)
      .then((response) => {
        setPhotosSrc(response.data.images);
      });
  }, []);

  return (
    <>
      <Slider {...settings}>
        {photosSrc.map((photosSrc, nr) => {
          return (
            <Box
              key={nr}
              component="img"
              src={photosSrc}
              sx={{ width: "625px", height: "625px" }}
            />
          );
        })}
      </Slider>
    </>
  );
};
export default SinglePostPhoto;
