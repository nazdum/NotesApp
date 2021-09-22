const LogOut = ({ setUserData }) => {


    const logout = () => {
        setUserData({
            name: '',
            token: ''
        });
        window.localStorage.removeItem('PersonalAccessToken');
        window.localStorage.removeItem('RealNameOfUser');
    }

    return (
        <button onClick={logout}>Cerrar sesión</button>
    );

}

export default LogOut;