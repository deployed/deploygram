import axios from "axios";
import ThumbnailGrid from "components/PostComponents/ThumbnailGrid";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const params = useParams();
  const [userId, setUserId] = useState(false);
  useEffect(() => {
    axios
      .get(`https://deploygram.deployed.space/posts/${params.id}`)
      .then((res) => {
        setUserId(res.data.userId);
      });
  }, []);

  return <div>Post page {userId ? <ThumbnailGrid id={userId} /> : ""}</div>;

};

export default Post;
