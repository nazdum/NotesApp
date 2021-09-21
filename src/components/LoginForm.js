
import { useState } from 'react'

import './styles.css'

const axios = require('axios');

const LoginForm = () => {

    const [loginState, setLoginState] = useState({
        username: '',
        password: ''
    });

    const { username, password } = loginState;

    const handleChange = ({ target }) => {
        setLoginState({
            ...loginState,
            [target.name]: target.value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { data } = await axios.post('http://localhost:3001/user/login', { username, password });
        setLoginState({ username: '', password: '' });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div>
                <input type="text" value={username} name="username" onChange={handleChange} placeholder="nombre de usuario" required />
            </div>

            <div>
                <input type="password" value={password} name="password" onChange={handleChange} placeholder="contraseña" required />
            </div>

            <div id='login-button-container'>
                <button type="submit">Login</button>
            </div>

        </form>
    );

}

export default LoginForm;