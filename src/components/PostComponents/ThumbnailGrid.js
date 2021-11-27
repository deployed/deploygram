import { ImageList, ImageListItem } from "@mui/material";
import Thumbnail from "components/PostComponents/Thumbnail";
import image from "images/Windows.JPG";

const ThumbnailGrid = () => {
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <ImageList sx={{ width: "100%" }} cols={3}>
      {array.map((v) => {
        return (
          <ImageListItem key={v} sx={{ padding: 0.8 }}>
            <Thumbnail source={image} />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
};
export default ThumbnailGrid;
