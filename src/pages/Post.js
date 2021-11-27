import { useParams } from "react-router-dom";
import SinglePostPhoto from "../components/SinglePostPhoto";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const Post = () => {
  const params = useParams();

  console.log(params);

  return (
    <>
      <Box>
        <Stack flexDirection="row">
          <Box
            sx={{ flex: 1, aspectRatio: 1, width: "625px", height: "625px" }}
          >
            <SinglePostPhoto />
          </Box>
          <Stack width="340px">Post info, comment list ect.</Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Post;
