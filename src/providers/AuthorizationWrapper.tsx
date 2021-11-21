import { useState, createContext, useContext } from 'react';
import LoginView from 'containers/LoginView';


type UserContextType = {
    user: string | null;
    saveUser: (username: string) => void;
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
    const [user, setUser] = useState(localStorage.getItem('user'))
    const saveUser = (username: string) => {
        setUser(username);
        localStorage.setItem('user', username);
    }
    const ctxValue = { user, saveUser };

    return (
        <UserContext.Provider value={ctxValue}>
            {user ? children : <LoginView /> }
        </UserContext.Provider>
    );
}

export default AuthorizationWrapper
