import { StyledBox } from './styles';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Story from 'components/Story/Story';

const StoriesList = ( ) => {
    let [stories, setStories] = useState([]);
    useEffect(()=>{
        axios.get('https://deploygram.deployed.space/stories').then((response) => {
            setStories(response.data);
        });
    }, []);
    return (
        <StyledBox>
            { stories.map((story, i) => {return (<Story key={i} username={ story.username } image={ story.image }/>)})}
        </StyledBox>
    );
};

export default StoriesList;
