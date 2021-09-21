
import { useState } from 'react'

import './styles.css'

const LoginForm = () => {

    const [loginState, setLoginState] = useState({
        username: '',
        password: ''
    });

    const { username, password } = loginState;

    const handleChange = ({ target }) => {
        setLoginState({
            ...loginState,
            [target.name] : target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(loginState);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div>
                <input type="text" value={username} name="username" onChange={handleChange} placeholder="nombre de usuario" />
            </div>

            <div>
                <input type="password" value={password} name="password" onChange={handleChange} placeholder="contraseña" />
            </div>

            <div id='login-button-container'>
                <button type="submit">Login</button>
            </div>

        </form>
    );

}

export default LoginForm;