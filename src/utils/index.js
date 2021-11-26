export const getUserId = () => {
    const serializedUser = localStorage.getItem('user');
    const user = JSON.parse(serializedUser);

    return user?.id;
};
