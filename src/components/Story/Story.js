import { StyledStack, StyledAvatar, StyledTypography } from './styles';

const Story = ( { image, username } ) => {
    if (username?.length >= 10)
    {
        username = username.substring(0, 8) + '...';
    }

    return (
        <StyledStack>
            <StyledAvatar alt="image" src={ image } ></StyledAvatar>
            <StyledTypography>{ username }</StyledTypography>
        </StyledStack>
    );
};

export default Story;
