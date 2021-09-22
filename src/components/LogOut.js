const LogOut = ({ setUserData }) => {


    const logout = () => {
        setUserData({
            name: '',
            token: ''
        });
        window.localStorage.removeItem('PersonalAccessToken');
    }

    return (
        <button onClick={logout}>Cerrar sesión</button>
    );

}

export default LogOut;