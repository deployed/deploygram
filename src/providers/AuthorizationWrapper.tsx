import { useState, createContext, useContext } from 'react';
import axios from 'axios';

import LoginView from 'containers/LoginView';


type UserData = { 
    nickname: string;
    bio: string;
}

type User = UserData & {
    id: string;
}

type UserContextType = {
    user: User | null;
    saveUser: (data: UserData) => void;
};

export const UserContext = createContext<UserContextType | null>(null);

export const useUserContext = (): UserContextType => {
    const ctx = useContext(UserContext);
    if(!ctx){
        throw new Error('Cannot use the user context outside of the UserContext Provider');
    }
    return ctx;
};

const AuthorizationWrapper: React.FC = ({ children }) => {
    const dataFromStorage = localStorage.getItem('user');
    const initialData = dataFromStorage ? JSON.parse(dataFromStorage) : '';
    const [user, setUser] = useState<User | null>(initialData);

    const saveUser = async (userData: UserData): Promise<void> => {
        try {
            console.log(userData);
            const response = await axios.post<User>('https://deploygram.deployed.space/users', userData);
            console.log(response);
            setUser(response.data);
            localStorage.setItem('user', JSON.stringify(response.data));
        } catch (err) {
            setUser(null);
        }
    };

    const ctxValue = { user, saveUser };

    return (
        <UserContext.Provider value={ctxValue}>
            {user ? children : <LoginView /> }
        </UserContext.Provider>
    );
};

export default AuthorizationWrapper;
