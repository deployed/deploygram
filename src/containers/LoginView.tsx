import { useState, ChangeEventHandler, FormEventHandler } from 'react';
import { useUserContext } from 'providers/AuthorizationWrapper';

const LoginView = () => {
    const [username, setUsername] = useState<string>('');
    const { saveUser } = useUserContext();

    const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => setUsername(e.target.value);
    const onSubmitHandler: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        saveUser(username);
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="username">Enter your username</label>
                <input 
                    name="username"  
                    type="text" 
                    value={username} 
                    onChange={onChangeHandler}
                />
            </form>
        </div>
    )
}

export default LoginView
