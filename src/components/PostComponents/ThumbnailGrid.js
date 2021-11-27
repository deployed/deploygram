import { ImageList, ImageListItem } from "@mui/material";
import axios from "axios";
import Thumbnail from "components/PostComponents/Thumbnail";
import { useEffect, useState } from "react";

const ThumbnailGrid = ({ id }) => {
  const [arrayOfPosts, setArrayOfPosts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://deploygram.deployed.space/posts`)
      .then((res) => {
        setArrayOfPosts(
          res.data.filter((post) => {
            return post.userId === id;
          })
        );
      })
      .catch(console.log);
  }, []);

  return (
    <ImageList sx={{ width: "100%" }} cols={3}>
      {arrayOfPosts.map((v) => {
        return (
          <ImageListItem key={v.id} sx={{ padding: 0.8 }}>
            <Thumbnail
              source={v.images[0]}
              likes={v.likes.length}
              comments={v.comments.length}
              id={v.id}
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
};
export default ThumbnailGrid;
