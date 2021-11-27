export const getUserId = () => {
    const serializedUser = localStorage.getItem('user');
    const user = JSON.parse(serializedUser);

    return user?.id;
};

export const likesCount = (posts) => {
    let likes = 0;
    posts.forEach((post) => {
        likes += post.likes.length;
    })
    return likes;
};
