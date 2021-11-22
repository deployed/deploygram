import { useState, createContext, useContext } from 'react';
import LoginView from 'containers/LoginView';


type UserData = { 
    user: string;
    bio: string;
}

type UserContextType = {
    user: UserData | null;
    saveUser: (data: UserData) => void;
} | null;

export const UserContext = createContext<UserContextType>(null);

export const useUserContext = () => {
    const ctx = useContext(UserContext);
    if(!ctx){
      throw new Error('Cannot use the user context outside of the UserContext Provider');
    }
    return ctx;
};

const AuthorizationWrapper: React.FC = ({children}) => {
    const dataFromStorage = localStorage.getItem('user');
    const initialData = dataFromStorage ? JSON.parse(dataFromStorage) : '';
    const [user, setUser] = useState(initialData);
    const saveUser = (userData: UserData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    }
    const ctxValue = { user, saveUser };

    return (
        <UserContext.Provider value={ctxValue}>
            {user ? children : <LoginView /> }
        </UserContext.Provider>
    );
}

export default AuthorizationWrapper
