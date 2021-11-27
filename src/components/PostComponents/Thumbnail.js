import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Thumbnail.css";
import comment from "images/comments-16.png";

const Thumbnail = ({ source, likes, comments, id }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/posts/${id}`);
      }}
      className="container"
    >
      <img className="image" src={source} alt="zdjecie" loading="lazy" />
      <div className="overlay">
        ❤ {likes} &nbsp;&nbsp;
        <img src={comment} /> &nbsp;{comments}
      </div>
    </div>
  );
};
export default Thumbnail;
