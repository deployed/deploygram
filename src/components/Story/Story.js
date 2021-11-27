import { StyledStack, StyledAvatar, StyledP} from './styles';

const Story = ( { image, username } ) => {
    if (username.length >= 10)
    {
        username = username.substring(0, 8) + '...';
    }

    return (
        <StyledStack>
            <StyledAvatar alt="image" src={ image } ></StyledAvatar>
            <StyledP>{ username }</StyledP>
        </StyledStack>
    );
};

export default Story;
