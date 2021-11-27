import Stack from '@mui/material/Stack';
import PostPreviewTimeline from 'components/PostPreviewTimeline'
import { useEffect, useState } from 'react';

const Home = () => {
  const [profileData, setProfileData] = useState(null);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch('https://deploygram.deployed.space/posts')
      .then(res => res.json())
      .then((res) => {
        setPosts(res);
      });
  }, [])

  return (
    <Stack direction="row" spacing={2}>
      <Stack flex={1}>
        Timeline
        {posts == null ? null : posts.map((item, i) => {
          return <PostPreviewTimeline username={item.userId} images={item.images} key={i} />
        })}

      </Stack>
      <Stack width="300px">
        Sidebar
      </Stack>
    </Stack>
  );
};

export default Home;
