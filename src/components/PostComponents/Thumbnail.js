import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Thumbnail.css";
import comment from "images/comments-16.png";

const Thumbnail = ({ source }) => {
  let commentCount = 16;
  let heartCount = 28;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/home/");
      }}
      className="container"
    >
      <img className="image" src={source} alt="zdjecie" loading="lazy" />
      <div className="overlay">
        ❤ {heartCount} &nbsp;&nbsp;
        <img src={comment} /> &nbsp;{commentCount}
      </div>
    </div>
  );
};
export default Thumbnail;
